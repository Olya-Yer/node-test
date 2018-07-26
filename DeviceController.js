var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());



router.post('/', function (req, res) {

    var deviceId = req.body;
    var json_dev = JSON.stringify(deviceId);
    fs.writeFile("test.json", json_dev, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Device ID is received", json_dev);
    });
    console.log("--------req.body.deviceid-----", req.body.deviceId);
    res.status(200).send({ name: req.body.deviceId });
})

router.get('/', function (req, res) {
    var obj = {};
    fs.readFile('test.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            console.log("sending json file", obj);
            res.append('Access-Control-Allow-Origin', ['*']);
            res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.append('Access-Control-Allow-Headers', 'Content-Type');
            res.status(200).send(obj);
        }
    });

})



module.exports = router;
