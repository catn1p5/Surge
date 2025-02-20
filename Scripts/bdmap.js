const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/usercenter/mine/page")) {
  const item = [
    "gold", // 金币商城等活动
  ];
  if (obj.data) {
    item.forEach((i) => {
      delete obj.data[i];
    });
  }
} else if (url.includes("/noticebar/get")) {
  if (obj.content?.multi_data) {
    obj.content.multi_data = [];
  }
} else if (url.includes("/imap/dl/s/UpdateInfo")) {
  const item = [
    "map.iphone.baidu.surround", // 新周边
    "map.iphone.baidu.movie", // 电影
    "map.iphone.baidu.hotel", // 酒店
    "map.iphone.baidu.hotelChanel", //地图首页订酒店
    "map.iphone.baidu.nearbybraavos", // 美食休闲
    "map.iphone.baidu.indoordetail", // 室内图楼层卡片
    "map.iphone.baidu.cater", // 美食
    "map.iphone.baidu.goldMall", // 金币商城
    "map.iphone.baidu.usersystem", // 用户体系
    "map.iphone.baidu.websdk", // websdk
    "map.iphone.baidu.comdetailtmpl", // 通用详情页
    "map.iphone.baidu.scenery", // 景点
    "map.iphone.baidu.aihomenearbycontent", // 新首页附近组件
    "map.iphone.baidu.commicroDetail", // 笔记微详情
    "map.iphone.baidu.agent", //地图新Agent
    "map.iphone.baidu.nearbycontent" // 周边组件
  ];
  if (obj?.packages) {
    item.forEach((i) => {
      delete obj.packages[i];
    });
  }
}

$done({ body: JSON.stringify(obj) });