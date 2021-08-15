import { openDatabase } from 'react-native-sqlite-storage';

export default class Database {
  constructor() {
    this.db = openDatabase({ name: 'truthordare.db' });
    this.db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS info (id INTEGER PRIMARY KEY AUTOINCREMENT, category TEXT, gender TEXT, choice TEXT, level INT, text TEXT)',
      );
    });
  }

  executeSql = async (sql, params = []) => {
    return new Promise((resolve, reject) =>
      this.db.transaction(tx => {
        tx.executeSql(
          sql,
          params,
          (_, data) => resolve(data),
          (_, error) => reject(error),
        );
      }),
    );
  };
}
