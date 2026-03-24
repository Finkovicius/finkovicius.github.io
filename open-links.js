<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, window.location.origin);

    if (url.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
</script>