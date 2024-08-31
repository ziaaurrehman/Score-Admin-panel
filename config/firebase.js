import firebaseAdmin from "firebase-admin";
import dotenv from 'dotenv'
dotenv.config()
// import serviceAccount from "./blue-football-application-firebase-adminsdk-8jjza-d15f74a4f0.json" assert { type: "json" };

const key = {
  "type": "service_account",
  "project_id": "football-green-app",
  "private_key_id": "9f27a7d190c4d8251453552f19f8ef7a10b7d1a0",
  "private_key": process.env.FIREBASE_KEY,
  "client_email": "firebase-adminsdk-x0sat@football-green-app.iam.gserviceaccount.com",
  "client_id": "113565906416645227183",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x0sat%40football-green-app.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


console.log(process.env.FIREBASE_KEY)
const firebase = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(key),
});

export default firebase;
