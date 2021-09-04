import { Classic } from './Classic';
import { CoupleDirty } from './CoupleDirty';
import { CoupleNormal } from './CoupleNormal';
import { Hot } from './Hot';
import { TabooKinky } from './TabooKinky';
import { Teens } from './Teens';
import {
  dropRows,
  getRandomRow,
  pushContent,
} from 'global/database/Database.helper';

const getMode = mode => {
  switch (mode) {
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
  try {
    let result = await getRandomRow(category, gender, level, completedIds);
    if (result?.updateLevel && !Array.isArray(level) && level !== 3) {
      return await fetchTruthORDare(category, gender, level + 1, completedIds);
    } else if (result?.updateLevel && (level == 3 || Array.isArray(level))) {
      if (Array.isArray(level)) {
        let _error = new Error('Not enough Cards');
        _error.NOCARD = true;
        throw _error;
      } else {
        return await fetchTruthORDare(category, gender, [2, 3], completedIds);
      }
    }

    return {
      level,
      ...result,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const setupContent = async () => {
  try {
    await dropRows();
    [
      'Classic',
      'CoupleDirty',
      'CoupleNormal',
      'Hot',
      'TabooKinky',
      'Teens',
    ].forEach(mode => pushContent(getMode(mode)));
  } catch (err) {
    throw err;
  }
};
