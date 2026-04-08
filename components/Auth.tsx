import {View, Text, ImageBackground } from "react-native"
import React from 'react'

export default function auth() {
  return (
    <View>
        <ImageBackground
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7drhnWkIQngP4wxhoQAu9YtSysTuiuDRzg&s"
        }}
        resizeMode="cover"
        style={{flex: 1}}
        />

      
    </View>
  );
}
