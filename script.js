/**
 * script.js – Save Our Wildlife
 *
 * Handles the toggle button that:
 *   • Hides the video when it is visible
 *   • Plays the video (and shows it) when it is hidden or paused
 */

document.addEventListener("DOMContentLoaded", function () {
    // Grab references to the video element and the toggle button
    var video = document.getElementById("wildlife-video");
    var toggleBtn = document.getElementById("toggle-video-btn");

    /**
     * Click handler for the toggle/play button.
     *
     * Behaviour (as per specification):
     *   - If the video is currently visible → hide it (and pause playback).
     *   - If the video is hidden OR not playing → show it and play it.
     */
    toggleBtn.addEventListener("click", function () {
        if (!video.classList.contains("hidden")) {
            // Video is visible → hide it and pause
            video.pause();
            video.classList.add("hidden");
            toggleBtn.textContent = "▶ Show & Play Video";
            toggleBtn.setAttribute("aria-label", "Show and play the wildlife video");
        } else {
            // Video is hidden → show it and play
            video.classList.remove("hidden");
            video.play();
            toggleBtn.textContent = "⏸ Hide Video";
            toggleBtn.setAttribute("aria-label", "Hide the wildlife video");
        }
    });

    // Update button label when the video ends naturally
    video.addEventListener("ended", function () {
        toggleBtn.textContent = "▶ Play Video";
        toggleBtn.setAttribute("aria-label", "Play the wildlife video");
    });

    // Keep button text in sync when user pauses/plays via native controls
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
