import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as m,d as e,a as i,w as n,f as s,r as l,o as u,e as v}from"./app-C8rAUWGV.js";const p={},b=e("p",null,"摘要：答疑、作业回顾、定义面板参数",-1),h=s('<p> </p><h3 id="答疑" tabindex="-1"><a class="header-anchor" href="#答疑"><span>答疑</span></a></h3><ul><li><p>啥时候能讲金属度和粗糙度贴图的用法？加上这俩是不是就是魔改PBR？</p><ul><li>PBR的由来之一就是对表面参数的概括；可以看到Shader的功能加的越多，面板参数也堆的越多；怎么通过寻找 参数之间的物理关系，来减少面板参数，是PBR的内容之一；所以不能脱离物理模型谈金属度，粗糙度贴图；</li><li>以PBR基于物理为核修改，叫魔改PBR；把一些PBR用到的BRDF或者纹理名称移植到传统模型，那还是传统模型， 不叫魔改PBR；</li><li>手游PBS中什么叫基于物理为核，1）基于物理的光能守恒；2）基于物理的表面属性归纳；3）微表面理论；</li><li>现在谈还太早；</li></ul></li><li><p>为什么高低模不变，旋转UV，烘焙的法线贴图会变？</p><ul><li>法线贴图是记录在切线空间的法线信息；</li><li>切线空间的主副切线方向可直观理解为，贴图在表面处的uv轴方向；</li><li>模型不变，切线空间变了，记录的法线信息也会改变；</li></ul></li><li><p>能否用所学课程创建无缝Shader？</p><ul><li>预计算的东西（Lightmap 曲率图 等等）就是拿内存换性能；这个交换一般来说都是值得的；</li><li>所以，不要用Shader去计算，资源上就可以解决的事情；</li></ul></li><li><p>mul(),dot(),*各种乘法的区别？float2,3,4怎么用？代码如何实现贴图的TilingOffset？</p><ul><li>周日复习课一并拿出来讲；</li></ul></li><li><p>SF可以嵌套其他Shader吗？SF相关的快捷键操作？</p><ul><li>职业生涯SF就只会了一周(然后就转代码了)，真不太熟，抱歉了；</li><li>SF是学习代码的辅助，我们熟悉代码之后是要扔掉它的，不用太过纠结；</li></ul></li><li><p>可以整理个能力模型吗？从入门&gt;进阶&gt;资深这种：</p><ul><li>一般都是领导和HR才来问我这种问题，也有现成的答案来帮助他们按图索骥，但是作为从业人员建议关心下 入门标准就好；</li><li>能力模型每个公司，甚至每个工作室的标准都不一样；且随时间激烈改变，看太长远不如关注当下；最简单 的，找你想去公司对应岗位的招聘简介；</li><li>不要迷信仙人指路，小心到你这成了刻舟求剑；做好你实际面对的每一个选择，跨过你实际面对的每一道坎， 千万不要在自己或者别人假想中的职业生涯里，无效的投入时间；</li><li>如上，没有面对选择和挑战的环境，那就创造环境；</li></ul></li></ul><h2 id="作业回顾" tabindex="-1"><a class="header-anchor" href="#作业回顾"><span>作业回顾</span></a></h2><p>连连看作业： - Matcap，Cubemap； - OldSchoolPro = OldSchoolPlus + Normal + Cubemap；</p><ul><li>符文作业： <ul><li>Matcap；</li><li>OldSchoolPro；</li></ul></li><li>创意作业： <ul><li>改进你的完备光照模型；</li></ul></li></ul><h4 id="回顾分析光照过程" tabindex="-1"><a class="header-anchor" href="#回顾分析光照过程"><span>回顾分析光照过程</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325005821.png" style="width:95% !important;"></div><ul><li>对光的遮挡是投影</li><li>对环境的遮挡是AO</li></ul><h3 id="答案-oldschoolpro" tabindex="-1"><a class="header-anchor" href="#答案-oldschoolpro"><span>答案-OldSchoolPro</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325010835.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011020.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011055.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011121.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011152.png" style="width:95% !important;"></div><h3 id="答案-oldschoolpro-vs" tabindex="-1"><a class="header-anchor" href="#答案-oldschoolpro-vs"><span>答案-OldSchoolPro-VS</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011234.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011251.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325011308.png" style="width:95% !important;"></div><ul><li>为巩固所学内容，从FlatCol作为模板开始；</li><li>复制粘贴，修改Shader路径名；</li><li>定义面板参数<br> - [Header(XXX)] 排版</li><li>为产生投影，包含以下文件：<br> - AutoLight.cginc<br> - Lighting.cginc</li><li>与材质面板一一对应声明输入参数；</li><li>输入结构包含：<br> - POSITION 顶点位置；<br> - TEXCOORD0 纹理UV0；<br> - NORMAL 法线方向；<br> - TANGENT 切线方向；</li><li>输出结构包含：<br> - pos 屏幕顶点位置；<br> - uv0 纹理UV0；<br> - posWS 世界空间位置<br> - nDirWS 世界空间法线<br> - tDirWS 世界空间切线<br> - bDirWS 世界空间副切线<br> - LIGHTING_COORD() 投影信息</li><li>顶点Shader，编写对应输入输出结构内容；</li><li>像素Shader，五段式写法：<br> - 向量准备 - 中间量准备 - 纹理采样 - 光照模型 - 返回值</li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240325021625.png" style="width:75% !important;"></div>',21),g=e("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[e("pre",{class:"language-shader"},[e("code",null,`\uFEFFShader "AP1/L10/Task_OldSchoolPro" {
    Properties {
        [Header(Texture)]
        _MainTex ("RGB:基础颜色 A:环境遮罩", 2D) = "white" {}
        _NormTex ("RGB:法线贴图", 2D) = "bump" {}
        _SpecTex ("RGB:高光颜色 A:高光次幂", 2D) = "gray" {}
        _EmitTex ("RGB:自发光贴图", 2d) = "black" {}
        _Cubemap ("RGB:环境贴图", cube) = "_Skybox" {}
        [Header(Diffuse)]
        _MainCol ("基本色", Color) = (0.5, 0.5, 0.5, 1.0)
        _EnvDiffInt ("环境漫反射强度", Range(0, 1)) = 0.2
        _EnvUpCol ("环境天顶颜色", Color) = (1.0, 1.0, 1.0, 1.0)
        _EnvSideCol ("环境水平颜色", Color) = (0.5, 0.5, 0.5, 1.0)
        _EnvDownCol ("环境地表颜色", Color) = (0.0, 0.0, 0.0, 0.0)
        [Header(Specular)]
        _SpecPow ("高光次幂", Range(1, 90)) = 30
        _EnvSpecInt ("环境镜面反射强度", Range(0, 5)) = 0.2
        _FresnelPow ("菲涅尔次幂", Range(0, 5)) = 1
        _CubemapMip ("环境球Mip", Range(0, 7)) = 0
        [Header(Emission)]
        _EmitInt ("自发光强度", range(1, 10)) = 1
    }
    SubShader {
        Tags {
            "RenderType"="Opaque"
        }
        Pass {
            Name "FORWARD"
            Tags {
                "LightMode"="ForwardBase"
            }
            
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            // 追加投影相关包含文件
            #include "AutoLight.cginc"
            #include "Lighting.cginc"
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0
            // 输入参数
            // Texture
            uniform sampler2D _MainTex;
            uniform sampler2D _NormTex;
            uniform sampler2D _SpecTex;
            uniform sampler2D _EmitTex;
            uniform samplerCUBE _Cubemap;
            // Diffuse
            uniform float3 _MainCol;
            uniform float _EnvDiffInt;
            uniform float3 _EnvUpCol;
            uniform float3 _EnvSideCol;
            uniform float3 _EnvDownCol;
            // Specular
            uniform float _SpecPow;
            uniform float _FresnelPow;
            uniform float _EnvSpecInt;
            uniform float _CubemapMip;
            // Emission
            uniform float _EmitInt;

            // 输入结构
            struct VertexInput {
                float4 vertex : POSITION; // 顶点信息 Get✔
                float2 uv0 : TEXCOORD0; // UV信息 Get✔
                float4 normal : NORMAL; // 法线信息 Get✔
                float4 tangent : TANGENT; // 切线信息 Get✔
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION; // 屏幕顶点位置
                float2 uv0 : TEXCOORD0; // UV0
                float4 posWS : TEXCOORD1; // 世界空间顶点位置
                float3 nDirWS : TEXCOORD2; // 世界空间法线方向
                float3 tDirWS : TEXCOORD3; // 世界空间切线方向
                float3 bDirWS : TEXCOORD4; // 世界空间副切线方向
                LIGHTING_COORDS(5,6) // 投影相关
            };
            // 输入结构>>>顶点Shader>>>输出结构
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0; // 新建输出结构
                    o.pos = UnityObjectToClipPos( v.vertex ); // 顶点位置 OS>CS
                    o.uv0 = v.uv0; // 传递UV
                    o.posWS = mul(unity_ObjectToWorld, v.vertex); // 顶点位置 OS>WS
                    o.nDirWS = UnityObjectToWorldNormal(v.normal); // 法线方向 OS>WS
                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); // 切线方向 OS>WS
                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w); // 副切线方向
                    TRANSFER_VERTEX_TO_FRAGMENT(o) // 投影相关
                return o; // 返回输出结构
            }

            float4 frag(VertexOutput i) : COLOR {
                // 准备向量
                float3 nDirTS = UnpackNormal(tex2D(_NormTex, i.uv0)).rgb;
                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS);
                float3 nDirWS = normalize(mul(nDirTS, TBN));
                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);
                float3 vrDirWS = reflect(-vDirWS, nDirWS);
                float3 lDirWS = _WorldSpaceLightPos0.xyz;
                float3 lrDirWS = reflect(-lDirWS, nDirWS);
                // 准备点积结果
                float ndotl = dot(nDirWS, lDirWS);
                float vdotr = dot(vDirWS, lrDirWS);
                float vdotn = dot(vDirWS, nDirWS);
                // 采样纹理
                float4 var_MainTex = tex2D(_MainTex, i.uv0);
                float4 var_SpecTex = tex2D(_SpecTex, i.uv0);
                float3 var_EmitTex = tex2D(_EmitTex, i.uv0).rgb;
                float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, lerp(_CubemapMip, 0.0, var_SpecTex.a))).rgb;
                // 光照模型(直接光照部分)
                float3 baseCol = var_MainTex.rgb * _MainCol;
                float lambert = max(0.0, ndotl);
                float specCol = var_SpecTex.rgb;
                float specPow = lerp(1, _SpecPow, var_SpecTex.a);
                float phong = pow(max(0.0, vdotr), specPow);
                float shadow = LIGHT_ATTENUATION(i);
                float3 dirLighting = (baseCol * lambert + specCol * phong) * _LightColor0 * shadow;
                // 光照模型(环境光照部分)
                float upMask = max(0.0, nDirWS.g); // 获取朝上部分遮罩
                float downMask = max(0.0, -nDirWS.g); // 获取朝下部分遮罩
                float sideMask = 1.0 - upMask - downMask; // 获取侧面部分遮罩
                float3 envCol = _EnvUpCol * upMask +_EnvSideCol * sideMask +_EnvDownCol * downMask; // 混合环境色
                float fresnel = pow(max(0.0, 1.0 - vdotn), _FresnelPow); // 菲涅尔
                float occlusion = var_MainTex.a;
                float3 envLighting = (baseCol * envCol * _EnvDiffInt + var_Cubemap * fresnel * _EnvSpecInt * var_SpecTex.a) * occlusion;
                // 光照模型(自发光部分)
                float3 emission = var_EmitTex * _EmitInt;
                // 返回结果
                float3 finalRGB = dirLighting + envLighting + emission;
                return float4(finalRGB, 1.0);
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=s(`<p> </p><h3 id="输出结构-像素-五段式" tabindex="-1"><a class="header-anchor" href="#输出结构-像素-五段式"><span>输出结构&gt;像素 - 五段式</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 向量准备

//中间量准备

//纹理采样

  float4 var_MainTex = tex2D(_MainTex, i.uv0);          
  //贴图使用了哪些通道就取多少通道
  float4 var_SpecTex = tex2D(_SpecTex, i.uv0);
  float3 var_EmitTex = tex2D(_EmitTex, i.uv0).rgb;
  float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, lerp(_CubemapMip, 0.0, var_SpecTex.a))).rgb;           
  //这里使用vrDirWS lerp(_CubemapMip, 0.0, var_SpecTex.a)使用 cubemapMip 和 SpecTex 的a通道lerp 再乘vrDirWS 这样就能达到光滑的地方越清晰 粗糙的地方越模糊的效果。

//光照模型
  //光源漫反射

  //光源镜面反射

  //环境漫反射

  //环境镜面反射

  //环境反射混合

  //最终混合
//返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function f(S,x){const a=l("Badge"),r=l("CodeTabs");return u(),c("div",null,[b,m(" more "),h,e("details",null,[e("summary",null,[i(a,{text:"Code-view",color:"#e0dd8b"})]),i(r,{id:"250",data:[{id:"L10_Task_OldSchoolPro.shader"}],"tab-id":"shell"},{title0:n(({value:t,isActive:o})=>[v("L10_Task_OldSchoolPro.shader")]),tab0:n(({value:t,isActive:o})=>[g]),_:1})]),_])}const y=d(p,[["render",f],["__file","shader10.html.vue"]]),C=JSON.parse('{"path":"/engine/unity/shader/shader10.html","title":"unity-shader-10","lang":"zh-CN","frontmatter":{"title":"unity-shader-10","description":"摘要：答疑、作业回顾、定义面板参数","icon":"iconfont alicon-shader","category":"shader","tag":["shader","unity"],"date":"2024-03-24T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225324.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader10.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-10"}],["meta",{"property":"og:description","content":"摘要：答疑、作业回顾、定义面板参数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225324.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T09:07:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225324.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-10"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-03-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T09:07:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-10\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330225324.png\\"],\\"datePublished\\":\\"2024-03-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-15T09:07:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":3,"title":"答疑","slug":"答疑","link":"#答疑","children":[]},{"level":2,"title":"作业回顾","slug":"作业回顾","link":"#作业回顾","children":[{"level":3,"title":"答案-OldSchoolPro","slug":"答案-oldschoolpro","link":"#答案-oldschoolpro","children":[]},{"level":3,"title":"答案-OldSchoolPro-VS","slug":"答案-oldschoolpro-vs","link":"#答案-oldschoolpro-vs","children":[]},{"level":3,"title":"输出结构>像素 - 五段式","slug":"输出结构-像素-五段式","link":"#输出结构-像素-五段式","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1718442447000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":3}]},"filePathRelative":"engine/unity/shader/shader10.md","localizedDate":"2024年3月24日","excerpt":"<p>摘要：答疑、作业回顾、定义面板参数</p>\\n","autoDesc":true}');export{y as comp,C as data};
