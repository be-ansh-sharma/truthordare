import { useEffect } from 'react';
import { useRewardedAd } from '@react-native-admob/admob';
import { getadUnitID, getCurrentDate } from 'global/helpers/utils';
import { setRewardTime } from 'store/action/information';
import { useDispatch, useSelector } from 'react-redux';

const RewardBanner = ({ rewardHandler }) => {
  const dispatch = useDispatch();
  const personalizedAds = useSelector(
    state => state.information.personalizedAds,
  );
  const { adLoadError, adLoaded, show, reward } = useRewardedAd(
    getadUnitID('reward'),
    {
      requestOptions: {
        requestNonPersonalizedAdsOnly: !personalizedAds,
      },
    },
  );

  useEffect(() => {
    if (adLoadError) {
      rewardHandler();
    }
  }, [adLoadError, rewardHandler]);

  useEffect(() => {
    if (adLoaded) {
      show();
    }
  }, [adLoaded]);

  useEffect(() => {
    if (reward) {
      dispatch(setRewardTime(getCurrentDate()));
      rewardHandler();
    }
  }, [reward, rewardHandler]);

  return null;
};

export default RewardBanner;
