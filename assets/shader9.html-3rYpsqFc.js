import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as u,o as m,c as v,b,d as n,a as e,w as i,e as l,f as o}from"./app-CnUMdGhv.js";const p={},_=n("p",null,"摘要： Fresnel、Matcap、Cubemap、OldSchoolPro",-1),f=o('<p> </p><h2 id="菲涅尔现象" tabindex="-1"><a class="header-anchor" href="#菲涅尔现象"><span>菲涅尔现象</span></a></h2><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240316142346.png" style="width:43.3% !important;"><img src="https://sky.megestu.top/i/1/20240316142413.png" style="width:25.3% !important;"><img src="https://sky.megestu.top/i/1/20240316142423.png" style="width:26.5% !important;"></div><p>菲涅尔现象：真实世界中，除了金属之外其它物质，视线垂直于表面时，<br> 反射较弱，而当视线非垂直表面时，夹角越小，反射越明显。</p><h3 id="菲涅尔节点实现" tabindex="-1"><a class="header-anchor" href="#菲涅尔节点实现"><span>菲涅尔节点实现</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240316143546.png" style="width:80% !important;"><img src="https://sky.megestu.top/i/1/20240316143611.png" style="width:20% !important;"></div><p>算法：<code>Fresnel = pow(1-ndotv，powVal）</code></p><ul><li>ldotv：理解为光从眼睛发出时的Lambert；中间亮，边缘暗；</li><li>1-ldotv：黑白反相，中间暗，边缘亮；</li><li>power：套一个power控制边缘亮的范围；</li></ul><h4 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>VScode</span></a></h4>',9),g=n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Shader "AP1/L09/Fresnel_VS"  // 自定义Shader路径
{
    // 材质面板参数
    Properties {
            _fresnel_Pow ("菲涅尔次幂", Range(0, 5)) = 1
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
            uniform float _fresnel_Pow ;

            // 输入结构
            struct VertexInput {
                float4 vertex : POSITION;       //将模型的顶点信息输入进来
                float3 normal : NORMAL;         //将模型的noraml信息输入进来
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置
                float4 posWS : TEXCOORD0;
                float3 nDirWS : TEXCOORD1;   //由模型法线信息换算来的世界空间法线信息
            };
            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构
                    o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构
                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构
                    o.posWS = mul(unity_ObjectToWorld, v.vertex);
            return o;                                                // 将输出结构 输出
            }
            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                //准备向量
                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);
                float3 nDirWS = i.nDirWS;
                //光照模型
                float3 vdotn = (1.0 - dot(vDirWS, nDirWS)); //得到 fresnel
                float3 finalColor = pow(vdotn, _fresnel_Pow); 

                return float4 (finalColor, 1.0);     // 输出最终颜色
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=o('<p> </p><h2 id="matcap" tabindex="-1"><a class="header-anchor" href="#matcap"><span>Matcap</span></a></h2><ul><li>一种无视BRDF，将BRDF渲染结果，用View空间法线朝向，直接映射到模型表面的流氓算法；</li><li>常用来模拟环境反射；</li><li>一般用于静态预览，就类似zb里的材质球就是Matcap；</li></ul><h3 id="matcap实现" tabindex="-1"><a class="header-anchor" href="#matcap实现"><span>Matcap实现</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/1/T_Matcap_4.jpg" style="width:15% !important;"><img src="https://sky.megestu.top/i/1/T_Matcap_5.png" style="width:15% !important;"><img src="https://sky.megestu.top/i/1/T_Matcap_2.jpg" style="width:15% !important;"><img src="https://sky.megestu.top/i/1/20240316153837.png" style="width:50% !important;"></div><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240316233920.png" style="width:95% !important;"></div><h4 id="vscode-1" tabindex="-1"><a class="header-anchor" href="#vscode-1"><span>VsCode</span></a></h4>',7),h=n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Shader "AP1/L09/Matcap_vs"  // 自定义Shader路径
{
    // 材质面板参数
    Properties {
        _NormalMap ("法线贴图", 2D) = "bump" {}
        _Matcap ("Matcap", 2D) = "gray" {}
        _fresnel_Pow ("菲涅尔次幂", Range(0, 10)) = 1
        _EnvSpeclnt ("环境镜面反射强度", Range(0, 5)) = 1
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
            //输入参数
            uniform sampler2D _NormalMap ;
            uniform sampler2D _Matcap ;
            uniform float _fresnel_Pow ;
            uniform float _EnvSpeclnt ;


            // 输入结构    =   用到什么
            struct VertexInput {
                float4 vertex : POSITION;       //顶点信息
                float3 normal : NORMAL;         //法线信息
                float4 tangent : TANGENT;       //切线信息
                float2 uv0 : TEXCOORD0;         //将模型uv0通道
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置
                float3 posWS : TEXCOORD0;       //世界顶点位置
                float2 uv0 : TEXCOORD1;         //uv信息 
                float3 nDirWS : TEXCOORD2;      //世界法线方向-构建TBN矩阵
                float3 tDirWS : TEXCOORD3;      //世界切线方向-构建TBN矩阵
                float3 bDirWS : TEXCOORD4;      //世界副切线方向-构建TBN矩阵
            };

            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构
                    o.uv0 = v.uv0;                                   //传递uv信息
                    o.pos = UnityObjectToClipPos( v.vertex );        // 顶点位置 OS>WS
                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 法线方向 OS>WS
                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); //切线方向 OS>WS
                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);                  // 根据nDir tDir求bDir
            return o;                                                // 将输出结构 输出
            }

            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                //向量准备
                float3 nDirTS = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb;  // 采样法线纹理并解码>>切线空间nDir
                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS);       // 构建TBN矩阵
                float3 nDirWS = normalize(mul(nDirTS, TBN));                 // 从切线方向转化为世界法线方向

                float3 nDirVS = mul(UNITY_MATRIX_V, float4(nDirWS,0.0));            // ·UNITY_MATRIX_V·  unity自带的矩阵v 是将世界法线方向转化为视角方向的矩阵,这个矩阵是四维的，自己手动补齐.
                
                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);  // 世界摄像机位置 减去 世界屏幕空间位置得到  世界观察方向
                //中间量准备
                float vdotn = dot(vDirWS, nDirWS); // 准备Fresnel 
                float2 matcapUV = nDirVS.rg * 0.5 + 0.5; // nDirVS remap -1~1 到 0~1

                //光照模型
                float fresnel = pow(1 - vdotn , _fresnel_Pow); //计算Fresnel 
                
                float3 matcap = tex2D(_Matcap, matcapUV);   //输入matcap贴图 和 uv
                float3 finalColor = fresnel * matcap *_EnvSpeclnt; // 叠加菲涅尔效果以及环境镜面反射强度

                //返回值
                return float4 (finalColor, 1.0);     // 输出最终颜色
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=o('<p> </p><h2 id="cubemap" tabindex="-1"><a class="header-anchor" href="#cubemap"><span>Cubemap</span></a></h2><h3 id="cubemap-tex" tabindex="-1"><a class="header-anchor" href="#cubemap-tex"><span>Cubemap Tex</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240316165455.png" style="width:95% !important;"></div><ul><li>获取一张HDR贴图 <code>.exr</code> ，使用PS打开，OpenEXR 读取选项 作为alpha通道</li><li>图像大小直接改成需要的正方形的尺寸 - <code>512x512</code> <code>1024x1024</code></li><li>图像- 模式- 改为 8位/通道</li></ul><blockquote><p>修改为8位通道后 tex会变暗-原因是对tex进行了一次Remap;把最亮的值映射为了1,最暗的值映射为了0.</p></blockquote><h3 id="unity导入cubemap-设置" tabindex="-1"><a class="header-anchor" href="#unity导入cubemap-设置"><span>unity导入Cubemap 设置</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240317002131.png" style="width:30% !important;"></div><ul><li>Texture Shape (贴图形状) - Cube；</li><li>Mapping (映射) - Latitude-Longitude Layout (Cylindrical)； <ul><li>Convolution Type(卷积型) - Specular (Glossy Reflection)； //可以理解为min map的显示类型。</li><li>Fixup Edge Seams(修复边缘接缝) - yes</li></ul></li></ul><blockquote><p><strong>Latitude-Longitude Layout (Cylindrical)</strong> <br> 纹理包含一个打开的球的图像，这样纬度和经度被映射到水平和垂直维度(就像在地球仪上一样)</p></blockquote><blockquote><p><strong>Specular (Glossy Reflection)</strong><br> 具有不同平滑度的镜面反射(光滑反射)的卷积立方体贴图。</p></blockquote><p> </p><h3 id="cubemap实现" tabindex="-1"><a class="header-anchor" href="#cubemap实现"><span>Cubemap实现</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240317140142.png" style="width:80% !important;"><img src="https://sky.megestu.top/i/1/20240317145821.png" style="width:20% !important;"></div><p>算法：</p><ul><li><ol><li>将nDir从切线空间转到观察空间；</li></ol></li><li><ol start="2"><li>取RG通道Remap到(0~1)，作为UV对Matcap图采样；</li></ol></li><li><ol start="3"><li>叠加菲涅尔效果，以模拟金属和非金属不同质感；</li></ol></li></ul>',16),C=n("br",null,null,-1),T=n("code",null,"one Minus",-1),N=n("code",null,"-1 * vector",-1),O=o('<ul><li><p><code>one Minus</code> 是 <code>1 - vector</code> 对一个向量进行操作1减去该向量的每个分量，即$1 - \\text{vector}$，会导致向量的每个分量被减去原始向量的对应分量，相当于对原始向量的方向进行反转，并且在每个分量上都减去1。这种操作通常用于调整向量的方向，并可能改变其长度。</p></li><li><p><code>-1 * vector</code> ，是对一个向量进行乘以-1操作会导致该向量的每个分量都乘以-1，即取其相反方向。这意味着向量的方向将被反转，而其长度将保持不变。这种操作常用于改变光照方向或者反转对象的运动方向，或者在需要对称性变换的情况下使用。</p></li></ul><p>简单理解就是：</p><ul><li>乘以-1时，向量的方向会完全反转，但长度不变，就像将箭头从一个方向翻转到另一个方向，但箭头长度不变。</li><li>而当你进行1减操作时，向量的每个分量都会减去1，同时方向也反转，就像将箭头向后移动并缩短一段距离。</li></ul><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240317142801.png" style="width:75% !important;"></div>',4),E=n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Shader "AP1/L09/Cubemap_VS"  // 自定义Shader路径
{
    // 材质面板参数
    Properties {
        _Cubemap ("CubeMap", Cube) = "_Skybox" {}
        _CubemapMip ("CubemapMip", Range(0, 7)) = 0
        _NormalMap ("NormalMap", 2D) = "bump" {}
        _FresnelPow ("fresnel_Pow", Range(0, 10)) = 1
        _EnvSpecInt ("EnvSpeclnt", Range(0, 5)) = 1
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
            //输入参数
            uniform samplerCUBE _Cubemap ;
            uniform sampler2D _NormalMap ;
            uniform float _FresnelPow ;
            uniform float _EnvSpecInt ;
            uniform float _CubemapMip ;


            // 输入结构    =   用到什么
            struct VertexInput {
                float4 vertex : POSITION;       //顶点信息
                float3 normal : NORMAL;         //法线信息
                float4 tangent : TANGENT;       //切线信息
                float2 uv0 : TEXCOORD0;         //将模型uv0通道
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置
                float3 posWS : TEXCOORD0;       //世界顶点位置
                float2 uv0 : TEXCOORD1;         //uv信息 
                float3 nDirWS : TEXCOORD2;      //世界法线方向-构建TBN矩阵
                float3 tDirWS : TEXCOORD3;      //世界切线方向-构建TBN矩阵
                float3 bDirWS : TEXCOORD4;      //世界副切线方向-构建TBN矩阵
            };

            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构
                    o.uv0 = v.uv0;                                   //传递uv信息
                    o.pos = UnityObjectToClipPos( v.vertex );        //顶点位置 OS>WS
                    o.posWS = mul(unity_ObjectToWorld, v.vertex);    //屏幕世界空间
                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 法线方向 OS>WS
                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); //切线方向 OS>WS
                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);                  // 根据nDir tDir求bDir
            return o;                                                // 将输出结构 输出
            }

            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                // 准备向量
                float3 nDirTS = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码>>切线空间nDir
                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS);      // 构建TBN矩阵
                float3 nDirWS = normalize(mul(nDirTS, TBN));                // 从切线方向转化为世界法线方向// 计算Fresnel 计算vrDirWS
                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz); // 计算Fresnel
                float3 vrDirWS = reflect(-vDirWS, nDirWS);// 采样Cubemap
                // 准备中间变量
                float vdotn = dot(vDirWS, nDirWS);
                // 光照模型
                float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, _CubemapMip)).rgb;
                float fresnel = pow(max(0.0, 1.0 - vdotn), _FresnelPow);
                float3 envSpecLighting = var_Cubemap * fresnel * _EnvSpecInt; // 叠加菲涅尔效果以及环境镜面反射强度
                // 返回值
                return float4(envSpecLighting, 1.0);
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=o('<p> </p><h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业"><span>作业:</span></a></h2><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240317150648.png" style="width:95% !important;"></div><h3 id="oldschoolpro" tabindex="-1"><a class="header-anchor" href="#oldschoolpro"><span>OldSchoolPro</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/1/20240317230814.png" style="width:25% !important;"></div>',5),P=n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Shader "AP1/L09/L09_OldSchoolPro_VS" {
    // 材质面板参数
    Properties {
        //暴露参数
        _MainCol        ("基础颜色", color) = (1.0, 1.0, 1.0, 1.0)
        _MainCol2       ("高光颜色", color) = (1.0, 1.0, 1.0, 1.0)

        _SpecularPow    ("高光次幂", Range(10, 90)) = 10

        _ShadowPow   ("阴影次幂", range(1,50)) = 10   
        _NormalMap ("法线贴图", 2D) = "bump" {}
        _Occlusion  ("AO贴图", 2d)     = "white"{}

        _EnvUpCol   ("环境up颜色", Color)   = (1,1,1,1)
        _EnvSideCol ("环境Side颜色", Color) = (0.5,0.5,0.5,1)
        _EnvDownCol ("环境Down颜色", Color) = (0,0,0,1) 

        _Cubemap ("CubeMap", Cube) = "_Skybox" {}
        _CubemapMip ("CubemapMip层级", Range(0, 7)) = 0

        _FresnelPow ("菲涅尔次幂", Range(0, 10)) = 1
        _EnvSpecInt ("环境高光强度", Range(0, 5)) = 1                                                                                                                                                                                                                                                                                                                                                                 
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
            #include "AutoLight.cginc"                  // Unity投影库文件
            #include "Lighting.cginc"                   // Unity投影库文件
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0

            // 输入参数
            uniform float3 _MainCol2; // RGB float3
            uniform float3 _MainCol; // RGB float3
            uniform float _SpecularPow; // 标量 float
            uniform sampler2D _Occlusion;
            uniform float3    _EnvUpCol;
            uniform float3    _EnvSideCol;
            uniform float3    _EnvDownCol;
            uniform float _ShadowPow ; // add shadow Pow sider
            uniform samplerCUBE _Cubemap ;
            uniform sampler2D _NormalMap ;
            uniform float _FresnelPow ;
            uniform float _EnvSpecInt ;
            uniform float _CubemapMip ;


            // 输入结构
            struct VertexInput {
                float4 vertex : POSITION;       //将模型的顶点信息输入进来
                float3 normal : NORMAL;         //将模型的noraml信息输入进来
                float4 tangent : TANGENT;       //切线信息
                float2 uv0 : TEXCOORD0;         // 将模型UV信息输入进来 0通道 共4通道
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION;       //裁剪空间（暂理解为屏幕空间吧）顶点位置- 由模型顶点信息换算而来的顶点屏幕位置
                float4 posWS : TEXCOORD0;       //世界空间顶点位置
                float2 uv0 : TEXCOORD1;         //uv信息 
                float3 nDirWS : TEXCOORD2;      //世界法线方向-构建TBN矩阵
                float3 tDirWS : TEXCOORD3;      //世界切线方向-构建TBN矩阵
                float3 bDirWS : TEXCOORD4;      //世界副切线方向-构建TBN矩阵
                LIGHTING_COORDS(5,6)            //投影用坐标信息

            };
            // 输入结构>>>顶点Shader>>>输出结构
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                       // 新建一个输出结构
                    o.uv0 = v.uv0;                                       // 采集输出贴图
                    o.pos = UnityObjectToClipPos( v.vertex );           // 变换顶点位置 OS>CS  -变换顶点信息 并将其塞给输出结构
                    o.posWS = mul(unity_ObjectToWorld, v.vertex);       // 变换顶点位置 OS>WS
                    o.nDirWS = UnityObjectToWorldNormal(v.normal);      // 变换法线方向 OS>WS  -变换法线信息 并将其塞给输出结构
                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); //切线方向 OS>WS
                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);                  // 根据nDir tDir求bDir
                    TRANSFER_VERTEX_TO_FRAGMENT(o)                      // 投影用Unity封装

                return o;                                               // 将输出结构 输出
            }
            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                //准备所有要用到的向量
                float3 nDirTS = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码>>切线空间nDir
                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS);      // 构建TBN矩阵
                float3 nDirWS = normalize(mul(nDirTS, TBN));                // 从切线方向转化为世界法线方向// 计算Fresnel 计算vrDirWS
                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz); // 计算Fresnel
                float3 vrDirWS = reflect(-vDirWS, nDirWS);// 采样Cubemap

                // float3 nDir = i.nDirWS; 
                float3 lDirWS = _WorldSpaceLightPos0.xyz;  
                // float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);
                float shadow = LIGHT_ATTENUATION(i);                    // 同样Unity封装好的函数 可取出投影


                float3 vRDir = reflect( -vDirWS, nDirWS );
                //准备所有要用到的中间数据，这里是两个点积结果；
                float nDotl = dot(nDirWS, lDirWS);      //得到lambert
                float vRDotl = dot(vRDir, lDirWS);    //得到phong
                float vdotn = dot(vDirWS, nDirWS);    //得到视方向，为fresnel准备

                //编写光照模型
                float lambert = max(0.0, nDotl); 
                float Phong = pow(max(0.0,vRDotl),_SpecularPow);
                float3 LambertPhong = (_MainCol* lambert) + (_MainCol2 * Phong);

                //shadow
                float shadowPow = pow(shadow , _ShadowPow) ;            //阴影硬度
                float3 shadowPhong = LambertPhong * shadowPow;


                // //3ColAmbient1
                float2 nDirgbadd = (nDirWS.g);                      // 取GB的mask
                float upMask =max(0.0, nDirWS.g);                         // 获取朝上部分遮罩
                float downMask =max(0.0, -nDirWS.g);                      // 获取朝下部分遮罩
                float sideMask =1.0 - upMask - downMask;                // 获取侧面部分遮罩
                float3 envCol = (_EnvUpCol * upMask ) + (_EnvSideCol * sideMask) + (_EnvDownCol * downMask); // 混合环境色
                float occlusion = tex2D (_Occlusion , i.uv0);             // 采样Occlusion贴图
                float3 envLighting = envCol * occlusion;                 // 计算环境光照



                
                // //3ColAmbient2  是基于物体体质计算的类似AO和实际灰阶进行混合
                // float2 nDirgbadd = (nDirWS.g+nDirWS.b);                      // 取GB的mask
                // float upMask =max(0.0,nDirgbadd);                        // 获取朝上部分遮罩
                // float downMask =max(0.0, -nDirgbadd);                       // 获取朝下部分遮罩
                // float sideMask =1.0 - upMask - downMask;                 // 获取侧面部分遮罩
                // float3 envCol = (_EnvUpCol * upMask ) + (_EnvSideCol * sideMask) + (_EnvDownCol * downMask); // 混合环境色
                // float occlusion = tex2D (_Occlusion , i.uv0);             // 采样Occlusion贴图
                // float3 envLighting = envCol * occlusion;                 // 计算环境光照

                //Cubemap+fresnel
                float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, _CubemapMip)).rgb;
                float fresnel = pow(max(0.0, 1.0 - vdotn), _FresnelPow);
                float3 envSpecLighting = var_Cubemap * fresnel * _EnvSpecInt; // 叠加菲涅尔效果以及环境镜面反射强度

                float3 finalCol = envLighting+shadowPhong+envSpecLighting;
                //返回结果
                return float4(finalCol  , 1.0);
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null," ",-1),R=n("h3",{id:"改进连连看",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#改进连连看"},[n("span",null,"改进连连看")])],-1),y=n("p",null,"顺便改进了下SF版本-原先lambert的颜色和phong的高光没分开的问题",-1),w=n("div",{class:"image-preview"},[n("img",{src:"https://sky.megestu.top/i/1/20240317231048.png",style:{width:"80% !important"}}),n("img",{src:"https://sky.megestu.top/i/1/20240317232243.png",style:{width:"20% !important"}})],-1),W=n("ul",null,[n("li",null,[n("code",null,"nDir"),l("通过TBN矩阵都转换为了"),n("code",null,"nDirWS"),n("ul",null,[n("li",null,[l("那么SF版本的也应该把所有用到法线的地方进行重新连到"),n("code",null,"nDirWS")])])])],-1),A=n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Shader "AP1/L09/OldSchoolPro_SF" {
    Properties {
        [MaterialToggle] _halfLambert ("half-Lambert", Float ) = 0
        _SpecularPower ("SpecularPower", Range(10, 90)) = 10
        _Lambert_Color ("Lambert_Color", Color) = (1,1,1,1)
        _light_Color ("light_Color", Color) = (1,1,1,1)
        _Occlusion ("Occlusion", 2D) = "white" {}
        _EnvUpCol ("EnvUpCol", Color) = (1,1,1,1)
        _EnvSideCol ("EnvSideCol", Color) = (0.5,0.5,0.5,1)
        _EnvDownCol ("EnvDownCol", Color) = (0,0,0,1)
        _frasnel_Pow ("frasnel_Pow", Range(0, 10)) = 1
        _NormalMap ("NormalMap", 2D) = "bump" {}
        _Cubemap ("Cubemap ", Cube) = "_Skybox" {}
        _CubemapMip ("CubemapMip", Range(0, 7)) = 0
        _EnvSpeclnt ("EnvSpeclnt", Range(0, 5)) = 1
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
            #pragma multi_compile_instancing
            #include "UnityCG.cginc"
            #include "AutoLight.cginc"
            #include "Lighting.cginc"
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0
            uniform sampler2D _Occlusion; uniform float4 _Occlusion_ST;
            uniform sampler2D _NormalMap; uniform float4 _NormalMap_ST;
            uniform samplerCUBE _Cubemap;
            UNITY_INSTANCING_BUFFER_START( Props )
                UNITY_DEFINE_INSTANCED_PROP( fixed, _halfLambert)
                UNITY_DEFINE_INSTANCED_PROP( float, _SpecularPower)
                UNITY_DEFINE_INSTANCED_PROP( float4, _Lambert_Color)
                UNITY_DEFINE_INSTANCED_PROP( float4, _light_Color)
                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvUpCol)
                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvSideCol)
                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvDownCol)
                UNITY_DEFINE_INSTANCED_PROP( float, _frasnel_Pow)
                UNITY_DEFINE_INSTANCED_PROP( float, _CubemapMip)
                UNITY_DEFINE_INSTANCED_PROP( float, _EnvSpeclnt)
            UNITY_INSTANCING_BUFFER_END( Props )
            struct VertexInput {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 tangent : TANGENT;
                float2 texcoord0 : TEXCOORD0;
            };
            struct VertexOutput {
                float4 pos : SV_POSITION;
                UNITY_VERTEX_INPUT_INSTANCE_ID
                float2 uv0 : TEXCOORD0;
                float4 posWorld : TEXCOORD1;
                float3 normalDir : TEXCOORD2;
                float3 tangentDir : TEXCOORD3;
                float3 bitangentDir : TEXCOORD4;
                LIGHTING_COORDS(5,6)
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;
                UNITY_SETUP_INSTANCE_ID( v );
                UNITY_TRANSFER_INSTANCE_ID( v, o );
                o.uv0 = v.texcoord0;
                o.normalDir = UnityObjectToWorldNormal(v.normal);
                o.tangentDir = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );
                o.bitangentDir = normalize(cross(o.normalDir, o.tangentDir) * v.tangent.w);
                o.posWorld = mul(unity_ObjectToWorld, v.vertex);
                o.pos = UnityObjectToClipPos( v.vertex );
                TRANSFER_VERTEX_TO_FRAGMENT(o)
                return o;
            }
            float4 frag(VertexOutput i) : COLOR {
                UNITY_SETUP_INSTANCE_ID( i );
                i.normalDir = normalize(i.normalDir);
                float3x3 tangentTransform = float3x3( i.tangentDir, i.bitangentDir, i.normalDir);
                float3 viewDirection = normalize(_WorldSpaceCameraPos.xyz - i.posWorld.xyz);
                float3 normalDirection = i.normalDir;
                float3 lightDirection = normalize(_WorldSpaceLightPos0.xyz);
////// Lighting:
                float attenuation = LIGHT_ATTENUATION(i);
////// Emissive:
                float4 _Lambert_Color_var = UNITY_ACCESS_INSTANCED_PROP( Props, _Lambert_Color );
                float3 _NormalMap_var = UnpackNormal(tex2D(_NormalMap,TRANSFORM_TEX(i.uv0, _NormalMap)));
                float3 node_2373 = mul( _NormalMap_var.rgb, tangentTransform ).xyz;
                float node_9272 = 0.0;
                float node_8870 = max(dot(node_2373.rgb,lightDirection),node_9272);
                float _halfLambert_var = lerp( node_8870, (node_8870*0.5+0.5), UNITY_ACCESS_INSTANCED_PROP( Props, _halfLambert ) );
                float3 node_5414 = (_Lambert_Color_var.rgb*_halfLambert_var); // Lambert
                float4 _light_Color_var = UNITY_ACCESS_INSTANCED_PROP( Props, _light_Color ); // 高光颜色
                float _SpecularPower_var = UNITY_ACCESS_INSTANCED_PROP( Props, _SpecularPower );
                float node_1221 = pow(max(dot(lightDirection,reflect(((-1.0)*viewDirection),node_2373.rgb)),node_9272),_SpecularPower_var); // phong
                float3 node_541 = (_light_Color_var.rgb*node_1221);
                float4 _Occlusion_var = tex2D(_Occlusion,TRANSFORM_TEX(i.uv0, _Occlusion)); //  环境遮挡
                float4 _EnvUpCol_var = UNITY_ACCESS_INSTANCED_PROP( Props, _EnvUpCol );
                float node_5867 = node_2373.rgb.g; // 取垂直的mask
                float node_946 = 0.0;
                float node_9628 = max(node_5867,node_946); // 向上部分mask-0 以下的不要
                float4 _EnvDownCol_var = UNITY_ACCESS_INSTANCED_PROP( Props, _EnvDownCol );
                float node_7879 = max((node_5867*(-1.0)),node_946); // 取下半部分mask
                float4 _EnvSideCol_var = UNITY_ACCESS_INSTANCED_PROP( Props, _EnvSideCol );
                float _CubemapMip_var = UNITY_ACCESS_INSTANCED_PROP( Props, _CubemapMip );
                float _frasnel_Pow_var = UNITY_ACCESS_INSTANCED_PROP( Props, _frasnel_Pow );
                float _EnvSpeclnt_var = UNITY_ACCESS_INSTANCED_PROP( Props, _EnvSpeclnt );
                float3 emissive = (((attenuation*(node_5414+node_541))+(_Occlusion_var.rgb*(((_EnvUpCol_var.rgb*node_9628)+(_EnvDownCol_var.rgb*node_7879))+(_EnvSideCol_var.rgb*((1.0-node_9628)-node_7879)))))+((texCUBElod(_Cubemap,float4(reflect(((-1.0)*viewDirection),node_2373.rgb),_CubemapMip_var)).rgb*pow(1.0-max(0,dot(node_2373.rgb, viewDirection)),_frasnel_Pow_var))*_EnvSpeclnt_var));
                float3 finalColor = emissive;
                return fixed4(finalColor,1);
            }
            ENDCG
        }
        Pass {
            Name "FORWARD_DELTA"
            Tags {
                "LightMode"="ForwardAdd"
            }
            Blend One One
            
            
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_instancing
            #include "UnityCG.cginc"
            #include "AutoLight.cginc"
            #include "Lighting.cginc"
            #pragma multi_compile_fwdadd_fullshadows
            #pragma target 3.0
            uniform sampler2D _Occlusion; uniform float4 _Occlusion_ST;
            uniform sampler2D _NormalMap; uniform float4 _NormalMap_ST;
            uniform samplerCUBE _Cubemap;
            UNITY_INSTANCING_BUFFER_START( Props )
                UNITY_DEFINE_INSTANCED_PROP( fixed, _halfLambert)
                UNITY_DEFINE_INSTANCED_PROP( float, _SpecularPower)
                UNITY_DEFINE_INSTANCED_PROP( float4, _Lambert_Color)
                UNITY_DEFINE_INSTANCED_PROP( float4, _light_Color)
                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvUpCol)
                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvSideCol)
                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvDownCol)
                UNITY_DEFINE_INSTANCED_PROP( float, _frasnel_Pow)
                UNITY_DEFINE_INSTANCED_PROP( float, _CubemapMip)
                UNITY_DEFINE_INSTANCED_PROP( float, _EnvSpeclnt)
            UNITY_INSTANCING_BUFFER_END( Props )
            struct VertexInput {
                float4 vertex : POSITION;
                float3 normal : NORMAL;
                float4 tangent : TANGENT;
                float2 texcoord0 : TEXCOORD0;
            };
            struct VertexOutput {
                float4 pos : SV_POSITION;
                UNITY_VERTEX_INPUT_INSTANCE_ID
                float2 uv0 : TEXCOORD0;
                float4 posWorld : TEXCOORD1;
                float3 normalDir : TEXCOORD2;
                float3 tangentDir : TEXCOORD3;
                float3 bitangentDir : TEXCOORD4;
                LIGHTING_COORDS(5,6)
            };
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;
                UNITY_SETUP_INSTANCE_ID( v );
                UNITY_TRANSFER_INSTANCE_ID( v, o );
                o.uv0 = v.texcoord0;
                o.normalDir = UnityObjectToWorldNormal(v.normal);
                o.tangentDir = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );
                o.bitangentDir = normalize(cross(o.normalDir, o.tangentDir) * v.tangent.w);
                o.posWorld = mul(unity_ObjectToWorld, v.vertex);
                o.pos = UnityObjectToClipPos( v.vertex );
                TRANSFER_VERTEX_TO_FRAGMENT(o)
                return o;
            }
            float4 frag(VertexOutput i) : COLOR {
                UNITY_SETUP_INSTANCE_ID( i );
                i.normalDir = normalize(i.normalDir);
                float3x3 tangentTransform = float3x3( i.tangentDir, i.bitangentDir, i.normalDir);
                float3 viewDirection = normalize(_WorldSpaceCameraPos.xyz - i.posWorld.xyz);
                float3 normalDirection = i.normalDir;
                float3 lightDirection = normalize(lerp(_WorldSpaceLightPos0.xyz, _WorldSpaceLightPos0.xyz - i.posWorld.xyz,_WorldSpaceLightPos0.w));
////// Lighting:
                float attenuation = LIGHT_ATTENUATION(i);
                float3 finalColor = 0;
                return fixed4(finalColor * 1,0);
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
    CustomEditor "ShaderForgeMaterialInspector"
}

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function M(U,F){const r=u("Badge"),t=u("CodeTabs"),d=u("RouteLink");return m(),v("div",null,[_,b(" more "),f,n("details",null,[n("summary",null,[e(r,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"42",data:[{id:"Fresnel_VS.shader"}],"tab-id":"shell"},{title0:i(({value:s,isActive:a})=>[l("Fresnel_VS.shader")]),tab0:i(({value:s,isActive:a})=>[g]),_:1},8,["data"])]),S,n("details",null,[n("summary",null,[e(r,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"82",data:[{id:"Matcap_VS.shader"}],"tab-id":"shell"},{title0:i(({value:s,isActive:a})=>[l("Matcap_VS.shader")]),tab0:i(({value:s,isActive:a})=>[h]),_:1},8,["data"])]),D,n("blockquote",null,[n("p",null,[l("能用最低成算法实现的,就用底层算法- 避免出错; "),e(r,{text:"注意",color:"#f39c12"}),l(),C,l(" shaderforge 里的 "),T,l(" 和 "),N,l(" 是不一样的")])]),O,n("details",null,[n("summary",null,[e(r,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"231",data:[{id:"Cubemap_VS.shader"}],"tab-id":"shell"},{title0:i(({value:s,isActive:a})=>[l("Cubemap_VS.shader")]),tab0:i(({value:s,isActive:a})=>[E]),_:1},8,["data"])]),x,n("details",null,[n("summary",null,[e(r,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"249",data:[{id:"testOldSchoolPro_VS.shader"}],"tab-id":"shell"},{title0:i(({value:s,isActive:a})=>[l("testOldSchoolPro_VS.shader")]),tab0:i(({value:s,isActive:a})=>[P]),_:1},8,["data"])]),I,R,y,n("ul",null,[n("li",null,[e(d,{to:"/engine/unity/shader7.html#oldschoolplus"},{default:i(()=>[l("原版#oldschoolplus "),e(r,{text:"跳转",color:"#68eb59"})]),_:1})])]),w,W,n("details",null,[n("summary",null,[e(r,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"287",data:[{id:"L09_OldSchoolPro_SF.shader"}],"tab-id":"shell"},{title0:i(({value:s,isActive:a})=>[l("L09_OldSchoolPro_SF.shader")]),tab0:i(({value:s,isActive:a})=>[A]),_:1},8,["data"])])])}const k=c(p,[["render",M],["__file","shader9.html.vue"]]),z=JSON.parse('{"path":"/engine/unity/shader9.html","title":"unity-shader-09","lang":"zh-CN","frontmatter":{"title":"unity-shader-09","description":"摘要： Fresnel、Matcap、Cubemap、OldSchoolPro 菲涅尔现象 菲涅尔现象：真实世界中，除了金属之外其它物质，视线垂直于表面时， 反射较弱，而当视线非垂直表面时，夹角越小，反射越明显。 菲涅尔节点实现 算法：Fresnel = pow(1-ndotv，powVal） ldotv：理解为光从眼睛发出时的Lambert；中间亮，...","icon":"iconfont alicon-shader","category":"shader","tag":["shader","unity"],"date":"2024-03-17T00:00:00.000Z","cover":"https://sky.megestu.top/i/1/20240317233743.png","head":[["meta",{"property":"og:url","content":"https://megestus.top/blog/engine/unity/shader9.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-09"}],["meta",{"property":"og:description","content":"摘要： Fresnel、Matcap、Cubemap、OldSchoolPro 菲涅尔现象 菲涅尔现象：真实世界中，除了金属之外其它物质，视线垂直于表面时， 反射较弱，而当视线非垂直表面时，夹角越小，反射越明显。 菲涅尔节点实现 算法：Fresnel = pow(1-ndotv，powVal） ldotv：理解为光从眼睛发出时的Lambert；中间亮，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://sky.megestu.top/i/1/20240317233743.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-23T14:30:16.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://sky.megestu.top/i/1/20240317233743.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-09"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-03-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-23T14:30:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-09\\",\\"image\\":[\\"https://sky.megestu.top/i/1/20240317233743.png\\"],\\"datePublished\\":\\"2024-03-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-23T14:30:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"菲涅尔现象","slug":"菲涅尔现象","link":"#菲涅尔现象","children":[{"level":3,"title":"菲涅尔节点实现","slug":"菲涅尔节点实现","link":"#菲涅尔节点实现","children":[]}]},{"level":2,"title":"Matcap","slug":"matcap","link":"#matcap","children":[{"level":3,"title":"Matcap实现","slug":"matcap实现","link":"#matcap实现","children":[]}]},{"level":2,"title":"Cubemap","slug":"cubemap","link":"#cubemap","children":[{"level":3,"title":"Cubemap Tex","slug":"cubemap-tex","link":"#cubemap-tex","children":[]},{"level":3,"title":"unity导入Cubemap 设置","slug":"unity导入cubemap-设置","link":"#unity导入cubemap-设置","children":[]},{"level":3,"title":"Cubemap实现","slug":"cubemap实现","link":"#cubemap实现","children":[]}]},{"level":2,"title":"作业:","slug":"作业","link":"#作业","children":[{"level":3,"title":"OldSchoolPro","slug":"oldschoolpro","link":"#oldschoolpro","children":[]},{"level":3,"title":"改进连连看","slug":"改进连连看","link":"#改进连连看","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1711204216000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":1}]},"filePathRelative":"engine/unity/shader9.md","localizedDate":"2024年3月17日","excerpt":"<p>摘要： Fresnel、Matcap、Cubemap、OldSchoolPro</p>\\n","autoDesc":true}');export{k as comp,z as data};
