import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 250,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
})
export default ResultDetail
