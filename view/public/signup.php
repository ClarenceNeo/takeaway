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
  <div class="place tac">
    <div class="cart">
      <h1 class="title">注册</h1>
      <form id="signup">
        <div>
          <input class="form-item" type="text" name="username" placeholder="用户名">
        </div>
        <div>
          <input class="form-item" type="password" name="password" placeholder="密码">
        </div>
        <div class="tal">
          <a class="tip" href="/user/login">已有账号，点击登录</a>
        </div>
        <button class="submit-btn" type="submit">提交</button>
      </form>
    </div>
  </div>
  <?php import('view/component/js') ?>
  <script src="/js/public/signup.js"></script>
</body>
</html>