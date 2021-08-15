import Database from './Database';

const _db = new Database();

export const pushContent = async content => {
  try {
    let query = 'INSERT INTO info (category, gender, choice, level, text) VALUES';
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
    let query = `SELECT * FROM info WHERE id IN (SELECT id FROM table ORDER BY RANDOM() LIMIT 1 AND gender='${gender}' AND choice='truth' AND level='${level}' AND category='${category}')`;
    var tt = await _db.executeSql(query);
    var gg = 'asd';
  } catch (err) {
    console.log(err);
  }
};

export const showDatabase = async () => {
  try {
    let query = 'Select * from info';
    var tt = await _db.executeSql(query);
    var fff = 'ad';
  } catch (err) {
    console.log(err);
  }
};

export const dropRows = async () => {
  try {
    let query = 'DELETE FROM info';
    await _db.executeSql(query);
  } catch (err) {
    console.log(err);
  }
};
