const fs = require('fs');
const DATA_FILE = './menu_data/icecream.json';


let iceCream = {
    get: (resolve, reject) => {
        fs.readFile(DATA_FILE, (error, data) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    }
};


module.exports = iceCream;

