<!doctype html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../../css/global.css">
  <link rel="stylesheet" href="../../css/public/home.css">
  <link rel="stylesheet" href="../../css/public/order.css">
  <title>我的订单</title>
</head>
<body>
<div class="nav place">
  <a class="item" href="/">首页</a>
  <a class="item order menu active" href="/user/order">我的订单</a>
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

<div class="place">
  <table id="order-table">
    <thead class="tb-head">
      <tr>
        <th>订单详情</th>
        <th>收货人</th>
        <th>金额</th>
        <th>订单状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr class="sep-row">
        <td colspan="5"></td>
      </tr>
      <tr class="tr-th tb-head">
        <td colspan="5">
          <span class="dealtime">2017-12-22 19:13:27</span>
          <span>订单号：<a>123553</a></span>
          <div class="remove-order"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
        </td>
      </tr>
      <tr class="tr-bd">
        <td class="goods row">
          <div class="goods-item col col-10">
            <div class="p-img"><img src="https://fuss10.elemecdn.com/0/8d/d847f56880bab0af0b927c8356f8epng.png?imageMogr2/thumbnail/140x140" alt=""></div>
            <div class="p-msg">商品信息1商品信息1</div>
          </div>
          <div class="goods-number col col-2 tac">x2</div>
        </td>
        <td rowspan="2">
          <div class="consignee tac">
            <span>user2</span>
          </div>
        </td>
        <td rowspan="2">
          <div class="amount tac">
            <span>总额 ¥40.00</span>
          </div>
        </td>
        <td rowspan="2">
          <div class="status tac">
            <span>已完成</span>
          </div>
        </td>
        <td rowspan="2 tac">
          <div>
            <button>支付</button>
          </div>
          <a href="">评价</a>
        </td>
      </tr>
      <tr>
        <td class="goods row">
          <div class="goods-item col col-10">
            <div class="p-img"><img src="https://fuss10.elemecdn.com/e/53/3bcbafc27f4f11e59c0caa3d84ac9jpeg.jpeg?imageMogr2/thumbnail/720x720/format/webp/quality/85" alt=""></div>
            <div class="p-msg">商品信息2商品信息2</div>
          </div>
          <div class="goods-number col col-2 tac">x2</div>
        </td>
      </tr>
    </tbody>

    <tbody>
      <tr class="sep-row">
        <td colspan="5"></td>
      </tr>
      <tr class="tr-th tb-head">
        <td colspan="5">
          <span class="dealtime">2017-12-22 19:13:27</span>
          <span>订单号：<a>123553</a></span>
          <div class="remove-order"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
        </td>
      </tr>
      <tr class="tr-bd">
        <td class="goods row">
          <div class="goods-item col col-10">
            <div class="p-img"><img src="https://fuss10.elemecdn.com/0/8d/d847f56880bab0af0b927c8356f8epng.png?imageMogr2/thumbnail/140x140" alt=""></div>
            <div class="p-msg">商品信息1商品信息1</div>
          </div>
          <div class="goods-number col col-2 tac">x2</div>
        </td>
        <td rowspan="2">
          <div class="consignee tac">
            <span>user2</span>
          </div>
        </td>
        <td rowspan="2">
          <div class="amount tac">
            <span>总额 ¥40.00</span>
          </div>
        </td>
        <td rowspan="2">
          <div class="status tac">
            <span>已完成</span>
          </div>
        </td>
        <td rowspan="2 tac">
          <div>
            <button>支付</button>
          </div>
          <a href="">评价</a>
        </td>
      </tr>
      <tr>
        <td class="goods row">
          <div class="goods-item col col-10">
            <div class="p-img"><img src="https://fuss10.elemecdn.com/e/53/3bcbafc27f4f11e59c0caa3d84ac9jpeg.jpeg?imageMogr2/thumbnail/720x720/format/webp/quality/85" alt=""></div>
            <div class="p-msg">商品信息2商品信息2</div>
          </div>
          <div class="goods-number col col-2 tac">x2</div>
        </td>
      </tr>
    </tbody>
  </table>
  
  
</div>
<?php import('view/component/js') ?>
<?php import('view/component/public_js') ?>
<script src="../../js/public/order.js"></script>
</body>
</html>