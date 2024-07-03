/* eslint-disable linebreak-style */
// components/SendData.tsx
import React, {useEffect} from 'react';
import {DataTransmissionProps} from '../types/IDataTransmissionProps';

const SendData: React.FC<{data: DataTransmissionProps}> = ({data}) => {
  const sendDataToServer = async (data: DataTransmissionProps) => {
    try {
      const response = await fetch(
        'https://localhost:5000/api/data', // Updated to use HTTPS
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      if (response.ok) {
        console.log('Data sent successfully');
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  useEffect(() => {
    if (data) {
      sendDataToServer(data);
    }
  }, [data]);

  return null; // This component doesn't render anything
};

export default SendData;
