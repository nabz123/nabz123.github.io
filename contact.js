function contantForm()
{
    let Username=document.getElementById("Username").value;
    let Emailinput=document.getElementById("Email").value;
    
    alert("Thank you " + Username)

    document.getElementById("Username").value="";
    document.getElementById("Email").value="";
    document.getElementById("Phone").value="";
}