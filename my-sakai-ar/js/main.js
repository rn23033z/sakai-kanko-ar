/**
 * js/main.js
 * ホーム画面の動的制御スクリプト
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. スライダーの初期化と自動切り替え
  // ==========================================
  const sliderContainer = document.getElementById('hero-slider');
  const dotsContainer = document.getElementById('slider-dots');
  let currentSlide = 0;

  if (HERO_SLIDES && HERO_SLIDES.length > 0) {
    // スライドとドットを挿入
    HERO_SLIDES.forEach((slide, index) => {
      // スライド要素
      const slideDiv = document.createElement('div');
      slideDiv.className = `slide-item ${index === 0 ? 'active' : ''}`;
      slideDiv.style.backgroundImage = `url('${slide.imageUrl}')`;

      const titleDiv = document.createElement('div');
      titleDiv.className = 'slide-title';
      titleDiv.innerText = slide.title;

      slideDiv.appendChild(titleDiv);
      sliderContainer.appendChild(slideDiv);

      // ドット要素
      const dot = document.createElement('div');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dotsContainer.appendChild(dot);
    });

    // 自動スライド処理 (3.5秒間隔)
    setInterval(() => {
      const slides = document.querySelectorAll('.slide-item');
      const dots = document.querySelectorAll('.dot');

      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');

      currentSlide = (currentSlide + 1) % HERO_SLIDES.length;

      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }, 3500);
  }

  // ==========================================
  // 2. カードリストの生成 (お知らせ/ニュース/お問い合わせ)
  // ==========================================
  function renderCards(containerId, dataList, pageUrl) {
    const container = document.getElementById(containerId);
    if (!container || !dataList) return;

    container.innerHTML = dataList.map(item => `
      <a href="${pageUrl}" class="content-card">
        <div class="card-title">${item.title}</div>
        <div class="card-date">${item.date}</div>
      </a>
    `).join('');
  }

  renderCards('announce-list', ANNOUNCEMENTS_DATA, 'announce.html');
  renderCards('news-list', NEWS_DATA, 'news.html');
  renderCards('contact-list', CONTACT_DATA, 'contact.html');

  // ==========================================
  // 3. ハンバーガーメニューの開閉制御
  // ==========================================
  const openBtn = document.getElementById('open-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const drawerMenu = document.getElementById('drawer-menu');
  const drawerOverlay = document.getElementById('drawer-overlay');

  function openMenu() {
    drawerMenu.classList.add('active');
    drawerOverlay.classList.add('active');
  }

  function closeMenu() {
    drawerMenu.classList.remove('active');
    drawerOverlay.classList.remove('active');
  }

  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMenu);

});