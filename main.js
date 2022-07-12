document.addEventListener('DOMContentLoaded', () => {
  const mainForm = document.querySelector('#main-form');

  // Function to display time on screen 
  const displayClock = () => {
    const timeDate = new Date();
    const clock = document.querySelector("#clock");
    const date = document.querySelector('#date');

    let hours = timeDate.getHours() % 12;
    let minutes = timeDate.getMinutes();
    let seconds = timeDate.getSeconds();
    let dayOrNight = '';

    if (hours.toString().length < 2) {
      hours = '0' + hours;
    }

    if (minutes.toString().length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.toString().length < 2) {
      seconds = '0' + seconds;
    }

    if (timeDate.getHours() < 12) {
      dayOrNight = 'AM';
    } else {
      dayOrNight = 'PM';
    }
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[timeDate.getDay()];

    const clockOutput = hours + ' : ' + minutes + ' : ' + seconds + ' ' + dayOrNight;
    const dateOutput = 'Looks like another ' + today + ' 😊 ';

    clock.textContent = clockOutput;
    date.textContent = dateOutput;
  }

  window.onload = clockFunction = () => {
    displayClock();
    setInterval(displayClock, 1000)
  }

  //date//
  var date = new Date();
  var format = "YYYY-MMM-DD DDD";
  document.getElementById('today').textContent = (dateConvert(date, format));

  function dateConvert(dateobj, format) {
    var year = dateobj.getFullYear();
    var month = ("0" + (dateobj.getMonth() + 1)).slice(-2);
    var date = ("0" + dateobj.getDate()).slice(-2);
    var day = dateobj.getDay();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var converted_date = "";

    switch (format) {
      case "YYYY-MMM-DD DDD":
        converted_date = dates[parseInt(day)] + "," + " " + months[parseInt(month) - 1] + " " + date + "," + " " + year;
        break;
    }

    return converted_date;
  }


});

//date//

const flashCards = document.querySelector(".flashcards");
const flashContainerBox = document.querySelector(".flashcontainer-box");
const title = document.getElementById("title");
const description = document.getElementById("description");
const assignto = document.getElementById("assignto");
const duedate = document.getElementById("duedate");
const del = document.querySelector(".del");
const cancel = document.querySelector(".cancel");
const addcard = document.querySelector(".addcard");
const addNew = document.querySelector(".addnew");
const done = document.querySelector(".done");

console.log(flashContainerBox);

let contentArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
console.log(contentArray);

contentArray.forEach(flashDiv);
del.addEventListener("click", function () {
  localStorage.clear();
  flashCards.innerHTML = "";
  contentArray = [];
});

cancel.addEventListener("click", function () {
  flashContainerBox.style.display = "none";
});

addNew.addEventListener("click", function () {
  flashContainerBox.style.display = "block";
});



function flashDiv(text) {
  let div = document.createElement("div");
  let divTitle = document.createElement("h2");
  let divDescription = document.createElement("h2");
  let divAssignto = document.createElement("h2");
  let divDuedate = document.createElement("h2");


  div.className = "flashcard";

  divTitle.setAttribute("style", "border-top:1px solid teal; padding: 15px;  font-size: 16px; margin-top:30px ");
  divTitle.innerHTML = text.title;

  divDescription.setAttribute("style", "text-align:center; display:none; font-size: 10px; padding: 5px; margin-left: 5px; margin-right: 5px; color:teal");
  divDescription.innerHTML = text.description;

  divAssignto.setAttribute("style", "text-align:center; display:none; font-size: 10px; color:teal");
  divAssignto.innerHTML = text.assignto;

  divDuedate.setAttribute("style", "text-align:center; display:none; font-size: 10px; color:red");
  divDuedate.innerHTML = text.duedate;

  let btn = document.createElement("button");
  btn.innerHTML = "Done";
  btn.type = "submit";
  btn.setAttribute("class", "btn");

  btn.setAttribute("style", "text-align:center; display:bottom; justify-content: space-between;");

  let btn2 = document.createElement("button");
  btn2.innerHTML = "Delete";
  btn2.type = "submit";
  btn2.setAttribute("class", "btn2");
  btn.setAttribute("style", "text-align:bottom; display:absolute;");
  btn2.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      e.target.parentNode.remove()
    }
  });

  div.appendChild(btn);
  div.appendChild(divTitle);
  div.appendChild(divDescription);
  div.appendChild(divAssignto);
  div.appendChild(divDuedate);
  div.appendChild(btn);
  div.appendChild(btn2);

  div.addEventListener("click", function () {
    if (divDescription.style.display == "none") {
      divDescription.style.display = "block";
    }
    if (divAssignto.style.display == "none") {
      divAssignto.style.display = "block";
    }
    if (divDuedate.style.display == "none") {
      divDuedate.style.display = "block";
    }


  });

  flashCards.appendChild(div);
}

