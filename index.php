<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
   
 
	<!-- include jQuery library -->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
	<script type="text/javascript" src="mailscript.js"></script>
    
    <link href="styles/formstyles.css" rel="stylesheet" type="text/css" media="screen, projection" />

</head>
<body>
<div id="wrapper">
<div id="content-wrapper">

<div id="contact-form">

<h3>Contact</h3>
	 <form id="contact-form" method="post" action="contact-send.php">
	    <p id="data"></p>

		<p id="name_block"><label for="name">Name</label>
		<span class="required"><span>Required</span></span><br/>
		<input name="name" id="name" type="text"/></p>
		
		<p id="email_block"><label for="email">Email</label> 
		<span class="required"><span>Required</span></span><br/>
		<input name="email" id="email" type="text"/></p>
		
		<p><label for="subject">Subject</label><br/> 
		<input name="subject" id="subject" type="text"/></p>
		
		<p id="message_block"><label for="message">Message</label> 
		<span class="required"><span>Required</span></span><br/>
		<textarea name="message" id="message" rows="8" value=""></textarea></p>
		
		<input name="submit" id="submit" type="submit" value="Send"/>
		</form>
</div><!--contact-form-->

</div><!--end content wrapper-->

</div><!--end wrapper-->
</body>
</html>