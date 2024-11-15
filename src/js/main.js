// Smooth 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    if (document.querySelector(this.getAttribute('href'))) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  });
});
// Load
window.addEventListener('load', function() {
  document.body.classList.add('window-loaded');
  //
  AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile'
  });
});
// Scroll
window.addEventListener('scroll', function() {
  const html = document.documentElement;
  const top = html.scrollTop;
  if (top > 100) {
    document.body.classList.add('page-scrolled');
  } else {
    document.body.classList.remove('page-scrolled');
  }
});




var banner = document.querySelector('.u4m-hero,.banner_is_here,.blog_post_hero');

if (banner) {
  document.body.classList.remove("no-banner");
}
else{
  document.body.classList.add("no-banner");
}