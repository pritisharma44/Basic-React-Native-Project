import { View,Text, ImageBackground } from 'react-native'

export default function Background({children}) {
  return (
    <View>
     <ImageBackground source={require("../assets/leaves.jpg")} style={{height:'100%'}}/>
     <View style={{position:'absolute'}}>
        {children}
     </View>
    </View>
  )
}