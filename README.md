en-US | [zh-CN](./zh-CN/README.md)

# hexo-post-replace

A plugin for Hexo, which helps to replace words in the posts.

You can easily use it to mark the links of your friends, instead of typing the url every time.

Write in the Hexo config file like the following codes:

```yaml
# Post replace
post_replace:
  before:
    '@Sukwants': '[@Sukwants](https://github.com/Sukwants)'
  after:
    'hexo-post-replace': '<a href="https://github.com/Sukwants/hexo-post-replace">hexo-post-replace</a>'
```

Write the word you want to replace before the colon. Write the word you want to replace with after the colon.

The rules under `before` will be used before post rendered. The rules under `after` will be used after post rendered.
