import firebaseAdmin from "firebase-admin";
// import serviceAccount from "./blue-football-application-firebase-adminsdk-8jjza-d15f74a4f0.json" assert { type: "json" };

const firebase_key = {
  type: "service_account",
  project_id: "football-green-app",
  private_key_id: "b5dde02fea4658a31c91192f7ad24dac8ad63ab7",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAkd9CQs1mckx3\nUvUE1zud+cQF0zTLmU70VoBCJNEQQdxnH3EziH3KkohgA8enQJQDUezrivDnHb8k\nfI8a9OW1COqFM8yEFo5wsr65Ah7Fwbc9Qfvv0zQ2edZXgxEo6XGf3OrKzwtQPtSl\nZPWNalwFa+nuTXN56vYpMSfWy0FxpfOfflHtXCigNl2k/FtXIk0tC1P6wntupIvM\nWtuBh06r18C6a2FFeddxFbsMwDWzz+L84HvRN5f/HRAQV5IBox8tG/msMDTfXYGx\nKcInEXP9hHmS+/vKSrAtMz4iZee8DnCW94Ohcg4X6llT0eOEGGupA6VaUspNMS7O\nmX4Pq2odAgMBAAECggEABBUjn/6VZwpdziV7WICtUiOpMPwXEV5HnaesJ5rVttaa\nnbIS3uY8z9EMT0gikQxuBuWoqZ65YuukcYQq2YYJzQJ/zFalNkNZ05BVOaFj9cqD\nVWsNyboXJYou4ziTYiQUMAY0O8aoxVOrrkemFWXaRmrRBmfByWV+lgV62X4s00QJ\nZGsR1DmvkxnjxUc1CbRXrya8/NaKBZkgqSk6o4ddADX26r+I1z4FgQfaHmMJHtH5\nhJsfvwgsKV1QJF/CQUuNqsAHucn0HCEncBV9mmQfOK0GE87Kl+xPdBolZtuEn0yl\nUIUVZZ4Um7/aKxb4OdtJ9SXvm+A25skxDMLQUlstAQKBgQDw/WhYq43K3ftUtFFT\nwnNYdgccwrWc5xg9WPkFPNNuicutmD/4r96jBO26e7TWSeAJXX87OS59lX1mWITl\ndzDoYzqvSd0zmTzYacoTQET69n1v+yWOCa6Mv0nG4gjJ5bZstogadoRQLiDWBJVC\niyrPhyTWLtlJ6IX1aKbjfhEtHQKBgQDMkGekmevCoPb2e/MmvD4P2MtpD1N6aQ7Q\nsWcQRmQmt8G00dhy7ZxrHqjbiM0v34hFHho0gxuCBAO1oQ49XeCp27Na+B39hw7K\nvNyV6VJHaMnR34j4RNO2ZnJkv73GVjmvXhjb/sJHVWlpN9elz2xQ5KRmlMpptw64\nAIcf7zehAQKBgQCVMXzxMDwXNPhNB1k2DrMUN/XNQ2nmGleyWyvHp1GKJHrZHOG1\n10NxDzMR+VYKODAf/CcxhgQXMX4x52lXGkRICm6haIwuTpcRr+SvqGFMMV+U/RnR\n5oKOljpZi0Q/ohwfD54RLABcF0Ky3KF/UeMOGa+ffd991xtfxAtV2Y1OrQKBgFPP\nulcLJTf5wRVd1VKCf574gOaLe/VEQ+inNoXJgVEHqpqN+3Oi/Jo61o4Tr5W0rN08\npxnquYN8Z5Sr5uynoNuXAxX7YDY2do4D8RCOpsJRIZcWUcT+Vgt+T9INaRBw1XOP\nRvojl6+oQ+bzFSx/Hm7KLr1EquXDNYmX1cT0usMBAoGBAJG+ISH1c4bgrwGE6SHs\nJKfC+B7FciybxVksFaVPnZG7r8/6otGLsFAsGALaHmyaLdyUMMWOfb0Cq2sq1+be\n98C+F5s2n2/zaP3Z3qHyBknAbowZundUCvcWhfZDyW3DBFwASIeOYX9BhCRxU0bN\nT/2bdEW/Di5WLY64Pncgea61\n-----END PRIVATE KEY-----\n",
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
