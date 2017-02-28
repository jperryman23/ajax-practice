$(document).ready(function(){
    console.log('ready');

    $.get("http://www.omdbapi.com/?t=rambo", function(data) {
        console.log(data);
});
});
