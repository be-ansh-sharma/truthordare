import { COLOR } from 'global/styles';
import React, { useState } from 'react';
import { Switch as AppSwitch } from 'react-native-paper';

const Switch = ({ switchChangeHandler }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    if (switchChangeHandler) {
      switchChangeHandler();
    }
  };
  return (
    <AppSwitch
      value={isSwitchOn}
      color={COLOR.primary}
      onValueChange={onToggleSwitch}
    />
  );
};

export default Switch;
