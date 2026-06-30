function toggleCard(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    content.classList.toggle('open');
    arrow.classList.toggle('active');
}

function toggleRulesBox(headerElement) {
    const rulesBox = headerElement.closest('.rules-box');
    if (!rulesBox) return;

    const content = rulesBox.querySelector('.rules-box-content');
    if (!content) return;

    const arrow = headerElement.querySelector('.arrow');
    
    content.classList.toggle('hidden');

    if (arrow) {
        arrow.classList.toggle('active');
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, ' ');
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

// ============ BUSCADOR ============
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearchBtn');

// Función para obtener el contenido de cualquier tipo de carta
function getCardContent(card) {
    return card.querySelector('.card-content, .card-hero-content, .card-artifact-content, .card-location-content');
}

// Función para obtener la flecha de cualquier tipo de carta
function getCardArrow(card) {
    return card.querySelector('.arrow');
}

// Función de búsqueda
function performSearch() {
    const filter = normalizeText(searchInput.value);
    const cards = document.querySelectorAll('.searchable');
    
    // Mostrar/ocultar botón X
    if (searchInput.value.length > 0) {
        clearBtn.classList.add('visible');
    } else {
        clearBtn.classList.remove('visible');
    }
    
    cards.forEach(card => {
        const text = normalizeText(card.innerText);
        const content = getCardContent(card);
        const arrow = getCardArrow(card);
        
        if (text.includes(filter) && filter.length > 0) {
            // Mostrar la carta
            card.style.display = '';
            // Auto-abrir usando clases, no style.display
            if (content) {
                content.classList.add('open');
                // Asegurarse de que display sea block a través de la clase
                content.style.display = ''; // Resetear cualquier style inline
            }
            if (arrow) {
                arrow.classList.add('active');
            }
        } else if (filter.length === 0) {
            // Restaurar estado original (cerrar todo)
            card.style.display = '';
            if (content) {
                content.classList.remove('open');
                content.style.display = ''; // Resetear cualquier style inline
            }
            if (arrow) {
                arrow.classList.remove('active');
            }
        } else {
            // Ocultar cartas que no coinciden
            card.style.display = 'none';
        }
    });
}

// Evento input del buscador
searchInput.addEventListener('input', performSearch);

// Limpiar buscador al hacer clic en X
clearBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    searchInput.value = '';
    performSearch();
    searchInput.focus();
    this.classList.remove('visible');
});

// ============ BOTÓN VOLVER ARRIBA ============
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Nota: scrollToTop ya está definido arriba