function initStorage(){
    function saveName(){
        var name = document.getElementById('name');
        localStorage.setItem('name',name.value);   
    }
    function saveEmail(){
        var email = document.getElementById('email');
        localStorage.setItem('email',email.value);  
    }

    saveName();
    saveEmail();
}

    function displayName(){
        if(localStorage.getItem('name') != null){
            document.write("Welcome back, "+localStorage.getItem('name'));
        }
    }
    function displayEmail(){
        if(localStorage.getItem('email') != null){
            document.write("Welcome back, "+localStorage.getItem('email'));
        }
    }
function showText(){
    if(localStorage.getItem('email') == null){
        document.write('<p>Please Enter Your E-mail Address</p>');      
       }
    else{
        document.write('<p><strong>Subscribed Email: </srong>'+localStorage.getItem('email')+'</p>');
    }
}
function clearAll(){
    localStorage.clear();
    window.location.reload();
}