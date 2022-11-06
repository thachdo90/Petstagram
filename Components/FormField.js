import React from 'react';
import { Text, View, ScrollView, Button, TextInput } from 'react-native';
import { styles } from './styles.js'

export const FormField = ({ label, value, handleChange, placeholder, secure = false}) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {label}
    </Text>
    <TextInput
      onChangeText={handleChange('email')}
      placeholder={placeholder}
      secureTextEntry={secure}
      style={styles.text}>
    </TextInput>
  </View>
)