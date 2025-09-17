export const scrollToAnchor = () => {
  if (window.location.hash) {
    const id = window.location.hash.replace('#', '');
    const el = document.getElementById(id);

    if (el) {
      console.log('el', el)
      setTimeout(() => {
        const headerOffset = 250;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 0);
    }
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }
}
