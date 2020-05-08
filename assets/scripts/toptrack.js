//Top Tracks Table
$(document).ready(function(){
    $.getJSON("../../toptracks.json", function(data){
       let tracks_data = '';
       $.each(data, function(key, value){
         tracks_data += '<tr class="tracks">'; 
         tracks_data += '<td class="track_id">'+value.id+'</td>'; //fetches song id from json file
         tracks_data += '<td class="track_btn"><a href="'+value.link+'" target="_blank"><i class="far fa-play-circle"></i></a></td>'; //fetches play button from library 
         tracks_data += '<td><img class="track_img" src='+value.img+'></td>'; //fetches image from json file
         tracks_data += '<td class="track_detail"><b style="font-size: 15px">'+value.Title+'</b><br><span style="font-size: 13px">'+value.artist+'</span></td>'; 
         tracks_data += '<td class="track_count"><span class="chartlist-count-bar-slug" style="width:'+value.plays+'%">'+value.plays+' Plays</span></td>';
         tracks_data += '</tr>';
      });
      $('#tracks_table').append(tracks_data); //append to div with the id tracks_table
   });
});

//Heart functionality
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