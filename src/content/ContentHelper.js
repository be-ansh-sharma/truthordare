import { Battle } from './Battle';
import { Classic } from './Classic';
import { CoupleDirty } from './CoupleDirty';
import { CoupleNormal } from './CoupleNormal';
import { Hot } from './Hot';
import { TabooKinky } from './TabooKinky';
import { Teens } from './Teens';
import { Ultimate } from './Ultimate';

const getMode = mode => {
  switch (mode) {
    case 'Battle':
      return Battle;
    case 'Classic':
      return Classic;
    case 'CoupleDirty':
      return CoupleDirty;
    case 'CoupleNormal':
      return CoupleNormal;
    case 'Hot':
      return Hot;
    case 'TabooKinky':
      return TabooKinky;
    case 'Teens':
      return Teens;
    case 'Ultimate':
      return Ultimate;
  }
};

export const fetchCount = async mode => {
  let selectedMode = getMode(mode);
  let count = 0;

  Object.keys(selectedMode).map(item => {
    let innerItems = selectedMode[item];
    Object.keys(innerItems).map(
      innerItem =>
      (count +=
        innerItems[innerItem].truth.length +
        innerItems[innerItem].dare.length),
    );
  });

  return count;
};

export const fetchTruthORDare = async (mode, gender, currentGame) => {
  gender = gender === 'M' ? 'male' : 'female';
  let selectedMode = getMode(mode);
  let { level, completed } = currentGame;
  let truth = [
    ...selectedMode.both[level].truth,
    ...selectedMode[gender][level].truth,
  ];
  let dare = [
    ...selectedMode.both[level].dare,
    ...selectedMode[gender][level].dare,
  ];

  let truthObject = fetchRandomArrayElement(
    truth.length,
    completed,
    gender,
    level,
    truth.length,
    mode,
  );
  let dareObject = fetchRandomArrayElement(
    dare.length,
    completed,
    gender,
    level,
    truth.length,
    mode,
  );

  return {
    truth: {
      index: truthObject.index,
      text: truth[truthObject.random].text,
    },
    dare: {
      index: dareObject.index,
      text: dare[dareObject.random].text,
    },
  };
};

const fetchRandomArrayElement = (
  maxNumber,
  completed,
  gender,
  level,
  length,
  mode,
) => {
  let flag = true;
  let random;
  while (flag) {
    random = Math.floor(Math.random() * maxNumber);
    if (completed.both[level][mode]?.includes(random)) {
      continue;
    } else if (random > length) {
      if (completed[gender][level][mode]?.includes(random - length)) {
        continue;
      }
    }
    flag = false;
  }

  return {
    random,
    index: random > length ? random - length : random,
  };
};
