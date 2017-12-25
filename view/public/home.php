<!doctype html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/public/home.css">
  <title>Document</title>
</head>
<body>
<div class="nav place">
  <a class="item active" href="">首页</a>
  <a class="item order menu" href="">我的订单</a>
  <?php if(@$_SESSION['user']['permission']==='admin'): ?>
    <a href="admin/product" class="item menu">后台管理</a>
  <?php endif; ?>
  <?php if (logged_in()): ?>
    <div class="item user dropdown menu" >
      <span><?php echo his('username') ?> <i class="fa fa-caret-down" aria-hidden="true"></i></span>
      <ul class="dropdown-content">
        <li class="list-item"><a href="">个人信息</a></li>
        <li class="list-item"><a href="">地址</a></li>
        <li class="list-item"><a href="">设置</a></li>
        <hr>
        <li class="list-item"><a href="/logout">退出登录</a></li>
      </ul>
    </div>
  <?php else: ?>
    <a class="item user menu" href="/user/login">登录</a>
    <a class="item user menu" href="/user/signup">注册</a>
  <?php endif; ?>
</div>
<div class="siderbar-tab">
  <div class="toolbar-tab-middle">
    <a href="" class="toolbar-cartbtn sidebar-btn"><i class="fa fa-shopping-cart" aria-hidden="true"></i>购物车</a>
  </div>
  <div class="toolbar-tab-bottom">
    <a href="javascript:" class="sidebar-btn-backtop sidebar-btn"><i class="fa fa-caret-square-o-up" aria-hidden="true"></i></a>
  </div>
</div>
<div class="place clearfix">
  <div class="item addr">当前位置：</div>
  <div class="item search-box"><input class="search-bar" type="text" placeholder="搜索美食"></div>
</div>
<div class="place">
  <div class="box row">
    <div class="cat-title col col-2 tac">美食分类：</div>
    <div id="cat-list" class="cat-list col col-10">
    </div>
  </div>
</div>
<div class="place main">
  <div id="product-list" class="box main row product">
    <div class="item col col-4 row">
      <div class="col col-4">
        <a class="product-img tac" href=""><img src="https://fuss10.elemecdn.com/0/8d/d847f56880bab0af0b927c8356f8epng.png?imageMogr2/thumbnail/140x140" alt=""></a>
        <div class="product-time">25 分钟</div>
      </div>
      <div class="col col-8 product-right">
        <h3 class="product-item product-title">快乐柠檬</h3>
        <div class="product-item product-sales">月售<span>299</span>单</div>
        <div class="product-item product-delivery">配送费 ¥<span>5</span></div>
        <div class="product-item product-price">¥ <span>20</span></div>
        <button class="product-item product-cart">加入购物车 <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
      </div>
    </div>
    <div class="item col col-4"></div>
    <div class="item col col-4"></div>
    <div class="item col col-4"></div>
  </div>
</div>
<?php import('view/component/js') ?>
<?php import('view/component/public_js') ?>
<script src="/js/public/home.js"></script>
</body>
</html>