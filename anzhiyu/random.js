var posts=["2025/03/02/多歧路，今安在/","2025/03/02/这是一篇新的博文/","2025/03/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };