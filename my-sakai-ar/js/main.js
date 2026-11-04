/**
 * js/main.js
 * ホーム画面の動的制御スクリプト
 */

document.addEventListener('DOMContentLoaded', () => {

// ==========================================
  // 1. スライダーの初期化と自動切り替え (手動タップ対応)
  // ==========================================
  const sliderContainer = document.getElementById('hero-slider');
  const dotsContainer = document.getElementById('slider-dots');
  let currentSlide = 0;
  let slideInterval = null;

  if (HERO_SLIDES && HERO_SLIDES.length > 0) {

    // 指定した番号のスライドを表示する関数
    function goToSlide(index) {
      const slides = document.querySelectorAll('.slide-item');
      const dots = document.querySelectorAll('.dot');

      if (slides.length === 0 || dots.length === 0) return;

      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');

      currentSlide = index;

      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    // 自動スライドを開始（タイマーリセット機能付き）
    function startAutoSlide() {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(() => {
        const nextSlide = (currentSlide + 1) % HERO_SLIDES.length;
        goToSlide(nextSlide);
      }, 3500);
    }

    // スライドとドット要素の生成
    HERO_SLIDES.forEach((slide, index) => {
      // スライド画像要素
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
      
      // ★ ドットのタップ（クリック）イベント
      dot.addEventListener('click', () => {
        goToSlide(index);
        startAutoSlide(); // タップ後、タイマーをリセットして3.5秒カウントし直す
      });

      dotsContainer.appendChild(dot);
    });

    // 自動切り替えスタート
    startAutoSlide();
  }

// ==========================================
  // 2. カードリストの生成 (お知らせ/ニュース/お問い合わせ)
  // ==========================================
  function renderCards(containerId, dataList, pageUrl) {
    const container = document.getElementById(containerId);
    if (!container || !dataList) return;

    // 各記事のカード
    const itemsHtml = dataList.map(item => `
      <a href="${pageUrl}" class="content-card">
        <div class="card-title">${item.title}</div>
        <div class="card-date">${item.date}</div>
      </a>
    `).join('');

    // 一番最後に追加する「もっと見る」カード
    const moreCardHtml = `
      <a href="${pageUrl}" class="content-card more-card">
        <div class="more-card-inner">
          <span>もっと見る</span>
          <span class="more-arrow">→</span>
        </div>
      </a>
    `;

    // 記事カード群の最後につなげて挿入
    container.innerHTML = itemsHtml + moreCardHtml;
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