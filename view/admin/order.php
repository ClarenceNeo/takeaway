<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>分类管理</title>
  <link rel="stylesheet" href="/../css/global.css">
  <link rel="stylesheet" href="/../css/admin/admin.css">
  <link rel="stylesheet" href="/../css/admin/order.css">
</head>
<body>
  <div class="nav">
    <a class="nav-item" href="/">首页</a>
    <a class="nav-item" href="product">商品管理</a>
    <a class="nav-item" href="cat">分类管理</a>
    <a class="nav-item active" href="order">订单管理</a>
  </div>
  <div class="container">
    <div id="list">
      <table class="table table-striped">
        <thead>
          <th>订单号</th>
          <th>总价</th>
          <th>用户</th>
          <th>产品列表</th>
          <th>操作</th>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
  <?php import('view/component/js') ?>
  <?php import('view/component/admin_js') ?>
  <script src="/js/admin/order.js"></script>
</body>
</html>