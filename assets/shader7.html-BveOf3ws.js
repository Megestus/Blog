import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as s,e as u,f as o,a as e,g as a,d as n,r as d,o as v}from"./app-DJGYRO-r.js";const b={};function h(g,l){const r=d("Badge"),t=d("CodeTabs");return v(),p("div",null,[l[7]||(l[7]=s("p",null,"摘要：ColAmbient、3ColAmbient、shadow、 光照模型组合",-1)),u(" more "),l[8]||(l[8]=o('<p> </p><h2 id="colambient" tabindex="-1"><a class="header-anchor" href="#colambient"><span>ColAmbient</span></a></h2><p>环境光加上环境光遮蔽 - PS：AO叠加个颜色</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240309144752.png" style="width:85% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240309145106.png" style="width:15% !important;"></div><p> </p><h2 id="_3colambient" tabindex="-1"><a class="header-anchor" href="#_3colambient"><span>3ColAmbient</span></a></h2><p>这应该叫三阶环境光,取Normal的G通道-在分别获取mask，然后与AO混合。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240309144402.png" style="width:85% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310221750.png" style="width:15% !important;"></div><p><strong>改进</strong>-下方是基于取Normal的GB通道进行add-取mask，然后与ao混合，在美术上就是与ao的实际灰阶进行混合。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310221127.png" style="width:85% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310221652.png" style="width:15% !important;"></div><p> </p><h2 id="_3colambient-vscood" tabindex="-1"><a class="header-anchor" href="#_3colambient-vscood"><span>3ColAmbient VScood</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310221750.png" style="width:15% !important;"></div><p>步骤：</p><ol><li>以手写Lambert （第3课）作为模板，复制粘贴大法；</li><li>修改Shader路径名；</li><li>定义面板参数： <ul><li>贴图参数的定义方法：<code>_XXX (“面板标签”, 2d) = “white” {} </code></li><li><code>“white”{}</code> 代表缺省纹理为纯白贴图，其他还有<code>“black”{}</code> <code>“gray”{}</code> …</li></ul></li><li>对应的声明输入参数；</li><li>输入结构追加uv0；</li><li>输出结构追加uv；</li><li>顶点Shader中对uv做赋值；</li><li>准备向量 nDir；</li><li>通过nDir计算朝上，朝下，侧面各部位遮罩；</li><li>通过部位遮罩混合最终环境光颜色；</li><li>采样Occlusion图，获得环境遮挡信息；采样贴图方法：<code>tex2D(_Texture, uv)；</code></li><li>用环境遮挡信息对环境光做遮挡；</li><li>输出最终颜色。</li></ol>',15)),s("details",null,[s("summary",null,[e(r,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"121",data:[{id:"L07_3ColAmbient_VS.shader"}],"tab-id":"shell"},{title0:a(({value:i,isActive:c})=>l[0]||(l[0]=[n("L07_3ColAmbient_VS.shader")])),tab0:a(({value:i,isActive:c})=>l[1]||(l[1]=[s("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[s("pre",null,[s("code",null,[s("span",{class:"line"},'\uFEFFShader "AP1/L07/L07_3ColAmbient_Vs" {'),n(`
`),s("span",{class:"line"},"    // 材质面板参数"),n(`
`),s("span",{class:"line"},"    Properties {"),n(`
`),s("span",{class:"line"},"        //暴露参数"),n(`
`),s("span",{class:"line"},'        _Occlusion  ("Occlusion", 2d)     = "white"{}'),n(`
`),s("span",{class:"line"},'        _EnvUpCol   ("EnvUpCol", Color)   = (1,1,1,1)'),n(`
`),s("span",{class:"line"},'        _EnvSideCol ("EnvSideCol", Color) = (0.5,0.5,0.5,1)'),n(`
`),s("span",{class:"line"},'        _EnvDownCol ("EnvDownCol", Color) = (0,0,0,1)                                                                                                                                                                                                                                                                                                                                                                '),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},"    SubShader {"),n(`
`),s("span",{class:"line"},"        Tags {"),n(`
`),s("span",{class:"line"},'            "RenderType"="Opaque"'),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"        Pass {"),n(`
`),s("span",{class:"line"},'            Name "FORWARD"'),n(`
`),s("span",{class:"line"},"            Tags {"),n(`
`),s("span",{class:"line"},'                "LightMode"="ForwardBase"'),n(`
`),s("span",{class:"line"},"            }"),n(`
`),s("span",{class:"line"},"            "),n(`
`),s("span",{class:"line"},"            CGPROGRAM"),n(`
`),s("span",{class:"line"},"            #pragma vertex vert"),n(`
`),s("span",{class:"line"},"            #pragma fragment frag"),n(`
`),s("span",{class:"line"},'            #include "UnityCG.cginc"'),n(`
`),s("span",{class:"line"},"            #pragma multi_compile_fwdbase_fullshadows"),n(`
`),s("span",{class:"line"},"            #pragma target 3.0"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"            // 输入参数"),n(`
`),s("span",{class:"line"},"            uniform sampler2D _Occlusion;"),n(`
`),s("span",{class:"line"},"            uniform float3    _EnvUpCol;"),n(`
`),s("span",{class:"line"},"            uniform float3    _EnvSideCol;"),n(`
`),s("span",{class:"line"},"            uniform float3    _EnvDownCol;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"            // 输入结构"),n(`
`),s("span",{class:"line"},"            struct VertexInput {"),n(`
`),s("span",{class:"line"},"                float4 vertex : POSITION;   // 将模型顶点信息输入进来"),n(`
`),s("span",{class:"line"},"                float4 normal : NORMAL;     // 将模型法线信息输入进来"),n(`
`),s("span",{class:"line"},"                float2 uv0 : TEXCOORD0;     // 将模型UV信息输入进来 0通道 共4通道"),n(`
`),s("span",{class:"line"},"            };"),n(`
`),s("span",{class:"line"},"            // 输出结构"),n(`
`),s("span",{class:"line"},"            struct VertexOutput {"),n(`
`),s("span",{class:"line"},"                float4 pos : SV_POSITION;   // 由模型顶点信息换算而来的顶点屏幕位置"),n(`
`),s("span",{class:"line"},"                float3 nDirWS : TEXCOORD0;  // 由模型法线信息换算来的世界空间法线信息"),n(`
`),s("span",{class:"line"},"                float2 uv : TEXCOORD1;      // 追加UV信息用语像素Shader采样贴图"),n(`
`),s("span",{class:"line"},"            };"),n(`
`),s("span",{class:"line"},"            // 输入结构>>>顶点Shader>>>输出结构"),n(`
`),s("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),n(`
`),s("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                // 新建一个输出结构"),n(`
`),s("span",{class:"line"},"                o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构"),n(`
`),s("span",{class:"line"},"                o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构"),n(`
`),s("span",{class:"line"},"                o.uv = v.uv0;                                    // 采集输出贴图"),n(`
`),s("span",{class:"line"},"                return o;                                        // 将输出结构 输出"),n(`
`),s("span",{class:"line"},"            }"),n(`
`),s("span",{class:"line"},"            // 输出结构 >>> 像素"),n(`
`),s("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),n(`
`),s("span",{class:"line"},"                //准备所有要用到的向量"),n(`
`),s("span",{class:"line"},"                float3 nDir = i.nDirWS;                                 // 获取nDir"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"                float upMask =max(0.0, nDir.g);                         // 获取朝上部分遮罩"),n(`
`),s("span",{class:"line"},"                float downMask =max(0.0, -nDir.g);                      // 获取朝下部分遮罩"),n(`
`),s("span",{class:"line"},"                float sideMask =1.0 - upMask - downMask;                // 获取侧面部分遮罩"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"                float3 envCol = (_EnvUpCol * upMask ) + (_EnvSideCol * sideMask) + (_EnvDownCol * downMask); // 混合环境色"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"                float occlusion = tex2D (_Occlusion , i.uv);             // 采样Occlusion贴图"),n(`
`),s("span",{class:"line"},"                "),n(`
`),s("span",{class:"line"},"                float3 envLighting = envCol * occlusion;                 // 计算环境光照"),n(`
`),s("span",{class:"line"},"                return float4(envLighting , 1.0);                        // 返回最终颜色"),n(`
`),s("span",{class:"line"},"            }"),n(`
`),s("span",{class:"line"},"            ENDCG"),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},'    FallBack "Diffuse"'),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"// ps:要主要能复制就复制 不要手打"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})]),l[9]||(l[9]=o('<p> </p><h2 id="shadow-vscood" tabindex="-1"><a class="header-anchor" href="#shadow-vscood"><span>shadow VScood</span></a></h2><p><em>unity 有自带封装好的投影代码</em></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310225810.png" style="width:60% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310224034.png" style="width:15% !important;"></div><p>步骤：</p><ol><li>以手写FlatCol（第3课）作为模板，复制粘贴大法；</li><li>修改Shader路径名；</li><li>无需面板参数；</li><li>无需声明输入参数；</li><li>无需修改输入结构；</li><li>输出结构追加：<code>LIGHTING_COORDS(0, 1)：</code><ul><li>此为Unity封装好的输出结构内容，照写就行，暂时不看细节；</li><li>括号中的参入，如(0, 1)；0，1分别代表占用了TEXCOORD1和TEXCOORD2；</li></ul></li><li>顶点Shader中必须调用Unity封装好的方法：<code>TRANSFER_VERTEX_TO_FRAGMENT(o);</code></li><li>像素Shader中获取投影信息同样通过Unity提供的方法：<code>LIGHT_ATTENUATION(i)；</code></li><li>将投影作为结果输出。</li></ol><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310225324.png" style="width:16% !important;"></div>',7)),s("details",null,[s("summary",null,[e(r,{text:"Code-view",color:"#e0dd8b"}),l[2]||(l[2]=n(" - 叠加了个Lambert "))]),e(t,{id:"201",data:[{id:"L07_shadow_VS.shader"}],"tab-id":"shell"},{title0:a(({value:i,isActive:c})=>l[3]||(l[3]=[n("L07_shadow_VS.shader")])),tab0:a(({value:i,isActive:c})=>l[4]||(l[4]=[s("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[s("pre",null,[s("code",null,[s("span",{class:"line"},'\uFEFFShader "AP1/L07/L07_shadow_vs"  // 自定义Shader路径'),n(`
`),s("span",{class:"line"},"{"),n(`
`),s("span",{class:"line"},"    // 材质面板参数"),n(`
`),s("span",{class:"line"},"    Properties {"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},"    SubShader {"),n(`
`),s("span",{class:"line"},"        Tags {"),n(`
`),s("span",{class:"line"},'            "RenderType"="Opaque"'),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"        Pass {"),n(`
`),s("span",{class:"line"},'            Name "FORWARD"'),n(`
`),s("span",{class:"line"},"            Tags {"),n(`
`),s("span",{class:"line"},'                "LightMode"="ForwardBase"'),n(`
`),s("span",{class:"line"},"            }"),n(`
`),s("span",{class:"line"},"            "),n(`
`),s("span",{class:"line"},"            CGPROGRAM"),n(`
`),s("span",{class:"line"},"            #pragma vertex vert"),n(`
`),s("span",{class:"line"},"            #pragma fragment frag"),n(`
`),s("span",{class:"line"},'            #include "UnityCG.cginc"'),n(`
`),s("span",{class:"line"},'            #include "AutoLight.cginc"                  // 使用Unity投影必须包含这两个库文件'),n(`
`),s("span",{class:"line"},'            #include "Lighting.cginc"                   // 同上'),n(`
`),s("span",{class:"line"},"            #pragma multi_compile_fwdbase_fullshadows"),n(`
`),s("span",{class:"line"},"            #pragma target 3.0"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"            // 输入参数"),n(`
`),s("span",{class:"line"},"            uniform float _SwitchLambert; "),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"            // 输入结构"),n(`
`),s("span",{class:"line"},"            struct VertexInput {"),n(`
`),s("span",{class:"line"},"                float4 vertex : POSITION;       //将模型的顶点信息输入进来"),n(`
`),s("span",{class:"line"},"                float3 normal : NORMAL;         //将模型的noraml信息输入进来"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"            };"),n(`
`),s("span",{class:"line"},"            // 输出结构"),n(`
`),s("span",{class:"line"},"            struct VertexOutput {"),n(`
`),s("span",{class:"line"},"                float4 pos : SV_POSITION;           //由模型顶点信息换算而来的顶点屏幕位置"),n(`
`),s("span",{class:"line"},"                float3 nDirWS : TEXCOORD1;          //由模型法线信息换算来的世界空间法线信息"),n(`
`),s("span",{class:"line"},"                LIGHTING_COORDS(2,3)                //投影用坐标信息 Unity已封装 不用管细节 , 这里COORDS(2,3) 是根据已有的TEXCOORDn坐标添加排列。 例如TEXCOORD1上面有1了那么继续往下排列。"),n(`
`),s("span",{class:"line"},"                                                    //TEXCOORD是指纹理坐标，float2, float3, float4类型。n是指第几组纹理坐标，maya用户可以理解为UV集"),n(`
`),s("span",{class:"line"},"            };"),n(`
`),s("span",{class:"line"},"            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架"),n(`
`),s("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),n(`
`),s("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                    // 新建一个输出结构"),n(`
`),s("span",{class:"line"},"                    o.pos = UnityObjectToClipPos( v.vertex );        // 变换顶点信息 并将其塞给输出结构"),n(`
`),s("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);   // 变换法线信息 并将其塞给输出结构"),n(`
`),s("span",{class:"line"},"                    TRANSFER_VERTEX_TO_FRAGMENT(o)                   // Unity封装 不用管细节"),n(`
`),s("span",{class:"line"},"            return o;                                                // 将输出结构 输出"),n(`
`),s("span",{class:"line"},"            }"),n(`
`),s("span",{class:"line"},"            // 输出结构 >>> 像素"),n(`
`),s("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),n(`
`),s("span",{class:"line"},"                float3 nDir = i.nDirWS;                                 // 获取nDir"),n(`
`),s("span",{class:"line"},"                float3 lDir = normalize(_WorldSpaceLightPos0.xyz);      // 获取lDir"),n(`
`),s("span",{class:"line"},"                float nDotl = dot(nDir, lDir);                          // nDir点积lDir"),n(`
`),s("span",{class:"line"},"                float lambert = max(0.0, nDotl);                        // 截断负值"),n(`
`),s("span",{class:"line"},"                // return float4 (lambert, lambert, lambert, 1.0);      // 输出最终颜色"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"                float shadow = LIGHT_ATTENUATION(i);                    // 同样Unity封装好的函数 可取出投影"),n(`
`),s("span",{class:"line"},"                float3 lambertShadow = (lambert  * shadow) ;            // 多乘了个Lambert"),n(`
`),s("span",{class:"line"},"                return float4 ( lambertShadow , 1.0);                   // 输出最终颜色"),n(`
`),s("span",{class:"line"},"            }"),n(`
`),s("span",{class:"line"},"            ENDCG"),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},'    FallBack "Diffuse"'),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})]),l[10]||(l[10]=o('<p> </p><h2 id="简化理解光照构成-光照模型组合" tabindex="-1"><a class="header-anchor" href="#简化理解光照构成-光照模型组合"><span>简化理解光照构成-光照模型组合</span></a></h2><p>将之前的内容结合</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310171946.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310174955.png" style="width:95% !important;"></div><p>在这里环境的遮挡也可以使用后处理，对整个场景的环境遮蔽进行叠加。</p><h3 id="oldschoolplus" tabindex="-1"><a class="header-anchor" href="#oldschoolplus"><span>OldSchoolPlus</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/sf_oldschopus_f4520.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310221750.png" style="width:15% !important;"></div><p> </p><h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业"><span>作业:</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310235019.png" style="width:95% !important;"></div><h3 id="oldschoolplus-vs" tabindex="-1"><a class="header-anchor" href="#oldschoolplus-vs"><span>OldSchoolPlus-vs</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240311015052.png" style="width:15% !important;"></div>',14)),s("details",null,[s("summary",null,[e(r,{text:"Code-view",color:"#e0dd8b"})]),e(t,{id:"238",data:[{id:"L07_OldSchoolPlus_VS.shader"}],"tab-id":"shell"},{title0:a(({value:i,isActive:c})=>l[5]||(l[5]=[n("L07_OldSchoolPlus_VS.shader")])),tab0:a(({value:i,isActive:c})=>l[6]||(l[6]=[s("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader","data-title":"shader"},[s("pre",null,[s("code",null,[s("span",{class:"line"},'\uFEFFShader "AP1/L07/L07_OldSchoolPlus_VS" {'),n(`
`),s("span",{class:"line"},"    // 材质面板参数"),n(`
`),s("span",{class:"line"},"    Properties {"),n(`
`),s("span",{class:"line"},"        //暴露参数"),n(`
`),s("span",{class:"line"},'        _MainCol        ("baseCol", color) = (1.0, 1.0, 1.0, 1.0)'),n(`
`),s("span",{class:"line"},'        _MainCol2       ("highLight", color) = (1.0, 1.0, 1.0, 1.0)'),n(`
`),s("span",{class:"line"},'        _SpecularPow    ("SpecularPow", range(1,50)) = 30   '),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},'        _ShadowPow    ("ShadowPow", range(1,50)) = 10   '),n(`
`),s("span",{class:"line"},"        "),n(`
`),s("span",{class:"line"},'        _Occlusion  ("AoTex", 2d)     = "white"{}'),n(`
`),s("span",{class:"line"},'        _EnvUpCol   ("EnvUpCol", Color)   = (1,1,1,1)'),n(`
`),s("span",{class:"line"},'        _EnvSideCol ("EnvSideCol", Color) = (0.5,0.5,0.5,1)'),n(`
`),s("span",{class:"line"},'        _EnvDownCol ("EnvDownCol", Color) = (0,0,0,1)                                                                                                                                                                                                                                                                                                                                                                  '),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},"    SubShader {"),n(`
`),s("span",{class:"line"},"        Tags {"),n(`
`),s("span",{class:"line"},'            "RenderType"="Opaque"'),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"        Pass {"),n(`
`),s("span",{class:"line"},'            Name "FORWARD"'),n(`
`),s("span",{class:"line"},"            Tags {"),n(`
`),s("span",{class:"line"},'                "LightMode"="ForwardBase"'),n(`
`),s("span",{class:"line"},"            }"),n(`
`),s("span",{class:"line"},"            "),n(`
`),s("span",{class:"line"},"            CGPROGRAM"),n(`
`),s("span",{class:"line"},"            #pragma vertex vert"),n(`
`),s("span",{class:"line"},"            #pragma fragment frag"),n(`
`),s("span",{class:"line"},'            #include "UnityCG.cginc"'),n(`
`),s("span",{class:"line"},'            #include "AutoLight.cginc"                  // Unity投影库文件'),n(`
`),s("span",{class:"line"},'            #include "Lighting.cginc"                   // Unity投影库文件'),n(`
`),s("span",{class:"line"},"            #pragma multi_compile_fwdbase_fullshadows"),n(`
`),s("span",{class:"line"},"            #pragma target 3.0"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"            // 输入参数"),n(`
`),s("span",{class:"line"},"            uniform float3 _MainCol2; // RGB float3"),n(`
`),s("span",{class:"line"},"            uniform float3 _MainCol; // RGB float3"),n(`
`),s("span",{class:"line"},"            uniform float _SpecularPow; // 标量 float"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"            uniform sampler2D _Occlusion;"),n(`
`),s("span",{class:"line"},"            uniform float3    _EnvUpCol;"),n(`
`),s("span",{class:"line"},"            uniform float3    _EnvSideCol;"),n(`
`),s("span",{class:"line"},"            uniform float3    _EnvDownCol;"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"            uniform float _ShadowPow ; // add shadow Pow sider"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"            // 输入结构"),n(`
`),s("span",{class:"line"},"            struct VertexInput {"),n(`
`),s("span",{class:"line"},"                float4 vertex : POSITION;       //将模型的顶点信息输入进来"),n(`
`),s("span",{class:"line"},"                float3 normal : NORMAL;         //将模型的noraml信息输入进来"),n(`
`),s("span",{class:"line"},"                float2 uv0 : TEXCOORD0;         // 将模型UV信息输入进来 0通道 共4通道"),n(`
`),s("span",{class:"line"},"            };"),n(`
`),s("span",{class:"line"},"            // 输出结构"),n(`
`),s("span",{class:"line"},"            struct VertexOutput {"),n(`
`),s("span",{class:"line"},"                float4 pos : SV_POSITION;       //裁剪空间（暂理解为屏幕空间吧）顶点位置- 由模型顶点信息换算而来的顶点屏幕位置"),n(`
`),s("span",{class:"line"},"                float4 posWS : TEXCOORD0;       //世界空间顶点位置"),n(`
`),s("span",{class:"line"},"                float3 nDirWS : TEXCOORD1;      //世界空间法线方向-由模型法线信息换算来的世界空间法线信息"),n(`
`),s("span",{class:"line"},"                LIGHTING_COORDS(2,3)            //投影用坐标信息"),n(`
`),s("span",{class:"line"},"                float2 uv : TEXCOORD4;          // 追加UV信息用语像素Shader采样贴图"),n(`
`),s("span",{class:"line"},"            };"),n(`
`),s("span",{class:"line"},"            // 输入结构>>>顶点Shader>>>输出结构"),n(`
`),s("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),n(`
`),s("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                       // 新建一个输出结构"),n(`
`),s("span",{class:"line"},"                    o.pos = UnityObjectToClipPos( v.vertex );           // 变换顶点位置 OS>CS  -变换顶点信息 并将其塞给输出结构"),n(`
`),s("span",{class:"line"},"                    o.posWS = mul(unity_ObjectToWorld, v.vertex);       // 变换顶点位置 OS>WS"),n(`
`),s("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);      // 变换法线方向 OS>WS  -变换法线信息 并将其塞给输出结构"),n(`
`),s("span",{class:"line"},"                    TRANSFER_VERTEX_TO_FRAGMENT(o)                      // 投影用Unity封装"),n(`
`),s("span",{class:"line"},"                    o.uv = v.uv0;                                       // 采集输出贴图"),n(`
`),s("span",{class:"line"},"                return o;                                               // 将输出结构 输出"),n(`
`),s("span",{class:"line"},"            }"),n(`
`),s("span",{class:"line"},"            // 输出结构 >>> 像素"),n(`
`),s("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),n(`
`),s("span",{class:"line"},"                //准备所有要用到的向量"),n(`
`),s("span",{class:"line"},"                float3 nDir = i.nDirWS; "),n(`
`),s("span",{class:"line"},"                float3 lDir = _WorldSpaceLightPos0.xyz;  "),n(`
`),s("span",{class:"line"},"                float3 vDir = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);"),n(`
`),s("span",{class:"line"},"                float shadow = LIGHT_ATTENUATION(i);                    // 同样Unity封装好的函数 可取出投影"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"                float3 vRDir = reflect( -vDir, nDir );"),n(`
`),s("span",{class:"line"},"                //准备所有要用到的中间数据，这里是两个点积结果；"),n(`
`),s("span",{class:"line"},"                float nDotl = dot(nDir, lDir);      //得到lambert"),n(`
`),s("span",{class:"line"},"                float vRDotl = dot(vRDir, lDir);    //得到phong"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"                //编写光照模型"),n(`
`),s("span",{class:"line"},"                float lambert = max(0.0, nDotl); "),n(`
`),s("span",{class:"line"},"                float Phong = pow(max(0.0,vRDotl),_SpecularPow);"),n(`
`),s("span",{class:"line"},"                float3 LambertPhong = (_MainCol* lambert) + (Phong * _MainCol2);"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"                //shadow"),n(`
`),s("span",{class:"line"},"                float shadowPow = pow(shadow , _ShadowPow) ;            //阴影硬度"),n(`
`),s("span",{class:"line"},"                float3 shadowPhong = LambertPhong * shadowPow;"),n(`
`),s("span",{class:"line"},"                "),n(`
`),s("span",{class:"line"},"                //3ColAmbient"),n(`
`),s("span",{class:"line"},"                float2 nDirgbadd = (nDir.g+nDir.b);                      // 取GB的mask"),n(`
`),s("span",{class:"line"},"                float upMask =max(0.0,nDirgbadd);                        // 获取朝上部分遮罩"),n(`
`),s("span",{class:"line"},"                float downMask =max(0.0, -nDirgbadd);                       // 获取朝下部分遮罩"),n(`
`),s("span",{class:"line"},"                float sideMask =1.0 - upMask - downMask;                 // 获取侧面部分遮罩"),n(`
`),s("span",{class:"line"},"                float3 envCol = (_EnvUpCol * upMask ) + (_EnvSideCol * sideMask) + (_EnvDownCol * downMask); // 混合环境色"),n(`
`),s("span",{class:"line"},"                float occlusion = tex2D (_Occlusion , i.uv);             // 采样Occlusion贴图"),n(`
`),s("span",{class:"line"},"                float3 envLighting = envCol * occlusion;                 // 计算环境光照"),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},"                float3 finalCol = envLighting+shadowPhong;"),n(`
`),s("span",{class:"line"},"                //返回结果"),n(`
`),s("span",{class:"line"},"                return float4(finalCol, 1.0);"),n(`
`),s("span",{class:"line"},"            }"),n(`
`),s("span",{class:"line"},"            ENDCG"),n(`
`),s("span",{class:"line"},"        }"),n(`
`),s("span",{class:"line"},"    }"),n(`
`),s("span",{class:"line"},'    FallBack "Diffuse"'),n(`
`),s("span",{class:"line"},"}"),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})])])}const C=m(b,[["render",h],["__file","shader7.html.vue"]]),w=JSON.parse('{"path":"/engine/unity/shader/shader7.html","title":"unity-shader-07","lang":"zh-CN","frontmatter":{"title":"unity-shader-07","description":"摘要：ColAmbient、3ColAmbient、shadow、 光照模型组合","icon":"iconfont alicon-shader","category":"shader","tags":["shader","unity"],"date":"2024-03-09T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310220653.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader7.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-07"}],["meta",{"property":"og:description","content":"摘要：ColAmbient、3ColAmbient、shadow、 光照模型组合"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310220653.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310220653.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-07"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-03-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-07\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240310220653.png\\"],\\"datePublished\\":\\"2024-03-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"ColAmbient","slug":"colambient","link":"#colambient","children":[]},{"level":2,"title":"3ColAmbient","slug":"_3colambient","link":"#_3colambient","children":[]},{"level":2,"title":"3ColAmbient VScood","slug":"_3colambient-vscood","link":"#_3colambient-vscood","children":[]},{"level":2,"title":"shadow VScood","slug":"shadow-vscood","link":"#shadow-vscood","children":[]},{"level":2,"title":"简化理解光照构成-光照模型组合","slug":"简化理解光照构成-光照模型组合","link":"#简化理解光照构成-光照模型组合","children":[{"level":3,"title":"OldSchoolPlus","slug":"oldschoolplus","link":"#oldschoolplus","children":[]}]},{"level":2,"title":"作业:","slug":"作业","link":"#作业","children":[{"level":3,"title":"OldSchoolPlus-vs","slug":"oldschoolplus-vs","link":"#oldschoolplus-vs","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":6}]},"filePathRelative":"engine/unity/shader/shader7.md","localizedDate":"2024年3月9日","excerpt":"<p>摘要：ColAmbient、3ColAmbient、shadow、 光照模型组合</p>\\n","autoDesc":true}');export{C as comp,w as data};
