// Load menu
fetch('menu.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('menu').innerHTML = html;
  });

// Load logo
fetch('logo.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('logo').innerHTML = html;
  });

