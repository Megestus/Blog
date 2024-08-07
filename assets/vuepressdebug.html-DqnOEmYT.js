import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as d,a as c,w as s,d as e,f as n,r as o,o as p,e as u}from"./app-CyftxgSE.js";const m={},v=e("p",null,"Vuepress DeBug 记录一些踩过的坑",-1),g=n(`<h2 id="vuepress-vite-js-的模块丢失" tabindex="-1"><a class="header-anchor" href="#vuepress-vite-js-的模块丢失"><span>vuepress-vite.js 的模块丢失</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>PS W:\\GitHub\\blog&gt; npm run docs:dev
Debugger attached.

&gt; vuepress-theme-hope-template@2.0.0 docs:dev
&gt; vuepress-vite dev src

Debugger attached.
Waiting for the debugger to disconnect...
node:internal/modules/cjs/loader:1051
  throw err;
  ^

Error: Cannot find module &#39;W:\\GitHub\\blog\\node_modules\\vuepress\\bin\\vuepress-vite.js&#39;
    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)
    at Module._load (node:internal/modules/cjs/loader:901:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47 {
  code: &#39;MODULE_NOT_FOUND&#39;,
  requireStack: []
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该错误指示 Node.js 无法找到名为 <code>vuepress-vite.js</code> 的模块。</p><p>一般都是拷贝了文件到别的目录 导致丢失的，如 需要迁移仓库。</p><h4 id="决绝方案" tabindex="-1"><a class="header-anchor" href="#决绝方案"><span>决绝方案</span></a></h4><p>cmd重新安装依赖包即可 ，如果安装不了则可以看下方 <code>运行npm install卡住不动的解决方案</code></p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p> </p><h2 id="error-command-pnpm-recursive-install-cwd-undefined-exits-with-status-1" tabindex="-1"><a class="header-anchor" href="#error-command-pnpm-recursive-install-cwd-undefined-exits-with-status-1"><span>Error: Command pnpm recursive install (cwd: undefined) exits with status 1</span></a></h2><p>在github构建时 提示以上报错检查一下安装依赖 <code>pnpm-lock.yaml</code><br> 这里是我删除了<code>@vuepress/plugin-shiki</code>插件 没有在安装依赖中移除。</p>`,10),h=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`Run pnpm/action-setup@v2
Running self-installer...
Installation Completed!
Running pnpm recursive install...
  undefined
   ERR_PNPM_OUTDATED_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with package.json
  
  Note that in CI environments this setting is true by default. If you still need to run install in such cases, use "pnpm install --no-frozen-lockfile"
  
      Failure reason:
      specifiers in the lockfile ({"@vuepress/client":"2.0.0-rc.0","@vuepress/plugin-search":"2.0.0-rc.0","@vuepress/plugin-shiki":"2.0.0-rc.17","vue":"^3.4.3","vuepress":"2.0.0-rc.0","vuepress-plugin-search-pro":"2.0.0-rc.11","vuepress-theme-hope":"2.0.0-rc.11"}) don't match specs in package.json ({"@vuepress/client":"2.0.0-rc.0","@vuepress/plugin-search":"2.0.0-rc.0","vue":"^3.4.3","vuepress":"2.0.0-rc.0","vuepress-plugin-search-pro":"2.0.0-rc.11","vuepress-theme-hope":"2.0.0-rc.11"})  

Error: Command pnpm recursive install (cwd: undefined) exits with status 1  

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=n(`<p> </p><h2 id="本地构建静态文件之后出现样式无法加载问题" tabindex="-1"><a class="header-anchor" href="#本地构建静态文件之后出现样式无法加载问题"><span><strong>本地构建静态文件之后出现样式无法加载问题</strong></span></a></h2><p>构建静态文件之后就完全乱了,如下：</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240215160617.png" style="width:80% !important;"></div><p>通过更改indexn.html的内容。 把/修改为./ 部分样式就发现了恢复</p><p>就可以判断出是构建静态文件的时候全部是绝对路径，应该是相对路径的。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240215161339.png" style="width:80% !important;"></div><p>决绝方案： 把config里面的base配置，直接删掉，或注释。然后再次构建静态文件会解决样式丢失的问题。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240215161040.png" style="width:80% !important;"></div><p> </p><h2 id="运行npm-install卡住不动的解决方案" tabindex="-1"><a class="header-anchor" href="#运行npm-install卡住不动的解决方案"><span>运行npm install卡住不动的解决方案</span></a></h2><h4 id="_1-首先检查npm代理-是否已经使用国内镜像" tabindex="-1"><a class="header-anchor" href="#_1-首先检查npm代理-是否已经使用国内镜像"><span>1.首先检查npm代理，是否已经使用国内镜像</span></a></h4><p>执行以下命令查看是否为国内镜像</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回是 <code>https://registry.npmjs.org/</code> 则是原地址;<br> 出现<code>https://registry.npmmirror.com</code>，表明已经为国内镜像无需再修改.</p><p>如果不是则换成国内镜像，执行以下命令</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm config set registry=https://registry.npmmirror.com 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行以下命令查看是否配置成功</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-删除node-modules重新npm-install" tabindex="-1"><a class="header-anchor" href="#_2-删除node-modules重新npm-install"><span>2.删除node_modules重新npm install</span></a></h4><p> </p>`,21);function x(f,_){const t=o("CodeTabs");return p(),l("div",null,[v,d(" more "),g,c(t,{id:"30",data:[{id:"pnpm-lock.yaml"}]},{title0:s(({value:i,isActive:a})=>[u("pnpm-lock.yaml")]),tab0:s(({value:i,isActive:a})=>[h]),_:1}),b])}const D=r(m,[["render",x],["__file","vuepressdebug.html.vue"]]),k=JSON.parse('{"path":"/demo/vuepress/vuepressdebug.html","title":"Vuepress DeBug","lang":"zh-CN","frontmatter":{"title":"Vuepress DeBug","icon":"fa-brands fa-vuejs","color":"red","order":21,"article":false,"date":"2024-02-26T00:00:00.000Z","category":["Vuepress"],"tags":["Github","DeBug","Vuepress"],"description":"Vuepress DeBug 记录一些踩过的坑","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/demo/vuepress/vuepressdebug.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Vuepress DeBug"}],["meta",{"property":"og:description","content":"Vuepress DeBug 记录一些踩过的坑"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"Github"}],["meta",{"property":"article:tag","content":"DeBug"}],["meta",{"property":"article:tag","content":"Vuepress"}],["meta",{"property":"article:published_time","content":"2024-02-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Vuepress DeBug\\",\\"description\\":\\"Vuepress DeBug 记录一些踩过的坑\\"}"]]},"headers":[{"level":2,"title":"vuepress-vite.js 的模块丢失","slug":"vuepress-vite-js-的模块丢失","link":"#vuepress-vite-js-的模块丢失","children":[]},{"level":2,"title":"Error: Command pnpm recursive install (cwd: undefined) exits with status 1","slug":"error-command-pnpm-recursive-install-cwd-undefined-exits-with-status-1","link":"#error-command-pnpm-recursive-install-cwd-undefined-exits-with-status-1","children":[]},{"level":2,"title":"本地构建静态文件之后出现样式无法加载问题","slug":"本地构建静态文件之后出现样式无法加载问题","link":"#本地构建静态文件之后出现样式无法加载问题","children":[]},{"level":2,"title":"运行npm install卡住不动的解决方案","slug":"运行npm-install卡住不动的解决方案","link":"#运行npm-install卡住不动的解决方案","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":6}]},"filePathRelative":"demo/vuepress/vuepressdebug.md","localizedDate":"2024年2月26日","excerpt":"<p>Vuepress DeBug 记录一些踩过的坑</p>\\n","autoDesc":true}');export{D as comp,k as data};