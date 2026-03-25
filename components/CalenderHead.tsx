import {Text, View, Image, TouchableOpacity} from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function CalenderHead() {
  return(
    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:10}}>
    <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
      <Text style={{color:"#000", fontSize:20, fontWeight:"bold"}}>GoodDay, Ben</Text>
      </View>


      <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
        <TouchableOpacity style={{backgroundColor:"#fafafa", padding:3}}>
          <Ionicons name="calendar" size={20} color="#000"  />
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:"#fafafa", padding:5}}>
            <Ionicons name="time" size={25} color="#000" />
          </TouchableOpacity>
      </View>
      </View>
      
  )
}