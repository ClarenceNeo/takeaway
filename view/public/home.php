<!doctype html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<div class="nav">
  <?php if (logged_in()): ?>
    <a href="/logout">登出</a>
  <?php else: ?>
    <a href="/login">登录</a>
    <a href="/signup">注册</a>
  <?php endif; ?>
</div>
<h1>Home</h1>
<?php echo logged_in() ? his('username') : '游客' ?>你好
<?php import('view/component/js') ?>
<script src="/js/public/home.js"></script>
</body>
</html>