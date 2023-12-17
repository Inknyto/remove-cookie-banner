const gdpr = document.getElementById("iubenda-cs-banner");

function removeGdprBanner() {
  if (gdpr) {
    gdpr.remove();
  } else {
    setTimeout(removeGdprBanner, 2000);
  }
}

// Start the process
removeGdprBanner();
