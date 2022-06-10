var moment = require('moment');
module.exports = {
    book: {
        assets: './assets',
        css: [
            'footer.css'
        ],
    },
    hooks: {
        'page:before': function (page) {
            var inputs = this.options.pluginsConfig['pagefooter-freedom'];
            var hide = inputs['hide'];
            if (hide) {
                return page;
            }

            var label = inputs['modify_label'];
            var format = inputs['modify_format'];
            var copy = inputs['copyright'];

            // 页面文件名
            var id = page.path;

            if (inputs[id] != null) {
                if (typeof inputs[id] === 'string') {
                    copy = inputs[id];
                } else {
                    // 有设置子页面信息时, 更新参数
                    if (inputs[id]['hide'] != null && inputs[id]['hide']) {
                        // 子页面设置了隐藏
                        return page;
                    }

                    if (inputs[id]['modify_label'] != null) {
                        label = inputs[id]['modify_label'];
                    }

                    if (inputs[id]['modify_format'] != null) {
                        format = inputs[id]['modify_format'];
                    }

                    if (inputs[id]['copyright'] != null) {
                        copy = inputs[id]['copyright'];
                    }
                }
            }

            // 默认样式
            var _copy = '<span class="copyright">' + copy + '</span>'
            var str = ' \n\n<footer class="page-footer">' + _copy +
                '<span class="footer-modification">' +
                label +
                '\n{{file.mtime | date("' + format +
                '")}}\n</span></footer>'
            page.content = page.content + str;

            return page;
        }
    },
    filters: {
        date: function (d, format) {
            return moment(d).format(format)
        }
    }
};
