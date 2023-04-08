import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

const [name,setName]=useState('')
const [result,setResult]=useState('')


const App = () => {

  return (
    <View style={styles.container}>
      <Text style={{marginVertical:10,fontSize:18,color:'black',fontWeight:'bold'}}>Enter your Name</Text>
      <TextInput 
      style={styles.input} 
      autoCapitalize='none' 
      autoCorrect={false}
      placeholder='Enter your name here'
      onChangeText={
        (name)=>setName(name)
      }
      value={name}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={()=>setResult(name)} style={styles.button}>
            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Submit</Text>
      </TouchableOpacity>
      <Text>{result}</Text>
    </View>
  )
}

export default App;
const styles=StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:10,
    marginVertical:10
  },
  input:{
    borderWidth:0.5,
    marginBottom:10,

  },
  button:{ 
    width:100,
    height:40,
    backgroundColor:'lightgreen',
    alignItems:'center',
    justifyContent:'center'
  }
})