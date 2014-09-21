$(function(){
	
	var data_text=$('#data');
	
	//Do what we need to when form is submitted.	
	$('#submit').click(function(){
	
	
	
	//Setup any needed variables.
	var input_name = $('#name').val(),
	input_email = $('#email').val(),
	input_subject = $('#subject').val(),
	input_message = $('#message').val();
	 //,
	
		//response_text = $('#response');
		//Hide any previous response text 
		//response_text.hide();
		
		//Change response text to 'loading...'
		//response_text.html('Loading...').show();
		
		//Make AJAX request 
		$.post('contact-send.php', {name: input_name, email: input_email, subject: input_subject, message: input_message}, function(data){
		    //$('p#response #success').css('display' : 'inline');
			//data_text.html("Please Correct Errors Below:");
			data_text.html("Loading...");
			change_required(data);
			//alert("sent");
		});
		
		//Cancel default action
		return false; 
	});
	//this function takes in a string of text and changes appropriate
	//required tags to display the error
	//it also changes them to ok - secondary functionality
	function change_required(data){
	  
	  //name error
	  if(data.indexOf('sent')==-1){
	   
	   $('p#data').attr('class', 'fail');
	   data_text.html("Please correct the errors below:");
	   
		if (data.indexOf('Name')!=-1){
		
		$('p#name_block .required span').html('Please fill out your name');
		 $('p#name_block span:first').attr('class', 'required error');

		}
		 else {
	
		 $('p#name_block span:first').attr('class', 'required ok');
		 $('p#name_block .required span').html('ok');
		 }
		 
		 
	  //email error
		if (data.indexOf('Email')!=-1){
		$('p#email_block span:first').attr('class', 'required error');
		
		
		 if(data.indexOf('invalid')!=-1){
		  
			$('p#email_block .required span').html('Please fill out a valid email address');
		 }
		 //email is blank
	
		 else{
			
			$('p#email_block .required span').html('Please fill out an email address');
		 }
		
		}
		else {$('p#email_block .required span').html('ok');
			$('p#email_block span:first').attr('class', 'required ok');
	
		
		
		}
		
	   //message error
		if (data.indexOf('Message')!=-1){
		$('p#message_block span:first').attr('class', 'required error');
		$('p#message_block .required span').html('Please enter your message below');
		}
		else{$('p#message_block .required span').html('ok');
				$('p#message_block span:first').attr('class', 'required ok');
		
		}
	  
	 if(data.indexOf('problem')!=-1){
	 
	 data_text.html("There was a problem sending your email.<br/> Please try again later.");
	 }
	 
	 }//end fail
	 
	
	 
	 else {
	 $('p#data').attr('class', 'success');
	data_text.html("Thank you.Your email has been sent.");
	$('p#name_block span:first').attr('class', 'required');
	$('p#email_block span:first').attr('class', 'required');
	$('p#message_block span:first').attr('class', 'required');
	 $('p#name_block .required span').html('Required');
	 $('p#email_block .required span').html('Required');
	  $('p#message_block .required span').html('Required');
	  
	  $('#name').val('');
	  $('#email').val('');
	  $('#subject').val('');
	  $('#message').val('');
	 }
	}//end function

});