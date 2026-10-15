let currentTab = "All";


function changeStatus(jobId, newStatus) {
    // Find the card that was clicked.
    let card = document.getElementById(jobId);

    // Find the status text inside that card.
    let status = card.querySelector(".status");

    // Replace the old status.
    status.innerText = newStatus;

    // Change the status colors.
    if (newStatus === "Interview") {
        status.style.backgroundColor = "#dcfce7";
        status.style.color = "#15803d";
    } else {
        status.style.backgroundColor = "#fee2e2";
        status.style.color = "#dc2626";
    }

    // Update the dashboard numbers.
    updateCounts();

    // Update the cards shown in the current tab.
    showTab(currentTab);
}

function showTab(tabName) {
    currentTab = tabName;

    // Remove the blue background from every tab.
    document.getElementById("all-tab").classList.remove("active");
    document.getElementById("interview-tab").classList.remove("active");
    document.getElementById("rejected-tab").classList.remove("active");

    // Add the blue background to the selected tab.
    if (tabName === "All") {
        document.getElementById("all-tab").classList.add("active");
    } else if (tabName === "Interview") {
        document.getElementById("interview-tab").classList.add("active");
    } else {
        document.getElementById("rejected-tab").classList.add("active");
    }

    // Select all remaining job cards.
    let cards = document.querySelectorAll(".job-card");

    let visibleJobs = 0;

    // Check each card.
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        let status = card.querySelector(".status").innerText;

        if (tabName === "All") {
            card.style.display = "block";
            visibleJobs++;
        } else if (status === tabName) {
            card.style.display = "block";
            visibleJobs++;
        } else {
            card.style.display = "none";
        }
    }

    // Show the number of jobs in the selected tab.
    document.getElementById("jobs-count").innerText = visibleJobs;

    // Show the empty message when no cards match.
    if (visibleJobs === 0) {
        document.getElementById("empty-message").style.display = "block";
    } else {
        document.getElementById("empty-message").style.display = "none";
    }
}