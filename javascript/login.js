

$(function (e) {
    
    $(document).on("keyup", "input", function (e) {
        let un = $("#txtUsername").val();
        let pw = $("#txtPassword").val();
        if (un.trim() !== "" && pw.trim() !== "") {

            $("#btnLogin").removeClass("inactivecolor");
            $("#btnLogin").addClass("activecolor");
        }

        else {

            $("#btnLogin").removeclass("activecolor");
            $("#btnLogin").addclass("inactivecolor");
            
        }

    });
});