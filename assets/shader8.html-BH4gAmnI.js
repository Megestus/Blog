import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as u,d as n,a,w as e,f as t,r as d,o as v,e as s}from"./app-BfHAAWql.js";const b={},p=n("p",null,"摘要：答疑、作业答案、Normal 实现的原理",-1),h=t('<p> </p><h3 id="答疑" tabindex="-1"><a class="header-anchor" href="#答疑"><span>答疑：</span></a></h3><ul><li>if判断断开部分Shader语句，有无优化效果？ <ul><li>没有优化效果，渲染时会执行每一个if分支，一般不写if；</li><li>一般用ShaderFeature，MultiCompile；超纲；</li></ul></li></ul><p> </p><h2 id="作业答案" tabindex="-1"><a class="header-anchor" href="#作业答案"><span>作业答案：</span></a></h2><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240311004230.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240311004313.png" style="width:95% !important;"></div>',7),g=n("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[n("pre",{class:"language-shader"},[n("code",null,`Shader "AP01/L08/L08_OldSchoolPlus_VS" 
{

    Properties {
            _BaseCol ("基本色", Color) = (0.5, 0.5, 0.5, 1.0)
            _LightCol ("光颜色", Color) = (1.0, 1.0, 1.0, 1.0)
            _SpecPow ("高光次幂", Range(1, 90)) = 30
            _Occlusion ("AO图", 2D) = "white" {}
            _EnvInt ("环境光强度", Range(0, 1)) = 0.2
            _EnvUpCol ("环境天顶颜色", Color) = (1.0, 1.0, 1.0, 1.0)
            _EnvSideCol ("环境水平颜色", Color) = (0.5, 0.5, 0.5, 1.0)
            _EnvDownCol ("环境地表颜色", Color) = (0.0, 0.0, 0.0, 0.0)
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
            uniform float3 _BaseCol;
            uniform float3 _LightCol;
            uniform float _SpecPow;
            uniform sampler2D _Occlusion;
            uniform float _EnvInt;
            uniform float3 _EnvUpCol;
            uniform float3 _EnvSideCol;
            uniform float3 _EnvDownCol;

            // 输入结构
            struct VertexInput {
            float4 vertex : POSITION; // 顶点信息 Get✔
            float4 normal : NORMAL; // 法线信息 Get✔
            float2 uv0 : TEXCOORD0; // UV信息 Get✔
            };

            // 输出结构
            struct VertexOutput {
            float4 pos : SV_POSITION; // 裁剪空间（暂理解为屏幕空间吧）顶点位置
            float2 uv0 : TEXCOORD0; // UV0
            float4 posWS : TEXCOORD1; // 世界空间顶点位置
            float3 nDirWS : TEXCOORD2; // 世界空间法线方向
            LIGHTING_COORDS(3,4) // 投影相关
            };

            // 输入结构>>>顶点Shader>>>输出结构
            VertexOutput vert (VertexInput v) {
            VertexOutput o = (VertexOutput)0; // 新建输出结构
            o.pos = UnityObjectToClipPos( v.vertex ); // 变换顶点位置 OS>CS
            o.uv0 = v.uv0; // 传递UV
            o.posWS = mul(unity_ObjectToWorld, v.vertex); // 变换顶点位置 OS>WS
            o.nDirWS = UnityObjectToWorldNormal(v.normal); // 变换法线方向 OS>WS
            TRANSFER_VERTEX_TO_FRAGMENT(o) // 投影相关
            return o; // 返回输出结构
            }

            // 输出结构>>>像素
            float4 frag(VertexOutput i) : COLOR {
                // 准备向量
                float3 nDir = normalize(i.nDirWS);
                float3 lDir = _WorldSpaceLightPos0.xyz;
                float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);
                float3 rDir = reflect(-lDir, nDir);

                // 准备点积结果
                float ndotl = dot(nDir, lDir);
                float vdotr = dot(vDir, rDir);

                // 光照模型(直接光照部分)
                float shadow = LIGHT_ATTENUATION(i); // 获取投影
                float lambert = max(0.0, ndotl);
                float phong = pow(max(0.0, vdotr), _SpecPow);
                float3 dirLighting = (_BaseCol * lambert + phong) * _LightCol * shadow;

                // 光照模型(环境光照部分)
                float upMask = max(0.0, nDir.g); // 获取朝上部分遮罩
                float downMask = max(0.0, -nDir.g); // 获取朝下部分遮罩
                float sideMask = 1.0 - upMask - downMask; // 获取侧面部分遮罩

                // 混合环境色
                float3 envCol = _EnvUpCol * upMask + _EnvSideCol * sideMask + _EnvDownCol * downMask;
                float occlusion = tex2D(_Occlusion, i.uv0); // 采样Occlusion贴图
                float3 envLighting = envCol * _EnvInt * occlusion; // 计算环境光照

                // 返回结果
                float3 finalRGB = dirLighting + envLighting;
                return float4(finalRGB, 1.0);
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=t('<p> </p><h2 id="作业客评" tabindex="-1"><a class="header-anchor" href="#作业客评"><span>作业客评：</span></a></h2><p>收录一下自己需要了解的节点实现方式</p><h3 id="task1" tabindex="-1"><a class="header-anchor" href="#task1"><span>Task1</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/1/sf_task01_452.png" style="width:85% !important;"><img src="https://sky.megestu.top/i/1/20240311131250.png" style="width:15% !important;"></div><ul><li>使用phong 输出合并作为uv再使用rampTex进行采样</li><li>取nDir.g 上半部分mask 与相乘 fresnel, 得到朝上的fresnel的mask</li><li>使用lerp 表现上半fresnel phong的效果</li><li>然后再add 一个lambert</li></ul><h3 id="task2" tabindex="-1"><a class="header-anchor" href="#task2"><span>Task2</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/1/sf_task02_45.png" style="width:85% !important;"><img src="https://sky.megestu.top/i/1/20240313094527.png" style="width:15% !important;"></div><ul><li>使用3ColAmbient + fresnel + ao 做基本的变化</li><li>添加 shadow 和 phong-高光</li><li>再次添加一个fresnel 模拟sss 做通透些。</li></ul><p> </p><h2 id="normal-实现的原理" tabindex="-1"><a class="header-anchor" href="#normal-实现的原理"><span>Normal 实现的原理</span></a></h2><ol><li>采样法线贴图并解码；</li><li>构建TBN矩阵；</li><li>将切线空间下的法线转到世界空间，并归一化；</li><li>输出世界空间下的法线信息</li></ol><p>简而言之就是把切线空间转化为世界空间，就<code>normal</code>转为<code>worldspaceNomral</code></p><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240311023329.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240311031330.png" style="width:95% !important;"></div>',15),D=n("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[n("pre",{class:"language-shader"},[n("code",null,`float3 nDirTS = UnpackNormal(tex2D(normalMap, uv));
float3x3 TBN = float3x3(tDir, bDir, nDir);
float3 nDirWS = normalize(mul(nDirTS, TBN));
return nDirWS;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=t('<h4 id="ntb矩阵" tabindex="-1"><a class="header-anchor" href="#ntb矩阵"><span>NTB矩阵</span></a></h4><p>TBN矩阵是一种在计算机图形学中常用的矩阵，用于描述曲面局部几何的朝向。TBN矩阵包含了切线（Tangent）、双切线（Bitangent）和法线（Normal）三个基向量，通常用于将纹理坐标从对象空间（Object Space）转换到切线空间（Tangent Space），以便在片元着色器中进行光照计算。通过TBN矩阵，可以实现对物体表面局部细节的精确渲染，提高图形的真实感和逼真度。</p><h4 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h4><p>NTB矩阵常见在片元着色器中用于处理法线贴图：</p><ul><li><p><code>float3 nDirTS = UnpackNormal(tex2D(normalMap, uv))</code>：这行代码通过采样法线贴图（normalMap）来获取纹理坐标（uv）处的法线向量，并将其解压缩成单位长度的三维向量（nDirTS）。</p></li><li><p><code>float3x3 TBN = float3x3(tDir, bDir, nDir);</code>：这行代码定义了一个3x3的TBN矩阵，其中包含了切线（tDir）、双切线（bDir）和法线（nDir）向量。</p></li><li><p><code>float3 nDirWS = normalize(mul(nDirTS, TBN));</code>：这行代码将纹理空间（TS）中的法线向量（nDirTS）转换为世界空间（WS）中的法线向量（nDirWS）。通过将纹理空间的法线向量与TBN矩阵相乘，并对结果进行归一化，可以将法线向量从纹理空间转换到世界空间，以便进行光照计算等操作。</p></li></ul><p> </p><h3 id="normal-vs" tabindex="-1"><a class="header-anchor" href="#normal-vs"><span>Normal VS</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240315022529.png" style="width:22% !important;"></div><p><strong>代码实现</strong></p>',9),S=n("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[n("pre",{class:"language-shader"},[n("code",null,`\uFEFFShader "AP1/L08/L08_Nomral_VS"  // 定义Shader路径
{
    // 材质面板参数
    Properties {
            _NormalMap ("NormalMap", 2D) = "black" {}
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
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0

            // 输入参数
            uniform sampler2D _NormalMap;

            // 输入结构
            struct VertexInput {
                float4 vertex : POSITION;       //将模型的顶点信息输入进来
                float3 normal : NORMAL;         //将模型的noraml信息输入进来
                float4 tangent : TANGENT;       //模型的tangent信息输入进来 
                float2 uv0 : TEXCOORD0;         //uv
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置
                float2 uv0 : TEXCOORD0;
                float3 nDirWS : TEXCOORD1;   //由模型法线信息换算来的世界空间法线信息
                float3 tDirWS : TEXCOORD2;
                float3 bDirWS : TEXCOORD3;


            };
            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构
                    o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构
                    o.uv0 = v.uv0;
                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构
                    o.tDirWS = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );
                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);
            return o;                                                // 将输出结构 输出
            }
            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                // 获取nDir
                float3 var_NormalMap = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码 切线空间nDir
                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS); // 构建TBN矩阵
                float3 nDir = normalize(mul(var_NormalMap, TBN)); // 世界空间nDir
                // 获取lDir
                float3 lDir = _WorldSpaceLightPos0.xyz;
                // 一般Lambert
                float nDotl = dot(nDir, lDir); // nDir点积lDir
                float lambert = max(0.0, nDotl); // 截断负值
                return float4(lambert, lambert, lambert, 1.0); // 输出最终颜色
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[n("pre",{class:"language-shader"},[n("code",null,`\uFEFFShader "AP1/L08/L08_Nomral_VS"  // 定义Shader路径
{
    // 材质面板参数
    Properties {
        _NormalMap ("NormalMap", 2D) = "black" {}
        
        _MainCol2       ("颜色", color) = (1.0, 1.0, 1.0, 1.0)
        _MainCol3       ("高光颜色", color) = (1.0, 1.0, 1.0, 1.0)
        _SpecularPow    ("高光次幂", range(1,50)) = 30    
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
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0

            // 输入参数
            uniform sampler2D _NormalMap;
            uniform float3 _MainCol;
            uniform float3 _MainCol2; // RGB float3
            uniform float3 _MainCol3; // RGB float3
            uniform float _SpecularPow; // 标量 float

            // 输入结构
            struct VertexInput {
                float4 vertex : POSITION;       //将模型的顶点信息输入进来
                float3 normal : NORMAL;         //将模型的noraml信息输入进来
                float4 tangent : TANGENT;       //模型的tangent信息输入进来 
                float2 uv0 : TEXCOORD0;         //uv
                
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置
                float2 uv0 : TEXCOORD0;
                float3 nDirWS : TEXCOORD1;   //由模型法线信息换算来的世界空间法线信息
                float3 tDirWS : TEXCOORD2;
                float3 bDirWS : TEXCOORD3;
                float4 posWS : TEXCOORD4;       //世界空间顶点位置


            };
            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构
                    o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构
                    o.uv0 = v.uv0;
                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构
                    o.tDirWS = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );
                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);
                    o.posWS = mul(unity_ObjectToWorld, v.vertex);   // 变换顶点位置 OS>WS
            return o;                                                // 将输出结构 输出
            }
            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                // 获取nDir
                float3 var_NormalMap = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码 切线空间nDir
                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS); // 构建TBN矩阵
                float3 nDir = normalize(mul(var_NormalMap, TBN)); // 世界空间nDir
                // 获取lDir
                float3 lDir = _WorldSpaceLightPos0.xyz;
                // 获取vDir
                float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);
                float3 vRDir = reflect( -vDir, nDir );

                // 一般Lambert phong
                float nDotl = dot(nDir, lDir); // nDir点积lDir
                float lambert = max(0.0, nDotl); // 截断负值
                float vRDotl = dot(vRDir, lDir);  //得到phong
                float Phong = pow(max(0.0,vRDotl),_SpecularPow);

                float3 finalRGB = (_MainCol2* lambert) + (Phong * _MainCol3);
                return float4(finalRGB, 1.0); // 输出最终颜色
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function T(N,x){const m=d("Badge"),r=d("CodeTabs");return v(),c("div",null,[p,u(" more "),h,n("details",null,[n("summary",null,[a(m,{text:"Code-view",color:"#e0dd8b"})]),a(r,{id:"38",data:[{id:"L08_OldSchoolPlus_VS.shader"}],"tab-id":"shell"},{title0:e(({value:l,isActive:i})=>[s("L08_OldSchoolPlus_VS.shader")]),tab0:e(({value:l,isActive:i})=>[g]),_:1})]),f,a(r,{id:"133",data:[{id:"NomralMapSampler"}],"tab-id":"shell"},{title0:e(({value:l,isActive:i})=>[s("NomralMapSampler")]),tab0:e(({value:l,isActive:i})=>[D]),_:1}),_,a(r,{id:"177",data:[{id:"Base-Nomral"},{id:"Nomral+Phong"}],"tab-id":"shell"},{title0:e(({value:l,isActive:i})=>[s("Base-Nomral")]),title1:e(({value:l,isActive:i})=>[s("Nomral+Phong")]),tab0:e(({value:l,isActive:i})=>[S]),tab1:e(({value:l,isActive:i})=>[O]),_:1})])}const k=o(b,[["render",T],["__file","shader8.html.vue"]]),R=JSON.parse('{"path":"/engine/unity/shader/shader8.html","title":"unity-shader-08","lang":"zh-CN","frontmatter":{"title":"unity-shader-08","description":"摘要：答疑、作业答案、Normal 实现的原理","icon":"iconfont alicon-shader","category":"shader","tag":["shader","unity"],"date":"2024-03-10T00:00:00.000Z","cover":"https://sky.megestu.top/i/1/20240315022449.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader8.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-08"}],["meta",{"property":"og:description","content":"摘要：答疑、作业答案、Normal 实现的原理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://sky.megestu.top/i/1/20240315022449.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-21T14:19:51.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://sky.megestu.top/i/1/20240315022449.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-08"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-21T14:19:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-08\\",\\"image\\":[\\"https://sky.megestu.top/i/1/20240315022449.png\\"],\\"datePublished\\":\\"2024-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-21T14:19:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":3,"title":"答疑：","slug":"答疑","link":"#答疑","children":[]},{"level":2,"title":"作业答案：","slug":"作业答案","link":"#作业答案","children":[]},{"level":2,"title":"作业客评：","slug":"作业客评","link":"#作业客评","children":[{"level":3,"title":"Task1","slug":"task1","link":"#task1","children":[]},{"level":3,"title":"Task2","slug":"task2","link":"#task2","children":[]}]},{"level":2,"title":"Normal 实现的原理","slug":"normal-实现的原理","link":"#normal-实现的原理","children":[{"level":3,"title":"Normal VS","slug":"normal-vs","link":"#normal-vs","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1713709191000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":3}]},"filePathRelative":"engine/unity/shader/shader8.md","localizedDate":"2024年3月10日","excerpt":"<p>摘要：答疑、作业答案、Normal 实现的原理</p>\\n","autoDesc":true}');export{k as comp,R as data};
