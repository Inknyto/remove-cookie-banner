
function removeGdprBanner() {
  const gdpr = document.getElementById("cookieBar");
  if (gdpr) {
    gdpr.remove();
  } else {
    setTimeout(removeGdprBanner, 2000);
  }
}

// Start the process
removeGdprBanner();
