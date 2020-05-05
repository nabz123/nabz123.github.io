fetch("../../topArtists.json").then(
    res=>{
        res.json().then(
            data=>{
                var element ="";
                data.forEach((item) => {
                    element += '<div class="xxx"><img class="imgflex" src="' + item.src + '"><p class="imageHead">'
                    + item.name+'</p> <p class="imageText">' + item.plays+ '</p></div>';                  
                });
                document.getElementById("artist_container").innerHTML = element;
                console.log(data);
            }
        )
    }
)