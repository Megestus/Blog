import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as n,e as v,f as o,a as e,g as a,d as s,r as p,o as b}from"./app-CyFiW-1H.js";const _={};function g(S,l){const c=p("Badge"),t=p("CodeTabs"),d=p("RouteLink");return b(),u("div",null,[l[19]||(l[19]=n("p",null,"摘要： Fresnel、Matcap、Cubemap、OldSchoolPro",-1)),v(" more "),l[20]||(l[20]=o('<p> </p><h2 id="菲涅尔现象" tabindex="-1"><a class="header-anchor" href="#菲涅尔现象"><span>菲涅尔现象</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240316142346.png" style="width:43.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240316142413.png" style="width:25.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240316142423.png" style="width:26.5% !important;"></div><p>菲涅尔现象：真实世界中，除了金属之外其它物质，视线垂直于表面时，<br> 反射较弱，而当视线非垂直表面时，夹角越小，反射越明显。</p><h3 id="菲涅尔节点实现" tabindex="-1"><a class="header-anchor" href="#菲涅尔节点实现"><span>菲涅尔节点实现</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240316143546.png" style="width:80% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240316143611.png" style="width:20% !important;"></div><p>算法：<code>Fresnel = pow(1-ndotv，powVal）</code></p><ul><li>ldotv：理解为光从眼睛发出时的Lambert；中间亮，边缘暗；</li><li>1-ldotv：黑白反相，中间暗，边缘亮；</li><li>power：套一个power控制边缘亮的范围；</li></ul><h4 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>VScode</span></a></h4>',9)),n("details",null,[n("summary",null,[e(c,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"42",data:[{id:"L09_Fresnel_VS.shader"}],"tab-id":"shell"},{title0:a(({value:i,isActive:r})=>l[0]||(l[0]=[s("L09_Fresnel_VS.shader")])),tab0:a(({value:i,isActive:r})=>l[1]||(l[1]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},'\uFEFFShader "AP1/L09/Fresnel_VS"  // 自定义Shader路径'),s(`
`),n("span",{class:"line"},"{"),s(`
`),n("span",{class:"line"},"    // 材质面板参数"),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},'            _fresnel_Pow ("菲尼尔次幂", Range(0, 5)) = 1'),s(`
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
`),n("span",{class:"line"},"            // 输入参数"),s(`
`),n("span",{class:"line"},"            uniform float _fresnel_Pow ;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;       //将模型的顶点信息输入进来"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;         //将模型的noraml信息输入进来"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输出结构"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置"),s(`
`),n("span",{class:"line"},"                float4 posWS : TEXCOORD0;"),s(`
`),n("span",{class:"line"},"                float3 nDirWS : TEXCOORD1;   //由模型法线信息换算来的世界空间法线信息"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构"),s(`
`),n("span",{class:"line"},"                    o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.posWS = mul(unity_ObjectToWorld, v.vertex);"),s(`
`),n("span",{class:"line"},"            return o;                                                // 将输出结构 输出"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            // 输出结构 >>> 像素"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                //准备向量"),s(`
`),n("span",{class:"line"},"                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);"),s(`
`),n("span",{class:"line"},"                float3 nDirWS = i.nDirWS;"),s(`
`),n("span",{class:"line"},"                //光照模型"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                float3 vdotn = (1.0 - dot(vDirWS, nDirWS)); //得到 fresnel"),s(`
`),n("span",{class:"line"},"                float3 finalColor = pow(vdotn, _fresnel_Pow); "),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                return float4 (finalColor, 1.0);     // 输出最终颜色"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})]),l[21]||(l[21]=o('<p> </p><h2 id="matcap" tabindex="-1"><a class="header-anchor" href="#matcap"><span>Matcap</span></a></h2><ul><li>一种无视BRDF，将BRDF渲染结果，用View空间法线朝向，直接映射到模型表面的流氓算法；</li><li>常用来模拟环境反射；</li><li>一般用于静态预览，就类似zb里的材质球就是Matcap；</li></ul><h3 id="matcap实现" tabindex="-1"><a class="header-anchor" href="#matcap实现"><span>Matcap实现</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/T_Matcap_4.jpg" style="width:15% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/T_Matcap_5.png" style="width:15% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/T_Matcap_2.jpg" style="width:15% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240316153837.png" style="width:50% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240316233920.png" style="width:95% !important;"></div><h4 id="vscode-1" tabindex="-1"><a class="header-anchor" href="#vscode-1"><span>VsCode</span></a></h4>',7)),n("details",null,[n("summary",null,[e(c,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"82",data:[{id:"L09_Matcap_VS.shader"}],"tab-id":"shell"},{title0:a(({value:i,isActive:r})=>l[2]||(l[2]=[s("L09_Matcap_VS.shader")])),tab0:a(({value:i,isActive:r})=>l[3]||(l[3]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},'\uFEFFShader "AP1/L09/Matcap_vs"  // 自定义Shader路径'),s(`
`),n("span",{class:"line"},"{"),s(`
`),n("span",{class:"line"},"    // 材质面板参数"),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},'        _NormalMap ("法线贴图", 2D) = "bump" {}'),s(`
`),n("span",{class:"line"},'        _Matcap ("Matcap", 2D) = "gray" {}'),s(`
`),n("span",{class:"line"},'        _fresnel_Pow ("菲涅尔次幂", Range(0, 10)) = 1'),s(`
`),n("span",{class:"line"},'        _EnvSpeclnt ("环境镜面反射强度", Range(0, 5)) = 1'),s(`
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
`),n("span",{class:"line"},"            //输入参数"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _NormalMap ;"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _Matcap ;"),s(`
`),n("span",{class:"line"},"            uniform float _fresnel_Pow ;"),s(`
`),n("span",{class:"line"},"            uniform float _EnvSpeclnt ;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构    =   用到什么"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;       //顶点信息"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;         //法线信息"),s(`
`),n("span",{class:"line"},"                float4 tangent : TANGENT;       //切线信息"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD0;         //将模型uv0通道"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输出结构"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置"),s(`
`),n("span",{class:"line"},"                float3 posWS : TEXCOORD0;       //世界顶点位置"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD1;         //uv信息 "),s(`
`),n("span",{class:"line"},"                float3 nDirWS : TEXCOORD2;      //世界法线方向-构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 tDirWS : TEXCOORD3;      //世界切线方向-构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 bDirWS : TEXCOORD4;      //世界副切线方向-构建TBN矩阵"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构"),s(`
`),n("span",{class:"line"},"                    o.uv0 = v.uv0;                                   //传递uv信息"),s(`
`),n("span",{class:"line"},"                    o.pos = UnityObjectToClipPos( v.vertex );        // 顶点位置 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 法线方向 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); //切线方向 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);                  // 根据nDir tDir求bDir"),s(`
`),n("span",{class:"line"},"            return o;                                                // 将输出结构 输出"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输出结构 >>> 像素"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                //向量准备"),s(`
`),n("span",{class:"line"},"                float3 nDirTS = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb;  // 采样法线纹理并解码>>切线空间nDir"),s(`
`),n("span",{class:"line"},"                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS);       // 构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 nDirWS = normalize(mul(nDirTS, TBN));                 // 从切线方向转化为世界法线方向"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                float3 nDirVS = mul(UNITY_MATRIX_V, float4(nDirWS,0.0));            // ·UNITY_MATRIX_V·  unity自带的矩阵v 是将世界法线方向转化为视角方向的矩阵,这个矩阵是四维的，自己手动补齐."),s(`
`),n("span",{class:"line"},"                "),s(`
`),n("span",{class:"line"},"                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);  // 世界摄像机位置 减去 世界屏幕空间位置得到  世界观察方向"),s(`
`),n("span",{class:"line"},"                //中间量准备"),s(`
`),n("span",{class:"line"},"                float vdotn = dot(vDirWS, nDirWS); // 准备Fresnel "),s(`
`),n("span",{class:"line"},"                float2 matcapUV = nDirVS.rg * 0.5 + 0.5; // nDirVS remap -1~1 到 0~1"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                //光照模型"),s(`
`),n("span",{class:"line"},"                float fresnel = pow(1 - vdotn , _fresnel_Pow); //计算Fresnel "),s(`
`),n("span",{class:"line"},"                "),s(`
`),n("span",{class:"line"},"                float3 matcap = tex2D(_Matcap, matcapUV);   //输入matcap贴图 和 uv"),s(`
`),n("span",{class:"line"},"                float3 finalColor = fresnel * matcap *_EnvSpeclnt; // 叠加菲涅尔效果以及环境镜面反射强度"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                //返回值"),s(`
`),n("span",{class:"line"},"                return float4 (finalColor, 1.0);     // 输出最终颜色"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})]),l[22]||(l[22]=o('<p> </p><h2 id="cubemap" tabindex="-1"><a class="header-anchor" href="#cubemap"><span>Cubemap</span></a></h2><h3 id="cubemap-tex" tabindex="-1"><a class="header-anchor" href="#cubemap-tex"><span>Cubemap Tex</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240316165455.png" style="width:95% !important;"></div><ul><li>获取一张HDR贴图 <code>.exr</code> ，使用PS打开，OpenEXR 读取选项 作为alpha通道</li><li>图像大小直接改成需要的正方形的尺寸 - <code>512x512</code> <code>1024x1024</code></li><li>图像- 模式- 改为 8位/通道</li></ul><blockquote><p>修改为8位通道后 tex会变暗-原因是对tex进行了一次Remap;把最亮的值映射为了1,最暗的值映射为了0.</p></blockquote><h3 id="unity导入cubemap-设置" tabindex="-1"><a class="header-anchor" href="#unity导入cubemap-设置"><span>unity导入Cubemap 设置</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317002131.png" style="width:30% !important;"></div><ul><li>Texture Shape (贴图形状) - Cube；</li><li>Mapping (映射) - Latitude-Longitude Layout (Cylindrical)； <ul><li>Convolution Type(卷积型) - Specular (Glossy Reflection)； //可以理解为min map的显示类型。</li><li>Fixup Edge Seams(修复边缘接缝) - yes</li></ul></li></ul><blockquote><p><strong>Latitude-Longitude Layout (Cylindrical)</strong> <br> 纹理包含一个打开的球的图像，这样纬度和经度被映射到水平和垂直维度(就像在地球仪上一样)</p></blockquote><blockquote><p><strong>Specular (Glossy Reflection)</strong><br> 具有不同平滑度的镜面反射(光滑反射)的卷积立方体贴图。</p></blockquote><p> </p><h3 id="cubemap实现" tabindex="-1"><a class="header-anchor" href="#cubemap实现"><span>Cubemap实现</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317140142.png" style="width:80% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317145821.png" style="width:20% !important;"></div><p>算法：</p><ul><li><ol><li>将nDir从切线空间转到观察空间；</li></ol></li><li><ol start="2"><li>取RG通道Remap到(0~1)，作为UV对Matcap图采样；</li></ol></li><li><ol start="3"><li>叠加菲涅尔效果，以模拟金属和非金属不同质感；</li></ol></li></ul>',16)),n("blockquote",null,[n("p",null,[l[4]||(l[4]=s("能用最低成算法实现的,就用底层算法- 避免出错; ")),e(c,{text:"注意",color:"#f39c12"}),l[5]||(l[5]=s()),l[6]||(l[6]=n("br",null,null,-1)),l[7]||(l[7]=s(" shaderforge 里的 ")),l[8]||(l[8]=n("code",null,"one Minus",-1)),l[9]||(l[9]=s(" 和 ")),l[10]||(l[10]=n("code",null,"-1 * vector",-1)),l[11]||(l[11]=s(" 是不一样的"))])]),l[23]||(l[23]=o('<ul><li><p><code>one Minus</code> 是 <code>1 - vector</code> 对一个向量进行操作1减去该向量的每个分量，即$1 - \\text{vector}$，会导致向量的每个分量被减去原始向量的对应分量，相当于对原始向量的方向进行反转，并且在每个分量上都减去1。这种操作通常用于调整向量的方向，并可能改变其长度。</p></li><li><p><code>-1 * vector</code> ，是对一个向量进行乘以-1操作会导致该向量的每个分量都乘以-1，即取其相反方向。这意味着向量的方向将被反转，而其长度将保持不变。这种操作常用于改变光照方向或者反转对象的运动方向，或者在需要对称性变换的情况下使用。</p></li></ul><p>简单理解就是：</p><ul><li>乘以-1时，向量的方向会完全反转，但长度不变，就像将箭头从一个方向翻转到另一个方向，但箭头长度不变。</li><li>而当你进行1减操作时，向量的每个分量都会减去1，同时方向也反转，就像将箭头向后移动并缩短一段距离。</li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317142801.png" style="width:75% !important;"></div>',4)),n("details",null,[n("summary",null,[e(c,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"234",data:[{id:"L09_Cubemap_VS.shader"}],"tab-id":"shell"},{title0:a(({value:i,isActive:r})=>l[12]||(l[12]=[s("L09_Cubemap_VS.shader")])),tab0:a(({value:i,isActive:r})=>l[13]||(l[13]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},'\uFEFFShader "AP1/L09/Cubemap_VS"  // 自定义Shader路径'),s(`
`),n("span",{class:"line"},"{"),s(`
`),n("span",{class:"line"},"    // 材质面板参数"),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},'        _Cubemap ("CubeMap", Cube) = "_Skybox" {}'),s(`
`),n("span",{class:"line"},'        _CubemapMip ("CubemapMip", Range(0, 7)) = 0'),s(`
`),n("span",{class:"line"},'        _NormalMap ("NormalMap", 2D) = "bump" {}'),s(`
`),n("span",{class:"line"},'        _FresnelPow ("fresnel_Pow", Range(0, 10)) = 1'),s(`
`),n("span",{class:"line"},'        _EnvSpecInt ("EnvSpeclnt", Range(0, 5)) = 1'),s(`
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
`),n("span",{class:"line"},"            //输入参数"),s(`
`),n("span",{class:"line"},"            uniform samplerCUBE _Cubemap ;"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _NormalMap ;"),s(`
`),n("span",{class:"line"},"            uniform float _FresnelPow ;"),s(`
`),n("span",{class:"line"},"            uniform float _EnvSpecInt ;"),s(`
`),n("span",{class:"line"},"            uniform float _CubemapMip ;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构    =   用到什么"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;       //顶点信息"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;         //法线信息"),s(`
`),n("span",{class:"line"},"                float4 tangent : TANGENT;       //切线信息"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD0;         //将模型uv0通道"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输出结构"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 pos : SV_POSITION;       //由模型顶点信息换算而来的顶点屏幕位置"),s(`
`),n("span",{class:"line"},"                float3 posWS : TEXCOORD0;       //世界顶点位置"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD1;         //uv信息 "),s(`
`),n("span",{class:"line"},"                float3 nDirWS : TEXCOORD2;      //世界法线方向-构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 tDirWS : TEXCOORD3;      //世界切线方向-构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 bDirWS : TEXCOORD4;      //世界副切线方向-构建TBN矩阵"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构"),s(`
`),n("span",{class:"line"},"                    o.uv0 = v.uv0;                                   //传递uv信息"),s(`
`),n("span",{class:"line"},"                    o.pos = UnityObjectToClipPos( v.vertex );        //顶点位置 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.posWS = mul(unity_ObjectToWorld, v.vertex);    //屏幕世界空间"),s(`
`),n("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 法线方向 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); //切线方向 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);                  // 根据nDir tDir求bDir"),s(`
`),n("span",{class:"line"},"            return o;                                                // 将输出结构 输出"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输出结构 >>> 像素"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                // 准备向量"),s(`
`),n("span",{class:"line"},"                float3 nDirTS = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码>>切线空间nDir"),s(`
`),n("span",{class:"line"},"                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS);      // 构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 nDirWS = normalize(mul(nDirTS, TBN));                // 从切线方向转化为世界法线方向// 计算Fresnel 计算vrDirWS"),s(`
`),n("span",{class:"line"},"                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz); // 计算Fresnel"),s(`
`),n("span",{class:"line"},"                float3 vrDirWS = reflect(-vDirWS, nDirWS);// 采样Cubemap"),s(`
`),n("span",{class:"line"},"                // 准备中间变量"),s(`
`),n("span",{class:"line"},"                float vdotn = dot(vDirWS, nDirWS);"),s(`
`),n("span",{class:"line"},"                // 光照模型"),s(`
`),n("span",{class:"line"},"                float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, _CubemapMip)).rgb;"),s(`
`),n("span",{class:"line"},"                float fresnel = pow(max(0.0, 1.0 - vdotn), _FresnelPow);"),s(`
`),n("span",{class:"line"},"                float3 envSpecLighting = var_Cubemap * fresnel * _EnvSpecInt; // 叠加菲涅尔效果以及环境镜面反射强度"),s(`
`),n("span",{class:"line"},"                // 返回值"),s(`
`),n("span",{class:"line"},"                return float4(envSpecLighting, 1.0);"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})]),l[24]||(l[24]=o('<p> </p><h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业"><span>作业:</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317150648.png" style="width:95% !important;"></div><h3 id="oldschoolpro" tabindex="-1"><a class="header-anchor" href="#oldschoolpro"><span>OldSchoolPro</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317230814.png" style="width:25% !important;"></div>',5)),n("details",null,[n("summary",null,[e(c,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"252",data:[{id:"testOldSchoolPro_VS.shader"}],"tab-id":"shell"},{title0:a(({value:i,isActive:r})=>l[14]||(l[14]=[s("testOldSchoolPro_VS.shader")])),tab0:a(({value:i,isActive:r})=>l[15]||(l[15]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},'\uFEFFShader "AP1/L09/L09_OldSchoolPro_VS" {'),s(`
`),n("span",{class:"line"},"    // 材质面板参数"),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},"        //暴露参数"),s(`
`),n("span",{class:"line"},"        [Header(Texture)]"),s(`
`),n("span",{class:"line"},'        _NormalMap ("法线贴图", 2D) = "bump" {}'),s(`
`),n("span",{class:"line"},'        _Occlusion  ("AO贴图", 2d)     = "white"{}'),s(`
`),n("span",{class:"line"},"        "),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"        [Header(Diffuse)]"),s(`
`),n("span",{class:"line"},'        _MainCol        ("基础颜色", color) = (1.0, 1.0, 1.0, 1.0)'),s(`
`),n("span",{class:"line"},'        _MainCol2       ("高光颜色", color) = (1.0, 1.0, 1.0, 1.0)'),s(`
`),n("span",{class:"line"},'        _EnvUpCol   ("环境up颜色", Color)   = (1,1,1,1)'),s(`
`),n("span",{class:"line"},'        _EnvSideCol ("环境Side颜色", Color) = (0.5,0.5,0.5,1)'),s(`
`),n("span",{class:"line"},'        _EnvDownCol ("环境Down颜色", Color) = (0,0,0,1) '),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"        [Header(Specular)]"),s(`
`),n("span",{class:"line"},'        _SpecularPow    ("高光次幂", Range(10, 90)) = 10'),s(`
`),n("span",{class:"line"},'        _ShadowPow   ("阴影次幂", range(1,50)) = 10   '),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},'        _FresnelPow ("菲妮尔次幂", Range(0, 10)) = 1'),s(`
`),n("span",{class:"line"},'        _EnvSpecInt ("环境高光强度", Range(0, 5)) = 1  '),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"        [Header(CubeMap)]"),s(`
`),n("span",{class:"line"},'        _Cubemap ("CubeMap", Cube) = "_Skybox" {}'),s(`
`),n("span",{class:"line"},'        _CubemapMip ("CubemapMip层级", Range(0, 7)) = 0'),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                                                                                                                                                                                                                                                                                                                                                            "),s(`
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
`),n("span",{class:"line"},'            #include "AutoLight.cginc"                  // Unity投影库文件'),s(`
`),n("span",{class:"line"},'            #include "Lighting.cginc"                   // Unity投影库文件'),s(`
`),n("span",{class:"line"},"            #pragma multi_compile_fwdbase_fullshadows"),s(`
`),n("span",{class:"line"},"            #pragma target 3.0"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入参数"),s(`
`),n("span",{class:"line"},"            uniform float3 _MainCol2; // RGB float3"),s(`
`),n("span",{class:"line"},"            uniform float3 _MainCol; // RGB float3"),s(`
`),n("span",{class:"line"},"            uniform float _SpecularPow; // 标量 float"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _Occlusion;"),s(`
`),n("span",{class:"line"},"            uniform float3    _EnvUpCol;"),s(`
`),n("span",{class:"line"},"            uniform float3    _EnvSideCol;"),s(`
`),n("span",{class:"line"},"            uniform float3    _EnvDownCol;"),s(`
`),n("span",{class:"line"},"            uniform float _ShadowPow ; // add shadow Pow sider"),s(`
`),n("span",{class:"line"},"            uniform samplerCUBE _Cubemap ;"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _NormalMap ;"),s(`
`),n("span",{class:"line"},"            uniform float _FresnelPow ;"),s(`
`),n("span",{class:"line"},"            uniform float _EnvSpecInt ;"),s(`
`),n("span",{class:"line"},"            uniform float _CubemapMip ;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;       //将模型的顶点信息输入进来"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;         //将模型的noraml信息输入进来"),s(`
`),n("span",{class:"line"},"                float4 tangent : TANGENT;       //切线信息"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD0;         // 将模型UV信息输入进来 0通道 共4通道"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输出结构"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 pos : SV_POSITION;       //裁剪空间（暂理解为屏幕空间吧）顶点位置- 由模型顶点信息换算而来的顶点屏幕位置"),s(`
`),n("span",{class:"line"},"                float4 posWS : TEXCOORD0;       //世界空间顶点位置"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD1;         //uv信息 "),s(`
`),n("span",{class:"line"},"                float3 nDirWS : TEXCOORD2;      //世界法线方向-构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 tDirWS : TEXCOORD3;      //世界切线方向-构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 bDirWS : TEXCOORD4;      //世界副切线方向-构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                LIGHTING_COORDS(5,6)            //投影用坐标信息"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输入结构>>>顶点Shader>>>输出结构"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                       // 新建一个输出结构"),s(`
`),n("span",{class:"line"},"                    o.uv0 = v.uv0;                                       // 采集输出贴图"),s(`
`),n("span",{class:"line"},"                    o.pos = UnityObjectToClipPos( v.vertex );           // 变换顶点位置 OS>CS  -变换顶点信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.posWS = mul(unity_ObjectToWorld, v.vertex);       // 变换顶点位置 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);      // 变换法线方向 OS>WS  -变换法线信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); //切线方向 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);                  // 根据nDir tDir求bDir"),s(`
`),n("span",{class:"line"},"                    TRANSFER_VERTEX_TO_FRAGMENT(o)                      // 投影用Unity封装"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                return o;                                               // 将输出结构 输出"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            // 输出结构 >>> 像素"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                //准备所有要用到的向量"),s(`
`),n("span",{class:"line"},"                float3 nDirTS = UnpackNormal(tex2D(_NormalMap, i.uv0)).rgb; // 采样法线纹理并解码>>切线空间nDir"),s(`
`),n("span",{class:"line"},"                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS);      // 构建TBN矩阵"),s(`
`),n("span",{class:"line"},"                float3 nDirWS = normalize(mul(nDirTS, TBN));                // 从切线方向转化为世界法线方向// 计算Fresnel 计算vrDirWS"),s(`
`),n("span",{class:"line"},"                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz); // 计算Fresnel"),s(`
`),n("span",{class:"line"},"                float3 vrDirWS = reflect(-vDirWS, nDirWS);// 采样Cubemap"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                // float3 nDir = i.nDirWS; "),s(`
`),n("span",{class:"line"},"                float3 lDirWS = _WorldSpaceLightPos0.xyz;  "),s(`
`),n("span",{class:"line"},"                // float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);"),s(`
`),n("span",{class:"line"},"                float shadow = LIGHT_ATTENUATION(i);                    // 同样Unity封装好的函数 可取出投影"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                float3 vRDir = reflect( -vDirWS, nDirWS );"),s(`
`),n("span",{class:"line"},"                //准备所有要用到的中间数据，这里是两个点积结果；"),s(`
`),n("span",{class:"line"},"                float nDotl = dot(nDirWS, lDirWS);      //得到lambert"),s(`
`),n("span",{class:"line"},"                float vRDotl = dot(vRDir, lDirWS);    //得到phong"),s(`
`),n("span",{class:"line"},"                float vdotn = dot(vDirWS, nDirWS);    //得到视方向，为fresnel准备"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                //编写光照模型"),s(`
`),n("span",{class:"line"},"                float lambert = max(0.0, nDotl); "),s(`
`),n("span",{class:"line"},"                float Phong = pow(max(0.0,vRDotl),_SpecularPow);"),s(`
`),n("span",{class:"line"},"                float3 LambertPhong = (_MainCol* lambert) + (_MainCol2 * Phong);"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                //shadow"),s(`
`),n("span",{class:"line"},"                float shadowPow = pow(shadow , _ShadowPow) ;            //阴影硬度"),s(`
`),n("span",{class:"line"},"                float3 shadowPhong = LambertPhong * shadowPow;"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                // //3ColAmbient1"),s(`
`),n("span",{class:"line"},"                float2 nDirgbadd = (nDirWS.g);                      // 取GB的mask"),s(`
`),n("span",{class:"line"},"                float upMask =max(0.0, nDirWS.g);                         // 获取朝上部分遮罩"),s(`
`),n("span",{class:"line"},"                float downMask =max(0.0, -nDirWS.g);                      // 获取朝下部分遮罩"),s(`
`),n("span",{class:"line"},"                float sideMask =1.0 - upMask - downMask;                // 获取侧面部分遮罩"),s(`
`),n("span",{class:"line"},"                float3 envCol = (_EnvUpCol * upMask ) + (_EnvSideCol * sideMask) + (_EnvDownCol * downMask); // 混合环境色"),s(`
`),n("span",{class:"line"},"                float occlusion = tex2D (_Occlusion , i.uv0);             // 采样Occlusion贴图"),s(`
`),n("span",{class:"line"},"                float3 envLighting = envCol * occlusion;                 // 计算环境光照"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                "),s(`
`),n("span",{class:"line"},"                // //3ColAmbient2  是基于物体体质计算的类似AO和实际灰阶进行混合"),s(`
`),n("span",{class:"line"},"                // float2 nDirgbadd = (nDirWS.g+nDirWS.b);                      // 取GB的mask"),s(`
`),n("span",{class:"line"},"                // float upMask =max(0.0,nDirgbadd);                        // 获取朝上部分遮罩"),s(`
`),n("span",{class:"line"},"                // float downMask =max(0.0, -nDirgbadd);                       // 获取朝下部分遮罩"),s(`
`),n("span",{class:"line"},"                // float sideMask =1.0 - upMask - downMask;                 // 获取侧面部分遮罩"),s(`
`),n("span",{class:"line"},"                // float3 envCol = (_EnvUpCol * upMask ) + (_EnvSideCol * sideMask) + (_EnvDownCol * downMask); // 混合环境色"),s(`
`),n("span",{class:"line"},"                // float occlusion = tex2D (_Occlusion , i.uv0);             // 采样Occlusion贴图"),s(`
`),n("span",{class:"line"},"                // float3 envLighting = envCol * occlusion;                 // 计算环境光照"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                //Cubemap+fresnel"),s(`
`),n("span",{class:"line"},"                float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, _CubemapMip)).rgb;"),s(`
`),n("span",{class:"line"},"                float fresnel = pow(max(0.0, 1.0 - vdotn), _FresnelPow);"),s(`
`),n("span",{class:"line"},"                float3 envSpecLighting = var_Cubemap * fresnel * _EnvSpecInt; // 叠加菲涅尔效果以及环境镜面反射强度"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"                float3 finalCol = envLighting+shadowPhong+envSpecLighting;"),s(`
`),n("span",{class:"line"},"                //返回结果"),s(`
`),n("span",{class:"line"},"                return float4(finalCol  , 1.0);"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})]),l[25]||(l[25]=n("p",null," ",-1)),l[26]||(l[26]=n("h3",{id:"改进连连看",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#改进连连看"},[n("span",null,"改进连连看")])],-1)),l[27]||(l[27]=n("p",null,"顺便改进了下SF版本-原先lambert的颜色和phong的高光没分开的问题",-1)),n("ul",null,[n("li",null,[e(d,{to:"/engine/unity/shader/shader7.html#oldschoolplus"},{default:a(()=>[l[16]||(l[16]=s("原版#oldschoolplus ")),e(c,{text:"跳转",color:"#68eb59"})]),_:1})])]),l[28]||(l[28]=n("div",{class:"image-preview"},[n("img",{src:"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317231048.png",style:{width:"80% !important"}}),n("img",{src:"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/sf_oldschopr_f420.png",style:{width:"20% !important"}})],-1)),l[29]||(l[29]=n("ul",null,[n("li",null,[n("code",null,"nDir"),s("通过TBN矩阵都转换为了"),n("code",null,"nDirWS"),n("ul",null,[n("li",null,[s("那么SF版本的也应该把所有用到法线的地方进行重新连到"),n("code",null,"nDirWS")])])])],-1)),n("details",null,[n("summary",null,[e(c,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"290",data:[{id:"L09_OldSchoolPro_SF.shader"}],"tab-id":"shell"},{title0:a(({value:i,isActive:r})=>l[17]||(l[17]=[s("L09_OldSchoolPro_SF.shader")])),tab0:a(({value:i,isActive:r})=>l[18]||(l[18]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"// Shader created with Shader Forge v1.40 "),s(`
`),n("span",{class:"line"},"// Shader Forge (c) Freya Holmer - http://www.acegikmo.com/shaderforge/"),s(`
`),n("span",{class:"line"},"// Note: Manually altering this data may prevent you from opening it in Shader Forge"),s(`
`),n("span",{class:"line"},"/*SF_DATA;ver:1.40;sub:START;pass:START;ps:flbk:,iptp:0,cusa:False,bamd:0,cgin:,cpap:True,lico:1,lgpr:1,limd:0,spmd:1,trmd:0,grmd:0,uamb:True,mssp:True,bkdf:False,hqlp:False,rprd:False,enco:False,rmgx:True,imps:True,rpth:0,vtps:0,hqsc:True,nrmq:1,nrsp:0,vomd:0,spxs:False,tesm:0,olmd:1,culm:0,bsrc:0,bdst:1,dpts:2,wrdp:True,dith:0,atcv:False,rfrpo:True,rfrpn:Refraction,coma:15,ufog:False,aust:True,igpj:False,qofs:0,qpre:1,rntp:1,fgom:False,fgoc:False,fgod:False,fgor:False,fgmd:0,fgcr:0.5,fgcg:0.5,fgcb:0.5,fgca:1,fgde:0.01,fgrn:0,fgrf:300,stcl:False,atwp:False,stva:128,stmr:255,stmw:255,stcp:6,stps:0,stfa:0,stfz:0,ofsf:0,ofsu:0,f2p0:False,fnsp:False,fnfb:False,fsmp:False;n:type:ShaderForge.SFN_Final,id:3138,x:33438,y:32894,varname:node_3138,prsc:2|emission-7516-OUT;n:type:ShaderForge.SFN_LightVector,id:1710,x:30791,y:32730,varname:node_1710,prsc:2;n:type:ShaderForge.SFN_Dot,id:1618,x:30958,y:32625,varname:node_1618,prsc:2,dt:0|A-2373-XYZ,B-1710-OUT;n:type:ShaderForge.SFN_Max,id:8870,x:31176,y:32625,varname:node_8870,prsc:2|A-1618-OUT,B-9272-OUT;n:type:ShaderForge.SFN_Vector1,id:9272,x:31073,y:32839,varname:node_9272,prsc:2,v1:0;n:type:ShaderForge.SFN_RemapRange,id:8359,x:31337,y:32697,varname:node_8359,prsc:2,frmn:-1,frmx:1,tomn:0,tomx:1|IN-8870-OUT;n:type:ShaderForge.SFN_SwitchProperty,id:2001,x:31483,y:32622,ptovrint:False,ptlb:half-Lambert,ptin:_halfLambert,varname:node_2001,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,on:False|A-8870-OUT,B-8359-OUT;n:type:ShaderForge.SFN_Dot,id:4729,x:30964,y:32948,varname:node_4729,prsc:2,dt:0|A-1710-OUT,B-8838-OUT;n:type:ShaderForge.SFN_Max,id:107,x:31205,y:32946,varname:node_107,prsc:2|A-4729-OUT,B-9272-OUT;n:type:ShaderForge.SFN_Power,id:1221,x:31404,y:32946,cmnt:phong,varname:node_1221,prsc:2|VAL-107-OUT,EXP-9703-OUT;n:type:ShaderForge.SFN_Slider,id:9703,x:31048,y:33112,ptovrint:False,ptlb:SpecularPower,ptin:_SpecularPower,varname:node_9703,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,min:10,cur:10,max:90;n:type:ShaderForge.SFN_Color,id:4087,x:31483,y:32442,ptovrint:False,ptlb:Lambert_Color,ptin:_Lambert_Color,varname:node_4087,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,c1:1,c2:1,c3:1,c4:1;n:type:ShaderForge.SFN_Multiply,id:5414,x:31762,y:32605,cmnt:Lambert,varname:node_5414,prsc:2|A-4087-RGB,B-2001-OUT;n:type:ShaderForge.SFN_Multiply,id:8398,x:32669,y:32690,cmnt:光源混合,varname:node_8398,prsc:2|A-5088-OUT,B-8372-OUT;n:type:ShaderForge.SFN_Color,id:1617,x:31483,y:32798,ptovrint:False,ptlb:light_Color,ptin:_light_Color,cmnt:高光颜色,varname:node_1617,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,c1:1,c2:1,c3:1,c4:1;n:type:ShaderForge.SFN_LightAttenuation,id:5088,x:32576,y:32517,cmnt:光源遮挡,varname:node_5088,prsc:2;n:type:ShaderForge.SFN_Tex2d,id:9316,x:32367,y:33535,ptovrint:False,ptlb:Occlusion,ptin:_Occlusion,cmnt: 环境遮挡,varname:_Occlusion_copy_copy,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,tex:365240f2a514be64486af776210d8c13,ntxv:0,isnm:False;n:type:ShaderForge.SFN_Multiply,id:8608,x:32578,y:33691,varname:node_8608,prsc:2|A-9316-RGB,B-2122-OUT;n:type:ShaderForge.SFN_Add,id:2122,x:32352,y:33768,cmnt:混合垂直环境颜色,varname:node_2122,prsc:2|A-3556-OUT,B-9823-OUT;n:type:ShaderForge.SFN_ComponentMask,id:5867,x:31139,y:33790,cmnt:取垂直的mask,varname:node_5867,prsc:2,cc1:1,cc2:-1,cc3:-1,cc4:-1|IN-2373-XYZ;n:type:ShaderForge.SFN_Max,id:9628,x:31420,y:33660,cmnt:向上部分mask-0 以下的不要,varname:node_9628,prsc:2|A-5867-OUT,B-946-OUT;n:type:ShaderForge.SFN_Vector1,id:946,x:31388,y:33811,varname:node_946,prsc:2,v1:0;n:type:ShaderForge.SFN_Vector1,id:6899,x:31042,y:33990,varname:node_6899,prsc:2,v1:-1;n:type:ShaderForge.SFN_Multiply,id:2387,x:31400,y:33967,cmnt:通过1-,varname:node_2387,prsc:2|A-5867-OUT,B-6899-OUT;n:type:ShaderForge.SFN_Max,id:7879,x:31590,y:33967,cmnt:取下半部分mask,varname:node_7879,prsc:2|A-2387-OUT,B-946-OUT;n:type:ShaderForge.SFN_Subtract,id:3139,x:31624,y:33755,cmnt:1减去上半部分得到反方向的所有值,varname:node_3139,prsc:2|A-1387-OUT,B-9628-OUT;n:type:ShaderForge.SFN_Vector1,id:1387,x:31607,y:33889,varname:node_1387,prsc:2,v1:1;n:type:ShaderForge.SFN_Subtract,id:7968,x:31792,y:33855,cmnt:再相减得到中间mask,varname:node_7968,prsc:2|A-3139-OUT,B-7879-OUT;n:type:ShaderForge.SFN_Multiply,id:9817,x:32000,y:33638,varname:node_9817,prsc:2|A-1042-RGB,B-9628-OUT;n:type:ShaderForge.SFN_Multiply,id:9823,x:32000,y:33789,varname:node_9823,prsc:2|A-4783-RGB,B-7968-OUT;n:type:ShaderForge.SFN_Multiply,id:2629,x:32013,y:33947,varname:node_2629,prsc:2|A-5375-RGB,B-7879-OUT;n:type:ShaderForge.SFN_Color,id:1042,x:31687,y:33230,ptovrint:False,ptlb:EnvUpCol,ptin:_EnvUpCol,varname:_EnvUpCol_copy_copy,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,c1:1,c2:1,c3:1,c4:1;n:type:ShaderForge.SFN_Color,id:4783,x:31687,y:33404,ptovrint:False,ptlb:EnvSideCol,ptin:_EnvSideCol,varname:_EnvSideCol_copy_copy,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,c1:0.5,c2:0.5,c3:0.5,c4:1;n:type:ShaderForge.SFN_Color,id:5375,x:31687,y:33574,ptovrint:False,ptlb:EnvDownCol,ptin:_EnvDownCol,varname:_EnvDownCol_copy_copy,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,c1:0,c2:0,c3:0,c4:1;n:type:ShaderForge.SFN_Add,id:3556,x:32168,y:33638,varname:node_3556,prsc:2|A-9817-OUT,B-2629-OUT;n:type:ShaderForge.SFN_Add,id:4758,x:32838,y:33144,varname:node_4758,prsc:2|A-8398-OUT,B-8608-OUT;n:type:ShaderForge.SFN_ViewVector,id:5490,x:31313,y:34468,varname:node_5490,prsc:2;n:type:ShaderForge.SFN_Slider,id:1913,x:31639,y:34909,ptovrint:False,ptlb:frasnel_Pow,ptin:_frasnel_Pow,varname:node_1913,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,min:0,cur:1,max:10;n:type:ShaderForge.SFN_Tex2d,id:2643,x:31503,y:34611,ptovrint:False,ptlb:NormalMap,ptin:_NormalMap,varname:node_2643,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,tex:23220a00d5e3ffe46aae744d450a36f1,ntxv:3,isnm:True;n:type:ShaderForge.SFN_Transform,id:2373,x:31675,y:34611,varname:node_2373,prsc:2,tffrom:2,tfto:0|IN-2643-RGB;n:type:ShaderForge.SFN_Multiply,id:4052,x:31503,y:34443,varname:node_4052,prsc:2|A-1380-OUT,B-5490-OUT;n:type:ShaderForge.SFN_Reflect,id:5020,x:31860,y:34443,varname:node_5020,prsc:2|A-4052-OUT,B-2373-XYZ;n:type:ShaderForge.SFN_Cubemap,id:9581,x:32076,y:34443,ptovrint:False,ptlb:Cubemap ,ptin:_Cubemap,varname:node_9581,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,pvfc:0|DIR-5020-OUT,MIP-312-OUT;n:type:ShaderForge.SFN_Slider,id:312,x:31939,y:34622,ptovrint:False,ptlb:CubemapMip,ptin:_CubemapMip,varname:node_312,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,min:0,cur:0,max:7;n:type:ShaderForge.SFN_Multiply,id:2165,x:32385,y:34684,varname:node_2165,prsc:2|A-9581-RGB,B-8231-OUT;n:type:ShaderForge.SFN_Slider,id:4311,x:32422,y:34854,ptovrint:False,ptlb:EnvSpeclnt,ptin:_EnvSpeclnt,varname:node_4311,prsc:2,glob:False,taghide:False,taghdr:False,tagprd:False,tagnsco:False,tagnrm:False,min:0,cur:1,max:5;n:type:ShaderForge.SFN_Multiply,id:3511,x:32621,y:34684,varname:node_3511,prsc:2|A-2165-OUT,B-4311-OUT;n:type:ShaderForge.SFN_Add,id:7516,x:33155,y:33601,varname:node_7516,prsc:2|A-4758-OUT,B-3511-OUT;n:type:ShaderForge.SFN_Fresnel,id:8231,x:32076,y:34804,varname:node_8231,prsc:2|NRM-2373-XYZ,EXP-1913-OUT;n:type:ShaderForge.SFN_Vector1,id:1380,x:31326,y:34380,varname:node_1380,prsc:2,v1:-1;n:type:ShaderForge.SFN_Multiply,id:541,x:31790,y:32932,varname:node_541,prsc:2|A-1617-RGB,B-1221-OUT;n:type:ShaderForge.SFN_Add,id:8372,x:32126,y:32703,varname:node_8372,prsc:2|A-5414-OUT,B-541-OUT;n:type:ShaderForge.SFN_Reflect,id:8838,x:30771,y:32970,varname:node_8838,prsc:2|A-1395-OUT,B-2373-XYZ;n:type:ShaderForge.SFN_ViewVector,id:3258,x:30400,y:32876,varname:node_3258,prsc:2;n:type:ShaderForge.SFN_Vector1,id:6294,x:30400,y:32810,varname:node_6294,prsc:2,v1:-1;n:type:ShaderForge.SFN_Multiply,id:1395,x:30573,y:32853,varname:node_1395,prsc:2|A-6294-OUT,B-3258-OUT;proporder:2001-9703-4087-1617-9316-1042-4783-5375-1913-2643-9581-312-4311;pass:END;sub:END;*/"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},'Shader "AP1/L09/OldSchoolPro_SF" {'),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},'        [MaterialToggle] _halfLambert ("half-Lambert", Float ) = 0'),s(`
`),n("span",{class:"line"},'        _SpecularPower ("SpecularPower", Range(10, 90)) = 10'),s(`
`),n("span",{class:"line"},'        _Lambert_Color ("Lambert_Color", Color) = (1,1,1,1)'),s(`
`),n("span",{class:"line"},'        _light_Color ("light_Color", Color) = (1,1,1,1)'),s(`
`),n("span",{class:"line"},'        _Occlusion ("Occlusion", 2D) = "white" {}'),s(`
`),n("span",{class:"line"},'        _EnvUpCol ("EnvUpCol", Color) = (1,1,1,1)'),s(`
`),n("span",{class:"line"},'        _EnvSideCol ("EnvSideCol", Color) = (0.5,0.5,0.5,1)'),s(`
`),n("span",{class:"line"},'        _EnvDownCol ("EnvDownCol", Color) = (0,0,0,1)'),s(`
`),n("span",{class:"line"},'        _frasnel_Pow ("frasnel_Pow", Range(0, 10)) = 1'),s(`
`),n("span",{class:"line"},'        _NormalMap ("NormalMap", 2D) = "bump" {}'),s(`
`),n("span",{class:"line"},'        _Cubemap ("Cubemap ", Cube) = "_Skybox" {}'),s(`
`),n("span",{class:"line"},'        _CubemapMip ("CubemapMip", Range(0, 7)) = 0'),s(`
`),n("span",{class:"line"},'        _EnvSpeclnt ("EnvSpeclnt", Range(0, 5)) = 1'),s(`
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
`),n("span",{class:"line"},"            "),s(`
`),n("span",{class:"line"},"            CGPROGRAM"),s(`
`),n("span",{class:"line"},"            #pragma vertex vert"),s(`
`),n("span",{class:"line"},"            #pragma fragment frag"),s(`
`),n("span",{class:"line"},"            #pragma multi_compile_instancing"),s(`
`),n("span",{class:"line"},'            #include "UnityCG.cginc"'),s(`
`),n("span",{class:"line"},'            #include "AutoLight.cginc"'),s(`
`),n("span",{class:"line"},'            #include "Lighting.cginc"'),s(`
`),n("span",{class:"line"},"            #pragma multi_compile_fwdbase_fullshadows"),s(`
`),n("span",{class:"line"},"            #pragma target 3.0"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _Occlusion; uniform float4 _Occlusion_ST;"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _NormalMap; uniform float4 _NormalMap_ST;"),s(`
`),n("span",{class:"line"},"            uniform samplerCUBE _Cubemap;"),s(`
`),n("span",{class:"line"},"            UNITY_INSTANCING_BUFFER_START( Props )"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( fixed, _halfLambert)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float, _SpecularPower)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _Lambert_Color)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _light_Color)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvUpCol)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvSideCol)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvDownCol)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float, _frasnel_Pow)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float, _CubemapMip)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float, _EnvSpeclnt)"),s(`
`),n("span",{class:"line"},"            UNITY_INSTANCING_BUFFER_END( Props )"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;"),s(`
`),n("span",{class:"line"},"                float4 tangent : TANGENT;"),s(`
`),n("span",{class:"line"},"                float2 texcoord0 : TEXCOORD0;"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 pos : SV_POSITION;"),s(`
`),n("span",{class:"line"},"                UNITY_VERTEX_INPUT_INSTANCE_ID"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD0;"),s(`
`),n("span",{class:"line"},"                float4 posWorld : TEXCOORD1;"),s(`
`),n("span",{class:"line"},"                float3 normalDir : TEXCOORD2;"),s(`
`),n("span",{class:"line"},"                float3 tangentDir : TEXCOORD3;"),s(`
`),n("span",{class:"line"},"                float3 bitangentDir : TEXCOORD4;"),s(`
`),n("span",{class:"line"},"                LIGHTING_COORDS(5,6)"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;"),s(`
`),n("span",{class:"line"},"                UNITY_SETUP_INSTANCE_ID( v );"),s(`
`),n("span",{class:"line"},"                UNITY_TRANSFER_INSTANCE_ID( v, o );"),s(`
`),n("span",{class:"line"},"                o.uv0 = v.texcoord0;"),s(`
`),n("span",{class:"line"},"                o.normalDir = UnityObjectToWorldNormal(v.normal);"),s(`
`),n("span",{class:"line"},"                o.tangentDir = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );"),s(`
`),n("span",{class:"line"},"                o.bitangentDir = normalize(cross(o.normalDir, o.tangentDir) * v.tangent.w);"),s(`
`),n("span",{class:"line"},"                o.posWorld = mul(unity_ObjectToWorld, v.vertex);"),s(`
`),n("span",{class:"line"},"                o.pos = UnityObjectToClipPos( v.vertex );"),s(`
`),n("span",{class:"line"},"                TRANSFER_VERTEX_TO_FRAGMENT(o)"),s(`
`),n("span",{class:"line"},"                return o;"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                UNITY_SETUP_INSTANCE_ID( i );"),s(`
`),n("span",{class:"line"},"                i.normalDir = normalize(i.normalDir);"),s(`
`),n("span",{class:"line"},"                float3x3 tangentTransform = float3x3( i.tangentDir, i.bitangentDir, i.normalDir);"),s(`
`),n("span",{class:"line"},"                float3 viewDirection = normalize(_WorldSpaceCameraPos.xyz - i.posWorld.xyz);"),s(`
`),n("span",{class:"line"},"                float3 normalDirection = i.normalDir;"),s(`
`),n("span",{class:"line"},"                float3 lightDirection = normalize(_WorldSpaceLightPos0.xyz);"),s(`
`),n("span",{class:"line"},"////// Lighting:"),s(`
`),n("span",{class:"line"},"                float attenuation = LIGHT_ATTENUATION(i);"),s(`
`),n("span",{class:"line"},"////// Emissive:"),s(`
`),n("span",{class:"line"},"                float4 _Lambert_Color_var = UNITY_ACCESS_INSTANCED_PROP( Props, _Lambert_Color );"),s(`
`),n("span",{class:"line"},"                float3 _NormalMap_var = UnpackNormal(tex2D(_NormalMap,TRANSFORM_TEX(i.uv0, _NormalMap)));"),s(`
`),n("span",{class:"line"},"                float3 node_2373 = mul( _NormalMap_var.rgb, tangentTransform ).xyz;"),s(`
`),n("span",{class:"line"},"                float node_9272 = 0.0;"),s(`
`),n("span",{class:"line"},"                float node_8870 = max(dot(node_2373.rgb,lightDirection),node_9272);"),s(`
`),n("span",{class:"line"},"                float _halfLambert_var = lerp( node_8870, (node_8870*0.5+0.5), UNITY_ACCESS_INSTANCED_PROP( Props, _halfLambert ) );"),s(`
`),n("span",{class:"line"},"                float4 _light_Color_var = UNITY_ACCESS_INSTANCED_PROP( Props, _light_Color ); // 高光颜色"),s(`
`),n("span",{class:"line"},"                float _SpecularPower_var = UNITY_ACCESS_INSTANCED_PROP( Props, _SpecularPower );"),s(`
`),n("span",{class:"line"},"                float4 _Occlusion_var = tex2D(_Occlusion,TRANSFORM_TEX(i.uv0, _Occlusion)); //  环境遮挡"),s(`
`),n("span",{class:"line"},"                float4 _EnvUpCol_var = UNITY_ACCESS_INSTANCED_PROP( Props, _EnvUpCol );"),s(`
`),n("span",{class:"line"},"                float node_5867 = node_2373.rgb.g; // 取垂直的mask"),s(`
`),n("span",{class:"line"},"                float node_946 = 0.0;"),s(`
`),n("span",{class:"line"},"                float node_9628 = max(node_5867,node_946); // 向上部分mask-0 以下的不要"),s(`
`),n("span",{class:"line"},"                float4 _EnvDownCol_var = UNITY_ACCESS_INSTANCED_PROP( Props, _EnvDownCol );"),s(`
`),n("span",{class:"line"},"                float node_7879 = max((node_5867*(-1.0)),node_946); // 取下半部分mask"),s(`
`),n("span",{class:"line"},"                float4 _EnvSideCol_var = UNITY_ACCESS_INSTANCED_PROP( Props, _EnvSideCol );"),s(`
`),n("span",{class:"line"},"                float _CubemapMip_var = UNITY_ACCESS_INSTANCED_PROP( Props, _CubemapMip );"),s(`
`),n("span",{class:"line"},"                float _frasnel_Pow_var = UNITY_ACCESS_INSTANCED_PROP( Props, _frasnel_Pow );"),s(`
`),n("span",{class:"line"},"                float _EnvSpeclnt_var = UNITY_ACCESS_INSTANCED_PROP( Props, _EnvSpeclnt );"),s(`
`),n("span",{class:"line"},"                float3 emissive = (((attenuation*((_Lambert_Color_var.rgb*_halfLambert_var)+(_light_Color_var.rgb*pow(max(dot(lightDirection,reflect(((-1.0)*viewDirection),node_2373.rgb)),node_9272),_SpecularPower_var))))+(_Occlusion_var.rgb*(((_EnvUpCol_var.rgb*node_9628)+(_EnvDownCol_var.rgb*node_7879))+(_EnvSideCol_var.rgb*((1.0-node_9628)-node_7879)))))+((texCUBElod(_Cubemap,float4(reflect(((-1.0)*viewDirection),node_2373.rgb),_CubemapMip_var)).rgb*pow(1.0-max(0,dot(node_2373.rgb, viewDirection)),_frasnel_Pow_var))*_EnvSpeclnt_var));"),s(`
`),n("span",{class:"line"},"                float3 finalColor = emissive;"),s(`
`),n("span",{class:"line"},"                return fixed4(finalColor,1);"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"        Pass {"),s(`
`),n("span",{class:"line"},'            Name "FORWARD_DELTA"'),s(`
`),n("span",{class:"line"},"            Tags {"),s(`
`),n("span",{class:"line"},'                "LightMode"="ForwardAdd"'),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            Blend One One"),s(`
`),n("span",{class:"line"},"            "),s(`
`),n("span",{class:"line"},"            "),s(`
`),n("span",{class:"line"},"            CGPROGRAM"),s(`
`),n("span",{class:"line"},"            #pragma vertex vert"),s(`
`),n("span",{class:"line"},"            #pragma fragment frag"),s(`
`),n("span",{class:"line"},"            #pragma multi_compile_instancing"),s(`
`),n("span",{class:"line"},'            #include "UnityCG.cginc"'),s(`
`),n("span",{class:"line"},'            #include "AutoLight.cginc"'),s(`
`),n("span",{class:"line"},'            #include "Lighting.cginc"'),s(`
`),n("span",{class:"line"},"            #pragma multi_compile_fwdadd_fullshadows"),s(`
`),n("span",{class:"line"},"            #pragma target 3.0"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _Occlusion; uniform float4 _Occlusion_ST;"),s(`
`),n("span",{class:"line"},"            uniform sampler2D _NormalMap; uniform float4 _NormalMap_ST;"),s(`
`),n("span",{class:"line"},"            uniform samplerCUBE _Cubemap;"),s(`
`),n("span",{class:"line"},"            UNITY_INSTANCING_BUFFER_START( Props )"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( fixed, _halfLambert)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float, _SpecularPower)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _Lambert_Color)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _light_Color)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvUpCol)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvSideCol)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float4, _EnvDownCol)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float, _frasnel_Pow)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float, _CubemapMip)"),s(`
`),n("span",{class:"line"},"                UNITY_DEFINE_INSTANCED_PROP( float, _EnvSpeclnt)"),s(`
`),n("span",{class:"line"},"            UNITY_INSTANCING_BUFFER_END( Props )"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;"),s(`
`),n("span",{class:"line"},"                float4 tangent : TANGENT;"),s(`
`),n("span",{class:"line"},"                float2 texcoord0 : TEXCOORD0;"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 pos : SV_POSITION;"),s(`
`),n("span",{class:"line"},"                UNITY_VERTEX_INPUT_INSTANCE_ID"),s(`
`),n("span",{class:"line"},"                float2 uv0 : TEXCOORD0;"),s(`
`),n("span",{class:"line"},"                float4 posWorld : TEXCOORD1;"),s(`
`),n("span",{class:"line"},"                float3 normalDir : TEXCOORD2;"),s(`
`),n("span",{class:"line"},"                float3 tangentDir : TEXCOORD3;"),s(`
`),n("span",{class:"line"},"                float3 bitangentDir : TEXCOORD4;"),s(`
`),n("span",{class:"line"},"                LIGHTING_COORDS(5,6)"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;"),s(`
`),n("span",{class:"line"},"                UNITY_SETUP_INSTANCE_ID( v );"),s(`
`),n("span",{class:"line"},"                UNITY_TRANSFER_INSTANCE_ID( v, o );"),s(`
`),n("span",{class:"line"},"                o.uv0 = v.texcoord0;"),s(`
`),n("span",{class:"line"},"                o.normalDir = UnityObjectToWorldNormal(v.normal);"),s(`
`),n("span",{class:"line"},"                o.tangentDir = normalize( mul( unity_ObjectToWorld, float4( v.tangent.xyz, 0.0 ) ).xyz );"),s(`
`),n("span",{class:"line"},"                o.bitangentDir = normalize(cross(o.normalDir, o.tangentDir) * v.tangent.w);"),s(`
`),n("span",{class:"line"},"                o.posWorld = mul(unity_ObjectToWorld, v.vertex);"),s(`
`),n("span",{class:"line"},"                o.pos = UnityObjectToClipPos( v.vertex );"),s(`
`),n("span",{class:"line"},"                TRANSFER_VERTEX_TO_FRAGMENT(o)"),s(`
`),n("span",{class:"line"},"                return o;"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                UNITY_SETUP_INSTANCE_ID( i );"),s(`
`),n("span",{class:"line"},"                i.normalDir = normalize(i.normalDir);"),s(`
`),n("span",{class:"line"},"                float3x3 tangentTransform = float3x3( i.tangentDir, i.bitangentDir, i.normalDir);"),s(`
`),n("span",{class:"line"},"                float3 viewDirection = normalize(_WorldSpaceCameraPos.xyz - i.posWorld.xyz);"),s(`
`),n("span",{class:"line"},"                float3 normalDirection = i.normalDir;"),s(`
`),n("span",{class:"line"},"                float3 lightDirection = normalize(lerp(_WorldSpaceLightPos0.xyz, _WorldSpaceLightPos0.xyz - i.posWorld.xyz,_WorldSpaceLightPos0.w));"),s(`
`),n("span",{class:"line"},"////// Lighting:"),s(`
`),n("span",{class:"line"},"                float attenuation = LIGHT_ATTENUATION(i);"),s(`
`),n("span",{class:"line"},"                float3 finalColor = 0;"),s(`
`),n("span",{class:"line"},"                return fixed4(finalColor * 1,0);"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},'    CustomEditor "ShaderForgeMaterialInspector"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})])])}const T=m(_,[["render",g],["__file","shader9.html.vue"]]),N=JSON.parse('{"path":"/engine/unity/shader/shader9.html","title":"unity-shader-09","lang":"zh-CN","frontmatter":{"title":"unity-shader-09","description":"摘要： Fresnel、Matcap、Cubemap、OldSchoolPro","icon":"iconfont alicon-shader","category":"shader","tags":["shader","unity"],"date":"2024-03-17T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317233743.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader9.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-09"}],["meta",{"property":"og:description","content":"摘要： Fresnel、Matcap、Cubemap、OldSchoolPro"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317233743.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317233743.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-09"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-03-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-09\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240317233743.png\\"],\\"datePublished\\":\\"2024-03-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"菲涅尔现象","slug":"菲涅尔现象","link":"#菲涅尔现象","children":[{"level":3,"title":"菲涅尔节点实现","slug":"菲涅尔节点实现","link":"#菲涅尔节点实现","children":[]}]},{"level":2,"title":"Matcap","slug":"matcap","link":"#matcap","children":[{"level":3,"title":"Matcap实现","slug":"matcap实现","link":"#matcap实现","children":[]}]},{"level":2,"title":"Cubemap","slug":"cubemap","link":"#cubemap","children":[{"level":3,"title":"Cubemap Tex","slug":"cubemap-tex","link":"#cubemap-tex","children":[]},{"level":3,"title":"unity导入Cubemap 设置","slug":"unity导入cubemap-设置","link":"#unity导入cubemap-设置","children":[]},{"level":3,"title":"Cubemap实现","slug":"cubemap实现","link":"#cubemap实现","children":[]}]},{"level":2,"title":"作业:","slug":"作业","link":"#作业","children":[{"level":3,"title":"OldSchoolPro","slug":"oldschoolpro","link":"#oldschoolpro","children":[]},{"level":3,"title":"改进连连看","slug":"改进连连看","link":"#改进连连看","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":5}]},"filePathRelative":"engine/unity/shader/shader9.md","localizedDate":"2024年3月17日","excerpt":"<p>摘要： Fresnel、Matcap、Cubemap、OldSchoolPro</p>\\n","autoDesc":true}');export{T as comp,N as data};
