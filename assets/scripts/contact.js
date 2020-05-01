function contantForm()
{
    let Username = document.getElementById("Username").value;  //create element Id called Username
    let Emailinput = document.getElementById("Email").value; //create element Id called Emailinput
    alert("Thank you " + Username) //alerts user with thier username after clicking submit
    document.getElementById("Username").value=""; //get username Id from index page
    document.getElementById("Email").value=""; //get email Id from index page
    document.getElementById("Phone").value=""; //get phone Id from index page
}