var socket = io();

$('form').on('submit', function () {
    var text= $("#message").val();
    var initial = $('#initials').val();
    socket.emit('message', initial+ " says: " + text );
    $("#message").val(" ");
    $("#initials").val(" ");
    return false;
});

socket.on('message', function(msg){
    $('<li>').text(msg).appendTo("#history")
});

socket.on('message', function(msg){
    $('<li>').text(msg).appendTo("#initials")
});