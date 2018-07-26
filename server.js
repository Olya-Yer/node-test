var app = require('./app')
var port = 3000;
var server = app.listen(port, function () {
    console.log('listening to port ' + port);
});
