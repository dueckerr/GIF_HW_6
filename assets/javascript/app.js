$(document).ready(function() {
    var comics = [ "Louis C.K", "Dangerfield", "Dave Chappelle", "Mitch Hedberg"];
    var comic;
    // var apikey = "Fnhf0tnlehUm2qCPLYl9lC6QSEA0KuQZ=&q=";
    // click button to import 10 gifs 
    $(document).on("click", ".comic-btn", function (comic) {
            comic = $(this).attr("data-name");  
            console.log(comic);
            // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&tag=" + comic ;
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + comic +  "&api_key=Fnhf0tnlehUm2qCPLYl9lC6QSEA0KuQZ&limit=10";  
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
                    var divRating = $("<p>").text("Rating: " + gifRating + "<br>");
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
);
        
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
        // emptys array to prevent doublew
        $("#allbuttons").empty();
        for (var i = 0; i < comics.length; i++) {
            var newbtn = $("<button>");
            newbtn.addClass("comic-btn");
            newbtn.attr("data-name", comics[i]);
            newbtn.text(comics[i]);
            $("#allbuttons").append(newbtn);

        }
    }

    // and a button that with the name of the comic
    $("#add-comic").on("click", function(event) {
        event.preventDefault();
        // grabs inpout form search bocx
        var comic = $("#comic-input").val().trim();
        // pushes new comic into comics array
        comics.push(comic);
        console.log(comic);
        // call function to add button for comic
        createButton ();
        });

    createButton();
        // 
     function animate () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        var animategif = $(this).attr("data-animate");
        var stillgif = $(this).attr("data-still");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      };
      $(document).on("click", ".gif", animate);

});

