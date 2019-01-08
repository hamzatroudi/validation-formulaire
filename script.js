

function validate(){

    if (document.getElementById('name').value == "")   {
        
        /*alert('Please insert your name');*/
        document.getElementById("alrt").style.display = "block";

        
    }
    if (document.getElementById('lastname').value == "")   {
        document.getElementById("alrt").style.display = "block";
    }
    if (document.getElementById('adress').value == "")   {
        document.getElementById("alrt").style.display = "block";
    }
    if (document.getElementById('email').value == "")   {
        document.getElementById("alrt").style.display = "block";
    }
    if (document.getElementById('password').value == "")   {
        document.getElementById("alrt").style.display = "block";
    }
    if (document.getElementById('texttt').value == "")   {
        document.getElementById("alrt").style.display = "block";
    }
    
       var pass = document.getElementById('password').value;
       var pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

      if (!pattern.test(pass)){

        document.getElementById("alert3").style.display = "block";

      }
    
      var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var emaill = document.getElementById('email').value;
      if (!regEmail.test(emaill)){

        document.getElementById("alert2").style.display = "block";

     }


    }



function clean(){
    
    window.document.f1.reset();

    
}