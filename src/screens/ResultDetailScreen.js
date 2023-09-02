import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { yelpApi } from '../api/yelp'

const ResultDetailScreen = ({ route }) => {
  const id = route.params.id
  const [result, setResult] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const getDetails = async (id) => {
    try {
      const response = await yelpApi(`/${id}`)
      console.log(response)
      setResult(response)
      setErrorMessage('')
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    getDetails(id)
  }, [])

  if (!result) return null

  return (
    <>
      <Text>{result.name}</Text>

      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />

      <Text>{errorMessage}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
})

export default ResultDetailScreen
