export function scrollToHashSection(href: string, onAfterScroll?: () => void) {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  onAfterScroll?.();
}
