const express = require('express');
const app = express();
const router = express.Router();

let iceCreamData = require("./menu_modules/iceCream.js");


const PORT = 3000;

//Creating a GET to return a json object containing our status and data
router.get('/', (req, res, next) => {
    iceCreamData.get((data) => {
        res.status(201).json({
            "status": 200,
            "statusText": "OK",
            "data": data
        });
    }, (error) => {
        next(error);
    });
});


app.use('/api/', router)

let server = app.listen(PORT, () => {
    console.log(`========== Server is listening on port ${PORT} ==========`);
});


