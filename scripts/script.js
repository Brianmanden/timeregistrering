//Variable to hold request
var request;

//var signInTime = $('input[name=signInTime]');
const signInElem = document.querySelector('input[name=signInTime]');
const hours = document.querySelector('input[name=hours]');
const signOutElem = document.querySelector('input[name=signOutTime]');

function convertToHours(inputVal){
    const hourParts = inputVal.toString().split(":");
    return Number(hourParts[0]) + Number(hourParts[1]) / 60;
}

function convertToTime(inputVal){
    const timeParts = inputVal.toString().split(".");
    return timeParts[0] + ":"+ ("00" + timeParts[1] * 0.6).slice(-2);
}

hours.onblur = () => {
    signOutElem.value = convertToTime(Number(Number(convertToHours(signInElem.value)) + Number(hours.value)).toFixed(2));
}

signOutElem.onblur = () => {
    hours.value = convertToHours(signOutElem.value) - convertToHours(signInElem.value);
};

//Bind to the submit event of our form
$("#timeForm").submit(function(event){
	event.preventDefault();
	
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);
	var $button = $('#submitBtn');
	
    // Let's select and cache all the fields
    var $inputs = $form.find("input");
	
    // Serialize the data in the form
    var serializedData = $form.serialize();
	
    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);
    $button.html("Sender data...");

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyk8v75o5t1qeU9MLDgszi_4n7UyVJ6EawVz5Tmnx0qWHo4V8w/exec",
        type: "post",
        data: serializedData,
		crossDomain: true
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
		
		$button.html("Data indsendt!");
		$button.removeClass('btn-primary');
		$button.addClass('btn-success');
		
		setTimeout(function(){
			$form[0].reset();
			$button.html("Indsend data");
			$button.removeClass('btn-success');
			$button.addClass('btn-primary');
		}, 2000);

    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){

		$button.html("Fejl - data ikke indsendt :(");
		$button.removeClass('btn-primary');
		$button.addClass('btn-danger');

		setTimeout(function(){
			//$form[0].reset();
			$button.html("Indsend data");
			$button.removeClass('btn-danger');
			$button.addClass('btn-primary');
		}, 2000);
		
		// Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
	
});