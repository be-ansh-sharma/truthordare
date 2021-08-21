import AsyncStorage from '@react-native-async-storage/async-storage';
import { productionIDs, testIDs } from 'global/constants';
import AdMob from '@react-native-admob/admob';
import dayjs from 'dayjs';
let AD_MOB_INIT = false;

export const getFromStorage = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result != null ? JSON.parse(result) : {};
  } catch (err) {
    throw err;
  }
};

export const setToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw err;
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    throw err;
  }
};

export const getadUnitID = key => {
  return !__DEV__ ? productionIDs[key] : testIDs[key];
};

export const initAdMob = async () => {
  if (!AD_MOB_INIT) {
    await AdMob.initialize();
  }
};

export const getCurrentDate = () => {
  return dayjs().toString();
};

export const getHourDiff = time => {
  return dayjs().diff(time, 'hour');
};
