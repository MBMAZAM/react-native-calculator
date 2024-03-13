import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colorGlobal, stylesGlobal } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={ stylesGlobal.calculateContainer }>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={ stylesGlobal.mainResult }>1500</Text>
        <Text style={ stylesGlobal.subResult }>15</Text>
      </View>


      <View style={stylesGlobal.row}> 
        <CalculatorButton label='C' color={colorGlobal.lightGray}/>
        <CalculatorButton label='+/-' color={colorGlobal.lightGray}/>
        <CalculatorButton label='del' color={colorGlobal.lightGray}/>
        <CalculatorButton label='÷' color={colorGlobal.orange}/>

      </View>

      <View style={stylesGlobal.row}>
        <CalculatorButton label='7'/>
        <CalculatorButton label='8'/>
        <CalculatorButton label='9'/>
        <CalculatorButton label='x' color={colorGlobal.orange}/>
      </View>
      <View style={stylesGlobal.row}>
        <CalculatorButton label='4'/>
        <CalculatorButton label='5'/>
        <CalculatorButton label='6'/>
        <CalculatorButton label='-' color={colorGlobal.orange}/>
      </View>
      <View style={stylesGlobal.row}>
        <CalculatorButton label='1'/>
        <CalculatorButton label='2'/>
        <CalculatorButton label='3'/>
        <CalculatorButton label='0' color={colorGlobal.orange}/>
      </View>
      <View style={stylesGlobal.row}>
        <CalculatorButton label='0' doubleSize/>
        <CalculatorButton label='.'/>
        <CalculatorButton label='=' color={colorGlobal.orange}/>
      </View>


    </View>
  )
}
