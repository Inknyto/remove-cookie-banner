const gdpr = document.getElementById("cookieBar");

function removeGdprBanner() {
  if (gdpr) {
    gdpr.remove();
  } else {
    setTimeout(removeGdprBanner, 2000);
  }
}

// Start the process
removeGdprBanner();
