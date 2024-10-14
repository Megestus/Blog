import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as n,e as p,f as t,o as l}from"./app-Dabd4gyE.js";const i={};function c(o,s){return l(),e("div",null,[s[0]||(s[0]=n("div",{class:"image-preview"},[n("img",{src:"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png",style:{width:"25% !important"}})],-1)),p(" more "),s[1]||(s[1]=t(`<p>::: code-tabs#shell</p><p>@tab mel</p><div class="language-mel line-numbers-mode" data-highlighter="prismjs" data-ext="mel" data-title="mel"><pre><code><span class="line"></span>
<span class="line"><span class="token keyword">proc</span> <span class="token function">selectEdges</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span><span class="token keyword">string</span> <span class="token variable">$numbOfNEdgesSelected</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token code italic"><span class="token delimiter punctuation">\`</span><span class="token statement"><span class="token function">filterExpand</span> <span class="token flag operator">-expand</span> true <span class="token flag operator">-sm</span> <span class="token number">32</span></span><span class="token delimiter punctuation">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> <span class="token variable">$sizeNComponents</span> <span class="token operator">=</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token variable">$numbOfNEdgesSelected</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token function">error</span> <span class="token string">&quot;Select at least one edge before running the script.&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">polySelectEdgesEveryN</span> <span class="token string">&quot;edgeRing&quot;</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">print</span> <span class="token string">&quot;1 loop pattern selected   (^▽^ ).&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">polySelectEdgesEveryN</span> <span class="token string">&quot;edgeRing&quot;</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">print</span> <span class="token string">&quot;2 loop pattern selected   ヾ(≧▽≦*)o.&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">polySelectEdgesEveryN</span> <span class="token string">&quot;edgeRing&quot;</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">print</span> <span class="token string">&quot;3 loop pattern selected  （′v｀）.&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">polySelectEdgesEveryN</span> <span class="token string">&quot;edgeRing&quot;</span> <span class="token number">8</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">print</span> <span class="token string">&quot;4 loop pattern selected  (p≧w≦q).&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">polySelectEdgesEveryN</span> <span class="token string">&quot;edgeRing&quot;</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">print</span> <span class="token string">&quot;5 loop pattern selected （＞人＜；）.&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">polySelectEdgesEveryN</span> <span class="token string">&quot;edgeRing&quot;</span> <span class="token number">12</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">print</span> <span class="token string">&quot;6 loop pattern selected  (*￣︿￣).&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">polySelectEdgesEveryN</span> <span class="token string">&quot;edgeRing&quot;</span> <span class="token number">14</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">print</span> <span class="token string">&quot;7 loop pattern selected  （＝。＝）.&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">polySelectEdgesEveryN</span> <span class="token string">&quot;edgeRing&quot;</span> <span class="token number">16</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">print</span> <span class="token string">&quot;8 loop pattern selected  (。﹏。).&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$sizeNComponents</span> <span class="token operator">&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">error</span> <span class="token string">&quot;Select 8 or less edges.  ○|￣|_&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">string</span> <span class="token variable">$SelectEdgeswindow</span> <span class="token operator">=</span> <span class="token string">&quot;SelectEdges&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token code italic"><span class="token delimiter punctuation">\`</span><span class="token statement"><span class="token function">window</span> <span class="token flag operator">-ex</span> <span class="token variable">$SelectEdgeswindow</span></span><span class="token delimiter punctuation">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">deleteUI</span> <span class="token flag operator">-window</span> <span class="token variable">$SelectEdgeswindow</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token code italic"><span class="token delimiter punctuation">\`</span><span class="token statement"><span class="token function">window</span> <span class="token flag operator">-ex</span> <span class="token variable">$SelectEdgeswindow</span></span><span class="token delimiter punctuation">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">string</span> <span class="token variable">$lbWinName0</span> <span class="token operator">=</span> <span class="token code italic"><span class="token delimiter punctuation">\`</span><span class="token statement"><span class="token function">window</span></span>
<span class="line">                                <span class="token flag operator">-tlb</span> <span class="token number">1</span></span>
<span class="line">                                <span class="token flag operator">-bgc</span> <span class="token number">.25</span> <span class="token number">.25</span> <span class="token number">.25</span></span>
<span class="line">                                <span class="token variable">$SelectEdgeswindow</span></span><span class="token delimiter punctuation">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token function">columnLayout</span> <span class="token flag operator">-adjustableColumn</span> true<span class="token punctuation">;</span></span>
<span class="line"><span class="token function">text</span> <span class="token flag operator">-label</span> <span class="token string">&quot;选边-或多边-点执行&quot;</span> <span class="token flag operator">-h</span> <span class="token number">50</span> <span class="token flag operator">-w</span> <span class="token number">150</span> <span class="token punctuation">;</span></span>
<span class="line"><span class="token function">button</span> <span class="token flag operator">-label</span> <span class="token string">&quot;执行&quot;</span> <span class="token flag operator">-command</span> <span class="token string">&quot;selectEdges&quot;</span> <span class="token flag operator">-bgc</span> <span class="token number">.80</span> <span class="token number">.60</span> <span class="token number">.50</span> <span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token function">setParent</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">showWindow</span> <span class="token variable">$SelectEdgeswindow</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4))])}const d=a(i,[["render",c],["__file","selectEdges.html.vue"]]),k=JSON.parse('{"path":"/posts/maya/selectEdges.html","title":"Maya-SelectEdges","lang":"zh-CN","frontmatter":{"title":"Maya-SelectEdges","icon":"iconfont alicon-maya1","category":["maya"],"tags":["maya","tool"],"date":"2023-12-02T00:00:00.000Z","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/maya/selectEdges.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Maya-SelectEdges"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"property":"article:tag","content":"maya"}],["meta",{"property":"article:tag","content":"tool"}],["meta",{"property":"article:published_time","content":"2023-12-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maya-SelectEdges\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":4}]},"filePathRelative":"posts/maya/selectEdges.md","localizedDate":"2023年12月2日","excerpt":"<div class=\\"image-preview\\">\\n  <img src=\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png\\" style=\\"width: 25% !important;\\">\\n</div>\\n"}');export{d as comp,k as data};