import AsyncStorage from '@react-native-async-storage/async-storage';
import { productionIDs, testIDs } from 'global/constants';
import AdMob, { InterstitialAd, RewardedAd } from '@react-native-admob/admob';
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
    AD_MOB_INIT = true;
  }
};

export const getCurrentDate = () => {
  return dayjs().toString();
};

export const getHourDiff = time => {
  return dayjs().diff(time, 'hour');
};

export const showFullScreenAd = async personalizedAds => {
  try {
    let _adv = InterstitialAd.createAd(getadUnitID('fullScreen'), {
      requestNonPersonalizedAdsOnly: !personalizedAds,
    });
    await _adv.load({
      requestNonPersonalizedAdsOnly: !personalizedAds,
    });
    await _adv.show();
  } catch (err) {
    console.log(err);
  }
};

export const showRewardAd = async personalizedAds => {
  let _adv;
  try {
    await initAdMob();
    _adv = RewardedAd.createAd(getadUnitID('reward'), {
      requestNonPersonalizedAdsOnly: !personalizedAds,
    });
    await _adv.load({
      requestNonPersonalizedAdsOnly: !personalizedAds,
    });
    return _adv;
  } catch (err) {
    throw err;
  } finally {
  }
};
