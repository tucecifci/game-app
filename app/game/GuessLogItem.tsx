import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const GuessLogItem = ({roundNumber, guess}: {roundNumber: number, guess: number}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}> #{roundNumber} </Text>
      <Text style={styles.itemText}> Opponent&apos;s Guess: {guess} </Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
})