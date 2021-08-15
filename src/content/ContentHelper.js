import { Battle } from './Battle';
import { Classic } from './Classic';
import { CoupleDirty } from './CoupleDirty';
import { CoupleNormal } from './CoupleNormal';
import { Hot } from './Hot';
import { TabooKinky } from './TabooKinky';
import { Teens } from './Teens';
import { Ultimate } from './Ultimate';
import { dropRows, getRandomRow, pushContent } from 'global/database/Database.helper';

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
  return selectedMode.length;
};

export const fetchTruthORDare = async (
  category,
  gender,
  level,
  completedIds,
) => {
  gender = gender === 'M' ? 'male' : 'female';
  await getRandomRow(category, gender, level, completedIds);
  return {
    level: 1,
    truth: {
      index: 0,
      text: 'asd',
      gender: 'male',
    },
    dare: {
      index: 0,
      text: 'asd',
      gender: 'male',
    },
  };
};

export const setupContent = async () => {
  await dropRows();
  [
    'Battle',
    'Classic',
    'CoupleDirty',
    'CoupleNormal',
    'Hot',
    'TabooKinky',
    'Teens',
    'Ultimate',
  ].forEach(mode => {
    let selected = getMode(mode);
    pushContent(selected);
  });
};

// export const fetchTruthORDare = async (mode, gender, currentGame) => {
//   try {
//     gender = gender === 'M' ? 'male' : 'female';
//     let selectedMode = getMode(mode);
//     let { level, completed } = currentGame;
//     let truth = [
//       ...selectedMode.both[level].truth,
//       ...selectedMode[gender][level].truth,
//     ];
//     let dare = [
//       ...selectedMode.both[level].dare,
//       ...selectedMode[gender][level].dare,
//     ];

//     let truthObject = fetchRandomArrayElement(
//       truth.length,
//       completed,
//       gender,
//       level,
//       selectedMode.both[level].truth.length,
//       'truth',
//     );
//     let dareObject = fetchRandomArrayElement(
//       dare.length,
//       completed,
//       gender,
//       level,
//       selectedMode.both[level].dare.length,
//       'dare',
//     );

//     console.log(truthObject);
//     console.log(truth);
//     console.log(truth[truthObject.random].text);
//     console.log(dareObject);
//     console.log(dare);
//     console.log(dare[dareObject.random].text);
//     console.log(completed);

    // return {
    //   level,
    //   truth: {
    //     index: truthObject.index,
    //     text: truth[truthObject.random].text,
    //     gender: truthObject.gender,
    //   },
    //   dare: {
    //     index: dareObject.index,
    //     text: dare[dareObject.random].text,
    //     gender: dareObject.gender,
    //   },
    // };
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

// const fetchRandomArrayElement = (
//   maxNumber,
//   completed,
//   gender,
//   level,
//   length,
//   mode,
// ) => {
//   let flag = true;
//   let random;

//   if (
//     level != 3 &&
//     completed.both[level][mode].length +
//       completed[gender][level][mode].length >=
//       maxNumber
//   ) {
//     throw new Error({ NOCARD: true });
//   }

//   while (flag) {
//     random = Math.floor(Math.random() * maxNumber);
//     if (completed.both[level][mode]?.includes(random)) {
//       continue;
//     } else if (random > length) {
//       if (completed[gender][level][mode]?.includes(random - length)) {
//         continue;
//       }
//     }
//     flag = false;
//   }

//   return {
//     random,
//     index: random >= length ? random - length : random,
//     gender: random >= length ? gender : 'both',
//   };
// };
