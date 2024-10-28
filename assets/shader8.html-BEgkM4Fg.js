import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as n,e as u,f as t,a as r,g as a,r as m,o as v,d as s}from"./app-Ci0y5QkK.js";const b={};function g(h,l){const p=m("Badge"),c=m("CodeTabs");return v(),o("div",null,[l[8]||(l[8]=n("p",null,"摘要：答疑、作业答案、Normal 实现的原理",-1)),u(" more "),l[9]||(l[9]=t('<p> </p><h3 id="答疑" tabindex="-1"><a class="header-anchor" href="#答疑"><span>答疑：</span></a></h3><ul><li>if判断断开部分Shader语句，有无优化效果？ <ul><li>没有优化效果，渲染时会执行每一个if分支，一般不写if；</li><li>一般用ShaderFeature，MultiCompile；超纲；</li></ul></li></ul><p> </p><h2 id="作业答案" tabindex="-1"><a class="header-anchor" href="#作业答案"><span>作业答案：</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311004230.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311004313.png" style="width:95% !important;"></div>',7)),n("details",null,[n("summary",null,[r(p,{text:"Code-view",color:"#e0dd8b"})]),r(c,{id:"38",data:[{id:"L08_OldSchoolPlus_VS.shader"}],"tab-id":"shell"},{title0:a(({value:e,isActive:i})=>l[0]||(l[0]=[s("L08_OldSchoolPlus_VS.shader")])),tab0:a(({value:e,isActive:i})=>l[1]||(l[1]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},'Shader "AP01/L08/L08_OldSchoolPlus_VS" '),s(`
`),n("span",{class:"line"},"{"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},'            _BaseCol ("基本色", Color) = (0.5, 0.5, 0.5, 1.0)'),s(`
`),n("span",{class:"line"},'            _LightCol ("光颜色", Color) = (1.0, 1.0, 1.0, 1.0)'),s(`
`),n("span",{class:"line"},'            _SpecPow ("高光次幂", Range(1, 90)) = 30'),s(`
`),n("span",{class:"line"},'            _Occlusion ("AO图", 2D) = "white" {}'),s(`
`),n("span",{class:"line"},'            _EnvInt ("环境光强度", Range(0, 1)) = 0.2'),s(`
`),n("span",{class:"line"},'            _EnvUpCol ("环境天顶颜色", Color) = (1.0, 1.0, 1.0, 1.0)'),s(`
`),n("span",{class:"line"},'            _EnvSideCol ("环境水平颜色", Color) = (0.5, 0.5, 0.5, 1.0)'),s(`
`),n("span",{class:"line"},'            _EnvDownCol ("环境地表颜色", Color) = (0.0, 0.0, 0.0, 0.0)'),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"    SubShader {"),s(`
`),n("span",{class:"line"},"        Tags {"),s(`
`),n("span",{class:"line"},'        "RenderType"="Opaque"'),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"        Pass {"),s(`
`),n("span",{class:"line"},'            Name "FORWARD"'),s(`
`),n("span",{class:"line"},"            Tags {"),s(`
`),n("span",{class:"line"},'            "LightMode"="ForwardBase"'),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            CGPROGRAM"),s(`
`),n("span",{class:"line"},"            #pragma vertex vert"),s(`
`),n("span",{class:"line"},"            #pragma fragment frag"),s(`
`),n("span",{class:"line"},'            #include "UnityCG.cginc"'),s(`
`),n("span",{class:"line"},"            // 追加投影相关包含文件"),s(`
`),n("span",{class:"line"},'            #include "AutoLight.cginc"'),s(`
`),n("span",{class:"line"},'            #include "Lighting.cginc"'),s(`
`),n("span",{class:"line"},"            #pragma multi_compile_fwdbase_fullshadows"),s(`
`),n("span",{class:"line"},"            #pragma target 3.0"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入参数"),s(`
`),n("span",{class:"line"},"            uniform float3 _BaseCol;"),s(`
`),n("span",{class:"line"},"            uniform float3 _LightCol;"),s(`
`),n("span",{class:"line"},"            uniform float _SpecPow;"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _Occlusion;"),s(`
`),n("span",{class:"line"},"            uniform float _EnvInt;"),s(`
`),n("span",{class:"line"},"            uniform float3 _EnvUpCol;"),s(`
`),n("span",{class:"line"},"            uniform float3 _EnvSideCol;"),s(`
`),n("span",{class:"line"},"            uniform float3 _EnvDownCol;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"            float4 vertex : POSITION; // 顶点信息 Get✔"),s(`
`),n("span",{class:"line"},"            float4 normal : NORMAL; // 法线信息 Get✔"),s(`
`),n("span",{class:"line"},"            float2 uv0 : TEXCOORD0; // UV信息 Get✔"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输出结构"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"            float4 pos : SV_POSITION; // 裁剪空间（暂理解为屏幕空间吧）顶点位置"),s(`
`),n("span",{class:"line"},"            float2 uv0 : TEXCOORD0; // UV0"),s(`
`),n("span",{class:"line"},"            float4 posWS : TEXCOORD1; // 世界空间顶点位置"),s(`
`),n("span",{class:"line"},"            float3 nDirWS : TEXCOORD2; // 世界空间法线方向"),s(`
`),n("span",{class:"line"},"            LIGHTING_COORDS(3,4) // 投影相关"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构>>>顶点Shader>>>输出结构"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"            VertexOutput o = (VertexOutput)0; // 新建输出结构"),s(`
`),n("span",{class:"line"},"            o.pos = UnityObjectToClipPos( v.vertex ); // 变换顶点位置 OS>CS"),s(`
`),n("span",{class:"line"},"            o.uv0 = v.uv0; // 传递UV"),s(`
`),n("span",{class:"line"},"            o.posWS = mul(unity_ObjectToWorld, v.vertex); // 变换顶点位置 OS>WS"),s(`
`),n("span",{class:"line"},"            o.nDirWS = UnityObjectToWorldNormal(v.normal); // 变换法线方向 OS>WS"),s(`
`),n("span",{class:"line"},"            TRANSFER_VERTEX_TO_FRAGMENT(o) // 投影相关"),s(`
`),n("span",{class:"line"},"            return o; // 返回输出结构"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输出结构>>>像素"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                // 准备向量"),s(`
`),n("span",{class:"line"},"                float3 nDir = normalize(i.nDirWS);"),s(`
`),n("span",{class:"line"},"                float3 lDir = _WorldSpaceLightPos0.xyz;"),s(`
`),n("span",{class:"line"},"                float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);"),s(`
`),n("span",{class:"line"},"                float3 rDir = reflect(-lDir, nDir);"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                // 准备点积结果"),s(`
`),n("span",{class:"line"},"                float ndotl = dot(nDir, lDir);"),s(`
`),n("span",{class:"line"},"                float vdotr = dot(vDir, rDir);"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                // 光照模型(直接光照部分)"),s(`
`),n("span",{class:"line"},"                float shadow = LIGHT_ATTENUATION(i); // 获取投影"),s(`
`),n("span",{class:"line"},"                float lambert = max(0.0, ndotl);"),s(`
`),n("span",{class:"line"},"                float phong = pow(max(0.0, vdotr), _SpecPow);"),s(`
`),n("span",{class:"line"},"                float3 dirLighting = (_BaseCol * lambert + phong) * _LightCol * shadow;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                // 光照模型(环境光照部分)"),s(`
`),n("span",{class:"line"},"                float upMask = max(0.0, nDir.g); // 获取朝上部分遮罩"),s(`
`),n("span",{class:"line"},"                float downMask = max(0.0, -nDir.g); // 获取朝下部分遮罩"),s(`
`),n("span",{class:"line"},"                float sideMask = 1.0 - upMask - downMask; // 获取侧面部分遮罩"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                // 混合环境色"),s(`
`),n("span",{class:"line"},"                float3 envCol = _EnvUpCol * upMask + _EnvSideCol * sideMask + _EnvDownCol * downMask;"),s(`
`),n("span",{class:"line"},"                float occlusion = tex2D(_Occlusion, i.uv0); // 采样Occlusion贴图"),s(`
`),n("span",{class:"line"},"                float3 envLighting = envCol * _EnvInt * occlusion; // 计算环境光照"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                // 返回结果"),s(`
`),n("span",{class:"line"},"                float3 finalRGB = dirLighting + envLighting;"),s(`
`),n("span",{class:"line"},"                return float4(finalRGB, 1.0);"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})]),l[10]||(l[10]=t('<p> </p><h2 id="作业客评" tabindex="-1"><a class="header-anchor" href="#作业客评"><span>作业客评：</span></a></h2><p>收录一下自己需要了解的节点实现方式</p><h3 id="task1" tabindex="-1"><a class="header-anchor" href="#task1"><span>Task1</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/sf_task01_452.png" style="width:85% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311131250.png" style="width:15% !important;"></div><ul><li>使用phong 输出合并作为uv再使用rampTex进行采样</li><li>取nDir.g 上半部分mask 与相乘 fresnel, 得到朝上的fresnel的mask</li><li>使用lerp 表现上半fresnel phong的效果</li><li>然后再add 一个lambert</li></ul><h3 id="task2" tabindex="-1"><a class="header-anchor" href="#task2"><span>Task2</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/sf_task02_45.png" style="width:85% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240313094527.png" style="width:15% !important;"></div><ul><li>使用3ColAmbient + fresnel + ao 做基本的变化</li><li>添加 shadow 和 phong-高光</li><li>再次添加一个fresnel 模拟sss 做通透些。</li></ul><p> </p><h2 id="normal-实现的原理" tabindex="-1"><a class="header-anchor" href="#normal-实现的原理"><span>Normal 实现的原理</span></a></h2><ol><li>采样法线贴图并解码；</li><li>构建TBN矩阵；</li><li>将切线空间下的法线转到世界空间，并归一化；</li><li>输出世界空间下的法线信息</li></ol><p>简而言之就是把切线空间转化为世界空间，就<code>normal</code>转为<code>worldspaceNomral</code></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311023329.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311031330.png" style="width:95% !important;"></div>',15)),r(c,{id:"133",data:[{id:"NomralMapSampler"}],"tab-id":"shell"},{title0:a(({value:e,isActive:i})=>l[2]||(l[2]=[s("NomralMapSampler")])),tab0:a(({value:e,isActive:i})=>l[3]||(l[3]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"float3 nDirTS = UnpackNormal(tex2D(normalMap, uv));"),s(`
`),n("span",{class:"line"},"float3x3 TBN = float3x3(tDir, bDir, nDir);"),s(`
`),n("span",{class:"line"},"float3 nDirWS = normalize(mul(nDirTS, TBN));"),s(`
`),n("span",{class:"line"},"return nDirWS;"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[11]||(l[11]=t('<h4 id="ntb矩阵" tabindex="-1"><a class="header-anchor" href="#ntb矩阵"><span>NTB矩阵</span></a></h4><p>TBN矩阵是一种在计算机图形学中常用的矩阵，用于描述曲面局部几何的朝向。TBN矩阵包含了切线（Tangent）、双切线（Bitangent）和法线（Normal）三个基向量，通常用于将纹理坐标从对象空间（Object Space）转换到切线空间（Tangent Space），以便在片元着色器中进行光照计算。通过TBN矩阵，可以实现对物体表面局部细节的精确渲染，提高图形的真实感和逼真度。</p><h4 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h4><p>NTB矩阵常见在片元着色器中用于处理法线贴图：</p><ul><li><p><code>float3 nDirTS = UnpackNormal(tex2D(normalMap, uv))</code>：这行代码通过采样法线贴图（normalMap）来获取纹理坐标（uv）处的法线向量，并将其解压缩成单位长度的三维向量（nDirTS）。</p></li><li><p><code>float3x3 TBN = float3x3(tDir, bDir, nDir);</code>：这行代码定义了一个3x3的TBN矩阵，其中包含了切线（tDir）、双切线（bDir）和法线（nDir）向量。</p></li><li><p><code>float3 nDirWS = normalize(mul(nDirTS, TBN));</code>：这行代码将纹理空间（TS）中的法线向量（nDirTS）转换为世界空间（WS）中的法线向量（nDirWS）。通过将纹理空间的法线向量与TBN矩阵相乘，并对结果进行归一化，可以将法线向量从纹理空间转换到世界空间，以便进行光照计算等操作。</p></li></ul><p> </p><h3 id="normal-vs" tabindex="-1"><a class="header-anchor" href="#normal-vs"><span>Normal VS</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022529.png" style="width:22% !important;"></div><p><strong>代码实现</strong></p>',9)),r(c,{id:"177",data:[{id:"Base-Nomral"},{id:"Nomral+Phong"}],"tab-id":"shell"},{title0:a(({value:e,isActive:i})=>l[4]||(l[4]=[s("Base-Nomral")])),title1:a(({value:e,isActive:i})=>l[5]||(l[5]=[s("Nomral+Phong")])),tab0:a(({value:e,isActive:i})=>l[6]||(l[6]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},'\uFEFFShader "AP1/L08/L08_Nomral_VS"  // 定义Shader路径'),s(`
`),n("span",{class:"line"},"{"),s(`
`),n("span",{class:"line"},"    // 材质面板参数"),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},'            _NormalMap ("NormalMap", 2D) = "black" {}'),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},"    SubShader {"),s(`
`),n("span",{class:"line"},"        Tags {"),s(`
`),n("span",{class:"line"},'            "RenderType"="Opaque"'),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"        Pass {"),s(`
`),n("span",{class:"line"},'            Name "FORWARD"'),s(`
`),n("span",{class:"line"},"            Tags {"),s(`
`),n("span",{class:"line"},'                "LightMode"="ForwardBase"'),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            "),s(`
`),n("span",{class:"line"},"            CGPROGRAM"),s(`
`),n("span",{class:"line"},"            #pragma vertex vert"),s(`
`),n("span",{class:"line"},"            #pragma fragment frag"),s(`
`),n("span",{class:"line"},'            #include "UnityCG.cginc"'),s(`
`),n("span",{class:"line"},"            #pragma multi_compile_fwdbase_fullshadows"),s(`
`),n("span",{class:"line"},"            #pragma target 3.0"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入参数"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _NormalMap;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;       //将模型的顶点信息输入进来"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;         //将模型的noraml信息输入进来"),s(`
`),n("span",{class:"line"},"                float4 tangent : TANGENT;       //模型的tangent信息输入进来 "),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD0;         //uv"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输出结构"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD0;"),s(`
`),n("span",{class:"line"},"                float3 nDirWS : TEXCOORD1;   //由模型法线信息换算来的世界空间法线信息"),s(`
`),n("span",{class:"line"},"                float3 tDirWS : TEXCOORD2;"),s(`
`),n("span",{class:"line"},"                float3 bDirWS : TEXCOORD3;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构"),s(`
`),n("span",{class:"line"},"                    o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.uv0 = v.uv0;"),s(`
`),n("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.tDirWS = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );"),s(`
`),n("span",{class:"line"},"                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);"),s(`
`),n("span",{class:"line"},"            return o;                                                // 将输出结构 输出"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            // 输出结构 >>> 像素"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                // 获取nDir"),s(`
`),n("span",{class:"line"},"                float3 var_NormalMap = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码 切线空间nDir"),s(`
`),n("span",{class:"line"},"                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS); // 构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 nDir = normalize(mul(var_NormalMap, TBN)); // 世界空间nDir"),s(`
`),n("span",{class:"line"},"                // 获取lDir"),s(`
`),n("span",{class:"line"},"                float3 lDir = _WorldSpaceLightPos0.xyz;"),s(`
`),n("span",{class:"line"},"                // 一般Lambert"),s(`
`),n("span",{class:"line"},"                float nDotl = dot(nDir, lDir); // nDir点积lDir"),s(`
`),n("span",{class:"line"},"                float lambert = max(0.0, nDotl); // 截断负值"),s(`
`),n("span",{class:"line"},"                return float4(lambert, lambert, lambert, 1.0); // 输出最终颜色"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:e,isActive:i})=>l[7]||(l[7]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},'\uFEFFShader "AP1/L08/L08_Nomral_VS"  // 定义Shader路径'),s(`
`),n("span",{class:"line"},"{"),s(`
`),n("span",{class:"line"},"    // 材质面板参数"),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},'        _NormalMap ("NormalMap", 2D) = "black" {}'),s(`
`),n("span",{class:"line"},"        "),s(`
`),n("span",{class:"line"},'        _MainCol2       ("颜色", color) = (1.0, 1.0, 1.0, 1.0)'),s(`
`),n("span",{class:"line"},'        _MainCol3       ("高光颜色", color) = (1.0, 1.0, 1.0, 1.0)'),s(`
`),n("span",{class:"line"},'        _SpecularPow    ("高光次幂", range(1,50)) = 30    '),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},"    SubShader {"),s(`
`),n("span",{class:"line"},"        Tags {"),s(`
`),n("span",{class:"line"},'            "RenderType"="Opaque"'),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"        Pass {"),s(`
`),n("span",{class:"line"},'            Name "FORWARD"'),s(`
`),n("span",{class:"line"},"            Tags {"),s(`
`),n("span",{class:"line"},'                "LightMode"="ForwardBase"'),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            "),s(`
`),n("span",{class:"line"},"            CGPROGRAM"),s(`
`),n("span",{class:"line"},"            #pragma vertex vert"),s(`
`),n("span",{class:"line"},"            #pragma fragment frag"),s(`
`),n("span",{class:"line"},'            #include "UnityCG.cginc"'),s(`
`),n("span",{class:"line"},"            #pragma multi_compile_fwdbase_fullshadows"),s(`
`),n("span",{class:"line"},"            #pragma target 3.0"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入参数"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _NormalMap;"),s(`
`),n("span",{class:"line"},"            uniform float3 _MainCol;"),s(`
`),n("span",{class:"line"},"            uniform float3 _MainCol2; // RGB float3"),s(`
`),n("span",{class:"line"},"            uniform float3 _MainCol3; // RGB float3"),s(`
`),n("span",{class:"line"},"            uniform float _SpecularPow; // 标量 float"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;       //将模型的顶点信息输入进来"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;         //将模型的noraml信息输入进来"),s(`
`),n("span",{class:"line"},"                float4 tangent : TANGENT;       //模型的tangent信息输入进来 "),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD0;         //uv"),s(`
`),n("span",{class:"line"},"                "),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输出结构"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD0;"),s(`
`),n("span",{class:"line"},"                float3 nDirWS : TEXCOORD1;   //由模型法线信息换算来的世界空间法线信息"),s(`
`),n("span",{class:"line"},"                float3 tDirWS : TEXCOORD2;"),s(`
`),n("span",{class:"line"},"                float3 bDirWS : TEXCOORD3;"),s(`
`),n("span",{class:"line"},"                float4 posWS : TEXCOORD4;       //世界空间顶点位置"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构"),s(`
`),n("span",{class:"line"},"                    o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.uv0 = v.uv0;"),s(`
`),n("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.tDirWS = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );"),s(`
`),n("span",{class:"line"},"                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);"),s(`
`),n("span",{class:"line"},"                    o.posWS = mul(unity_ObjectToWorld, v.vertex);   // 变换顶点位置 OS>WS"),s(`
`),n("span",{class:"line"},"            return o;                                                // 将输出结构 输出"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            // 输出结构 >>> 像素"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                // 获取nDir"),s(`
`),n("span",{class:"line"},"                float3 var_NormalMap = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码 切线空间nDir"),s(`
`),n("span",{class:"line"},"                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS); // 构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 nDir = normalize(mul(var_NormalMap, TBN)); // 世界空间nDir"),s(`
`),n("span",{class:"line"},"                // 获取lDir"),s(`
`),n("span",{class:"line"},"                float3 lDir = _WorldSpaceLightPos0.xyz;"),s(`
`),n("span",{class:"line"},"                // 获取vDir"),s(`
`),n("span",{class:"line"},"                float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);"),s(`
`),n("span",{class:"line"},"                float3 vRDir = reflect( -vDir, nDir );"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                // 一般Lambert phong"),s(`
`),n("span",{class:"line"},"                float nDotl = dot(nDir, lDir); // nDir点积lDir"),s(`
`),n("span",{class:"line"},"                float lambert = max(0.0, nDotl); // 截断负值"),s(`
`),n("span",{class:"line"},"                float vRDotl = dot(vRDir, lDir);  //得到phong"),s(`
`),n("span",{class:"line"},"                float Phong = pow(max(0.0,vRDotl),_SpecularPow);"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                float3 finalRGB = (_MainCol2* lambert) + (Phong * _MainCol3);"),s(`
`),n("span",{class:"line"},"                return float4(finalRGB, 1.0); // 输出最终颜色"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})])}const S=d(b,[["render",g],["__file","shader8.html.vue"]]),O=JSON.parse('{"path":"/engine/unity/shader/shader8.html","title":"unity-shader-08","lang":"zh-CN","frontmatter":{"title":"unity-shader-08","description":"摘要：答疑、作业答案、Normal 实现的原理","icon":"iconfont alicon-shader","category":"shader","tags":["shader","unity"],"date":"2024-03-10T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022449.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader8.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-08"}],["meta",{"property":"og:description","content":"摘要：答疑、作业答案、Normal 实现的原理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022449.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022449.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-08"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-08\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240315022449.png\\"],\\"datePublished\\":\\"2024-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":3,"title":"答疑：","slug":"答疑","link":"#答疑","children":[]},{"level":2,"title":"作业答案：","slug":"作业答案","link":"#作业答案","children":[]},{"level":2,"title":"作业客评：","slug":"作业客评","link":"#作业客评","children":[{"level":3,"title":"Task1","slug":"task1","link":"#task1","children":[]},{"level":3,"title":"Task2","slug":"task2","link":"#task2","children":[]}]},{"level":2,"title":"Normal 实现的原理","slug":"normal-实现的原理","link":"#normal-实现的原理","children":[{"level":3,"title":"Normal VS","slug":"normal-vs","link":"#normal-vs","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":5}]},"filePathRelative":"engine/unity/shader/shader8.md","localizedDate":"2024年3月10日","excerpt":"<p>摘要：答疑、作业答案、Normal 实现的原理</p>\\n","autoDesc":true}');export{S as comp,O as data};
