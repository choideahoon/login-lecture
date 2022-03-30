"use strict";

class UserStorage {
    static #users = {
    id: ["cdh", "cd"],
    passwd: ["123", "12"],
    name: ["최대훈"],
};

    static getUsers(...fields){
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {                       
          if (users.hasOwnProperty(field)) {
              newUsers[field] = users[field];
          }
            return newUsers;
        }, {});
        return newUsers;    
    }
}

module.exports = UserStorage;