// Purpose:    Script instantiates the header and footer on a given 
            // page. 
            // For a given page, the current page is marked in-active
            // to clarify the current location of the user.
// Author: Hank Helmers
// Date: 09-26-2025

// Programmatically implements the basic header HTML 
// below with the additional functionality of de-act
// -ivating urls of the current page:
    // <h1 class="flex-title">Hank Helmers</h1>
    // <a class="" href="portfolio.html">Portfolio</a>
    // <a class="" href="resume.html">Resume</a>

function createHeader() {
    let nav = document.querySelector("nav");

    let header = document.createElement("h1");
    header.setAttribute("class", "flex-title");
    header.textContent = "Hank Helmers";

    let home_link = document.createElement("a");
    home_link.setAttribute("href", "index.html");
    home_link.textContent = "Home";
    
    let portfolio_link = document.createElement("a");
    portfolio_link.setAttribute("href", "portfolio.html");
    portfolio_link.textContent = "Portfolio";

    let resume_link = document.createElement("a");
    resume_link.setAttribute("href", "resume.html");
    resume_link.textContent = "Resume";

    nav.appendChild(header);
    nav.appendChild(home_link);
    nav.appendChild(portfolio_link);
    nav.appendChild(resume_link);

    // Adjusts which links are active based on the 
    // current page
    let currPageName = window.location.pathname; 
    console.log("Current page: " + currPageName);
    if (currPageName == "/index.html") {
        disableLink(home_link);
    } else if (currPageName == "/portfolio.html") {
        disableLink(portfolio_link);
    } else if (currPageName == "/resume.html") {
        disableLink(resume_link);
    }
}

function disableLink(a_element) {
    a_element.setAttribute("aria-enabled", "false"); // Adds accessibility 
    a_element.removeAttribute("href");               // Prevents functionality
    a_element.setAttribute("class", "inactive");     // Improves visual
}

// Purpose: Simply instantiates the base
//       footer design programmatically.
// <a href="https://www.linkedin.com/in/hank-helmers/">LinkedIn</a>
// <a href="https://rose-hulman.joinhandshake.com/profiles/5ey8bq">Handshake</a>
function createFooter() {
    // Find footer element
    let footer = document.querySelector("footer");

    let linkedin_link = document.createElement("a");
    linkedin_link.setAttribute("href", "https://www.linkedin.com/in/hank-helmers/");
    linkedin_link.textContent = "LinkedIn";
    footer.appendChild(linkedin_link);

    let handshake_link = document.createElement("a");
    handshake_link.setAttribute("href", "https://rose-hulman.joinhandshake.com/profiles/5ey8bq");
    handshake_link.textContent = "Handshake";
    footer.appendChild(handshake_link);
}


// When page loads
window.addEventListener("load", (event) => {
    createHeader();
    createFooter();
});