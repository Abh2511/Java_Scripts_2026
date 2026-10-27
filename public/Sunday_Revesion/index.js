// function DeleteClick()
// {
//     alert("Delete\nRecord will be deleted");
// }

// function DeleteClick() {
//     flag = confirm("Delete\nRecord will be deleted");
//     if (flag == true) {
//         alert("Record Deleted..");
//     }
//     else {
//         alert("You canceled..");

//     }
// }

// function DeleteClick() 
// {
//     flag= confirm("Delete\nRecord will be deleted");
//     if(flag==true)
//     {
//         document.querySelector("h2").innerText = "Delete Confirmed";
//         document.querySelector("p").innerText = "Record Deleted Successfully..";
//     }
//     else {
//         alert("You Canceled");
//     }
// }

// function DeleteClick() 
// {
//     flag= confirm("Delete\nRecord will be deleted");
//     if(flag==true)
//     {
//         document.querySelector("h2").innerHTML = "<font color = red>Delete Confirmed</font>";
//         document.querySelector("p").innerText = "<i><font color=red>Record Deleted Successfully..</font></i>";
//     }
//     else {
//         alert("You Canceled");
//     }
// }

function DeleteClick() 
{
    flag= confirm("Delete\nRecord will be deleted");
    if(flag==true)
    {
        document.querySelector("h2").outerHTML = "<h2>Delete Confirmed</h2>";
        document.querySelector("p").innerText = "Record Deleted Successfully..";
    }
    else {
        alert("You Canceled");
    }
}