import CalenderHead from '@/components/CalenderHead'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function calendar () {
  return (
    <SafeAreaView>
      <CalenderHead/>
      <View>
        <Text></Text>
      </View>
    </SafeAreaView>
  )
}
