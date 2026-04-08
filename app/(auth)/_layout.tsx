import {Slot, Link, router }from "expo-router";
import { ImageBackground, KeyboardAvoidingView, ScrollView, View, Dimensions, Image } from "react-native";



export default function AuthLayout() {
    const height = Dimensions.get("screen").height / 2.45
  return (
    <KeyboardAvoidingView>
        <ScrollView>
     <View>
      <ImageBackground source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmmvr36LE0U9opoByIwJj2RLltnlP7rUsyg&s"}}
      resizeMode="stretch"
      style={{height:height}}
      />


      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdOvYlmEQ1CleVnXG_193Ac_A1Fc2nu1ukQ&s"}}
      height={100} width={100}
      style={{position:"absolute",top:height/1.25,left:Dimensions.get("screen").width/2.5}}
      resizeMode="cover"
      />
      



     </View>
     <Slot/>
    </ScrollView>
    </KeyboardAvoidingView>
    
      
    
  )
}