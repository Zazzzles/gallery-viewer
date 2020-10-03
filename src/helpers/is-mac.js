export default () => {
  return ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].includes(
    window.navigator.platform
  );
};
