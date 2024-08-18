// ! this is important thing to build

let container = document.querySelector(".container");
let tabContainer = container.querySelector(".tab-container");

// this is nice way
let lastActiveTab;
let lastActiveSection;

//mouseover can be used in the event if u wnna display section on hovering on tabs
tabContainer.addEventListener("click", function (event) {
  let tab = event.target;

  if (!tab.classList.contains("tab")) return;
  if (tab.isSameNode(lastActiveTab)) {
    // if newly clicked tab same as previous, nothing to be done
    return;
  }

  // reset previous selection
  lastActiveTab?.classList.remove("active-tab");
  lastActiveSection?.classList.remove("section-visible");

  let goto = tab.dataset.goto;
  let section = container.querySelector(`#${goto}`);
  console.log(goto, section);
  tab.classList.add("active-tab");
  section.classList.add("section-visible");

  // set lastactive
  lastActiveTab = tab;
  lastActiveSection = section;
});
