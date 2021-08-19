import React from 'react';
import { Text } from 'react-native-paper';

const Info = ({ choice, gender }) => {
  if (!choice.length || !gender.length) {
    return '';
  }

  return (
    <Text style={{ textAlign: 'center', fontStyle: 'italic' }}>
      Did {gender === 'M' ? 'he' : 'she'}{' '}
      {choice === 'truth' ? 'answered?' : 'do it?'}
    </Text>
  );
};

export default Info;
