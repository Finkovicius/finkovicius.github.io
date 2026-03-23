<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');

    if (!href) return;

    const isExternal = href.startsWith('http');

    if (isExternal) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
</script>