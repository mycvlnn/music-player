const redirects = document.links;

for (const redirect of redirects) {
  redirect.onclick = function (e) {
    if (e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}
