import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getTransactions } from '../services/api';

export default function TransactionsScreen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Placeholder: Replace with real userId from auth
    const userId = 'demo-user';
    getTransactions(userId)
      .then((res) => setItems(res.data.transactions || []))
      .catch(() => setItems([]));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>My Transactions</Text>
      <FlatList
        data={items}
        keyExtractor={(item, idx) => item.id || String(idx)}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontWeight: '500' }}>Amount: ₹{item.amount}</Text>
            <Text>Fuel: {item.fuelVolume} L</Text>
            <Text>Points: {item.pointsEarned}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ color: '#666' }}>No transactions yet</Text>}
      />
    </View>
  );
}