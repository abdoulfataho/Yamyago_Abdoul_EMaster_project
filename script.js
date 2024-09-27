document.addEventListener('DOMContentLoaded', () => {
    // Sample course data
    const courses = [
        { title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
        { title: 'Web Development Fundamentals', description: 'Build your first website.' },
        { title: 'Data Science Essentials', description: 'Explore the world of data analysis.' },
        // Add more courses as needed
    ];

    // Dynamically populate course grid
    const courseGrid = document.getElementById('courseGrid');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'bg-white p-6 rounded-lg shadow-md';
        courseCard.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${course.title}</h3>
            <p class="mb-4">${course.description}</p>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Enroll Now</button>
        `;
        courseGrid.appendChild(courseCard);
    });

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        console.log('Login attempt:', { email, password });
        // Here you would typically send this data to a server for authentication
        alert('Login functionality will be implemented in the future.');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Sample testimonial data
    const testimonials = [
        { name: 'John Doe', role: 'Web Developer', content: 'E-Master helped me transition into a new career in web development. The courses are top-notch!', image: 'path/to/john-doe-image.jpg' },
        { name: 'Jane Smith', role: 'Data Scientist', content: 'The data science course on E-Master was exactly what I needed to boost my skills. Highly recommended!', image: 'path/to/jane-smith-image.jpg' },
        { name: 'Mike Johnson', role: 'Software Engineer', content: 'E-Master\'s programming courses are well-structured and easy to follow. I\'ve learned so much!', image: 'path/to/mike-johnson-image.jpg' },
    ];

    // Dynamically populate testimonials
    const testimonialSlider = document.getElementById('testimonialSlider');
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial-card');
        testimonialCard.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <h3>${testimonial.name}</h3>
            <p class="role">${testimonial.role}</p>
            <p class="content">"${testimonial.content}"</p>
        `;
        testimonialSlider.appendChild(testimonialCard);
    });
});