import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { createUser } from '../services/api';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    setLoading(true);
    try {
      Alert.alert('OTP placeholder', 'Integrate expo-firebase-recaptcha to enable real phone auth. Navigating to Home for now.');
      navigation.replace('Home');
    } catch (e) {
      Alert.alert('Error', e?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    try {
      // Placeholder. In real flow, use Firebase Auth confirmation.confirm(otp)
      const fakeUid = `demo-${Date.now()}`;
      await createUser({ uid: fakeUid, phoneNumber: phone });
      navigation.replace('Home');
    } catch (e) {
      Alert.alert('Error', e?.message || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign in with phone</Text>
      <Text style={{ marginTop: 16 }}>Phone Number</Text>
      <TextInput
        placeholder="+91XXXXXXXXXX"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginTop: 8 }}
      />

      {confirmation ? (
        <>
          <Text style={{ marginTop: 16 }}>OTP</Text>
          <TextInput
            placeholder="123456"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginTop: 8 }}
          />
          <Button title={loading ? 'Verifying...' : 'Verify OTP'} onPress={verifyOtp} disabled={loading || !otp} />
        </>
      ) : (
        <View style={{ marginTop: 16 }}>
          <Button title={loading ? 'Sending OTP...' : 'Send OTP'} onPress={sendOtp} disabled={loading || !phone} />
        </View>
      )}
    </View>
  );
}