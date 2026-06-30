/**
 * Toggles the visibility of a card's content and rotates its arrow indicator.
 * 
 * @param {HTMLElement} element - The card header element that was clicked.
 *                        The function expects the next sibling to be the content container
 *                        and the element to contain a child with class 'arrow'.
 * 
 * @example
 * // In HTML: <div class="card-header" onclick="toggleCard(this)">
 */
function toggleCard(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    content.classList.toggle('open');
    arrow.classList.toggle('active');
}

/**
 * Toggles the visibility of a rules box content and rotates its arrow indicator.
 * 
 * @param {HTMLElement} headerElement - The rules box header element that was clicked.
 *                        The function finds the parent '.rules-box' and toggles
 *                        the visibility of its '.rules-box-content' child.
 * 
 * @example
 * // In HTML: <div class="rules-box-header" onclick="toggleRulesBox(this)">
 */
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

/**
 * Scrolls the page smoothly to the element with the given ID.
 * 
 * @param {string} id - The ID of the target element to scroll to.
 * 
 * @example
 * // Scroll to the 'facciones' section
 * scrollToSection('facciones');
 */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Scrolls the page smoothly to the very top.
 * 
 * @example
 * // Called from a "Back to Top" button
 * scrollToTop();
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Normalizes text by removing accents, diacritics, and special characters.
 * Useful for case-insensitive and accent-insensitive search.
 * 
 * @param {string} text - The text to normalize.
 * @returns {string} The normalized text in lowercase, without accents or special characters.
 * 
 * @example
 * normalizeText('Ángel')   // Returns 'angel'
 * normalizeText('España')  // Returns 'espana'
 * normalizeText('Corazón') // Returns 'corazon'
 */
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD') // Decomposes accented characters
        .replace(/[\u0300-\u036f]/g, '') // Removes diacritics
        .replace(/[^a-z0-9\s]/g, ' '); // Optional: removes special characters
}

/**
 * Scrolls to a specific card and automatically expands it.
 * Used when clicking on faction links (e.g., icon links in card content).
 * 
 * @param {string} id - The ID of the target card element to scroll to and expand.
 * 
 * @example
 * // In HTML: <img onclick="goToAnchor('caballeros')">
 * goToAnchor('caballeros');
 */
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

// ============ SEARCH FUNCTIONALITY ============

/** @type {HTMLInputElement} - The search input field */
const searchInput = document.getElementById('searchInput');

/** @type {HTMLElement} - The clear search button */
const clearBtn = document.getElementById('clearSearchBtn');

/**
 * Gets the content container of a card (works for all card types).
 * 
 * @param {HTMLElement} card - The card element (with class 'card', 'card-hero', etc.).
 * @returns {HTMLElement|null} The content element or null if not found.
 * 
 * @private
 */
function getCardContent(card) {
    return card.querySelector('.card-content, .card-hero-content, .card-artifact-content, .card-location-content');
}

/**
 * Gets the arrow element of a card.
 * 
 * @param {HTMLElement} card - The card element.
 * @returns {HTMLElement|null} The arrow element or null if not found.
 * 
 * @private
 */
function getCardArrow(card) {
    return card.querySelector('.arrow');
}

/**
 * Gets the searchable text from a card (title and optionally box).
 * 
 * @param {HTMLElement} card - The card element.
 * @param {boolean} includeBox - Whether to include the box in the search.
 * @returns {string} The normalized searchable text.
 * 
 * @private
 */
function getSearchableText(card, includeBox = false) {
    const titleElement = card.querySelector('.card-title, .card-hero-title, .card-artifact-title, .card-location-title');
    const titleText = titleElement ? normalizeText(titleElement.innerText) : '';
    
    if (!includeBox) {
        return titleText;
    }
    
    const tagElement = card.querySelector('.box');
    const tagText = tagElement ? normalizeText(tagElement.innerText) : '';
    
    return titleText + ' ' + tagText;
}

/**
 * Do the actual search
 * 
 */
function performSearch() {
    const filter = normalizeText(searchInput.value);
    const cards = document.querySelectorAll('.searchable');
    const rulesBoxes = document.querySelectorAll('.rules-box');
    
    if (searchInput.value.length > 0) {
        clearBtn.classList.add('visible');
    } else {
        clearBtn.classList.remove('visible');
    }
    
    // === FILTRAR CARTAS ===
    cards.forEach(card => {
        const searchableText = getSearchableText(card, true);
        const content = getCardContent(card);
        const arrow = getCardArrow(card);
        
        if (searchableText.includes(filter) && filter.length > 0) {
            card.style.display = '';
            if (content) {
                content.classList.add('open');
                content.style.display = '';
            }
            if (arrow) {
                arrow.classList.add('active');
            }
        } else if (filter.length === 0) {
            card.style.display = '';
            if (content) {
                content.classList.remove('open');
                content.style.display = '';
            }
            if (arrow) {
                arrow.classList.remove('active');
            }
        } else {
            card.style.display = 'none';
        }
    });

    // === FILTRAR RULES-BOX (DESAPARECEN COMPLETAMENTE) ===
    rulesBoxes.forEach(box => {
        // Buscar en todo el texto de la rules-box (título y contenido)
        const text = normalizeText(box.innerText);
        
        if (text.includes(filter) && filter.length > 0) {
            // Mostrar la rules-box
            box.style.display = '';
            // Auto-abrir el contenido
            const content = box.querySelector('.rules-box-content');
            const arrow = box.querySelector('.arrow');
            if (content) {
                content.classList.add('hidden');
                content.style.display = '';
            }
            if (arrow) {
                arrow.classList.add('active');
            }
        } else if (filter.length === 0) {
            // Restaurar estado original (visible pero colapsado)
            box.style.display = '';
            const content = box.querySelector('.rules-box-content');
            const arrow = box.querySelector('.arrow');
            if (content) {
                content.classList.remove('hidden');
                content.style.display = '';
            }
            if (arrow) {
                arrow.classList.remove('active');
            }
        } else {
            // DESAPARECER COMPLETAMENTE - ocultar la rules-box entera
            box.style.display = 'none';
        }
    });
}

/**
 * Event listener for search input changes.
 * Triggers performSearch on every input event.
 */
searchInput.addEventListener('input', performSearch);

/**
 * Event listener for the clear button.
 * Clears the search input, triggers search, and focuses the input.
 */
clearBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevents event from bubbling up
    searchInput.value = '';
    performSearch(); // Execute search with empty value
    searchInput.focus(); // Keep focus on the input
    this.classList.remove('visible');
});

// ============ BACK TO TOP BUTTON ============

/** @type {HTMLElement} - The "Back to Top" button */
const backToTopBtn = document.querySelector('.back-to-top');

/**
 * Shows/hides the "Back to Top" button based on scroll position.
 * The button appears when the user scrolls down more than 300px.
 * 
 * @listens scroll - Triggered by window scroll events
 */
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});