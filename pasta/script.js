$(document).ready(function (){
  $("#buttonSubmit").click( function(event){
    event.preventDefault();
    $("#tweet").val();
    insertTweet();

  });


  function insertTweet (){
    $("#tweets").prepend(`
      <p class="bg-warning p-5" id="newTweet"> ${$("#tweet").val()} </p>
      `)
  }

  function charCounter (){
    let charLeft = 280 - $("#tweet").val().length;
    return $("#counter").text(`Você ainda tem ${charLeft} caracteres`)
  }

  $("#tweet").keyup(function(){
    charCounter();
  });

});