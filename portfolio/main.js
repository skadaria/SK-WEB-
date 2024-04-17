window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbars = document.getElementsByClassName("navbar");
  for (var i = 0; i < navbars.length; i++) {
    var navbar = navbars[i];
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-60px"; // Adjust according to the height of your navbar
    }
  }
}
function showPasswordPrompt(event, fileURL, download = false) {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();

  // Show password prompt and handle logic
  var password = prompt("Enter password:");
  if (password === "srijal") {
    // Proceed with the action if the password is correct
    if (download) {
      // If download is true, initiate download
      var link = document.createElement("a");
      link.href = fileURL;
      link.download = fileURL.split("/").pop(); // Extracts filename from URL
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Otherwise, navigate to the link
      window.location.href = fileURL;
    }
  } else {
    // Handle incorrect password
    alert("Incorrect password!");
  }
}
