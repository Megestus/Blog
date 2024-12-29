import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as s,e as p,f as m,a as c,g as l,r as o,o as u,d as n}from"./app-DJGYRO-r.js";const b={};function v(h,e){const t=o("CodeTabs");return u(),d("div",null,[e[6]||(e[6]=s("p",null,"a few Windows Tips。",-1)),p(" more "),e[7]||(e[7]=m(`<p> </p><h2 id="暂停windows更新时长" tabindex="-1"><a class="header-anchor" href="#暂停windows更新时长"><span>暂停windows更新时长</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e2a4e79cf62.png" style="width:95% !important;"></div><p>打开window的cmd 控制台，执行下面这个命令, 然后再打开设置，找到暂停更新，这里就可以随意暂停多少周.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">reg add &quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\WindowsUpdate\\UX\\Settings&quot; /v FlightSettingsMaxPauseDays /t reg_dword /d 3000 /f</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p> </p><h2 id="color-filters-颜色滤镜-查看明度" tabindex="-1"><a class="header-anchor" href="#color-filters-颜色滤镜-查看明度"><span>Color filters 颜色滤镜 - 查看明度</span></a></h2><p>轻松查看颜色明度，有助于日常美术工作。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e097628257e.png" style="width:95% !important;"></div><p> </p><h2 id="重启-资源管理器-bat" tabindex="-1"><a class="header-anchor" href="#重启-资源管理器-bat"><span>重启 资源管理器 bat</span></a></h2>`,11)),c(t,{id:"31",data:[{id:"restartExplorer.bat"}],"tab-id":"shell"},{title0:l(({value:a,isActive:i})=>e[0]||(e[0]=[n("restartExplorer.bat")])),tab0:l(({value:a,isActive:i})=>e[1]||(e[1]=[s("div",{class:"language-cmd line-numbers-mode","data-highlighter":"prismjs","data-ext":"cmd","data-title":"cmd"},[s("pre",null,[s("code",null,[s("span",{class:"line"},"@echo off"),n(`
`),s("span",{class:"line"},"chcp 65001 >nul"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"echo 正在关闭资源管理器..."),n(`
`),s("span",{class:"line"},"taskkill /f /im explorer.exe >nul"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"echo 正在重新启动资源管理器..."),n(`
`),s("span",{class:"line"},"start explorer.exe"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"echo 操作完成。5秒后退出..."),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"for /L %%i in (5,-1,1) do ("),n(`
`),s("span",{class:"line"},"    echo 倒计时 %%i 秒..."),n(`
`),s("span",{class:"line"},"    timeout /t 1 >nul"),n(`
`),s("span",{class:"line"},")"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"exit"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),e[8]||(e[8]=s("p",null," ",-1)),e[9]||(e[9]=s("h2",{id:"选择启动程序-bat",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#选择启动程序-bat"},[s("span",null,"选择启动程序 bat")])],-1)),c(t,{id:"42",data:[{id:"SelectStart.bat"}],"tab-id":"shell"},{title0:l(({value:a,isActive:i})=>e[2]||(e[2]=[n("SelectStart.bat")])),tab0:l(({value:a,isActive:i})=>e[3]||(e[3]=[s("div",{class:"language-text line-numbers-mode","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[s("pre",null,[s("code",null,[s("span",{class:"line"},"@echo off"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"chcp 65001 >nul 2>&1"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},":title"),n(`
`),s("span",{class:"line"},"cls"),n(`
`),s("span",{class:"line"},"echo 请选择要启动的程序:"),n(`
`),s("span",{class:"line"},"echo."),n(`
`),s("span",{class:"line"},"echo 1) 程序1⭐ "),n(`
`),s("span",{class:"line"},"echo 2) 程序2⭐"),n(`
`),s("span",{class:"line"},"echo 3) 退出"),n(`
`),s("span",{class:"line"},"echo."),n(`
`),s("span",{class:"line"},"set /p choice=请输入数字(1-3): "),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 检查选择的有效性"),n(`
`),s("span",{class:"line"},"if not defined choice ("),n(`
`),s("span",{class:"line"},"    echo 无效的选择！请重新输入。"),n(`
`),s("span",{class:"line"},"    goto title"),n(`
`),s("span",{class:"line"},")"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"if %choice%==1 ("),n(`
`),s("span",{class:"line"},'    pushd "G:\\Program Files\\"'),n(`
`),s("span",{class:"line"},'    start "" "程序1.exe"'),n(`
`),s("span",{class:"line"},") else if %choice%==2 ("),n(`
`),s("span",{class:"line"},'    pushd "G:\\Program Files\\"'),n(`
`),s("span",{class:"line"},'    start "" "程序2.exe"'),n(`
`),s("span",{class:"line"},") else if %choice%==3 ("),n(`
`),s("span",{class:"line"},"    echo 退出程序..."),n(`
`),s("span",{class:"line"},"    exit"),n(`
`),s("span",{class:"line"},") else ("),n(`
`),s("span",{class:"line"},"    echo 无效的选择！请重新输入。"),n(`
`),s("span",{class:"line"},"    timeout /t 3 /nobreak >nul"),n(`
`),s("span",{class:"line"},"    goto title"),n(`
`),s("span",{class:"line"},")"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 等待0.5秒"),n(`
`),s("span",{class:"line"},"("),n(`
`),s("span",{class:"line"},"    ping -n 1 localhost >nul"),n(`
`),s("span",{class:"line"},"    echo 程序已启动。"),n(`
`),s("span",{class:"line"},") & timeout /t 1 /nobreak >nul"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 显示启动消息后立即退出"),n(`
`),s("span",{class:"line"},"exit"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),e[10]||(e[10]=s("p",null," ",-1)),e[11]||(e[11]=s("h2",{id:"创建任务目录-bat",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建任务目录-bat"},[s("span",null,"创建任务目录 bat")])],-1)),c(t,{id:"53",data:[{id:"Createtaskdirectory.bat"}],"tab-id":"shell"},{title0:l(({value:a,isActive:i})=>e[4]||(e[4]=[n("Createtaskdirectory.bat")])),tab0:l(({value:a,isActive:i})=>e[5]||(e[5]=[s("div",{class:"language-text line-numbers-mode","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[s("pre",null,[s("code",null,[s("span",{class:"line"},"@echo off"),n(`
`),s("span",{class:"line"},"setlocal enabledelayedexpansion"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 设置控制台的代码页为 UTF-8"),n(`
`),s("span",{class:"line"},"chcp 65001 >nul"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 提示用户输入任务名称"),n(`
`),s("span",{class:"line"},"echo 请输入任务名称:"),n(`
`),s("span",{class:"line"},"set /p taskName="),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 创建任务名称目录"),n(`
`),s("span",{class:"line"},'md "!taskName!" 2>nul'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 进入任务名称目录"),n(`
`),s("span",{class:"line"},'pushd "!taskName!"'),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 创建阶段1目录及其文件"),n(`
`),s("span",{class:"line"},"set stage1Name=concept   "),n(`
`),s("span",{class:"line"},'md "!stage1Name!"'),n(`
`),s("span",{class:"line"},'pushd "!stage1Name!"'),n(`
`),s("span",{class:"line"},'echo. > "Gird.txt"'),n(`
`),s("span",{class:"line"},'echo. > "ztl.txt"'),n(`
`),s("span",{class:"line"},"popd"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 创建阶段2目录及其文件"),n(`
`),s("span",{class:"line"},"set stage2Name=retopo"),n(`
`),s("span",{class:"line"},'md "!stage2Name!"'),n(`
`),s("span",{class:"line"},'pushd "!stage2Name!"'),n(`
`),s("span",{class:"line"},'echo. > "ma.txt"'),n(`
`),s("span",{class:"line"},"popd"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 创建阶段3目录及其子目录及文件"),n(`
`),s("span",{class:"line"},"set stage3Name=highpoly"),n(`
`),s("span",{class:"line"},'md "!stage3Name!"'),n(`
`),s("span",{class:"line"},'pushd "!stage3Name!"'),n(`
`),s("span",{class:"line"},'md "polish"'),n(`
`),s("span",{class:"line"},'pushd "polish"'),n(`
`),s("span",{class:"line"},'echo. > "ztl.txt"'),n(`
`),s("span",{class:"line"},'echo. > "Gird.txt"'),n(`
`),s("span",{class:"line"},"popd"),n(`
`),s("span",{class:"line"},"popd"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 返回上层目录"),n(`
`),s("span",{class:"line"},"popd"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"echo 任务目录结构创建成功，任务名称: !taskName!"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"REM 显示倒计时5秒后自动退出"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"for /L %%i in (5,-1,1) do ("),n(`
`),s("span",{class:"line"},"    echo 倒计时 %%i 秒后退出..."),n(`
`),s("span",{class:"line"},"    timeout /t 1 >nul"),n(`
`),s("span",{class:"line"},")"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"exit /b"),n(`
`),s("span",{class:"line"},"endlocal"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})])}const f=r(b,[["render",v],["__file","windowstips.html.vue"]]),x=JSON.parse('{"path":"/server/app/windowstips.html","title":"WindowsTips","lang":"zh-CN","frontmatter":{"title":"WindowsTips","icon":"fa-brands fa-windows","category":"Windows","tags":["Windows"],"date":"2024-02-29T00:00:00.000Z","description":"a few Windows Tips。","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/server/app/windowstips.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"WindowsTips"}],["meta",{"property":"og:description","content":"a few Windows Tips。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T06:58:04.000Z"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:published_time","content":"2024-02-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-22T06:58:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WindowsTips\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-22T06:58:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"暂停windows更新时长","slug":"暂停windows更新时长","link":"#暂停windows更新时长","children":[]},{"level":2,"title":"Color filters 颜色滤镜 - 查看明度","slug":"color-filters-颜色滤镜-查看明度","link":"#color-filters-颜色滤镜-查看明度","children":[]},{"level":2,"title":"重启 资源管理器 bat","slug":"重启-资源管理器-bat","link":"#重启-资源管理器-bat","children":[]},{"level":2,"title":"选择启动程序 bat","slug":"选择启动程序-bat","link":"#选择启动程序-bat","children":[]},{"level":2,"title":"创建任务目录 bat","slug":"创建任务目录-bat","link":"#创建任务目录-bat","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1726988284000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":4},{"name":"Megestus","email":"2624203622@qq.com","commits":2}]},"filePathRelative":"server/app/windowstips.md","localizedDate":"2024年2月29日","excerpt":"<p>a few Windows Tips。</p>\\n","autoDesc":true}');export{f as comp,x as data};
