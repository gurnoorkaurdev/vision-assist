import axios from 'axios';
import { GOOGLE_MAPS_API_KEY } from '@env';

export const searchLocation = async (query) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json`,
      {
        params: {
          address: query,
          key: GOOGLE_MAPS_API_KEY,
        },
      }
    );

    // Check if the request was successful
    if (response.data.status === 'OK') {
      return response.data.results.map((result) => ({
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
        name: result.formatted_address,
      }));
    } else {
      throw new Error('No results found');
    }
  } catch (error) {
    throw new Error(error.message || 'Error with Google Maps API');
  }
};

export const fetchGoogleMapsGeocode = async (searchQuery) => {
    try {
        const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=${GOOGLE_MAPS_API_KEY}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        
        if (data.status === 'OK') {
            return data.results.map(result => ({
                latitude: result.geometry.location.lat,
                longitude: result.geometry.location.lng,
                formatted_address: result.formatted_address,
            }));
        } else {
            throw new Error('Geocoding request failed: ' + data.error_message);
        }
    } catch (error) {
        console.error('Error fetching Google Maps geocode:', error);
        throw error;
    }
};
