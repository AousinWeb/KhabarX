// ================= 1. ELEMENTS AUR GLOBAL VARIABLES =================
var searchBtn = document.getElementById('search-btn');
var langBtn = document.getElementById('lang-btn');
var menuBtn = document.getElementById('menu-btn');

var searchPanel = document.getElementById('search-panel');
var langPanel = document.getElementById('lang-panel');
var menuPanel = document.getElementById('menu-panel');

var submitSearch = document.getElementById('submit-search');
var closeSearch = document.getElementById('close-search');
var closeMenu = document.getElementById('close-menu');
var searchInput = document.getElementById('search-input');
var langOptions = document.querySelectorAll('.lang-option');

var newsContainer = document.getElementById('news-container');

// State Variables (Har page par safe rahenge)
var currentLang = localStorage.getItem('selectedSiteLang') || 'roman';
var activeNewsId = null;
var originalPageHTML = newsContainer ? newsContainer.innerHTML : "";

// ================= 2. SAB PANELS BAND KARNE KA FUNCTION =================
function closeAllPanels() {
    if (searchPanel) searchPanel.classList.remove('active');
    if (langPanel) langPanel.classList.remove('active');
    if (menuPanel) menuPanel.classList.remove('active');
}

// ================= 3. SEARCH ENGINE ALGORITHM =================
function performSearch() {
    if (!searchInput || !newsContainer) return;
    var query = searchInput.value.trim().toLowerCase();
    activeNewsId = null;

    if (query === "") {
        searchInput.focus();
        return;
    }

    if (typeof newsDatabase === "undefined") {
        console.error("Error: newsData.js file load nahi hui!");
        return;
    }

    var matchedNews = newsDatabase.filter(function(item) {
        var inCategory = item.category.toLowerCase().replace(/-/g, ' ').includes(query);
        var inRoman = item.roman.title.toLowerCase().includes(query) || item.roman.summary.toLowerCase().includes(query);
        var inUrdu = item.urdu.title.includes(query) || item.urdu.summary.includes(query);
        var inEnglish = item.english.title.toLowerCase().includes(query) || item.english.summary.toLowerCase().includes(query);
        return inCategory || inRoman || inUrdu || inEnglish;
    });

    matchedNews.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    renderNewsCards(matchedNews, query);
}

function renderNewsCards(results, query) {
    newsContainer.innerHTML = "";
    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';

    if (results.length > 0) {
        var htmlContent = `
            <div class="search-status-bar">
                <span><strong>"${query}"</strong> ke liye <strong>${results.length}</strong> khabrein mili hain:</span>
                <button class="reset-btn" onclick="resetToMainPage()">
                    <i class="fa-solid fa-arrow-left"></i> Wapas Jayein
                </button>
            </div>
            <div class="news-grid">
        `;

        results.forEach(function(news) {
            var newsText = news[currentLang];
            var formattedDate = new Date(news.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            });

            htmlContent += `
                <article class="news-card ${rtlClass}" onclick="openNewsDetail(${news.id})">
                    <img src="${news.image}" alt="${newsText.title}">
                    <div class="news-card-body">
                        <span class="news-badge">${news.category.replace(/-/g, ' ')}</span>
                        <h3>${newsText.title}</h3>
                        <p>${newsText.summary}</p>
                        <div class="news-date">
                            <i class="fa-regular fa-clock"></i> ${formattedDate}
                        </div>
                    </div>
                </article>
            `;
        });

        htmlContent += `</div>`;
        newsContainer.innerHTML = htmlContent;
    } else {
        newsContainer.innerHTML = `
            <div class="oops-box">
                <i class="fa-solid fa-face-frown-open"></i>
                <h2>Oops! Koi Khabar Nahi Mili</h2>
                <p>Maaf kijiyega, <strong>"${query}"</strong> se mutaliq hamare database mein koi khabar maujood nahi hai.</p>
                <button class="reset-btn" onclick="resetToMainPage()">
                    <i class="fa-solid fa-house"></i> Main Page Par Wapas Jayein
                </button>
            </div>
        `;
    }
}

