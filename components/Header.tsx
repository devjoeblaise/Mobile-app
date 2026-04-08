import { View, Text, Image, TouchableOpacity, ImageBackground, Pressable, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import {LinearGradient} from 'expo-linear-gradient'
import { Link } from 'expo-router'
import useTheme, { colorScheme } from '@/hooks/useTheme'
function Timer(){
     const  time = new Date().getHours()
     const {colors} = useTheme()
   if(time < 12){
    return(

    <Text style={[styles.timeText, { color: colors.text }]}>
        Good Morning</Text>
) 
   }
   else if (time < 18){
    return(
        <Text style={[styles.timeText, { color: colors.text }]}>
        Good Afternoon</Text>   
    )
}
else{
    return(
       <Text style={[styles.timeText, { color: colors.text }]}>
        Good Evening</Text>   
    )
}
}


export default function Header() {
  const {colors} = useTheme()
  return (
    <SafeAreaView style={{backgroundColor:colors.bg}}>
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',
     padding:10}}>
    <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
        <Text style={{color:"#000", fontSize:20, fontWeight:'bold'}}>{Timer()}</Text>
      
    </View>
      
    <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
        <TouchableOpacity style={{backgroundColor:colors.bg, padding:5}}>
            <Ionicons name='notifications' size={25} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:colors.bg, padding:5}}>
            <Ionicons name='settings' size={25} color={colors.text}/>
        </TouchableOpacity>
    </View>
     </View>
     <Text style={{color:"#000", fontSize:60, fontWeight:'bold',marginHorizontal:'auto'}}>
        WIllie Ben</Text>
    <LinearGradient
      colors={['#cdaa80', '#f3e6cc']}
       start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} // left → right
      style={{display:"flex", flexDirection:"row", 

    height:60, width:"95%",borderRadius:80, marginTop:10, gap:10,alignItems:"center", marginLeft:10,
          marginHorizontal:'auto'}}>
            <Image 
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s'}}
             style={{width:50, height:50, borderRadius:25, marginLeft:10}} />
             <View style={{marginLeft:10, justifyContent:'center', flexDirection:"row", gap:45,
                 marginTop:10}}>
                <Text style={{color:"#fff", fontSize:18, fontWeight:'bold'}}>You have 3 tasks today</Text>
                    <Ionicons name="arrow-forward" size={24} color="#fff" />                
             </View>

    </LinearGradient>
    <View style={{borderRadius:20, overflow:'hidden', paddingVertical:2}}> 
    <ImageBackground source={
        {uri:'https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-1405717-2736499.jpg&fm=jpg'}} 
    style={{width:"100%", height:200,
     marginTop:10, padding:10, borderRadius:30, margin:10}}>
    <View style={{flex:1, gap:10, justifyContent:"space-around"}}>
        <View style={{marginBottom:20,}}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:'bold'}}>3 Upcoming Premiums</Text>
    <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
        <Ionicons name='alarm' size={20} color='#fff' />
        <Text style={{color:"#fff", fontSize:13, fontWeight:'bold'}}>Due in 27 days</Text>
    </View>
    </View>
    
    <View style={{flexDirection:'row', alignItems:'center', gap:5, justifyContent:'space-between', 
        backgroundColor:'rgba(0,0,0,0.5)', padding:5, borderRadius:20 , width:"90%"}}> 
        <Text style={{color:"#fff", fontSize:15, fontWeight:'bold', marginLeft:10}}>$124534</Text>
        <TouchableOpacity style={{backgroundColor:"#cdaa80", padding:5, borderRadius:20,
             width:100, alignItems:'center', justifyContent:'center', cursor:'pointer', 
             marginRight:3,  }}>
        <Link href="/(tabs)/calendar" asChild>
            <Pressable style={({pressed})=>({
                opacity: pressed? .5:1,
                padding:5,
                cursor:"pointer",
            })}>
                <Text style={{color:"#fff", fontSize:13.5, fontWeight:'bold',}}>View Premium</Text>
            </Pressable>
        </Link>
        </TouchableOpacity>
    </View>
    </View>    
    </ImageBackground>
    </View>
    <View style={{
    backgroundColor:"#d0d0d0",
    width:"95%",
    borderRadius:20, 
    alignSelf:'center',
    marginTop:10,
}}>
    <Text style={{
        color:"#000",
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10, 
        fontFamily:"fantasy"
    }}>
        Services
    </Text>

    {/* FIRST ROW */}
    <View style={{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:10
    }}>
        <TouchableOpacity style={{
            backgroundColor:"#ececec",
            flexDirection:"row",
            padding:10,
            gap:10,
            borderRadius:20,
            width:"30%",
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Ionicons name='document-text' size={20} color='#999' />
            <Text style={{color:"#888", fontSize:11, fontWeight:'bold'}}>Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor:"#ececec",
            flexDirection:"row",
            padding:10,
            gap:10,
            borderRadius:20,
            width:"30%",
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Ionicons name='book' size={20} color='#999' />
            <Text style={{color:"#888", fontSize:11, fontWeight:'bold'}}>Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor:"#ececec",
            flexDirection:"row",
            padding:10,
            gap:10,
            borderRadius:20,
            width:"30%",
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Ionicons name='alert-circle' size={20} color='#999' />
            <Text style={{color:"#888", fontSize:11, fontWeight:'bold'}}>Claims</Text>
        </TouchableOpacity>

        {/* SECOND ROW */}
        <TouchableOpacity style={{
            backgroundColor:"#ececec",
            flexDirection:"row",
            padding:10,
            gap:10,
            borderRadius:20,
            width:"30%",
            alignItems:'center',
            justifyContent:'center',
            marginTop:10
        }}>
            <Ionicons name='medical' size={20} color='#999' />
            <Text style={{color:"#888", fontSize:11, fontWeight:'bold'}}>Hospitals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor:"#ececec",
            flexDirection:"row",
            padding:10,
            gap:10,
            borderRadius:20,
            width:"30%",
            alignItems:'center',
            justifyContent:'center',
            marginTop:10
        }}>
            <Ionicons name='videocam' size={20} color='#999' />
            <Text style={{color:"#888", fontSize:11, fontWeight:'bold'}}>Teleconsult</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor:"#ececec",
            flexDirection:"row",
            padding:10,
            gap:10,
            borderRadius:20,
            width:"30%",
            alignItems:'center',
            justifyContent:'center',
            marginTop:10
        }}>
            <Ionicons name='chatbubbles' size={20} color='#999' />
            <Text style={{color:"#888", fontSize:11, fontWeight:'bold'}}>Chat With Us</Text>
        </TouchableOpacity>
    </View>
</View>

     </SafeAreaView>
    
  )
  
}

const styles = StyleSheet.create({
    timeText:{
        color:"#000", 
        fontSize:25, 
        fontWeight:'bold'
    }
})