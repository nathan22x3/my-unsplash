export const disableScrolling = () => {
  const x = window.scrollX;
  const y = window.scrollY;
  window.onscroll = () => window.scrollTo(x, y);
};

export const enableScrolling = () => {
  window.onscroll = () => {};
};
