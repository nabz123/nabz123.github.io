fetch("../../recent.json").then(
   res=>{
       res.json().then(
           data=>{
            var tracks_data = '';
                data.forEach((value) => {             
                    tracks_data += '<tr class="tracks">';
                    tracks_data += '<td><a href="'+value.link+'" target="_blank"><img class="track_src" src='+value.src+' width="2px"></td>';
                    tracks_data += '<td><img class="track_img" src='+value.img+'></td>';
                    tracks_data += '<td class="track_detail2"><b style="font-size: 15px;">'+value.title+'<td class="track_detail1"><b style="font-size: 15px;">'+value.artist+'</span></td>';
                    tracks_data += '<td class="track_played">'+value.played+' Minutes ago</td>';        
                });
               document.getElementById('recent_table').innerHTML = tracks_data;
               console.log(data);
            }
        )
    }
)