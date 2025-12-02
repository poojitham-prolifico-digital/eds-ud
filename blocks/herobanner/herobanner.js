(function () {
  document.querySelectorAll('.herobanner').forEach(function(root) {
    try {
      var alignEl = root.querySelector('.herobanner__meta--alignment');
      var sizeEl  = root.querySelector('.herobanner__meta--size');
      var bgEl    = root.querySelector('.herobanner__meta--bgcolor');

      var align = alignEl ? (alignEl.textContent || alignEl.innerText || '').trim().toLowerCase() : '';
      var size  = sizeEl ? (sizeEl.textContent || sizeEl.innerText || '').trim().toLowerCase() : '';
      var bgcolor = bgEl ? (bgEl.textContent || bgEl.innerText || '').trim() : '';
      if (align === 'center' || align === 'right' || align === 'left') {
        root.classList.remove('align-left','align-center','align-right');
        root.classList.add('align-' + align);
      } else {
        root.classList.add('align-left');
      }

      if (size === 'short' || size === 'medium' || size === 'tall') {
        root.classList.remove('size-short','size-medium','size-tall');
        root.classList.add('size-' + size);
      } else {
        root.classList.add('size-medium');
      }
      if (bgcolor) {
        var bg = root.querySelector('.herobanner__bg');
        if (bg) bg.style.backgroundColor = bgcolor;
      }
      var bgHasPic = !!root.querySelector('.herobanner__bg img, .herobanner__bg picture');
      var alt = root.querySelector('.herobanner__alt');
      if (alt) alt.style.display = bgHasPic ? 'none' : 'block';


    } catch (e) {

      console.warn('herobanner init error', e);
    }
  });
})();
