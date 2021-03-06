// see: http://youmightnotneedjquery.com/#ready
function onDocumentReady(fn) {
  const complete = document.readyState === 'complete';
  const notLoading = document.readyState !== 'loading';
  const ready = document.attachEvent ? complete : notLoading;
  if (ready) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function onResize(fn) {
  let timer;
  let windowWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, 100);
    }
  });
}

export default {
  onDocumentReady,
  onResize
};
