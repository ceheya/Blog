document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll("[data-copy]");

  copyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const textToCopy = button.getAttribute("data-copy");
      navigator.clipboard.writeText(textToCopy).then(() => {
        console.log(`Copied: ${textToCopy}`);
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      }).catch(err => {
        console.error("Copy failed", err);
      });
    });
  });
});
