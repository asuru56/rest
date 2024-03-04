const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');
const contentDiv = document.getElementById('content');
const imgDiv = document.getElementById('img')

// Add event listeners to the buttons
homeBtn.addEventListener('click', () => {
    clearContent()
    clearImage()
    changeImage('https://media-cdn.tripadvisor.com/media/photo-s/09/de/f1/3d/shinkows.jpg');
    showContent('Hello There !!!')
    showContent('Welcome to Shinkows Restaurant Page, its one of my favourites.Help yourself out here');
});

menuBtn.addEventListener('click', () => {
    clearContent()
    clearImage()
    showContent('Menu content:');
    changeImage('https://media-cdn.tripadvisor.com/media/photo-s/12/2a/33/18/menu-card.jpg');
});

contactBtn.addEventListener('click', () => {
    clearContent()
    clearImage()
    changeImage("https://media-cdn.tripadvisor.com/media/photo-s/01/ce/5d/fc/shinkows-at-the-top-of.jpg")
    showContent('Contact content');
    showContent('Summer House Colony, Upper Bazar, Ooty, Tamil Nadu 643001')
});

// Function to display content based on tab clicked
function showContent(content) {
    // Clear existing content

    // Add new content
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    contentDiv.appendChild(paragraph);
}

function clearContent(){
    contentDiv.innerHTML = '';
}

function changeImage(imageUrl) {
    imgDiv.src = imageUrl;
}

function clearImage() {
    imgDiv.src = ''; // Clear the source to remove the image
}