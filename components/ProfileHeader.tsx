import { Ionicons } from "@expo/vector-icons";
import { View, Text , Image, TouchableOpacity } from "react-native";


export default function ProfileHeader() {
    return(
    <View style={{marginVertical:10, backgroundColor:"#f8f8f8"}}>
      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"95%", marginHorizontal:"auto",padding:10}}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={30} color="000#"/>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#f8f8f8",
        width:"auto", height:"auto", borderEndEndRadius:30}}>
          <Ionicons name="settings" size={30} color="#000"/>
        </TouchableOpacity>
      </View>
      <View style={{display:"flex", flexDirection:"row", alignItems:"center", width:"auto", marginHorizontal:"auto", borderRadius:50, outlineColor:"#cdaa80", outlineWidth:2}}>
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWP7MVw-2v4YRy1AuXkj4915gTqCPWGaeXw&s"}}
        style={{width:100, height:100, borderRadius:50}}/>
      </View>
    </View>

    
    )
}








