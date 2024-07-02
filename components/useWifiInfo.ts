/* eslint-disable linebreak-style */
// useWifiInfo.ts

import {useState, useEffect} from 'react';
import WifiManager, {type WifiEntry} from 'react-native-wifi-reborn';
import type {WifiInfo} from '../types/IWifiInfo'; // Adjust the import path if you placed the interface in a different file

const useWifiInfo = () => {
  const [wifiList, setWifiList] = useState<WifiInfo[]>([]);

  useEffect(() => {
    const fetchWifiInfo = async () => {
      try {
        const wifiEntries: WifiEntry[] =
          await WifiManager.reScanAndLoadWifiList();
        const formattedWifiList: WifiInfo[] = wifiEntries.map(entry => ({
          BSSID: entry.BSSID,
          SSID: entry.SSID,
          timestamp: entry.timestamp,
          level: entry.level,
          frequency: entry.frequency,
          capabilities: entry.capabilities,
        }));
        setWifiList(formattedWifiList);
      } catch (error) {
        console.log('Error getting Wi-Fi info:', error);
      }
    };

    fetchWifiInfo();
  }, []);

  return wifiList;
};

export default useWifiInfo;
