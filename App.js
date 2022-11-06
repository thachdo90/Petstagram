import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const handleNameChange = (text) => {
    setName(text);
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FormField label="Pet's name" value={name} onChange={handleNameChange} placeholder='name'/>
    </View>
  );
}

export const FormField = ({ label, value, onChange, placeholder}) => (
  <View>
    <Text>
      {label}
    </Text>
    <Text>
      {value}
    </Text>
    <TextInput
      onChangeText={text => onChange(text)}
      placeholder={placeholder}>
    </TextInput>
  </View>
)
