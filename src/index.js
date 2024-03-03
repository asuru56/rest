const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');
const contentDiv = document.getElementById('content');

// Add event listeners to the buttons
homeBtn.addEventListener('click', () => {
    showContent('Home content');
});

menuBtn.addEventListener('click', () => {
    showContent('Menu content');
});

contactBtn.addEventListener('click', () => {
    showContent('Contact content');
});

// Function to display content based on tab clicked
function showContent(content) {
    // Clear existing content
    contentDiv.innerHTML = '';

    // Add new content
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    contentDiv.appendChild(paragraph);
}