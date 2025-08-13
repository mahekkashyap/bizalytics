import { db, admin } from '../services/firebaseAdmin.js';

export async function createTransaction(req, res) {
  try {
    const { userId, pumpId, attendantId = '', amount, fuelVolume, pointsEarned = 0 } = req.body || {};

    if (!userId || !pumpId || amount === undefined || fuelVolume === undefined) {
      return res.status(400).json({ error: 'userId, pumpId, amount, and fuelVolume are required' });
    }

    const transactionRef = db.collection('transactions').doc();
    const transactionData = {
      transactionId: transactionRef.id,
      userId,
      pumpId,
      attendantId,
      amount,
      fuelVolume,
      pointsEarned,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    await transactionRef.set(transactionData);

    return res.status(201).json({ transaction: transactionData });
  } catch (error) {
    console.error('createTransaction error', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getTransactionsForUser(req, res) {
  try {
    const { userId } = req.params;
    const snapshot = await db
      .collection('transactions')
      .where('userId', '==', userId)
      .orderBy('timestamp', 'desc')
      .get();

    const transactions = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return res.json({ transactions });
  } catch (error) {
    console.error('getTransactionsForUser error', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}