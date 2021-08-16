import Database from './Database';

const _db = new Database();

export const pushContent = async content => {
  try {
    let query =
      'INSERT INTO info (category, gender, choice, level, text) VALUES';
    content.forEach(row => {
      query += `("${row[0]}","${row[1]}","${row[2]}",${row[3]},"${row[4]}"),`;
    });
    query = query.slice(0, -1);
    await _db.executeSql(query);
  } catch (err) {
    console.log(err);
  }
};

export const getRandomRow = async (category, gender, level, completedIds) => {
  try {
    let completedIdsString = completedIds.length
      ? `AND id NOT IN (${completedIds.join(',')})`
      : '';
    let levelString = Array.isArray(level)
      ? `level IN (${level.join(',')})`
      : `level=${level}`;
    let query = `SELECT id, text, choice FROM info WHERE id IN (SELECT id FROM info WHERE gender IN ('${gender}','both') AND choice='truth' AND ${levelString} AND category='${category}' ${completedIdsString} ORDER BY RANDOM() LIMIT 1)
                UNION SELECT id, text, choice FROM info WHERE id IN (SELECT id FROM info WHERE gender IN ('${gender}','both') AND choice='dare' AND ${levelString} AND category='${category}' ${completedIdsString} ORDER BY RANDOM() LIMIT 1)`;
    let { rows } = await _db.executeSql(query);
    if (rows?.length === 2) {
      let row1 = rows.item(0);
      let row2 = rows.item(1);
      return {
        truth: row1.choice === 'truth' ? row1 : row2,
        dare: row2.choice === 'truth' ? row1 : row2,
      };
    } else {
      return {
        updateLevel: true,
      };
    }
  } catch (err) {
    console.log(err);
  }
};

export const showDatabase = async () => {
  try {
    let query = 'Select * from info';
    var tt = await _db.executeSql(query);
    console.log(tt);
  } catch (err) {
    throw err;
  }
};

export const dropRows = async () => {
  try {
    let query = 'DELETE FROM info';
    await _db.executeSql(query);
  } catch (err) {
    throw err;
  }
};
