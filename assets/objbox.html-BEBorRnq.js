import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as i,f as s,o as a}from"./app-CI6l-p9z.js";const t={},d=s(`<div class="language-obj line-numbers-mode" data-ext="obj" data-title="obj"><pre class="language-obj"><code># This file uses centimeters as units for non-parametric coordinates.

mtllib box.mtl
g default
v -0.811257 0.005627 0.811257
v 0.811257 0.005627 0.811257
v -0.811257 1.628140 0.811257
v 0.811257 1.628140 0.811257
v -0.811257 1.628140 -0.811257
v 0.811257 1.628140 -0.811257
v -0.811257 0.005627 -0.811257
v 0.811257 0.005627 -0.811257
vt 0.375000 0.000000
vt 0.625000 0.000000
vt 0.375000 0.250000
vt 0.625000 0.250000
vt 0.375000 0.500000
vt 0.625000 0.500000
vt 0.375000 0.750000
vt 0.625000 0.750000
vt 0.375000 1.000000
vt 0.625000 1.000000
vt 0.875000 0.000000
vt 0.875000 0.250000
vt 0.125000 0.000000
vt 0.125000 0.250000
vn 0.000000 0.000000 1.000000
vn 0.000000 0.000000 1.000000
vn 0.000000 0.000000 1.000000
vn 0.000000 0.000000 1.000000
vn 0.000000 1.000000 0.000000
vn 0.000000 1.000000 0.000000
vn 0.000000 1.000000 0.000000
vn 0.000000 1.000000 0.000000
vn 0.000000 0.000000 -1.000000
vn 0.000000 0.000000 -1.000000
vn 0.000000 0.000000 -1.000000
vn 0.000000 0.000000 -1.000000
vn 0.000000 -1.000000 0.000000
vn 0.000000 -1.000000 0.000000
vn 0.000000 -1.000000 0.000000
vn 0.000000 -1.000000 0.000000
vn 1.000000 0.000000 0.000000
vn 1.000000 0.000000 0.000000
vn 1.000000 0.000000 0.000000
vn 1.000000 0.000000 0.000000
vn -1.000000 0.000000 0.000000
vn -1.000000 0.000000 0.000000
vn -1.000000 0.000000 0.000000
vn -1.000000 0.000000 0.000000
s off
g pCube1
usemtl initialShadingGroup
f 1/1/1 2/2/2 4/4/3 3/3/4
f 3/3/5 4/4/6 6/6/7 5/5/8
f 5/5/9 6/6/10 8/8/11 7/7/12
f 7/7/13 8/8/14 2/10/15 1/9/16
f 2/2/17 8/11/18 6/12/19 4/4/20
f 7/13/21 1/1/22 3/3/23 5/14/24


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件结构概览" tabindex="-1"><a class="header-anchor" href="#文件结构概览"><span>文件结构概览</span></a></h3><ol><li><strong>mtllib</strong>: 指定了材质库文件的路径。</li><li><strong>g</strong>: 定义几何体组名。</li><li><strong>v</strong>: 表示顶点坐标。</li><li><strong>vt</strong>: 表示纹理坐标（UV 映射）。</li><li><strong>vn</strong>: 表示法线坐标。</li><li><strong>s</strong>: 表示平滑组设置。</li><li><strong>usemtl</strong>: 指定当前几何体使用的材质名称。</li><li><strong>f</strong>: 定义面（多边形）。</li></ol><h3 id="详细分析" tabindex="-1"><a class="header-anchor" href="#详细分析"><span>详细分析</span></a></h3><h4 id="_1-材质库引用" tabindex="-1"><a class="header-anchor" href="#_1-材质库引用"><span>1. 材质库引用</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mtllib box.mtl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一行指定了一个材质库文件 <code>box.mtl</code>，该文件包含了模型的材质定义。</p><h4 id="_2-几何体组名" tabindex="-1"><a class="header-anchor" href="#_2-几何体组名"><span>2. 几何体组名</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>g default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里定义了一个名为 &quot;default&quot; 的几何体组。</p><h4 id="_3-顶点坐标-v" tabindex="-1"><a class="header-anchor" href="#_3-顶点坐标-v"><span>3. 顶点坐标 (<code>v</code>)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>v -0.811257 0.005627 0.811257
v 0.811257 0.005627 0.811257
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些行定义了顶点的三维坐标。例如，第一个顶点的坐标是 (-0.811257, 0.005627, 0.811257)。这些坐标以厘米为单位。</p><h4 id="_4-纹理坐标-vt" tabindex="-1"><a class="header-anchor" href="#_4-纹理坐标-vt"><span>4. 纹理坐标 (<code>vt</code>)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vt 0.375000 0.000000
vt 0.625000 0.000000
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些行定义了纹理映射的 UV 坐标。例如，第一个纹理坐标的值为 (0.375, 0.0)，这些坐标通常用于贴图映射到 3D 模型上。</p><h4 id="_5-法线坐标-vn" tabindex="-1"><a class="header-anchor" href="#_5-法线坐标-vn"><span>5. 法线坐标 (<code>vn</code>)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vn 0.000000 0.000000 1.000000
vn 0.000000 0.000000 1.000000
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些行定义了顶点法线。例如，第一个法线坐标是 (0, 0, 1)，这表示沿着 Z 轴正方向的单位向量。</p><h4 id="_6-平滑组设置-s" tabindex="-1"><a class="header-anchor" href="#_6-平滑组设置-s"><span>6. 平滑组设置 (<code>s</code>)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>s off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一行关闭了平滑组设置，意味着模型将使用硬边而不是平滑边缘。</p><h4 id="_7-使用材质-usemtl" tabindex="-1"><a class="header-anchor" href="#_7-使用材质-usemtl"><span>7. 使用材质 (<code>usemtl</code>)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>usemtl initialShadingGroup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这一行指定了模型使用的材质名称，这里是 <code>initialShadingGroup</code>。这意味着接下来定义的所有面都将使用这个材质。</p><h4 id="_8-面定义-f" tabindex="-1"><a class="header-anchor" href="#_8-面定义-f"><span>8. 面定义 (<code>f</code>)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>f 1/1/1 2/2/2 4/4/3 3/3/4
f 3/3/5 4/4/6 6/6/7 5/5/8
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些行定义了模型的面（多边形）。每个面定义由四个顶点组成，每个顶点由三个索引构成：顶点索引/纹理坐标索引/法线索引。例如，第一行定义了一个四边形面，其顶点索引分别为 1、2、4、3，对应的纹理坐标索引和法线索引也是相同的。</p><p>这个 <code>.obj</code> 文件定义了一个简单的立方体模型，包含 8 个顶点、8 个纹理坐标、16 个法线坐标和 6 个面（每个面是一个四边形）。这些面构成了一个立方体的六个面。</p>`,29);function l(v,r){return a(),n("div",null,[i(" more "),d])}const m=e(t,[["render",l],["__file","objbox.html.vue"]]),u=JSON.parse('{"path":"/posts/other/objbox.html","title":"分析一个box-obj格式的数据结构","lang":"zh-CN","frontmatter":{"title":"分析一个box-obj格式的数据结构","icon":"iconfont alicon-SofaMesh","category":["obj"],"date":"2024-07-29T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407290150598.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/other/objbox.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"分析一个box-obj格式的数据结构"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407290150598.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-06T17:51:55.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407290150598.png"}],["meta",{"name":"twitter:image:alt","content":"分析一个box-obj格式的数据结构"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:published_time","content":"2024-07-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-06T17:51:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分析一个box-obj格式的数据结构\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407290150598.png\\"],\\"datePublished\\":\\"2024-07-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-06T17:51:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":3,"title":"文件结构概览","slug":"文件结构概览","link":"#文件结构概览","children":[]},{"level":3,"title":"详细分析","slug":"详细分析","link":"#详细分析","children":[]}],"git":{"createdTime":1722189462000,"updatedTime":1722966715000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":2},{"name":"Megestus","email":"2624203622@qq.com","commits":1}]},"filePathRelative":"posts/other/objbox.md","localizedDate":"2024年7月29日","excerpt":""}');export{m as comp,u as data};
