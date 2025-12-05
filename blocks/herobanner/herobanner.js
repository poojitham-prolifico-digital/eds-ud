export default function decorate(block) {
  const backgroundEl = block.querySelector('[data-aue-prop="backgroundImage"]');
  const titleEl = block.querySelector('[data-aue-prop="title"]');
  const descEl = block.querySelector('[data-aue-prop="description"]');
  const ctaLabelEl = block.querySelector('[data-aue-prop="ctaLabel"]');
  const ctaLinkEl = block.querySelector('[data-aue-prop="ctaLink"]');

  const background = backgroundEl?.src || backgroundEl?.getAttribute('data-src') || '';
  const title = titleEl?.innerHTML || '';
  const description = descEl?.innerHTML || '';

  const ctaLabel = ctaLabelEl?.innerText?.trim() || '';
  const ctaLink = ctaLinkEl?.href || '#';

  block.innerHTML = `
    <div class="container responsivegrid hero-banner container--default-width hero-banner--large-height hero-banner--content-left aem-GridColumn aem-GridColumn--default--12">

      <div class="hero-banner__main">

        <div class="hero-banner__img-container">
          <div class="image aem-GridColumn aemGridColumn--default-12">
            <div class="cmp-image" data-aue-prop="backgroundImage" data-aue-type="aem-content">
              <picture>
                <source media="(min-width:1440px)" srcset="${background}">
                <img src="${background}">
              </picture>
            </div>
          </div>
        </div>

        <div class="container-fluid wrapper hero-banner__content-container">
          <div class="wrapper__inner">
            <div class="hero-banner__content">

              <div class="banner-content banner-content--no-img">
                <div class="banner-content__main">

                  <div class="brand-heading" data-aue-prop="title" data-aue-type="richtext">${title}</div>

                  <div class="banner-content__desc" data-aue-prop="description" data-aue-type="richtext">${description}</div>

                  <!-- FIXED CTA SECTION -->
                  <div class="banner-content__cta">
                    <div class="cta button a-button a-button--primary a-button--md a-link a-link--icon a-button--icon-left">

                      <!-- REQUIRED DIV WRAPPER (AEM STRUCTURE) -->
                      <div>
                        <button class="btn schedule-engine-integration-cta" aria-label="${ctaLabel}">
                          <em class="wg-icon wg-icon-calendar"></em>
                          <span data-aue-prop="ctaLabel" data-aue-type="text">${ctaLabel}</span>
                        </button>
                      </div>

                      <!-- INVISIBLE ANCHOR FOR UE LINK EDITING -->
                      <a data-aue-prop="ctaLink" data-aue-type="aem-link" 
                         href="${ctaLink}"
                         style="display:none;"></a>

                    </div>
                  </div>
                  <!-- END CTA SECTION -->

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}
