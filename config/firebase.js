import firebaseAdmin from "firebase-admin";
// import serviceAccount from "./blue-football-application-firebase-adminsdk-8jjza-d15f74a4f0.json" assert { type: "json" };

const firebase_key = {
  type: "service_account",
  project_id: "my-flutter-football-app",
  private_key_id: "cbf00bc31ea350001d358968ac93ca9ee2b4df9d",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCjP+pEwaVj3vWs\nrcakmb/SGiOLYdfPlr6ioCetvoTrVqSZLCQH7Mc96F68HSUYtkwnA4pTcP1mq0bG\nqOmSdDdaTQk9TzyxAhAfqFKDMLOJ9XnQNc8eETiX1qk/hGEuk4vo4I7fLX1U7Hk/\nwM4i4j8mcQq3ER+P8Fpuk2jMmbzZQNSNh6kFlp/qWgXI6+b/e1WjZcM/iKOAmPwt\nAubFj9PfUcQ66ONs34Lv52FmzHZg04ox+JVmXvWc/kjhrfcIXE0uSE2E1gnhVcEb\nsMd1phqsumLAdpExA2pUzv/1rRHJlMWwoRbnpSt0wbsL+gBQxIDhVfvgmCU49Zpc\n7zuGcZARAgMBAAECggEAEAh0dSlBmZPps/pjMoJJJRTdHdDPtbsb4PPywa0e99AM\nHWEI7uBR1yItv7LrFEi/JOvDl5tWv9Edg+BOBEy2rP8445UXJFlMBRfudqT/VRLP\nUmQegdj2Im96MttJAh6KlKYNUhzxHLiW1eyVMjbfNeLPRxh+7Y+RCiAfIE0PD5UW\ngjGUwwAT2oCZTe90sh0pmRCYXAWvM3DMpRwwPZ3VUptebr7rcFBYMa0Rzf7KuhZo\nbZgBqBSZqkWKi5Qv9MG5dKUMIVZhihDvFlSKw9BxFKI2hYvbVrTIB2Ip6OChoWHZ\nt6EkONCFuSdkZujemPA6Hry5qwSHYIdYKVKTF5T1IwKBgQDkwHi5CaKXp40kPVC7\nkQLMXmDvAWMy0MEPBLl0g8D8mn30LwdOh/kcILm2uMIz8Xzj7bjgHnTZeTiXxyN+\ne/wGB0cKJ3jRrsAU6hgZmss+FbhDvtaVAch0Rp+8QM1OTlXLOVR3lDlw06H/q5X3\n52PU8yewYw5VCo8tlpREP7frfwKBgQC2sgdm9l8bggqi9f0vdzoBHfQ092ht4L6b\nfJzWMeVQrcf6hQQoNGUyubrsATOxvrNSAc91UnvjggGtUgj86mmdvmbA2oeke24m\n4ioL2DjAG/prOKfspouIQUkV4t6/wxjU+widvJdb0rJVZ+/V0+rDABCl01I8AQet\neqhZF5eMbwKBgQCdmX2S/nBmy6kSLqxQjbe/1cYy5GHTwL9B+Z9MBvoPDuF4Om5u\nTH/0QReyK9igsN+6qS2WO2WF715uM2Tg38ri3GC1PjyfOiZcQmwYN+2O+KfbBMAS\nKQhSE9Y5fOv150J0oSrwt85bTXNvEmhgQ6skK+JMQ/K75GqAnh3IZ53vQQKBgHV0\no5moj6DJzDjU2X/osRwCu/xJi5QIx8KDLPnwfjOOZmFDn1aRyPYBvpD4fNmrdvIk\nQ9Jzwz6TWKyrbyfbNSe7P6iBVm+DA2BwSwPucR3hXvAMLrnQoShqgKhXgUncDlzv\nP6zZkJ3yKcEK34Cji+zuX8WcxOPa7aq0jwMoTcB1AoGBAIVpXz8ohF7VvWlB86kD\nLeEi1hJBKcVWXrOFXzPlyRQRmr6pcVBA15w91RWGzfNaiLZB4u5X8tttJGHxtgOg\nzGEsDWpevuyxob37/EgG0J7cMPetFFIZqyEl1s+qXwC2DIW/3+rUb9XjACtWlgeb\n1CZMHC96qv6oBPL4daaUEiEy\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-2vc6l@my-flutter-football-app.iam.gserviceaccount.com",
  client_id: "112175939678447901301",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2vc6l%40my-flutter-football-app.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

//const serviceAccount = JSON.parse(firebase_key);

const firebase = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebase_key),
});

export default firebase;
