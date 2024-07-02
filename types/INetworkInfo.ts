/* eslint-disable linebreak-style */
import {
  NetInfoStateType,
  NetInfoCellularGeneration,
} from '@react-native-community/netinfo';

export interface NetworkInfo {
  type: NetInfoStateType;
  isConnected: boolean | null;
  isInternetReachable: boolean | null;
  details: {
    ipAddress: string | null;
    subnet: string | null;
    isConnectionExpensive: boolean | null;
    cellularGeneration: NetInfoCellularGeneration | null;
    carrier: string | null;
  } | null;
}
