import React, { useEffect } from 'react';
import { View } from 'react-native';
import Header from 'components/header/Header';
import Body from 'components/game/body/Body';
import { initiateGame } from 'store/action/information';
import { useDispatch } from 'react-redux';

const Players = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('sd;');
    dispatch(initiateGame());
  }, [dispatch]);
  return (
    <View style={{ flex: 1 }}>
      <Header title={null} mode="compact" showBack showSettings />
      <Body />
    </View>
  );
};

export default Players;
