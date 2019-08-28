# 华讯信息系统模板 - React

## 一、简介

该模板为华讯信息系统 react 版本各平台的开发模板。各平台在开发过程中，以该模板为基础进行模块页面的开发。

使用该模板时，须结合 eccom-framework 库进行使用，该库包含界面布局、默认配置以及其他通用的工具。

组件库地址：[eccom-framework](http://192.168.246.162/erpcloudnet/ui/eccom-framework.git)

## 二、开发规范

### 2.1 目录结构

```
    -config                 // umi 配置，包含路由，构建等配置
        config.js           // 打包配置
        routes.config.js    // 路由配置
    -node_modules           // 依赖库
    -scripts                // 格式化脚本
    -src
        -assets             // 本地静态资源
        -components         // 自定义组件存放路径
        -layouts            // 默认的基础布局
        -locales            // 国际化配置
        -models             // 全局 model
        -pages              // 业务页面入口和常用模板
        -services           // 后台接口服务
        global.jsx          // 全局 JS
        global.less         // 全局样式
    package.json
```

### 2.2 安装方法

- 下载模板和组件库

> 模板库

```
# 模板库
git clone http://192.168.246.162/erpcloudnet/ui/eccom-template.git eccom-project
```

> 组件库

```
# 组件库
git clone http://192.168.246.162/erpcloudnet/ui/eccom-framework.git
```

`eccom-project`为项目名称

- 安装

> 创建组件库链接

```
# 进入项目eccom-framework
cd eccom-framework
# 安装依赖
yarn
# 或者
npm install
# 创建链接
yarn link
```

> 安装项目依赖并链接组件库

```
# 进入项目eccom-project
cd eccom-project
# 安装依赖
yarn
# 或者
npm install
# 链接组件库
yarn link 'eccom-framework'
```

> 运行 eccom-project

```
yarn dev
# 或者
npm run dev
```

### 2.3 规范要求

#### 2.3.1 大小写定义

- 新增文件夹名称，首字母小写
- 页面组件和通用组件定义时，首字母大写
- models 和 services 内文件的文件名称首字母小写

#### 2.3.2 路由配置

平台页面路由采用各模块分散配置的方式，并集中导入到`config/route.config.js`中；

模块路由名称定义为`routes.config.js`,路径为各模块的根路径下。如

```
-pages
    -module1    //模块1
        routes.config.js
```

```
# config/route.config.js内导入
import module1Routes from '@/pages/module1/routes.config';
```

#### 2.3.3 界面布局

`eccom-framework`提供多种形式的界面布局，包括宽版/窄版（固定综合导航栏/弹出式综合导航栏）

使用方法：

```
# 固定综合导航栏
@withFixedNavbarLayout

# 弹出式综合导航栏
@withBasicLayout
```

如下：

```
# 弹出式综合导航栏
# 宽版
# 页面名称为Template2
# 页面需要进行权限验证
@withBasicLayout({
  pageName: 'Template2',
  narrow: false,
  authConfig: {
    ...AuthConfig,
  },
})
```

#### 2.3.4 组件定义

各平台特有的组件定义，需将组件定义存放在`src/components`中，其中要求如下：

> common 公共的无法提取到 eccom-framework 库中的组件

> pages 页面各模块组件和配置，包括各模块的权限配置参数等

其他各平台可通用的组件，需提取到`eccom-framework`组件库中。
