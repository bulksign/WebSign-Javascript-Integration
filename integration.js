$(document).ready(function() {

    var url = window.location.href.toLowerCase();

    //check the current url and apply these changes ONLY yo the sign page
    if (url.endsWith("/sign")) {

        //add a new item to the Finish menu 
        $("#dropDownFinishActions").append("<li id='customMenuEntry'> <a href='http://yourwebsite' target="
            _blank "> Redirect to my website</a></li>");

        //hide the language switcher
        $("#selectLanguage").hide();
    }
});