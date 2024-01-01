const gdpr = document.getElementsByClassName("js-consent-banner")[0]

function removeGdprBanner() {
  if (gdpr) {
    gdpr.remove();
    } else {
    setTimeout(removeGdprBanner, 2000);
  }
}

// Start the process
removeGdprBanner();
