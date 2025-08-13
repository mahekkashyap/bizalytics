# Firestore Schema (Initial)

```ts
// users collection (document id = uid)
interface UserDoc {
  uid: string;                // from Firebase Auth
  phoneNumber: string;
  fullName: string;           // optional initially, can be empty string
  email?: string;             // optional
  loyaltyPoints: number;      // default 0
  createdAt: FirebaseFirestore.Timestamp;
  fcmToken?: string;          // optional, for push notifications
}

// transactions collection (auto-id document; also saved as transactionId field)
interface TransactionDoc {
  transactionId: string;      // mirrors the auto-generated document id
  userId: string;             // reference by uid
  pumpId: string;             // e.g., "PUMP-01"
  attendantId: string;        // staff id or empty string
  amount: number;             // rupees
  fuelVolume: number;         // liters
  pointsEarned: number;       // derived from business rules
  timestamp: FirebaseFirestore.Timestamp;
}

// pumps collection (document id = pumpId)
interface PumpDoc {
  pumpId: string;             // e.g., "PUMP-01"
  name: string;               // e.g., "Indore Super Fuels"
  address: string;
  location: FirebaseFirestore.GeoPoint;
}
```

Example documents

```json
// users/{uid}
{
  "uid": "4a12...",
  "phoneNumber": "+919876543210",
  "fullName": "",
  "email": null,
  "loyaltyPoints": 0,
  "createdAt": { "_seconds": 0, "_nanoseconds": 0 },
  "fcmToken": null
}
```

```json
// transactions/{transactionId}
{
  "transactionId": "abc123",
  "userId": "4a12...",
  "pumpId": "PUMP-01",
  "attendantId": "ATT-007",
  "amount": 1500,
  "fuelVolume": 25,
  "pointsEarned": 15,
  "timestamp": { "_seconds": 0, "_nanoseconds": 0 }
}
```

```json
// pumps/{pumpId}
{
  "pumpId": "PUMP-01",
  "name": "Indore Super Fuels",
  "address": "AB Road, Indore",
  "location": { "_latitude": 22.7196, "_longitude": 75.8577 }
}
```