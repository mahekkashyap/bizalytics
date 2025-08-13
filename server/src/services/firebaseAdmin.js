import admin from 'firebase-admin';

function initializeFirebaseAdmin() {
  if (admin.apps.length) {
    return admin.app();
  }

  const inlineJson = process.env.FIREBASE_SERVICE_ACCOUNT;
  const base64Json = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;

  if (inlineJson) {
    try {
      const credentials = JSON.parse(inlineJson);
      admin.initializeApp({ credential: admin.credential.cert(credentials) });
    } catch (err) {
      console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT JSON. Falling back to application default.', err);
      admin.initializeApp({ credential: admin.credential.applicationDefault() });
    }
  } else if (base64Json) {
    try {
      const decoded = Buffer.from(base64Json, 'base64').toString('utf8');
      const credentials = JSON.parse(decoded);
      admin.initializeApp({ credential: admin.credential.cert(credentials) });
    } catch (err) {
      console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_BASE64. Falling back to application default.', err);
      admin.initializeApp({ credential: admin.credential.applicationDefault() });
    }
  } else {
    admin.initializeApp({ credential: admin.credential.applicationDefault() });
  }

  return admin.app();
}

initializeFirebaseAdmin();

const db = admin.firestore();

export { admin, db };