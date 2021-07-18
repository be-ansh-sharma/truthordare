import { Battle } from './Battle';
import { Classic } from './Classic';
import { CoupleDirty } from './CoupleDirty';
import { CoupleNormal } from './CoupleNormal';
import { Hot } from './Hot';
import { TabooKinky } from './TabooKinky';
import { Teens } from './Teens';
import { Ultimate } from './Ultimate';

export const fetchCount = mode => {
  let selectedMode;
  let count = 0;
  switch (mode) {
    case 'Battle':
      selectedMode = Battle;
      break;
    case 'Classic':
      selectedMode = Classic;
      break;
    case 'CoupleDirty':
      selectedMode = CoupleDirty;
      break;
    case 'CoupleNormal':
      selectedMode = CoupleNormal;
      break;
    case 'Hot':
      selectedMode = Hot;
      break;
    case 'TabooKinky':
      selectedMode = TabooKinky;
      break;
    case 'Teens':
      selectedMode = Teens;
      break;
    case 'Ultimate':
      selectedMode = Ultimate;
      break;
  }

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