// addcard.addEventListener("click", function () {
//   let flashInfo = {
//     title: title.value,
//     description: description.value,
//     assignto: assignto.value,
//     duedate: duedate.value,

//   };

//   contentArray.push(flashInfo);
//   localStorage.setItem("items", JSON.stringify(contentArray));
//   flashDiv(contentArray[contentArray.length - 1]);
//   title.value = "";
//   description.value = "";
//   assignto.value = "";
//   duedate.value = "";

// });

//button action//

//End button action//

//Form Validation//
//document.getElementById("addButton").addEventListener("click", actionForm())

// function checkValidation(){
//   if(actionForm() === true){
//     addcard.addEventListener("click", function(event){
//       event.preventDefault()
//     });
//     flashDiv();
//   }
// }

// Find the button with the action form (The submit button). and apply an 'submit' eventlistener to the form
//which then can process the validations


function actionForm(event) {
  var title = document.getElementById('title'),
    description = document.getElementById('description'),
    assignto = document.getElementById('assignto'),
    duedate = document.getElementById('duedate')

  if (title.value == "" && title.value.length < 8) {
    document.getElementById('p-title').textContent = "Title Must be at least 8 characters";
    document.getElementById('title').style.border = "1px solid red";
    console.log(event.target);
    event.preventDefault();
     return false;
  }
  if (description.value == "" && description.value.length < 15) {
    document.getElementById('p-description').textContent = "Description Must be at least 15 characters";
    document.getElementById('description').style.border = "1px solid red";
    console.log(event.target);
    event.preventDefault();
     return false;
  }

  if (assignto.value == "") {
    document.getElementById('p-assignto').textContent = "Please provide the full name";
    document.getElementById('assignto').style.border = "1px solid red";
    console.log(event.target);
    event.preventDefault();
     return false;
  }


  if (duedate.value < 1) {
    document.getElementById('p-duedate').textContent = "Please select the due date";
    document.getElementById('duedate').style.border = "1px solid red";
    console.log(event.target);
    event.preventDefault();
     return false;
  }
  
  addcard.addEventListener("click", function () {
      let flashInfo = {
        title: title.value,
        description: description.value,
        assignto: assignto.value,
        duedate: duedate.value,
    
      };
    
      contentArray.push(flashInfo);
      localStorage.setItem("items", JSON.stringify(contentArray));
      flashDiv(contentArray[contentArray.length - 1]);
      title.value = "";
      description.value = "";
      assignto.value = "";
      duedate.value = "";
    
    });

}
const submit = document.getElementById("submitButton");
submit.addEventListener("click", actionForm);

function formBlur(input) {
  if (input.value != '') {
    input.nextElementSibling.textContent = "";
    input.style.border = '2px  solid green';
    event.preventDefault();
    return false;
  }


  if (title.value.length < 8) {
    title.nextElementSibling.textContent = "8";
    input.style.border = "1px solid red";
    event.preventDefault();
    return false;
  }

  if (description.value.length < 15) {
    description.nextElementSibling.textContent = "15";
    input.style.border = "1px solid red";
    event.preventDefault();
    return false;
  }

  if (input.value == '') {
    input.nextElementSibling.textContent = "Fill the fields";
    input.style.border = '1px  solid red';
    event.preventDefault();
    return false;
  }



}







