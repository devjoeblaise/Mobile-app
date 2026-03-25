import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons';
import { View, Text} from "react-native";



interface TabBarProps{
        focused:boolean,
        name:string,
        title:string
    }    
       
const TabBar = ({focused, name, title}:TabBarProps)=>{
if(focused){
    return(
        <View
        style={{display:"flex", flexDirection:"row",
        minWidth:100, alignItems: "center",
        justifyContent:"center", gap:5, paddingHorizontal:5,
        paddingVertical:5,}}
        >
            <Ionicons name={name} size={24} color="#fff"/>
            <Text style={{color:"#fff"}}>{title}</Text>
        

        </View>
    )

}

return(
    <Ionicons name={name} size={18} color="#cdaa80"/>
)
} 

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown:false,
            tabBarStyle:{
                backgroundColor: "#888",
                borderRadius:50,
                position:"absolute",
                bottom:40,
                left:10,
                right:10,
                marginHorizontal:10,
                justifyContent:"center",
                alignItems:"center",
                height:70,
                cursor:"pointer",
            },
            tabBarItemStyle:{
                minHeight:100,
                borderRadius:50,
                marginHorizontal:10,
                position:"relative",
                overflow:"hidden",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                top:15,

            },
            tabBarLabelStyle:{
                fontSize:15,
                fontWeight:"bold"
            },
            tabBarShowLabel:false
        }}>
            <Tabs.Screen name="index" options={{
                title:"Home",
                tabBarIcon:({focused})=><TabBar focused={focused} name="home" title="Home"/>
            }} />
             <Tabs.Screen name="profile" options={{
                title:"Home",
                tabBarIcon:({focused})=><TabBar focused={focused} name="person" title="Profile"/>
            }} />
            <Tabs.Screen name="calendar" options={{
                title:"calendar",
                tabBarIcon:({focused})=><TabBar focused={focused} name="calendar" title="calendar"/>
            }} />
            <Tabs.Screen name="settings" options={{
                title:"settings",
                tabBarIcon:({focused})=><TabBar focused={focused} name="settings" title="Settings"/>
            }} />

       </Tabs>
    )
}