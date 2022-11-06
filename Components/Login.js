import React, { useState } from 'react';
import { Formik } from 'formik';
import { Text, View, ScrollView, Button, TextInput } from 'react-native';
import { FormField } from './FormField.js';

export const Login = () => {
  return (
    <ScrollView>
      <Text>
        Login!
      </Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          dob: '',
          breed: '',
          toy: ''
        }}
        onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <ScrollView>
                <FormField value={values.email} label="email" placeholder="email" handleChange={handleChange}/>
                <FormField value={values.password} label="password" placeholder="password" secure={true} handleChange={handleChange}/>
                <FormField value={values.name} label="pet's name" placeholder="name" handleChange={handleChange}/>
                <FormField value={values.dob} label="DOB:" placeholder="date" handleChange={handleChange}/>
                <FormField value={values.breed} label="breed" placeholder="breed" handleChange={handleChange}/>
                <FormField value={values.toy} label="favorite toy:" placeholder="toy" handleChange={handleChange}/>
                <Button onPress={handleSubmit} title="Submit"/>
              </ScrollView>
            </View>
          )}
      </Formik>
    </ScrollView>
  )
}

// FIRST ITERATION:
// export default function App() {
//   const [formValues, setFormValues] = useState({
//     email: '',
//     password: '',
//     name: '',
//     dob: '',
//     breed: '',
//     toy: ''
//   });

//   const handleNameChange = (text) => {
//     setName(text);
//   }
//   const handleChange = (id, text) => {
//     setFormValues({...formValues, [id]: text});
//   }

//   return (
//     <ScrollView style={{backgroundColor: '#def2f1'}}>
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <FormField id='email' label='Email:' value={formValues.email} onChange={handleChange} placeholder='email'/>
//         <FormField id='password' label='Password:' value={formValues.password} onChange={handleChange} placeholder='password' secure={true}/>
//         <FormField id='name' label="Pet's name:" value={formValues.name} onChange={handleChange} placeholder='name'/>
//         <FormField id='dob' label='DOB:' value={formValues.dob} onChange={handleChange} placeholder='Month Day, Year'/>
//         <FormField id='breed' label='Breed:' value={formValues.breed} onChange={handleChange} placeholder='breed'/>
//         <FormField id='toy' label='Favorite Toy:' value={formValues.toy} onChange={handleChange} placeholder='toy'/>
//       </View>
//     </ScrollView>
//   );
// }

// export const FormField = ({ id, label, value, onChange, placeholder, secure = false}) => (
//   <View style={styles.container}>
//     <Text style={styles.text}>
//       {label}
//     </Text>
//     <TextInput
//       onChangeText={text => onChange(id, text)}
//       placeholder={placeholder}
//       secureTextEntry={secure}
//       style={styles.text}>
//     </TextInput>
//   </View>
// )

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     alignItems: 'center',
//   },
//   text: {
//     padding: 8,
//     fontSize: 18
//   }
// })
