function Submit()
{
    let UserName=document.getElementById("name").value
    let UserComment=document.getElementById("usercomment").value
    let Commentbox=document.getElementById("Commentbox")
    let namediv=document.createElement('div')
    let commentdiv=document.createElement('div')
    let timediv=document.createElement('div')
    let today = new Date();
    let date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    let time = today.getHours()+":"+today.getMinutes();
    let dateTime = date + " " + time;
    timediv.innerHTML=(dateTime)
    namediv.innerHTML=(UserName)
    commentdiv.innerHTML=(UserComment)
    Commentbox.append(timediv)
    Commentbox.append(namediv)
    Commentbox.append(commentdiv)
}