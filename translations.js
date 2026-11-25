// ================= WEBSITE UI TRANSLATIONS (translations.js) =================

var siteTranslations = {
    english: {
        searchPlaceholder: "Khabar talash karein...",
        heroTitle: "Sachchi Aur Taza Tareen Khabrein, Har Lamha Aapke Saath",
        heroDesc: "KhabarX par aapko Pakistan aur duniya bhar ki ahem khabrein, khel, technology aur mausam ki har update bilkul barwaqt aur teeno zabanon (Roman Urdu, Urdu, aur English) mein milti hain.",
        latestHeading: "Latest News",
        top5Tag: "TOP 5 UPDATES",
        popularHeading: "Most Popular News",
        top10Tag: "TOP 10 TRENDING",
        footerTagline: "Sab se tez aur sachchi khabrein, har waqt aapke saath.",
        exploreCatHeading: "Top Categories Dekhein", top5CatTag: "5 SECTIONS"
    },
    urdu: {
        searchPlaceholder: "خبر تلاش کریں...",
        heroTitle: "سچی اور تازہ ترین خبریں، ہر لمحہ آپ کے ساتھ",
        heroDesc: "نیوز پورٹل پر آپ کو پاکستان اور دنیا بھر کی اہم خبریں، کھیل، ٹیکنالوجی اور موسم کی ہر اپڈیٹ بالکل بروقت اور تینوں زبانوں (رومن اردو، اردو اور انگلش) میں ملتی ہیں۔",
        latestHeading: "تازہ ترین خبریں",
        top5Tag: "اہم 5 خبریں",
        popularHeading: "مقبول ترین خبریں",
        top10Tag: "ٹاپ 10 ٹرینڈنگ",
        footerTagline: "سب سے تیز اور سچی خبریں، ہر وقت آپ کے ساتھ۔",
        exploreCatHeading: "اہم کیٹیگریز دیکھیں", top5CatTag: "5 شعبے"
    },
    roman: {
        searchPlaceholder: "Search for news...",
        heroTitle: "True and Latest News, With You Every Moment",
        heroDesc: "On KhabarX, you get breaking news from Pakistan and around the world, sports, technology, and weather updates on time in all three languages.",
        latestHeading: "Latest News",
        top5Tag: "TOP 5 UPDATES",
        popularHeading: "Most Popular News",
        top10Tag: "TOP 10 TRENDING",
        footerTagline: "The fastest and truest news, always with you.",
        exploreCatHeading: "Explore Top Categories", top5CatTag: "5 SECTIONS"
    }
};















// ================= 11. COMPLETE WEBSITE LANGUAGE SWITCHER =================
function applyWebsiteLanguage(lang) {
    if (typeof siteTranslations === "undefined" || !siteTranslations[lang]) return;

    currentLang = lang;
    // User ki pasand save karein taake doosre page par bhi yahi zaban rahe
    localStorage.setItem('selectedSiteLang', lang);

    // 1. Dropdown mein sahi button ko highlight (active) karein
    langOptions.forEach(function(btn) {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Saare 'data-translate' wale HTML elements ka text badlein
    var transElements = document.querySelectorAll('[data-translate]');
    transElements.forEach(function(el) {
        var key = el.getAttribute('data-translate');
        if (siteTranslations[lang][key]) {
            el.textContent = siteTranslations[lang][key];
            
            // Urdu ke liye Right-to-Left alignment lagayein
            if (lang === 'urdu') {
                el.classList.add('rtl-text');
            } else {
                el.classList.remove('rtl-text');
            }
        }
    });

    // 3. Search Bar ka Placeholder badlein
    var placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(function(el) {
        var key = el.getAttribute('data-translate-placeholder');
        if (siteTranslations[lang][key]) {
            el.setAttribute('placeholder', siteTranslations[lang][key]);
            el.style.direction = (lang === 'urdu') ? 'rtl' : 'ltr';
        }
    });

    // 4. Dynamic News Sections ko nayi zaban mein refresh karein
    if (activeNewsId !== null) {
        openNewsDetail(activeNewsId);
    } else if (searchInput && searchInput.value.trim() !== "") {
        performSearch();
    } else {
        loadCategoryPage();
        loadHomeLatestNews();
        loadMostPopularNews();
    }
}

// Jab user Globe menu se kisi zaban par click kare
langOptions.forEach(function(button) {
    button.addEventListener('click', function() {
        var chosenLang = button.getAttribute('data-lang');
        applyWebsiteLanguage(chosenLang);
        if (langPanel) langPanel.classList.remove('active');
    });
});

// Page load hote hi check karein ke user ne pehle konsi zaban chuni thi
window.addEventListener('DOMContentLoaded', function() {
    var savedLang = localStorage.getItem('selectedSiteLang') || 'roman';
    applyWebsiteLanguage(savedLang);
});
