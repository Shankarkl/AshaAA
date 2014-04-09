// JScript source code nw

var currentPage = '';
var prevPage = '';
var pageData = ["indexPage"];
/*var Pphnum
var Pemail
var Pnotes
var Pvehicle
var Pvcolour
var Pregnum
var Pvinnum
var Pfirstpartyinsurer
var Pfirstpartyinsurerpolicynum*/

function gobackPage() {
    pageData.pop();
    currentPage = pageData[pageData.length - 1];
    $.mobile.changePage('#' + currentPage, {
        transition: "none",
        reverse: true,
        changeHash: false
    });
}
function goindexPage() {
    $.mobile.changePage('#indexPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'indexPage';
    pageData.push(currentPage);
}

function gotoaccidentReportPage() {
    
    $.mobile.changePage('#accidentReportPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'accidentReportPage';
    pageData.push(currentPage);
    getDateTimeIncident();
    getGPSIncidentLocation();

}
function gotoAccidentReportToDescPage() {
   
  /*  if (document.getElementById('taidLocDesc').value == "") {
        alert("Please enter the description of your current location!");
      
        return false;
    }*/

    $.mobile.changePage('#accidentDescriptionPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'accidentDescriptionPage';
    pageData.push(currentPage);
}
function gotoPhotoPage() {
/*if (document.getElementById('idAccDesc').value == "") {
    alert("Please enter the description of the accident!");
        return false;
    }
    else if (document.getElementById('idSelectRoadCondition').value == "") {
        alert("Please enter details of the road conditions!");
    return false;
    }*/

    $.mobile.changePage('#photoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'photoPage';
    pageData.push(currentPage);
}

function gotoDamagePhotoPage() {
    $.mobile.changePage('#DamagePhotoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'DamagePhotoPage';
    pageData.push(currentPage);
}



function gotoFirstPartyPage() {
   
  
    $.mobile.changePage('#FirstPartyPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'FirstPartyPage';
    pageData.push(currentPage);
}
function gotoSecondPartyPage() {
   

    $.mobile.changePage('#SecondPartyPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'SecondPartyPage';
    pageData.push(currentPage);
}

function gotoWitnessPageFromFP() {
    var FPEmailID = document.getElementById('txtFirstpartyemail').value;
    if (document.getElementById('txtidPartyName').value == "") {
        jAlert("Please enter 3rd party name.", "Warning");
        return false;
    }

    else if (document.getElementById('txtFirstpartyIDNumber').value == "") {
        jAlert("Please enter 3rd party ID number.", "");
        
        return false;
    }
   /* else if (document.getElementById('txtidDriverLicenseNum').value == "") {
        alert("Please enter 3rd party driver’s licence number!");
        return false;
    }*/
    else if (document.getElementById('txtFirstpartyPhNumber').value == "") {
        jAlert("Please enter 3rd party phone number.", "");
        return false;
    }
   /* else if (FPEmailID == "") {
        alert("Please enter 3rd party email address.");
        return false;
    }
    else if (FPEmailID.indexOf("@", 0) < 0) {
        alert("Please enter a valid email address.");
        return false;
    }

    else if (FPEmailID.indexOf(".", 0) < 0) {
        alert("Please enter a valid email address.");
        return false;
    }*/

    else if (document.getElementById('txtFirstpartyVehicleMake').value == "") {
        jAlert("Please enter 3rd party vehicle make.", "");
         return false;
    }

     else if (document.getElementById('txtFirstpartyVehicleModel').value == "") {
         jAlert("Please enter 3rd party vehicle model.", "");
         return false;
    }
     else if (document.getElementById('txtFirstpartyVehicleYear').value == "") {
         jAlert("Please enter year of 3rd party vehicle.", "");
       
        return false;
    }
    else if (document.getElementById('txtFirstpartyVehiclecolor').value == "") {
        jAlert("Please enter 3rd party vehicle colour.", "");
     
        return false;
    }

    else if (document.getElementById('txtFirstpartyRegNum').value == "") {
        jAlert("Please enter 3rd party vehicle registration number.", "");
      
        return false;
    }
   /* else if (document.getElementById('txtFirstpartyVINNum').value == "") {
        alert("Please enter 3rd party VIN number!!");
        return false;
    }*/

    else if (document.getElementById('txtFirstpartyInsurer').value == "") {
        jAlert("Please enter 3rd party insurer.", "");
        return false;
    }
  /*  else if (document.getElementById('txtFirstpartyInsurerPcnum').value == "") {
        alert("Please enter party insurer policy number!");
        return false;
    }
    else if (document.getElementById('txtFirstpartyInsurerPhnum').value == "") {
        alert("Please enter insurance company phone number!");
        return false;
    }
    else if (document.getElementById('txtFirstpartyInsurerVcolor').value == "") {
        alert("Please enter party insurer vehicle color!");
        return false;
    }
    else if (document.getElementById('txtFirstpartyInsurerVReg').value == "") {
        alert("Please enter party insurer vehicle registration number!");
        return false;
    }
    else if (document.getElementById('txtFirstpartyInsurerVinnum').value == "") {
        alert("Please enter party insurer VIN number!");
        return false;
    }*/
    
    
    

    $.mobile.changePage('#WitnessPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WitnessPage';
    pageData.push(currentPage);
}

function gotoWitnessPageFromSP() {
    
    var SPEmailID = document.getElementById('txtSecondpartyemail').value;
    if (document.getElementById('txtidSecondPartyName').value == "") {
        jAlert("Please enter 3rd party name.", "");
        return false;
    }

    else if (document.getElementById('txtSecondpartyIDNumber').value == "") {
        jAlert("Please enter 3rd party ID number.", "");
        return false;
    }
  /*  else if (document.getElementById('txtidSecondpartyDriverLicenseNum').value == "") {
        alert("Please enter driver license number!");
        return false;
    }*/
    else if (document.getElementById('txtSecondpartyPhNumber').value == "") {
        jAlert("Please enter 3rd party phone number.", "");
        return false;
    }
  /*  else if (SPEmailID == "") {
        alert("Please enter email address!");
        return false;
    }
    else if (SPEmailID.indexOf("@", 0) < 0) {
        alert("Please enter a valid email address!");
        return false;
    }

    else if (SPEmailID.indexOf(".", 0) < 0) {
        alert("Please enter a valid email address!");
        return false;
    }*/

    else if (document.getElementById('txtSecondpartyVehicleMake').value == "") {
        jAlert("Please enter 3rd party vehicle make.", "Info");
        return false;
    }

    else if (document.getElementById('txtSecondpartyVehicleModel').value == "") {
        jAlert("Please enter 3rd party vehicle model.", "");
        return false;
    }
    else if (document.getElementById('txtSecondpartyVehicleYear').value == "") {
        jAlert("Please enter year of 3rd party vehicle.", "");
        return false;
    }
    else if (document.getElementById('txtSecondpartyVehiclecolor').value == "") {
        jAlert("Please enter 3rd party vehicle colour.", "");
        return false;
    }

    else if (document.getElementById('txtSecondpartyRegNum').value == "") {
        jAlert("Please enter 3rd party vehicle registration number.", "");
        return false;
    }
   /* else if (document.getElementById('txtSecondpartyVINNum').value == "") {
        alert("Please enter VIN number!");
        return false;
    }*/
    

    else if (document.getElementById('txtSecondpartyInsurer').value == "") {
        jAlert("Please enter 3rd party insurer.", "Info");
        return false;
    }
  /*  else if (document.getElementById('txtSecondpartyInsurerPcnum').value == "") {
        alert("Please enter party insurer policy number!");
        return false;
    }
    else if (document.getElementById('txtSecondpartyInsurerPhnum').value == "") {
        alert("Please enter party insurer phone number!");
        return false;
    }
    else if (document.getElementById('txtSecondpartyInsurerVcolor').value == "") {
        alert("Please enter party insurer vehicle color!");
        return false;
    }
    else if (document.getElementById('txtSecondpartyInsurerVReg').value == "") {
        alert("Please enter party insurer vehicle registration number!");
        return false;
    }
    else if (document.getElementById('txtSecondpartyInsurerVinnum').value == "") {
        alert("Please enter party insurer VIN number!");
        return false;
    }*/
    
    $.mobile.changePage('#WitnessPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WitnessPage';
    pageData.push(currentPage);
}

function gotoSecondWitnessPage() {

    $.mobile.changePage('#SecondWitnessPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'SecondWitnessPage';
    pageData.push(currentPage);
}

function gotopolicecasePageFromFirstWitness() {
  /*  var FWEmailID = document.getElementById('txtidwitnessEmail').value;
  if (document.getElementById('txtidwitnessName').value == "") {
        alert("Please enter witness name!");
        return false;
    }
    else if (document.getElementById('txtidwitnessPhnum').value == "") {
        alert("Please enter witness phone number!");
        return false;
    }
    else if (FWEmailID == "") {
        alert("Please enter witness email address!");
        return false;
    }
    else if (FWEmailID.indexOf("@", 0) < 0) {
        alert("Please enter a valid witness email address!");
        return false;
    }

    else if (FWEmailID.indexOf(".", 0) < 0) {
        alert("Please enter a valid witness email address!");
        return false;
    }
    
  
   
    else if (document.getElementById('txtidwitnessSt').value == "") {
        alert("Please enter witness statment!");
        return false;
    }*/
    $.mobile.changePage('#policecasePage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'policecasePage';
    pageData.push(currentPage);

}
function gotopolicecasePageFromSecondWitness() {
  /*  var SWEmailID = document.getElementById('txtidSwitnessEmail').value;
 if (document.getElementById('txtidSwitnessName').value == "") {
     alert("Please enter witness name");
        return false;
    }
   else if (document.getElementById('txtidSwitnessPhnum').value == "") {
       alert("Please enter witness phone number");
        return false;
    }

    else if (SWEmailID == "") {
        alert("Please enter witness email address");
        return false;
    }
    else if (SWEmailID.indexOf("@", 0) < 0) {
        alert("Please enter a valid witness email address!");
        return false;
    }

    else if (SWEmailID.indexOf(".", 0) < 0) {
        alert("Please enter a valid witness email address!");
        return false;
    }
   
    else if (document.getElementById('txtidSwitnessSt').value == "") {
        alert("Please enter witness statment!");
        return false;
    }*/
    $.mobile.changePage('#policecasePage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'policecasePage';
    pageData.push(currentPage);

}


function gotoaboutAAPage() {

    $.mobile.changePage('#aboutAAPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'aboutAAPage';
    pageData.push(currentPage);

}
function gotoaccidentReportPartyPage() {
    $.mobile.changePage('#accidentReportPartyPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'accidentReportPartyPage';
    pageData.push(currentPage);
}




function btnAAAccidentassist() {
    $.mobile.changePage('#AAAccidentAssistPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'AAAccidentAssistPage';
    pageData.push(currentPage);
}
function gotoWhatTodoPage() {
    $.mobile.changePage('#WhatTodoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WhatTodoPage';
    pageData.push(currentPage);
}
function gotoHistroyPage() {
    $.mobile.changePage('#WhatTodoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WhatTodoPage';
    pageData.push(currentPage);
}
function gotoAboutAAPage() {
    $.mobile.changePage('#aboutAAPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'aboutAAPage';
    pageData.push(currentPage);
}

function getDateTimeIncident() {

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    if (month.toString().length == 1) {
        var month = '0' + month;
    }
    if (day.toString().length == 1) {
        var day = '0' + day;
    }
    if (hour.toString().length == 1) {
        var hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        var minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        var second = '0' + second;
    }
  
    localStorage.date = day + '/' + month + '/' + year;
    // localStorage.Time = hour + ':' + minute + ':' + ampm;
    localStorage.Time = hour + ':' + minute;
    localStorage.dateTime = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
    $('#txtdatepicker').val(localStorage.date);
     $('#txttimepicker').val(localStorage.Time);


}

function getGPSIncidentLocation() {
   // alert("aa");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPositionLatLng);
    }
    else { x.innerHTML = "Geolocation is not supported by this browser."; }
}
function showPositionLatLng(position) {

   // document.getElementById("txtidGPSIncident").innerHTML = "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude;
    $('#txtidGPSIncident').val(position.coords.latitude + ", " + position.coords.longitude);
    localStorage.latitude = position.coords.latitude;
    localStorage.langitude = position.coords.longitude;
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    showPosition(lat, lng)
}
function showPosition(lat, lng) {
   // alert("showPosition" + lat + '::::' + lng);
   var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
   var xhr = createCORSRequest('POST', url);
   //alert(xhr);
   if (!xhr) {
    alert('CORS not supported');
   }

   xhr.onload = function() {

    var data = JSON.parse(xhr.responseText);
    //alert(xhr.responseText);
   // console.log(xhr.responseText);
    if (data.results.length > 0) {

     var locationDetails = data.results[0].formatted_address;
    //  alert(locationDetails);
     var value = locationDetails.split("","");

     count = value.length;

     country = value[count - 1];
     state = value[count - 2];
     city = value[count - 3];
     // document.getElementById("txtidGPSIncident").innerHTML = city;
     $('#txtidGPSIncidentPara').val(+"Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
     var location = locationDetails;
     //country + '::' + state + ':' + city;
   //  mapload(lat, lng, location);
    } else {
     alert("No location available for provided details.");
    }

   };

   xhr.onerror = function() {
    alert('Woops, there was an error making the request.');

   };
   xhr.send();

  }
  //var createStatement = "CREATE TABLE IF NOT EXISTS TableAAProject(colid INTEGER PRIMARY KEY AUTOINCREMENT, coldatetimeincident TEXT, collatitude TEXT, collongitude TEXT, colgpslocation TEXT, coldesclocation TEXT, colaccdesc TEXT, colroadcond TEXT, colphotopath TEXT,colofficersurname TEXT,colofficername TEXT, colofficersurname TEXT, colofficernumber TEXT, colcasenumber TEXT, coltype TEXT)";
  //var insertStatement = "INSERT INTO TableAAProject(coldatetimeincident,collatitude,collongitude,colgpslocation,coldesclocation,colaccdesc,colroadcond,colphotopath,colofficersurname,colofficername,colofficersurname,colofficernumber,colcasenumber,coltype) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  //var selectStatementWitnessbyid = "SELECT * FROM TableWitnessNew where colid =" + getclickid + " AND colwitnesstype = ";

/***** DB Creation *******15****27****11******/
var db = window.openDatabase("DBAAProject", "1.0", "Accident Reports", 5 * 1024 * 1024);
//var TBLDrop = "DROP TABLE TableAAProject";
var createStatement = "CREATE TABLE IF NOT EXISTS TableAAProjectNew(colid INTEGER PRIMARY KEY AUTOINCREMENT, coldatetimeincident TEXT, collatitude TEXT, collongitude TEXT, colgpslocation TEXT, coldesclocation TEXT, colaccdesc TEXT, colroadcond TEXT,colaccroadnotes TEXT, colphotopath TEXT, coldamagephotopath TEXT, colofficername TEXT,colofficernumber TEXT, colcasenumber TEXT, coltype TEXT)";
var selectAllStatement = "SELECT * FROM TableAAProjectNew";
var insertStatement = "INSERT INTO TableAAProjectNew(coldatetimeincident,collatitude,collongitude,colgpslocation,coldesclocation,colaccdesc,colroadcond,colaccroadnotes,colphotopath,coldamagephotopath,colofficername,colofficernumber,colcasenumber,coltype) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
var dataset;
var createStatementParty = "CREATE TABLE IF NOT EXISTS TablePartyNew(colpartyid INTEGER PRIMARY KEY AUTOINCREMENT,colid INTEGER,colpartytitle TEXT,colpartyname TEXT,colpartysurname TEXT,colpartyidnum TEXT,colpartydlnum TEXT,colscanlphotopath TEXT,colpartyphnum TEXT,colpartyemail TEXT,colpartynotes TEXT,colpartyvmake TEXT,colpartyvmodel TEXT,colpartyvyear TEXT,colpartyvcolor TEXT,colpartyvregnum TEXT,colpartyvvinnum TEXT,colpartyvnotes TEXT,colpartyldiskphotopath TEXT,colpartydamagephotopath TEXT,colpartyinsurer TEXT,colpartyinsurerpolicynum TEXT,colpartyinsurerphnum TEXT,colpartyinsurervcolor TEXT,colpartyinsurervregcolor TEXT,colpartyinsurervvinnum TEXT,colpartytype TEXT)";
var insertStatementParty = "INSERT INTO TablePartyNew(colid,colpartytitle,colpartyname,colpartysurname,colpartyidnum,colpartydlnum,colscanlphotopath,colpartyphnum,colpartyemail,colpartynotes,colpartyvmake,colpartyvmodel,colpartyvyear,colpartyvcolor,colpartyvregnum,colpartyvvinnum,colpartyvnotes,colpartyldiskphotopath,colpartydamagephotopath,colpartyinsurer,colpartyinsurerpolicynum,colpartyinsurerphnum,colpartyinsurervcolor,colpartyinsurervregcolor,colpartyinsurervvinnum,colpartytype) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
var selectAllStatementParty = "SELECT * FROM TablePartyNew";
var createStatementWitness = "CREATE TABLE IF NOT EXISTS TableWitnessNew(colwitnessid INTEGER PRIMARY KEY AUTOINCREMENT,colid INTEGER,colwitnesstitle TEXT,colwitnessname TEXT,colwitnesssurname TEXT,colwitnessphnum TEXT,colwitnessemail TEXT,colwitnesssnotes TEXT,colwitnessstatement TEXT,colmikepath TEXT,colwitnesstype TEXT)";
var insertStatementWitness = "INSERT INTO TableWitnessNew(colid,colwitnesstitle,colwitnessname,colwitnesssurname,colwitnessphnum,colwitnessemail,colwitnesssnotes,colwitnessstatement,colmikepath,colwitnesstype) VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?)";
var selectAllStatementWitness = "SELECT * FROM TableWitnessNew";

function initDatabase()// Function Call When Page is ready.
{
    try {
        if (!window.openDatabase)// Check browser is supported SQLite or not.
        { alert('Databases are not supported in this browser.'); }
        else {
            createTable();  // If supported then call Function for create table in SQLite
        }
    }
    catch (e) {
        if (e == 2) {
            // Version number mismatch. 
            alert("Invalid database version.");
        } else {
            alert("Unknown error " + e + ".");
        }
        return;
    }
}
function createTable()  // Function for Create Table in SQLite.3 tables created here
{
    //db.transaction(function (tx) { tx.executeSql(createStatement, [], showRecords, onError); });
   // db.transaction(function (tx) { tx.executeSql(createStatementParty, [], showRecords, onError); });
    // db.transaction(function (tx) { tx.executeSql(createStatementWitness, [], showRecords, onError); });
    db.transaction(function (tx) { tx.executeSql(createStatement, [], onError); });
     db.transaction(function (tx) { tx.executeSql(createStatementParty, [], onError); });
     db.transaction(function (tx) { tx.executeSql(createStatementWitness, [], onError); });

}
function insertRecord() // Get value from Input and insert record . Function Call when Save/Submit Button Click..
{
    try {
        var AccidentID;
        var DateTimehistroy = $('#txtdatepicker').val();
        var TimeHistroy = $('#txttimepicker').val();
        var DateTimeBoth = localStorage.date + '  ' + localStorage.Time;
        var GPSLocationLatitude = $('#txtidGPSIncident').val();
        var GPSLocationLongitude = $('#txtidGPSIncident').val();
        var LocDescription = $('#taidLocDesc').val();
        var AccDescription = $('#idAccDesc').val();
        var RoadCondition = $('#idSelectRoadCondition').val();
        var AccRoadnNotes = $('#idAccDescNotes').val();
        var separateAllphotopathByComma = '';
        var separateAllphotopathByCommaDamage = '';
        $('#idDelImgPhotoImg div').each(function (i, item) {
            separateAllphotopathByComma += $(item).find('img').attr("src") + ',';

        });
        var PhotoLocationPath = separateAllphotopathByComma;
       
        $('#idDelImgDamagePhotoImg div').each(function (i, item) {
            separateAllphotopathByCommaDamage += $(item).find('img').attr("src") + ',';

        });
        var PhotoDamagePath = separateAllphotopathByCommaDamage;
       
        var policename = $('#txtidpolicename').val();
        var policenumber = $('#txtidpolicenumber').val();
        var policecasenumber = $('#txtidcasenumber').val();

        db.transaction(function (tx) {
                                           
        tx.executeSql(insertStatement, [DateTimeBoth, GPSLocationLatitude, GPSLocationLongitude, '', LocDescription, AccDescription, RoadCondition, AccRoadnNotes, PhotoLocationPath, PhotoDamagePath, policename, policenumber, policecasenumber, ''],
        function (tx, results) {
            AccidentID = results.insertId; // this is the id of the insert just performed(lastinserted id)
           // alert("AccidentID:::::::::" + AccidentID);
            insertRecordPartys(AccidentID);
            insertRecordSecondPartys(AccidentID);
            insertRecordWitness(AccidentID);
            insertRecordSecondWitness(AccidentID);
        }
        );
        });
    //alert("AccidentID::::::" + AccidentID);

   
   
    $.mobile.changePage('#indexPage', {
            transition: "none",
            reverse: false,
            changeHash: false
        });
        currentPage = 'indexPage';
    }
    catch (ex) {
       // alert("ex" + ex);
    }
}

function insertRecordPartys(Accid) {
   
  
    var Ptitle = $('#idselectpartyTitle').val();
    var Pname = $('#txtidPartyName').val();
    var Psurname = $('#txtidPartySurName').val();
    var Pidnum = $('#txtFirstpartyIDNumber').val();
    var Pdlnum = $('#txtidDriverLicenseNum').val();
    //photo1
    var scanlicensephotopathByComma;
    $('#idDriverLicenseNumPhoto div').each(function (i, item) {scanlicensephotopathByComma += $(item).find('img').attr("src") + ',';});
    var scanlicensephotopath = scanlicensephotopathByComma;
 
    var Pphnum = $('#txtFirstpartyPhNumber').val();
    var Ppemail = $('#txtFirstpartyemail').val();
    var Ppnotes = $('#txtFirstpartyNotes').val();
    var Ppvmake = $('#txtFirstpartyVehicleMake').val();
    var Ppvmodel = $('#txtFirstpartyVehicleModel').val();
    var Ppvyear= $('#txtFirstpartyVehicleYear').val();
     var Ppvcolor= $('#txtFirstpartyVehiclecolor').val();
    var Ppvregnum = $('#txtFirstpartyRegNum').val();
    var Ppvvinnum = $('#txtFirstpartyVINNum').val();
    var Ppvnotes = $('#txtFirstpartyVehicleNotes').val();
    //photo2
     var scanlicensediskpathByComma;
     $('#idLicenseDiskPhoto div').each(function (i, item) { scanlicensediskpathByComma += $(item).find('img').attr("src") + ','; });
    var scanlicensephotodiskpath = scanlicensediskpathByComma;
   //photo3
    var damagephotopathByComma;
    $('#idDamagePhoto div').each(function (i, item) { damagephotopathByComma += $(item).find('img').attr("src") + ','; });
    var damagephotopath = damagephotopathByComma;

    var Ppvinsurer = $('#txtFirstpartyInsurer').val();
    var Ppvipcnum = $('#txtFirstpartyInsurerPcnum').val();
    var Ppviphnum = $('#txtFirstpartyInsurerPhnum').val();
    var Ppvivcolor = $('#txtFirstpartyInsurerVcolor').val();
    var Ppviregnum = $('#txtFirstpartyInsurerVReg').val();
    var Ppvivinnum = $('#txtFirstpartyInsurerVinnum').val();

db.transaction(function (tx) {
tx.executeSql(insertStatementParty, [Accid, Ptitle, Pname, Psurname, Pidnum, Pdlnum, scanlicensephotopath, Pphnum, Ppemail, Ppnotes, Ppvmake, Ppvmodel, Ppvyear, Ppvcolor, Ppvregnum, Ppvvinnum, Ppvnotes, scanlicensephotodiskpath, damagephotopath, Ppvinsurer, Ppvipcnum, Ppviphnum, Ppvivcolor, Ppviregnum, Ppvivinnum, 'p1']);
});
}

function insertRecordSecondPartys(Accid) {
  

    var SPtitle = $('#idselectsecondpartyTitle').val();
    var SPname = $('#txtidSecondPartyName').val();
    var SPsurname = $('#txtidSecondPartySurName').val();
    var SPidnum = $('#txtSecondpartyIDNumber').val();
    var SPdlnum = $('#txtidSecondpartyDriverLicenseNum').val();
    //photo1
    var scanlicensephotopathByCommaSecondParty;
    $('#idSecondpartyDriverLicenseNumPhoto div').each(function (i, item) { scanlicensephotopathByCommaSecondParty += $(item).find('img').attr("src") + ','; });
    var scanlicensephotopathSecondParty = scanlicensephotopathByCommaSecondParty;
   

    var SPphnum = $('#txtSecondpartyPhNumber').val();
    var SPpemail = $('#txtSecondpartyemail').val();
    var SPpnotes = $('#txtSecondpartyNotes').val();
    var SPpvmake = $('#txtSecondpartyVehicleMake').val();
    var SPpvmodel = $('#txtSecondpartyVehicleModel').val();
    var SPpvyear = $('#txtSecondpartyVehicleYear').val();
    var SPpvcolor = $('#txtSecondpartyVehiclecolor').val();
    var SPpvregnum = $('#txtSecondpartyRegNum').val();
    var SPpvvinnum = $('#txtSecondpartyVINNum').val();
    var SPpvnotes = $('#txtSecondpartyVehicleNotes').val();
    //photo2
    var scanlicensediskpathByCommaSecondParty;
    $('#idSecondpartyLicenseDiskPhoto div').each(function (i, item) { scanlicensediskpathByCommaSecondParty += $(item).find('img').attr("src") + ','; });
    var scanlicensephotodiskpathSecondParty = scanlicensediskpathByCommaSecondParty;
   
    //photo3
    var damagephotopathByCommaSecondParty;
    $('#idSecondpartyDamagePhoto div').each(function (i, item) { damagephotopathByCommaSecondParty += $(item).find('img').attr("src") + ','; });
    var damagephotopathSecondParty = damagephotopathByCommaSecondParty;
   
    var SPpvinsurer = $('#txtSecondpartyInsurer').val();
    var SPpvipcnum = $('#txtSecondpartyInsurerPcnum').val();
    var SPpviphnum = $('#txtSecondpartyInsurerPhnum').val();
    var SPpvivcolor = $('#txtSecondpartyInsurerVcolor').val();
    var SPpviregnum = $('#txtSecondpartyInsurerVReg').val();
    var SPpvivinnum = $('#txtSecondpartyInsurerVinnum').val();

    db.transaction(function (tx) {
        tx.executeSql(insertStatementParty, [Accid, SPtitle, SPname, SPsurname, SPidnum, SPdlnum, scanlicensephotopathSecondParty, SPphnum, SPpemail, SPpnotes, SPpvmake, SPpvmodel, SPpvyear, SPpvcolor, SPpvregnum, SPpvvinnum, SPpvnotes, scanlicensephotodiskpathSecondParty, damagephotopathSecondParty, SPpvinsurer, SPpvipcnum, SPpviphnum, SPpvivcolor, SPpviregnum, SPpvivinnum, 'p2']);
    });




  
}
function insertRecordWitness(Accid) {
  
    var Wtitle = $('#idselectwitnesstitle').val();
    var Wname = $('#txtidwitnessName').val();
    var Wsurname = $('#txtidwitnessSurName').val();
    var Wphnum = $('#txtidwitnessPhnum').val();
    var Wemail = $('#txtidwitnessEmail').val();
    var Wnotes = $('#taidwitnessnotes').val();
    var Wst = $('#txtidwitnessSt').val();
    db.transaction(function (tx) {
    tx.executeSql(insertStatementWitness, [Accid, Wtitle, Wname, Wsurname, Wphnum, Wemail,Wnotes, Wst,'', 'w1']);
    });
}
function insertRecordSecondWitness(Accid) {
   
    var SWtitle = $('#idselectSwitnesstitle').val();
    var SWname = $('#txtidSwitnessName').val();
    var SWsurname = $('#txtidSwitnessSurName').val();
    var SWphnum = $('#txtidSwitnessPhnum').val();
    var SWemail = $('#txtidSwitnessEmail').val();
    var SWnotes = $('#taidSwitnessnotes').val();
    var SWst = $('#txtidSwitnessSt').val();
   
    db.transaction(function (tx) {
        tx.executeSql(insertStatementWitness, [Accid, SWtitle, SWname, SWsurname, SWphnum, SWemail, SWnotes, SWst, '', 'w2']);
    });
}


function onError(tx, error) // Function for Hendeling Error...
{
   // alert(error.message);
}
// Function For Retrive data from Database Display records as list
/*function showRecords()
{
    db.transaction(function (tx) {

        tx.executeSql(selectAllStatement, [], function (tx, result) {
            dataset = result.rows;
            var listhistroydata = document.getElementById("lstHistroy");
            listhistroydata.innerHTML = null;
            for (var i = 0, item = null; i < dataset.length; i++) {
                item = dataset.item(i);
                var DBDateTime = item["coldatetimeincident"];
                var displayHistroyIDDateTime = '<div class="HistroyOuterColor1" onclick="gotohistroyDetailsPage(' + item["colid"] + ')"><div class="HistroytimeDiv"><div class="Histroyfields"><div class="DateTimestyle1">' + item["colid"] + '</div>  <div class="DateTimestyle2">' + DBDateTime.split(' ')[0] + '</div> <div class="DateTimestyle3">' + DBDateTime.split(' ')[2] + '</div></div></div></div>';
                listhistroydata.innerHTML += displayHistroyIDDateTime;
                }
             });


    });
    $.mobile.changePage('#HistroyPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'HistroyPage';
    pageData.push(currentPage);

}*/
/*function gotohistroyDetailsPage(getclickid) {
var selectStatementbyid = "SELECT * FROM TableAAProjectNew where colid = " + getclickid;
//inner join two tables
var selectStatementPartybyid = "Select TablePartyNew.colpartyname,TablePartyNew.colpartyidnum,TablePartyNew.colpartydlnum,TablePartyNew.colpartytype from TablePartyNew INNER JOIN TableAAProjectNew ON TablePartyNew.colid =" + getclickid + " AND TableAAProjectNew.colid=" + getclickid + ";"
var selectStatementWitnessbyid = "Select TableWitnessNew.colwitnessname,TableWitnessNew.colwitnessphnum,TableWitnessNew.colwitnessemail,TableWitnessNew.colwitnessstatement,TableWitnessNew.colwitnesstype from TableWitnessNew INNER JOIN TableAAProjectNew ON TableWitnessNew.colid =" + getclickid + " AND TableAAProjectNew.colid=" + getclickid + ";"

db.transaction(function (tx) {
    tx.executeSql(selectStatementbyid, [], function (tx, result) {
        var ListAllAccident = document.getElementById("lstAllAccidentData");
        ListAllAccident.innerHTML = null;
        for (var i = 0; i < result.rows.length; i++) {
            item = result.rows.item(i);
           
            //  var displayAllAccidentData = '<li class="HistroyDetails">Date Time:' + item["coldatetimeincident"] + '</li><li class="HistroyDetails">GPS Location of Incident:' + item["collatitude"] + '</li><li class="HistroyDetails">Description of Location:' + item["coldesclocation"] + '</li><li class="HistroyDetails">Photo:' + item["colphotopath"] + '</li>';
            var displayAllAccidentData = '<li class="HistroyDetails">Date Time:' + item["coldatetimeincident"] + '</li><li class="HistroyDetails">GPS Location of Incident:' + item["collatitude"] + '</li><li class="HistroyDetails">Description of Location:' + item["coldesclocation"] + '</li>';
            ListAllAccident.innerHTML = displayAllAccidentData;
        }

    });

});

db.transaction(function (tx) {
    tx.executeSql(selectStatementPartybyid, [], function (tx, resultparty) {
     
        var displayAllPartysData = "";
        var AllPartysData = document.getElementById("lstAllPartysData");
        AllPartysData.innerHTML = null;

        for (var i = 0; i < resultparty.rows.length; i++) {
            item = resultparty.rows.item(i);
            var PartyNum = '';
            if (item["colpartytype"] == 'p1') {
                PartyNum = 'First Party';
            }
            else {
                PartyNum = 'Second party';
            }
          
            displayAllPartysData = displayAllPartysData + '<br/><li class="HistroyDetails" >'+PartyNum+'</li><li class="HistroyDetails">Name:' + item["colpartyname"] + '</li><li class="HistroyDetails">ID Number:' + item["colpartyidnum"] + '</li><li class="HistroyDetails">Driver License Number:' + item["colpartydlnum"] + '</li>';

        }
        AllPartysData.innerHTML = displayAllPartysData;
    });
});
   
   db.transaction(function (tx) {
       tx.executeSql(selectStatementWitnessbyid, [], function (tx, resultwitness) {
        var displayAllWitnesssData = "";
        var AllWitnesssData = document.getElementById("lstAllWitnessData");
        AllWitnesssData.innerHTML = null;
        for (var i = 0; i < resultwitness.rows.length; i++) {
            item = resultwitness.rows.item(i);
            var WitnessNum = '';
            if (item["colwitnesstype"] == 'w1') {
                WitnessNum = 'First Witness';
            }
            else {
                WitnessNum = 'Second Witness';
            }
           
            displayAllWitnesssData = displayAllWitnesssData + '<br/><li class="HistroyDetails">' + WitnessNum + '</li><li class="HistroyDetails">Name:' + item["colwitnessname"] + '</li><li class="HistroyDetails">Phone Number:' + item["colwitnessphnum"] + '</li><li class="HistroyDetails">Email Address:' + item["colwitnessemail"] + '</li><li class="HistroyDetails">Witness Statement:' + item["colwitnessstatement"] + '</li>';
            }
        AllWitnesssData.innerHTML = displayAllWitnesssData;
    });
});
    
prevPage = currentPage;
$.mobile.changePage('#histroyDetailsPage', {
transition: "none",
reverse: false,
changeHash: false
});
currentPage = 'histroyDetailsPage';
pageData.push(currentPage);
      
}*/



$(document).ready(function () // Call function when page is ready for load..
{
    $("body").fadeIn(2000); // Fede In Effect when Page Load..
    initDatabase();


});
function btnSaveAllDetails() {
    try {
      /*  if (document.getElementById('txtidpolicename').value == "") {
            alert("Please enter the attending officer’s name!");
            return false;
        }
        else if (document.getElementById('txtidpolicenumber').value == "") {
            alert("Please enter attending officer’s badge number");
            return false;
        }

        else if (document.getElementById('txtidcasenumber').value == "") {
            alert("Please enter case number!");
            return false;
        }*/
     
        insertRecord();
    }
    catch (err) {
        alert(err.Message);
    }
}
function btnshowHistroyPage() {
   
   // showRecords();

}

