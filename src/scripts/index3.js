// alert("Hello World");
// alert("Welcome to JavaScript");

// let name = "Abhirat";

// alert("Welcome" + name);

// let result = confirm("Do you want to Continue?");

// console.log(result);


// let result = confirm("Do you want to delete this file ?");

// if (result == true){
//     console.log("File Deleted");
// }
// else{
//     console.log("File Not Deleted");
// }

// document.write("Hello JavaScripts");

// document.write("Hello JS");

// let name = "Abhirat";

// document.write("My Name is " +name);

// function DeleteClick()
// {
// flag = confirm("Delete\nRecord will be deleted");
// if(flag==true){
// document.querySelector("h2").innerText = "Delete Confirmed";
// document.querySelector("p").innerText = "Record Deleted Successfully..";
// } else {
    
// }

// function DeleteClick()
// {
// flag = confirm("Delete\nRecord will be deleted");
// if(flag==true){
// document.querySelector("h2").innerHTML = "<font color=red>Delete Confirmed</font>";
// document.querySelector("p").innerHTML = "<i><font color=red>Record Deleted 
// Successfully..</font></i>";
// } else {
// alert("You canceled..");
// }
// }

function DeleteClick()
{
flag = confirm("Delete\nRecord will be deleted");
if(flag==true){
document.querySelector("p").outerHTML = "<h2>Delete Confirmed</h2>";
} else {
alert("You canceled..");
}
}