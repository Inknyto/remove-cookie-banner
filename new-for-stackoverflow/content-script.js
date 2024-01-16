
function removeGdprBanner() {
const gdpr = document.getElementById("onetrust-consent-sdk")
  if (gdpr) {
    gdpr.remove();
    } else {
    setTimeout(removeGdprBanner, 2000);
  }
}

// Start the process
removeGdprBanner();
