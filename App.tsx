/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
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
import useWifiInfo from './components/useWifiInfo';
import useNetInfo from './components/useNetInfo';
import useLocation from './components/useLocation';
import SendData from './components/sendData';
import Section from './components/Section';
import {DataTransmissionProps} from './types/IDataTransmissionProps';
import {styles} from './styles';

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

  const dataToSend: DataTransmissionProps = {
    location,
    netInfo,
    wifiList,
  };

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
      <SendData data={dataToSend} />
    </SafeAreaView>
  );
};

export default App;
