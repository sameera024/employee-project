
// window.onload = function () {


$(document).ready(function () {
    $("#login").click(function (event) {

        var admin = "http://localhost:3000/admin";

        // var elem = document.getElementById("#login");
        // if (elem) {
        //     elem.addEventListener("click", addUser, false);
        // }
        // function addUser(event) {
        event.preventDefault();
        console.log('1');
        var username = $('input#username').val();
        var password = $('input#password').val();
        var userdata = {
            username: username,
            password: password
        }
        if (username == "") {
            alert("Please enter a Username");
            $('#username').focus();
            return false;
        }
        if (password == "") {
            alert("Please enter a Password");
            $('#password').focus();
            return false;
        }
        if (username && password) {
            $.ajax({
                url: admin,
                type: 'GET',
                success: function (data) {


                    // var obj = JSON.parse(data);
                    console.log(data);

                    if (data[0].username == username && data[0].password == password) {
                        alert("logged in succesfully");
                        location.href = "./dashboard";
                    }
                }
            });
        }
    });
});
    // function addUser(event) {
    //     event.preventDefault();
    //     var username = $('input#username').val();
    //     var password = $('input#password').val();
    //     var userdata = {
    //         username: username,
    //         password: password
    //     }
    //     if (username == "") {
    //         alert("Please enter a Username");
    //         $('#username').focus();
    //         return false;
    //     }
    //     if (password == "") {
    //         alert("Please enter a Password");
    //         $('#password').focus();
    //         return false;
    //     }
    //     if (username != '' && password != '') {
    //         $.ajax({
    //             url: postdata,
    //             type: 'GET',
    //             success: function (data) {
    //                 console.log(data);
    //                 // It looks like the page that handles the form returns JSON
    //                 // Parse the JSON
    //                 var obj = JSON.parse(data);

    //                 if (obj.username == username && obj.password == password) {
    //                     alert("logged in succesfully");
    //                     location.href = "dashboard location"
    //                 }
    //                 // if(obj.result != 'invalid') {
    //                 // alert("Login succeeded");
    //                 // // You should redirect the user too
    //                 // window.location = 'http://redirecturl.com';
    //                 // } 
    //             }
    //         });
    //     }
    // });

  // function addUser(event) {
    // event.preventDefault();
    // var errorCount = 0;
    // $('#adduser input').each(function (index, val) {
    // if ($(this).val() === '') {
    // errorCount++;
    // }
    // }); 
    // var username = document.getElementById("username");
    // var password=document.getElementById("password");

    // else if (errorCount == 0) {
    // var userData = {
    // 'username': document.getElementById("name").value,
    // 'password': document.querySelector('#mobilenumber').value,
    // };
// }
// }