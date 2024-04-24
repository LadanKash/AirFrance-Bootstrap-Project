
//menue
$(document).ready(function(){
    $(".nav-link").on("click", function(){
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
  });
  
  // Initialize  scroolle
  flatpickr("#travelDates", {
    dateFormat: "Y-m-d", 
    minDate: "today" 
  });
//dropdown
document.getElementById('departing').addEventListener('click', function() {
    toggleScroll('departingScroll');
  });

  document.getElementById('arriving').addEventListener('click', function() {
    toggleScroll('arrivingScroll');
  });

  function toggleScroll(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }

  function selectDestination(inputId, element) {
    var inputField = document.getElementById(inputId);
    inputField.value = element.textContent;
  }

  function showAdditionalOptions() {
    var additionalOptions = document.getElementById('additionalOptions');
    additionalOptions.style.display = 'flex';
  }