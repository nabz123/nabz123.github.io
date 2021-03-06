fetch("../../toptracks.json").then(
   res=>{
       res.json().then(
           data=>{
            var tracks_data = '';
               data.forEach((value) => {
                  tracks_data += '<tr class="tracks">';
                  tracks_data += '<td class="track_id">'+value.id+'</td>';
                  tracks_data += '<td><a href="'+value.link+'" target="_blank"><img class="track_src" src='+value.src+'></td>';
                  tracks_data += '<td><img class="track_img" src='+value.img+'></td>';
                  tracks_data += '<td class="track_detail"><b style="font-size: 15px">'+value.Title+'</b><br><span style="font-size: 13px">'+value.artist+'</span></td>';
                  tracks_data += '<td class="track_count"><span class="chartlist-count-bar-slug" style="width:'+value.plays+'%">'+value.plays+' Listeners</span></td>';
                  tracks_data += '</tr>';                  
               });
            document.getElementById('tracks_table').innerHTML = tracks_data;
            console.log(data);
         }
      )
   }
)
document.addEventListener("click",function(event){
if (event.target.matches(".heartlove"))
{
   event.target.classList.remove("heartlove");
   event.target.classList.add("heartunolve");
}
else if(event.target.matches(".heartunolve"))
{
   event.target.classList.remove("heartunolve");
   event.target.classList.add("heartlove");
   }
});
    