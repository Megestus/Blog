import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as n,e as o,f as r,a as d,g as l,r as m,o as u,d as s}from"./app-DJGYRO-r.js";const v={};function h(g,e){const t=m("CodeTabs");return u(),p("div",null,[e[4]||(e[4]=n("p",null,"摘要：Diffuse / Specular Reflection / Phong / BlinnPhong",-1)),o(" more "),e[5]||(e[5]=r('<h2 id="diffuse-specular-reflection" tabindex="-1"><a class="header-anchor" href="#diffuse-specular-reflection"><span>Diffuse / Specular Reflection</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225213407.png" style="width:95% !important;"></div><ul><li>漫反射和镜面反射的区别就在于微表面的粗糙程度。</li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SpecularReflection.gif" style="width:30% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/DiffuseReflection.gif" style="width:30% !important;"></div><ul><li><p>Specular Reflection <strong>镜面反射</strong></p><ul><li>有目的，沿反射方向，不均匀的反射；</li><li>追求漫反射的列子：化妆镜，车漆；</li></ul></li><li><p>Diffuse Reflection <strong>漫反射</strong></p><ul><li>漫无目的，四面八方，均匀的反射；</li><li>追求漫反射的列子：电影荧幕；</li></ul></li></ul><h2 id="各种向量" tabindex="-1"><a class="header-anchor" href="#各种向量"><span>各种向量</span></a></h2><h3 id="常用向量-全要记" tabindex="-1"><a class="header-anchor" href="#常用向量-全要记"><span>常用向量：（全要记）</span></a></h3><ul><li>nDir：法线方向，点乘操作时简称n；</li><li>lDir：光照方向，点乘操作时简称l；</li><li>vDir：观察方向，点乘操作时简称v；</li><li>rDir：光反射方向，点乘操作时简称r；</li><li>hDir：半角方向(Halfway)，lDir和vDir的中间角方向，点乘操作时简称h；</li></ul><h3 id="所在空间-暂时只记ws-其余看热闹" tabindex="-1"><a class="header-anchor" href="#所在空间-暂时只记ws-其余看热闹"><span>所在空间：（暂时只记WS，其余看热闹）</span></a></h3><ul><li>OS：ObjectSpace 物体空间，本地空间；</li><li>WS：WorldSpace 世界空间；</li><li>VS： ViewSpace 观察空间；</li><li>CS：HomogenousClipSpace 齐次剪裁空间；</li><li>TS：TangentSpace 切线空间；</li><li>TXS：TextureSpace 纹理空间；<br> 例：nDirWS： 世界空间下的法线方向；</li></ul><h2 id="漫反射-diffuse" tabindex="-1"><a class="header-anchor" href="#漫反射-diffuse"><span>漫反射-Diffuse:</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225214355.png" align="left" style="width:30% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/DiffuseReflection1.gif" style="width:40% !important;"></div><ul><li>因其向四面八方均匀散射，所以反射亮度和观察者看的方向无关；</li><li>实现方式：Lambert（n dot l），显然vDir不参与计算；</li></ul><h2 id="镜面反射-specular" tabindex="-1"><a class="header-anchor" href="#镜面反射-specular"><span>镜面反射-Specular:</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225222546.png" align="left" style="width:50% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SpecularReflection1.gif" style="width:50% !important;"></div><p>镜面反射的反射范围是类似一个圆锥范围-只有在圆锥范围内才能观察到镜面反射的反弹光。</p><ul><li>因其反射有明显方向性，所以观察者的视角决定了反射光线的有无，明暗；</li><li>实现方式： <ul><li>Phong（r dot v），即光反射方向和视角方向越重合，反射越强；</li><li>Blinn-Phong（n dot h），即法线方向和半角方向越重合，反射越强；</li></ul></li></ul><h2 id="phong" tabindex="-1"><a class="header-anchor" href="#phong"><span>Phong</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225222850.png" style="width:95% !important;"></div><h3 id="reflect-反射" tabindex="-1"><a class="header-anchor" href="#reflect-反射"><span>Reflect （反射）</span></a></h3><ul><li>输出入射向量 [I] 的反射向量，就像在具有法线 [N] 的表面上反射/反弹一样</li></ul><h2 id="blinn-phong" tabindex="-1"><a class="header-anchor" href="#blinn-phong"><span>Blinn-Phong</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225222903.png" style="width:95% !important;"></div><p>相对phong ，blinn-phong的计算更便宜些。对于现在cpu来说，可忽略不计,以美术为目的。</p><h2 id="vs写一个lambert-blinnphong的shader" tabindex="-1"><a class="header-anchor" href="#vs写一个lambert-blinnphong的shader"><span>vs写一个Lambert+BlinnPhong的shader</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225222921.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225222930.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225222940.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225222951.png" style="width:95% !important;"></div><h3 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code"><span>vs Code</span></a></h3>',30)),d(t,{id:"198",data:[{id:"blinn phong"},{id:"phong"}],"tab-id":"shell"},{title0:l(({value:a,isActive:i})=>e[0]||(e[0]=[s("blinn phong")])),title1:l(({value:a,isActive:i})=>e[1]||(e[1]=[s("phong")])),tab0:l(({value:a,isActive:i})=>e[2]||(e[2]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},'\uFEFFShader "AP1/L05/L05_OldShool_VS" {'),s(`
`),n("span",{class:"line"},"    // 材质面板参数"),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},"        //暴露参数"),s(`
`),n("span",{class:"line"},'        _MainCol        ("颜色", color) = (1.0, 1.0, 1.0, 1.0)'),s(`
`),n("span",{class:"line"},'        _SpecularPow    ("高光次幂", range(1,50)) = 30                                                                                                                                                                                                                                                                                                                                                                   '),s(`
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
`),n("span",{class:"line"},"                // 修饰字（满足小朋友太多的问号,保全发量的大家看热闹,其实不写好像也闹太套）"),s(`
`),n("span",{class:"line"},"                // uniform 共享于vert,frag"),s(`
`),n("span",{class:"line"},"                // attibute 仅用于vert"),s(`
`),n("span",{class:"line"},"                // varying 用于vert,frag传数据"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            uniform float3 _MainCol; // RGB够了 float3"),s(`
`),n("span",{class:"line"},"            uniform float _SpecularPow; // 标量 float"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;       //将模型的顶点信息输入进来"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;         //将模型的noraml信息输入进来"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输出结构"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 posCS : SV_POSITION;     //裁剪空间（暂理解为屏幕空间吧）顶点位置- 由模型顶点信息换算而来的顶点屏幕位置"),s(`
`),n("span",{class:"line"},"                float4 posWS : TEXCOORD0;       //世界空间顶点位置"),s(`
`),n("span",{class:"line"},"                float3 nDirWS : TEXCOORD1;      //世界空间法线方向-由模型法线信息换算来的世界空间法线信息"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输入结构>>>顶点Shader>>>输出结构"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                   // 新建一个输出结构"),s(`
`),n("span",{class:"line"},"                    o.posCS = UnityObjectToClipPos( v.vertex );    // 变换顶点位置 OS>CS  -变换顶点信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.posWS = mul(unity_ObjectToWorld, v.vertex);   // 变换顶点位置 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);  // 变换法线方向 OS>WS  -变换法线信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                return o;                                               // 将输出结构 输出"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            // 输出结构 >>> 像素"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                //准备所有要用到的向量，不会计算去SF拆"),s(`
`),n("span",{class:"line"},"                float3 nDir = i.nDirWS; "),s(`
`),n("span",{class:"line"},"                float3 lDir = _WorldSpaceLightPos0.xyz;  "),s(`
`),n("span",{class:"line"},"                float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);"),s(`
`),n("span",{class:"line"},"                float3 hDir = normalize(vDir + lDir );"),s(`
`),n("span",{class:"line"},"                //准备所有要用到的中间数据，这里是两个点积结果；"),s(`
`),n("span",{class:"line"},"                float nDotl = dot(nDir, lDir); "),s(`
`),n("span",{class:"line"},"                float nDoth = dot(nDir, hDir);"),s(`
`),n("span",{class:"line"},"                //编写光照模型"),s(`
`),n("span",{class:"line"},"                float lambert = max(0.0, nDotl);"),s(`
`),n("span",{class:"line"},"                float blinnPhong = pow(max(0.0,nDoth),_SpecularPow);"),s(`
`),n("span",{class:"line"},"                float3 finalRGB = _MainCol* lambert+ blinnPhong;"),s(`
`),n("span",{class:"line"},"                //返回结果"),s(`
`),n("span",{class:"line"},"                return float4(finalRGB, 1.0);"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:l(({value:a,isActive:i})=>e[3]||(e[3]=[n("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[n("pre",null,[n("code",null,[n("span",{class:"line"},'\uFEFFShader "AP1/L05/L05_Phong_VS" {'),s(`
`),n("span",{class:"line"},"    // 材质面板参数"),s(`
`),n("span",{class:"line"},"    Properties {"),s(`
`),n("span",{class:"line"},"        //暴露参数"),s(`
`),n("span",{class:"line"},'        _MainCol        ("颜色", color) = (1.0, 1.0, 1.0, 1.0)'),s(`
`),n("span",{class:"line"},'        _MainCol2       ("高光颜色", color) = (1.0, 1.0, 1.0, 1.0)'),s(`
`),n("span",{class:"line"},'        _SpecularPow    ("高光次幂", range(1,50)) = 30                                                                                                                                                                                                                                                                                                                                                                   '),s(`
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
`),n("span",{class:"line"},"            uniform float3 _MainCol2; // RGB float3"),s(`
`),n("span",{class:"line"},"            uniform float3 _MainCol; // RGB float3"),s(`
`),n("span",{class:"line"},"            uniform float _SpecularPow; // 标量 float"),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},"            // 输入结构"),s(`
`),n("span",{class:"line"},"            struct VertexInput {"),s(`
`),n("span",{class:"line"},"                float4 vertex : POSITION;       //将模型的顶点信息输入进来"),s(`
`),n("span",{class:"line"},"                float3 normal : NORMAL;         //将模型的noraml信息输入进来"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输出结构"),s(`
`),n("span",{class:"line"},"            struct VertexOutput {"),s(`
`),n("span",{class:"line"},"                float4 posCS : SV_POSITION;     //裁剪空间（暂理解为屏幕空间吧）顶点位置- 由模型顶点信息换算而来的顶点屏幕位置"),s(`
`),n("span",{class:"line"},"                float4 posWS : TEXCOORD0;       //世界空间顶点位置"),s(`
`),n("span",{class:"line"},"                float3 nDirWS : TEXCOORD1;      //世界空间法线方向-由模型法线信息换算来的世界空间法线信息"),s(`
`),n("span",{class:"line"},"            };"),s(`
`),n("span",{class:"line"},"            // 输入结构>>>顶点Shader>>>输出结构"),s(`
`),n("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),s(`
`),n("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                   // 新建一个输出结构"),s(`
`),n("span",{class:"line"},"                    o.posCS = UnityObjectToClipPos( v.vertex );    // 变换顶点位置 OS>CS  -变换顶点信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                    o.posWS = mul(unity_ObjectToWorld, v.vertex);   // 变换顶点位置 OS>WS"),s(`
`),n("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);  // 变换法线方向 OS>WS  -变换法线信息 并将其塞给输出结构"),s(`
`),n("span",{class:"line"},"                return o;                                               // 将输出结构 输出"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            // 输出结构 >>> 像素"),s(`
`),n("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),s(`
`),n("span",{class:"line"},"                //准备所有要用到的向量"),s(`
`),n("span",{class:"line"},"                float3 nDir = i.nDirWS; "),s(`
`),n("span",{class:"line"},"                float3 lDir = _WorldSpaceLightPos0.xyz;  "),s(`
`),n("span",{class:"line"},"                float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);"),s(`
`),n("span",{class:"line"},"                float3 vRDir = reflect( -vDir, nDir );"),s(`
`),n("span",{class:"line"},"                //准备所有要用到的中间数据，这里是两个点积结果；"),s(`
`),n("span",{class:"line"},"                float nDotl = dot(nDir, lDir); //得到lambert"),s(`
`),n("span",{class:"line"},"                float vRDotl = dot(vRDir, lDir);  //得到phong"),s(`
`),n("span",{class:"line"},"                //编写光照模型"),s(`
`),n("span",{class:"line"},"                float lambert = max(0.0, nDotl); "),s(`
`),n("span",{class:"line"},"                float Phong = pow(max(0.0,vRDotl),_SpecularPow);"),s(`
`),n("span",{class:"line"},"                float3 finalRGB = (_MainCol* lambert) + (Phong * _MainCol2);"),s(`
`),n("span",{class:"line"},"                //返回结果"),s(`
`),n("span",{class:"line"},"                return float4(finalRGB, 1.0);"),s(`
`),n("span",{class:"line"},"            }"),s(`
`),n("span",{class:"line"},"            ENDCG"),s(`
`),n("span",{class:"line"},"        }"),s(`
`),n("span",{class:"line"},"    }"),s(`
`),n("span",{class:"line"},'    FallBack "Diffuse"'),s(`
`),n("span",{class:"line"},"}"),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),e[6]||(e[6]=r('<h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业"><span>作业：</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240225223004.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240302220606.png" style="width:95% !important;"></div>',3))])}const S=c(v,[["render",h],["__file","shader5.html.vue"]]),y=JSON.parse('{"path":"/engine/unity/shader/shader5.html","title":"unity-shader-05","lang":"zh-CN","frontmatter":{"title":"unity-shader-05","description":"摘要：Diffuse / Specular Reflection / Phong / BlinnPhong","icon":"iconfont alicon-shader","category":"shader","tags":["shader","unity"],"date":"2024-02-25T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240302222216.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader5.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-05"}],["meta",{"property":"og:description","content":"摘要：Diffuse / Specular Reflection / Phong / BlinnPhong"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240302222216.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240302222216.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-05"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-02-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-05\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240302222216.png\\"],\\"datePublished\\":\\"2024-02-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"Diffuse / Specular Reflection","slug":"diffuse-specular-reflection","link":"#diffuse-specular-reflection","children":[]},{"level":2,"title":"各种向量","slug":"各种向量","link":"#各种向量","children":[{"level":3,"title":"常用向量：（全要记）","slug":"常用向量-全要记","link":"#常用向量-全要记","children":[]},{"level":3,"title":"所在空间：（暂时只记WS，其余看热闹）","slug":"所在空间-暂时只记ws-其余看热闹","link":"#所在空间-暂时只记ws-其余看热闹","children":[]}]},{"level":2,"title":"漫反射-Diffuse:","slug":"漫反射-diffuse","link":"#漫反射-diffuse","children":[]},{"level":2,"title":"镜面反射-Specular:","slug":"镜面反射-specular","link":"#镜面反射-specular","children":[]},{"level":2,"title":"Phong","slug":"phong","link":"#phong","children":[{"level":3,"title":"Reflect （反射）","slug":"reflect-反射","link":"#reflect-反射","children":[]}]},{"level":2,"title":"Blinn-Phong","slug":"blinn-phong","link":"#blinn-phong","children":[]},{"level":2,"title":"vs写一个Lambert+BlinnPhong的shader","slug":"vs写一个lambert-blinnphong的shader","link":"#vs写一个lambert-blinnphong的shader","children":[{"level":3,"title":"vs Code","slug":"vs-code","link":"#vs-code","children":[]}]},{"level":2,"title":"作业：","slug":"作业","link":"#作业","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":4}]},"filePathRelative":"engine/unity/shader/shader5.md","localizedDate":"2024年2月25日","excerpt":"<p>摘要：Diffuse / Specular Reflection / Phong /  BlinnPhong</p>\\n","autoDesc":true}');export{S as comp,y as data};
