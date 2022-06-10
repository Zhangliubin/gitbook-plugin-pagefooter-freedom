# gitbook-plugin-pagefooter-freedom

自由地设置页脚。

## 插件配置

```javascript
"pagefooter-freedom": {
    "copyright": "作者: 张柳彬",
    "modify_label": "文档修订时间: ",
    "modify_format": "YYYY-MM-DD",
    "hide": false,
    "README.md": "作者: 袁杨杨",
    "download.md": {
        "copyright": "作者: 张柳彬",
        "modify_label": "Upload time: ",
        "modify_format": "YYYY-MM-DD HH:mm:ss"
    }
},
```

添加了 `hide`，在导出 pdf 时可以方便地去掉自动页脚！支持子页面设置版权信息 （作者信息）、支持不同。

> copyright 和 modify_label 支持 html 代码