function resetToMainPage() {
    activeNewsId = null;
    if (searchInput) searchInput.value = "";
    if (newsContainer) newsContainer.innerHTML = originalPageHTML;
    closeAllPanels();
}

// ================= 4. SEO DEDICATED NEWS PAGE (news.html?id=X) =================
function openNewsDetail(newsId) {
    window.location.href = "news.html?id=" + newsId;
}

function loadSingleNewsPage() {
    var urlParams = new URLSearchParams(window.location.search);
    var newsIdParam = urlParams.get('id');

    if (!newsIdParam || typeof newsDatabase === "undefined" || !newsContainer) return;

    var newsId = parseInt(newsIdParam, 10);
    activeNewsId = newsId;

    var selectedNews = newsDatabase.find(function(item) {
        return item.id === newsId;
    });

    if (!selectedNews) {
        newsContainer.innerHTML = `
            <div class="oops-box">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <h2>Khabar Nahi Mili (404)</h2>
                <p>Yeh khabar hamare database mein maujood nahi hai ya hata di gayi hai.</p>
                <a href="index.html" class="reset-btn" style="text-decoration: none; display: inline-block;">
                    <i class="fa-solid fa-house"></i> Home Par Wapas Jayein
                </a>
            </div>
        `;
        return;
    }

    var newsText = selectedNews[currentLang];
    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';
    var formattedDate = new Date(selectedNews.date).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
    });

    document.title = newsText.title + " - KhabarX";
    var metaDesc = document.getElementById('seo-desc');
    if (metaDesc) metaDesc.setAttribute('content', newsText.summary);

    var schemaTag = document.getElementById('news-schema');
    if (schemaTag) {
        schemaTag.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": newsText.title,
            "image": [selectedNews.image],
            "datePublished": selectedNews.date,
            "description": newsText.summary,
            "author": { "@type": "Organization", "name": "KhabarX" }
        });
    }

    var categoryNews = newsDatabase.filter(function(item) {
        return item.category.toLowerCase() === selectedNews.category.toLowerCase() && item.id !== newsId;
    }).sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    var detailHTML = `
        <div class="full-article-box ${rtlClass}">
            <div class="article-top-bar">
                <a href="category.html?cat=${selectedNews.category}" class="news-badge" style="text-decoration: none;">${selectedNews.category.replace(/-/g, ' ')}</a>
                <a href="index.html" class="reset-btn" style="text-decoration: none;">
                    <i class="fa-solid fa-arrow-left"></i> Home Par Wapas
                </a>
            </div>
            <h1>${newsText.title}</h1>
            <div class="article-meta">
                <span><i class="fa-regular fa-calendar"></i> ${formattedDate}</span>
                <span><i class="fa-solid fa-folder-open"></i> ${selectedNews.category.replace(/-/g, ' ')}</span>
            </div>
            <img src="${selectedNews.image}" alt="${newsText.title}" class="article-hero-img">
            <div class="article-full-content">
                <p>${newsText.content}</p>
            </div>
        </div>
    `;

    if (categoryNews.length > 0) {
        detailHTML += `
            <div class="related-category-section">
                <h2>More in ${selectedNews.category.replace(/-/g, ' ')}</h2>
                <div class="news-grid">
        `;

        categoryNews.forEach(function(catItem) {
            var catText = catItem[currentLang];
            var catDate = new Date(catItem.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            });

            detailHTML += `
                <article class="news-card ${rtlClass}" onclick="openNewsDetail(${catItem.id})">
                    <img src="${catItem.image}" alt="${catText.title}">
                    <div class="news-card-body">
                        <span class="news-badge">${catItem.category.replace(/-/g, ' ')}</span>
                        <h3>${catText.title}</h3>
                        <p>${catText.summary}</p>
                        <div class="news-date">
                            <i class="fa-regular fa-clock"></i> ${catDate}
                        </div>
                    </div>
                </article>
            `;
        });

        detailHTML += `</div></div>`;
    }

    newsContainer.innerHTML = detailHTML;
    originalPageHTML = newsContainer.innerHTML;
}
// ================= 5. CATEGORY PAGE (LATEST 10 NEWS) =================
function loadCategoryPage() {
    var urlParams = new URLSearchParams(window.location.search);
    var rawCategory = urlParams.get('cat');

    if (!rawCategory || typeof newsDatabase === "undefined" || !newsContainer) return;

    var selectedCategory = rawCategory.replace(/-/g, ' ');
    document.title = selectedCategory + " - KhabarX";

    var categoryNews = newsDatabase.filter(function(item) {
        var dbCat = item.category.toLowerCase().replace(/-/g, ' ');
        return dbCat === selectedCategory.toLowerCase();
    }).sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    var latestTenNews = categoryNews.slice(0, 10);
    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';

    if (latestTenNews.length > 0) {
        var catHTML = `
            <div class="search-status-bar">
                <h2><i class="fa-solid fa-layer-group" style="color: var(--accent-color);"></i> ${selectedCategory} — Latest News (${latestTenNews.length})</h2>
                <a href="index.html" class="reset-btn" style="text-decoration: none;">
                    <i class="fa-solid fa-house"></i> Home
                </a>
            </div>
            <div class="news-grid">
        `;

        latestTenNews.forEach(function(news) {
            var newsText = news[currentLang];
            var formattedDate = new Date(news.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric'
            });

            catHTML += `
                <article class="news-card ${rtlClass}" onclick="openNewsDetail(${news.id})">
                    <img src="${news.image}" alt="${newsText.title}">
                    <div class="news-card-body">
                        <span class="news-badge">${news.category.replace(/-/g, ' ')}</span>
                        <h3>${newsText.title}</h3>
                        <p>${newsText.summary}</p>
                        <div class="news-date">
                            <i class="fa-regular fa-clock"></i> ${formattedDate}
                        </div>
                    </div>
                </article>
            `;
        });

        catHTML += `</div>`;
        newsContainer.innerHTML = catHTML;
    } else {
        newsContainer.innerHTML = `
            <div class="oops-box">
                <i class="fa-solid fa-folder-open"></i>
                <h2>${selectedCategory} Mein Abhi Koi Khabar Nahi</h2>
                <p>Is category mein jald hi taza tareen khabrein shamil ki jayengi.</p>
                <a href="index.html" class="reset-btn" style="text-decoration: none; display: inline-block;">
                    <i class="fa-solid fa-house"></i> Home Par Wapas Jayein
                </a>
            </div>
        `;
    }

    originalPageHTML = newsContainer.innerHTML;
}

