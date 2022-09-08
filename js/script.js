

// ----------------------------------------JAVASCRIPT FUNCTION, LOCAL STORAGE, SESSION STORAGE -------------------------------------------//

if (typeof (Storage) !== "undefined") {
    var destination = document.getElementsByTagName("a");
    for (var i = 0; i < destination.length; i++) {
        if (destination[i].id == 'd1') {
            destination[i].onclick = function detDestination() {
                localStorage.destination = "User destination preference: " + document.getElementById('rugovacanyon').innerHTML;
            }
        }
        else if (destination[i].id == 'd2') {
            destination[i].onclick = function detDestination() {
                localStorage.destination = "User destination preference: " + document.getElementById('mirusha').innerHTML;
            }
        }
        else if (destination[i].id == 'd3') {
            destination[i].onclick = function detDestination() {
                localStorage.destination = "User destination preference: " + document.getElementById('liqenati').innerHTML;
            }
        }
        else if (destination[i].id == 'd4') {
            destination[i].onclick = function detDestination() {
                localStorage.destination = "User destination preference: " + document.getElementById('ujmani').innerHTML;
            }
        }
        else if (destination[i].id == 'd5') {
            destination[i].onclick = function detDestination() {
                localStorage.destination = "User destination preference: " + document.getElementById('gjeravica').innerHTML;
            }
        }
        else if (destination[i].id == 'd6') {
            destination[i].onclick = function detDestination() {
                localStorage.destination = "User destination preference: " + document.getElementById('sharr').innerHTML;
            }
        }
        else if (destination[i].id == 'd7') {
            destination[i].onclick = function detDestination() {
                localStorage.destination = "User destination preference: " + document.getElementById('rugovavalley').innerHTML;
            }
        }
        else {
            destination[i].onclick = function detDestination() {
                localStorage.destination = "User destination preference: " + document.getElementById('brezovica').innerHTML;
            }
        }
    }
}
else {
    localStorage.destination = "Sorry your browser does not support web storage...";
}

// Session storage

function formSubmit() {
    var form_submitted;
    var impressions;
    if (typeof (Storage) !== "undefined") {
        sessionStorage.form_submitted = "The user left a comment about the site.";
        sessionStorage.impressions = document.getElementById('fullName').value + " left this comment: " + document.getElementById('comment').value;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

// menubtn
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}


// ------------------------------------------------------------JQUERY---------------------------------------------------------------//

$(document).ready(function () {

    // click
    $("#s1").click(function () {
        $(".fa-star").css("color", "#222");
        $("#s1").css("color", "darkolivegreen");
    });
    $("#s2").click(function () {
        $(".fa-star").css("color", "#222");
        $("#s1,#s2").css("color", "darkolivegreen");
    });
    $("#s3").click(function () {
        $(".fa-star").css("color", "#222");
        $("#s1,#s2,#s3").css("color", "darkolivegreen");
    });
    $("#s4").click(function () {
        $(".fa-star").css("color", "#222");
        $("#s1,#s2,#s3,#s4").css("color", "darkolivegreen");
    });
    $("#s5").click(function () {
        $(".fa-star").css("color", "#222");
        $(".fa-star").css("color", "darkolivegreen");
    });
});