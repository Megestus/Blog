import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as d,a as o,w as n,f as t,r as m,o as u,e as s,d as e}from"./app-i7mp6jzn.js";const p={},h=t(`<h2 id="修改ddc缓存位置" tabindex="-1"><a class="header-anchor" href="#修改ddc缓存位置"><span>修改DDC缓存位置</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240430014426.png" style="width:95% !important;"></div><p>会把项目缓存，存在当前项目下；例如把这个项目发给别人的时候就不用人家重新-编译着色器</p><p>搜索这个</p><div class="language-copy line-numbers-mode" data-ext="copy" data-title="copy"><pre class="language-copy"><code>InstalledDerivedDataBackendGraph
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者直接搜这个也行</p><div class="language-copy line-numbers-mode" data-ext="copy" data-title="copy"><pre class="language-copy"><code>%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改为</p><div class="language-copy line-numbers-mode" data-ext="copy" data-title="copy"><pre class="language-copy"><code>%GAMEDIR%DerivedDataCache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="或者使用下方bat-执行路径替换内容" tabindex="-1"><a class="header-anchor" href="#或者使用下方bat-执行路径替换内容"><span>或者使用下方bat 执行路径替换内容</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202406291600798.png" style="width:80% !important;"></div>`,11),v=e("div",{class:"language-bat line-numbers-mode","data-ext":"bat","data-title":"bat"},[e("pre",{class:"language-bat"},[e("code",null,`@echo off

chcp 65001

echo ===================================================================
echo =								  =
echo = Replace the DDC local cache path to the project root directory  = 
echo =								  =
echo ===================================================================

setlocal enabledelayedexpansion

REM Prompts the user for a path

echo This script will put "ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache"
echo replace "GAMEDIR%DerivedDataCache"
echo Please enter the path where the BaseEngine.ini engine is located below:
echo Hint: ".. \\UE 5.4\\Engine\\Config"
echo ===================================================================

REM Gets the path to the input

set /p userPath=

REM Replace the path entered by the user into the 'path_to_file' variable

set "path_to_file=%userPath%\\BaseEngine.ini"
set "search_string=%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache"
set "replace_string=%GAMEDIR%DerivedDataCache"

REM Read the contents of the file line by line and replace the specified string before writing back to the original file

for /f "delims=" %%a in ('type "%path_to_file%" ^& break ^> "%path_to_file%"') do (
    set "line=%%a"
    >>"%path_to_file%" echo(!line:%search_string%=%replace_string%!
)

REM Prompt to exit after 5 seconds
echo Done  Exit in 5 seconds
ping -n 5 127.0.0.1 > nul
exit
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-bat line-numbers-mode","data-ext":"bat","data-title":"bat"},[e("pre",{class:"language-bat"},[e("code",null,`@echo off
chcp 65001

echo ==========================================
echo =    替换DDC本地缓存路径至项目根目录下   = 
echo ==========================================   

setlocal enabledelayedexpansion

REM 提示用户输入路径

echo 将会找到 "ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache"
echo 替换为 "GAMEDIR%DerivedDataCache"
echo 请在下方输入引擎BaseEngine.ini所在的路径:
echo 提示："..\\UE_5.4\\Engine\\Config"
echo ==========================================   

REM 获取输入的路径
set /p userPath=

REM 将用户输入的路径替换到 path_to_file 变量中
set "path_to_file=%userPath%\\BaseEngine.ini"

set "search_string=%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache"
set "replace_string=%GAMEDIR%DerivedDataCache"

REM 逐行读取文件内容并替换指定字符串后写回到原文件中
for /f "delims=" %%a in ('type "%path_to_file%" ^& break ^> "%path_to_file%"') do (
    set "line=%%a"
    >>"%path_to_file%" echo(!line:%search_string%=%replace_string%!
)

REM 提示完成
echo "完成,五秒后退出."
ping -n 5 127.0.0.1 > nul
exit
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=t('<h2 id="快捷设置" tabindex="-1"><a class="header-anchor" href="#快捷设置"><span>快捷设置</span></a></h2><h3 id="吸附模型" tabindex="-1"><a class="header-anchor" href="#吸附模型"><span>吸附模型</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240427114941.png" style="width:95% !important;"></div><p>按<code>End</code>键会吸附到下方地面</p><h3 id="显示模型布线" tabindex="-1"><a class="header-anchor" href="#显示模型布线"><span>显示模型布线</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240427122615.png" style="width:95% !important;"></div><p>UE5好像已默认使用O快捷键</p><p> </p>',8);function _(D,f){const l=m("CodeTabs");return u(),r("div",null,[d(" more "),h,o(l,{id:"24",data:[{id:"Modify_DDC_loc_EN.bat"},{id:"Modify_DDC_loc_ZH.bat"}],"tab-id":"shell"},{title0:n(({value:a,isActive:i})=>[s("Modify_DDC_loc_EN.bat")]),title1:n(({value:a,isActive:i})=>[s("Modify_DDC_loc_ZH.bat")]),tab0:n(({value:a,isActive:i})=>[v]),tab1:n(({value:a,isActive:i})=>[b]),_:1}),g])}const R=c(p,[["render",_],["__file","unrealtips.html.vue"]]),N=JSON.parse('{"path":"/engine/unreal/Note/unrealtips.html","title":"unreal Tips","lang":"zh-CN","frontmatter":{"title":"unreal Tips","description":null,"icon":"iconfont alicon-unreal","category":"unreal","tags":["unreal"],"cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225747.png","article":false,"head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unreal/Note/unrealtips.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unreal Tips"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225747.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225747.png"}],["meta",{"name":"twitter:image:alt","content":"unreal Tips"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"unreal"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"unreal Tips\\"}"]]},"headers":[{"level":2,"title":"修改DDC缓存位置","slug":"修改ddc缓存位置","link":"#修改ddc缓存位置","children":[]},{"level":2,"title":"快捷设置","slug":"快捷设置","link":"#快捷设置","children":[{"level":3,"title":"吸附模型","slug":"吸附模型","link":"#吸附模型","children":[]},{"level":3,"title":"显示模型布线","slug":"显示模型布线","link":"#显示模型布线","children":[]}]}],"git":{"createdTime":1714416283000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":2}]},"filePathRelative":"engine/unreal/Note/unrealtips.md","localizedDate":"2024年4月29日","excerpt":""}');export{R as comp,N as data};
