import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { BannerAd } from '@react-native-admob/admob';
import { getadUnitID, initAdMob } from 'global/helpers/utils';
import { useSelector } from 'react-redux';

const screenWidth = Dimensions.get('window').width;

const SmartBanner = () => {
  const [error, setError] = useState(false);
  const [hasAds, setHasAds] = useState(false);
  const [loading, setLoading] = useState(true);
  const bannerError = () => setError(true);
  const adsReceived = () => setHasAds(true);
  const personalizedAds = useSelector(
    state => state.information.personalizedAds,
  );

  useEffect(() => {
    if (loading) {
      const init = async () => {
        await initAdMob();
        setLoading(false);
      };
      init();
    }
  }, []);

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
