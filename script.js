//selecting feilds to check whether the input filled correctly or not
var namecheck = false 
var phonecheck = false

// container selecting
var usernamecontainer = document.querySelector(".username")
var phonecontainer = document.querySelector(".phone")

//selecting Icons
var usernameicon  =  usernamecontainer.querySelector("i")
var phoneicon = phonecontainer.querySelector("i")

//selcting Labels
var usernamelabel = usernamecontainer.querySelector("label")
var phonelabel = phonecontainer.querySelector("label")

//selecting inputbox
var usernameinput = document.getElementById("username")
var phoneinput = document.getElementById("phone")

usernameinput.addEventListener("keyup",function(){
    //user input value
    var enteredValue = usernameinput.value
     
    if(enteredValue=="")
    {
       usernamelabel.style.visibility="visible"
       usernameicon.style.visibility="hidden"
       namecheck=false
    }
    else{
        usernameicon.style.visibility="visible"
        usernamelabel.style.visibility="hidden"
        namecheck=true
    }
})


// phoneinput
phoneinput.addEventListener("keyup",function(){
    var enteredValue = phoneinput.value
     
    if(enteredValue=="")
    {
      phonelabel.style.visibility="visible"
       phoneicon.style.visibility="hidden"
       phonelabel.textContent="Plese enter mobile Number"
       phonecheck=false
    }
    else if(enteredValue.length!=10){
        phonelabel.style.visibility="visible"
        phoneicon.style.visibility="hidden"
        phonelabel.textContent="Plese enter 10 digit mobile Number"
    }
    else{
        phoneicon.style.visibility="visible"
        phonelabel.style.visibility="hidden"
        phonecheck=true
    }
})

//selecting submitbutton
var submitinput = document.getElementById("submitbutton")
var popup = document.querySelector(".popup")
submitinput.addEventListener("click",function(e){
    //prefenting default Refresh
    e.preventDefault()
if(namecheck==true && phonecheck==true){
    popup.textContent="Form Submitted Successfully"
    popup.style.backgroundColor="#6be9fb"
    popup.style.top="10px"
    popup.style.opacity="1"
}
else{
    popup.textContent="Please Fill the Form"
    popup.style.backgroundColor="red"
    popup.style.top="10px"
    popup.style.opacity="1"
}

    //Run this line after 3 seconds
    //set timeout
    setTimeout(function()
    {
    popup.style.top="-40px"
    popup.style.opacity="0"
    },2000)


})
