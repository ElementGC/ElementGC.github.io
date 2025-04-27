# ELement——GC的个人博客仓库

### 分支-main

目前只有一个README，用来帮自己弄懂这个是拿来干嘛的

### hexo

在我们的博客设置文件中，我们设置了

```
deploy:
  type: 'git'
  repository: git@github.com:ElementGC/ElementGC.github.io.git
  branch: hexo
```

这一设置让我们能够将本地静态网站布置好` hexo g`之后将网站结果保存到对应github仓库的分支`hexo`中，也就是说，其实github加载的网站就是从hexo分支中弄出来的

### 私人仓库

这是我为了保险起见加的，毕竟说不定什么时候一不小心本地仓库没了都有可能，所以我把原本的配置文件也打包好放上来，实现理论上来说只要安装好`git`和`hexo`就可以直接从网上拉取这个包然后一个	`hexo g  && hexo s`直接也实现本地配置网页，然后好接着改，所以这玩意得及时更新

### 博客地址
https://elementgc.github.io/
