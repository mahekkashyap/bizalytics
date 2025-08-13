# Petrol Pump Loyalty App

Monorepo containing the Expo React Native app and Node/Express backend.

## Structure
- `mobile/` Expo app (React Native)
- `server/` Node.js backend (Express + Firebase Admin)
- `docs/` Firestore schema and docs

## Prerequisites
- Node.js 18+
- Yarn or npm
- Firebase project (Firestore + Authentication enabled)

## Setup

### Backend
1. Copy `server/.env.example` to `server/.env` and fill credentials.
2. Install deps and run:
```bash
cd server
npm install
npm run dev
```
By default it listens on `http://localhost:4000`.

### Mobile (Expo)
1. Copy `mobile/.env.example` to `mobile/.env` and fill Firebase + backend URL.
2. Install deps and run:
```bash
cd mobile
npm install
npm run start
```

## Endpoints (placeholders)
- POST `/api/users/create`
- POST `/api/transactions/create`
- GET `/api/transactions/:userId`
- GET `/api/users/:userId`

Refer to `docs/firestore-schema.md` for the initial Firestore collections and document structures.