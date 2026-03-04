// 1. Select the elements
const sidebar = document.querySelector('.sidebar');
const openMenuBtn = document.querySelector('.toggle-menu i.bx-menu').parentElement; 
const closeMenuBtn = document.querySelector('close') || document.querySelector('.navlinks-container .toggle-menu');

// 2. Function to open the sidebar
openMenuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    // Optional: Prevent background scrolling when menu is open
    document.body.style.overflow = 'hidden';
});

// 3. Function to close the sidebar
closeMenuBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    // Allow scrolling again
    document.body.style.overflow = 'auto';
});

// 4. Close sidebar if user clicks outside of it
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !openMenuBtn.contains(e.target)) {
        sidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target); // run once
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.product-card').forEach(card => {
  observer.observe(card);
});
console.log("observer running")



