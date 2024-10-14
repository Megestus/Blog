import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as a,d as s,e as p,f as i,a as l,g as c,r as o,o as d}from"./app-Dabd4gyE.js";const m={};function h(g,e){const n=o("RouteLink");return d(),r("div",null,[e[9]||(e[9]=a("p",null,[s("记录下云服务器部署Perforce的流程"),a("br"),s(" 在以前知乎的文章中提到过使用Nas部署P4，以及Perforce的工作原理及作用。"),a("br"),a("i",{class:"fa-solid fa-cable-car"}),s(" 文章："),a("a",{href:"https://www.zhihu.com/tardis/zm/art/606970716?source_id=1005",target:"_blank",rel:"noopener noreferrer"},"从零开始在NAS上配置Perforce并启用虚幻引擎源码管理"),a("br"),s(" 那没有Nas如何快速的创建一个Perforce为团队服务呢？")],-1)),p(" more "),e[10]||(e[10]=i(`<p> </p><h2 id="购买服务器" tabindex="-1"><a class="header-anchor" href="#购买服务器"><span>购买服务器</span></a></h2><p>我这里使用的是腾讯云</p><p><a href="https://cloud.tencent.com/act/free?from=19067" target="_blank" rel="noopener noreferrer">腾讯云地址</a></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/9ecfdc66dcdee766d6297a314d98daa0.image.webp" style="width:90% !important;"></div><p>通过以上新用户福利，我们即可获得一个月免费的轻量服务器。<br> 然后我们在选择系统时，可以直接使用Docker镜像，这样就可以快速的使用到docker，不需要再去装一遍。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/180c0ea68a43c7518a4c01850e515262.clipboard-2023-10-18.webp" style="width:90% !important;"></div><p>我们在购买完服务器后-可以在邮件中得知当前服务器的账号以及登录密码。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/6ed0ea4a45366f5589597c6054d66261.clipboard-2023-10-19.webp" style="width:90% !important;"></div><p> </p><h2 id="开始部署" tabindex="-1"><a class="header-anchor" href="#开始部署"><span>开始部署</span></a></h2><p>然后我们登录此服务器</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/93da21e2caaa9adca4c819917440bfbe.clipboard-2023-10-19.webp" style="width:90% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/0ea5fb1aa5dece4f8d29f81b25e6c207.clipboard-2023-10-19.webp" style="width:90% !important;"></div><p>登录后 输入<code>sudo -i</code> 获取root权限</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/c03d4a9469ad6576c7308690160a6528.clipboard-2023-10-19.webp" style="width:80% !important;"></div><p> </p><h2 id="部署perforce" tabindex="-1"><a class="header-anchor" href="#部署perforce"><span>部署perforce</span></a></h2><h3 id="一键部署" tabindex="-1"><a class="header-anchor" href="#一键部署"><span>一键部署</span></a></h3><p>然后一键部署perforce镜像</p><p>复制下列代码，粘贴，执行</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker run -d  -p 1666:1666 -v /volume1/docker/perforce/data:/data -e P4USER:p4admin --name perforce ambakshi/perforce-server</span>
<span class="line"></span>
<span class="line">docker logs -f perforce</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/dffc4ed5eaf39b59574564049f32a357.image.webp" style="width:90% !important;"></div><p>以上我们就已经部署完成啦</p><p>我们按回车键。执行<code>docker logs -f perforce</code>获取perforce的日志，在日志里获取P4的管理员账号和密码。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/31e4ecc7f86de925883ddc6ab1e29397.image.webp" style="width:90% !important;"></div><p>当然你也可以直接复制以下默认管理员账号以及密码，进行登录。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#端口号</span>
<span class="line">P4PORT=1666</span>
<span class="line">#用户及密码</span>
<span class="line">P4USER=p4admin</span>
<span class="line">P4PASSWD=pass12349ers!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持unicode的镜像" tabindex="-1"><a class="header-anchor" href="#支持unicode的镜像"><span>支持unicode的镜像</span></a></h3><p><a href="https://github.com/hawkmoth-studio/perforce-docker" target="_blank" rel="noopener noreferrer">hawkmoth-studio/perforce-docker</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">bash -c &quot;$(curl -sSLf https://xy.ggbond.org/xy/docker_pull.sh)&quot; -s hawkmothstudio/helix-p4d:latest /volume1/docker/temp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如有需求可以替换镜像</p><p> </p><h3 id="防火墙开放-1666-8080端口" tabindex="-1"><a class="header-anchor" href="#防火墙开放-1666-8080端口"><span>防火墙开放 1666 8080端口</span></a></h3><hr><p>还需要在腾讯云服务器页面里防火墙中 开放<code>1666</code> <code>8080</code>端口 ，这样小伙伴们才能通过端口进行访问。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/c2766ff110944bc6ed07b58af1eb5ae8.image.webp" style="width:90% !important;"></div><p> </p><h2 id="安装p4v-给团队小伙伴登录" tabindex="-1"><a class="header-anchor" href="#安装p4v-给团队小伙伴登录"><span>安装P4V 给团队小伙伴登录</span></a></h2><p><a href="https://www.perforce.com/downloads/helix-visual-client-p4v" target="_blank" rel="noopener noreferrer">P4V下载地址</a></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/4dfa81522be498514ca684e195c15d71.image.webp" style="width:90% !important;"></div><p>选择适合系统的P4V-下载</p><p> </p><h3 id="p4v安装过程" tabindex="-1"><a class="header-anchor" href="#p4v安装过程"><span>P4V安装过程</span></a></h3><hr><p>这里如果执行不了下一步，可以填写你的<code>[ip]:1666</code>则可以继续下一步。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/eed1a21de36a198d1ad977c02e5101b8.image.webp" style="width:75% !important;"></div><p>无脑下一步~</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/a45b9bf8c83d41ce3d8b677190873260.image.webp" style="width:75% !important;"></div><p>输入账号密码</p><p>即可完成登录</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/08741e445fe305f48a8c260b9ef23e2c.image.webp" style="width:90% !important;"></div><p>部署完成</p><p><i class="fa-regular fa-face-smile-wink"></i></p><p> </p><h2 id="关于使用方法-或者说明" tabindex="-1"><a class="header-anchor" href="#关于使用方法-或者说明"><span>关于使用方法，或者说明</span></a></h2><p>详细使用方法-可以通过互联网查找，这对你来说应该不是什么很大的问题。<br><a href="https://www.perforce.com/manuals/p4v/Content/P4V/chapter.using.html" target="_blank" rel="noopener noreferrer">Use P4V</a><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/using-perforce-as-source-control?application_version=4.27" target="_blank" rel="noopener noreferrer">UE-向 Perforce 添加文件</a><br><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/source-control-in-unreal-engine?application_version=5.0" target="_blank" rel="noopener noreferrer">UE-源码管理</a></p><h2 id="p4-typemap-和-p4ignore" tabindex="-1"><a class="header-anchor" href="#p4-typemap-和-p4ignore"><span>P4 Typemap 和 P4ignore</span></a></h2><h3 id="p4-typemap" tabindex="-1"><a class="header-anchor" href="#p4-typemap"><span>P4 Typemap</span></a></h3><p>在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。 然后要做这件事情，需要先在命令行下设置 P4 的环境变量。</p><p>在 Perforce 中控制文件的只读和可写的形式。 然后要做这件事情，需要先在命令行下设置 P4 的环境变量。打开P4V在所在的仓库中右击选择是使用CMD命令行.</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202408241303526.png" style="width:40% !important;"></div><p>用下面的命令打开 typemap 设置。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">	p4 -P YourPassword typemap</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后将会看到一个文本窗口，这就是当前服务器的 typemap。下面是虚幻官方前用过的 typemap 示例，加入到里头保存即可</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Perforce File Type Mapping Specifications.</span>
<span class="line">#</span>
<span class="line"># TypeMap: a list of filetype mappings; one per line.</span>
<span class="line"># Each line has two elements:</span>
<span class="line">#</span>
<span class="line"># Filetype: The filetype to use on &#39;p4 add&#39;.</span>
<span class="line">#</span>
<span class="line"># Path: File pattern which will use this filetype.</span>
<span class="line">#</span>
<span class="line"># See &#39;p4 help typemap&#39; for more information.</span>
<span class="line"></span>
<span class="line">TypeMap:</span>
<span class="line">	binary+w //depot/....exe</span>
<span class="line">	binary+w //depot/....dll</span>
<span class="line">	binary+w //depot/....lib</span>
<span class="line">	binary+w //depot/....app</span>
<span class="line">	binary+w //depot/....dylib</span>
<span class="line">	binary+w //depot/....stub</span>
<span class="line">	binary+w //depot/....ipa</span>
<span class="line">	binary //depot/....bmp</span>
<span class="line">	text //depot/....ini</span>
<span class="line">	text //depot/....config</span>
<span class="line">	text //depot/....cpp</span>
<span class="line">	text //depot/....h</span>
<span class="line">	text //depot/....c</span>
<span class="line">	text //depot/....cs</span>
<span class="line">	text //depot/....m</span>
<span class="line">	text //depot/....mm</span>
<span class="line">	text //depot/....py</span>
<span class="line">	binary+l //depot/....uasset</span>
<span class="line">	binary+l //depot/....umap</span>
<span class="line">	binary+l //depot/....upk</span>
<span class="line">	binary+l //depot/....udk</span>
<span class="line">	binary+l //depot/....ubulk</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成编辑后，点击键盘上的 Ctrl+S 保存并退出。命令行应该会提示 Typemap saved。</p><h3 id="p4-ignore" tabindex="-1"><a class="header-anchor" href="#p4-ignore"><span>P4 ignore</span></a></h3>`,68)),a("p",null,[e[1]||(e[1]=s("值得注意的是我们设置引擎上传的文件需要添加过滤，不然什么文件都会上传到引擎上，会造成一些不必要产生的问题。")),e[2]||(e[2]=a("br",null,null,-1)),e[3]||(e[3]=s(" 可以通过")),l(n,{to:"/posts/Perforce/P4ignore.html"},{default:c(()=>e[0]||(e[0]=[s("P4ignore")])),_:1}),e[4]||(e[4]=s("进行设置，")),e[5]||(e[5]=a("br",null,null,-1)),e[6]||(e[6]=s(" 或者使用官方推荐的方式直接设置")),e[7]||(e[7]=a("a",{href:"https://www.perforce.com/manuals/p4v/Content/P4V/ignore-files.html",target:"_blank",rel:"noopener noreferrer"},"设置和创建忽略文件 P4 ignore 文档",-1)),e[8]||(e[8]=s("。"))]),e[11]||(e[11]=i('<p> </p><h2 id="ue5-源码连接" tabindex="-1"><a class="header-anchor" href="#ue5-源码连接"><span>UE5 源码连接</span></a></h2><p>步骤：</p><ul><li>在启动引擎后在界面右下角</li><li>点击版本控制-连接到版本控制</li><li>选择提供方为Perforce</li><li>然后选择可以用工作区</li><li>接受设置</li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/UESourcelink.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/UESourcelink2.png" style="width:60% !important;"></div><div class="hint-container info"><p class="hint-container-title">这个连接源码前，需要登录P4V</p></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/UESourcelink3.png" style="width:60% !important;"></div><p>使用和P4类似， 不过多说明。</p>',9))])}const b=t(m,[["render",h],["__file","PerforceSet.html.vue"]]),f=JSON.parse('{"path":"/posts/Perforce/PerforceSet.html","title":"UE5+Perforce+腾讯云版本控制搭建流程与工作流程","lang":"zh-CN","frontmatter":{"title":"UE5+Perforce+腾讯云版本控制搭建流程与工作流程","icon":"iconfont alicon-perforce","category":["Perforce"],"tags":["Perforce","Cloud sever","Teams","UE5"],"date":"2023-12-20T00:00:00.000Z","star":5,"cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/p4nas.png","description":"记录下云服务器部署Perforce的流程 在以前知乎的文章中提到过使用Nas部署P4，以及Perforce的工作原理及作用。 文章：从零开始在NAS上配置Perforce并启用虚幻引擎源码管理 那没有Nas如何快速的创建一个Perforce为团队服务呢？","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/Perforce/PerforceSet.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"UE5+Perforce+腾讯云版本控制搭建流程与工作流程"}],["meta",{"property":"og:description","content":"记录下云服务器部署Perforce的流程 在以前知乎的文章中提到过使用Nas部署P4，以及Perforce的工作原理及作用。 文章：从零开始在NAS上配置Perforce并启用虚幻引擎源码管理 那没有Nas如何快速的创建一个Perforce为团队服务呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/p4nas.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T00:49:56.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/p4nas.png"}],["meta",{"name":"twitter:image:alt","content":"UE5+Perforce+腾讯云版本控制搭建流程与工作流程"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:tag","content":"Cloud sever"}],["meta",{"property":"article:tag","content":"Teams"}],["meta",{"property":"article:tag","content":"UE5"}],["meta",{"property":"article:published_time","content":"2023-12-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-02T00:49:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UE5+Perforce+腾讯云版本控制搭建流程与工作流程\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/p4nas.png\\"],\\"datePublished\\":\\"2023-12-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-02T00:49:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"购买服务器","slug":"购买服务器","link":"#购买服务器","children":[]},{"level":2,"title":"开始部署","slug":"开始部署","link":"#开始部署","children":[]},{"level":2,"title":"部署perforce","slug":"部署perforce","link":"#部署perforce","children":[{"level":3,"title":"一键部署","slug":"一键部署","link":"#一键部署","children":[]},{"level":3,"title":"支持unicode的镜像","slug":"支持unicode的镜像","link":"#支持unicode的镜像","children":[]},{"level":3,"title":"防火墙开放 1666  8080端口","slug":"防火墙开放-1666-8080端口","link":"#防火墙开放-1666-8080端口","children":[]}]},{"level":2,"title":"安装P4V 给团队小伙伴登录","slug":"安装p4v-给团队小伙伴登录","link":"#安装p4v-给团队小伙伴登录","children":[{"level":3,"title":"P4V安装过程","slug":"p4v安装过程","link":"#p4v安装过程","children":[]}]},{"level":2,"title":"关于使用方法，或者说明","slug":"关于使用方法-或者说明","link":"#关于使用方法-或者说明","children":[]},{"level":2,"title":"P4 Typemap 和 P4ignore","slug":"p4-typemap-和-p4ignore","link":"#p4-typemap-和-p4ignore","children":[{"level":3,"title":"P4 Typemap","slug":"p4-typemap","link":"#p4-typemap","children":[]},{"level":3,"title":"P4 ignore","slug":"p4-ignore","link":"#p4-ignore","children":[]}]},{"level":2,"title":"UE5 源码连接","slug":"ue5-源码连接","link":"#ue5-源码连接","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1725238196000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":5},{"name":"Megestus","email":"2624203622@qq.com","commits":4}]},"filePathRelative":"posts/Perforce/PerforceSet.md","localizedDate":"2023年12月20日","excerpt":"<p>记录下云服务器部署Perforce的流程<br>\\n在以前知乎的文章中提到过使用Nas部署P4，以及Perforce的工作原理及作用。<br>\\n<i class=\\"fa-solid fa-cable-car\\"></i> 文章：<a href=\\"https://www.zhihu.com/tardis/zm/art/606970716?source_id=1005\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">从零开始在NAS上配置Perforce并启用虚幻引擎源码管理</a><br>\\n那没有Nas如何快速的创建一个Perforce为团队服务呢？</p>\\n","autoDesc":true}');export{b as comp,f as data};
