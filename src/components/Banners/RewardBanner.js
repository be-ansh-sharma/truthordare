import { useEffect } from 'react';
import { useRewardedAd } from '@react-native-admob/admob';
import { getadUnitID, getCurrentDate } from 'global/helpers/utils';
import { setRewardTime } from 'store/action/information';
import { useDispatch } from 'react-redux';

const RewardBanner = ({ rewardHandler }) => {
  const dispatch = useDispatch();
  const { adLoadError, adLoaded, show, reward } = useRewardedAd(
    getadUnitID('reward'),
  );

  useEffect(() => {
    if (adLoadError) {
      rewardHandler();
    }
  }, [adLoadError, rewardHandler]);

  useEffect(() => {
    if (adLoaded) {
      console.log('asdasdasda');
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
