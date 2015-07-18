/**
* Created with LIS2360_Lesson7_jQuery.
* User: mmk11c
* Date: 2015-07-18
* Time: 01:14 AM
* To change this template use Tools | Templates.

Program Name: Recipe Display Application 

Author: Mary Kelly  
Date: 7/17/15
Filename: script.js
*/
    $("h3").click(display);    

    function display(event){
    $(event.currentTarget).next().fadeIn("slow");
    }

   // $("h3").click(display2);
   
$("h3").hover(display2);

    function display2(event) {
    $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
    }

    $("h3").hover(function(){
       $(this).css("background-color", "yellow");
       }, function(){
       $(this).css("background-color", "pink");
     })
    
    $("#x").click(function() {
         $('body').css({'background-color':'black'});     
     });
