import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { BannerAd } from '@react-native-admob/admob';
import { getadUnitID, initAdMob, getHourDiff } from 'global/helpers/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setRewardTime } from 'store/action/information';

const screenWidth = Dimensions.get('window').width;

const SmartBanner = () => {
  const [error, setError] = useState(false);
  const [hasAds, setHasAds] = useState(false);
  const [loading, setLoading] = useState(true);
  const bannerError = () => setError(true);
  const adsReceived = () => setHasAds(true);
  const dispatch = useDispatch();
  const { personalizedAds, adsRewardTime } = useSelector(
    state => state.information,
  );

  useEffect(() => {
    if (loading && !adsRewardTime) {
      const init = async () => {
        await initAdMob();
        setLoading(false);
      };
      init();
    }
  }, []);

  if (adsRewardTime) {
    if (getHourDiff(adsRewardTime) > 4) {
      dispatch(setRewardTime(null));
    } else {
      return null;
    }
  }

  if (error || loading) {
    return null;
  }

  return (
    <View
      style={
        hasAds ? { width: screenWidth } : { height: 0, width: screenWidth }
      }>
      <BannerAd
        size="FULL_BANNER"
        unitId={getadUnitID('banner')}
        onAdFailedToLoad={bannerError}
        onAdLoaded={adsReceived}
        requestOptions={{
          requestNonPersonalizedAdsOnly: !personalizedAds,
        }}
      />
    </View>
  );
};

export default SmartBanner;
