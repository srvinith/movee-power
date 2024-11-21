import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'

const containerStyle = {
  width: '100vw',
  height: '100vh',
}

const center = {
  lat: 11.0168,
  lng: 76.9558,
}

const points =[
    {
        lat: 11.0168,
        lng: 76.9558,
    },
    {
        lat: 13.0168,
        lng: 76.9558,
    },
    {
        lat: 12.0168,
        lng: 76.9558,
    }
]

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAE5_VF5-4BG_N7kwgagN2xmv9qLFYS0aU',
  })

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    // Optional cleanup logic if needed
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={-100}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
        {
            points.map((point,i)=>
                <MarkerF position={point}></MarkerF>
            )
        }
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MyComponent)
