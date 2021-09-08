import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
  const { restaurants } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { google, query } = props;

  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: '200',
      type: ['restaurant'],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  useEffect(() => {
    if (query) {
      searchByQuery(query);
    }
  }, [query]);

  function searchNearBy(map, center) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearBy(map, map.center);
  }

  return (
    <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.locarion.lat(),
            lng: restaurant.geometry.locarion.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-br',
})(MapContainer);
