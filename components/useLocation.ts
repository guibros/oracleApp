/* eslint-disable linebreak-style */

import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Location} from '../types/ILocation';

const useLocation = (): Location | null => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    const requestPermissions = async (): Promise<boolean> => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message:
                'This app needs access to your location to show your position on the map.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else if (Platform.OS === 'ios') {
          const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          return status === RESULTS.GRANTED;
        }
      } catch (error) {
        console.error('Error requesting permissions:', error);
      }
      return false;
    };

    const getLocation = () => {
      try {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            setLocation({latitude, longitude});
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          },
          error => {
            console.log('Error getting location:', error);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } catch (error) {
        console.error('Error in getLocation:', error);
      }
    };

    requestPermissions().then(granted => {
      if (granted) {
        getLocation();
      }
    });
  }, []);

  return location;
};

export default useLocation;
