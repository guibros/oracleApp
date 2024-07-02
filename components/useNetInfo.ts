/* eslint-disable linebreak-style */
import {useEffect, useState} from 'react';
import NetInfo, {
  NetInfoState,
  NetInfoCellularGeneration,
} from '@react-native-community/netinfo';
import {NetworkInfo} from '../types/INetworkInfo';

const useNetInfo = (): NetworkInfo | null => {
  const [netInfo, setNetInfo] = useState<NetworkInfo | null>(null);

  const isNetInfoCellularGeneration = (
    value: unknown,
  ): value is NetInfoCellularGeneration | null => {
    return (
      value === null ||
      value === '2g' ||
      value === '3g' ||
      value === '4g' ||
      value === '5g' ||
      value === 'unknown'
    );
  };

  useEffect(() => {
    const fetchNetInfo = async () => {
      try {
        const state: NetInfoState = await NetInfo.fetch();
        const networkInfo: NetworkInfo = {
          type: state.type,
          isConnected: state.isConnected,
          isInternetReachable: state.isInternetReachable,
          details: state.details
            ? {
                ipAddress:
                  'ipAddress' in state.details
                    ? (state.details.ipAddress as string | null)
                    : null,
                subnet:
                  'subnet' in state.details
                    ? (state.details.subnet as string | null)
                    : null,
                isConnectionExpensive:
                  'isConnectionExpensive' in state.details
                    ? state.details.isConnectionExpensive
                    : null,
                cellularGeneration:
                  'cellularGeneration' in state.details &&
                  isNetInfoCellularGeneration(state.details.cellularGeneration)
                    ? state.details.cellularGeneration
                    : null,
                carrier:
                  'carrier' in state.details
                    ? (state.details.carrier as string | null)
                    : null,
              }
            : null,
        };
        setNetInfo(networkInfo);
      } catch (error) {
        console.error('Error fetching network info:', error);
        setNetInfo(null);
      }
    };

    fetchNetInfo();

    // Optionally, you can subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(state => {
      const networkInfo: NetworkInfo = {
        type: state.type,
        isConnected: state.isConnected,
        isInternetReachable: state.isInternetReachable,
        details: state.details
          ? {
              ipAddress:
                'ipAddress' in state.details
                  ? (state.details.ipAddress as string | null)
                  : null,
              subnet:
                'subnet' in state.details
                  ? (state.details.subnet as string | null)
                  : null,
              isConnectionExpensive:
                'isConnectionExpensive' in state.details
                  ? state.details.isConnectionExpensive
                  : null,
              cellularGeneration:
                'cellularGeneration' in state.details &&
                isNetInfoCellularGeneration(state.details.cellularGeneration)
                  ? state.details.cellularGeneration
                  : null,
              carrier:
                'carrier' in state.details
                  ? (state.details.carrier as string | null)
                  : null,
            }
          : null,
      };
      setNetInfo(networkInfo);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return netInfo;
};

export default useNetInfo;
