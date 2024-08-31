import firebaseAdmin from "firebase-admin";
import dotenv from 'dotenv'
dotenv.config()
// import serviceAccount from "./blue-football-application-firebase-adminsdk-8jjza-d15f74a4f0.json" assert { type: "json" };

const key = {
  "type": "service_account",
  "project_id": "football-green-app",
  "private_key_id": "d35b1598c919af4c4c59e062855e85a58a7311b4",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMBpkMCeDBS7vi\nLd24YcSXCTF80zlWVo8Solodd6JFiSyTSQPSRV9ivGG1+sdDxD0XMJPcIlM74Rf9\ngUY51zuenQcV86wrCtk37MIxgww+63Pa7EUHW05MVwwqlP4Ne8tUwSvmCydwnsew\npxak9v8WzLvIiDuDry13gEOE7EF7NGK/Jprx+oFuY6bwtnvhiA0+m50IEwYJKjAQ\nZDa+2h3k5+jCUvS38q9XeLGHLwkrn04qniShL+w6K4fOxw6lWIj5x3dzaj9Ds+/4\ni2U6x5d0T5txe/URDvVJcINxH2VE2hoLyk6ZOpGIru0l6X6JeDcwzvHTv8X3k9xb\nBjae4QrHAgMBAAECggEAIUYUMLvtrT3iMuAYZbPVgW0CO/bLcOgQplEsUYZLbya7\ndSZ2b+pYxOavKCQcL6ecmksVr37jmdjly4tek3FQK601VMsBhvWFI9NCKnFSY8fi\nLvp9xCuLvfSBAJ19lLUIngEbsoVFgImh9zk7fq+Pk5LT2epUi8SGgujmr2dubclR\nnKLIHWQZ7buCizEfWqH9SEI3bCgVFK0L5Ye8CvIaN8AX0exc00T9sJM07O8CmtBb\nNXJJS6TA2RH1fLS8ExsUP8OOQhwSg0YLFYQNC4LG56orjVxTdURb2aftG4ieGSPH\nv7AyyhJzkewG0ZTGaoZX8EWiS1C/I+qLBsQPNh00NQKBgQD8NMxNjT13B4kjuIhB\nEkysikvsufABpo+uX2BnH/TDDjj76oHyxJSCLWtdQB4wxKUCLMcpNMeEHGiwbiyd\nkScTX3op552CizJO5WZPalplfh5gpnTs+VciGIHcF9IJ0ubbFf5Qk1dJrub5ATev\nWHnEFL3oV6IGXD4n2qFWhxH1PQKBgQDPGEPny01yJg28FYCjdd8vhHzacoPtl8kI\n+x5NykDHVNqA7qFMPeLWh4CPmUH3I/lFNsXsNjlQVyVkr0BeWC85Ly22zEgnSypY\nNEltL0BucPFt1mMyvIjE3Rk80AJu3SIP74jkXkOPJ24kFINPpjYhWwu9/Hj2MFiV\nrBmSWoEoUwKBgHUG4s4RfbXfr0j99WuMXDurqHNeC/oYGY+l/gucDmz8CoEKXeYS\nRX7qKGmKuPeUJ6UMthVuwi2RKRrE5LrwgZtBsGQFb1cF1AA7/e9XwD5b+SiL1LGp\nOT8+8/L2sqWQUULTv8APvm8YU2Czqe0ZNtc/cKeBElO1Nbo0fqyx3ClZAoGBAKrQ\nsPH31qFYkeuZMMmi57wh43mrCvZmRAOMXap8MII5kyDVs2VXhkq86WWIW8ile22D\niC0VbKC/wLATfVxUEF9ycppcVQdUEFFAj2/nkZWGwxx9wMSQjZ8TX0WxrNAUxYuv\nX5I9ziu9sjNAWC7SQcOxfTXvkTY/GlIZ6d21mOLRAoGABy6YDPwzusiANRXloaJK\nrA2jSImz9xh8SJ5CAq/P6mSa4SAEUCizLPI8G+fKuhgtoXwYAwbJqyMBDnYtRih0\nnxprgx1+hajetGq9TDDIKNXacGsgVOxw232yp6FsV7+/jvwLO6ANQbisgEGysZSe\nioPOUSq+TB6I0JEcHaWnO0A=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-x0sat@football-green-app.iam.gserviceaccount.com",
  "client_id": "113565906416645227183",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-x0sat%40football-green-app.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}



const firebase = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(key),
});

export default firebase;