// ================= 6. HOME PAGE: LATEST 5 NEWS =================
function loadHomeLatestNews() {
    var latestGrid = document.getElementById('home-latest-news-grid');
    if (!latestGrid || typeof newsDatabase === "undefined") return;

    var overallLatest = newsDatabase.slice().sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    var topFiveNews = overallLatest.slice(0, 5);
    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';
    var latestHTML = "";

    topFiveNews.forEach(function(news) {
        var newsText = news[currentLang];
        var formattedDate = new Date(news.date).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
        });

        latestHTML += `
            <article class="news-card ${rtlClass}" onclick="openNewsDetail(${news.id})">
                <img src="${news.image}" alt="${newsText.title}">
                <div class="news-card-body">
                    <span class="news-badge">${news.category.replace(/-/g, ' ')}</span>
                    <h3>${newsText.title}</h3>
                    <p>${newsText.summary}</p>
                    <div class="news-date">
                        <i class="fa-regular fa-clock"></i> ${formattedDate}
                    </div>
                </div>
            </article>
        `;
    });

    latestGrid.innerHTML = latestHTML;
    if (newsContainer) originalPageHTML = newsContainer.innerHTML;
}

// ================= 7. MOST POPULAR 10 NEWS (STATUS: 1 -> 2 -> 0) =================
function loadMostPopularNews() {
    var popularGrid = document.getElementById('popular-news-grid');
    if (!popularGrid || typeof newsDatabase === "undefined") return;

    function getStatusPriority(status) {
        if (status === 1) return 1;
        if (status === 2) return 2;
        return 3;
    }

    var popularSorted = newsDatabase.slice().sort(function(a, b) {
        var priorityA = getStatusPriority(a.status);
        var priorityB = getStatusPriority(b.status);
        if (priorityA !== priorityB) return priorityA - priorityB;
        return new Date(b.date) - new Date(a.date);
    });

    var topTenPopular = popularSorted.slice(0, 10);
    var rtlClass = (currentLang === 'urdu') ? 'rtl-text' : '';
    var popularHTML = "";

    topTenPopular.forEach(function(news, index) {
        var newsText = news[currentLang];
        var rankNumber = index + 1;
        var statusLabel = (news.status === 1) ? "Trending" : (news.status === 0 ? "General" : "Normal");

        popularHTML += `
            <article class="popular-card ${rtlClass}" onclick="openNewsDetail(${news.id})">
                <span class="rank-badge">#${rankNumber}</span>
                <img src="${news.image}" alt="${newsText.title}">
                <div class="popular-card-body">
                    <span class="news-badge">${news.category.replace(/-/g, ' ')}</span>
                    <h3>${newsText.title}</h3>
                    <p>${newsText.summary}</p>
                    <div class="popular-meta">
                        <span><i class="fa-solid fa-fire" style="color: var(--accent-color);"></i> ${statusLabel}</span>
                        <span>Parhein <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
            </article>
        `;
    });

    popularGrid.innerHTML = popularHTML;
}
// ================= 8. COMPLETE LANGUAGE SWITCHER =================
function applyWebsiteLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedSiteLang', lang);

    langOptions.forEach(function(btn) {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (typeof siteTranslations !== "undefined" && siteTranslations[lang]) {
        document.querySelectorAll('[data-translate]').forEach(function(el) {
            var key = el.getAttribute('data-translate');
            if (siteTranslations[lang][key]) {
                el.textContent = siteTranslations[lang][key];
                if (lang === 'urdu') el.classList.add('rtl-text');
                else el.classList.remove('rtl-text');
            }
        });

        document.querySelectorAll('[data-translate-placeholder]').forEach(function(el) {
            var key = el.getAttribute('data-translate-placeholder');
            if (siteTranslations[lang][key]) {
                el.setAttribute('placeholder', siteTranslations[lang][key]);
                el.style.direction = (lang === 'urdu') ? 'rtl' : 'ltr';
            }
        });
    }

    if (activeNewsId !== null) {
        loadSingleNewsPage();
    } else if (searchInput && searchInput.value.trim() !== "") {
        performSearch();
    } else {
        loadSingleNewsPage();
        loadCategoryPage();
        loadHomeLatestNews();
        loadMostPopularNews();
    }
}

// ================= 9. BUTTONS & EVENTS (SEARCH, LANG, MENU) =================
if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        var isAlreadyOpen = searchPanel.classList.contains('active');
        // closeAllPanels();
        if (!isAlreadyOpen) {
            searchPanel.classList.add('active');
            searchInput.focus();
        }
    });
}

