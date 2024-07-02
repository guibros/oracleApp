/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  //PermissionsAndroid,
  //Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// import Geolocation from '@react-native-community/geolocation';
// import WifiManager, {type WifiEntry} from 'react-native-wifi-reborn';
// import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import useWifiInfo from './components/useWifiInfo';
import useNetInfo from './components/useNetInfo';
import useLocation from './components/useLocation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const location = useLocation();
  const netInfo = useNetInfo();
  const wifiList = useWifiInfo();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    console.log('netInfo Information:', netInfo);
    console.log('WiFi Information:', wifiList);
  }, [wifiList, netInfo]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Oracle APP">
            App design to gather location and device data, and send data to
            server.
          </Section>
          <Section title="Location GPS Info">
            <View style={styles.sectionDescription}>
              <Text>Latitude: {location?.latitude ?? 'N/A'}</Text>
              <Text>Longitude: {location?.longitude ?? 'N/A'}</Text>
            </View>
          </Section>
          <Section title="WiFi Info">
            {wifiList.length > 0 ? (
              <View>
                <Text>You have access to {wifiList.length} wifi</Text>
                {wifiList.map((wifi, index) => (
                  <View key={index} style={styles.sectionDescription}>
                    <Text>SSID: {wifi.SSID}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <Text>No WiFi data available</Text>
            )}
          </Section>
          <Section title="Network Info">
            {netInfo ? (
              <View>
                <Text>Type: {netInfo.type}</Text>
                <Text>Is Connected: {netInfo.isConnected ? 'Yes' : 'No'}</Text>
                <Text>
                  Is Internet Reachable:{' '}
                  {netInfo.isInternetReachable ? 'Yes' : 'No'}
                </Text>
                {netInfo.details && (
                  <View>
                    <Text>IP Address: {netInfo.details.ipAddress}</Text>
                    <Text>Subnet: {netInfo.details.subnet}</Text>
                    <Text>
                      Is Connection Expensive:{' '}
                      {netInfo.details.isConnectionExpensive ? 'Yes' : 'No'}
                    </Text>
                    <Text>
                      Cellular Generation:{' '}
                      {netInfo.details.cellularGeneration ?? 'N/A'}
                    </Text>
                    <Text>Carrier: {netInfo.details.carrier ?? 'N/A'}</Text>
                  </View>
                )}
              </View>
            ) : (
              <Text>No Network data available</Text>
            )}
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
