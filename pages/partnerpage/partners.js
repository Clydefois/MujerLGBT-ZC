document.addEventListener("DOMContentLoaded", () => {
  const shapes = Array.from(document.querySelectorAll(".shape1, .shape2, .shape3, .shape4"));
  const leftNav = document.getElementById("left-nav");
  const rightNav = document.getElementById("right-nav");
  const section = document.querySelector(".section3");
  
  // Check if mobile view
  const isMobile = () => window.innerWidth <= 768;
  
  let sectionWidth = section.offsetWidth;
  let sectionHeight = section.offsetHeight;

  const leftMargin = -600; 

  shapes.forEach((shape) => {
    shape.style.transition = "transform 0.3s ease, left 0.5s ease"; 
  });

  const moveShapes = (direction) => {
    // Completely disable movement on mobile - show all 4 people instead
    if (isMobile()) {
      return;
    }
    
    if (direction === "right") {
      const firstShape = shapes.shift();
      firstShape.style.transition = "none";
      firstShape.style.left = `${sectionWidth}px`;
      
      // Update positions
      setTimeout(() => {
        firstShape.style.transition = "left 0.5s ease, transform 0.3s ease"; 
        shapes.push(firstShape);
        shapes.forEach((shape, index) => {
          const shapeWidth = shape.offsetWidth;
          shape.style.left = `${(index * (sectionWidth / shapes.length)) + (sectionWidth / 2 - shapeWidth / 2) + leftMargin}px`;
        });
      }, 50);
    } else if (direction === "left") {
      const lastShape = shapes.pop();
      lastShape.style.transition = "none";
      lastShape.style.left = `-${lastShape.offsetWidth}px`;
      
      // Update positions
      setTimeout(() => {
        lastShape.style.transition = "left 0.5s ease, transform 0.3s ease"; 
        shapes.unshift(lastShape); 
        shapes.forEach((shape, index) => {
          const shapeWidth = shape.offsetWidth;
          shape.style.left = `${(index * (sectionWidth / shapes.length)) + (sectionWidth / 2 - shapeWidth / 2) + leftMargin}px`; 
        });
      }, 50);
    }
  };

  const initializeShapes = () => {
    sectionWidth = section.offsetWidth;
    sectionHeight = section.offsetHeight;
    
    if (!isMobile()) {
      shapes.forEach((shape, index) => {
        shape.style.position = "absolute";
        shape.style.top = `${sectionHeight / 2 - shape.offsetHeight / 2}px`;
        shape.style.left = `${(index * (sectionWidth / shapes.length)) + (sectionWidth / 2 - shape.offsetWidth / 2) + leftMargin}px`;
      });
    } else {
      // Reset styles for mobile
      shapes.forEach((shape) => {
        shape.style.position = "";
        shape.style.top = "";
        shape.style.left = "";
      });
    }
  };

  // Initialize shapes on load
  initializeShapes();

  // Reinitialize on window resize
  window.addEventListener('resize', initializeShapes);
 
  // Add both click and touch events for better mobile support
  const addEventListeners = (element, callback) => {
    element.addEventListener("click", callback);
    element.addEventListener("touchstart", (e) => {
      e.preventDefault();
      callback();
    });
  };

  addEventListeners(leftNav, () => moveShapes("left"));
  addEventListeners(rightNav, () => moveShapes("right"));
});

