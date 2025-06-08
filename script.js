
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        banner.style.display = "flex";
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", true);
        banner.style.display = "none";
    });
});

function checkPassword() {
    const password = prompt("Podaj hasło dostępu do galerii:");
    if (password === "Hania3") {
        window.location.href = "gallery.html";
    } else {
        alert("Nieprawidłowe hasło.");
    }
}
