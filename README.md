# rzk

> 任租客网站版，各类用品租赁平台


# 目录说明

## build / config

> webpack配置文件

## static

> 存放第三方静态资源

## src

> 项目源代码

###  assets

> 存放公共的资源，如图片等

### components

> 组件。（就近维护：有图片等，放到文件夹下）

### main.js

> 入口文件

### App.vue

> 整个页面组件

1. banner: 首页轮播图
2. card: 单个商品卡片（图、标题、价格）,热租商品和推荐商品中引用
3.

### pages

> 所有页面

1. index.vue    首页

> banner 点击跳到 9.专题详情
> hotsite 点击跳到 5.分类页 对应分类

2. hots.vue 热租商品
3. topics.vue 精选专题
4. recommands.vue 推荐商品
5. category.vue 分类页

> 点击任意分类，进入 10.商品列表

6. cart.vue 购物车
7. user.vue 我的

> 只保留：收藏夹、客服中心、意见反馈、设置

8. detail.vue 商品详情
9. topic_detail.vue 专题详情
10. list.vue 商品列表
11. order.vue 我的订单
12. order_detail.vue 订单详情
13. address.vue 地址管理
14. login.vue 登录注册

 > 2018-03-26 新建本地分支并上传测试（rzk-local-w）
