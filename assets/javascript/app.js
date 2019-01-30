$(document).ready(function() {
    var Pryor = "Richard Pryor"
    var comics = [ "Louis C.K", "Dangerfield", "Dave Chappelle", "Mitch Hedberg"];
    var comic;
    // var apikey = "Fnhf0tnlehUm2qCPLYl9lC6QSEA0KuQZ=&q=";

    function showgif() {
        comic = $(this).attr("data-name");  
        console.log(comic);
        // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&tag=" + comic ;
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + comics +  "&api_key=Fnhf0tnlehUm2qCPLYl9lC6QSEA0KuQZ&limit=10";  
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            for (var i =0; i < 10; i++) {
            var gifArray = response.data;
            var comicgif = $("<img>")
            comicgif.attr("src", gifArray[i].images.fixed_height_still.url);
            comicgif.attr("data-still", gifArray[i].images.fixed_height_still.url);
            comicgif.attr("data-animate", gifArray[i].images.fixed_height.url);
            comicgif.addClass("gif")
            comicgif.attr("data-state", "still")

            var comicDiv = $("<div class = 'comic'>");
            // console.log(response);
            var gifRating = gifArray[i].rating;
            var divRating = $("<p>").text("Rating: " + gifRating);
            comicDiv.append(gifRating);
            comicDiv.append(comicgif);



            // // console.log(gifArray);
            // var imgURL = response.data.image_original_url;
            // // var  = $("<p>").text("Rating: " + gifArray.rating);
            // comicgif.attr("src", imgURL);
            // var title = response.data.title;
            // var pTitle = 0;

            $("#comic-gif").prepend(comicDiv);
            console.log(response);
            // console.log(comic);
            // console.log(title);
            }
        })
    }

    // function appendGifs(gifs) {
    //     for (var i = 0; i <= 10; i++) {
    //       console.log(gifs[i])
    //       var dataImage = $("<img>");
    //       dataImage.attr("src", gifs[i].images.fixed_height_still.url);
    //       dataImage.attr("data-still", gifs[i].images.fixed_height_still.url);
    //       dataImage.attr("data-animate", gifs[i].images.fixed_height.url);
    //       dataImage.addClass("gif");
    //       dataImage.attr("data-state", "still");
    
    //       var newItemdiv = $('<div class="newItem">');
    //       var gifRating = gifs[i].rating;
        //   var divRating = $("<p>").text("Rating: " + gifRating);
    
    //       newItemdiv.append(divRating);
    //       newItemdiv.append(dataImage);
    
    //       $("#gifs").prepend(newItemdiv);
    //     }
    //   }

    // Function that creates new comic buttons
    function createButton(){
        $("#allbuttons").empty();
        for (var i = 0; i < comics.length; i++) {
            var a = $("<button>");
            a.addClass("comic-btn");
            a.attr("data-name", comics[i]);
            a.text(comics[i]);
            $("#allbuttons").append(a);

        }
    }

    // Function for clicking comic
    $("#add-comic").on("click", function(event) {
        event.preventDefault();
        var comic = $("#comic-view").val().trim();
        comics.push(comic);
        console.log(response);
        });

    $(document).on("click", ".comic-btn", function () {

        showgif();
        comic = $(this).attr("data-name");  
        console.log(comic);
    } );
    createButton();
});

