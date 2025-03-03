var posts=["2025/03/02/多歧路，今安在/","2025/03/04/Python学习笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };