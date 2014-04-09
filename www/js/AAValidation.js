$(document).ready(function (event) {
    CheckDetails.CheckDetailsBind();
});

var CheckDetails = {
    CheckDetailsBind: function () {

        $("#btnidAccidentReport").click(function (event) {

            var LocDesc = $("#taidLocDesc").val();
           
            if(CheckDetails.CheckDetailsValidate(LocDesc)==true)
            {
              //  window.location="home.html"; 
            }
        });
    },
    CheckDetailsValidate: function (LocDesc) {
        var valid = true;
        var LocDescval = $("#LocDesc").val();
        
        if (LocDescval == null || LocDescval == "") {
            $("#spnNOLocDescerr").text("* Enter Location Description");
            valid = false;
        }
        else if (CheckDetails.nameValidator(LocDescval)) {
            $("#spnCompanyErr").text("Enter only char");
            valid = false;
        }
       
    },

    phoneValidator: function (phoneNo) {
        var phoneExp = "^([0-9]{10})$";

        if (!(phoneNo.match(phoneExp))) {
            return true;
        } 
        else {
            return false;
        }

    },
    phonevalidate: function (phoneNo) {
       if (phoneNo != "1122334457") {

            return true;
        }
        else {
            return false;
        }

    },
    nameValidator: function (company) {
        var nameExp = "^([a-z_A-Z ]+)$";

        if (!(company.match(nameExp))) {
            return true;
        } 
        else {
            return false;
        }
    },
    nameValidate: function (company) {

         if (company != "MTN Nigeria") {

            return true;
        }
        else {
            return false;
        }
    },
}

