// Input Section
const queryInput = document.getElementById("queryInput");
const querySubmitBtn = document.getElementById("querySubmitBtn");

// Search Result Section
const searchResultBody = document.getElementById("resultSection");

// Drop Down Section

const sectionBtns = document.querySelectorAll(".sectionDropBtn");
const sectionContent = document.querySelectorAll(".dropContent");

let request = indexedDB.open("hparDB", 1);


let searchQuery;

function handleSubmit() {
    searchQuery = queryInput.value;
    
    searchResultBody.hidden = false;
    requestAnimationFrame(() => {
        searchResultBody.classList.add("expand");
    });
}

function handleDropDown(btn, index) {
    const content = sectionContent[index];
    if (!content) return;

    const isExpanding = !content.classList.contains("expand");

    if (isExpanding) {
        content.classList.add("expand");
    } else {
        content.classList.remove("expand");
    }

    btn.textContent = btn.textContent === ">" ? "v" : ">";
}

const sectionList = document.querySelector("#sectionList");

sectionList.addEventListener("click", (event) => {
    const btn = event.target.closest(".sectionDropBtn");
    if (!btn) return;

    const sectionContent = btn.closest("li")?.querySelector(".dropContent");
    if (!sectionContent) return;

    sectionContent.classList.toggle("expand");
    btn.textContent = sectionContent.classList.contains("expand") ? "v" : ">";
});
querySubmitBtn.addEventListener("click", handleSubmit );