const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  expo: {
    name: "Petrol Pump Loyalty",
    slug: "petrol-pump-loyalty",
    version: "1.0.0",
    orientation: "portrait",
    jsEngine: "hermes",
    newArchEnabled: true,
    extra: {
      backendBaseUrl: process.env.BACKEND_BASE_URL || "http://localhost:4000",
      firebase: {
        apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || "",
        authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
        projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID || "",
        storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
        messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
        appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || "",
        measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID || ""
      }
    }
  }
};