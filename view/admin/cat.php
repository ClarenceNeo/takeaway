<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>分类管理</title>
  <link rel="stylesheet" href="/../css/global.css">
  <link rel="stylesheet" href="/../css/admin/admin.css">
  <link rel="stylesheet" href="/../css/admin/cat.css">
</head>
<body>
  <div class="nav">
    <a class="nav-item" href="/">首页</a>
    <a class="nav-item" href="product">商品管理</a>
    <a class="nav-item active" href="cat">分类管理</a>
    <a class="nav-item" href="order">订单管理</a>
  </div>
  <form id="form">
  </form>
  <div id="list">
    <table>
      <thead>
        <th>id</th>
        <th>标题</th>
        <th>操作</th>
      </thead>
      <tbody></tbody>
    </table>
  </div>
  <?php import('view/component/js') ?>
  <?php import('view/component/admin_js') ?>
  <script src="/js/admin/cat.js"></script>
</body>
</html>