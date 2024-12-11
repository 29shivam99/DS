const images = document.querySelectorAll("img.lazy");

const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 1, // Trigger when 10% of the image is visible
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // Set the src attribute to the data-src
      img.classList.remove("lazy"); // Remove the lazy class
      observer.unobserve(img); // Stop observing the image
    }
  });
};

const observer = new IntersectionObserver(callback, options);

images.forEach((img) => {
  observer.observe(img); // Start observing each lazy image
});
