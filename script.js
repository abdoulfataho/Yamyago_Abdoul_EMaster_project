document.addEventListener('DOMContentLoaded', () => {
    // Fetch courses from API
    async function fetchCourses() {
        const courseGrid = document.getElementById('courseGrid');
        courseGrid.innerHTML = '<p class="text-center">Loading courses...</p>';

        try {
            // Using JSONPlaceholder API to fetch posts as mock courses
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
            const courses = await response.json();

            courseGrid.innerHTML = '';
            courses.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.className = 'bg-white p-6 rounded-lg shadow-md';
                courseCard.innerHTML = `
                    <h3 class="text-xl font-bold mb-2">${course.title}</h3>
                    <p class="mb-4">${course.body.substring(0, 100)}...</p>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Enroll Now</button>
                `;
                courseGrid.appendChild(courseCard);
            });
        } catch (error) {
            console.error('Error fetching courses:', error);
            courseGrid.innerHTML = '<p class="text-center text-red-500">Failed to load courses. Please try again later.</p>';
        }
    }

    // Fetch testimonials from API
    async function fetchTestimonials() {
        const testimonialSlider = document.getElementById('testimonialSlider');
        testimonialSlider.innerHTML = '<p class="text-center">Loading testimonials...</p>';

        try {
            // Using JSONPlaceholder API to fetch comments as mock testimonials
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
            const testimonials = await response.json();

            testimonialSlider.innerHTML = '';
            testimonials.forEach(testimonial => {
                const testimonialCard = document.createElement('div');
                testimonialCard.className = 'flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md';
                testimonialCard.innerHTML = `
                    <img src="https://via.placeholder.com/150" alt="${testimonial.name}" class="w-20 h-20 rounded-full mx-auto mb-4">
                    <h3 class="text-xl font-bold mb-2">${testimonial.name}</h3>
                    <p class="text-blue-600 mb-4">${testimonial.email}</p>
                    <p class="italic">"${testimonial.body.substring(0, 100)}..."</p>
                `;
                testimonialSlider.appendChild(testimonialCard);
            });
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            testimonialSlider.innerHTML = '<p class="text-center text-red-500">Failed to load testimonials. Please try again later.</p>';
        }
    }

    // Call the fetch functions
    fetchCourses();
    fetchTestimonials();

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        try {
            // Using JSONPlaceholder API to simulate login
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                alert('Login successful! (This is a mock login)');
            } else {
                console.error('Login failed');
                alert('Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again later.');
        }
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
});