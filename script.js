const pages = [
    {
        "title" : "A simple feature flag implementation",
        "resume" : "simple-feature-flag-implementation", 
        "src" : "simple-feature-flag-implementation",
    },
    {
        "title" : "Pagination with obserables",
        "resume" : "Pangination with observables", 
        "src" : "pagination-with-observables",
    }
]



const entries = document.getElementById("entries");
const page = document.getElementById("page");

function entryPreview(p) {
    const html = `
        <h2>
        <a href="#${p.src}"> ${p.title}</a></h2>
        <p>${p.resume}</p>
        `;
    return html; 
}

if (window.location.hash) {
    const src = window.location.hash.substring(1).replace(/[^a-z\-]*/, '');
    fetch(`entries/${src}.html`)
    .then(data => data.text())
    .then(text => page.innerHTML = text);
    const entriesHTML = pages.slice(0, 10).filter(p => p.src !== src).map(entryPreview).join();
    entries.innerHTML = entriesHTML;
} else {
    const entriesHTML = pages.map(entryPreview).join();
    entries.innerHTML = entriesHTML;
}





