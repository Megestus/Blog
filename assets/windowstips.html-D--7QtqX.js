import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as l,a as o,w as t,d as e,f as c,r as d,o as p,e as m}from"./app-1tH4GCLc.js";const u={},h=e("p",null,"a few Windows Tips。",-1),b=c(`<p> </p><h2 id="暂停windows更新时长" tabindex="-1"><a class="header-anchor" href="#暂停windows更新时长"><span>暂停windows更新时长</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e2a4e79cf62.png" style="width:95% !important;"></div><p>打开window的cmd 控制台，执行下面这个命令, 然后再打开设置，找到暂停更新，这里就可以随意暂停多少周.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>reg add &quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\WindowsUpdate\\UX\\Settings&quot; /v FlightSettingsMaxPauseDays /t reg_dword /d 3000 /f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p> </p><h2 id="color-filters-颜色滤镜-查看明度" tabindex="-1"><a class="header-anchor" href="#color-filters-颜色滤镜-查看明度"><span>Color filters 颜色滤镜 - 查看明度</span></a></h2><p>轻松查看颜色明度，有助于日常美术工作。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e097628257e.png" style="width:95% !important;"></div><p> </p><h2 id="重启-资源管理器-bat" tabindex="-1"><a class="header-anchor" href="#重启-资源管理器-bat"><span>重启 资源管理器 bat</span></a></h2>`,11),v=e("div",{class:"language-bat line-numbers-mode","data-ext":"bat","data-title":"bat"},[e("pre",{class:"language-bat"},[e("code",null,`@echo off

title restart Explorer Sample program :)
set/p "p=restart Explorer，"<nul & pause
 
Call :_RestartExplorer
echo done！
pause
 
:: restart Explorer
goto :eof
:_RestartExplorer
(
  echo Dim arrURL^(^), strURL, oShell, oWin, n
  echo n = -1
  echo Set oShell = CreateObject^("Shell.Application"^)
  echo For Each oWin In oShell.Windows
  echo   If Instr^(1, oWin.FullName, "\\explorer.exe", vbTextCompare^) Then
  echo     n = n + 1
  echo     ReDim Preserve arrURL^(n^)
  echo     arrURL^(n^) = oWin.LocationURL
  echo   End If
  echo Next
  echo CreateObject^("WScript.Shell"^).run "tskill explorer", 0, True
  echo For Each strURL In arrURL
  echo   oShell.Explore strURL
  echo Next
)>"%temp%\\RestartExplorer.vbs"
  CScript //NoLogo "%temp%\\RestartExplorer.vbs"
  del /q /f "%temp%\\RestartExplorer.vbs"
  goto :eof

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function g(w,f){const s=d("CodeTabs");return p(),r("div",null,[h,l(" more "),b,o(s,{id:"31",data:[{id:"restartExplorer.bat"}],"tab-id":"shell"},{title0:t(({value:n,isActive:i})=>[m("restartExplorer.bat")]),tab0:t(({value:n,isActive:i})=>[v]),_:1})])}const T=a(u,[["render",g],["__file","windowstips.html.vue"]]),y=JSON.parse('{"path":"/server/app/windowstips.html","title":"WindowsTips","lang":"zh-CN","frontmatter":{"title":"WindowsTips","icon":"fa-brands fa-windows","category":"Windows","tag":["Windows"],"date":"2024-02-29T00:00:00.000Z","description":"a few Windows Tips。","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/server/app/windowstips.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"WindowsTips"}],["meta",{"property":"og:description","content":"a few Windows Tips。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T09:07:27.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:published_time","content":"2024-02-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T09:07:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WindowsTips\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-15T09:07:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"暂停windows更新时长","slug":"暂停windows更新时长","link":"#暂停windows更新时长","children":[]},{"level":2,"title":"Color filters 颜色滤镜 - 查看明度","slug":"color-filters-颜色滤镜-查看明度","link":"#color-filters-颜色滤镜-查看明度","children":[]},{"level":2,"title":"重启 资源管理器 bat","slug":"重启-资源管理器-bat","link":"#重启-资源管理器-bat","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1718442447000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":2}]},"filePathRelative":"server/app/windowstips.md","localizedDate":"2024年2月29日","excerpt":"<p>a few Windows Tips。</p>\\n","autoDesc":true}');export{T as comp,y as data};
