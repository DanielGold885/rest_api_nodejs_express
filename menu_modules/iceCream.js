const fs = require('fs');
const DATA_FILE = './menu_data/icecream.json';


let iceCream = {
    //Make get a function and pass in in 2 callbacks (Resolve & Reject)
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
