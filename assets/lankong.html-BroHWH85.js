import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as s,d as t,a as n,g as i,e as p,f as l,r as d,o as c}from"./app-DJGYRO-r.js";const m={};function u(g,e){const a=d("RouteLink");return c(),r("div",null,[s("p",null,[e[1]||(e[1]=t("先前")),n(a,{to:"/server/app/gallery.html"},{default:i(()=>e[0]||(e[0]=[t("GitHub+PicGo+CDN 搭建图床")])),_:1}),e[2]||(e[2]=t("有提到使用github存储图片然后用开源CDN分发，")),e[3]||(e[3]=s("br",null,null,-1)),e[4]||(e[4]=t(" 但访问还是有所缓慢，甚至访问不了。"))]),e[7]||(e[7]=s("p",null,[s("a",{href:"https://www.lsky.pro/",target:"_blank",rel:"noopener noreferrer"},"兰空图床"),t(" - 开源版本： "),s("a",{href:"https://github.com/lsky-org/lsky-pro",target:"_blank",rel:"noopener noreferrer"},"https://github.com/lsky-org/lsky-pro"),s("br"),t(" 界面美观、操作简单，也没有那些让人困惑的操作或功能，数据还能在自己的服务器上。")],-1)),e[8]||(e[8]=s("p",null,[s("a",{href:"https://piclist.cn/",target:"_blank",rel:"noopener noreferrer"},"PicList"),t("是一款高效的云存储和图床平台管理工具，在PicGo的基础上经过深度的二次开发，不仅完整保留了PicGo的所有功能，还增添了许多新的feature。例如相册支持同步云端删除文件，内置图床额外添加了WebDav、本地图床和SFTP等。配置文件云存储。PicList同时增加了完整的云存储管理功能，包括云端目录查看、文件搜索、批量上传下载和删除文件，复制多种格式文件链接和图片/markdown/文本/视频预览等，另外还有更加强大的相册和多项功能新增或优化。")],-1)),p(" more "),e[9]||(e[9]=l(`<h2 id="docker-部署" tabindex="-1"><a class="header-anchor" href="#docker-部署"><span>docker 部署</span></a></h2><p>登陆nas 然后pull容器</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker pull halcyonazure/lsky-pro-docker:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>看compose的环境变量需要配置MYSQL数据库-可以根据这篇</p>`,4)),s("ul",null,[s("li",null,[n(a,{to:"/server/docker/mariadb.html#%E5%88%9B%E5%BB%BA%E6%95%B0%E6%8D%AE%E5%BA%93"},{default:i(()=>e[5]||(e[5]=[t("MariaDB数据库+Adminer轻量数据库管理工具")])),_:1}),e[6]||(e[6]=t(" - 进行配置"))])]),e[10]||(e[10]=l(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">version: &#39;3&#39;</span>
<span class="line">services:</span>
<span class="line">    lsky-pro:</span>
<span class="line">        container_name: lsky-pro</span>
<span class="line">        image: dko0/lsky-pro</span>
<span class="line">        restart: always</span>
<span class="line">        volumes:</span>
<span class="line">            - /home/data/lsky-pro/lsky-pro-data:/var/www/html</span>
<span class="line">            - /home/lsky_pro/php_config/upload.ini:/usr/local/etc/php/conf.d/upload.ini:ro</span>
<span class="line">        ports:</span>
<span class="line">            - 8888:80</span>
<span class="line">        environment:</span>
<span class="line">            - MYSQL_HOST=mysql</span>
<span class="line">            - MYSQL_DATABASE=lsky-pro</span>
<span class="line">            - MYSQL_USER=lsky-pro</span>
<span class="line">            - MYSQL_PASSWORD=lsky-pro</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="兰空配置" tabindex="-1"><a class="header-anchor" href="#兰空配置"><span>兰空配置</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65dcac913362e.png" style="width:95% !important;"></div><h3 id="获取token" tabindex="-1"><a class="header-anchor" href="#获取token"><span>获取token</span></a></h3><p>2.0的兰空图床不在直接显示token了，所以我们要自己获取一下token。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65dcad1a29ce1.png" style="width:95% !important;"></div><p>按照后台给的教程，我们直接去post一下，google或者百度一下就能找到很多支持在线post的网站。</p><ul><li><p>post的地址是 <code>https://你的网站/api/v1/tokens</code></p></li><li><p>参数就是<code>email</code>和<code>password</code>两个常规参数，直接post。</p></li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65dcad8726508.png" style="width:75% !important;"></div><p>得到Token后就到Picgo里设置配置</p><h2 id="piclist设置" tabindex="-1"><a class="header-anchor" href="#piclist设置"><span>Piclist设置</span></a></h2><p>支持的图床：</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e083da52497.png" style="width:45% !important;"></div><p>然后在图床设置中，设置兰空图床的参数。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e0843732b0c.png" style="width:75% !important;"></div><p>其中，版本设置为V2。<br> 主机为你的兰空图床站点，注意不要/结尾。</p><p>auth token为 <code>Bearer </code>+ <code>token</code>。<br> 举例为： <code>Bearer 1|NutA6qdfsawfgtqwxxxxxxxxxxxxxxxxxx</code> 注意bearer和token中间有空格。</p><p>然后其他的参数可以根据插件readme来进行设置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&quot;lskyplist&quot;: {</span>
<span class="line">  &quot;_configName&quot;: &quot;lankong&quot;,</span>
<span class="line">  &quot;version&quot;: &quot;V2&quot;,</span>
<span class="line">  &quot;host&quot;: &quot;https://www.megestu.top&quot;,</span>
<span class="line">  &quot;token&quot;: &quot;Bearer 1|TSXasdasdsadadsadsadadadadad&quot;,</span>
<span class="line">  &quot;strategyId&quot;: &quot;1&quot;,</span>
<span class="line">  &quot;permission&quot;: &quot;private(default)&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscode-设置" tabindex="-1"><a class="header-anchor" href="#vscode-设置"><span>VsCode 设置</span></a></h3><p>兰空图床可以直接在VSCode拓展中安装</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65dcb216464eb.png" style="width:75% !important;"></div><p>具体配置和上方差不多-也是获取token 和 写URL</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65de094f1201b.png" style="width:75% !important;"></div><blockquote><p>值得注意的是 URL 貌似少了个 <code>/i/</code></p></blockquote><h4 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h4><p>鼠标右键 或 快捷键</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65de0a2862df3.png" style="width:55% !important;"></div><blockquote><p>有时候上传报错-请检查VPN等代理相关网络工具、或则粘贴板图片没有。</p></blockquote><h4 id="图片实际存储位置" tabindex="-1"><a class="header-anchor" href="#图片实际存储位置"><span>图片实际存储位置</span></a></h4><blockquote><p>Docker/LskyPro/Lsky-pro-data/storage/app</p></blockquote>`,31))])}const b=o(m,[["render",u],["__file","lankong.html.vue"]]),k=JSON.parse('{"path":"/server/app/lankong.html","title":"Lankong图床+Piclist","lang":"zh-CN","frontmatter":{"title":"Lankong图床+Piclist","icon":"iconfont alicon-lankong3","category":"图床","tags":["lsky","Cloud sever","gallery"],"date":"2024-02-27T00:00:00.000Z","description":"先前GitHub+PicGo+CDN 搭建图床有提到使用github存储图片然后用开源CDN分发， 但访问还是有所缓慢，甚至访问不了。 兰空图床 - 开源版本： https://github.com/lsky-org/lsky-pro 界面美观、操作简单，也没有那些让人困惑的操作或功能，数据还能在自己的服务器上。 PicList是一款高效的云存储和图床...","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/server/app/lankong.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Lankong图床+Piclist"}],["meta",{"property":"og:description","content":"先前GitHub+PicGo+CDN 搭建图床有提到使用github存储图片然后用开源CDN分发， 但访问还是有所缓慢，甚至访问不了。 兰空图床 - 开源版本： https://github.com/lsky-org/lsky-pro 界面美观、操作简单，也没有那些让人困惑的操作或功能，数据还能在自己的服务器上。 PicList是一款高效的云存储和图床..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"property":"article:tag","content":"lsky"}],["meta",{"property":"article:tag","content":"Cloud sever"}],["meta",{"property":"article:tag","content":"gallery"}],["meta",{"property":"article:published_time","content":"2024-02-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lankong图床+Piclist\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"docker 部署","slug":"docker-部署","link":"#docker-部署","children":[]},{"level":2,"title":"兰空配置","slug":"兰空配置","link":"#兰空配置","children":[{"level":3,"title":"获取token","slug":"获取token","link":"#获取token","children":[]}]},{"level":2,"title":"Piclist设置","slug":"piclist设置","link":"#piclist设置","children":[{"level":3,"title":"VsCode 设置","slug":"vscode-设置","link":"#vscode-设置","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":4}]},"filePathRelative":"server/app/lankong.md","localizedDate":"2024年2月27日","excerpt":"<p>先前<a href=\\"/blog/server/app/gallery.html\\" target=\\"_blank\\">GitHub+PicGo+CDN 搭建图床</a>有提到使用github存储图片然后用开源CDN分发，<br>\\n但访问还是有所缓慢，甚至访问不了。</p>\\n<p><a href=\\"https://www.lsky.pro/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">兰空图床</a>  - 开源版本： <a href=\\"https://github.com/lsky-org/lsky-pro\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/lsky-org/lsky-pro</a><br>\\n界面美观、操作简单，也没有那些让人困惑的操作或功能，数据还能在自己的服务器上。</p>\\n<p><a href=\\"https://piclist.cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PicList</a>是一款高效的云存储和图床平台管理工具，在PicGo的基础上经过深度的二次开发，不仅完整保留了PicGo的所有功能，还增添了许多新的feature。例如相册支持同步云端删除文件，内置图床额外添加了WebDav、本地图床和SFTP等。配置文件云存储。PicList同时增加了完整的云存储管理功能，包括云端目录查看、文件搜索、批量上传下载和删除文件，复制多种格式文件链接和图片/markdown/文本/视频预览等，另外还有更加强大的相册和多项功能新增或优化。</p>\\n","autoDesc":true}');export{b as comp,k as data};