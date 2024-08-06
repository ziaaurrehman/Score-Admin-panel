import firebaseAdmin from "firebase-admin";
// import serviceAccount from "./blue-football-application-firebase-adminsdk-8jjza-d15f74a4f0.json" assert { type: "json" };

const firebase_key = {
  type: "service_account",
  project_id: "football-green-app",
  private_key_id: "a154ffe2fb172993ad03f170bee45fbd1e22188f",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDUTqfn74aXS1FF\nC6aGbDKFTKqLhk+tTFM1EJUsKdpYqO12uTPFQkJCJm0WGht8tJ688kzijqNJsKhg\nemGfG1jaD0udybz0IbuXv64rdj8IpK5S8dv0PySBqT27i/sCkd3zZi6qcDrP6osn\ngG9VZQ/Ff2UBBCnqS7BDxNz5DZ71kTLvq4w7FBxx8uXy7CvKvCVfrNydNIIS/v+B\n6HNLyumZg7xzQhPGAGSOvNwPSTiU4Y88clsyeTuR112WgvGpjNiwyr+ZyMqQ66c9\nvCosdlFQTyUkkwc7wWm1KPYlwoPOg3j5greBEu3rvzOhhYKEZyvqY6YUtFmSDOKq\nVixPnHRJAgMBAAECggEAB3CEKLf3fui4PdOlL7Ot54biuQXpV9jDV6ovl/8VdCLj\nQ1RFEKX8PWYsT2h1yx5nK5bQA+ZcqXHjzJGtRw6FxApiK3LMyL8/3Bbu6v33Qn3G\n0AhCnWHzDQoZrC9BCfuDjApqGzXYkb2Vx7oT7KmgblrC9tCnCVtCn3VQCvgjuFYg\nWPSW+4i/F4sggn2jfIedKeWx17KkDAQWzV6WbPM+uIrb5YWFcpYVqxanUjaHDG7a\n+nD/MZ2SEoFIyjex2rTQipiTC3ak+6O+GD7OeS7HogXjIekli+ZULlTQy8m9OLFz\n/YB9BimxKoZ9sQZLVKWfHqMpJOALIfBH7HJb0yPjIwKBgQDzDQgj77VD21+vckhs\nimcXV5W6jvJjft2I2vOn7yblzFeAsMoDhSktYU4nstLpVnJd7ij2UuaMwKjiiWYG\n09ZvVSW1XG/1PDeDZYLwSOU3fNXjvFZ3+Hqt6dklZjG7PiPsNp0H5YNAUT5G7d1Q\noH3VK64FPhh5ZxwQS6FRdiR+MwKBgQDfnk/PD0KvT3xpGTshm7rPGnGRQ1JeC6vg\n8n38Z/30jZ+r6nELR9wl0u93kSaFUCte3Zbad0J015t4JxaOJ70Sh5u3WsFKWM2V\n8IkvMEnVdXFvW2LMypBaZ2AwGk0sZX32OIEwdGjnfXJ27YN699CeHXyiOk0slcxU\nUr9NnLEPkwKBgEtqHL+Bzl26wOrgbAZ5v1knzQaw+hbTM4wWXAock5Y0HGaK9HO5\nKriw+54nx3etYhkxH7amrHC6Cu0XsvelXWD4K5Ylk3ulbpgvtDw4ch8QdhGOy8m3\n6ODzsXQATKgLtPvDSmA738jiLI+3mLc+xSySvBFWXiO1UajgvrJXFSWvAoGAaxor\nBXQ8rzS11Kyl+qHY5mq27Ck/YRXb+8CJAQRZyPCwAiomfI2tblxKH41g0sckDqq5\nHuex576Akxq9ndaAo0haF4abP12rEd6EBhrtshQvAXPWrVlzrCkJE+D1B4eQvgYw\nMiH/QKh/02BM8e+RdrmOwTCFWA5jMBv1zll3IIsCgYBdB+usnkWUkIsCpbiKYA2n\nFJ+ERVEdpUiDm8vSFPUYOpCOEpMLn5e8Ni7wv8UHuAADSB3BtEI1pj/Xi8iV4A8X\nFOl3XfDaKp/yicsotTlYi4xHgxEAc7cTRxRYg4940FhfjsaK7Kc9Sq79iWOgAfVp\nboy7rpzdyZins2TZtJH1Dw==\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-x0sat@football-green-app.iam.gserviceaccount.com",
  client_id: "113565906416645227183",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x0sat%40football-green-app.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

//const serviceAccount = JSON.parse(firebase_key);

const firebase = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebase_key),
});

export default firebase;
