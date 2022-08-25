$(document).ready(function(){
    $('#submitBtn').click(function(){
        console.log($('#nameInput').val())
      $('#nameOutput').text('Hello, ' + $('#nameInput').val());
    });
  });