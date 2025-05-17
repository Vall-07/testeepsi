// Alternar modo claro/escuro com localStorage
const themeToggleBtn = document.getElementById('theme-toggle');
const userTheme = localStorage.getItem('theme');

// Aplica o tema salvo (se houver)
if (userTheme) {
    document.documentElement.setAttribute('data-theme', userTheme);
    themeToggleBtn.textContent = userTheme === 'dark' ? '🌙' : '☀️';
} else {
    // Tema padrão: claro
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggleBtn.textContent = '☀️';
}

// Alternar tema ao clicar no botão
themeToggleBtn.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '🌙';
    }
});

// Navegação responsiva (toggle menu)
const navToggleBtn = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggleBtn && mainNav) {
    navToggleBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });
}

// Filtro de busca para o Glossário
const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        document.querySelectorAll('#glossary-list li').forEach(item => {
            const term = item.getAttribute('data-term').toLowerCase();
            item.style.display = term.includes(filter) ? '' : 'none';
        });
    });
}

// Filtro de busca para página de Artigos
const articleSearch = document.getElementById('article-search');
const articleCards  = document.querySelectorAll('.article-card');

if (articleSearch && articleCards.length > 0) {
    articleSearch.addEventListener('input', () => {
        const term = articleSearch.value.toLowerCase();
        articleCards.forEach(card => {
            const title  = card.getAttribute('data-title').toLowerCase();
            const author = card.getAttribute('data-author').toLowerCase();
            card.style.display = (title.includes(term) || author.includes(term)) ? 'block' : 'none';
        });
    });
}

// Animações de entrada com IntersectionObserver
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});
fadeEls.forEach(el => observer.observe(el));