if (submitSearch) submitSearch.addEventListener('click', performSearch);

if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
}

if (closeSearch) closeSearch.addEventListener('click', resetToMainPage);

if (langBtn) {
    langBtn.addEventListener('click', function() {
        e.stopPropagation();
        var isAlreadyOpen = langPanel.classList.contains('active');
        closeAllPanels();
        if (!isAlreadyOpen) langPanel.classList.add('active');
    });
}

langOptions.forEach(function(button) {
    button.addEventListener('click', function() {
        var chosenLang = button.getAttribute('data-lang');
        applyWebsiteLanguage(chosenLang);
        if (langPanel) langPanel.classList.remove('active');
    });
});

if (menuBtn) {
    menuBtn.addEventListener('click', function() {
        closeAllPanels();
        menuPanel.classList.add('active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', function() {
        menuPanel.classList.remove('active');
    });
}

document.addEventListener('click', function(e) {
    if (langPanel && langBtn && !langPanel.contains(e.target) && !langBtn.contains(e.target)) {
        langPanel.classList.remove('active');
    }
    
    var questionBtn = e.target.closest('.faq-question');
    if (questionBtn) {
        questionBtn.parentElement.classList.toggle('active');
    }

    if (e.target && e.target.id === 'send-another-btn') {
        var formEl = document.getElementById('contact-page-form');
        var successBox = document.getElementById('contact-success-box');
        if (formEl && successBox) {
            formEl.reset();
            successBox.style.display = 'none';
            formEl.style.display = 'block';
        }
    }
});

document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'contact-page-form') {
        e.preventDefault();
        var userName = document.getElementById('contact-name').value.trim();
        var userSubject = document.getElementById('contact-subject').value;
        var formEl = document.getElementById('contact-page-form');
        var successBox = document.getElementById('contact-success-box');
        var successText = document.getElementById('contact-success-text');

        if (formEl && successBox) {
            formEl.style.display = 'none';
            successText.innerHTML = 'Thank you, <strong>' + userName + '</strong>! Your message regarding <strong>"' + userSubject + '"</strong> has been received by our team.';
            successBox.style.display = 'block';
        }
    }
});

