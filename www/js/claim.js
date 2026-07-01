// ============================================================
// 2. FUNCIONES DE INTERNACIONALIZACIÓN
// ============================================================

let currentLang = localStorage.getItem('claimLang') || 'es';

/**
 * Aplica el idioma seleccionado a todos los elementos con atributos data-i18n
 */
function applyLanguage(lang) {
  // Título de la página
  const titleEl = document.querySelector('title');
  if (titleEl && i18n.title && i18n.title[lang]) {
    titleEl.textContent = i18n.title[lang];
  }

  // Elementos con data-i18n (texto plano o con HTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[key] && i18n[key][lang]) {
      const text = i18n[key][lang];
      // Si el texto contiene etiquetas HTML, usar innerHTML para renderizarlas
      if (text.includes('<') && text.includes('>')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Elementos con data-i18n-html (texto con HTML siempre)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[key] && i18n[key][lang]) {
      el.innerHTML = i18n[key][lang];
    }
  });

  // Elementos con data-i18n-placeholder (placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[key] && i18n[key][lang]) {
      el.placeholder = i18n[key][lang];
    }
  });

  // Guardar preferencia
  localStorage.setItem('claimLang', lang);
  currentLang = lang;

  // Actualizar botón de idioma (mostrar bandera activa)
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    const esSpan = langToggle.querySelector('.lang-es');
    const enSpan = langToggle.querySelector('.lang-en');
    if (esSpan && enSpan) {
      if (lang === 'es') {
        esSpan.style.display = 'inline-block';
        enSpan.style.display = 'none';
      } else {
        esSpan.style.display = 'none';
        enSpan.style.display = 'inline-block';
      }
    }
  }
}

/**
 * Cambia el idioma al siguiente (alterna entre 'es' y 'en')
 */
function toggleLanguage() {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  applyLanguage(newLang);
  console.log('Idioma cambiado a:', newLang); // para depuración
}

// ============================================================
// 3. FUNCIONES EXISTENTES (toggleCard, scroll, etc.)
// ============================================================

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
  if (arrow) arrow.classList.toggle('active');
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ============================================================
// 4. BÚSQUEDA
// ============================================================

const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearchBtn');

function getCardContent(card) {
  return card.querySelector('.card-content, .card-hero-content, .card-artifact-content, .card-location-content');
}

function getCardArrow(card) {
  return card.querySelector('.arrow');
}

function getSearchableText(card, includeBox = false) {
  const titleElement = card.querySelector('.card-title, .card-hero-title, .card-artifact-title, .card-location-title');
  const titleText = titleElement ? normalizeText(titleElement.innerText) : '';
  if (!includeBox) return titleText;
  const tagElement = card.querySelector('.box');
  const tagText = tagElement ? normalizeText(tagElement.innerText) : '';
  return titleText + ' ' + tagText;
}

function performSearch() {
  const filter = normalizeText(searchInput.value);
  const cards = document.querySelectorAll('.searchable');
  const rulesBoxes = document.querySelectorAll('.rules-box');

  if (searchInput.value.length > 0) {
    clearBtn.classList.add('visible');
  } else {
    clearBtn.classList.remove('visible');
  }

  // Filtrar cartas
  cards.forEach(card => {
    const searchableText = getSearchableText(card, true);
    const content = getCardContent(card);
    const arrow = getCardArrow(card);
    if (searchableText.includes(filter) && filter.length > 0) {
      card.style.display = '';
      if (content) { content.classList.add('open'); content.style.display = ''; }
      if (arrow) arrow.classList.add('active');
    } else if (filter.length === 0) {
      card.style.display = '';
      if (content) { content.classList.remove('open'); content.style.display = ''; }
      if (arrow) arrow.classList.remove('active');
    } else {
      card.style.display = 'none';
    }
  });

  // Filtrar rules-box
  rulesBoxes.forEach(box => {
    const text = normalizeText(box.innerText);
    if (text.includes(filter) && filter.length > 0) {
      box.style.display = '';
      const content = box.querySelector('.rules-box-content');
      const arrow = box.querySelector('.arrow');
      if (content) { content.classList.add('hidden'); content.style.display = ''; }
      if (arrow) arrow.classList.add('active');
    } else if (filter.length === 0) {
      box.style.display = '';
      const content = box.querySelector('.rules-box-content');
      const arrow = box.querySelector('.arrow');
      if (content) { content.classList.remove('hidden'); content.style.display = ''; }
      if (arrow) arrow.classList.remove('active');
    } else {
      box.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', performSearch);
clearBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  searchInput.value = '';
  performSearch();
  searchInput.focus();
  this.classList.remove('visible');
});

// ============================================================
// 5. BACK TO TOP
// ============================================================

const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// ============================================================
// 6. DARK MODE
// ============================================================

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

(function loadDarkModePreference() {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }
})();

// ============================================================
// 7. INICIALIZACIÓN
// ============================================================

// Cargar idioma guardado o detectar preferencia del navegador
const savedLang = localStorage.getItem('claimLang');
const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
const initialLang = savedLang || browserLang || 'es';

// Aplicar idioma inicial
applyLanguage(initialLang);

// Configurar botón de idioma (asegurar que el evento click esté enlazado)
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  // Eliminar event listeners previos para evitar duplicados
  langToggle.removeEventListener('click', toggleLanguage);
  langToggle.addEventListener('click', toggleLanguage);
  console.log('Botón de idioma configurado correctamente.');
} else {
  console.warn('No se encontró el botón de idioma (#langToggle)');
}

// Asegurar que el botón muestre la bandera correcta (por si acaso)
if (langToggle) {
  const esSpan = langToggle.querySelector('.lang-es');
  const enSpan = langToggle.querySelector('.lang-en');
  if (esSpan && enSpan) {
    if (initialLang === 'es') {
      esSpan.style.display = 'inline-block';
      enSpan.style.display = 'none';
    } else {
      esSpan.style.display = 'none';
      enSpan.style.display = 'inline-block';
    }
  }
}