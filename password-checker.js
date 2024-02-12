const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');

  inputfield.addEventListener('input', function(){
        console.log(inputfield.value)
        let password = inputfield.value;
         if(password.length < 8){
            outputfield.innerText = 'Password is too short';
            outputfield.style.color = 'red'
         }
         else{
            // outputfield.innerText = 'password is long enough';
            //outputfield.style.color = 'green';
            //a-z
            //A-z
            //0-9
            //special characters !@#$%^&*()+{}:"<>|[];',.
            console.log("is lowercase",password.search(/[a-z]/));
            if(password.search(/[a-z]/) == -1) {
                outputfield.innerText = 'Password is missing a lowercase letter';
                outputfield.style.color = 'red'
            }
            else if(password.search(/[A-Z]/) == -1) {
                outputfield.innerText = 'Password is missing a uppercase letter';
                outputfield.style.color = 'red'
            }
            else if(password.search(/[0-9]/) == -1) {
                outputfield.innerText = 'Password is missing a number letter';
                outputfield.style.color = 'red'
            }
            else if(password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\|\;\'\,\.\]\/]/) == -1) {
                outputfield.innerText = 'Password is missing a special character letter';
                outputfield.style.color = 'red'
            }
            else{
                outputfield.innerText = 'Password is strong'
                outputfield.style.color = 'green';
            }

         }
  }); 