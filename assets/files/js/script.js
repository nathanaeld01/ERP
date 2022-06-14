$(document).ready(() => {
    $("input[type=submit]").click(function() {
        $(".commons").each(function() {
            if($(this).children("input").val() == "") {
                $(this).css("border-color", "red");
                $(this).children("label").css("color", "red");
            }
        })
    });
    
    function getParameter(p) {
        var url = window.location.search.substring(1);
        var varUrl = url.split("&");
        for (var i = 0; i < varUrl.length; i++) {
            var parameter = varUrl[i].split("=");
            if (parameter[0] == p) {
                return parameter[1];
            }
        }
    }

    var isSet = getParameter("submit");

    var suser = getParameter("suser");
    var spass = getParameter("spass");
    var su = "19BCA023";
    var sp = "caias201922";

    if(isSet != "") {
        if(suser == su && spass == sp) {
            window.location = "./ERP/Student/overview.html";
        }
    }

    var tuser = getParameter("tuser");
    var tpass = getParameter("tpass");
    var tu = "BCA001";
    var tp = "caiasFaculT";

    if (isSet != "") {
        if (tuser == tu && tpass == tp) {
            window.location = "./ERP/Teacher/overview.html";
        }
    }
});