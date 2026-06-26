
document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("wildlife-video");
    var toggleBtn = document.getElementById("toggle-video-btn");

    toggleBtn.addEventListener("click", function () {
        if (!video.classList.contains("hidden")) {
            video.pause();
            video.classList.add("hidden");
            toggleBtn.textContent = "▶ Show & Play Video";
            toggleBtn.setAttribute("aria-label", "Show and play the wildlife video");
        } else {
            video.classList.remove("hidden");
            video.play();
            toggleBtn.textContent = "⏸ Hide Video";
            toggleBtn.setAttribute("aria-label", "Hide the wildlife video");
        }
    });

    video.addEventListener("ended", function () {
        toggleBtn.textContent = "▶ Play Video";
        toggleBtn.setAttribute("aria-label", "Play the wildlife video");
    });

    video.addEventListener("play", function () {
        toggleBtn.textContent = "⏸ Hide Video";
        toggleBtn.setAttribute("aria-label", "Hide the wildlife video");
    });

    video.addEventListener("pause", function () {
        if (!video.classList.contains("hidden")) {
            toggleBtn.textContent = "▶ Play Video";
            toggleBtn.setAttribute("aria-label", "Play the wildlife video");
        }
    });
});
