document.getElementById('loginBtn').addEventListener('click', function(){
    let username = document.getElementById('username').value;
    let pw1 = document.getElementById('pw1').value;
    let pw2 = document.getElementById('pw2').value;
    let email = document.getElementById('email').value;
 


    document.getElementById('username_errorMsg').innerText = '';

    document.getElementById('email_errorMsg').innerText = '';
    document.getElementById('pw1_errorMsg').innerText = '';
    document.getElementById('pw2_errorMsg').innerText = '';

    var request_emailregex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(username == '') {
        document.getElementById('username_errorMsg').innerText = 'Username is required';
        document.getElementById('username_errorMsg').style.color = "brown";
    } 
    else if(email == '') {
        document.getElementById('email_errorMsg').innerText = 'Email is required';
        document.getElementById('email_errorMsg').style.color = "brown";
    } 
    else if(!email.match(request_emailregex)){
        document.getElementById('email_errorMsg').innerText = 'Email Format Is Wrong';
        document.getElementById('email_errorMsg').style.color = "brown";
    }
    /* else if(password == '') {
        document.getElementById('password_errorMsg').innerText = 'Password is required';
        document.getElementById('password_errorMsg').style.color = "red";
    }else if(confirmPassword == '') {
        document.getElementById('password_errorMsg').innerText = 'Password is not matched';
        document.getElementById('password_errorMsg').style.color = "red";
    }*/
    //check empty password field  
    else if(pw1 == "") {    
        document.getElementById('pw1_errorMsg').innerText = '**Fill the password please!';
        document.getElementById('pw1_errorMsg').style.color = "brown";
    }  
 
    //minimum password length validation  
    else if(pw1.length<8) {  
        document.getElementById("pw1_errorMsg").innerText = '**Password length must be atLeast 8 characters';  
        document.getElementById('pw1_errorMsg').style.color = "brown";   
        return false;
    }  
    
    //maximum length of password validation  
    else if(pw1.length>15) {  
        document.getElementById("pw1_errorMsg").innerText = '**Password length must not exceed 15 characters';  
        document.getElementById('pw1_errorMsg').style.color = "brown"; 
        return false; 
    }  
      
    
    //check empty confirm password field  
    else if(pw2 == "") {  
        document.getElementById('pw2_errorMsg').innerText = '**Enter the password please!';
        document.getElementById('pw2_errorMsg').style.color = "brown";  
    }   
    
   
    else if(pw1 != pw2) {  
      document.getElementById("pw2_errorMsg").innerText = '**Passwords are not same';  
      document.getElementById('pw2_errorMsg').style.color = "brown";  
    } 
    else  if(!this.form.checkbox.checked)
    {
        alert('You must agree to the terms first.');
        return false;
    }

    else{  
      alert('password created successfully & submitted');
    }
});