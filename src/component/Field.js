import { TextInput } from 'react-native'
import React from 'react'
import { darkGreen } from './Constant'

export default function Field(props) {
  return (
    <TextInput {...props}
     style={{borderRadius:100,
     color:darkGreen,
     paddingHorizontal:10,
     width:'78%',
     marginVertical:10,
     backgroundColor:'rgb(220,220,220)'}} 
     placeholderTextColor={darkGreen}

     >
     
    </TextInput>
  )
}