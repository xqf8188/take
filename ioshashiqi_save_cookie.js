// ioshashiqi_save_cookie.js
(function () {
  const cookie = $request.headers['Cookie'] || $request.headers['cookie'] || '';
  if (cookie) {
    $prefs.setValueForKey(cookie, 'ioshashiqi_cookie');
    $notify('ioshashiqi', 'Cookie 已保存', cookie);
  } else {
    $notify('ioshashiqi', 'Cookie 保存失败', '未捕获到 Cookie');
  }
  $done();
})();
