import { StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = (props) => {
  return (
    <View style={{marginTop:10,marginHorizontal:10,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity  activeOpacity={0.5} style={{width:100,height:40,backgroundColor:'lightgreen',alignItems:'center',justifyContent:'center'}}>
            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Buttons;

const styles=StyleSheet.create({})

