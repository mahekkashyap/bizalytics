import { db, admin } from '../services/firebaseAdmin.js';

export async function createUserProfile(req, res) {
  try {
    const { uid, phoneNumber, fullName = '', email = '', fcmToken = '' } = req.body || {};

    if (!uid || !phoneNumber) {
      return res.status(400).json({ error: 'uid and phoneNumber are required' });
    }

    const userDocRef = db.collection('users').doc(uid);
    await userDocRef.set(
      {
        uid,
        phoneNumber,
        fullName,
        email,
        loyaltyPoints: 0,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        fcmToken,
      },
      { merge: true }
    );

    const userSnap = await userDocRef.get();
    return res.status(201).json({ user: { id: userSnap.id, ...userSnap.data() } });
  } catch (error) {
    console.error('createUserProfile error', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getUserProfile(req, res) {
  try {
    const { userId } = req.params;
    const doc = await db.collection('users').doc(userId).get();
    if (!doc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json({ user: { id: doc.id, ...doc.data() } });
  } catch (error) {
    console.error('getUserProfile error', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}