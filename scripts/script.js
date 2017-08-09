function setAverage(){
	$("#average").val( ($("#distance").val() / $("#amount").val()).toFixed(4) );
}

$("#avgBtn").on('click', function(event){
	event.preventDefault();
	setAverage();
});

$("#slidePad").mousemove(function(e){
    e.preventDefault();
    $("#output").val(e.originalEvent.movementY);
});

// Variable to hold request
//var request;

// Bind to the submit event of our form
// $("#dieselForm").submit(function(event){
// 	event.preventDefault();
// 	setAverage();
	
//     // Abort any pending request
//     if (request) {
//         request.abort();
//     }
//     // setup some local variables
//     var $form = $(this);
// 	var $button = $('#submitBtn');
	
//     // Let's select and cache all the fields
//     var $inputs = $form.find("input");
	
//     // Serialize the data in the form
//     var serializedData = $form.serialize();
	
//     // Let's disable the inputs for the duration of the Ajax request.
//     // Note: we disable elements AFTER the form data has been serialized.
//     // Disabled form elements will not be serialized.
//     $inputs.prop("disabled", true);

//     // Fire off the request to /form.php
//     request = $.ajax({
//         url: "https://script.google.com/macros/s/AKfycbz3NUvOMbUfPEPB8jnVmxEfSn-OExc7N62g88VQionRgxxtt6c/exec",
//         type: "post",
//         data: serializedData,
// 		crossDomain: true
//     });

//     // Callback handler that will be called on success
//     request.done(function (response, textStatus, jqXHR){
		
// 		$button.html("Data indsendt!");
// 		$button.removeClass('btn-primary');
// 		$button.addClass('btn-success');
		
// 		setTimeout(function(){
// 			$form[0].reset();
// 			$button.html("Indsend data");
// 			$button.removeClass('btn-success');
// 			$button.addClass('btn-primary');
// 		}, 2000);

//     });

//     // Callback handler that will be called on failure
//     request.fail(function (jqXHR, textStatus, errorThrown){

// 		$button.html("Fejl - data ikke indsendt :(");
// 		$button.removeClass('btn-primary');
// 		$button.addClass('btn-danger');

// 		setTimeout(function(){
// 			//$form[0].reset();
// 			$button.html("Indsend data");
// 			$button.removeClass('btn-danger');
// 			$button.addClass('btn-primary');
// 		}, 2000);
		
// 		// Log the error to the console
//         console.error(
//             "The following error occurred: "+
//             textStatus, errorThrown
//         );
//     });

//     // Callback handler that will be called regardless
//     // if the request failed or succeeded
//     request.always(function () {
//         // Reenable the inputs
//         $inputs.prop("disabled", false);
//     });
	
// });