const preview = document.querySelector(".preview");

// Your anime images array
const images = [
  "../images/img1.jpg",
  "../images/img6.jpg",
  "../images/img3.jpg",
  "../images/img4.jpg",
  "../images/img5.jpg",
  "../images/img2.jpg",
  "../images/img7.jpg",
  "../images/img8.jpg",
  "../images/img9.jpg",
  "../images/img10.jpg",
];

let currentIndex = 0;

function getThreeImages(startIndex) {
  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push(images[(startIndex + i) % images.length]);
  }
  return result;
}

// Function to display images
function showImages() {
  preview.innerHTML = ""; 

  const threeImages = getThreeImages(currentIndex);

  threeImages.forEach((imgSrc, index) => {
    const img = document.createElement("img");
    img.src = imgSrc;

    // Active image is in the middle (index 1)
    if (index === 1) {
      img.style.filter = "blur(0)";
      img.style.transform = "scale(1.5)";
      img.style.zIndex = 1;
    } else {
      img.style.filter = "blur(5px)";
      img.style.transform = "scale(1)";
      img.style.zIndex = 0;
    }

    preview.appendChild(img);
  });

 
  currentIndex = (currentIndex + 1) % images.length;
}

showImages();


setInterval(showImages, 3000);


