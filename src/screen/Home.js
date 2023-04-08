import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Input from '../component/Input';
import Buttons from '../component/Button';

const Home = () => {
  return (
    <View>
      <Input
      label='Enter Your Name'
      placeholder='Enter your name'
      />
      <Input
      label='Enter Your Mobile Number'
      placeholder='Enter your Number'
      keyboardType="numeric"
      />
      <Buttons title='Submit'/>
      
    </View>
  )
}

export default Home;