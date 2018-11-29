
var Gpio = require('pigpio').Gpio;
var servo = [new Gpio(26, {mode: Gpio.OUTPUT}),
		new Gpio(6, {mode: Gpio.OUTPUT}),
		new Gpio(13, {mode: Gpio.OUTPUT}),
		new Gpio(24, {mode: Gpio.OUTPUT})];

/* GET ajax response. */
module.exports = function(req, res) {
    
    if (req.body.hasOwnProperty('action')) {
        switch( req.body.action) {
            case 'write':         
		console.log("Servo Number:" +req.body.servoNumber+ "   Duty Cycle:" + req.body.dutyCycle); 
		servo[req.body.servoNumber-1].servoWrite(req.body.dutyCycle);
                res.contentType('json');
                res.send({ dutyCycle: req.body.dutyCycle, status: req.body.status });           
            break;
        }
      
    }
    // res.contentType('json');
    // res.send({ some: req.body.action });

};
