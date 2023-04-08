import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = (props) => {
  return (
    <View style={{marginHorizontal:10}}>
      <Text 
      style={{marginVertical:10,fontSize:14,color:'black'}}>{props.label}</Text>
      <TextInput autoCapitalize='none' autoCorrect={false} style={styles.inputField}  placeholder={props.placeholder}/>  
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputField:{
        borderWidth:0.5
    }
})