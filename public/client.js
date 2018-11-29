$(function(){				
    $("#slider1").on("slide", function(slideEvt){        
        var data = {};
        data.action = "write";
	data.servoNumber = 1;
	data.dutyCycle = slideEvt.value;
	console.log(data);
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/ajax',						
            error: function(data) {
                alert("Error");
            }
        });
    });	
    $("#slider2").on("slide", function(slideEvt){        
        var data = {};
        data.action = "write";
	data.servoNumber = 2;
	data.dutyCycle = slideEvt.value;
        console.log(data);
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/ajax',						
            error: function(data) {
                alert("Error");
            }
        });
    });	
    $("#slider3").on("slide", function(slideEvt){        
        var data = {};
        data.action = "write";
	data.servoNumber = 3;
	data.dutyCycle = slideEvt.value;
        console.log(data);
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/ajax',						
            error: function(data) {
                alert("Error");
            }
        });
    });	
    $("#slider4").on("slide", function(slideEvt){        
        var data = {};
        data.action = "write";
	data.servoNumber = 4;
	data.dutyCycle = slideEvt.value;
        console.log(data);
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/ajax',						
            error: function(data) {
                alert("Error");
            }
        });
    });				
});