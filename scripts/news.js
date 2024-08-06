document.addEventListener('DOMContentLoaded', () => {
    fetch('https://newsapi.org/v2/everything?q=tecnologia&apiKey=dd838d87ac09417cb0961b0192ab543c')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('newsContainer');
            data.articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Leer más</a>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
});
