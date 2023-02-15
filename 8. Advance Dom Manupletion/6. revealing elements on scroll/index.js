"use strict"

const allSections = document.querySelectorAll("section");

const revealSection = function(entries,observer){
    const [entry] = entries;

    console.log(entry);
    console.log(entry.target);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("hidden");
    observer.unobserve(entry.target)

}

const sectionObserver = new IntersectionObserver(revealSection,{
    root:null,
    threshold:0.25
});


allSections.forEach(function(section){
    sectionObserver.observe(section);
})