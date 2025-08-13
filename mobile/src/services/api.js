import axios from 'axios';
import Constants from 'expo-constants';

const baseURL = (Constants?.expoConfig?.extra?.backendBaseUrl) || 'http://localhost:4000';

export const apiClient = axios.create({ baseURL, timeout: 15000 });

export const createUser = (data) => apiClient.post('/api/users/create', data);
export const createTransaction = (data) => apiClient.post('/api/transactions/create', data);
export const getUser = (userId) => apiClient.get(`/api/users/${userId}`);
export const getTransactions = (userId) => apiClient.get(`/api/transactions/${userId}`);