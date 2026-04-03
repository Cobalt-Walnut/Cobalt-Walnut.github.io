const footerTemplate = `
    <footer>
        <div class="container">
            <p>© 10 April 2025 Christopher Wang.</p>
            <p>Updated 3 April 2026</p>
        </div>
    </footer>
`;

// This finds the end of the <main> tag and adds the footer right after it
document.querySelector('main').insertAdjacentHTML('afterend', footerTemplate);