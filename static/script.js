// Global variables
let lastFormData = null;

// Hide loader after page load
window.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loader = document.getElementById("loaderOverlay");
        if (loader) loader.style.display = "none";
    }, 3000);
});

// Video error handling
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("bgVideo");
    if (video) {
        video.addEventListener("error", function(e) {
            console.error("Background video failed to load. Check the file path and format.");
            this.style.display = "none";
            // Add gradient fallback
            document.body.style.background = 'radial-gradient(ellipse at center, #0a1a0a 0%, #000 100%)';
        });
        
        // Try to play video
        video.addEventListener('loadeddata', function() {
            console.log('Video loaded successfully');
            this.play().catch(e => console.log('Autoplay prevented'));
        });
    }
});

// Close modal function
function closeModal() {
    const modal = document.getElementById("predictionModal");
    const modalContent = document.querySelector(".modal-content");
    if (modalContent) {
        modalContent.classList.remove("flip-in");
        modalContent.classList.add("flip-out");
        modalContent.addEventListener("animationend", function handler() {
            modal.style.display = "none";
            modalContent.classList.remove("flip-out");
            document.getElementById("fieldFlowDuration").textContent = "";
            document.getElementById("fieldTotalFwdPackets").textContent = "";
            document.getElementById("fieldTotalBackwardPackets").textContent = "";
            document.getElementById("fieldTotalLengthFwdPackets").textContent = "";
            document.getElementById("predictionFields").style.display = "none";
            lastFormData = null;
            modalContent.removeEventListener("animationend", handler);
        });
    } else {
        modal.style.display = "none";
    }
}

// Click outside modal to close
window.onclick = function(event) {
    var modal = document.getElementById("predictionModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Show prediction fields with stored data
function showPredictionFields() {
    if (!lastFormData) {
        let stored = sessionStorage.getItem("lastFormData");
        if (stored) {
            lastFormData = JSON.parse(stored);
        }
    }
    if (lastFormData) {
        document.getElementById("fieldFlowDuration").textContent = lastFormData.flow_duration || "";
        document.getElementById("fieldTotalFwdPackets").textContent = lastFormData.total_fwd_packets || "";
        document.getElementById("fieldTotalBackwardPackets").textContent = lastFormData.total_backward_packets || "";
        document.getElementById("fieldTotalLengthFwdPackets").textContent = lastFormData.total_length_fwd_packets || "";
        document.getElementById("predictionFields").style.display = "block";
    }
}

// Form submission handler
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("predictForm");
    if (form) {
        form.addEventListener("submit", function(e) {
            // Store form values before submit
            lastFormData = {
                flow_duration: document.querySelector('input[name="flow_duration"]').value,
                total_fwd_packets: document.querySelector('input[name="total_fwd_packets"]').value,
                total_backward_packets: document.querySelector('input[name="total_backward_packets"]').value,
                total_length_fwd_packets: document.querySelector('input[name="total_length_fwd_packets"]').value
            };
            sessionStorage.setItem("lastFormData", JSON.stringify(lastFormData));
            
            // Show loader
            var loader = document.getElementById("loaderOverlay");
            if (loader) loader.style.display = "flex";
        });
    }
});