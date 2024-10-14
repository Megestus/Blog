import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as s,e as p,f as a,a as t,o as r,r as d}from"./app-DGrbN9aA.js";const c={};function o(v,n){const i=d("Badge");return r(),e("div",null,[n[1]||(n[1]=s("p",null,"摘要：答疑、作业回顾、定义面板参数",-1)),p(" more "),n[2]||(n[2]=a('<p> </p><h3 id="答疑" tabindex="-1"><a class="header-anchor" href="#答疑"><span>答疑</span></a></h3><ul><li><p>啥时候能讲金属度和粗糙度贴图的用法？加上这俩是不是就是魔改PBR？</p><ul><li>PBR的由来之一就是对表面参数的概括；可以看到Shader的功能加的越多，面板参数也堆的越多；怎么通过寻找 参数之间的物理关系，来减少面板参数，是PBR的内容之一；所以不能脱离物理模型谈金属度，粗糙度贴图；</li><li>以PBR基于物理为核修改，叫魔改PBR；把一些PBR用到的BRDF或者纹理名称移植到传统模型，那还是传统模型， 不叫魔改PBR；</li><li>手游PBS中什么叫基于物理为核，1）基于物理的光能守恒；2）基于物理的表面属性归纳；3）微表面理论；</li><li>现在谈还太早；</li></ul></li><li><p>为什么高低模不变，旋转UV，烘焙的法线贴图会变？</p><ul><li>法线贴图是记录在切线空间的法线信息；</li><li>切线空间的主副切线方向可直观理解为，贴图在表面处的uv轴方向；</li><li>模型不变，切线空间变了，记录的法线信息也会改变；</li></ul></li><li><p>能否用所学课程创建无缝Shader？</p><ul><li>预计算的东西（Lightmap 曲率图 等等）就是拿内存换性能；这个交换一般来说都是值得的；</li><li>所以，不要用Shader去计算，资源上就可以解决的事情；</li></ul></li><li><p>mul(),dot(),*各种乘法的区别？float2,3,4怎么用？代码如何实现贴图的TilingOffset？</p><ul><li>周日复习课一并拿出来讲；</li></ul></li><li><p>SF可以嵌套其他Shader吗？SF相关的快捷键操作？</p><ul><li>职业生涯SF就只会了一周(然后就转代码了)，真不太熟，抱歉了；</li><li>SF是学习代码的辅助，我们熟悉代码之后是要扔掉它的，不用太过纠结；</li></ul></li><li><p>可以整理个能力模型吗？从入门&gt;进阶&gt;资深这种：</p><ul><li>一般都是领导和HR才来问我这种问题，也有现成的答案来帮助他们按图索骥，但是作为从业人员建议关心下 入门标准就好；</li><li>能力模型每个公司，甚至每个工作室的标准都不一样；且随时间激烈改变，看太长远不如关注当下；最简单 的，找你想去公司对应岗位的招聘简介；</li><li>不要迷信仙人指路，小心到你这成了刻舟求剑；做好你实际面对的每一个选择，跨过你实际面对的每一道坎， 千万不要在自己或者别人假想中的职业生涯里，无效的投入时间；</li><li>如上，没有面对选择和挑战的环境，那就创造环境；</li></ul></li></ul><h2 id="作业回顾" tabindex="-1"><a class="header-anchor" href="#作业回顾"><span>作业回顾</span></a></h2><p>连连看作业： - Matcap，Cubemap； - OldSchoolPro = OldSchoolPlus + Normal + Cubemap；</p><ul><li>符文作业： <ul><li>Matcap；</li><li>OldSchoolPro；</li></ul></li><li>创意作业： <ul><li>改进你的完备光照模型；</li></ul></li></ul><h4 id="回顾分析光照过程" tabindex="-1"><a class="header-anchor" href="#回顾分析光照过程"><span>回顾分析光照过程</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325005821.png" style="width:95% !important;"></div><ul><li>对光的遮挡是投影</li><li>对环境的遮挡是AO</li></ul><h3 id="答案-oldschoolpro" tabindex="-1"><a class="header-anchor" href="#答案-oldschoolpro"><span>答案-OldSchoolPro</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325010835.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011020.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011055.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011121.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011152.png" style="width:95% !important;"></div><h3 id="答案-oldschoolpro-vs" tabindex="-1"><a class="header-anchor" href="#答案-oldschoolpro-vs"><span>答案-OldSchoolPro-VS</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011234.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011251.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011308.png" style="width:95% !important;"></div><ul><li>为巩固所学内容，从FlatCol作为模板开始；</li><li>复制粘贴，修改Shader路径名；</li><li>定义面板参数<br> - [Header(XXX)] 排版</li><li>为产生投影，包含以下文件：<br> - AutoLight.cginc<br> - Lighting.cginc</li><li>与材质面板一一对应声明输入参数；</li><li>输入结构包含：<br> - POSITION 顶点位置；<br> - TEXCOORD0 纹理UV0；<br> - NORMAL 法线方向；<br> - TANGENT 切线方向；</li><li>输出结构包含：<br> - pos 屏幕顶点位置；<br> - uv0 纹理UV0；<br> - posWS 世界空间位置<br> - nDirWS 世界空间法线<br> - tDirWS 世界空间切线<br> - bDirWS 世界空间副切线<br> - LIGHTING_COORD() 投影信息</li><li>顶点Shader，编写对应输入输出结构内容；</li><li>像素Shader，五段式写法：<br> - 向量准备 - 中间量准备 - 纹理采样 - 光照模型 - 返回值</li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325021625.png" style="width:75% !important;"></div>',21)),s("details",null,[s("summary",null,[t(i,{text:"Code-view",color:"#e0dd8b"})]),n[0]||(n[0]=a(`<p>::: code-tabs#shell</p><p>@tab L10_Task_OldSchoolPro.shader</p><div class="language-shader line-numbers-mode" data-highlighter="prismjs" data-ext="shader" data-title="shader"><pre><code><span class="line">\uFEFFShader &quot;AP1/L10/Task_OldSchoolPro&quot; {</span>
<span class="line">    Properties {</span>
<span class="line">        [Header(Texture)]</span>
<span class="line">        _MainTex (&quot;RGB:基础颜色 A:环境遮罩&quot;, 2D) = &quot;white&quot; {}</span>
<span class="line">        _NormTex (&quot;RGB:法线贴图&quot;, 2D) = &quot;bump&quot; {}</span>
<span class="line">        _SpecTex (&quot;RGB:高光颜色 A:高光次幂&quot;, 2D) = &quot;gray&quot; {}</span>
<span class="line">        _EmitTex (&quot;RGB:自发光贴图&quot;, 2d) = &quot;black&quot; {}</span>
<span class="line">        _Cubemap (&quot;RGB:环境贴图&quot;, cube) = &quot;_Skybox&quot; {}</span>
<span class="line">        [Header(Diffuse)]</span>
<span class="line">        _MainCol (&quot;基本色&quot;, Color) = (0.5, 0.5, 0.5, 1.0)</span>
<span class="line">        _EnvDiffInt (&quot;环境漫反射强度&quot;, Range(0, 1)) = 0.2</span>
<span class="line">        _EnvUpCol (&quot;环境天顶颜色&quot;, Color) = (1.0, 1.0, 1.0, 1.0)</span>
<span class="line">        _EnvSideCol (&quot;环境水平颜色&quot;, Color) = (0.5, 0.5, 0.5, 1.0)</span>
<span class="line">        _EnvDownCol (&quot;环境地表颜色&quot;, Color) = (0.0, 0.0, 0.0, 0.0)</span>
<span class="line">        [Header(Specular)]</span>
<span class="line">        _SpecPow (&quot;高光次幂&quot;, Range(1, 90)) = 30</span>
<span class="line">        _EnvSpecInt (&quot;环境镜面反射强度&quot;, Range(0, 5)) = 0.2</span>
<span class="line">        _FresnelPow (&quot;菲涅尔次幂&quot;, Range(0, 5)) = 1</span>
<span class="line">        _CubemapMip (&quot;环境球Mip&quot;, Range(0, 7)) = 0</span>
<span class="line">        [Header(Emission)]</span>
<span class="line">        _EmitInt (&quot;自发光强度&quot;, range(1, 10)) = 1</span>
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
<span class="line">            // 追加投影相关包含文件</span>
<span class="line">            #include &quot;AutoLight.cginc&quot;</span>
<span class="line">            #include &quot;Lighting.cginc&quot;</span>
<span class="line">            #pragma multi_compile_fwdbase_fullshadows</span>
<span class="line">            #pragma target 3.0</span>
<span class="line">            // 输入参数</span>
<span class="line">            // Texture</span>
<span class="line">            uniform sampler2D _MainTex;</span>
<span class="line">            uniform sampler2D _NormTex;</span>
<span class="line">            uniform sampler2D _SpecTex;</span>
<span class="line">            uniform sampler2D _EmitTex;</span>
<span class="line">            uniform samplerCUBE _Cubemap;</span>
<span class="line">            // Diffuse</span>
<span class="line">            uniform float3 _MainCol;</span>
<span class="line">            uniform float _EnvDiffInt;</span>
<span class="line">            uniform float3 _EnvUpCol;</span>
<span class="line">            uniform float3 _EnvSideCol;</span>
<span class="line">            uniform float3 _EnvDownCol;</span>
<span class="line">            // Specular</span>
<span class="line">            uniform float _SpecPow;</span>
<span class="line">            uniform float _FresnelPow;</span>
<span class="line">            uniform float _EnvSpecInt;</span>
<span class="line">            uniform float _CubemapMip;</span>
<span class="line">            // Emission</span>
<span class="line">            uniform float _EmitInt;</span>
<span class="line"></span>
<span class="line">            // 输入结构</span>
<span class="line">            struct VertexInput {</span>
<span class="line">                float4 vertex : POSITION; // 顶点信息 Get✔</span>
<span class="line">                float2 uv0 : TEXCOORD0; // UV信息 Get✔</span>
<span class="line">                float4 normal : NORMAL; // 法线信息 Get✔</span>
<span class="line">                float4 tangent : TANGENT; // 切线信息 Get✔</span>
<span class="line">            };</span>
<span class="line">            // 输出结构</span>
<span class="line">            struct VertexOutput {</span>
<span class="line">                float4 pos : SV_POSITION; // 屏幕顶点位置</span>
<span class="line">                float2 uv0 : TEXCOORD0; // UV0</span>
<span class="line">                float4 posWS : TEXCOORD1; // 世界空间顶点位置</span>
<span class="line">                float3 nDirWS : TEXCOORD2; // 世界空间法线方向</span>
<span class="line">                float3 tDirWS : TEXCOORD3; // 世界空间切线方向</span>
<span class="line">                float3 bDirWS : TEXCOORD4; // 世界空间副切线方向</span>
<span class="line">                LIGHTING_COORDS(5,6) // 投影相关</span>
<span class="line">            };</span>
<span class="line">            // 输入结构&gt;&gt;&gt;顶点Shader&gt;&gt;&gt;输出结构</span>
<span class="line">            VertexOutput vert (VertexInput v) {</span>
<span class="line">                VertexOutput o = (VertexOutput)0; // 新建输出结构</span>
<span class="line">                    o.pos = UnityObjectToClipPos( v.vertex ); // 顶点位置 OS&gt;CS</span>
<span class="line">                    o.uv0 = v.uv0; // 传递UV</span>
<span class="line">                    o.posWS = mul(unity_ObjectToWorld, v.vertex); // 顶点位置 OS&gt;WS</span>
<span class="line">                    o.nDirWS = UnityObjectToWorldNormal(v.normal); // 法线方向 OS&gt;WS</span>
<span class="line">                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); // 切线方向 OS&gt;WS</span>
<span class="line">                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w); // 副切线方向</span>
<span class="line">                    TRANSFER_VERTEX_TO_FRAGMENT(o) // 投影相关</span>
<span class="line">                return o; // 返回输出结构</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            float4 frag(VertexOutput i) : COLOR {</span>
<span class="line">                // 准备向量</span>
<span class="line">                float3 nDirTS = UnpackNormal(tex2D(_NormTex, i.uv0)).rgb;</span>
<span class="line">                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS);</span>
<span class="line">                float3 nDirWS = normalize(mul(nDirTS, TBN));</span>
<span class="line">                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);</span>
<span class="line">                float3 vrDirWS = reflect(-vDirWS, nDirWS);</span>
<span class="line">                float3 lDirWS = _WorldSpaceLightPos0.xyz;</span>
<span class="line">                float3 lrDirWS = reflect(-lDirWS, nDirWS);</span>
<span class="line">                // 准备点积结果</span>
<span class="line">                float ndotl = dot(nDirWS, lDirWS);</span>
<span class="line">                float vdotr = dot(vDirWS, lrDirWS);</span>
<span class="line">                float vdotn = dot(vDirWS, nDirWS);</span>
<span class="line">                // 采样纹理</span>
<span class="line">                float4 var_MainTex = tex2D(_MainTex, i.uv0);</span>
<span class="line">                float4 var_SpecTex = tex2D(_SpecTex, i.uv0);</span>
<span class="line">                float3 var_EmitTex = tex2D(_EmitTex, i.uv0).rgb;</span>
<span class="line">                float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, lerp(_CubemapMip, 0.0, var_SpecTex.a))).rgb;</span>
<span class="line">                // 光照模型(直接光照部分)</span>
<span class="line">                float3 baseCol = var_MainTex.rgb * _MainCol;</span>
<span class="line">                float lambert = max(0.0, ndotl);</span>
<span class="line">                float specCol = var_SpecTex.rgb;</span>
<span class="line">                float specPow = lerp(1, _SpecPow, var_SpecTex.a);</span>
<span class="line">                float phong = pow(max(0.0, vdotr), specPow);</span>
<span class="line">                float shadow = LIGHT_ATTENUATION(i);</span>
<span class="line">                float3 dirLighting = (baseCol * lambert + specCol * phong) * _LightColor0 * shadow;</span>
<span class="line">                // 光照模型(环境光照部分)</span>
<span class="line">                float upMask = max(0.0, nDirWS.g); // 获取朝上部分遮罩</span>
<span class="line">                float downMask = max(0.0, -nDirWS.g); // 获取朝下部分遮罩</span>
<span class="line">                float sideMask = 1.0 - upMask - downMask; // 获取侧面部分遮罩</span>
<span class="line">                float3 envCol = _EnvUpCol * upMask +_EnvSideCol * sideMask +_EnvDownCol * downMask; // 混合环境色</span>
<span class="line">                float fresnel = pow(max(0.0, 1.0 - vdotn), _FresnelPow); // 菲涅尔</span>
<span class="line">                float occlusion = var_MainTex.a;</span>
<span class="line">                float3 envLighting = (baseCol * envCol * _EnvDiffInt + var_Cubemap * fresnel * _EnvSpecInt * var_SpecTex.a) * occlusion;</span>
<span class="line">                // 光照模型(自发光部分)</span>
<span class="line">                float3 emission = var_EmitTex * _EmitInt;</span>
<span class="line">                // 返回结果</span>
<span class="line">                float3 finalRGB = dirLighting + envLighting + emission;</span>
<span class="line">                return float4(finalRGB, 1.0);</span>
<span class="line">            }</span>
<span class="line">            ENDCG</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    FallBack &quot;Diffuse&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4))]),n[3]||(n[3]=a(`<p> </p><h3 id="输出结构-像素-五段式" tabindex="-1"><a class="header-anchor" href="#输出结构-像素-五段式"><span>输出结构&gt;像素 - 五段式</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 向量准备</span>
<span class="line"></span>
<span class="line">//中间量准备</span>
<span class="line"></span>
<span class="line">//纹理采样</span>
<span class="line"></span>
<span class="line">  float4 var_MainTex = tex2D(_MainTex, i.uv0);          </span>
<span class="line">  //贴图使用了哪些通道就取多少通道</span>
<span class="line">  float4 var_SpecTex = tex2D(_SpecTex, i.uv0);</span>
<span class="line">  float3 var_EmitTex = tex2D(_EmitTex, i.uv0).rgb;</span>
<span class="line">  float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, lerp(_CubemapMip, 0.0, var_SpecTex.a))).rgb;           </span>
<span class="line">  //这里使用vrDirWS lerp(_CubemapMip, 0.0, var_SpecTex.a)使用 cubemapMip 和 SpecTex 的a通道lerp 再乘vrDirWS 这样就能达到光滑的地方越清晰 粗糙的地方越模糊的效果。</span>
<span class="line"></span>
<span class="line">//光照模型</span>
<span class="line">  //光源漫反射</span>
<span class="line"></span>
<span class="line">  //光源镜面反射</span>
<span class="line"></span>
<span class="line">  //环境漫反射</span>
<span class="line"></span>
<span class="line">  //环境镜面反射</span>
<span class="line"></span>
<span class="line">  //环境反射混合</span>
<span class="line"></span>
<span class="line">  //最终混合</span>
<span class="line">//返回值</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const b=l(c,[["render",o],["__file","shader10.html.vue"]]),g=JSON.parse('{"path":"/engine/unity/shader/shader10.html","title":"unity-shader-10","lang":"zh-CN","frontmatter":{"title":"unity-shader-10","description":"摘要：答疑、作业回顾、定义面板参数","icon":"iconfont alicon-shader","category":"shader","tags":["shader","unity"],"date":"2024-03-24T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225324.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader10.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-10"}],["meta",{"property":"og:description","content":"摘要：答疑、作业回顾、定义面板参数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225324.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225324.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-10"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-03-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-10\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225324.png\\"],\\"datePublished\\":\\"2024-03-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":3,"title":"答疑","slug":"答疑","link":"#答疑","children":[]},{"level":2,"title":"作业回顾","slug":"作业回顾","link":"#作业回顾","children":[{"level":3,"title":"答案-OldSchoolPro","slug":"答案-oldschoolpro","link":"#答案-oldschoolpro","children":[]},{"level":3,"title":"答案-OldSchoolPro-VS","slug":"答案-oldschoolpro-vs","link":"#答案-oldschoolpro-vs","children":[]},{"level":3,"title":"输出结构>像素 - 五段式","slug":"输出结构-像素-五段式","link":"#输出结构-像素-五段式","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":4}]},"filePathRelative":"engine/unity/shader/shader10.md","localizedDate":"2024年3月24日","excerpt":"<p>摘要：答疑、作业回顾、定义面板参数</p>\\n","autoDesc":true}');export{b as comp,g as data};
