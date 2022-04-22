"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject ) => {
            const query = "SELECT * FROM users WHERE ID = ?;"
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                console.log(data[0]);
                resolve(data[0]);
        });
       });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject ) => {
            const query = "insert into users(id, name, passwd) values(?, ?, ?);"
            db.query(
                query, 
                [userInfo.id, userInfo.name, userInfo.passwd],
                (err) => {
                    if (err) reject(`${err}`);
                        resolve({ success: true });
        });
       });
    }

}


module.exports = UserStorage;