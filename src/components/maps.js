import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -6.175392, lng: 106.827153 }}
    />
  )
}

const Wrapper = withScriptjs(withGoogleMap(Map))

export default Wrapper