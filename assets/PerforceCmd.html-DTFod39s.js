import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as n,d as i,f as r,o as s}from"./app-CxROXiCJ.js";const a={},c=i("p",null,"p4命令行",-1),d=r(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#查看仓库 需要管理员权限
P4 depots

#查看仓库  需要管理员权限  已有的就打开查看属性
p4 depot 仓库名

#查看工作区
p4 clients 
#删除指定工作区 
p4 client -d test123

#指定或筛选工作区  
p4 client Administrator_WS
p4 client xxxxx  #创建工作区也是这个指令


#查看变更
p4 changes  

#设置编码格式, 如果遇到 命令中带有中文的话,设置P4COMMANDCHARSET
#linux机器还是用utf8

p4 set P4CHARSET=utf8
p4 set P4COMMANDCHARSET=cp936
p4 set P4COMMANDCHARSET=utf8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function o(l,m){return s(),t("div",null,[c,n(" more "),d])}const u=e(a,[["render",o],["__file","PerforceCmd.html.vue"]]),b=JSON.parse('{"path":"/posts/Perforce/PerforceCmd.html","title":"P4 Depot 命令行","lang":"zh-CN","frontmatter":{"title":"P4 Depot 命令行","icon":"iconfont alicon-perforce","category":["Perforce"],"tag":["Perforce"],"date":"2023-12-21T00:00:00.000Z","description":"p4命令行","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/Perforce/PerforceCmd.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"P4 Depot 命令行"}],["meta",{"property":"og:description","content":"p4命令行"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-23T14:30:16.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:published_time","content":"2023-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-23T14:30:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"P4 Depot 命令行\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-23T14:30:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[],"git":{"createdTime":1711204216000,"updatedTime":1711204216000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":1}]},"filePathRelative":"posts/Perforce/PerforceCmd.md","localizedDate":"2023年12月21日","excerpt":"<p>p4命令行</p>\\n","autoDesc":true}');export{u as comp,b as data};
