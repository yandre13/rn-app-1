import { useEffect, useState, useCallback } from 'react'
import { yelpApi } from '../api/yelp'

export const useSearch = (initialSearch = 'pasta') => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const handleSearch = useCallback(async (term) => {
    if (!term) {
      return
    }
    try {
      const response = await yelpApi(
        `/search?term=${term}&location=san jose&limit=50`
      )

      setResults(response.businesses)
      setErrorMessage('')
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }, [])

  useEffect(() => {
    handleSearch(initialSearch)
  }, [])
  return {
    results,
    errorMessage,
    handleSearch,
  }
}
