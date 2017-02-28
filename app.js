$(document).ready(function() {
    // console.log('ready');
    $("button").click(function() {
        getMovie()
    })

    // $.get("http://www.omdbapi.com/?t=rambo", function(data) {
    //     console.log(data);
    // });


});

var getMovie = function() {
    var url = "http://www.omdbapi.com/?t="
    url += $("input").val()
    console.log(url);

    $.get(url, function(data) {
        console.log(data);
        var title = data.Title
        console.log(title, poster);
        var poster = data.Poster
        updatePage(title, poster)
    })
    // .then(function(){
    //     showMessage()
    // })


    function updatePage(title,poster) {
        $(".title").append(title)
        console.log(poster);
        $(".poster").append('<img src="" '> + poster)
    }
};
