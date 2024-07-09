
function removeGdprBanner() {
  const gdpr = document.getElementsByClassName("cky-consent-container")[0]
  if (gdpr) {
    gdpr.remove();
    } else {
    setTimeout(removeGdprBanner, 2000);
  }
}

// Start the process
removeGdprBanner();
