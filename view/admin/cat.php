<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>分类管理</title>
</head>
<body>
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