$(document).ready(function(){
    $("#mainmenu").click(function(){
        $("#mainmenu").animate({
        left: '0%',
        top: '0%',
        margin: '0 0 0 0'
      
        });
    	$(".menutile").animate({
        width: '100%',
      
        });

 });
 
  $("#one").click(function(){
  $("#onebody").slideDown();
});
});
