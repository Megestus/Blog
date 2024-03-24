import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c as o,b as c,a as u,w as s,d as e,e as t,f as d}from"./app-C-b6Dbk0.js";const m={},h=e("p",null,"Vuepress DeBug 记录一些踩过的坑",-1),g=e("h2",{id:"error-command-pnpm-recursive-install-cwd-undefined-exits-with-status-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error-command-pnpm-recursive-install-cwd-undefined-exits-with-status-1"},[e("span",null,"Error: Command pnpm recursive install (cwd: undefined) exits with status 1")])],-1),v=e("p",null,[t("在github构建时 提示以上报错检查一下安装依赖 "),e("code",null,"pnpm-lock.yaml"),e("br"),t(" 这里是我删除了"),e("code",null,"@vuepress/plugin-shiki"),t("插件 没有在安装依赖中移除。")],-1),b=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`Run pnpm/action-setup@v2
Running self-installer...
Installation Completed!
Running pnpm recursive install...
  undefined
   ERR_PNPM_OUTDATED_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with package.json
  
  Note that in CI environments this setting is true by default. If you still need to run install in such cases, use "pnpm install --no-frozen-lockfile"
  
      Failure reason:
      specifiers in the lockfile ({"@vuepress/client":"2.0.0-rc.0","@vuepress/plugin-search":"2.0.0-rc.0","@vuepress/plugin-shiki":"2.0.0-rc.17","vue":"^3.4.3","vuepress":"2.0.0-rc.0","vuepress-plugin-search-pro":"2.0.0-rc.11","vuepress-theme-hope":"2.0.0-rc.11"}) don't match specs in package.json ({"@vuepress/client":"2.0.0-rc.0","@vuepress/plugin-search":"2.0.0-rc.0","vue":"^3.4.3","vuepress":"2.0.0-rc.0","vuepress-plugin-search-pro":"2.0.0-rc.11","vuepress-theme-hope":"2.0.0-rc.11"})  

Error: Command pnpm recursive install (cwd: undefined) exits with status 1  

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=d('<h2 id="本地打包之后出现样式无法加载问题" tabindex="-1"><a class="header-anchor" href="#本地打包之后出现样式无法加载问题"><span><strong>本地打包之后出现样式无法加载问题</strong></span></a></h2><p>打包之后就完全乱了,如下：</p><div class="image-preview"><img src="https://sky.megestu.top/i/12024/20240215160617.png" style="width:80% !important;"></div><p>通过更改indexn.html的内容。 把/修改为./ 部分样式就发现了恢复</p><p>就可以判断出是打包的时候全部是绝对路径，应该是相对路径的。</p><div class="image-preview"><img src="https://sky.megestu.top/i/12024/20240215161339.png" style="width:80% !important;"></div><p>决绝方案： 把config里面的base配置，直接删掉，或注释。然后再次打包会解决样式丢失的问题。</p><div class="image-preview"><img src="https://sky.megestu.top/i/12024/20240215161040.png" style="width:80% !important;"></div><p> </p>',9);function y(_,w){const n=p("CodeTabs");return l(),o("div",null,[h,c(" more "),g,v,u(n,{id:"10",data:[{id:"pnpm-lock.yaml"}]},{title0:s(({value:i,isActive:r})=>[t("pnpm-lock.yaml")]),tab0:s(({value:i,isActive:r})=>[b]),_:1},8,["data"]),f])}const C=a(m,[["render",y],["__file","vuepressdebug.html.vue"]]),V=JSON.parse('{"path":"/demo/vuepress/vuepressdebug.html","title":"Vuepress DeBug","lang":"zh-CN","frontmatter":{"title":"Vuepress DeBug","icon":"fa-brands fa-vuejs","color":"red","order":21,"article":false,"date":"2024-02-26T00:00:00.000Z","category":["Vuepress"],"tag":["Github","DeBug","Vuepress"],"description":"Vuepress DeBug 记录一些踩过的坑 Error: Command pnpm recursive install (cwd: undefined) exits with status 1 在github构建时 提示以上报错检查一下安装依赖 pnpm-lock.yaml 这里是我删除了@vuepress/plugin-shiki插件 没有在安装...","head":[["meta",{"property":"og:url","content":"https://megestus.top/blog/demo/vuepress/vuepressdebug.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Vuepress DeBug"}],["meta",{"property":"og:description","content":"Vuepress DeBug 记录一些踩过的坑 Error: Command pnpm recursive install (cwd: undefined) exits with status 1 在github构建时 提示以上报错检查一下安装依赖 pnpm-lock.yaml 这里是我删除了@vuepress/plugin-shiki插件 没有在安装..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-23T14:30:16.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"Github"}],["meta",{"property":"article:tag","content":"DeBug"}],["meta",{"property":"article:tag","content":"Vuepress"}],["meta",{"property":"article:published_time","content":"2024-02-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-23T14:30:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Vuepress DeBug\\",\\"description\\":\\"Vuepress DeBug 记录一些踩过的坑 Error: Command pnpm recursive install (cwd: undefined) exits with status 1 在github构建时 提示以上报错检查一下安装依赖 pnpm-lock.yaml 这里是我删除了@vuepress/plugin-shiki插件 没有在安装...\\"}"]]},"headers":[{"level":2,"title":"Error: Command pnpm recursive install (cwd: undefined) exits with status 1","slug":"error-command-pnpm-recursive-install-cwd-undefined-exits-with-status-1","link":"#error-command-pnpm-recursive-install-cwd-undefined-exits-with-status-1","children":[]},{"level":2,"title":"本地打包之后出现样式无法加载问题","slug":"本地打包之后出现样式无法加载问题","link":"#本地打包之后出现样式无法加载问题","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1711204216000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":1}]},"filePathRelative":"demo/vuepress/vuepressdebug.md","localizedDate":"2024年2月26日","excerpt":"<p>Vuepress DeBug 记录一些踩过的坑</p>\\n","autoDesc":true}');export{C as comp,V as data};