import Matches from "./matchModel.js";
import MobileView from "./viewModel.js";
import MatchOrder from "./matchOrder.js";
import { createCanvas, loadImage } from "canvas";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import sharp from "sharp";
import fs from "fs";

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create match
const createMatch = async (req, res) => {
  const {
    sport_type,
    league_type,
    match_title,
    match_time,
    status,
    fixture_id,
    hot_match,
    team_one,
    team_two,
    streaming_source,
    thumbnail,
  } = req.body;
  if (
    sport_type &&
    league_type &&
    match_time &&
    status &&
    match_title &&
    team_one &&
    team_two &&
    streaming_source
  ) {
    try {
      //console.log(match_time);
      const maxOrderMatch = await Matches.findOne()
        .sort({ order: -1 })
        .limit(1);
      const newOrder = maxOrderMatch ? maxOrderMatch.order + 1 : 1;

      const newMatch = new Matches({
        sport_type: sport_type,
        match_time: match_time,
        status: status,
        league_type: league_type,
        match_title: match_title,
        fixture_id: fixture_id,
        hot_match: hot_match,
        team_one: team_one,
        team_two: team_two,
        streaming_source: streaming_source,
        order: newOrder,
        thumbnail: thumbnail,
      });
      const match = await newMatch.save();

      res.status(200).json({
        success: true,
        message: "Match created successfully",
        match,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        success: false,
        mesaage: `${error?.message}`,
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "Please fill empty fields",
    });
  }
};

// Get paginated matches
const getMatches = async (req, res) => {
  // const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  // const skip = (page - 1) * perPage;
  const searchQuery = req.query.search || "";

  try {
    const view = await MobileView.findOne();
    let query = {};
    if (req.query.search) {
      query.league_type = { $regex: searchQuery, $options: "i" };
    }

    // Count the total number of matches based on the query
    const totalCount = await Matches.countDocuments(query);
    // Fetch the paginated matches based on the query, sorting by league_type
    const matches = await Matches.find(query)
      .sort({ league_type: 1 })
      // .skip(skip)
      .limit(perPage);

    const totalPages = Math.ceil(totalCount / perPage);

    res.status(200).json({
      success: true,
      message: "Matches",
      mobile_view: view.mobile_view,
      totalPages,
      paginatedMatches: matches,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get match by ID
const getMatchById = async (req, res) => {
  const { id } = req.params;
  try {
    const match = await Matches.findById(id);

    res.status(200).json({
      success: true,
      message: "Single match",
      match,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      mesaage: `${error?.message}`,
    });
  }
};

// Get paginated matches for mobile
const getMobileMatches = async (req, res) => {
  // Fixed number of items per page for mobile
  const perPage = 10;
  const page = parseInt(req.query.page) || 1;
  const searchQuery = req.query.search || "";

  try {
    const view = await MobileView.findOne();
    let query = {};
    if (searchQuery) {
      query.league_type = { $regex: searchQuery, $options: "i" };
    }

    // Count the total number of matches based on the query
    const totalCount = await Matches.countDocuments(query);

    // Fetch the paginated matches based on the query, sorting by league_type
    const matches = await Matches.find(query)
      .sort({ league_type: 1 })
      .skip((page - 1) * perPage)
      .limit(perPage);

    const hasMore = totalCount > page * perPage;

    res.status(200).json({
      success: true,
      message: "Mobile Matches",
      mobile_view: view.mobile_view,
      matches,
      hasMore,
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a match
const updateMatch = async (req, res) => {
  const { id } = req.params;
  const {
    sport_type,
    league_type,
    match_title,
    match_time,
    status,
    fixture_id,
    hot_match,
    team_one,
    team_two,
    streaming_source,
  } = req.body;
  if (id) {
    if (
      sport_type ||
      league_type ||
      match_time ||
      status ||
      match_title ||
      team_one ||
      team_two ||
      streaming_source ||
      fixture_id ||
      hot_match
    ) {
      try {
        await Matches.findByIdAndUpdate(id, {
          sport_type: sport_type,
          match_time: match_time,
          status: status,
          league_type: league_type,
          match_title: match_title,
          fixture_id: fixture_id,
          hot_match: hot_match,
          team_one: team_one,
          team_two: team_two,
          streaming_source: streaming_source,
        });
        res.status(200).json({
          success: true,
          message: "Match Updated Successfully",
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: `${error?.message}`,
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "Please enter field you need to update",
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "Something wents wrong",
    });
  }
};

// Delete match by ID
const deleteMatchById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await Matches.findByIdAndDelete({ _id: id });
      await normalizeOrders();
      res.status(200).json({
        success: true,
        message: "Match deleted successfully",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "You are not able to delete this",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error?.message}`,
    });
  }
};

// Duplicate a match
const duplicateMatchById = async (req, res) => {
  const { id } = req.params;
  try {
    const originalMatch = await Matches.findById(id);

    if (!originalMatch) {
      return res.status(404).json({
        success: false,
        message: "Match not found",
      });
    }

    const maxOrderMatch = await Matches.findOne().sort({ order: -1 }).limit(1);
    const newOrder = maxOrderMatch ? maxOrderMatch.order + 1 : 1;

    const newMatch = new Matches({
      sport_type: originalMatch.sport_type,
      league_type: originalMatch.league_type,
      match_title: originalMatch.match_title,
      match_time: originalMatch.match_time,
      status: originalMatch.status,
      fixture_id: originalMatch.fixture_id,
      hot_match: originalMatch.hot_match,
      team_one: originalMatch.team_one,
      team_two: originalMatch.team_two,
      order: newOrder,
      streaming_source: originalMatch.streaming_source,
      thumbnail: originalMatch.thumbnail,
    });

    // Save the new match to the database
    const savedMatch = await newMatch.save();

    res.status(200).json({
      success: true,
      message: "Match duplicated successfully",
      duplicatedMatch: savedMatch,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Create / View Mobile view
const CreateOrUpdateMobileView = async (req, res) => {
  const { mobile_view } = req.body;
  try {
    let view = await MobileView.findOne();

    if (!view) {
      view = new MobileView({ mobile_view: mobile_view });
      await view.save();
    } else {
      view.mobile_view = mobile_view;
      await view.save();
    }
    res.status(200).json({ success: true, data: mobile_view });
  } catch (err) {
    console.error("Error creating or updating mobile view:", err);
    res.status(500).json({ success: false, err: "Server error" });
  }
};

// Get mobile view
const getMobileView = async (req, res) => {
  try {
    const view = await MobileView.findOne();
    if (!view) {
      return res
        .status(404)
        .json({ success: false, message: "Mobile view not found" });
    }
    res.status(200).json({ success: true, data: view.mobile_view });
  } catch (err) {
    console.error("Error retrieving mobile view:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Create / Update order list
const updateNumbersArray = async (req, res) => {
  try {
    const { numbers } = req.body;

    // Check if the numbers array is provided
    if (!numbers || !Array.isArray(numbers)) {
      return res.status(400).json({ error: "Invalid numbers array" });
    }

    // Find the existing document or create a new one
    const order = await MatchOrder.findOneAndUpdate(
      {},
      { numbers },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ status: true, data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// New function to normalize orders
const normalizeOrders = async () => {
  const matches = await Matches.find().sort("order");

  for (let i = 0; i < matches.length; i++) {
    matches[i].order = i + 1;
    await matches[i].save();
  }

  // Update the separate order array
  await updateMatchOrderArray();
};

// Helper function to update the separate order array
const updateMatchOrderArray = async () => {
  const matches = await Matches.find().sort("order");
  const newOrder = matches.map((match) => match.order);
  await MatchOrder.findOneAndUpdate(
    {},
    { numbers: newOrder },
    { upsert: true }
  );
};

// get matchOrder
const getMatchOrder = async (req, res) => {
  try {
    const order = await MatchOrder.findOne();
    res.status(200).json({ status: true, data: order });
  } catch (err) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

// create thumbnail
const generateThumbnail = async (req, res) => {
  try {
    const { logo1, logo2, name1, name2, time } = req.body;

    // Create a smaller canvas
    const canvas = createCanvas(300, 200);
    const ctx = canvas.getContext("2d");

    // Function to load an image from a URL
    const loadImageFromUrl = async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load image from URL: ${url}`);
      }
      const buffer = await response.arrayBuffer();
      return loadImage(Buffer.from(buffer));
    };

    // Set background
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Load and draw both team logos
    const team1Logo = await loadImageFromUrl(logo1);
    const team2Logo = await loadImageFromUrl(logo2);

    // Adjust the positions and sizes of the logos for the smaller canvas
    ctx.drawImage(team1Logo, 15, 30, 100, 100);
    ctx.drawImage(team2Logo, 185, 30, 100, 100);

    // Add team names below the logos, centered under the logos
    ctx.fillStyle = "#333333";
    ctx.font = "bold 14px Arial";
    ctx.textAlign = "center";
    ctx.fillText(name1, 65, 150); // Below logo1
    ctx.fillText(name2, 235, 150); // Below logo2

    // Load the VS image from the file system and convert it to base64
    const vsImagePath = path.join(__dirname, "../client/src/assets/vs.png");
    const vsImageBase64 = fs.readFileSync(vsImagePath, "base64");

    // Load the VS image from the base64 string
    const vsImage = await loadImage(`data:image/png;base64,${vsImageBase64}`);

    // Draw the VS image on the canvas
    ctx.drawImage(vsImage, 130, 75, 40, 35);

    // Add the time below everything, centered
    ctx.font = "bold 12px Arial";
    ctx.fillText(time, canvas.width / 2, 185);

    // Convert canvas to buffer
    const buffer = canvas.toBuffer("image/png");

    // Use sharp to compress the image
    const compressedBuffer = await sharp(buffer)
      .png({ quality: 80 })
      .toBuffer();

    // Convert compressed buffer to base64
    const base64 = compressedBuffer.toString("base64");
    const dataUrl = `data:image/png;base64,${base64}`;

    // Check if the dataUrl is too large (e.g., over 5MB to be safe)
    if (dataUrl.length > 5 * 1024 * 1024) {
      throw new Error("Generated thumbnail is too large for MongoDB storage");
    }

    // Respond with the generated thumbnail data
    res.status(200).json({ status: true, thumbnail: dataUrl });
  } catch (err) {
    console.error("Error generating thumbnail:", err.message);
    res.status(500).json({ status: false, error: err.message });
  }
};

export {
  createMatch,
  getMatches,
  updateMatch,
  deleteMatchById,
  getMatchById,
  duplicateMatchById,
  CreateOrUpdateMobileView,
  getMobileView,
  updateNumbersArray,
  getMatchOrder,
  generateThumbnail,
  getMobileMatches,
};
