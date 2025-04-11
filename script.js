
// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle'); // Get the dark mode button
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
  // Update button text based on current mode
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'LIGHT MODE' : 'DARK MODE';
  // Add rotation animation to button
  darkModeToggle.classList.add('rotating');
  setTimeout(() => {
    darkModeToggle.classList.remove('rotating');
  }, 500);
});

// Navbar Hide/Show on Scroll Functionality
let lastScrollTop = 0; // Track last scroll position
const navbar = document.getElementById('navbar'); // Get the navbar element
const navbarHeight = navbar.offsetHeight; // Get navbar height

// Add scroll event listener to window
window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY; // Get current scroll position
  
  // Hide navbar when scrolling down past navbar height
  if (scrollTop > navbarHeight) {
    if (scrollTop > lastScrollTop) {
      navbar.classList.add('hidden');  // Hide navbar when scrolling down
    } else {
      navbar.classList.remove('hidden'); // Show navbar when scrolling up
    }
  } else {
    navbar.classList.remove('hidden'); // Always show navbar at top of page
  }
  
  lastScrollTop = scrollTop; // Update last scroll position
});
