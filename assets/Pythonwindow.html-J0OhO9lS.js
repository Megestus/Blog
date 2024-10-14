import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as t,e as p,f as e,o}from"./app-Dabd4gyE.js";const l={};function i(c,n){return o(),a("div",null,[n[0]||(n[0]=t("p",null,"记录一些窗口创建的模版",-1)),p(" more "),n[1]||(n[1]=e(`<p>还是看小静大佬的笔记快一些</p><p><a href="https://smilejing.cn/archives/98" target="_blank" rel="noopener noreferrer">Maya窗口UI汇总</a><br><a href="https://smilejing.cn/archives/394" target="_blank" rel="noopener noreferrer">Maya内部控件布局管理</a></p><p> </p><h2 id="base-window-set" tabindex="-1"><a class="header-anchor" href="#base-window-set"><span>base window set</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e2a82a59f81.png" style="width:55% !important;"></div><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">from maya import cmds     </span>
<span class="line"></span>
<span class="line">def showWindow():</span>
<span class="line">    name = &quot;tools&quot;</span>
<span class="line">    if cmds.window(name,query=True, exists=True):</span>
<span class="line">        cmds.deleteUI(name)</span>
<span class="line">    cmds.window(name)</span>
<span class="line">    cmds.showWindow()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> </p><h2 id="icon-window" tabindex="-1"><a class="header-anchor" href="#icon-window"><span>icon window</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e2a684d6893.png" style="width:30% !important;"></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">window <span class="token operator">=</span> cmds<span class="token punctuation">.</span>window<span class="token punctuation">(</span> title <span class="token operator">=</span> <span class="token string">&#39;shelfButton Example&#39;</span><span class="token punctuation">)</span></span>
<span class="line">tabs <span class="token operator">=</span> cmds<span class="token punctuation">.</span>tabLayout<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">shelf <span class="token operator">=</span> cmds<span class="token punctuation">.</span>shelfLayout<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">cmds<span class="token punctuation">.</span>shelfButton<span class="token punctuation">(</span> annotation<span class="token operator">=</span><span class="token string">&#39;Print &quot;Hello&quot;.&#39;</span><span class="token punctuation">,</span> image1<span class="token operator">=</span><span class="token string">&#39;commandButton.png&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&#39;print &quot;Hello\\\\n&quot;&#39;</span> <span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">cmds<span class="token punctuation">.</span>shelfButton<span class="token punctuation">(</span> annotation<span class="token operator">=</span><span class="token string">&#39;Create a sphere.&#39;</span><span class="token punctuation">,</span> image1<span class="token operator">=</span><span class="token string">&#39;sphere.png&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&#39;cmds.sphere()&#39;</span> <span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#自定义python</span></span>
<span class="line">cmds<span class="token punctuation">.</span>shelfButton<span class="token punctuation">(</span>annotation<span class="token operator">=</span><span class="token string">&#39;Show the Attribute Editor.&#39;</span><span class="token punctuation">,</span> image1<span class="token operator">=</span><span class="token string">&#39;AriUVGridding.png&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&#39;import maya.mel; maya.mel.eval(&quot;AriUVGridding&quot;)&#39;</span> <span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#自定义mal语言工具 与 图片图片在文档内有对应命名即可</span></span>
<span class="line"></span>
<span class="line">cmds<span class="token punctuation">.</span>shelfButton<span class="token punctuation">(</span>annotation<span class="token operator">=</span><span class="token string">&#39;Create a cone.&#39;</span><span class="token punctuation">,</span> image1<span class="token operator">=</span><span class="token string">&#39;cone.png&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&#39;cmds.cone()&#39;</span><span class="token punctuation">,</span> imageOverlayLabel<span class="token operator">=</span><span class="token string">&#39;4th&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">cmds<span class="token punctuation">.</span>shelfButton<span class="token punctuation">(</span>annotation<span class="token operator">=</span><span class="token string">&quot;Undo last operation.&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    image1<span class="token operator">=</span><span class="token string">&quot;undo.png&quot;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&quot;undo&quot;</span><span class="token punctuation">,</span> imageOverlayLabel<span class="token operator">=</span><span class="token string">&quot;undo&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    overlayLabelColor<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">.25</span><span class="token punctuation">,</span> <span class="token number">.25</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">cmds<span class="token punctuation">.</span>shelfButton<span class="token punctuation">(</span>annotation<span class="token operator">=</span><span class="token string">&quot;Redo last operation.&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    image1<span class="token operator">=</span><span class="token string">&quot;redo.png&quot;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&quot;redo&quot;</span><span class="token punctuation">,</span> imageOverlayLabel<span class="token operator">=</span><span class="token string">&quot;redo&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    overlayLabelColor<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">.25</span><span class="token punctuation">)</span><span class="token punctuation">,</span> overlayLabelBackColor<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">.15</span><span class="token punctuation">,</span> <span class="token number">.9</span><span class="token punctuation">,</span> <span class="token number">.1</span><span class="token punctuation">,</span> <span class="token number">.4</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">cmds<span class="token punctuation">.</span>tabLayout<span class="token punctuation">(</span> tabs<span class="token punctuation">,</span> edit<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> tabLabel<span class="token operator">=</span><span class="token punctuation">(</span>shelf<span class="token punctuation">,</span> <span class="token string">&#39;Example Shelf&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">cmds<span class="token punctuation">.</span>showWindow<span class="token punctuation">(</span> window <span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义工具架（shelf），其中包含了几个按钮。每个按钮都有注释、图像和命令，点击按钮时会执行相应的操作。</p><p>以下是对代码中使用到的函数和参数的简要说明：</p><ul><li><p><code>cmds.window()</code>：创建一个窗口，并返回该窗口对象。</p><ul><li>参数<code>title</code>：指定窗口标题。</li></ul></li><li><p><code>cmds.tabLayout()</code>：在当前窗口中创建选项卡布局，并返回该布局对象。</p></li><li><p><code>cmds.shelfLayout()</code>：在选项卡布局内部创建工具架布局，并返回该布局对象。</p></li><li><p><code>cmds.shelfButton()</code>：在工具架上添加一个按钮。</p><ul><li>参数<code>annotation</code>：设置鼠标悬停于按钮上时显示的注释文本。</li><li>参数<code>image1</code>/<code>imageOverlayLabel</code>: 按钮显示图像及覆盖标签（可选）。</li><li>参数&#39;command&#39;: 指定按下此按钮时执行哪些命令或操作。可以是Python语句或MEL脚本字符串。</li></ul></li><li><p>具体示例：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">cmds<span class="token punctuation">.</span>shelfButton<span class="token punctuation">(</span>annotation<span class="token operator">=</span><span class="token string">&#39;Print &quot;Hello&quot;.&#39;</span><span class="token punctuation">,</span> image1<span class="token operator">=</span><span class="token string">&#39;commandButton.png&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&#39;print &quot;Hello\\\\n&quot;&#39;</span> <span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><p>最后，通过调用一系列函数来设置选项卡与工具架之间关联关系并将其展示出来：</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 设置选项卡与工具架之间关联</span></span>
<span class="line">cmds<span class="token punctuation">.</span>tabLayout<span class="token punctuation">(</span>tabs<span class="token punctuation">,</span> edit<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> tabLabel<span class="token operator">=</span><span class="token punctuation">(</span>shelf<span class="token punctuation">,</span> <span class="token string">&#39;Example Shelf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示窗口</span></span>
<span class="line">cmds<span class="token punctuation">.</span>showWindow<span class="token punctuation">(</span>window<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> </p><h2 id="list-window" tabindex="-1"><a class="header-anchor" href="#list-window"><span>list window</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/65e2a6a2017f5.png" style="width:30% !important;"></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment">#定义一个变量</span></span>
<span class="line">windowtool<span class="token operator">=</span><span class="token string">&#39;MRT&#39;</span> </span>
<span class="line"><span class="token comment">#判断重复</span></span>
<span class="line"><span class="token keyword">if</span> cmds<span class="token punctuation">.</span>window<span class="token punctuation">(</span>windowtool<span class="token punctuation">,</span>exists <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">:</span> </span>
<span class="line">    cmds<span class="token punctuation">.</span>deleteUI<span class="token punctuation">(</span>windowtool<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">#创建窗口</span></span>
<span class="line">window <span class="token operator">=</span> cmds<span class="token punctuation">.</span>window<span class="token punctuation">(</span> title<span class="token operator">=</span><span class="token string">&quot;MetaHumanTools&quot;</span><span class="token punctuation">,</span> iconName<span class="token operator">=</span><span class="token string">&#39;Short Name&#39;</span><span class="token punctuation">,</span> widthHeight<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">220</span><span class="token punctuation">)</span> <span class="token punctuation">)</span></span>
<span class="line">cmds<span class="token punctuation">.</span>columnLayout<span class="token punctuation">(</span> adjustableColumn<span class="token operator">=</span><span class="token boolean">True</span> <span class="token punctuation">)</span></span>
<span class="line">cmds<span class="token punctuation">.</span>button<span class="token punctuation">(</span> label<span class="token operator">=</span><span class="token string">&#39;tool_1&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;import combined_MH&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span></span>
<span class="line">cmds<span class="token punctuation">.</span>button<span class="token punctuation">(</span> label<span class="token operator">=</span><span class="token string">&#39;tool_2&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;import NitroPoly;reload(NitroPoly);NitroPoly.main()&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> </span>
<span class="line">cmds<span class="token punctuation">.</span>button<span class="token punctuation">(</span> label<span class="token operator">=</span><span class="token string">&#39;tool_3&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;import NitroPoly;reload(NitroPoly);NitroPoly.main()&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> </span>
<span class="line">cmds<span class="token punctuation">.</span>button<span class="token punctuation">(</span> label<span class="token operator">=</span><span class="token string">&#39;tool_4&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;import NitroPoly;reload(NitroPoly);NitroPoly.main()&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> </span>
<span class="line">cmds<span class="token punctuation">.</span>button<span class="token punctuation">(</span> label<span class="token operator">=</span><span class="token string">&#39;tool_5&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;import NitroPoly;reload(NitroPoly);NitroPoly.main()&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> </span>
<span class="line">cmds<span class="token punctuation">.</span>button<span class="token punctuation">(</span> label<span class="token operator">=</span><span class="token string">&#39;tool_6&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;import NitroPoly;reload(NitroPoly);NitroPoly.main()&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> </span>
<span class="line">cmds<span class="token punctuation">.</span>button<span class="token punctuation">(</span> label<span class="token operator">=</span><span class="token string">&#39;tool_7&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;import NitroPoly;reload(NitroPoly);NitroPoly.main()&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span> </span>
<span class="line">cmds<span class="token punctuation">.</span>button<span class="token punctuation">(</span> label<span class="token operator">=</span><span class="token string">&#39;Close&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;cmds.deleteUI(\\&quot;&#39;</span> <span class="token operator">+</span> window <span class="token operator">+</span> <span class="token string">&#39;\\&quot;, window=True)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span></span>
<span class="line">cmds<span class="token punctuation">.</span>setParent<span class="token punctuation">(</span> <span class="token string">&#39;..&#39;</span> <span class="token punctuation">)</span></span>
<span class="line">cmds<span class="token punctuation">.</span>showWindow<span class="token punctuation">(</span> window <span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19))])}const d=s(l,[["render",i],["__file","Pythonwindow.html.vue"]]),m=JSON.parse('{"path":"/posts/Python/Pythonwindow.html","title":"Python Window template","lang":"zh-CN","frontmatter":{"title":"Python Window template","icon":"fa-brands fa-python","category":["maya"],"tags":["maya","Python"],"date":"2024-03-02T00:00:00.000Z","description":"记录一些窗口创建的模版","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/Python/Pythonwindow.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Python Window template"}],["meta",{"property":"og:description","content":"记录一些窗口创建的模版"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-13T02:49:55.000Z"}],["meta",{"property":"article:tag","content":"maya"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:published_time","content":"2024-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-13T02:49:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python Window template\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-13T02:49:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"base window set","slug":"base-window-set","link":"#base-window-set","children":[]},{"level":2,"title":"icon window","slug":"icon-window","link":"#icon-window","children":[]},{"level":2,"title":"list window","slug":"list-window","link":"#list-window","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1728787795000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":1}]},"filePathRelative":"posts/Python/Pythonwindow.md","localizedDate":"2024年3月2日","excerpt":"<p>记录一些窗口创建的模版</p>\\n","autoDesc":true}');export{d as comp,m as data};