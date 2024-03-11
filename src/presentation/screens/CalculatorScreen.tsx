import React from 'react'
import { Text, View } from 'react-native'
import { stylesGlobal } from '../../config/theme/app-theme'

export const CalculatorScreen = () => {
  return (
    <View style={ stylesGlobal.calculateContainer }>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={ stylesGlobal.mainResult }>1500</Text>
        <Text style={ stylesGlobal.subResult }>15</Text>
      </View>
    </View>
  )
}
