import { setupContent } from 'content/ContentHelper';
import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { setVersionNumber } from 'store/action/information';
import LottieView from 'lottie-react-native';
import { COLOR } from 'global/styles';

const Loader = ({ currentVersion }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setupContent().then(() => {
      dispatch(setVersionNumber(currentVersion));
    });
  }, [currentVersion, dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLOR.dark} />
      <LottieView
        loop={true}
        autoPlay={true}
        source={require('assets/animations/loader.json')}
      />
    </View>
  );
};

export default Loader;
