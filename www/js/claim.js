function toggleCard(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    content.classList.toggle('open');
    arrow.classList.toggle('active');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goToAnchor(id) {
    const target = document.getElementById(id);
    if (!target) return;

    const content = target.querySelector('.card-content');
    const arrow = target.querySelector('.arrow');

    if (content) {
        content.classList.add('open');
        arrow?.classList.add('active');
    }

    requestAnimationFrame(() => {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Buscador
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.searchable');
    
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(filter)) {
            card.style.display = '';
            // Auto-abrir si hay búsqueda
            if(filter.length > 0) {
                const content = card.querySelector('.card-content');
                const arrow = card.querySelector('.arrow');
                content.style.display = 'block';
                arrow.classList.add('active');
            }
        } else {
            card.style.display = 'none';
        }
    });

    if(filter.length === 0) {
        cards.forEach(card => {
            const content = card.querySelector('.card-content');
            const arrow = card.querySelector('.arrow');
            content.style.display = 'none';
            arrow.classList.remove('active');
        });
    }
});