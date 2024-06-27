document.addEventListener('DOMContentLoaded', function() {
    var imgHolder = document.getElementById('headerImageHolder');
    var img = document.createElement('img');
    img.src = 'your-image-url.jpg'; // Replace with your image URL
    img.alt = 'Shantini R';
    img.classList.add('profile-image');
    imgHolder.appendChild(img);
});

//profile photo 

document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.querySelector('.progress-bar');
  const progressFill = document.querySelector('.progress-fill');
  const progressText = document.querySelector('.progress-text');

  // Example: Update progress to 70%
  const progress = 70; // Replace with actual progress value
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;
});


// //progress bar

// document.addEventListener('DOMContentLoaded', function() {
//   const element = document.getElementById('animate-element');

//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
//
//   function onScroll() {
//     if (isElementInViewport(element)) {
//       element.classList.add('visible');
//       window.removeEventListener('scroll', onScroll);
//     }
//   }

//   window.addEventListener('scroll', onScroll);
//   onScroll(); // Check if element is already in viewport on page load
// });

//scroll animation in abt me