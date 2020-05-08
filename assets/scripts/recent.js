//rently played table
$(document).ready(function(){
    $.getJSON("../../recent.json", function(data){ 
       var tracks_data = '';
       $.each(data, function(key, value){
        tracks_data += '<tr class="tracks">';
        tracks_data += '<td class="track_btn"><a href="'+value.link+'" target="_blank"><i class="far fa-play-circle"></i></a></td>';
        tracks_data += '<td><img class="track_img" src='+value.img+'></td>';
        tracks_data += '<td class="track_detail2"><b style="font-size: 15px;">'+value.title+'<td class="track_detail1"><b style="font-size: 15px;">'+value.artist+'</span></td>';
        tracks_data += '<td class="track_played">'+value.played+' Minutes ago</td>';
        tracks_data += '</tr>';
       });
       $('#recent_table').append(tracks_data); //append to #recent_table
    });
 });