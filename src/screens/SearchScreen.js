import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import { useSearch } from '../hooks/useSearch'
import ResultsList from '../components/ResultsList'

function filterResultsByPrice(results, price) {
  return (
    results.filter((result) => {
      return result.price === price
    }) || []
  )
}
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const { results, errorMessage, handleSearch } = useSearch('burger')

  const handleNavigate = (id) => {
    navigation.navigate('ResultDetail', { id })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => handleSearch(term)}
      />

      <ScrollView>
        <ResultsList
          name="Cost Effective"
          results={filterResultsByPrice(results, '$')}
        />
        <ResultsList
          name="Bit Pricier"
          results={filterResultsByPrice(results, '$$')}
        />
        <ResultsList
          name="Big Spender"
          results={filterResultsByPrice(results, '$$$')}
        />
        <Text>Search Screen: {term}</Text>
        <Text>We have found {results?.length} results</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>
          {JSON.stringify(
            filterResultsByPrice(results, '$$$')?.[0]?.location,
            null,
            2
          )}
        </Text>
      </ScrollView>
    </>
  )
}

export default SearchScreen
