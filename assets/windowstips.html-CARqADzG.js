import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as r,a,w as n,d as e,f as o,r as m,o as u,e as t}from"./app-DYlwjq9E.js";const b={},v=e("p",null,"a few Windows Tips。",-1),p=o(`<p> </p><h2 id="暂停windows更新时长" tabindex="-1"><a class="header-anchor" href="#暂停windows更新时长"><span>暂停windows更新时长</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e2a4e79cf62.png" style="width:95% !important;"></div><p>打开window的cmd 控制台，执行下面这个命令, 然后再打开设置，找到暂停更新，这里就可以随意暂停多少周.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>reg add &quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\WindowsUpdate\\UX\\Settings&quot; /v FlightSettingsMaxPauseDays /t reg_dword /d 3000 /f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p> </p><h2 id="color-filters-颜色滤镜-查看明度" tabindex="-1"><a class="header-anchor" href="#color-filters-颜色滤镜-查看明度"><span>Color filters 颜色滤镜 - 查看明度</span></a></h2><p>轻松查看颜色明度，有助于日常美术工作。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e097628257e.png" style="width:95% !important;"></div><p> </p><h2 id="重启-资源管理器-bat" tabindex="-1"><a class="header-anchor" href="#重启-资源管理器-bat"><span>重启 资源管理器 bat</span></a></h2>`,11),h=e("div",{class:"language-cmd line-numbers-mode","data-ext":"cmd","data-title":"cmd"},[e("pre",{class:"language-cmd"},[e("code",null,`@echo off
chcp 65001 >nul

echo 正在关闭资源管理器...
taskkill /f /im explorer.exe >nul

echo 正在重新启动资源管理器...
start explorer.exe

echo 操作完成。5秒后退出...

for /L %%i in (5,-1,1) do (
    echo 倒计时 %%i 秒...
    timeout /t 1 >nul
)

exit

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("p",null," ",-1),w=e("h2",{id:"选择启动程序-bat",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#选择启动程序-bat"},[e("span",null,"选择启动程序 bat")])],-1),x=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`@echo off

chcp 65001 >nul 2>&1

:title
cls
echo 请选择要启动的程序:
echo.
echo 1) 程序1⭐ 
echo 2) 程序2⭐
echo 3) 退出
echo.
set /p choice=请输入数字(1-3): 

REM 检查选择的有效性
if not defined choice (
    echo 无效的选择！请重新输入。
    goto title
)

if %choice%==1 (
    pushd "G:\\Program Files\\"
    start "" "程序1.exe"
) else if %choice%==2 (
    pushd "G:\\Program Files\\"
    start "" "程序2.exe"
) else if %choice%==3 (
    echo 退出程序...
    exit
) else (
    echo 无效的选择！请重新输入。
    timeout /t 3 /nobreak >nul
    goto title
)

REM 等待0.5秒
(
    ping -n 1 localhost >nul
    echo 程序已启动。
) & timeout /t 1 /nobreak >nul

REM 显示启动消息后立即退出
exit


`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("p",null," ",-1),_=e("h2",{id:"创建任务目录-bat",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建任务目录-bat"},[e("span",null,"创建任务目录 bat")])],-1),y=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`@echo off
setlocal enabledelayedexpansion

REM 设置控制台的代码页为 UTF-8
chcp 65001 >nul

REM 提示用户输入任务名称
echo 请输入任务名称:
set /p taskName=

REM 创建任务名称目录
md "!taskName!" 2>nul

REM 进入任务名称目录
pushd "!taskName!"


REM 创建阶段1目录及其文件
set stage1Name=concept   
md "!stage1Name!"
pushd "!stage1Name!"
echo. > "Gird.txt"
echo. > "ztl.txt"
popd

REM 创建阶段2目录及其文件
set stage2Name=retopo
md "!stage2Name!"
pushd "!stage2Name!"
echo. > "ma.txt"
popd

REM 创建阶段3目录及其子目录及文件
set stage3Name=highpoly
md "!stage3Name!"
pushd "!stage3Name!"
md "polish"
pushd "polish"
echo. > "ztl.txt"
echo. > "Gird.txt"
popd
popd

REM 返回上层目录
popd

echo 任务目录结构创建成功，任务名称: !taskName!

REM 显示倒计时5秒后自动退出

for /L %%i in (5,-1,1) do (
    echo 倒计时 %%i 秒后退出...
    timeout /t 1 >nul
)

exit /b
endlocal



`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function M(N,T){const l=m("CodeTabs");return u(),c("div",null,[v,r(" more "),p,a(l,{id:"31",data:[{id:"restartExplorer.bat"}],"tab-id":"shell"},{title0:n(({value:s,isActive:i})=>[t("restartExplorer.bat")]),tab0:n(({value:s,isActive:i})=>[h]),_:1}),g,w,a(l,{id:"42",data:[{id:"SelectStart.bat"}],"tab-id":"shell"},{title0:n(({value:s,isActive:i})=>[t("SelectStart.bat")]),tab0:n(({value:s,isActive:i})=>[x]),_:1}),f,_,a(l,{id:"53",data:[{id:"Createtaskdirectory.bat"}],"tab-id":"shell"},{title0:n(({value:s,isActive:i})=>[t("Createtaskdirectory.bat")]),tab0:n(({value:s,isActive:i})=>[y]),_:1})])}const R=d(b,[["render",M],["__file","windowstips.html.vue"]]),C=JSON.parse('{"path":"/server/app/windowstips.html","title":"WindowsTips","lang":"zh-CN","frontmatter":{"title":"WindowsTips","icon":"fa-brands fa-windows","category":"Windows","tags":["Windows"],"date":"2024-02-29T00:00:00.000Z","description":"a few Windows Tips。","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/server/app/windowstips.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"WindowsTips"}],["meta",{"property":"og:description","content":"a few Windows Tips。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T06:58:04.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:published_time","content":"2024-02-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-22T06:58:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WindowsTips\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-22T06:58:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"暂停windows更新时长","slug":"暂停windows更新时长","link":"#暂停windows更新时长","children":[]},{"level":2,"title":"Color filters 颜色滤镜 - 查看明度","slug":"color-filters-颜色滤镜-查看明度","link":"#color-filters-颜色滤镜-查看明度","children":[]},{"level":2,"title":"重启 资源管理器 bat","slug":"重启-资源管理器-bat","link":"#重启-资源管理器-bat","children":[]},{"level":2,"title":"选择启动程序 bat","slug":"选择启动程序-bat","link":"#选择启动程序-bat","children":[]},{"level":2,"title":"创建任务目录 bat","slug":"创建任务目录-bat","link":"#创建任务目录-bat","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1726988284000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":4},{"name":"Megestus","email":"2624203622@qq.com","commits":2}]},"filePathRelative":"server/app/windowstips.md","localizedDate":"2024年2月29日","excerpt":"<p>a few Windows Tips。</p>\\n","autoDesc":true}');export{R as comp,C as data};
