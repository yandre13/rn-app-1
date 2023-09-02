import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onSubmitEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 44,
    borderRadius: 5,
    marginHorizontal: 14,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 24,
    alignSelf: 'center',
    marginRight: 10,
  },
})

export default SearchBar
