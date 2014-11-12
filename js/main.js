var $button = $("#submitButton"); //selects the submit button and crates a variable for it.


$button.click(function(){ //when clicked...
console.log("hheeekllsfdkjf")	
  var $month = $('#chooseMonth').val();
  var $day = $('#chooseDay').val(); 
  var $year = $('#chooseYear').val();
  var $daystring = $("<span class='theDate'><h2>" + $month + " " + $day + ", " + $year + " huh?... It's time to</h2>" + "</span>");
  var $treat = $("<h1 class='treatYoSelf' display='inline-block' id='treat'>TREAT</h1>");
  var $yo = $("<h1 class='treatYoSelf' display='inline-block' id='yo'> YO </h1>");
  var $self = $("<h1 class='treatYoSelf' display='inline-block' id='self'> SELF!</h1>");
  var $vid = $('<iframe src="http://38.media.tumblr.com/81733d66449df963afbd208e14ad5943/tumblr_mwf55cXkRX1r683cxo4_250.gif" frameborder="0" display="inline-block" float="right">');
  $('#alert').append($daystring);
  $('#alert').append($treat);
  $('#alert').append($yo);
  $('#alert').append($self);
  $($daystring).appendTo('#alert');
  $($treat).hide().appendTo('#alert').fadeIn(1500);
  $($yo).hide().appendTo('#alert').fadeIn(3500).delay(800);
  $($self).hide().appendTo('#alert').fadeIn(5500).delay(1800);
  $($vid).appendTo('#video').fadeIn(1500);
  event.preventDefault();
   // stops the browser from refreshing the page
});

/*"<span class='theDate'><h1>" + $month + " " + $day + "," + $year + "</h1></span>";
  $('#alert').append($daystring); 

WHY DOESN'T THIS WORK?
  var $treat = $('Treat');
  var $yo = $("Yo");
  var $self = $("Self");


/*

  var $button = $("#submitButton"); //selects the submit button and crates a variable for it.

$button.click(function(){ //when clicked...
console.log("hheeekllsfdkjf")	
  var $month = $('#chooseMonth').val();
  var $day = $('#chooseDay').val(); 
  var $year = $('#chooseYear').val();
  var $daystring = $("<span class='theDate'><h2>" + $month + " " + $day + ", " + $year + "...</h2><h1>TREAT YO SELF</h1></span>").fadeIn(2000);
  $('#alert').append($daystring);
  event.preventDefault(); // stops the browser from refreshing the page
});

/*"<span class='theDate'><h1>" + $month + " " + $day + "," + $year + "</h1></span>";
  $('#alert').append($daystring); */