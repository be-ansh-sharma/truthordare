import React, { useEffect } from 'react';
import { View } from 'react-native';
import Header from 'components/header/Header';
import Body from 'components/game/body/Body';
import { initiateGame } from 'store/action/information';
import { useDispatch, useSelector } from 'react-redux';
import VersionCheck from 'react-native-version-check';
import Loader from 'components/loader/Loader';

const CurrentVersionNumber = VersionCheck.getCurrentVersion();

const Players = () => {
  const dispatch = useDispatch();
  const versionNumber = useSelector(state => state.information.versionNumber);
  useEffect(() => {
    dispatch(initiateGame());
  }, [dispatch]);

  if (versionNumber !== CurrentVersionNumber) {
    return <Loader currentVersion={CurrentVersionNumber} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title={null} mode="compact" showBack showSettings />
      <Body />
    </View>
  );
};

export default Players;
