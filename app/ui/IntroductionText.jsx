import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const IntroductionText = ({children, style}) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default IntroductionText

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: "open-sans",
        fontSize: 24,
        color: Colors.accent500,
        marginBottom: 16,
      },
})