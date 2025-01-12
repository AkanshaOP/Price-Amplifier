document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const prices = Array.from(product.querySelectorAll('.store span')).map(span => parseFloat(span.textContent.slice(1)));
        const minPrice = Math.min(...prices);

        product.querySelectorAll('.store span').forEach(span => {
            if (parseFloat(span.textContent.slice(1)) === minPrice) {
                span.style.color = 'green';
                span.style.fontWeight = 'bold';
            }
        });
    });
});

// Search Function
function searchProducts() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
// Get the button and body element
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Check local storage for saved theme
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme if it exists
if (savedTheme) {
    body.classList.add(savedTheme);
} else {
    body.classList.add('light-mode'); // Default to light mode
}




    