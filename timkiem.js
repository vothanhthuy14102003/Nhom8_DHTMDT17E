const tourSearchForm = document.querySelector('.tour-search-form');

tourSearchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Extract form data
  const destination = document.getElementById('destination').value.trim(); // Trim leading/trailing whitespaces
  const people = document.getElementById('people').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;

  // Validate form data (optional, implement as needed)
  // ... perform validation checks (e.g., ensure dates are valid)

  // Prepare search query object
  const searchQuery = {
    destination,
    people,
    checkin,
    checkout,
  };

  // Send search request (replace with your actual API call or data fetching logic)
  fetch('/api/search-tours', {
    method: 'POST', // Use POST for sending search data
    headers: { 'Content-Type': 'application/json' }, // Set headers for JSON data
    body: JSON.stringify(searchQuery), // Convert search object to JSON for sending
  })
    .then(response => response.json()) // Parse JSON response (if applicable)
    .then(searchResults => {
      // Handle successful search results
      console.log('Search results:', searchResults);
      // Update UI with search results (e.g., display tours on the page)
      displayTours(searchResults); // (Implement displayTours function to show results)
    })
    .catch(error => {
      // Handle errors during search
      console.error('Search error:', error);
      // Display error message to the user (optional)
      alert('An error occurred during the search. Please try again later.');
    });
});

// Example function to display search results (replace with your UI logic)
function displayTours(searchResults) {
  // Access the container element where you want to show tours
  const tourResultsContainer = document.querySelector('.popular'); // Assuming search results replace popular section

  // Clear existing results (optional)
  tourResultsContainer.innerHTML = ''; // Remove previous results

  // Loop through search results and create UI elements (e.g., cards, lists)
  searchResults.forEach(tour => {
    const tourCard = document.createElement('li'); // Adjust structure as needed
    tourCard.classList.add('popular-card'); // Add a class for styling

    // Create elements for destination image, title, description, etc.
    // ... populate tourCard with tour details using tour object properties

    // Append the tour card to the container
    tourResultsContainer.appendChild(tourCard);
  });
}