import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as s,e as p,f as a,a as r,o as d,r as c}from"./app-DGrbN9aA.js";const t={};function v(o,n){const l=c("Badge");return d(),e("div",null,[n[1]||(n[1]=s("p",null,"摘要：答疑、作业答案、Normal 实现的原理",-1)),p(" more "),n[2]||(n[2]=a('<p> </p><h3 id="答疑" tabindex="-1"><a class="header-anchor" href="#答疑"><span>答疑：</span></a></h3><ul><li>if判断断开部分Shader语句，有无优化效果？ <ul><li>没有优化效果，渲染时会执行每一个if分支，一般不写if；</li><li>一般用ShaderFeature，MultiCompile；超纲；</li></ul></li></ul><p> </p><h2 id="作业答案" tabindex="-1"><a class="header-anchor" href="#作业答案"><span>作业答案：</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311004230.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311004313.png" style="width:95% !important;"></div>',7)),s("details",null,[s("summary",null,[r(l,{text:"Code-view",color:"#e0dd8b"})]),n[0]||(n[0]=a(`<p>::: code-tabs#shell</p><p>@tab L08_OldSchoolPlus_VS.shader</p><div class="language-shader line-numbers-mode" data-highlighter="prismjs" data-ext="shader" data-title="shader"><pre><code><span class="line">Shader &quot;AP01/L08/L08_OldSchoolPlus_VS&quot; </span>
<span class="line">{</span>
<span class="line"></span>
<span class="line">    Properties {</span>
<span class="line">            _BaseCol (&quot;基本色&quot;, Color) = (0.5, 0.5, 0.5, 1.0)</span>
<span class="line">            _LightCol (&quot;光颜色&quot;, Color) = (1.0, 1.0, 1.0, 1.0)</span>
<span class="line">            _SpecPow (&quot;高光次幂&quot;, Range(1, 90)) = 30</span>
<span class="line">            _Occlusion (&quot;AO图&quot;, 2D) = &quot;white&quot; {}</span>
<span class="line">            _EnvInt (&quot;环境光强度&quot;, Range(0, 1)) = 0.2</span>
<span class="line">            _EnvUpCol (&quot;环境天顶颜色&quot;, Color) = (1.0, 1.0, 1.0, 1.0)</span>
<span class="line">            _EnvSideCol (&quot;环境水平颜色&quot;, Color) = (0.5, 0.5, 0.5, 1.0)</span>
<span class="line">            _EnvDownCol (&quot;环境地表颜色&quot;, Color) = (0.0, 0.0, 0.0, 0.0)</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">    SubShader {</span>
<span class="line">        Tags {</span>
<span class="line">        &quot;RenderType&quot;=&quot;Opaque&quot;</span>
<span class="line">        }</span>
<span class="line">        Pass {</span>
<span class="line">            Name &quot;FORWARD&quot;</span>
<span class="line">            Tags {</span>
<span class="line">            &quot;LightMode&quot;=&quot;ForwardBase&quot;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            CGPROGRAM</span>
<span class="line">            #pragma vertex vert</span>
<span class="line">            #pragma fragment frag</span>
<span class="line">            #include &quot;UnityCG.cginc&quot;</span>
<span class="line">            // 追加投影相关包含文件</span>
<span class="line">            #include &quot;AutoLight.cginc&quot;</span>
<span class="line">            #include &quot;Lighting.cginc&quot;</span>
<span class="line">            #pragma multi_compile_fwdbase_fullshadows</span>
<span class="line">            #pragma target 3.0</span>
<span class="line"></span>
<span class="line">            // 输入参数</span>
<span class="line">            uniform float3 _BaseCol;</span>
<span class="line">            uniform float3 _LightCol;</span>
<span class="line">            uniform float _SpecPow;</span>
<span class="line">            uniform sampler2D _Occlusion;</span>
<span class="line">            uniform float _EnvInt;</span>
<span class="line">            uniform float3 _EnvUpCol;</span>
<span class="line">            uniform float3 _EnvSideCol;</span>
<span class="line">            uniform float3 _EnvDownCol;</span>
<span class="line"></span>
<span class="line">            // 输入结构</span>
<span class="line">            struct VertexInput {</span>
<span class="line">            float4 vertex : POSITION; // 顶点信息 Get✔</span>
<span class="line">            float4 normal : NORMAL; // 法线信息 Get✔</span>
<span class="line">            float2 uv0 : TEXCOORD0; // UV信息 Get✔</span>
<span class="line">            };</span>
<span class="line"></span>
<span class="line">            // 输出结构</span>
<span class="line">            struct VertexOutput {</span>
<span class="line">            float4 pos : SV_POSITION; // 裁剪空间（暂理解为屏幕空间吧）顶点位置</span>
<span class="line">            float2 uv0 : TEXCOORD0; // UV0</span>
<span class="line">            float4 posWS : TEXCOORD1; // 世界空间顶点位置</span>
<span class="line">            float3 nDirWS : TEXCOORD2; // 世界空间法线方向</span>
<span class="line">            LIGHTING_COORDS(3,4) // 投影相关</span>
<span class="line">            };</span>
<span class="line"></span>
<span class="line">            // 输入结构&gt;&gt;&gt;顶点Shader&gt;&gt;&gt;输出结构</span>
<span class="line">            VertexOutput vert (VertexInput v) {</span>
<span class="line">            VertexOutput o = (VertexOutput)0; // 新建输出结构</span>
<span class="line">            o.pos = UnityObjectToClipPos( v.vertex ); // 变换顶点位置 OS&gt;CS</span>
<span class="line">            o.uv0 = v.uv0; // 传递UV</span>
<span class="line">            o.posWS = mul(unity_ObjectToWorld, v.vertex); // 变换顶点位置 OS&gt;WS</span>
<span class="line">            o.nDirWS = UnityObjectToWorldNormal(v.normal); // 变换法线方向 OS&gt;WS</span>
<span class="line">            TRANSFER_VERTEX_TO_FRAGMENT(o) // 投影相关</span>
<span class="line">            return o; // 返回输出结构</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            // 输出结构&gt;&gt;&gt;像素</span>
<span class="line">            float4 frag(VertexOutput i) : COLOR {</span>
<span class="line">                // 准备向量</span>
<span class="line">                float3 nDir = normalize(i.nDirWS);</span>
<span class="line">                float3 lDir = _WorldSpaceLightPos0.xyz;</span>
<span class="line">                float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);</span>
<span class="line">                float3 rDir = reflect(-lDir, nDir);</span>
<span class="line"></span>
<span class="line">                // 准备点积结果</span>
<span class="line">                float ndotl = dot(nDir, lDir);</span>
<span class="line">                float vdotr = dot(vDir, rDir);</span>
<span class="line"></span>
<span class="line">                // 光照模型(直接光照部分)</span>
<span class="line">                float shadow = LIGHT_ATTENUATION(i); // 获取投影</span>
<span class="line">                float lambert = max(0.0, ndotl);</span>
<span class="line">                float phong = pow(max(0.0, vdotr), _SpecPow);</span>
<span class="line">                float3 dirLighting = (_BaseCol * lambert + phong) * _LightCol * shadow;</span>
<span class="line"></span>
<span class="line">                // 光照模型(环境光照部分)</span>
<span class="line">                float upMask = max(0.0, nDir.g); // 获取朝上部分遮罩</span>
<span class="line">                float downMask = max(0.0, -nDir.g); // 获取朝下部分遮罩</span>
<span class="line">                float sideMask = 1.0 - upMask - downMask; // 获取侧面部分遮罩</span>
<span class="line"></span>
<span class="line">                // 混合环境色</span>
<span class="line">                float3 envCol = _EnvUpCol * upMask + _EnvSideCol * sideMask + _EnvDownCol * downMask;</span>
<span class="line">                float occlusion = tex2D(_Occlusion, i.uv0); // 采样Occlusion贴图</span>
<span class="line">                float3 envLighting = envCol * _EnvInt * occlusion; // 计算环境光照</span>
<span class="line"></span>
<span class="line">                // 返回结果</span>
<span class="line">                float3 finalRGB = dirLighting + envLighting;</span>
<span class="line">                return float4(finalRGB, 1.0);</span>
<span class="line">            }</span>
<span class="line">            ENDCG</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    FallBack &quot;Diffuse&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4))]),n[3]||(n[3]=a(`<p> </p><h2 id="作业客评" tabindex="-1"><a class="header-anchor" href="#作业客评"><span>作业客评：</span></a></h2><p>收录一下自己需要了解的节点实现方式</p><h3 id="task1" tabindex="-1"><a class="header-anchor" href="#task1"><span>Task1</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/sf_task01_452.png" style="width:85% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311131250.png" style="width:15% !important;"></div><ul><li>使用phong 输出合并作为uv再使用rampTex进行采样</li><li>取nDir.g 上半部分mask 与相乘 fresnel, 得到朝上的fresnel的mask</li><li>使用lerp 表现上半fresnel phong的效果</li><li>然后再add 一个lambert</li></ul><h3 id="task2" tabindex="-1"><a class="header-anchor" href="#task2"><span>Task2</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/sf_task02_45.png" style="width:85% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240313094527.png" style="width:15% !important;"></div><ul><li>使用3ColAmbient + fresnel + ao 做基本的变化</li><li>添加 shadow 和 phong-高光</li><li>再次添加一个fresnel 模拟sss 做通透些。</li></ul><p> </p><h2 id="normal-实现的原理" tabindex="-1"><a class="header-anchor" href="#normal-实现的原理"><span>Normal 实现的原理</span></a></h2><ol><li>采样法线贴图并解码；</li><li>构建TBN矩阵；</li><li>将切线空间下的法线转到世界空间，并归一化；</li><li>输出世界空间下的法线信息</li></ol><p>简而言之就是把切线空间转化为世界空间，就<code>normal</code>转为<code>worldspaceNomral</code></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311023329.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311031330.png" style="width:95% !important;"></div><p>::: code-tabs#shell</p><p>@tab NomralMapSampler</p><div class="language-shader line-numbers-mode" data-highlighter="prismjs" data-ext="shader" data-title="shader"><pre><code><span class="line">float3 nDirTS = UnpackNormal(tex2D(normalMap, uv));</span>
<span class="line">float3x3 TBN = float3x3(tDir, bDir, nDir);</span>
<span class="line">float3 nDirWS = normalize(mul(nDirTS, TBN));</span>
<span class="line">return nDirWS;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h4 id="ntb矩阵" tabindex="-1"><a class="header-anchor" href="#ntb矩阵"><span>NTB矩阵</span></a></h4><p>TBN矩阵是一种在计算机图形学中常用的矩阵，用于描述曲面局部几何的朝向。TBN矩阵包含了切线（Tangent）、双切线（Bitangent）和法线（Normal）三个基向量，通常用于将纹理坐标从对象空间（Object Space）转换到切线空间（Tangent Space），以便在片元着色器中进行光照计算。通过TBN矩阵，可以实现对物体表面局部细节的精确渲染，提高图形的真实感和逼真度。</p><h4 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h4><p>NTB矩阵常见在片元着色器中用于处理法线贴图：</p><ul><li><p><code>float3 nDirTS = UnpackNormal(tex2D(normalMap, uv))</code>：这行代码通过采样法线贴图（normalMap）来获取纹理坐标（uv）处的法线向量，并将其解压缩成单位长度的三维向量（nDirTS）。</p></li><li><p><code>float3x3 TBN = float3x3(tDir, bDir, nDir);</code>：这行代码定义了一个3x3的TBN矩阵，其中包含了切线（tDir）、双切线（bDir）和法线（nDir）向量。</p></li><li><p><code>float3 nDirWS = normalize(mul(nDirTS, TBN));</code>：这行代码将纹理空间（TS）中的法线向量（nDirTS）转换为世界空间（WS）中的法线向量（nDirWS）。通过将纹理空间的法线向量与TBN矩阵相乘，并对结果进行归一化，可以将法线向量从纹理空间转换到世界空间，以便进行光照计算等操作。</p></li></ul><p> </p><h3 id="normal-vs" tabindex="-1"><a class="header-anchor" href="#normal-vs"><span>Normal VS</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022529.png" style="width:22% !important;"></div><p><strong>代码实现</strong></p><p>::: code-tabs#shell</p><p>@tab Base-Nomral</p><div class="language-shader line-numbers-mode" data-highlighter="prismjs" data-ext="shader" data-title="shader"><pre><code><span class="line">\uFEFFShader &quot;AP1/L08/L08_Nomral_VS&quot;  // 定义Shader路径</span>
<span class="line">{</span>
<span class="line">    // 材质面板参数</span>
<span class="line">    Properties {</span>
<span class="line">            _NormalMap (&quot;NormalMap&quot;, 2D) = &quot;black&quot; {}</span>
<span class="line">    }</span>
<span class="line">    SubShader {</span>
<span class="line">        Tags {</span>
<span class="line">            &quot;RenderType&quot;=&quot;Opaque&quot;</span>
<span class="line">        }</span>
<span class="line">        Pass {</span>
<span class="line">            Name &quot;FORWARD&quot;</span>
<span class="line">            Tags {</span>
<span class="line">                &quot;LightMode&quot;=&quot;ForwardBase&quot;</span>
<span class="line">            }</span>
<span class="line">            </span>
<span class="line">            CGPROGRAM</span>
<span class="line">            #pragma vertex vert</span>
<span class="line">            #pragma fragment frag</span>
<span class="line">            #include &quot;UnityCG.cginc&quot;</span>
<span class="line">            #pragma multi_compile_fwdbase_fullshadows</span>
<span class="line">            #pragma target 3.0</span>
<span class="line"></span>
<span class="line">            // 输入参数</span>
<span class="line">            uniform sampler2D _NormalMap;</span>
<span class="line"></span>
<span class="line">            // 输入结构</span>
<span class="line">            struct VertexInput {</span>
<span class="line">                float4 vertex : POSITION;       //将模型的顶点信息输入进来</span>
<span class="line">                float3 normal : NORMAL;         //将模型的noraml信息输入进来</span>
<span class="line">                float4 tangent : TANGENT;       //模型的tangent信息输入进来 </span>
<span class="line">                float2 uv0 : TEXCOORD0;         //uv</span>
<span class="line">            };</span>
<span class="line">            // 输出结构</span>
<span class="line">            struct VertexOutput {</span>
<span class="line">                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置</span>
<span class="line">                float2 uv0 : TEXCOORD0;</span>
<span class="line">                float3 nDirWS : TEXCOORD1;   //由模型法线信息换算来的世界空间法线信息</span>
<span class="line">                float3 tDirWS : TEXCOORD2;</span>
<span class="line">                float3 bDirWS : TEXCOORD3;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            };</span>
<span class="line">            // 输入结构 &gt;&gt;&gt; 顶点shader &gt;&gt;&gt; 输出结构 ，下面是个函数构架</span>
<span class="line">            VertexOutput vert (VertexInput v) {</span>
<span class="line">                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构</span>
<span class="line">                    o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构</span>
<span class="line">                    o.uv0 = v.uv0;</span>
<span class="line">                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构</span>
<span class="line">                    o.tDirWS = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );</span>
<span class="line">                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);</span>
<span class="line">            return o;                                                // 将输出结构 输出</span>
<span class="line">            }</span>
<span class="line">            // 输出结构 &gt;&gt;&gt; 像素</span>
<span class="line">            float4 frag(VertexOutput i) : COLOR {</span>
<span class="line">                // 获取nDir</span>
<span class="line">                float3 var_NormalMap = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码 切线空间nDir</span>
<span class="line">                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS); // 构建TBN矩阵</span>
<span class="line">                float3 nDir = normalize(mul(var_NormalMap, TBN)); // 世界空间nDir</span>
<span class="line">                // 获取lDir</span>
<span class="line">                float3 lDir = _WorldSpaceLightPos0.xyz;</span>
<span class="line">                // 一般Lambert</span>
<span class="line">                float nDotl = dot(nDir, lDir); // nDir点积lDir</span>
<span class="line">                float lambert = max(0.0, nDotl); // 截断负值</span>
<span class="line">                return float4(lambert, lambert, lambert, 1.0); // 输出最终颜色</span>
<span class="line">            }</span>
<span class="line">            ENDCG</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    FallBack &quot;Diffuse&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Nomral+Phong</p><div class="language-shader line-numbers-mode" data-highlighter="prismjs" data-ext="shader" data-title="shader"><pre><code><span class="line">\uFEFFShader &quot;AP1/L08/L08_Nomral_VS&quot;  // 定义Shader路径</span>
<span class="line">{</span>
<span class="line">    // 材质面板参数</span>
<span class="line">    Properties {</span>
<span class="line">        _NormalMap (&quot;NormalMap&quot;, 2D) = &quot;black&quot; {}</span>
<span class="line">        </span>
<span class="line">        _MainCol2       (&quot;颜色&quot;, color) = (1.0, 1.0, 1.0, 1.0)</span>
<span class="line">        _MainCol3       (&quot;高光颜色&quot;, color) = (1.0, 1.0, 1.0, 1.0)</span>
<span class="line">        _SpecularPow    (&quot;高光次幂&quot;, range(1,50)) = 30    </span>
<span class="line">    }</span>
<span class="line">    SubShader {</span>
<span class="line">        Tags {</span>
<span class="line">            &quot;RenderType&quot;=&quot;Opaque&quot;</span>
<span class="line">        }</span>
<span class="line">        Pass {</span>
<span class="line">            Name &quot;FORWARD&quot;</span>
<span class="line">            Tags {</span>
<span class="line">                &quot;LightMode&quot;=&quot;ForwardBase&quot;</span>
<span class="line">            }</span>
<span class="line">            </span>
<span class="line">            CGPROGRAM</span>
<span class="line">            #pragma vertex vert</span>
<span class="line">            #pragma fragment frag</span>
<span class="line">            #include &quot;UnityCG.cginc&quot;</span>
<span class="line">            #pragma multi_compile_fwdbase_fullshadows</span>
<span class="line">            #pragma target 3.0</span>
<span class="line"></span>
<span class="line">            // 输入参数</span>
<span class="line">            uniform sampler2D _NormalMap;</span>
<span class="line">            uniform float3 _MainCol;</span>
<span class="line">            uniform float3 _MainCol2; // RGB float3</span>
<span class="line">            uniform float3 _MainCol3; // RGB float3</span>
<span class="line">            uniform float _SpecularPow; // 标量 float</span>
<span class="line"></span>
<span class="line">            // 输入结构</span>
<span class="line">            struct VertexInput {</span>
<span class="line">                float4 vertex : POSITION;       //将模型的顶点信息输入进来</span>
<span class="line">                float3 normal : NORMAL;         //将模型的noraml信息输入进来</span>
<span class="line">                float4 tangent : TANGENT;       //模型的tangent信息输入进来 </span>
<span class="line">                float2 uv0 : TEXCOORD0;         //uv</span>
<span class="line">                </span>
<span class="line">            };</span>
<span class="line">            // 输出结构</span>
<span class="line">            struct VertexOutput {</span>
<span class="line">                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置</span>
<span class="line">                float2 uv0 : TEXCOORD0;</span>
<span class="line">                float3 nDirWS : TEXCOORD1;   //由模型法线信息换算来的世界空间法线信息</span>
<span class="line">                float3 tDirWS : TEXCOORD2;</span>
<span class="line">                float3 bDirWS : TEXCOORD3;</span>
<span class="line">                float4 posWS : TEXCOORD4;       //世界空间顶点位置</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            };</span>
<span class="line">            // 输入结构 &gt;&gt;&gt; 顶点shader &gt;&gt;&gt; 输出结构 ，下面是个函数构架</span>
<span class="line">            VertexOutput vert (VertexInput v) {</span>
<span class="line">                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构</span>
<span class="line">                    o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构</span>
<span class="line">                    o.uv0 = v.uv0;</span>
<span class="line">                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构</span>
<span class="line">                    o.tDirWS = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );</span>
<span class="line">                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);</span>
<span class="line">                    o.posWS = mul(unity_ObjectToWorld, v.vertex);   // 变换顶点位置 OS&gt;WS</span>
<span class="line">            return o;                                                // 将输出结构 输出</span>
<span class="line">            }</span>
<span class="line">            // 输出结构 &gt;&gt;&gt; 像素</span>
<span class="line">            float4 frag(VertexOutput i) : COLOR {</span>
<span class="line">                // 获取nDir</span>
<span class="line">                float3 var_NormalMap = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码 切线空间nDir</span>
<span class="line">                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS); // 构建TBN矩阵</span>
<span class="line">                float3 nDir = normalize(mul(var_NormalMap, TBN)); // 世界空间nDir</span>
<span class="line">                // 获取lDir</span>
<span class="line">                float3 lDir = _WorldSpaceLightPos0.xyz;</span>
<span class="line">                // 获取vDir</span>
<span class="line">                float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);</span>
<span class="line">                float3 vRDir = reflect( -vDir, nDir );</span>
<span class="line"></span>
<span class="line">                // 一般Lambert phong</span>
<span class="line">                float nDotl = dot(nDir, lDir); // nDir点积lDir</span>
<span class="line">                float lambert = max(0.0, nDotl); // 截断负值</span>
<span class="line">                float vRDotl = dot(vRDir, lDir);  //得到phong</span>
<span class="line">                float Phong = pow(max(0.0,vRDotl),_SpecularPow);</span>
<span class="line"></span>
<span class="line">                float3 finalRGB = (_MainCol2* lambert) + (Phong * _MainCol3);</span>
<span class="line">                return float4(finalRGB, 1.0); // 输出最终颜色</span>
<span class="line">            }</span>
<span class="line">            ENDCG</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    FallBack &quot;Diffuse&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,34))])}const b=i(t,[["render",v],["__file","shader8.html.vue"]]),g=JSON.parse('{"path":"/engine/unity/shader/shader8.html","title":"unity-shader-08","lang":"zh-CN","frontmatter":{"title":"unity-shader-08","description":"摘要：答疑、作业答案、Normal 实现的原理","icon":"iconfont alicon-shader","category":"shader","tags":["shader","unity"],"date":"2024-03-10T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022449.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader8.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-08"}],["meta",{"property":"og:description","content":"摘要：答疑、作业答案、Normal 实现的原理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022449.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022449.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-08"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-08\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022449.png\\"],\\"datePublished\\":\\"2024-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":3,"title":"答疑：","slug":"答疑","link":"#答疑","children":[]},{"level":2,"title":"作业答案：","slug":"作业答案","link":"#作业答案","children":[]},{"level":2,"title":"作业客评：","slug":"作业客评","link":"#作业客评","children":[{"level":3,"title":"Task1","slug":"task1","link":"#task1","children":[]},{"level":3,"title":"Task2","slug":"task2","link":"#task2","children":[]}]},{"level":2,"title":"Normal 实现的原理","slug":"normal-实现的原理","link":"#normal-实现的原理","children":[{"level":3,"title":"Normal VS","slug":"normal-vs","link":"#normal-vs","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":5}]},"filePathRelative":"engine/unity/shader/shader8.md","localizedDate":"2024年3月10日","excerpt":"<p>摘要：答疑、作业答案、Normal 实现的原理</p>\\n","autoDesc":true}');export{b as comp,g as data};
