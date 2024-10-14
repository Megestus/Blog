import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as a,e as i,f as l,o as p}from"./app-Dabd4gyE.js";const d={};function c(t,s){return p(),e("div",null,[s[0]||(s[0]=a("p",null,"a few Windows Tips。",-1)),i(" more "),s[1]||(s[1]=l(`<p> </p><h2 id="暂停windows更新时长" tabindex="-1"><a class="header-anchor" href="#暂停windows更新时长"><span>暂停windows更新时长</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e2a4e79cf62.png" style="width:95% !important;"></div><p>打开window的cmd 控制台，执行下面这个命令, 然后再打开设置，找到暂停更新，这里就可以随意暂停多少周.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">reg add &quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\WindowsUpdate\\UX\\Settings&quot; /v FlightSettingsMaxPauseDays /t reg_dword /d 3000 /f</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p> </p><h2 id="color-filters-颜色滤镜-查看明度" tabindex="-1"><a class="header-anchor" href="#color-filters-颜色滤镜-查看明度"><span>Color filters 颜色滤镜 - 查看明度</span></a></h2><p>轻松查看颜色明度，有助于日常美术工作。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e097628257e.png" style="width:95% !important;"></div><p> </p><h2 id="重启-资源管理器-bat" tabindex="-1"><a class="header-anchor" href="#重启-资源管理器-bat"><span>重启 资源管理器 bat</span></a></h2><p>::: code-tabs#shell</p><p>@tab restartExplorer.bat</p><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd" data-title="cmd"><pre><code><span class="line">@echo off</span>
<span class="line">chcp 65001 &gt;nul</span>
<span class="line"></span>
<span class="line">echo 正在关闭资源管理器...</span>
<span class="line">taskkill /f /im explorer.exe &gt;nul</span>
<span class="line"></span>
<span class="line">echo 正在重新启动资源管理器...</span>
<span class="line">start explorer.exe</span>
<span class="line"></span>
<span class="line">echo 操作完成。5秒后退出...</span>
<span class="line"></span>
<span class="line">for /L %%i in (5,-1,1) do (</span>
<span class="line">    echo 倒计时 %%i 秒...</span>
<span class="line">    timeout /t 1 &gt;nul</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">exit</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p> </p><h2 id="选择启动程序-bat" tabindex="-1"><a class="header-anchor" href="#选择启动程序-bat"><span>选择启动程序 bat</span></a></h2><p>::: code-tabs#shell</p><p>@tab SelectStart.bat</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">@echo off</span>
<span class="line"></span>
<span class="line">chcp 65001 &gt;nul 2&gt;&amp;1</span>
<span class="line"></span>
<span class="line">:title</span>
<span class="line">cls</span>
<span class="line">echo 请选择要启动的程序:</span>
<span class="line">echo.</span>
<span class="line">echo 1) 程序1⭐ </span>
<span class="line">echo 2) 程序2⭐</span>
<span class="line">echo 3) 退出</span>
<span class="line">echo.</span>
<span class="line">set /p choice=请输入数字(1-3): </span>
<span class="line"></span>
<span class="line">REM 检查选择的有效性</span>
<span class="line">if not defined choice (</span>
<span class="line">    echo 无效的选择！请重新输入。</span>
<span class="line">    goto title</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">if %choice%==1 (</span>
<span class="line">    pushd &quot;G:\\Program Files\\&quot;</span>
<span class="line">    start &quot;&quot; &quot;程序1.exe&quot;</span>
<span class="line">) else if %choice%==2 (</span>
<span class="line">    pushd &quot;G:\\Program Files\\&quot;</span>
<span class="line">    start &quot;&quot; &quot;程序2.exe&quot;</span>
<span class="line">) else if %choice%==3 (</span>
<span class="line">    echo 退出程序...</span>
<span class="line">    exit</span>
<span class="line">) else (</span>
<span class="line">    echo 无效的选择！请重新输入。</span>
<span class="line">    timeout /t 3 /nobreak &gt;nul</span>
<span class="line">    goto title</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">REM 等待0.5秒</span>
<span class="line">(</span>
<span class="line">    ping -n 1 localhost &gt;nul</span>
<span class="line">    echo 程序已启动。</span>
<span class="line">) &amp; timeout /t 1 /nobreak &gt;nul</span>
<span class="line"></span>
<span class="line">REM 显示启动消息后立即退出</span>
<span class="line">exit</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p> </p><h2 id="创建任务目录-bat" tabindex="-1"><a class="header-anchor" href="#创建任务目录-bat"><span>创建任务目录 bat</span></a></h2><p>::: code-tabs#shell</p><p>@tab Createtaskdirectory.bat</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">@echo off</span>
<span class="line">setlocal enabledelayedexpansion</span>
<span class="line"></span>
<span class="line">REM 设置控制台的代码页为 UTF-8</span>
<span class="line">chcp 65001 &gt;nul</span>
<span class="line"></span>
<span class="line">REM 提示用户输入任务名称</span>
<span class="line">echo 请输入任务名称:</span>
<span class="line">set /p taskName=</span>
<span class="line"></span>
<span class="line">REM 创建任务名称目录</span>
<span class="line">md &quot;!taskName!&quot; 2&gt;nul</span>
<span class="line"></span>
<span class="line">REM 进入任务名称目录</span>
<span class="line">pushd &quot;!taskName!&quot;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">REM 创建阶段1目录及其文件</span>
<span class="line">set stage1Name=concept   </span>
<span class="line">md &quot;!stage1Name!&quot;</span>
<span class="line">pushd &quot;!stage1Name!&quot;</span>
<span class="line">echo. &gt; &quot;Gird.txt&quot;</span>
<span class="line">echo. &gt; &quot;ztl.txt&quot;</span>
<span class="line">popd</span>
<span class="line"></span>
<span class="line">REM 创建阶段2目录及其文件</span>
<span class="line">set stage2Name=retopo</span>
<span class="line">md &quot;!stage2Name!&quot;</span>
<span class="line">pushd &quot;!stage2Name!&quot;</span>
<span class="line">echo. &gt; &quot;ma.txt&quot;</span>
<span class="line">popd</span>
<span class="line"></span>
<span class="line">REM 创建阶段3目录及其子目录及文件</span>
<span class="line">set stage3Name=highpoly</span>
<span class="line">md &quot;!stage3Name!&quot;</span>
<span class="line">pushd &quot;!stage3Name!&quot;</span>
<span class="line">md &quot;polish&quot;</span>
<span class="line">pushd &quot;polish&quot;</span>
<span class="line">echo. &gt; &quot;ztl.txt&quot;</span>
<span class="line">echo. &gt; &quot;Gird.txt&quot;</span>
<span class="line">popd</span>
<span class="line">popd</span>
<span class="line"></span>
<span class="line">REM 返回上层目录</span>
<span class="line">popd</span>
<span class="line"></span>
<span class="line">echo 任务目录结构创建成功，任务名称: !taskName!</span>
<span class="line"></span>
<span class="line">REM 显示倒计时5秒后自动退出</span>
<span class="line"></span>
<span class="line">for /L %%i in (5,-1,1) do (</span>
<span class="line">    echo 倒计时 %%i 秒后退出...</span>
<span class="line">    timeout /t 1 &gt;nul</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">exit /b</span>
<span class="line">endlocal</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,27))])}const o=n(d,[["render",c],["__file","windowstips.html.vue"]]),u=JSON.parse('{"path":"/server/app/windowstips.html","title":"WindowsTips","lang":"zh-CN","frontmatter":{"title":"WindowsTips","icon":"fa-brands fa-windows","category":"Windows","tags":["Windows"],"date":"2024-02-29T00:00:00.000Z","description":"a few Windows Tips。","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/server/app/windowstips.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"WindowsTips"}],["meta",{"property":"og:description","content":"a few Windows Tips。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T06:58:04.000Z"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:published_time","content":"2024-02-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-22T06:58:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WindowsTips\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-22T06:58:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"暂停windows更新时长","slug":"暂停windows更新时长","link":"#暂停windows更新时长","children":[]},{"level":2,"title":"Color filters 颜色滤镜 - 查看明度","slug":"color-filters-颜色滤镜-查看明度","link":"#color-filters-颜色滤镜-查看明度","children":[]},{"level":2,"title":"重启 资源管理器 bat","slug":"重启-资源管理器-bat","link":"#重启-资源管理器-bat","children":[]},{"level":2,"title":"选择启动程序 bat","slug":"选择启动程序-bat","link":"#选择启动程序-bat","children":[]},{"level":2,"title":"创建任务目录 bat","slug":"创建任务目录-bat","link":"#创建任务目录-bat","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1726988284000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":4},{"name":"Megestus","email":"2624203622@qq.com","commits":2}]},"filePathRelative":"server/app/windowstips.md","localizedDate":"2024年2月29日","excerpt":"<p>a few Windows Tips。</p>\\n","autoDesc":true}');export{o as comp,u as data};
