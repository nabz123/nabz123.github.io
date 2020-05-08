//top artist table
$(document).ready(function() {
    $.getJSON("../../topArtists.json", function(data){
    data.forEach(function(item) {
        console.log("top artist")
        var element = $('<div><img class="imgflex" src="' + item.src + '"><p class="imageHead">' 
        + item.name+'</p> <p class="imageText">' + item.plays+ '</p></div>');
        $("#artist_container").append(element); //append to #artist_container
    });
    });
})