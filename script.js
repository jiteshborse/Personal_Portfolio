$(document).ready(function () {
    // Smooth Scrolling for Anchor Links
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800);
        }
    });

    // Highlight Active Section in Navbar
    $(document).ready(function () {
        $(window).on('scroll', function () {
            var scrollPos = $(window).scrollTop();
            $('section').each(function () {
                var sectionTop = $(this).offset().top - 70;
                var sectionBottom = sectionTop + $(this).outerHeight();

                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    var sectionId = $(this).attr('id');
                    $('.nav-link').removeClass('active');
                    $('.nav-link[href="#' + sectionId + '"]').addClass('active');
                }
            });
        });
    });


    // Dynamic Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();


    // Form Validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            form.classList.add('was-validated');
        }
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1200,  // Animation duration in milliseconds
        once: true       // Animation only happens once per element
    });

    // Example Project Filter (Assumes buttons with data-filter attributes in HTML)
    $('.filter-btn').on('click', function () {
        const filter = $(this).attr('data-filter');
        $('.project-card').hide();
        if (filter === 'all') {
            $('.project-card').fadeIn();
        } else {
            $('.project-card').each(function () {
                if ($(this).hasClass(filter)) {
                    $(this).fadeIn();
                }
            });
        }
    });

    // Show/Hide Back to Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
});

// Adjust active section based on scroll position (for redundancy check)
$(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    $('section').each(function () {
        var sectionTop = $(this).offset().top - 60;
        if (currentScroll >= sectionTop) {
            var sectionId = $(this).attr('id');
            $('a.nav-link').removeClass('active');
            $('a.nav-link[href="#' + sectionId + '"]').addClass('active');
        }
    });
});

$(document).ready(function () {
    // Function to animate progress bars
    function animateProgressBars() {
        $('.progress-bar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (elementPos < topOfWindow + windowHeight - 50) {
                var progressValue = $(this).attr('data-percentage');
                $(this).css('width', progressValue + '%');
                $(this).text(progressValue + '%');
            }
        });
    }

    // Trigger the animation when scrolling
    $(window).on('scroll', function () {
        animateProgressBars();
    });

    // Initial animation on page load
    animateProgressBars();
});

