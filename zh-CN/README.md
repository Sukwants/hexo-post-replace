[en-US](../README.md) | zh-CN

# hexo-post-replace

一个为 Hexo 设计的插件，用于在文章中替换单词。

利用它，你可以很容易地标记你朋友的链接，而不是每次手动输入 url。

在 Hexo 配置文件里写入如下代码：

```yaml
# Post replace
post_replace:
  before:
    '@Sukwants': '[@Sukwants](https://github.com/Sukwants)'
  after:
    'hexo-post-replace': '<a href="https://github.com/Sukwants/hexo-post-replace">hexo-post-replace</a>'
```

将你想要替换的单词写在冒号之前，将你想要用于替换的单词写在冒号之后。

`before` 下的规则将在文章渲染前执行，`after` 下的规则将在文章选然后执行。
