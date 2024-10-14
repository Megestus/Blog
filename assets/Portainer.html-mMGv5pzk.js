import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as n,e as i,f as r,o as s}from"./app-Dabd4gyE.js";const l={};function d(o,e){return s(),t("div",null,[e[0]||(e[0]=n("p",null,"Portainer 是一款轻量级的应用，它提供了图形化界面，用于方便地管理Docker环境，包括单机环境和集群环境。同时非常好配置。",-1)),i(" more "),e[1]||(e[1]=r(`<h2 id="一键安装" tabindex="-1"><a class="header-anchor" href="#一键安装"><span>一键安装:</span></a></h2><p>熟悉手动配置过程可以直接执行一键安装：</p><p>复制下列代码，粘贴，执行</p><div class="language-liunx line-numbers-mode" data-highlighter="prismjs" data-ext="liunx" data-title="liunx"><pre><code><span class="line">#一键部署汉化镜像</span>
<span class="line">docker run -d --restart=always --name=&quot;portainer&quot; -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock 6053537/portainer-ce</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240131234215.png" style="width:100% !important;"></div><p>哒当当！完成🥳🥳🥳🥳</p><p>✌️</p><p>然后你就可以使用浏览器访问公网IP地址加端口号，来访问Portainer的Web界面：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">https://localhost:9000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240131234317.png" style="width:100%  !important;"></div><h2 id="手动部署过程" tabindex="-1"><a class="header-anchor" href="#手动部署过程"><span>手动部署过程:</span></a></h2><div class="hint-container tip"><p class="hint-container-title">注意</p><p>在最新的官方版本中，Portainer服务器将通过端口<code>9443</code>公开UI，并通过端口<code>8000</code>公开TCP隧道服务。 会启用到两个端口</p></div><h3 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署：</span></a></h3><p>1.确保您已经安装了 Docker。</p><p>2.使用以下命令拉取你需要的 Portainer 镜像:</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux" data-title="linux"><pre><code><span class="line">#官方镜像</span>
<span class="line">docker pull portainer/portainer</span>
<span class="line"></span>
<span class="line">#汉化镜像</span>
<span class="line">docker pull 6053537/portainer-ce</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>官方镜像地址： https://hub.docker.com/r/portainer/portainer</p></li><li><p>汉化镜像地址： https://hub.docker.com/r/6053537/portainer-ce</p></li></ul><p>3.然后创建用于存储的卷</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux" data-title="linux"><pre><code><span class="line">docker volume create portainer_data</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>4.接着运行下方命令部署portainer</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux" data-title="linux"><pre><code><span class="line">docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">官方</p><p>默认情况下，Portainer生成并使用自签名SSL证书来保护端口9443。或者，您可以在安装期间或之后通过Portainer UI提供您自己的SSL证书。</p><p>如果出于旧原因需要打开HTTP端口 <code>9000</code>，请将以下内容添加到 docker run 命令中：<br><code>-p 9000:9000</code></p></div><blockquote><p>ps💬：这里官方新加了9443端口,以及把<code>9000</code>改成了<code>8000</code>端口，我们可以保留<code>9000</code>用也是可以的，毕竟对于平常玩家来说日常就是安装一下容器。</p></blockquote><table><thead><tr><th>tag</th><th>属性</th></tr></thead><tbody><tr><td>-p 80 ：80</td><td>端口（本地：映射）</td></tr><tr><td>-name</td><td>容器名称</td></tr><tr><td>-restart=always</td><td>重启模式</td></tr><tr><td>-v ../portainer_data:/data</td><td>/映射路径:/容器空间</td></tr><tr><td>xxx/xxx : latest</td><td>选择镜像以及版本</td></tr></tbody></table><p>5.Portainer Server现已安装完毕。你可以通过运行<code>docker ps</code>来检查Portainer Server容器是否已启动。</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux" data-title="linux"><pre><code><span class="line">root@server:~# docker ps</span>
<span class="line">CONTAINER ID   IMAGE                          COMMAND                  CREATED       STATUS      PORTS                                                                                  NAMES             </span>
<span class="line">de5b28eb2fa9   portainer/portainer-ee:latest  &quot;/portainer&quot;             2 weeks ago   Up 9 days   0.0.0.0:8000-&gt;8000/tcp, :::8000-&gt;8000/tcp, 0.0.0.0:9443-&gt;9443/tcp, :::9443-&gt;9443/tcp   portainer</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录"><span>登录：</span></a></h3><p>6.运行上述命令后，你可以使用浏览器访问IP地址加端口号，来访问Portainer的Web界面：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">https://localhost:9443</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>7.在第一次访问时，您需要设置一个管理员帐户</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240131234719.png" style="width:75% !important;"></div><p>8.完成后，您将能够使用 Portainer 管理您的 Docker 容器和镜像。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240131234831.png" style="width:75% !important;"></div><h2 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作"><span>其他操作：</span></a></h2><h3 id="_1-初次登录会话超时" tabindex="-1"><a class="header-anchor" href="#_1-初次登录会话超时"><span>1. 初次登录会话超时</span></a></h3><p>初次登录提示会话超时，需要重启你的Portainer ，那么你可以执行以下代码重启</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux" data-title="linux"><pre><code><span class="line">#查询docker正在运行的容器</span>
<span class="line">docker ps</span>
<span class="line">#重启容器</span>
<span class="line">docker restart [container ID]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240131234912.png" style="width:100% !important;"></div><h3 id="_2-docker如何卸载portainer" tabindex="-1"><a class="header-anchor" href="#_2-docker如何卸载portainer"><span>2. Docker如何卸载portainer</span></a></h3><p>要卸载Portainer，可以按照以下步骤进行操作:</p><p>1.停止并删除Portainer容器</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux" data-title="linux"><pre><code><span class="line">docker stop portainer</span>
<span class="line">docker rm portainer</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.删除Portainer镜像:</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux" data-title="linux"><pre><code><span class="line">docker rm portainer/portainer</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3.删除Portainer相关的数据卷:</p><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux" data-title="linux"><pre><code><span class="line">docker volume rm portainer data</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这些步骤执行完将会完全卸载Portainer，并删除所有相关的容器、镜像和数据卷。</p><h2 id="如何使用容器部署" tabindex="-1"><a class="header-anchor" href="#如何使用容器部署"><span>如何使用容器部署</span></a></h2><p>在-容器列表中-添加容器</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240131235216.png" style="width:100% !important;"></div><p>其他高级容器设置不多解释，这个映射路径值得注意一下。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240131235430.png" style="width:100% !important;"></div><h2 id="更新portainer" tabindex="-1"><a class="header-anchor" href="#更新portainer"><span>更新Portainer</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>更新前记得备份-切记！！！ 不然你的Portainer数据会丢失。例如：stack - compose</p></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225154017.png" style="width:100% !important;"></div><p>以上信息引用-采集于：</p><p><a href="https://hub.docker.com/r/portainer/portainer" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/portainer/portainer</a><br><a href="https://hub.docker.com/r/6053537/portainer-ce" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/6053537/portainer-ce</a></p>`,57))])}const m=a(l,[["render",d],["__file","Portainer.html.vue"]]),u=JSON.parse('{"path":"/server/docker/Portainer.html","title":"Portainer","lang":"zh-CN","frontmatter":{"title":"Portainer","description":"Portainer 是一款轻量级的应用，它提供了图形化界面，用于方便地管理Docker环境，包括单机环境和集群环境。同时非常好配置。","icon":"iconfont alicon-portainer","category":"docker","tags":["docker","Portainer"],"date":"2024-02-01T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240201001730.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/server/docker/Portainer.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Portainer"}],["meta",{"property":"og:description","content":"Portainer 是一款轻量级的应用，它提供了图形化界面，用于方便地管理Docker环境，包括单机环境和集群环境。同时非常好配置。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240201001730.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240201001730.png"}],["meta",{"name":"twitter:image:alt","content":"Portainer"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"Portainer"}],["meta",{"property":"article:published_time","content":"2024-02-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Portainer\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240201001730.png\\"],\\"datePublished\\":\\"2024-02-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"一键安装:","slug":"一键安装","link":"#一键安装","children":[]},{"level":2,"title":"手动部署过程:","slug":"手动部署过程","link":"#手动部署过程","children":[{"level":3,"title":"部署：","slug":"部署","link":"#部署","children":[]},{"level":3,"title":"登录：","slug":"登录","link":"#登录","children":[]}]},{"level":2,"title":"其他操作：","slug":"其他操作","link":"#其他操作","children":[{"level":3,"title":"1. 初次登录会话超时","slug":"_1-初次登录会话超时","link":"#_1-初次登录会话超时","children":[]},{"level":3,"title":"2. Docker如何卸载portainer","slug":"_2-docker如何卸载portainer","link":"#_2-docker如何卸载portainer","children":[]}]},{"level":2,"title":"如何使用容器部署","slug":"如何使用容器部署","link":"#如何使用容器部署","children":[]},{"level":2,"title":"更新Portainer","slug":"更新portainer","link":"#更新portainer","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":3}]},"filePathRelative":"server/docker/Portainer.md","localizedDate":"2024年2月1日","excerpt":"<p>Portainer 是一款轻量级的应用，它提供了图形化界面，用于方便地管理Docker环境，包括单机环境和集群环境。同时非常好配置。</p>\\n","autoDesc":true}');export{m as comp,u as data};
