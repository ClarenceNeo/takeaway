<!doctype html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>商品管理</title>
  <link rel="stylesheet" href="/../css/global.css">
  <link rel="stylesheet" href="/../css/admin/admin.css">
  <link rel="stylesheet" href="/../css/admin/product.css">
</head>
<body>
<div class="nav">
  <a class="nav-item" href="/">首页</a>
  <a class="nav-item active" href="product">商品管理</a>
  <a class="nav-item" href="cat">分类管理</a>
  <a class="nav-item" href="order">订单管理</a>
  <a class="nav-item" href="user">用户管理</a>
</div>
<form id="form" class="form"></form>
<div id="list">
  <table>
    <thead>
      <th>id</th>
      <th>标题</th>
      <th>分类</th>
      <th>价格</th>
      <th>销量</th>
      <th>封面图片</th>
      <th>操作</th>
    </thead>
    <tbody></tbody>
  </table>
  <div>
    <button id="page-up">上一页</button>
    <button id="page-down">下一页</button>
  </div>
</div>
<?php import('view/component/js') ?>
<?php import('view/component/admin_js') ?>
<script src="/js/admin/product.js"></script>
</body>
</html>