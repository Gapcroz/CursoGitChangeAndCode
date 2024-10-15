document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-info-btn");
    const moreInfo = document.getElementById("more-info");

    toggleButton.addEventListener("click", function() {
        if (moreInfo.style.display === "none") {
            moreInfo.style.display = "block";
            toggleButton.textContent = "Ocultar detalles";
        } else {
            moreInfo.style.display = "none";
            toggleButton.textContent = "Mostrar más detalles";
        }
    });
});
