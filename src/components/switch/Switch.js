import { COLOR } from 'global/styles';
import React, { useState } from 'react';
import { Switch as AppSwitch } from 'react-native-paper';

const Switch = ({ switchChangeHandler, value }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(value);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    if (switchChangeHandler) {
      switchChangeHandler(!isSwitchOn);
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
