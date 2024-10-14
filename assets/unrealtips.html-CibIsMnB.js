import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,e as a,f as i,o as l}from"./app-DGrbN9aA.js";const t={};function c(p,e){return l(),s("div",null,[a(" more "),e[0]||(e[0]=i(`<h2 id="修改ddc缓存位置" tabindex="-1"><a class="header-anchor" href="#修改ddc缓存位置"><span>修改DDC缓存位置</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240430014426.png" style="width:95% !important;"></div><p>会把项目缓存，存在当前项目下；例如把这个项目发给别人的时候就不用人家重新-编译着色器</p><p>搜索这个</p><div class="language-copy line-numbers-mode" data-highlighter="prismjs" data-ext="copy" data-title="copy"><pre><code><span class="line">InstalledDerivedDataBackendGraph</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者直接搜这个也行</p><div class="language-copy line-numbers-mode" data-highlighter="prismjs" data-ext="copy" data-title="copy"><pre><code><span class="line">%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>改为</p><div class="language-copy line-numbers-mode" data-highlighter="prismjs" data-ext="copy" data-title="copy"><pre><code><span class="line">%GAMEDIR%DerivedDataCache</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="或者使用下方bat-执行路径替换内容" tabindex="-1"><a class="header-anchor" href="#或者使用下方bat-执行路径替换内容"><span>或者使用下方bat 执行路径替换内容</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202406291600798.png" style="width:80% !important;"></div><p>::: code-tabs#shell</p><p>@tab Modify_DDC_loc_EN.bat</p><div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat" data-title="bat"><pre><code><span class="line">@echo off</span>
<span class="line"></span>
<span class="line">chcp 65001</span>
<span class="line"></span>
<span class="line">echo ===================================================================</span>
<span class="line">echo =								  =</span>
<span class="line">echo = Replace the DDC local cache path to the project root directory  = </span>
<span class="line">echo =								  =</span>
<span class="line">echo ===================================================================</span>
<span class="line"></span>
<span class="line">setlocal enabledelayedexpansion</span>
<span class="line"></span>
<span class="line">REM Prompts the user for a path</span>
<span class="line"></span>
<span class="line">echo This script will put &quot;ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache&quot;</span>
<span class="line">echo replace &quot;GAMEDIR%DerivedDataCache&quot;</span>
<span class="line">echo Please enter the path where the BaseEngine.ini engine is located below:</span>
<span class="line">echo Hint: &quot;.. \\UE 5.4\\Engine\\Config&quot;</span>
<span class="line">echo ===================================================================</span>
<span class="line"></span>
<span class="line">REM Gets the path to the input</span>
<span class="line"></span>
<span class="line">set /p userPath=</span>
<span class="line"></span>
<span class="line">REM Replace the path entered by the user into the &#39;path_to_file&#39; variable</span>
<span class="line"></span>
<span class="line">set &quot;path_to_file=%userPath%\\BaseEngine.ini&quot;</span>
<span class="line">set &quot;search_string=%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache&quot;</span>
<span class="line">set &quot;replace_string=%GAMEDIR%DerivedDataCache&quot;</span>
<span class="line"></span>
<span class="line">REM Read the contents of the file line by line and replace the specified string before writing back to the original file</span>
<span class="line"></span>
<span class="line">for /f &quot;delims=&quot; %%a in (&#39;type &quot;%path_to_file%&quot; ^&amp; break ^&gt; &quot;%path_to_file%&quot;&#39;) do (</span>
<span class="line">    set &quot;line=%%a&quot;</span>
<span class="line">    &gt;&gt;&quot;%path_to_file%&quot; echo(!line:%search_string%=%replace_string%!</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">REM Prompt to exit after 5 seconds</span>
<span class="line">echo Done  Exit in 5 seconds</span>
<span class="line">ping -n 5 127.0.0.1 &gt; nul</span>
<span class="line">exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Modify_DDC_loc_ZH.bat</p><div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat" data-title="bat"><pre><code><span class="line">@echo off</span>
<span class="line">chcp 65001</span>
<span class="line"></span>
<span class="line">echo ==========================================</span>
<span class="line">echo =    替换DDC本地缓存路径至项目根目录下   = </span>
<span class="line">echo ==========================================   </span>
<span class="line"></span>
<span class="line">setlocal enabledelayedexpansion</span>
<span class="line"></span>
<span class="line">REM 提示用户输入路径</span>
<span class="line"></span>
<span class="line">echo 将会找到 &quot;ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache&quot;</span>
<span class="line">echo 替换为 &quot;GAMEDIR%DerivedDataCache&quot;</span>
<span class="line">echo 请在下方输入引擎BaseEngine.ini所在的路径:</span>
<span class="line">echo 提示：&quot;..\\UE_5.4\\Engine\\Config&quot;</span>
<span class="line">echo ==========================================   </span>
<span class="line"></span>
<span class="line">REM 获取输入的路径</span>
<span class="line">set /p userPath=</span>
<span class="line"></span>
<span class="line">REM 将用户输入的路径替换到 path_to_file 变量中</span>
<span class="line">set &quot;path_to_file=%userPath%\\BaseEngine.ini&quot;</span>
<span class="line"></span>
<span class="line">set &quot;search_string=%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache&quot;</span>
<span class="line">set &quot;replace_string=%GAMEDIR%DerivedDataCache&quot;</span>
<span class="line"></span>
<span class="line">REM 逐行读取文件内容并替换指定字符串后写回到原文件中</span>
<span class="line">for /f &quot;delims=&quot; %%a in (&#39;type &quot;%path_to_file%&quot; ^&amp; break ^&gt; &quot;%path_to_file%&quot;&#39;) do (</span>
<span class="line">    set &quot;line=%%a&quot;</span>
<span class="line">    &gt;&gt;&quot;%path_to_file%&quot; echo(!line:%search_string%=%replace_string%!</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">REM 提示完成</span>
<span class="line">echo &quot;完成,五秒后退出.&quot;</span>
<span class="line">ping -n 5 127.0.0.1 &gt; nul</span>
<span class="line">exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="快捷设置" tabindex="-1"><a class="header-anchor" href="#快捷设置"><span>快捷设置</span></a></h2><h3 id="吸附模型" tabindex="-1"><a class="header-anchor" href="#吸附模型"><span>吸附模型</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240427114941.png" style="width:95% !important;"></div><p>按<code>End</code>键会吸附到下方地面</p><h3 id="显示模型布线" tabindex="-1"><a class="header-anchor" href="#显示模型布线"><span>显示模型布线</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240427122615.png" style="width:95% !important;"></div><p>UE5好像已默认使用O快捷键</p><p> </p>`,25))])}const o=n(t,[["render",c],["__file","unrealtips.html.vue"]]),u=JSON.parse('{"path":"/engine/unreal/Note/unrealtips.html","title":"unreal Tips","lang":"zh-CN","frontmatter":{"title":"unreal Tips","description":null,"icon":"iconfont alicon-unreal","category":"unreal","tags":["unreal"],"date":"2024-04-30T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225747.png","article":false,"head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unreal/Note/unrealtips.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unreal Tips"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225747.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:38:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225747.png"}],["meta",{"name":"twitter:image:alt","content":"unreal Tips"}],["meta",{"property":"article:tag","content":"unreal"}],["meta",{"property":"article:published_time","content":"2024-04-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:38:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"unreal Tips\\"}"]]},"headers":[{"level":2,"title":"修改DDC缓存位置","slug":"修改ddc缓存位置","link":"#修改ddc缓存位置","children":[]},{"level":2,"title":"快捷设置","slug":"快捷设置","link":"#快捷设置","children":[{"level":3,"title":"吸附模型","slug":"吸附模型","link":"#吸附模型","children":[]},{"level":3,"title":"显示模型布线","slug":"显示模型布线","link":"#显示模型布线","children":[]}]}],"git":{"createdTime":1714416283000,"updatedTime":1723052324000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":2},{"name":"Megestus","email":"2624203622@qq.com","commits":1}]},"filePathRelative":"engine/unreal/Note/unrealtips.md","localizedDate":"2024年4月30日","excerpt":""}');export{o as comp,u as data};
