import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // for android specific
        shadowColor: "#000", // for ios specific
        shadowOffset: { width: 0, height: 2 }, // for ios specific
        shadowOpacity: 0.25, // for ios specific
        shadowRadius: 3.84, // for ios specific
      },
})