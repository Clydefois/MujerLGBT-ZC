document.addEventListener("DOMContentLoaded", () => {
  const shapes = Array.from(document.querySelectorAll(".shape1, .shape2, .shape3, .shape4"));
  const leftNav = document.getElementById("left-nav");
  const rightNav = document.getElementById("right-nav");
  const section = document.querySelector(".section3");
  const sectionWidth = section.offsetWidth;
  const sectionHeight = section.offsetHeight;


  const leftMargin = -600; 

  shapes.forEach((shape) => {
    shape.style.transition = "transform 0.3s ease, left 0.5s ease"; 
  });

  const moveShapes = (direction) => {
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
          shape.style.left = `${(index * (sectionWidth / shapes.length)) + (sectionWidth / 2 - shapeWidth / 2) + leftMargin}px`; // Adjust positions
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

  shapes.forEach((shape, index) => {
    shape.style.position = "absolute";
    shape.style.top = `${sectionHeight / 2 - shape.offsetHeight / 2}px`; // Center vertically
    shape.style.left = `${(index * (sectionWidth / shapes.length)) + (sectionWidth / 2 - shape.offsetWidth / 2) + leftMargin}px`; // Center horizontally with left margin
  });

 
  leftNav.addEventListener("click", () => moveShapes("left"));  // Left button moves shapes left
  rightNav.addEventListener("click", () => moveShapes("right")); // Right button moves shapes right
});

