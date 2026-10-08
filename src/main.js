import { translations } from './i18n.js';

// Safe localStorage access helper (Invariant INV-06)
function getSavedLanguage() {
  try {
    const saved = localStorage.getItem('newtype_lang');
    if (saved && translations[saved]) {
      return saved;
    }
  } catch (e) {
    console.warn('LocalStorage unavailable, defaulting to en', e);
  }
  return 'en';
}

function saveLanguage(lang) {
  try {
    localStorage.setItem('newtype_lang', lang);
  } catch (e) {
    console.warn('Unable to persist language choice', e);
  }
}

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'uz', label: "O'zbek tili", flag: '🇺🇿' },
  { code: 'mn', label: 'Монгол хэл', flag: '🇲🇳' },
  { code: 'ne', label: 'नेपाली', flag: '🇳🇵' }
];

let currentLang = getSavedLanguage();

export function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  saveLanguage(lang);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update current language button label
  const curMeta = languages.find(l => l.code === lang) || languages[0];
  const langLabelEl = document.getElementById('current-lang-label');
  if (langLabelEl) {
    langLabelEl.innerHTML = `<span class="lang-flag">${curMeta.flag}</span> <span>${curMeta.label}</span>`;
  }

  // Update selected class in dropdown
  document.querySelectorAll('.lang-option').forEach((opt) => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('selected');
    } else {
      opt.classList.remove('selected');
    }
  });

  // Update html lang attribute for accessibility/SEO
  document.documentElement.lang = lang;
}

// Modal handling
export function initModal() {
  const modal = document.getElementById('contact-modal');
  const openButtons = document.querySelectorAll('[data-open-modal]');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('inquiry-form');
  const successBox = document.getElementById('form-success-message');

  function openModal() {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      if (form && successBox) {
        form.style.display = 'block';
        successBox.style.display = 'none';
        form.reset();
      }
    }
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (successBox) {
        form.style.display = 'none';
        successBox.style.display = 'block';
      }
    });
  }
}

// Dropdown handling
export function initLangDropdown() {
  const btn = document.getElementById('lang-toggle-btn');
  const dropdown = document.getElementById('lang-dropdown-menu');

  if (!btn || !dropdown) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  document.querySelectorAll('.lang-option').forEach((option) => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      applyLanguage(lang);
      dropdown.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initLangDropdown();
  initModal();
  applyLanguage(currentLang);
});
