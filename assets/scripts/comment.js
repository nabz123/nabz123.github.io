function Submit()
{
    //create element id
    let UserName=document.getElementById("name").value
    let UserComment=document.getElementById("usercomment").value
    let Commentbox=document.getElementById("Commentbox")
    let namediv=document.createElement('div') 
    let commentdiv=document.createElement('div')
    let timediv=document.createElement('div')
    let today = new Date();
    let date = today.getFullYear()+"-"+(today.getMonth())+"-"+today.getDate(); //show local user date year-month-day
    let time = today.getHours()+":"+today.getMinutes(); //show local user time in 24h format
    let dateTime = date + " " + time;
    timediv.innerHTML=(dateTime)
    namediv.innerHTML=(UserName)
    commentdiv.innerHTML=(UserComment)
    //append ellements to Commentbox
    Commentbox.append(timediv)
    Commentbox.append(namediv)
    Commentbox.append(commentdiv)
}