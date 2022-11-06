import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

export default function App() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    name: '',
    dob: '',
    breed: '',
    toy: ''
  });

  const handleNameChange = (text) => {
    setName(text);
  }
  const handleChange = (id, text) => {
    setFormValues({...formValues, [id]: text});
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FormField id='email' label='Email:' value={formValues.email} onChange={handleChange} placeholder='email'/>
      <FormField id='password' label='Password:' value={formValues.password} onChange={handleChange} placeholder='password'/>
      <FormField id='name' label="Pet's name:" value={formValues.name} onChange={handleChange} placeholder='name'/>
      <FormField id='dob' label='DOB:' value={formValues.dob} onChange={handleChange} placeholder='Month Day, Year'/>
      <FormField id='breed' label='Breed:' value={formValues.breed} onChange={handleChange} placeholder='breed'/>
      <FormField id='toy' label='Favorite Toy:' value={formValues.toy} onChange={handleChange} placeholder='toy'/>
    </View>
  );
}

export const FormField = ({ id, label, value, onChange, placeholder}) => (
  <View>
    <Text>
      {label}
    </Text>
    <Text>
      {value}
    </Text>
    <TextInput
      onChangeText={text => onChange(id, text)}
      placeholder={placeholder}>
    </TextInput>
  </View>
)
