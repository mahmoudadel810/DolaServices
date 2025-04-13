// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl)
{
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor =>
{
    anchor.addEventListener('click', function (e)
    {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement)
        {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('#contact form');
if (contactForm)
{
    contactForm.addEventListener('submit', function (e)
    {
        e.preventDefault();

        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
}

// Modal form submission
const modalForm = document.querySelector('#signupModal form');
if (modalForm)
{
    modalForm.addEventListener('submit', function (e)
    {
        e.preventDefault();

        //sendtheForm to yr server
        alert('Thank you for your interest! We will contact you soon.');
        this.reset();

        // Hide the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
        modal.hide();
    });
}


// Change navbar style on scroll
window.addEventListener('scroll', function ()
{
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50)
    {
        navbar.classList.add('navbar-scrolled');
    } else
    {
        navbar.classList.remove('navbar-scrolled');
    }
});