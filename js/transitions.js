// Page transition: current page falls out, new page rises in
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href]').forEach(function (link) {
    var href = link.getAttribute('href');
    var isInternal = href &&
      !href.startsWith('http') &&
      !href.startsWith('//') &&
      !href.startsWith('#') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:') &&
      !link.hasAttribute('download') &&
      link.target !== '_blank';

    if (isInternal) {
      link.addEventListener('click', function (e) {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        document.body.classList.add('is-exiting');
        setTimeout(function () {
          window.location.href = href;
        }, 450);
      });
    }
  });
});
