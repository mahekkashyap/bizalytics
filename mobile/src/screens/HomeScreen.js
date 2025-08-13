import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '600' }}>Welcome to Petrol Pump Loyalty</Text>
      <Text style={{ marginTop: 8, color: '#666' }}>Your loyalty points will appear here.</Text>
      <View style={{ marginTop: 24 }}>
        <Button title="View Transactions" onPress={() => navigation.navigate('Transactions')} />
      </View>
    </View>
  );
}