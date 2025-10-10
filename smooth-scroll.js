    // JavaScript for smooth scrolling
    document.addEventListener('DOMContentLoaded', function() {
        var scrollLinks = document.getElementsByClassName('scroll-link');
  
        for (var i = 0; i < scrollLinks.length; i++) {
          scrollLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.getElementById(this.dataset.target);
            target.scrollIntoView({
              behavior: 'smooth'
            });
        });
      }
    });