import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,b as o,d as e,a as n,w as i,f as s,r as u,o as v,e as r}from"./app-C_fuDJR0.js";const b={},h=s('<p> </p><h2 id="特效类大纲" tabindex="-1"><a class="header-anchor" href="#特效类大纲"><span>特效类大纲</span></a></h2><p>包括透明混合的几种模式、UV顶点动画、绕动等。</p><ul><li>透明: <ul><li>AB;</li><li>AD;</li><li>AC;</li><li>自定义混合方式;</li></ul></li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518115003.png" style="width:40% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518115028.png" style="width:50% !important;"></div><ul><li>动画: <ul><li>参数动画</li><li>UV动画 <ul><li>UV流动</li><li>UV扰动</li><li>序列帧动画</li></ul></li><li>顶点动画 <ul><li>顶点位置动画</li><li>顶点颜色动画</li></ul></li></ul></li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/GIF_WaterWrinkles_WaterRipples2Full.gif" style="width:50% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/0a3b0a68-c313-4bf2-9e77-1dd12c49c2ee.gif" style="width:48% !important;"></div><ul><li>映射: <ul><li>极坐标</li><li>屏幕坐标UV</li><li>透明扭曲</li></ul></li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/434cb1ba-3810-4dcf-890b-6915e3efb823.gif" style="width:55% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/48f01ce3-374d-4696-9231-e1540fdfbebd.gif" style="width:38% !important;"></div><p> </p><h2 id="透切-alphacutout-ac" tabindex="-1"><a class="header-anchor" href="#透切-alphacutout-ac"><span>透切 AlphaCutout-AC</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/2e80d576-38f2-4bdc-964a-024245c979f5.gif" style="width:90% !important;"></div><p>用途：</p><ul><li>常用于复杂轮廓，明确边缘的物体表现，如：镂空金属，裙摆边缘，特定风格下的头发，树叶，等；</li><li>卡通渲染的特效表现； 优点：</li><li>没有排序问题； 缺点：</li><li>边缘效果太实；</li><li>移动端性能较差；</li></ul><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤：</span></a></h4><ol><li>以手写FlatCol（第3课）作为模板，CtrlCV伺候；</li><li>修改Shader路径名；</li><li>面板参数添加： <ol><li>_MainTex：主纹理 RGB颜色 A透贴；</li><li>_Cutoff：透明剪切阈值；</li></ol></li><li>修改SubShaderTags； <ol><li>RenderType：修改为对应的TransparentCutout；</li><li>ForceNoShadowCasting：设置为True，关闭投影；</li><li>IgnoreProjector：设置为True，不响应投射器；</li></ol></li><li>对应声明输入参数；</li><li>输入，输出，顶点Shader，增加UV相关代码；</li><li>像素Shader： <ol><li>对主纹理采样，RGB颜色 A透贴；</li><li>基于透贴灰度和透切阈值，产生透明效果；</li><li>返回值；</li></ol></li></ol>',16),p=e("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[e("pre",{class:"language-shader"},[e("code",null,`\uFEFFShader "AP1/L13/L13_AC"  // 自定义Shader路径
{
    // 材质面板参数
    Properties {
        _MainTex ("RGB：颜色 A：透贴", 2d) = "gray"{}       //主纹理 RGB颜色 A透贴；
        _Cutoff ("透切阈值", range(0.0, 1.0)) = 0.5         //透明剪切阈值
    }
    SubShader {
        Tags {
            "RenderType"="TransparentCutout"        // 对应改为Cutout   RenderType 还可以玩鹰眼效果
            "ForceNoShadowCasting"="True"           // 关闭阴影投射  
            "IgnoreProjector"="True"                // 不响应投射器
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
            uniform sampler2D _MainTex; uniform float4 _MainTex_ST;
            uniform half _Cutoff;

            // 输入结构
            struct VertexInput {
                float4 vertex : POSITION;       // 顶点位置 总是必要
                float2 uv : TEXCOORD0;          // UV信息 采样贴图用
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION; // 顶点位置 总是必要
                float2 uv : TEXCOORD0; // UV信息 采样贴图用
            };
            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                    
                    o.pos = UnityObjectToClipPos( v.vertex );           // 顶点位置 OS>CS
                    o.uv = TRANSFORM_TEX(v.uv, _MainTex);               // UV信息 支持TilingOffset
            return o;                                                   // 将输出结构 输出
            }
            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                half4 var_MainTex = tex2D(_MainTex, i.uv); // 采样贴图 RGB颜色 A透贴
                clip(var_MainTex.a - _Cutoff); // 透明剪切
                return var_MainTex; // 返回值

            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=s('<p> </p><h2 id="透混-alphabland-ab" tabindex="-1"><a class="header-anchor" href="#透混-alphabland-ab"><span>透混 AlphaBland-AB</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/2e80d576-38f2-4bdc-964a-024245c979f5.gif" style="width:90% !important;"></div><p>用途：</p><ul><li>常用于复杂轮廓，无明确边缘的物体表现；</li><li>常用于半透明的物体表现；</li><li>一般的特效表现，打底用； 优点：</li><li>移动端性能较好；</li><li>边缘效果较好 缺点：</li><li>有排序问题；</li></ul><h4 id="步骤-1" tabindex="-1"><a class="header-anchor" href="#步骤-1"><span>步骤：</span></a></h4><ol><li>以AC作为模板，CtrlCV伺候；</li><li>修改Shader路径名；</li><li>面板参数保留： <ol><li>_MainTex：主纹理 RGB颜色 A透贴；</li></ol></li><li>修改SubShaderTags； <ol><li>Queue：渲染队列修改为对应的Transparent；</li><li>RenderType：修改为对应的Transparent；</li><li>ForceNoShadowCasting：设置为True，关闭投影；</li><li>IgnoreProjector：设置为True，不响应投射器；</li></ol></li><li>修改混合方式：Blend One/SrcAlpha OneMinusSrcAlpha；</li><li>对应声明输入参数；</li><li>输入，输出，顶点Shader，不用改；</li><li>像素Shader： <ol><li>对主纹理采样，RGB颜色 A透贴；</li><li>返回值；</li></ol></li></ol>',7),f=e("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[e("pre",{class:"language-shader"},[e("code",null,`\uFEFFShader "AP1/L13/L13_AB"  // 自定义Shader路径
{
    // 材质面板参数
    Properties {
        _MainTex ("RGB：颜色 A：透贴", 2d) = "gray"{}       //主纹理 RGB颜色 A透贴；

    }
    SubShader {
        Tags {
            "Queue"="Transparent"                   // 调整渲染顺序
            "RenderType"="TransparentCutout"        // 对应改为Cutout   RenderType 还可以玩鹰眼效果
            "ForceNoShadowCasting"="True"           // 关闭阴影投射  
            "IgnoreProjector"="True"                // 不响应投射器
        }
        Pass {
            Name "FORWARD"
            Tags {
                "LightMode"="ForwardBase"
            }
            Cull Off
            Blend One OneMinusSrcAlpha // 修改混合方式One/SrcAlpha OneMinusSrcAlpha

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0

            //输入参数
            uniform sampler2D _MainTex; uniform float4 _MainTex_ST;
            
            // 输入结构
            struct VertexInput {
                float4 vertex : POSITION;       // 顶点位置 总是必要
                float2 uv : TEXCOORD0;          // UV信息 采样贴图用
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION; // 顶点位置 总是必要
                float2 uv : TEXCOORD0; // UV信息 采样贴图用
            };
            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                    
                    o.pos = UnityObjectToClipPos( v.vertex );           // 顶点位置 OS>CS
                    o.uv = TRANSFORM_TEX(v.uv, _MainTex);               // UV信息 支持TilingOffset
            return o;                                                   // 将输出结构 输出
            }
            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                half4 var_MainTex = tex2D(_MainTex, i.uv); // 采样贴图 RGB颜色 A透贴
                return var_MainTex; // 返回值

            }
            ENDCG
        }
    }
    FallBack "Diffuse/"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),O=s('<p> </p><h2 id="透叠-addtive-ad" tabindex="-1"><a class="header-anchor" href="#透叠-addtive-ad"><span>透叠 Addtive-AD</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/3e2df3e0-3803-40bb-bd89-b9cf719e718d.gif" style="width:20% !important;"></div><p>用途：</p><ul><li>常用于发光体，辉光的表现；</li><li>一般的特效表现，提亮用； 问题：</li><li>有排序问题；</li><li>多层叠加容易堆爆性能(OverDraw)；</li><li>作为辉光效果，通常可用后处理代替；</li></ul><h4 id="步骤-2" tabindex="-1"><a class="header-anchor" href="#步骤-2"><span>步骤：</span></a></h4><ol><li>以AB作为模板，CtrlCV伺候；</li><li>修改Shader路径名；</li><li>面板参数，不用改；</li><li>SubShaderTags，不用改；</li><li>混合模式修改为：Blend One One；</li><li>输入参数，不用改；</li><li>输入，输出，顶点Shader，不用改；</li><li>像素Shader： <ol><li>对主纹理采样，RGB颜色即可；</li><li>返回值；</li></ol></li></ol>',7),_=e("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[e("pre",{class:"language-shader"},[e("code",null,`\uFEFFShader "AP1/L13/L13_AD"  // 自定义Shader路径
{
    // 材质面板参数
    Properties {
        _MainTex ("RGB：颜色 A：透贴", 2d) = "gray"{}       //主纹理 RGB颜色 A透贴；

    }
    SubShader {
        Tags {
            "Queue"="Transparent"                   // 调整渲染顺序
            "RenderType"="TransparentCutout"        // 对应改为Cutout   RenderType 还可以玩鹰眼效果
            "ForceNoShadowCasting"="True"           // 关闭阴影投射  
            "IgnoreProjector"="True"                // 不响应投射器
        }
        Pass {
            Name "FORWARD"
            Tags {
                "LightMode"="ForwardBase"
            }
            Cull Off
            Blend One One //修改混合方式

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0

            //输入参数
            uniform sampler2D _MainTex; uniform float4 _MainTex_ST;
            
            // 输入结构
            struct VertexInput {
                float4 vertex : POSITION;       // 顶点位置 总是必要
                float2 uv : TEXCOORD0;          // UV信息 采样贴图用
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION; // 顶点位置 总是必要
                float2 uv : TEXCOORD0; // UV信息 采样贴图用
            };
            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                    
                    o.pos = UnityObjectToClipPos( v.vertex );           // 顶点位置 OS>CS
                    o.uv = TRANSFORM_TEX(v.uv, _MainTex);               // UV信息 支持TilingOffset
            return o;                                                   // 将输出结构 输出
            }
            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                half3 var_MainTex = tex2D(_MainTex, i.uv).rgb; // 采样贴图 RGB颜色 A透贴不必须
                return half4(var_MainTex, 1.0); // 返回值

            }
            ENDCG
        }
    }
    FallBack "Diffuse/"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=s('<p> </p><h2 id="混合模式" tabindex="-1"><a class="header-anchor" href="#混合模式"><span>混合模式</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518183941.png" style="width:50% !important;"></div><ul><li>AB，AC，AD只是非常多种混合模式中常用的几种；足够 应付一般项目的特效需求；</li><li>不排除某些风格特殊，或者特殊用途的场景需要用到其他 混合模式；一般我们提供工具给美术做探索；</li><li>探索完毕之后还是要收敛方案，更少的美术选项可让美术 流程更可控；</li></ul><h3 id="混合原理" tabindex="-1"><a class="header-anchor" href="#混合原理"><span>混合原理</span></a></h3><p>公式如下：</p><p><code>Src*SrcFactor op Dst*DstFactor</code></p><ul><li>Src：源，当前Shader绘制的结果；</li><li>Dst：目标，当前Shader绘制前的背景；</li><li>SrcFactor：源乘子，多种形式如下表；</li><li>DstFactor：目标乘子，多种形式如下表；</li><li>Op：混合运算符，多种形式如右表；</li></ul><h4 id="blendfactor" tabindex="-1"><a class="header-anchor" href="#blendfactor"><span>BlendFactor:</span></a></h4><table><thead><tr><th>BlendFactor</th><th>Description</th></tr></thead><tbody><tr><td>Zero</td><td>Blend factor is (0, 0, 0, 0).</td></tr><tr><td>One</td><td>Blend factor is (1, 1, 1, 1).</td></tr><tr><td>DstColor</td><td>Blend factor is (Rd, Gd, Bd, Ad).</td></tr><tr><td>SrcColor</td><td>Blend factor is (Rs, Gs, Bs, As).</td></tr><tr><td>OneMinusDstColor</td><td>Blend factor is (1 - Rd, 1 - Gd, 1 - Bd, 1 - Ad);</td></tr><tr><td>SrcAlpha</td><td>Blend factor is (As, As, As, As).</td></tr><tr><td>OneMinusSrcColor</td><td>Blend factor is (1 - Rs, 1 - Gs, 1 - Bs, 1 - As).</td></tr><tr><td>DstAlpha</td><td>Blend factor is (Ad, Ad, Ad, Ad).</td></tr><tr><td>OneMinusDstAlpha</td><td>Blend factor is (1 - Ad, 1 - Ad, 1 - Ad, 1 - Ad).</td></tr><tr><td>SrcAlphaSaturate</td><td>Blend factor is (f, f, f, 1); where f = min(As, 1 - Ad).</td></tr><tr><td>OneMinusSrcAlpha</td><td>Blend factor is (1 - As, 1 - As, 1 - As, 1 - As).</td></tr></tbody></table><h4 id="blendop" tabindex="-1"><a class="header-anchor" href="#blendop"><span>BlendOp:</span></a></h4><table><thead><tr><th>BlendOp</th><th>Description</th></tr></thead><tbody><tr><td>Add</td><td>Addition (s + d)</td></tr><tr><td>Subtract</td><td>Subtraction (s - d)</td></tr><tr><td>ReverseSubtract</td><td>Reverse subtraction (d - s)</td></tr><tr><td>Min</td><td>Minimum</td></tr><tr><td>Max</td><td>Maximum</td></tr><tr><td>Multiply</td><td>Multiply (Advanced OpenGL Blending)</td></tr><tr><td>Screen</td><td>Screen (Advanced OpenGL Blending)</td></tr><tr><td>Overlay</td><td>Overlay (Advanced OpenGL Blending)</td></tr><tr><td>Darken</td><td>Darken (Advanced OpenGL Blending)</td></tr><tr><td>Lighten</td><td>Lighten (Advanced OpenGL Blending)</td></tr><tr><td>ColorDodge</td><td>Color dodge (Advanced OpenGL Blending)</td></tr><tr><td>ColorBurn</td><td>Color burn (Advanced OpenGL Blending)</td></tr><tr><td>HardLight</td><td>Hard light (Advanced OpenGL Blending)</td></tr><tr><td>SoftLight</td><td>Soft light (Advanced OpenGL Blending)</td></tr><tr><td>Difference</td><td>Difference (Advanced OpenGL Blending)</td></tr><tr><td>Exclusion</td><td>Exclusion (Advanced OpenGL Blending)</td></tr><tr><td>HSLHue</td><td>HSL Hue (Advanced OpenGL Blending)</td></tr><tr><td>HSLSaturation</td><td>HSL saturation (Advanced OpenGL Blending)</td></tr><tr><td>HSLColor</td><td>Hsl color (Advanced OpenGL Blending)</td></tr><tr><td>HSLLuminosity</td><td>HSLLuminosity (Advanced OpenGL Blending)</td></tr></tbody></table><h2 id="美术自定义混合面板" tabindex="-1"><a class="header-anchor" href="#美术自定义混合面板"><span>美术自定义混合面板</span></a></h2><p><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518183441.png" alt="不封装.完全暴露" loading="lazy"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518183454.png" alt="封装.有限选择" loading="lazy"></p><h4 id="步骤-3" tabindex="-1"><a class="header-anchor" href="#步骤-3"><span>步骤：</span></a></h4><ol><li>以AB作为模板，CtrlCV伺候；</li><li>修改Shader路径名；</li><li>面板参数：</li><li>_MainTex：主纹理 RGB颜色 A透贴；</li><li>_BlendSrc：混合源乘子；</li><li>_BlendDst：混合目标乘子；</li><li>_BlendOp：混合算符；</li><li>SubShaderTags，不用改；</li><li>混合算符修改为：BlendOp [BlendOp]</li><li>混合方式修改为：Blend [BlendSrc] [BlendDst]</li><li>输入，输出，顶点Shader，不用改；</li><li>像素Shader，不用改；</li></ol>',16),T=e("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[e("pre",{class:"language-shader"},[e("code",null,`\uFEFFShader "AP1/L13/L13_BlandMode"  // 自定义Shader路径
{
    // 材质面板参数
    Properties {
        _MainTex ("RGB：颜色 A：透贴", 2d) = "gray"{}       //主纹理 RGB颜色 A透贴；
        [Enum(UnityEngine.Rendering.BlendMode)]
        _BlendSrc ("混合源乘子", int) = 0
        [Enum(UnityEngine.Rendering.BlendMode)]
        _BlendDst ("混合目标乘子", int) = 0
        [Enum(UnityEngine.Rendering.BlendOp)]
        _BlendOp ("混合算符", int) = 0



    }
    SubShader {
        Tags {
            "Queue"="Transparent"                   // 调整渲染顺序
            "RenderType"="TransparentCutout"        // 对应改为Cutout   RenderType 还可以玩鹰眼效果
            "ForceNoShadowCasting"="True"           // 关闭阴影投射  
            "IgnoreProjector"="True"                // 不响应投射器
        }
        Pass {
            Name "FORWARD"
            Tags {
                "LightMode"="ForwardBase"
            }
            Cull Off
            BlendOp [_BlendOp] // 可自定义混合算符
            Blend [_BlendSrc] [_BlendDst] // 可自定义混合模式

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0

            //输入参数
            uniform sampler2D _MainTex; uniform float4 _MainTex_ST;
            
            // 输入结构
            struct VertexInput {
                float4 vertex : POSITION;       // 顶点位置 总是必要
                float2 uv : TEXCOORD0;          // UV信息 采样贴图用
            };
            // 输出结构
            struct VertexOutput {
                float4 pos : SV_POSITION; // 顶点位置 总是必要
                float2 uv : TEXCOORD0; // UV信息 采样贴图用
            };
            // 输入结构 >>> 顶点shader >>> 输出结构 ，下面是个函数构架
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                    
                    o.pos = UnityObjectToClipPos( v.vertex );           // 顶点位置 OS>CS
                    o.uv = TRANSFORM_TEX(v.uv, _MainTex);               // UV信息 支持TilingOffset
            return o;                                                   // 将输出结构 输出
            }
            // 输出结构 >>> 像素
            float4 frag(VertexOutput i) : COLOR {
                half4 var_MainTex = tex2D(_MainTex, i.uv); // 采样贴图 RGB颜色 A透贴
                return var_MainTex; // 返回值

            }
            ENDCG
        }
    }
    FallBack "Diffuse/"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),S=s('<h2 id="常用模式" tabindex="-1"><a class="header-anchor" href="#常用模式"><span>常用模式</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518115028.png" style="width:90% !important;"></div><table><thead><tr><th>公式</th><th>模式</th></tr></thead><tbody><tr><td>Blend SrcAlpha OneMinusSrcAlpha</td><td>//Normal</td></tr><tr><td>Blend OneMinusDstColor One</td><td>//Soft Additive</td></tr><tr><td>Blend DstColor Zero</td><td>// Multiply</td></tr><tr><td>Blend DstColor SrcColor</td><td>//2x Multiply</td></tr><tr><td>Blend op Min</td><td>// Darken</td></tr><tr><td>Blend One One</td><td></td></tr><tr><td>Blend op Max</td><td>// Lighten</td></tr><tr><td>Blend One One</td><td></td></tr><tr><td>Blend OneMinusDstColor One</td><td>//Screen</td></tr><tr><td>Blend One OneMinusSrcColor</td><td>//Same as above</td></tr><tr><td>Blend One One</td><td>// Linear Dodge</td></tr></tbody></table>',3);function B(x,y){const t=u("Badge"),d=u("CodeTabs");return v(),m("div",null,[o(" more "),h,e("details",null,[e("summary",null,[n(t,{text:"Code-view",color:"#e0dd8b"})]),n(d,{id:"243",data:[{id:"L13_AC.shader"}],"tab-id":"shell"},{title0:i(({value:l,isActive:a})=>[r("L13_AC.shader")]),tab0:i(({value:l,isActive:a})=>[p]),_:1})]),g,e("details",null,[e("summary",null,[n(t,{text:"Code-view",color:"#e0dd8b"})]),n(d,{id:"378",data:[{id:"L13_AB.shader"}],"tab-id":"shell"},{title0:i(({value:l,isActive:a})=>[r("L13_AB.shader")]),tab0:i(({value:l,isActive:a})=>[f]),_:1})]),O,e("details",null,[e("summary",null,[n(t,{text:"Code-view",color:"#e0dd8b"})]),n(d,{id:"479",data:[{id:"L13_AD.shader"}],"tab-id":"shell"},{title0:i(({value:l,isActive:a})=>[r("L13_AD.shader")]),tab0:i(({value:l,isActive:a})=>[_]),_:1})]),A,e("details",null,[e("summary",null,[n(t,{text:"Code-view",color:"#e0dd8b"})]),n(d,{id:"899",data:[{id:"L13_BlandMode.shader"}],"tab-id":"shell"},{title0:i(({value:l,isActive:a})=>[r("L13_BlandMode.shader")]),tab0:i(({value:l,isActive:a})=>[T]),_:1})]),S])}const R=c(b,[["render",B],["__file","shader13.html.vue"]]),D=JSON.parse('{"path":"/engine/unity/shader/shader13.html","title":"unity-shader-13","lang":"zh-CN","frontmatter":{"title":"unity-shader-13","description":null,"icon":"iconfont alicon-texiao5","category":"shader","tag":["shader","unity"],"date":"2024-05-18T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518180223.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader13.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-13"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518180223.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T09:07:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518180223.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-13"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-05-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T09:07:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-13\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518183441.png\\",\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518183454.png\\"],\\"datePublished\\":\\"2024-05-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-15T09:07:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"特效类大纲","slug":"特效类大纲","link":"#特效类大纲","children":[]},{"level":2,"title":"透切 AlphaCutout-AC","slug":"透切-alphacutout-ac","link":"#透切-alphacutout-ac","children":[]},{"level":2,"title":"透混 AlphaBland-AB","slug":"透混-alphabland-ab","link":"#透混-alphabland-ab","children":[]},{"level":2,"title":"透叠 Addtive-AD","slug":"透叠-addtive-ad","link":"#透叠-addtive-ad","children":[]},{"level":2,"title":"混合模式","slug":"混合模式","link":"#混合模式","children":[{"level":3,"title":"混合原理","slug":"混合原理","link":"#混合原理","children":[]}]},{"level":2,"title":"美术自定义混合面板","slug":"美术自定义混合面板","link":"#美术自定义混合面板","children":[]},{"level":2,"title":"常用模式","slug":"常用模式","link":"#常用模式","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1718442447000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":3}]},"filePathRelative":"engine/unity/shader/shader13.md","localizedDate":"2024年5月18日","excerpt":""}');export{R as comp,D as data};
