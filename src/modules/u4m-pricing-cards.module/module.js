
// Function to set equal height for all .plan_top elements
function matchHeight() {
    // Select all elements with the class .plan_top
    const planTopElements = document.querySelectorAll('.plan_top');
    
    // Initialize a variable to store the maximum height
    let maxHeight = 0;
  
    // Loop through all elements and find the maximum height
    planTopElements.forEach(function(element) {
      const elementHeight = element.offsetHeight;
      if (elementHeight > maxHeight) {
        maxHeight = elementHeight;
      }
    });
  
    // Set all .plan_top elements to the maximum height
    planTopElements.forEach(function(element) {
      element.style.height = maxHeight + 'px';
    });
  }
  
  // Call the function when the page loads or on window resize
  window.addEventListener('load', matchHeight);
  window.addEventListener('resize', matchHeight);

  