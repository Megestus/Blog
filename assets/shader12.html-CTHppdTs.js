import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as o,d as e,a as n,w as i,f as a,r as s,o as h,e as u}from"./app--QLSbB1T.js";const p={},v=e("p",null,"摘要：答疑 作业分析",-1),g=a('<p> </p><h3 id="答疑" tabindex="-1"><a class="header-anchor" href="#答疑"><span>答疑</span></a></h3><ul><li>透贴阴影问题： <ul><li>计算投影必须要有一个ShadowCastPass，之所以我们之前没写也对，是因为FallBack了Diffuse，Unity会自动调Diffuse这个Shader的ShadowCastPass，但是它是不支持透贴的；</li><li>可以FallBask到一个支持AlphaCutout的Shader上，比如：Legacy Shaders/Transparent/Cutout/VertexLit； 需要注意的是，必须包含Shader中透明相关的所有面板属性；</li></ul></li><li>透贴双面问题： <ul><li>关闭剔除背面，在声明BlendMode的地方加入：Cull Off 即可；</li></ul></li><li>开线性空间做，Gamma空间看不正常的问题： <ul><li>目前课程内容不会涉及线性空间，Gamma空间；</li><li>如果按公共件的要求，Shader应该支持线性和Gamma效果一致；</li></ul></li></ul><h2 id="作业分析" tabindex="-1"><a class="header-anchor" href="#作业分析"><span>作业分析：</span></a></h2><h3 id="文档分析" tabindex="-1"><a class="header-anchor" href="#文档分析"><span>文档分析：</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421154055.png" style="width:95% !important;"></div><ul><li>Color贴图，透明贴图，法线贴图，自发光贴图，不赘述；</li><li>DetailMask特殊效果相关，DiffuseMask罕见使用，不考虑；</li><li>Metalness 金属度贴图，仅为金属遮罩，区别于PBR的金属度；</li><li>Specular Mask，镜面反射遮罩，可理解为高光强度图；</li><li>Rimlight，边缘光效果，对应有RimMask，边缘光强度图；</li><li>Base Tint Mask，高光染色遮罩，控制高光颜色从Color贴图混合的程度；</li><li>Specular Exponent，高光次幂，不赘述；</li></ul><h3 id="资源分析" tabindex="-1"><a class="header-anchor" href="#资源分析"><span>资源分析：</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421154258.png" style="width:95% !important;"></div><h3 id="资源优化" tabindex="-1"><a class="header-anchor" href="#资源优化"><span>资源优化：</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421154436.png" style="width:95% !important;"></div><h3 id="光照模型分析" tabindex="-1"><a class="header-anchor" href="#光照模型分析"><span>光照模型分析：</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421154517.png" style="width:95% !important;"></div><h2 id="vs准备" tabindex="-1"><a class="header-anchor" href="#vs准备"><span>VS准备:</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161515.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421155518.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421155534.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421155557.png" style="width:95% !important;"></div><h3 id="光照模型" tabindex="-1"><a class="header-anchor" href="#光照模型"><span>光照模型：</span></a></h3><h4 id="_1-diffcol-speccol" tabindex="-1"><a class="header-anchor" href="#_1-diffcol-speccol"><span>1.DiffCol SpecCol</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421155651.png" style="width:95% !important;"></div><h4 id="_2-fresnel" tabindex="-1"><a class="header-anchor" href="#_2-fresnel"><span>2.Fresnel</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160005.png" style="width:95% !important;"></div><h4 id="_3-dirdiff-主光漫反射" tabindex="-1"><a class="header-anchor" href="#_3-dirdiff-主光漫反射"><span>3.DirDiff - 主光漫反射</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160056.png" style="width:95% !important;"></div><h4 id="_4-dirspec-主光镜面反射" tabindex="-1"><a class="header-anchor" href="#_4-dirspec-主光镜面反射"><span>4.DirSpec - 主光镜面反射</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160115.png" style="width:95% !important;"></div><h4 id="_5-envdiff-环境漫反射" tabindex="-1"><a class="header-anchor" href="#_5-envdiff-环境漫反射"><span>5.EnvDiff - 环境漫反射</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160221.png" style="width:95% !important;"></div><h4 id="_6-envspec-环境镜面反射" tabindex="-1"><a class="header-anchor" href="#_6-envspec-环境镜面反射"><span>6.EnvSpec - 环境镜面反射</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160439.png" style="width:95% !important;"></div><h4 id="_7-rimlight-轮廓光" tabindex="-1"><a class="header-anchor" href="#_7-rimlight-轮廓光"><span>7.RimLight - 轮廓光</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160818.png" style="width:95% !important;"></div><h4 id="_8-emission-自发光" tabindex="-1"><a class="header-anchor" href="#_8-emission-自发光"><span>8.Emission - 自发光</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160848.png" style="width:95% !important;"></div><h4 id="最终混合" tabindex="-1"><a class="header-anchor" href="#最终混合"><span>最终混合</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160921.png" style="width:95% !important;"></div><h4 id="透明剪切" tabindex="-1"><a class="header-anchor" href="#透明剪切"><span>透明剪切</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161021.png" style="width:95% !important;"></div><h4 id="透明剪切投影修正" tabindex="-1"><a class="header-anchor" href="#透明剪切投影修正"><span>透明剪切投影修正</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161124.png" style="width:95% !important;"></div><h4 id="开启双面显示" tabindex="-1"><a class="header-anchor" href="#开启双面显示"><span>开启双面显示</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161153.png" style="width:95% !important;"></div><h3 id="效果完成" tabindex="-1"><a class="header-anchor" href="#效果完成"><span>效果完成</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161222.png" style="width:95% !important;"></div><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h3>',46),b=e("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[e("pre",{class:"language-shader"},[e("code",null,`\uFEFFShader "AP01/L12/Dota2" {
    Properties {
        [Header(Texture)]
        _MainTex        ("RGB:颜色 A:透贴", 2d) = "white"{}
        _MaskTex        ("R:高光强度 G:边缘光强度 B:高光染色 A:高光次幂", 2d) = "black"{}
        _NormTex        ("RGB:法线贴图", 2d) = "bump"{}
        _MatelnessMask  ("金属度遮罩", 2d) = "black"{}
        _EmissionMask   ("自发光遮罩", 2d) = "black"{}
        _DiffWarpTex    ("颜色Warp图", 2d) = "gray"{}
        _FresWarpTex    ("菲涅尔Warp图", 2d) = "gray"{}
        _Cubemap        ("环境球", cube) = "_Skybox"{}
        [Header(DirDiff)]
        _LightCol       ("光颜色", color) = (1.0, 1.0, 1.0, 1.0)
        [Header(DirSpec)]
        _SpecPow        ("高光次幂", range(0.0, 99.0)) = 5
        _SpecInt        ("高光强度", range(0.0, 10.0)) = 5
        [Header(EnvDiff)]
        _EnvCol         ("环境光颜色", color) = (1.0, 1.0, 1.0, 1.0)
        [Header(EnvSpec)]
        _EnvSpecInt     ("环境镜面反射强度", range(0.0, 30.0)) = 0.5
        [Header(RimLight)]
        [HDR]_RimCol    ("轮廓光颜色", color) = (1.0, 1.0, 1.0, 1.0)
        [Header(Emission)]
        _EmitInt        ("自发光强度", range(0.0, 10.0)) = 1.0
        [HideInInspector]
        _Cutoff         ("Alpha cutoff", Range(0,1)) = 0.5
        [HideInInspector]
        _Color          ("Main Color", Color) = (1.0, 1.0, 1.0, 1.0)
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
            Cull Off
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            #include "AutoLight.cginc"
            #include "Lighting.cginc"
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0
            // 输入参数
            uniform sampler2D _MainTex;
            uniform sampler2D _MaskTex;
            uniform sampler2D _NormTex;
            uniform sampler2D _MatelnessMask;
            uniform sampler2D _EmissionMask;
            uniform sampler2D _DiffWarpTex;
            uniform sampler2D _FresWarpTex;
            uniform samplerCUBE _Cubemap;
            // DirDiff
            uniform half3 _LightCol;
            // DirSpec
            uniform half _SpecPow;
            uniform half _SpecInt;
            // EnvDiff
            uniform half3 _EnvCol;
            // EnvSpec
            uniform half _EnvSpecInt;
            // RimLight
            uniform half3 _RimCol;
            // Emission
            uniform half _EmitInt;
            // Other
            uniform half _Cutoff;
            // 输入结构
            struct VertexInput {
                float4 vertex   : POSITION;   // 顶点信息 Get✔
                float2 uv0      : TEXCOORD0;  // UV信息 Get✔
                float4 normal   : NORMAL;     // 法线信息 Get✔
                float4 tangent  : TANGENT;    // 切线信息 Get✔
            };
            // 输出结构
            struct VertexOutput {
                float4 pos    : SV_POSITION;  // 屏幕顶点位置
                float2 uv0      : TEXCOORD0;  // UV0
                float4 posWS    : TEXCOORD1;  // 世界空间顶点位置
                float3 nDirWS   : TEXCOORD2;  // 世界空间法线方向
                float3 tDirWS   : TEXCOORD3;  // 世界空间切线方向
                float3 bDirWS   : TEXCOORD4;  // 世界空间副切线方向
                LIGHTING_COORDS(5,6)          // 投影相关
            };
            // 输入结构>>>顶点Shader>>>输出结构
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0;                   // 新建输出结构
                    o.pos = UnityObjectToClipPos( v.vertex );       // 顶点位置 OS>CS
                    o.uv0 = v.uv0;                                  // 传递UV
                    o.posWS = mul(unity_ObjectToWorld, v.vertex);   // 顶点位置 OS>WS
                    o.nDirWS = UnityObjectToWorldNormal(v.normal);  // 法线方向 OS>WS
                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); // 切线方向 OS>WS
                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);  // 副切线方向
                    TRANSFER_VERTEX_TO_FRAGMENT(o)                  // 投影相关
                return o;                                           // 返回输出结构
            }
            // 输出结构>>>像素
            float4 frag(VertexOutput i) : COLOR {
                // 向量准备
                half3 nDirTS = UnpackNormal(tex2D(_NormTex, i.uv0));
                half3x3 TBN = half3x3(i.tDirWS, i.bDirWS, i.nDirWS);
                half3 nDirWS = normalize(mul(nDirTS, TBN));
                half3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS);
                half3 vrDirWS = reflect(-vDirWS, nDirWS);
                half3 lDirWS = _WorldSpaceLightPos0.xyz;
                half3 lrDirWS = reflect(-lDirWS, nDirWS);
                // 中间量准备
                half ndotl = dot(nDirWS, lDirWS);
                half ndotv = dot(nDirWS, vDirWS);
                half vdotr = dot(vDirWS, lrDirWS);
                // 采样纹理
                half4 var_MainTex = tex2D(_MainTex, i.uv0);
                half4 var_MaskTex = tex2D(_MaskTex, i.uv0);
                half var_MatelnessMask = tex2D(_MatelnessMask, i.uv0).r;
                half var_EmissionMask = tex2D(_EmissionMask, i.uv0).r;
                half3 var_FresWarpTex = tex2D(_FresWarpTex, ndotv);
                half3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, lerp(8.0, 0.0, var_MaskTex.a))).rgb;
                // 提取信息
                half3 baseCol = var_MainTex.rgb;
                half opacity = var_MainTex.a;
                half specInt = var_MaskTex.r;
                half rimInt = var_MaskTex.g;
                half specTint = var_MaskTex.b;
                half specPow = var_MaskTex.a;
                half matellic = var_MatelnessMask;
                half emitInt = var_EmissionMask;
                half3 envCube = var_Cubemap;
                half shadow = LIGHT_ATTENUATION(i);
                // 光照模型
                    // 漫反射颜色 镜面反射颜色
                    half3 diffCol = lerp(baseCol, half3(0.0, 0.0, 0.0), matellic);
                    half3 specCol = lerp(baseCol, half3(0.3, 0.3, 0.3), specTint) * specInt;
                    // 菲涅尔
                    half3 fresnel = lerp(var_FresWarpTex, 0.0, matellic);
                    half fresnelCol = fresnel.r;    // 无实际用途
                    half fresnelRim = fresnel.g;
                    half fresnelSpec = fresnel.b;
                    // 光源漫反射
                    half halfLambert = ndotl * 0.5 + 0.5;
                    half3 var_DiffWarpTex = tex2D(_DiffWarpTex, half2(halfLambert, 0.2));
                    half3 dirDiff = diffCol * var_DiffWarpTex * _LightCol;
                    // 光源镜面反射
                    half phong = pow(max(0.0, vdotr), specPow * _SpecPow);
                    half spec = phong * max(0.0, ndotl);
                    spec = max(spec, fresnelSpec);
                    spec = spec * _SpecInt;
                    half3 dirSpec = specCol * spec * _LightCol;
                    // 环境漫反射
                    half3 envDiff = diffCol * _EnvCol;
                    // 环境镜面反射
                    half reflectInt = max(fresnelSpec, matellic) * specInt;
                    half3 envSpec = specCol * reflectInt * envCube * _EnvSpecInt;
                    // 轮廓光
                    half3 rimLight = _RimCol * fresnelRim * rimInt * max(0.0, nDirWS.g);
                    // 自发光
                    half3 emission = diffCol * emitInt * _EmitInt;
                    // 混合
                    half3 finalRGB = (dirDiff + dirSpec) * shadow + envDiff + envSpec + rimLight + emission;
                // 透明剪切
                clip(opacity - _Cutoff);
                // 返回值
                return float4(finalRGB, 1.0);
            }
            ENDCG
        }
    }
    // 声明回退Shader
    FallBack "Legacy Shaders/Transparent/Cutout/VertexLit"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=a('<h2 id="开源shader" tabindex="-1"><a class="header-anchor" href="#开源shader"><span>开源Shader</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161330.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161343.png" style="width:95% !important;"></div><p>根据作业答案复盘下自己那些做的不足</p><ul><li>在文档分析和资源分析上 <ul><li>没有仔细阅读文档并且判断出那些可用可不用；</li><li>没有考虑到可共用贴图和非共用贴图的这方面，白工作两年半了。</li></ul></li><li>资源优化上有做考虑-但忽略了一些我不知道如何使用的贴图，需要补充这方面的短板。</li><li>光照模型分析也没有在做一次，对各环节仍有侥幸心理 装懂.. emmm 以后应该懂了</li></ul>',5);function _(y,x){const l=s("Badge"),r=s("CodeTabs");return h(),d("div",null,[v,o(" more "),g,e("details",null,[e("summary",null,[n(l,{text:"Code-view",color:"#e0dd8b"})]),n(r,{id:"180",data:[{id:"Data2.shader"}],"tab-id":"shell"},{title0:i(({value:t,isActive:c})=>[u("Data2.shader")]),tab0:i(({value:t,isActive:c})=>[b]),_:1})]),f])}const T=m(p,[["render",_],["__file","shader12.html.vue"]]),C=JSON.parse('{"path":"/engine/unity/shader/shader12.html","title":"unity-shader-12","lang":"zh-CN","frontmatter":{"title":"unity-shader-12","description":"摘要：答疑 作业分析","icon":"iconfont alicon-shader","category":"shader","tag":["shader","unity"],"date":"2024-04-21T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330230733.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader12.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-12"}],["meta",{"property":"og:description","content":"摘要：答疑 作业分析"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330230733.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T09:07:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330230733.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-12"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-04-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T09:07:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-12\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330230733.png\\"],\\"datePublished\\":\\"2024-04-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-15T09:07:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":3,"title":"答疑","slug":"答疑","link":"#答疑","children":[]},{"level":2,"title":"作业分析：","slug":"作业分析","link":"#作业分析","children":[{"level":3,"title":"文档分析：","slug":"文档分析","link":"#文档分析","children":[]},{"level":3,"title":"资源分析：","slug":"资源分析","link":"#资源分析","children":[]},{"level":3,"title":"资源优化：","slug":"资源优化","link":"#资源优化","children":[]},{"level":3,"title":"光照模型分析：","slug":"光照模型分析","link":"#光照模型分析","children":[]}]},{"level":2,"title":"VS准备:","slug":"vs准备","link":"#vs准备","children":[{"level":3,"title":"光照模型：","slug":"光照模型","link":"#光照模型","children":[]},{"level":3,"title":"效果完成","slug":"效果完成","link":"#效果完成","children":[]},{"level":3,"title":"Code","slug":"code","link":"#code","children":[]}]},{"level":2,"title":"开源Shader","slug":"开源shader","link":"#开源shader","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1718442447000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":4}]},"filePathRelative":"engine/unity/shader/shader12.md","localizedDate":"2024年4月21日","excerpt":"<p>摘要：答疑 作业分析</p>\\n","autoDesc":true}');export{T as comp,C as data};
