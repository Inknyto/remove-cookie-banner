const gdpr = document.getElementById("onetrust-banner-sdk")

function removeGdprBanner() {
  if (gdpr) {
    gdpr.remove();
    } else {
    setTimeout(removeGdprBanner, 2000);
  }
}

// Start the process
removeGdprBanner();
