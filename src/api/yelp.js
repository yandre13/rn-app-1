const API_URL = 'https://api.yelp.com/v3/businesses'
const API_KEY =
  'Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx'

export const yelpApi = async (path, options = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  }

  const url = `${API_URL}${path}`
  const response = await fetch(url, { headers, ...options })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}
