/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {
  getBatteryLevel,
  isBatteryCharging,
  getFreeDiskStorageOld,
} from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [batteryCharging, setBatteryCharging] = useState(false);
  const [availableStorage, setAvailableStorage] = useState('');
  const [isConnected, set_IsConnected] = useState(false);
  const [connectionType, set_ConnectionType] = useState('');

  //배터리 현황
  const getBattery = async () => {
    const deviceBattery = await getBatteryLevel();
    setBatteryLevel(Math.floor(deviceBattery * 100));
  };

  //현재 배터리 충전 여부
  const getBatteryCharging = async () => {
    const deviceBatteryCharging = await isBatteryCharging();
    setBatteryCharging(deviceBatteryCharging);
  };

  //가용 스토리지 사이즈
  const getAvailableStorage = async () => {
    const deviceFreeStorage = await getFreeDiskStorageOld();
    getByteSize(deviceFreeStorage);
  };

  // 사이즈 변환
  const getByteSize = size => {
    let s = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
    let e = Math.floor(Math.log(size) / Math.log(1024));
    let finalSize = (size / Math.pow(1024, e)).toFixed(1);
    setAvailableStorage(finalSize + s[e]);
  };

  //네트워크 연결 상태 및 타입 가져오기
  const getConnection = () =>
    NetInfo.addEventListener(state => {
      set_ConnectionType(state.type);
      set_IsConnected(state.isConnected);
    });

  useEffect(() => {
    getBattery();
    getBatteryCharging();
    getAvailableStorage();
    getConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>배터리 잔량: {batteryLevel}%</Text>
      <Text>
        {batteryCharging
          ? '충전중'
          : !batteryCharging && batteryLevel === 100
          ? '충전완료'
          : '충전 안되는 중'}
      </Text>
      <Text>사용 가능한 저장소 용량 : {availableStorage}</Text>
      <Text>인터넷 연결:{isConnected ? '연결됨' : '연결안됨'} </Text>
      <Text>인터넷 연결 타입:{connectionType} </Text>
    </View>
  );
};

export default App;
