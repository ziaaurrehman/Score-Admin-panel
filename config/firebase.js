import firebaseAdmin from "firebase-admin";
// import serviceAccount from "./blue-football-application-firebase-adminsdk-8jjza-d15f74a4f0.json" assert { type: "json" };

const firebase_key = {
  "type": "service_account",
  "project_id": "football-green-app",
  "private_key_id": "9f27a7d190c4d8251453552f19f8ef7a10b7d1a0",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCImBomIl2NnrEm\nPFL3brnMTZEeAqHS+74Lwb2G4RvN4UHWEkQI8tFJAJNbjVN55Eqd1zz7MJx7Q8XB\nitdfsffdiNfZ91oplbMJirl3RqlbTJe7iBwj9ZOhPUB696va3h5J1cam0KjOVGnX\nTnoDbdl/lHEly64SveHcfJ5k3z8JRM4rtr5sS6r9SEN2PcN5OJZ0d8ipsY9YxWXM\nXbEUOkNvhtFKe1xgntAm3h7yYqO8ahGSj6b1Se1q/s4Y0iRIDzaN8w8CPt/G6cOG\nLoosIlzDloZ5JI2JfKcZGbyRugYw01hoULRw3J+CVIqndNqcPQQXz9M10CMXgu0d\n47pik+7VAgMBAAECggEAA1Kh5jYVTQXkfM/gW80Jf4cOheqd+aYulhYhMGgG91/o\nrFa26XnQrgQx0XsTYgZz6zmKbfjdgaEhLSddvGH1q+GxkIeUHala2NtTTiu9oG8x\nTLpPpu9JJ1W4XRVrzI/1MCofYjz2skg65+YskStJrHEVvIvjIOkWFrlAWCdXHvhQ\nq40goMWxpB8kqTm4Yyu7cbCU/Wn1ttcZ9+wdwr4iXC8kZa/4BEjgqj0uQgR1SR9Y\nI8HLhw8v1QRpxhKeVsef6F0uXquyZ2JcGz4bkUlz6nkWgMZpfXvFxHkNOqD7Uucl\noNwSQYydLEMzZENB11Mc0VG2dtN5rfC1KSzjPM3NoQKBgQC7GTYP70hQa/qcLHs6\ng9/n5RizOCVzrXxx7IyA0HVP7/Yg09LrtTZg3LH8vp06fe/eHo6NLTmt+Jp5RoUG\nz5pUgEaSQZ9rgXfZe53N/78erR+F32BMH+6PBQwo7l6Evtr9y7uyy8xkto18MvEo\nX0EOulkKCLxqvnIEAWCheWI9NQKBgQC65ZLWkYPo3lWtVLK9fA0m7NK15p21+cGo\nMtJnUz3jq6SrCABxl6JAJELGhWPP1wE0R6fGLzMmkJTHZT8ec0incdHIsGTU4rAZ\nZSL4kToP5MQAvjszVqUi/5F/ngZJdmQEDz3+xnG0VSGjJ8Zb9H241qeYjh2N+Bh7\nS6I5HbI/IQKBgH6k5RRKKs/NF1jpPwxvwXrNdzew1KEFmIvgy4ZSFGZkjlzQJSBJ\njCJqoMvtFq5GGrxmQKXNLBLXiXB3zIm8ssFqBtrvMoLpov+CjmGnMG4KT6Elf6Bn\nqOoER6PZHf+K1N8gLdAr5RFzBDhCnzxtpbLbbnO9UBSNDs4pRIhoipfVAoGBAJaV\nyo3fiOzj1xxlFe7eOKqYPd4aBhBNP9+Js0VVKJR8A51aQSFFD5GmpbbWWulnTq0U\n3vUrqob0DyvpQ8YBFRT0/BY7KcLtMv4DIv4r5SBRLit7Gq/uq/da+5xbcq1WGpe6\nwDS7J3oo7YVL0uLcRz/alAay2tU8hF0zP23No4SBAoGAYgi5mKV4ovdDfB21dH7H\nfrbhyJiahiq5AnkG+evtyiVT1HWYn9qKe48/ouJwAzYjObG8KPrlPXY2uLkDOelm\n7AKbjdNqpNAete9hnmjTo+xQ9T2o36/p1UOGePzDm34H/0ImDI0rsdg/onoDkZA/\nPcyIfX6Ud7H+3kKx0YRJZhk=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-x0sat@football-green-app.iam.gserviceaccount.com",
  "client_id": "113565906416645227183",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x0sat%40football-green-app.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


//const serviceAccount = JSON.parse(firebase_key);

const firebase = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebase_key),
});

export default firebase;
