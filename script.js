// Dark Mode Toggle + Persistence
const darkModeToggle = document.getElementById('darkModeToggle');

function applyDarkMode(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  if (darkModeToggle) {
    darkModeToggle.textContent = isDark ? 'LIGHT MODE' : 'DARK MODE';
  }
}

const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode !== null) {
  applyDarkMode(savedDarkMode === 'true');
} else {
  applyDarkMode(false);
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyDarkMode(isDark);
    localStorage.setItem('darkMode', String(isDark));

    // Add rotation animation to button
    darkModeToggle.classList.add('rotating');
    setTimeout(() => darkModeToggle.classList.remove('rotating'), 500);
  });
}

// Navbar Hide/Show on Scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

if (navbar) {
  const navbarHeight = navbar.offsetHeight;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > navbarHeight) {
      if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
    } else {
      navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
  });
}

// Open external links in a new tab with security
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});