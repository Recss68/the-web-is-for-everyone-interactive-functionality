const popover = document.querySelector(".popover");

// Toggle popover bij klikken op message-btn
document.querySelectorAll(".message-btn, .close-popover").forEach(btn => {
    btn.addEventListener("click", () => {
        popover.classList.toggle("active");
    });
});