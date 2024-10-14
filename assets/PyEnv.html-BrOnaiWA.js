import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as n,e as t,f as o,o as i}from"./app-Dabd4gyE.js";const l={};function p(r,a){return i(),s("div",null,[a[0]||(a[0]=n("p",null,"(๑•́ ₃ •̀๑)ｴｰ",-1)),t(" more "),a[1]||(a[1]=o(`<h1 id="vscode-配置python环境" tabindex="-1"><a class="header-anchor" href="#vscode-配置python环境"><span>VScode 配置Python环境</span></a></h1><h2 id="_1-安装-vscode" tabindex="-1"><a class="header-anchor" href="#_1-安装-vscode"><span>1. 安装 VScode</span></a></h2><p>首先，从官方网站下载并安装Visual Studio Code：</p><p><a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">下载 Visual Studio Code</a></p><h2 id="_2-安装必要的扩展" tabindex="-1"><a class="header-anchor" href="#_2-安装必要的扩展"><span>2. 安装必要的扩展</span></a></h2><h3 id="_2-1-安装python扩展" tabindex="-1"><a class="header-anchor" href="#_2-1-安装python扩展"><span>2.1 安装Python扩展</span></a></h3><p>在VSCode中搜索并安装Python扩展：</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202410071114962.png" style="width:90% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202410071708188.png" style="width:90% !important;"></div><h2 id="_3-配置maya开发环境" tabindex="-1"><a class="header-anchor" href="#_3-配置maya开发环境"><span>3. 配置Maya开发环境</span></a></h2><h3 id="_3-1-下载maya开发包" tabindex="-1"><a class="header-anchor" href="#_3-1-下载maya开发包"><span>3.1 下载Maya开发包</span></a></h3><ol><li>访问<a href="https://aps.autodesk.com/developer/overview/maya" target="_blank" rel="noopener noreferrer">Maya开发人员中心</a></li><li>下载对应Maya版本的开发包（SDK）</li></ol><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202410071122293.png" style="width:40% !important;"></div> ### 3.2 安装Maya开发包 <ol><li>解压下载的SDK</li><li>将<code>devkit</code>文件夹复制到Maya安装目录的<code>devkit</code>文件夹中</li></ol><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202410071151258.png" style="width:90% !important;"></div><ol start="3"><li>如果新版Maya的<code>other</code>文件夹中没有Maya工具包，可以下载旧版本（如2020）的devkit，并复制其中的工具包</li></ol><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202410071202049.png" style="width:70% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202410071240735.png" style="width:70% !important;"></div><h3 id="_3-3-配置python解释器" tabindex="-1"><a class="header-anchor" href="#_3-3-配置python解释器"><span>3.3 配置Python解释器</span></a></h3><ol><li>将Python解释器设置为Maya的<code>mayapy.exe</code> 路径通常为：<code>{Maya安装目录}\\bin\\mayapy.exe</code></li></ol><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202410071133515.png" style="width:90% !important;"></div><ol start="2"><li><p>在VSCode中配置额外的Python路径</p><p>搜索设置中的&quot;extra path&quot;，编辑<code>settings.json</code>文件：</p></li></ol><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202410071316375.png" style="width:90% !important;"></div> 添加以下配置： <div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;python.defaultInterpreterPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Program Files\\\\Autodesk\\\\Maya2024\\\\bin\\\\mayapy.exe&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;python.autoComplete.extraPaths&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;C:\\\\Program Files\\\\Autodesk\\\\Maya2024\\\\devkit\\\\other\\\\pymel\\\\extras\\\\completion\\\\py&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;python.analysis.extraPaths&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;C:\\\\Program Files\\\\Autodesk\\\\Maya2024\\\\devkit\\\\other\\\\pymel\\\\extras\\\\completion\\\\py&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后，Python编辑将有补全提示：</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202410071338647.png" style="width:60% !important;"></div><h2 id="_4-在maya中使用vscode编写的脚本" tabindex="-1"><a class="header-anchor" href="#_4-在maya中使用vscode编写的脚本"><span>4. 在Maya中使用VSCode编写的脚本</span></a></h2><p>有两种主要方式：</p><ol><li>将文件保存到Maya的脚本目录</li><li>通过端口连接</li></ol><h3 id="_4-1-保存到maya脚本目录" tabindex="-1"><a class="header-anchor" href="#_4-1-保存到maya脚本目录"><span>4.1 保存到Maya脚本目录</span></a></h3><p>将Python文件保存到以下路径： <code>C:\\Users\\用户\\Documents\\maya\\2024\\zh_CN\\scripts</code></p><blockquote><p>注意：非中文版本可以去掉<code>zh_CN</code></p></blockquote><h3 id="_4-2-python模块重载" tabindex="-1"><a class="header-anchor" href="#_4-2-python模块重载"><span>4.2 Python模块重载</span></a></h3><p>由于Maya插件通常只会执行一次，如需重新执行，需要使用<code>reload()</code>函数：</p><p>Python 2:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> test</span>
<span class="line"><span class="token builtin">reload</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>  <span class="token comment"># 括号内要与pyfile名字一致</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Python 3:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> testscript</span>
<span class="line"><span class="token keyword">from</span> importlib <span class="token keyword">import</span> <span class="token builtin">reload</span></span>
<span class="line"><span class="token builtin">reload</span><span class="token punctuation">(</span>testscript<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-ai辅助" tabindex="-1"><a class="header-anchor" href="#_5-ai辅助"><span>5.AI辅助</span></a></h2><p>这样配置后，您就可以在VSCode中编写Maya Python脚本，并享受代码补全和其他便利功能了。</p><p>最后,建议下载 <a href="https://www.cursor.com/" target="_blank" rel="noopener noreferrer">Cursor</a> 进行AI辅助。</p><p>Cursor 的几大亮点:</p><ol><li>AI 智能补全代码,写起来飞快。</li><li>用自然语言就能生成代码,简直像魔法。</li><li>帮你解释复杂代码,还能给出优化建议。</li><li>快速找 bug,修复问题超轻松。</li><li>支持多种编程语言,界面类似 VSCode。</li></ol>`,45))])}const h=e(l,[["render",p],["__file","PyEnv.html.vue"]]),m=JSON.parse('{"path":"/posts/Python/PyEnv.html","title":"Python VScode 环境配置","lang":"zh-CN","frontmatter":{"title":"Python VScode 环境配置","icon":"fa-brands fa-python","category":["Python"],"tags":["Python","VScode"],"date":"2024-10-13T00:00:00.000Z","description":"(๑•́ ₃ •̀๑)ｴｰ","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/Python/PyEnv.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Python VScode 环境配置"}],["meta",{"property":"og:description","content":"(๑•́ ₃ •̀๑)ｴｰ"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-13T02:49:55.000Z"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"VScode"}],["meta",{"property":"article:published_time","content":"2024-10-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-13T02:49:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python VScode 环境配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-13T02:49:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装 VScode","slug":"_1-安装-vscode","link":"#_1-安装-vscode","children":[]},{"level":2,"title":"2. 安装必要的扩展","slug":"_2-安装必要的扩展","link":"#_2-安装必要的扩展","children":[{"level":3,"title":"2.1 安装Python扩展","slug":"_2-1-安装python扩展","link":"#_2-1-安装python扩展","children":[]}]},{"level":2,"title":"3. 配置Maya开发环境","slug":"_3-配置maya开发环境","link":"#_3-配置maya开发环境","children":[{"level":3,"title":"3.1 下载Maya开发包","slug":"_3-1-下载maya开发包","link":"#_3-1-下载maya开发包","children":[]},{"level":3,"title":"3.3 配置Python解释器","slug":"_3-3-配置python解释器","link":"#_3-3-配置python解释器","children":[]}]},{"level":2,"title":"4. 在Maya中使用VSCode编写的脚本","slug":"_4-在maya中使用vscode编写的脚本","link":"#_4-在maya中使用vscode编写的脚本","children":[{"level":3,"title":"4.1 保存到Maya脚本目录","slug":"_4-1-保存到maya脚本目录","link":"#_4-1-保存到maya脚本目录","children":[]},{"level":3,"title":"4.2 Python模块重载","slug":"_4-2-python模块重载","link":"#_4-2-python模块重载","children":[]}]},{"level":2,"title":"5.AI辅助","slug":"_5-ai辅助","link":"#_5-ai辅助","children":[]}],"git":{"createdTime":1728787795000,"updatedTime":1728787795000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":1}]},"filePathRelative":"posts/Python/PyEnv.md","localizedDate":"2024年10月13日","excerpt":"<p>(๑•́ ₃ •̀๑)ｴｰ</p>\\n","autoDesc":true}');export{h as comp,m as data};