// ================= 10. FULL-WIDTH 5-SLIDE AUTO & MANUAL LOGIC =================
(function() {
    function initFullWidthSlider() {
        var fwSlides = document.querySelectorAll('.fw-slide');
        var fwDots = document.querySelectorAll('.fw-dot');
        var fwPrevBtn = document.getElementById('fw-prev-btn');
        var fwNextBtn = document.getElementById('fw-next-btn');
        var currentFwIndex = 0;
        var autoSlideTimer = null;

        if (fwSlides.length === 0) return;

        function showFwSlide(index) {
            if (index >= fwSlides.length) currentFwIndex = 0;
            else if (index < 0) currentFwIndex = fwSlides.length - 1;
            else currentFwIndex = index;

            for (var i = 0; i < fwSlides.length; i++) fwSlides[i].classList.remove('active');
            for (var j = 0; j < fwDots.length; j++) fwDots[j].classList.remove('active');

            fwSlides[currentFwIndex].classList.add('active');
            if (fwDots[currentFwIndex]) fwDots[currentFwIndex].classList.add('active');
        }

        function startAutoSlide() {
            if (autoSlideTimer) clearInterval(autoSlideTimer);
            autoSlideTimer = setInterval(function() {
                showFwSlide(currentFwIndex + 1);
            }, 4000);
        }

        if (fwPrevBtn) {
            fwPrevBtn.addEventListener('click', function() {
                showFwSlide(currentFwIndex - 1);
                startAutoSlide();
            });
        }

        if (fwNextBtn) {
            fwNextBtn.addEventListener('click', function() {
                showFwSlide(currentFwIndex + 1);
                startAutoSlide();
            });
        }

        for (var k = 0; k < fwDots.length; k++) {
            fwDots[k].addEventListener('click', function() {
                var slideNum = parseInt(this.getAttribute('data-slide'), 10);
                showFwSlide(slideNum);
                startAutoSlide();
            });
        }

        startAutoSlide();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFullWidthSlider);
    } else {
        initFullWidthSlider();
    }
})();

// ================= 11. PAGE STARTUP =================
window.addEventListener('DOMContentLoaded', function() {
    applyWebsiteLanguage(currentLang);
});
// ================= 11. PAGE STARTUP =================
window.addEventListener('DOMContentLoaded', function() {
    applyWebsiteLanguage(currentLang);
});
