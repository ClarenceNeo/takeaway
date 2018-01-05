<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>分类管理</title>
  <link rel="stylesheet" href="/../css/global.css">
  <link rel="stylesheet" href="/../css/admin/admin.css">
  <link rel="stylesheet" href="/../css/admin/user.css">
</head>
<body>
  <div class="nav">
    <a class="nav-item" href="/">首页</a>
    <a class="nav-item" href="product">商品管理</a>
    <a class="nav-item" href="cat">分类管理</a>
    <a class="nav-item" href="order">订单管理</a>
    <a class="nav-item active" href="user">用户管理</a>
  </div>
  <div class="container">
    <div id="list">
      <table class="table table-striped">
        <thead class="tb-head">
          <th>用户ID</th>
          <th>用户名</th>
          <th>操作</th>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
  <?php import('view/component/js') ?>
  <?php import('view/component/admin_js') ?>
  <script src="/js/admin/user.js"></script>
</body>
</html>