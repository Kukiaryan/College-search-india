// JavaScript for searching colleges and displaying results
function searchColleges() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    // Fetch data from the backend server
    fetch('/api/colleges') // Use the appropriate backend route
        .then(response => response.json())
        .then(data => {
            data.forEach(college => {
                if (college.name.toLowerCase().includes(searchInput)) {
                    const collegeCard = document.createElement('div');
                    collegeCard.classList.add('college-card');
                    collegeCard.innerHTML = `
                        <h2>${college.name}</h2>
                        <p><strong>Location:</strong> ${college.location}</p>
                        <p><strong>Courses Offered:</strong> ${college.courses.join(', ')}</p>
                        <p><strong>Contact:</strong> ${college.contact}</p>
                    `;
                    resultsContainer.appendChild(collegeCard);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

