<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../../css/global.css">
  <link rel="stylesheet" href="../../css/public/login.css">
  <title>Document</title>
</head>
<body>
  <div class="tac place">
    <h1 class="tac title">登录</h1>
    <form class="submit-form">
      <div>
        <input class="form-item" type="text" name="username" placeholder="用户名">
      </div>
      <div>
        <input class="form-item" type="password" name="password" placeholder="密码">
      </div>
      <button class="submit-btn" type="submit">提交</button>
    </form>
  </div>
  <?php import('view/component/js') ?>
  <script src="/js/public/login.js"></script>
</body>
</html>