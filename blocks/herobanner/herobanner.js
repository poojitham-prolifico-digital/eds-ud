export default function decorate(block) {
  // Add your main container classes
  block.classList.add(
    'container',
    'responsivegrid',
    'hero-banner',
    'container--default-width',
    'hero-banner--large-height',
    'hero-banner--content-left',
    'aem-GridColumn',
    'aem-GridColumn--default--12'
  );

  // Franklin wraps inner children, so apply classes safely:
  const main = block.querySelector(':scope > div');
  if (main) {
    main.classList.add('hero-banner__main');
  }

  const imgContainer = block.querySelector('.hero-banner__img-container');
  if (imgContainer) {
    imgContainer.classList.add('hero-banner__img-container');
  }

  const contentContainer = block.querySelector('.hero-banner__content-container');
  if (contentContainer) {
    contentContainer.classList.add('hero-banner__content-container');
  }

  const brandHeading = block.querySelector('.brand-heading');
  if (brandHeading) {
    brandHeading.classList.add('brand-heading');
  }

  const desc = block.querySelector('.banner-content__desc');
  if (desc) {
    desc.classList.add('banner-content__desc');
  }

  const cta = block.querySelector('.banner-content__cta');
  if (cta) {
    cta.classList.add('banner-content__cta');
  }
}
