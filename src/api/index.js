import config from './config'

const { apiKey } = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=venezuela&api_key=${apiKey}&format=json`

export default function getArtists () {
  return fetch(URL)
    .then(response => response.json())
    .then(json => json.topartists.artist)
}
