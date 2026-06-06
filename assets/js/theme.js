(function () {
  var html   = document.documentElement;
  var btn    = document.getElementById('theme-toggle');
  var DARK   = 'dark';
  var LIGHT  = 'light';
  var KEY    = 'theme';

  function getStored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function setStored(val) {
    try { localStorage.setItem(KEY, val); } catch (e) {}
  }

  function apply(theme) {
    html.setAttribute('data-theme', theme);
  }

  function toggle() {
    var current = html.getAttribute('data-theme') === DARK ? DARK : LIGHT;
    var next    = current === DARK ? LIGHT : DARK;
    apply(next);
    setStored(next);
  }

  /* Sync initial state (FOUC guard in baseof.html already ran, but re-confirm) */
  var stored = getStored();
  if (stored) {
    apply(stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    apply(DARK);
  }

  if (btn) {
    btn.addEventListener('click', toggle);
  }

  /* Sync across tabs */
  window.addEventListener('storage', function (e) {
    if (e.key === KEY && e.newValue) {
      apply(e.newValue);
    }
  });
})();
