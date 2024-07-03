/* eslint-disable linebreak-style */
import {NetworkInfo} from '../types/INetworkInfo';
import {Location} from '../types/ILocation';
import type {WifiInfo} from '../types/IWifiInfo';

export interface DataTransmissionProps {
  location: Location | null;
  netInfo: NetworkInfo | null;
  wifiList: WifiInfo[];
}
