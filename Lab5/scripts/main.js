function createPhoneMask(string) {
    return string.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}

function destroyPhoneMask(string) {
    return string.replace(/\D/g, '').substring(0, 10);
}
function createCCMask(string) {
    return string.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}
function destroyCCMask(string) {
    return string.replace(/\D/g, '').substring(0, 16);
}
function createCVVMask(string) {
    return string.replace(/(\d{3})/, "$1");
}
function destroyCCVMask(string) {
    return string.replace(/\D/g, '').substring(0, 3);
}

function apptAlert() {
    document.getElementById("collapseExample").collapse = true;
    document.getElementById("serviceselect").style.borderColor = "lightgrey";
    document.getElementById("aptDate").style.borderColor = "lightgrey";
    document.getElementById("aptTime").style.borderColor = "lightgrey";
    document.getElementById("nameinput").style.borderColor = "lightgrey";
    document.getElementById("emailinput").style.borderColor = "lightgrey";
    document.getElementById("tel1").style.borderColor = "lightgrey";
    document.getElementById("ccnameinput").style.borderColor = "lightgrey";
    document.getElementById("cc1").style.borderColor = "lightgrey";
    document.getElementById("expdate").style.borderColor = "lightgrey";
    document.getElementById("cvv1").style.borderColor = "lightgrey";
    //Field validation
    if(document.getElementById("serviceselect").options[document.getElementById("serviceselect").selectedIndex].text == ""){
      document.getElementById("serviceselect").style.borderColor = "red";
      document.getElementById("serviceselectthing").scrollIntoView();
    }else if(document.getElementById("aptDate").value == ""){
      document.getElementById("aptDate").style.borderColor = "red";
      document.getElementById("datetimeinput").scrollIntoView();
    }else if(document.getElementById("aptTime").value == ""){
      document.getElementById("aptTime").style.borderColor = "red";
      document.getElementById("datetimeinput").scrollIntoView();
    }else if(document.getElementById("nameinput").value == ""){
      document.getElementById("nameinput").style.borderColor = "red";
      document.getElementById("nameinputthing").scrollIntoView();
    }else if(document.getElementById("emailinput").value == ""){
      document.getElementById("emailinput").style.borderColor = "red";
      document.getElementById("emailinputthing").scrollIntoView();
    }else if(document.getElementById("tel1").value.length != 12){
      document.getElementById("tel1").style.borderColor = "red";
      document.getElementById("tel1thing").scrollIntoView();
      document.getElementById("tel1").title = "Please enter a 10 digit phone number";
    }else if(document.getElementById("ccnameinput").value == ""){
      document.getElementById("ccnameinput").style.borderColor = "red";
      document.getElementById("ccnameinputthing").scrollIntoView();
    }else if(document.getElementById("cc1").value.length != 19){
      document.getElementById("cc1").style.borderColor = "red";
      document.getElementById("cc1thing").scrollIntoView();
    }else if(document.getElementById("expdate").value == ""){
      document.getElementById("expdate").style.borderColor = "red";
      document.getElementById("expdatething").scrollIntoView();
    }else if(document.getElementById("cvv1").value.length != 3){
      document.getElementById("cvv1").style.borderColor = "red";
      document.getElementById("cvv1thing").scrollIntoView();
    }else{

      $('#bkapt').click();
      let x = document.getElementById("alert");
      //let y = document.getElementById("meeting-time").value;
      let date = document.getElementById("aptDate").value;
      let time = document.getElementById("aptTime").value;
      let doc = document.getElementById("vet").options[document.getElementById("vet").selectedIndex].text;
      let type = document.getElementById("serviceselect").options[document.getElementById("serviceselect").selectedIndex].text;
      if(doc == "Any"){
        doc = "any available doctor";
      }

      x.removeAttribute("hidden");
      window.scrollTo(0,0);
      x.innerHTML = type + " appointment successfully booked on " + date + " at " + time + " with " + doc + "!";
    }
}


$(document).ready(function(){
  $("input[id='tel1']").on("input", function () {
              $("input[id='tel2']").val(destroyPhoneMask(this.value));
              this.value = createPhoneMask($("input[id='tel2']").val());
          });
  $("input[id='cc1']").on("input", function () {
              $("input[id='cc2']").val(destroyCCMask(this.value));
              this.value = createCCMask($("input[id='cc2']").val());
          });
  $("input[id='cvv1']").on("input", function () {
              $("input[id='cvv2']").val(destroyCCVMask(this.value));
              this.value = createCVVMask($("input[id='cvv2']").val());
          });
  $("#cc1").on("mouseenter", function(){
      $("#cc1").addClass("showInput");
  });

  $("#cc1").on("mouseleave", function(){
      $("#cc1").removeClass("showInput");
  });

  $("#cc1").tooltip({
      classes: {
          "ui-tooltip": "highlight"
      }
  });

  $("#cvv1").on("mouseenter", function(){
      $("#cvv1").addClass("showInput");
  });

  $("#cvv1").on("mouseleave", function(){
      $("#cvv1").removeClass("showInput");
  });

  $("#cvv1").tooltip({
      classes: {
          "ui-tooltip": "highlight"
      }
  });
  $("#tel1").on("mouseenter", function(){
      $("#cvv1").addClass("showInput");
  });

  $("#tel1").on("mouseleave", function(){
      $("#tel1").removeClass("showInput");
  });

  $("#tel1").tooltip({
      classes: {
          "ui-tooltip": "highlight"
      }
  });

  var timdissabled = ["06/30/2021","07/07/2021","07/14/2021","07/21/2021","07/28/2021","08/04/2021","08/11/2021","08/18/2021","08/25/2021"]
  var jimdissabled = ["07/03/2021","07/10/2021","07/17/2021","07/24/2021","07/31/2021","08/07/2021","08/14/2021","08/21/2021","08/28/2021"]
  var kimdissabled = ["07/04/2021","07/11/2021","07/18/2021","07/25/2021","08/01/2021","08/08/2021","08/15/2021","08/22/2021","08/29/2021"]
  const setDateFormat = "mm/dd/yy";

  function disableDates(date) {
      var string = jQuery.datepicker.formatDate(setDateFormat, date);
      if(document.getElementById("vet").options[document.getElementById("vet").selectedIndex].text == "Dr. Tim"){
        console.log("Tim is a nigger");
        return [ timdissabled.indexOf(string) === -1 ]
      }else if(document.getElementById("vet").options[document.getElementById("vet").selectedIndex].text == "Dr. Jim"){
        console.log("Jim is a nigger")
        return [ jimdissabled.indexOf(string) === -1 ]
      }else if(document.getElementById("vet").options[document.getElementById("vet").selectedIndex].text == "Dr. Kim"){
        console.log("Kim is a nigger")
        return [ kimdissabled.indexOf(string) === -1 ]
      }else{
        return [true]
      }
      //if (date.getDay() === 0)
      //    return [false];
  }
  $( "#aptDate" ).datepicker(
    {
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date(),
        maxDate: '+2M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    }
);



});


window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});
