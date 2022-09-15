function validate() {
    var usename = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username = "iqramomin" && password == "Iqra@123")
    {

        alert("Welcome");
        return false;     
    }
else
    {
        alert("Login Failed");
        return false;
    }
}