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
  let selectedMode = getMode();
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
