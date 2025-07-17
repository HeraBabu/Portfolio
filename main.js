//Smooth scroll functionality  
document.querySelectorAll('.nav-link').forEach(link => {
  // Only apply smooth scroll for in-page links (those starting with #)
  if (link.getAttribute('href').startsWith('#')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({behavior: 'smooth'});
    });
  }
});


// Scroll Back to Top Button functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Resume Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const viewResumeBtn = document.getElementById('viewResumeBtn');
  const resumeModal = document.getElementById('resumeModal');
  const closeResumeModal = document.getElementById('closeResumeModal');

  if (viewResumeBtn && resumeModal && closeResumeModal) {
    viewResumeBtn.onclick = function() {
      resumeModal.style.display = 'block';
    };
    closeResumeModal.onclick = function() {
      resumeModal.style.display = 'none';
    };
    window.onclick = function(event) {
      if (event.target === resumeModal) {
        resumeModal.style.display = 'none';
      }
    };
  }
});