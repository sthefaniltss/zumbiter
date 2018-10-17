$("#buttonSubmit").click( function(event){
  event.preventDefault();
  $("#tweet").val();
  insertTweet();

});

function insertTweet (){
  $("#tweets").prepend(`
    <p id="newTweet"> ${$("#tweet").val()} </p>
    `)
}