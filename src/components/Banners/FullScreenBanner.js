import { useEffect } from 'react';
import { useInterstitialAd } from '@react-native-admob/admob';
import { getadUnitID, getHourDiff } from 'global/helpers/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setRewardTime } from 'store/action/information';

const FullScreenBanner = () => {
  const { adLoadError, adLoaded, show } = useInterstitialAd(
    getadUnitID('fullScreen'),
  );
  const adsRewardTime = useSelector(state => state.information.adsRewardTime);
  const dispatch = useDispatch();

  useEffect(() => {
    if (adLoadError) {
      console.error(adLoadError);
    }
  }, [adLoadError]);

  useEffect(() => {
    if (adLoaded && !adsRewardTime) {
      show();
    }
  }, [adLoaded]);

  if (adsRewardTime) {
    if (getHourDiff(adsRewardTime) > 4) {
      dispatch(setRewardTime(null));
    }
  }

  return null;
};

export default FullScreenBanner;
