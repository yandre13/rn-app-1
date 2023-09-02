import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ name = 'Header', results = [], navigation }) => {
  if (!results?.length) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ResultDetail', { id: item.id })}
          >
            <ResultDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 14,
    marginBottom: 6,
  },
})

export default withNavigation(ResultsList)
