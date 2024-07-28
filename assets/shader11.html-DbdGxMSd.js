import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as m,a as s,w as n,d as e,e as a,f as t,r as d,o as v}from"./app-DcCrzMH4.js";const b={},p=e("p",null,[a("回顾复习"),e("br"),a(" 摘要：面板、参数、IVO、函数、cginc")],-1),h=t(`<h2 id="面板" tabindex="-1"><a class="header-anchor" href="#面板"><span>面板</span></a></h2><h3 id="面板参数声明格式" tabindex="-1"><a class="header-anchor" href="#面板参数声明格式"><span>面板参数声明格式</span></a></h3><ul><li>数值，范围： <ul><li>_Name (“标签名”, float) = defaultVal</li><li>_Name (“标签名”, range(min, max)) = defaultVal</li><li>_Name (“标签名”, int) = defaultVal</li></ul></li><li>位置，向量，颜色： <ul><li>_Name (“标签名”, vector) = (xVal, yVal, zVal, wVal)</li><li>_Name (“标签名”, color) = (rVal, gVal, bVal, aVal)</li></ul></li><li>2D，3D纹理，环境球： <ul><li>_Name (“标签名”, 2d) = “defaultTex” {}</li><li>_Name (“标签名”, 3d) = “defaultTex” {}</li><li>_Name (“标签名”, cube) = “defaultTex” {}</li></ul></li></ul><h3 id="参数属性" tabindex="-1"><a class="header-anchor" href="#参数属性"><span>参数属性</span></a></h3><ul><li><p>[HideInInspector]</p><ul><li>用途：在面板上隐藏该参数；</li><li>可用于：任何参数；</li><li>例：<code>[HideInInspector] _FakeLightDir (“伪光方向”, vector) = (0.0, 1.0, 0.0, 1.0)</code></li></ul></li><li><p>[NoScaleOffset]</p><ul><li>用途：禁用纹理的TilingOffset面板；不需要做TilingOffset的纹理，比如大部分的角色纹理，防止美术误设置；</li><li>可用于：纹理参数；</li><li>例：<code>[NoScaleOffset] _MainTex (“主贴图”, 2d) = “white” {}</code></li></ul></li><li><p>[Normal]</p><ul><li>用途：标示该纹理参数为法线贴图，以激活相关自检功能；</li><li>可用于：2D纹理参数；</li><li>例：<code>[Normal] _NormTex (“法线贴图”, 2d) = “bump”{}</code></li></ul></li><li><p>[HDR]</p><ul><li>用途：用于设置高动态范围颜色值；如：灯光颜色，自发光颜色等；</li><li>可用于：颜色参数；</li><li>例：<code>[HDR] _EmitCol (“自发光颜色”, color) = (1.0, 1.0, 1.0, 1.0)</code></li></ul></li><li><p>[Gamma]</p><ul><li>用途：用于颜色参数的色彩空间的转换；一般用于色彩空间为Linear的项目；</li><li>可用于：颜色参数；</li><li>例：<code>[Gamma] _EmitCol (“自发光颜色”, color) = (1.0, 1.0, 1.0, 1.0)</code></li></ul></li><li><p>[PowerSlider(value)]</p><ul><li>用途：对范围参数做Power处理后再传入Shader；纠正部分参数调节手感；</li><li>可用于：范围参数；</li><li>例：<code>[PowerSlider(2)] _SpecPow (“高光次幂”, range(1, 90)) = 30</code></li></ul></li><li><p>[Header(Label)]</p><ul><li>用途：标签，用于排版；</li><li>可用于：单独使用；</li><li>例：<code>[Header(Texture)]</code></li></ul></li><li><p>[Space(value)]</p><ul><li>用途：空行，用于排版；</li><li>可用于：单独使用；</li><li>例：<code>[Space(50)]</code> 其他：<code>[Toggle]</code> <code>[Enum]</code> <code>[Keyword]</code>配合宏使用，暂时不用知道；自定义Drawer需要一定C#能力，暂时不用知道；</li></ul></li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><h3 id="shaderlab中的参数类型" tabindex="-1"><a class="header-anchor" href="#shaderlab中的参数类型"><span>ShaderLab中的参数类型</span></a></h3><ul><li>fixed： 11位定点数，-2.0~2.0，精度1/256；</li><li>half： 16位浮点数，-60000~60000，精度约3位小数；</li><li>float： 32位浮点数，-3.4E38~3.4E38，精度约6，7位小数；</li><li>Int： 32位整形数，较少使用；</li><li>bool： 布尔型数，较少使用；</li><li>矩阵： <ul><li>float2x2, float3x3, float4x4, float2x3 诸如此类格式；</li><li>half2x2, half3x3, half4x4, half2x3 诸如此类格式；</li></ul></li><li>纹理对象： <ul><li>sampler2D： 2D纹理</li><li>sampler3D： 3D纹理</li><li>samplerCUBE： Cube纹理</li></ul></li></ul><h3 id="参数的精度选择" tabindex="-1"><a class="header-anchor" href="#参数的精度选择"><span>参数的精度选择</span></a></h3><ul><li>原则上优先使用精度最低的数据类型；</li><li>经验： <ul><li>世界空间位置和UV坐标，使用float；</li><li>向量，HDR颜色，使用half；视情况升到float；</li><li>LDR颜色，简单乘子，可使用fixed；</li></ul></li><li>但是： <ul><li>不同平台对数据类型的支持情况不同；一般会自动转换，极少数情况自动转换会带来问题；</li><li>部分平台上，数据类型精度转换消耗也不小；所以fixed也是慎用；</li><li>多和你们的图形开发商量；</li></ul></li></ul><h2 id="ivo-input-vector-output" tabindex="-1"><a class="header-anchor" href="#ivo-input-vector-output"><span>IVO - input vector output</span></a></h2><h3 id="可访问的顶点lnput数据" tabindex="-1"><a class="header-anchor" href="#可访问的顶点lnput数据"><span>可访问的顶点lnput数据</span></a></h3><table><thead><tr><th>---------</th><th>--------</th><th>数据类型</th></tr></thead><tbody><tr><td>POSITION</td><td>顶点位置</td><td>float3 float4</td></tr><tr><td>TEXCOORD0</td><td>UV通道1</td><td>float2 float3 float4</td></tr><tr><td>TEXCOORD1</td><td>UV通道2</td><td>float2 float3 float4</td></tr><tr><td>TEXCOORD2</td><td>UV通道3</td><td>float2 float3 float4</td></tr><tr><td>TEXCOORD3</td><td>UV通道4</td><td>float2 float3 float4</td></tr><tr><td>NORMAL</td><td>法线方向</td><td>float3</td></tr><tr><td>TANGENT</td><td>切线方向</td><td>float4</td></tr><tr><td>COLOR</td><td>顶点色</td><td>float4</td></tr></tbody></table><h3 id="常用的顶点output数据" tabindex="-1"><a class="header-anchor" href="#常用的顶点output数据"><span>常用的顶点Output数据</span></a></h3><table><thead><tr><th>---------</th><th>--------</th><th>数据类型</th></tr></thead><tbody><tr><td>pos</td><td>顶点位置CS</td><td>float4</td></tr><tr><td>uv0</td><td>一般纹理UV</td><td>float2</td></tr><tr><td>uv1</td><td>LighmapUV</td><td>float2</td></tr><tr><td>posWS</td><td>顶点位置WS</td><td>float3</td></tr><tr><td>nDirWS</td><td>法线方向WS</td><td>half3</td></tr><tr><td>tDirWS</td><td>切线方向WS</td><td>half3</td></tr><tr><td>bDirWS</td><td>副切线方向WS</td><td>half3</td></tr><tr><td>color</td><td>顶点色</td><td>fixed4</td></tr></tbody></table><h3 id="常用顶点shader操作" tabindex="-1"><a class="header-anchor" href="#常用顶点shader操作"><span>常用顶点Shader操作</span></a></h3><blockquote><p>注：Unity2019.3.2f1版本</p></blockquote><table><thead><tr><th>------</th><th>操作</th><th>操作2</th></tr></thead><tbody><tr><td>pos</td><td>o.pos = UnityObjectToClipPos(v.vertex);</td><td></td></tr><tr><td>uv0</td><td>o.uv0 = v.uv0 ;</td><td>o.uv0 = TRANSFORM_TEX(v.uv0, _MainTex);</td></tr><tr><td>uv1</td><td>o.uv1 = v.uv1 ;</td><td>o.uv1 = v.uv1 * unity_LightmapST.xy + unity_LightmapST.zw;</td></tr><tr><td>posWS</td><td>o.posWS = mul(unity_ObjectToWorld, v.vertex);</td><td></td></tr><tr><td>nDirWS</td><td>o.nDirWS = UnityObjectToWorldNormal(v.normal);</td><td></td></tr><tr><td>tDirWS</td><td>o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz);</td><td></td></tr><tr><td>bDirWS</td><td>o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);</td><td></td></tr><tr><td>color</td><td>o.color = v.color;</td><td></td></tr></tbody></table><h3 id="输入参数" tabindex="-1"><a class="header-anchor" href="#输入参数"><span>输入参数</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//输入参数
uniform sampler2D _MainTex; uniform float4 _MainTex_ST;

// 输入结构 &gt;&gt;&gt; 顶点shader &gt;&gt;&gt; 输出结构
o.uv = TRANSFORM_TEX(v.uv, _MainTex);               // UV信息 支持TilingOffset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>uniform float4 _MainTex <code>_ST</code> ; 是声明使用面板中的tiling 和 offset的值</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240518145314.png" style="width:50% !important;"></div><h2 id="方法-函数" tabindex="-1"><a class="header-anchor" href="#方法-函数"><span>方法 &amp; 函数</span></a></h2><p>使用过UE的同学可以理解为<code>材质函数</code></p><p>优点：</p><ul><li>功能模块化；</li><li>代码复用；</li><li>积累自己的 方法/函数库 ；</li><li>方法需要写在<code>输出结构&gt;像素</code>前头</li></ul><h3 id="_3colambient函数" tabindex="-1"><a class="header-anchor" href="#_3colambient函数"><span>3ColAmbient函数</span></a></h3><p>原写法</p><div class="language-.shader line-numbers-mode" data-ext=".shader" data-title=".shader"><pre class="language-.shader"><code>float upMask = max(0.0, nDirWS.g); // 获取朝上部分遮罩
float downMask = max(0.0, -nDirWS.g); // 获取朝下部分遮罩
float sideMask = 1.0 - upMask - downMask; // 获取侧面部分遮罩

float3 envCol = _EnvUpCol * upMask +
_EnvSideCol * sideMask +
_EnvDownCol * downMask; // 混合环境色

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>归纳为函数后的写法：</p><div class="language-.shader line-numbers-mode" data-ext=".shader" data-title=".shader"><pre class="language-.shader"><code>// 3Col环境色函数
float3 TriColAmbient (float3 n, float3 uCol, float3 sCol, float3 dCol) {
float uMask = max(0.0, n.g); // 获取朝上部分遮罩
float dMask = max(0.0, -n.g); // 获取朝下部分遮罩
float sMask = 1.0 - uMask - dMask; // 获取侧面部分遮罩
float3 envCol = uCol * uMask +
sCol * sMask +
dCol * dMask; // 混合环境色
return envCol;
}

// 使用3Col环境色函数
float3 envCol = TriColAmbient(nDirWS, _EnvUpCol, _EnvSideCol, _EnvDownCol);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理解一下这个结构</p><ul><li>TriColAmbient ()内是输入定义的float和输入的内容 ; {}中括号内的就是内部的运算 。<br> 值得注意的是要把输入的内容进行替换</li><li>使用的话 就类似下方注释 使用3Col环境色方法 直接按顺序输入对应的内容</li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330175722.png" style="width:30% !important;"> 直观些，就像是这样 </div><p> </p><h2 id="自定义-shader-cginc-函数工具库" tabindex="-1"><a class="header-anchor" href="#自定义-shader-cginc-函数工具库"><span>自定义 shader cginc 函数工具库</span></a></h2><p><a href="https://docs.unity.cn/cn/2020.3/Manual/SL-BuiltinIncludes.html" target="_blank" rel="noopener noreferrer">Unity文档 - 内置着色器 include 文件</a></p><p>优点：</p><ul><li>可以跨shader使用，把 <code>方法/函数</code> 放到一个 <code>.cginc</code> 内调用自己定义好的函数；</li><li>分类；</li></ul><p>库的结构：</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330145749.png" style="width:95% !important;"></div><p> </p><h3 id="定义函数工具库文件" tabindex="-1"><a class="header-anchor" href="#定义函数工具库文件"><span>定义函数工具库文件</span></a></h3><p>unity不支持在编辑期内创建 <code>.cginc</code> 文件，创建需要在系统文件夹内创建.<br> 在项目assets所在的文件夹，然后定义一个目录创建一个文本文件并起名为：<code>MyCginc.cginc</code>。</p><blockquote><p>要注意如果是windows系统有可能文件会自动隐藏扩展名导致命名错误，需要你先设置所&quot;有文件扩展名可见&quot;，然后再把txt扩展名改为cginc。</p></blockquote>`,45),f=e("div",{class:"language-cginc line-numbers-mode","data-ext":"cginc","data-title":"cginc"},[e("pre",{class:"language-cginc"},[e("code",null,`#ifndef MY_CGINC
#define MY_CGINC

// 3Col环境色函数 
float3 TriColAmbient (float3 n, float3 uCol, float3 sCol, float3 dCol) {
float uMask = max(0.0, n.g); // 获取朝上部分遮罩
float dMask = max(0.0, -n.g); // 获取朝下部分遮罩
float sMask = 1.0 - uMask - dMask; // 获取侧面部分遮罩
float3 envCol = uCol * uMask +
sCol * sMask +
dCol * dMask; // 混合环境色
return envCol;
}

#endif
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("h3",{id:"库引用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#库引用"},[e("span",null,"库引用")])],-1),g=e("div",{class:"language-.shader line-numbers-mode","data-ext":".shader","data-title":".shader"},[e("pre",{class:"language-.shader"},[e("code",null,`  CGPROGRAM
  //载入自定义库
  #include "./Assets/Cginc/MyCginc.cginc"
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),S=e("div",{class:"language-.shader line-numbers-mode","data-ext":".shader","data-title":".shader"},[e("pre",{class:"language-.shader"},[e("code",null,`//在光照模型中使用函数库中的3Col环境色公共函数
float3 envCol = TriColAmbient(nDirWS, _EnvUpCol, _EnvSideCol, _EnvDownCol);

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),D=t('<p> </p><h2 id="大作业" tabindex="-1"><a class="header-anchor" href="#大作业"><span>大作业</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330150406.png" style="width:95% !important;"></div><p><a href="https://support.steampowered.com/kb/3081-QUXN-6209/dota-2-workshop-item-shader-masks" target="_blank" rel="noopener noreferrer">https://support.steampowered.com/kb/3081-QUXN-6209/dota-2-workshop-item-shader-masks</a><br> 官方模型：<br><a href="https://www.dota2.com/workshop/requirements/" target="_blank" rel="noopener noreferrer">https://www.dota2.com/workshop/requirements/</a></p><h3 id="submit" tabindex="-1"><a class="header-anchor" href="#submit"><span>Submit</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240420010456.png" style="width:95% !important;"></div>',6),C=e("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[e("pre",{class:"language-shader"},[e("code",null,`\uFEFFShader "AP1/L11/L11_Task_vs"

{
    // 材质面板参数
    Properties {
        //暴露参数
        [Header(Texture)]
        [NoScaleOffset] _basecolor  ("彩色color", 2d)     = "white"{}          
        [NoScaleOffset] [Normal]  _NormalMap ("法线normal", 2D) = "bump" {}      
        [NoScaleOffset] _metalnessMask  ("金属度遮罩", 2d)     = "black"{}  
        [NoScaleOffset] _FresnelPow  ("边缘光rimMask", 2d)     = "black"{}  

        [Header(Specular)]
        [NoScaleOffset] _specularExponent ("镜面反射指数", 2d)     = "black"{}  
        [NoScaleOffset] _specularMask ("镜面反射遮罩", 2d)     = "black"{}  


        [Header(SelfIllum)]
        [HDR] _SelfIllum  ("自发光颜色 ", color)  = (1.0, 1.0, 1.0, 1.0) 
        [NoScaleOffset] _SelfIllumMask ("自发光遮罩" , 2d )    = "black"{} 


        [NoScaleOffset] _translucency ("透明" , 2d )    = "black"{} 



        [NoScaleOffset] _DetalMap ("细节贴图" , 2d )    = "black"{} 
        [NoScaleOffset] _DetalMapMask ("细节贴图遮罩" , 2d )    = "black"{} 

        [Header(Diffuse)]

        _MainCol2       ("高光颜色", color) = (1.0, 1.0, 1.0, 1.0)
        _EnvUpCol   ("环境up颜色", Color)   = (1,1,1,1)
        _EnvSideCol ("环境Side颜色", Color) = (0.5,0.5,0.5,1)
        _EnvDownCol ("环境Down颜色", Color) = (0,0,0,1) 
    

        [Header(shadow)]
        _shadowCol ("阴影颜色", Color) = (0.5,0.5,0.5,1)
        _shadowPow ("阴影次幂", range(1,50)) = 1   

        [Header(CubeMap)]
        _Cubemap ("CubeMap", Cube) = "_Skybox" {}                 //Tex
        _CubemapMip ("CubemapMip层级", Range(0, 7)) = 0



                                                                                                                                                                                                                                                                                                                                                            
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

            uniform sampler2D _basecolor;
            uniform float3 _MainCol2; // RGB float3
            uniform float3 _MainCol; // RGB float3
            uniform sampler2D  _metalnessMask;
            uniform sampler2D _specularExponent   ;  //输入镜面反射指数  - 直接控制粗糙度 镜面反射指数值决定表面上镜面反射高光的大小 明暗度低会形成表面粗糙的印象
            uniform sampler2D _specularMask  ;  //输入镜面反射遮罩  - 直接控制反射的范围

            uniform float3 _SelfIllum;
            uniform sampler2D _SelfIllumMask;

            uniform float _SpecularPow; // 标量 float  反射贴图强度

            uniform sampler2D _Occlusion;
            uniform float3    _EnvUpCol;
            uniform float3    _EnvSideCol;
            uniform float3    _EnvDownCol;

            //shadow
            uniform float4 _shadowCol;
            uniform float _shadowPow ; // add shadow Pow sider

            uniform samplerCUBE _Cubemap ;
            uniform sampler2D _NormalMap ;
            uniform sampler2D _FresnelPow ;


            uniform float _EnvSpecInt ;
            uniform float _CubemapMip ;

            uniform sampler2D _DetalMap;
            uniform sampler2D _DetalMapMask;




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

               //贴图采样 
                float4 var_basecolor = tex2D( _basecolor, i.uv0); 
                float4 var_FresnelPow = tex2D( _FresnelPow, i.uv0); 
                float4 var_specularMask = tex2D( _specularMask , i.uv0); 
                float4 var_specularExponent = tex2D( _specularExponent , i.uv0); 
                float4 var_metalnessMask = tex2D( _metalnessMask, i.uv0); 
                float4 var_SelfIllumMask = tex2D( _SelfIllumMask, i.uv0); 
                float4 var_DetalMap = tex2D( _DetalMap, i.uv0); 
                float4 var_DetalMapMask = tex2D( _DetalMapMask, i.uv0); 



                float3 vRDir = reflect( -vDirWS, nDirWS );
                //准备所有要用到的中间数据，这里是两个点积结果；
                float nDotl = dot(nDirWS, lDirWS);      //得到lambert
                float vRDotl = dot(vRDir, lDirWS);    //得到phong
                float vdotn = dot(vDirWS, nDirWS);    //得到视方向，为fresnel准备

                //编写光照模型 
                float halflambert = max(0.0, nDotl)* 0.5+0.5;   //计算 half lambert
                float Phong = pow(max(0.0,vRDotl),var_specularExponent) * var_specularMask;   
                float3 LambertPhong = ( var_basecolor * halflambert) + (_MainCol2 * Phong);

                //shadow
                float shadow = LIGHT_ATTENUATION (i) ;                    // 同样Unity封装好的函数 可取出投影
                float var_shadowPow = pow( shadow , _shadowPow) ;            //阴影硬度
                float3 var_shadowCol = (_shadowCol.rgb * (1.0 - var_shadowPow)) + var_shadowPow; 
                float3 shadowPhong = LambertPhong * var_shadowCol;


                //3ColAmbient1
                float2 nDirgbadd = (nDirWS.g);                            // 取GB的mask
                float upMask =max(0.0, nDirWS.g);                         // 获取朝上部分遮罩
                float downMask =max(0.0, -nDirWS.g);                      // 获取朝下部分遮罩
                float sideMask =1.0 - upMask - downMask;                  // 获取侧面部分遮罩
                float3 envCol = (_EnvUpCol * upMask ) + (_EnvSideCol * sideMask) + (_EnvDownCol * downMask); // 混合环境色


                //Cubemap+fresnel
                float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, _CubemapMip)).rgb;
                float fresnel = pow(max(0.0, 1.0 - vdotn), var_FresnelPow);   //边缘光是模型边缘的高光，赋予模型深度，让其从环境凸显出来。 也称为菲涅耳强度或边缘光强度。遮罩的边缘光强度值会乘以材质的边缘光比例值。 自定义物品会使用默认物品之材质中的值。 大多数情况下， 边缘光比例是大于 1 的数字，如此可产生夸大的边缘光效果。
                float3 envSpecLighting = var_Cubemap * fresnel * var_metalnessMask; // 叠加菲涅尔效果以及环境镜面反射强度以及金属度遮罩

                //Emissive
                float3 Emissive = _SelfIllum *  var_SelfIllumMask ;

                //DetalMask

                float3 DetalMap = var_DetalMap * var_DetalMapMask; 


                float3 finalCol = shadowPhong * envCol + envSpecLighting + Emissive + DetalMap;
                //返回结果
                return float4( finalCol , 1.0);
            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("div",{class:"language-shader line-numbers-mode","data-ext":"shader","data-title":"shader"},[e("pre",{class:"language-shader"},[e("code",null,`\uFEFFShader "AP1/L11/L11_Task_Data_base_VS" 

{
    Properties {
        [Header(Texture)]

        [NoScaleOffset] _MainOpTex ("RGB:基础颜色 A:不透明度", 2D) = "white" {}
        [NoScaleOffset] _MSEATex ("R:金属度 GB:高光度和mask A:环境遮罩 ", 2D) = "white" {}
        [NoScaleOffset] [Normal] _NormTex ("RGB:法线贴图", 2D) = "bump" {}
        [NoScaleOffset] _EDTTex ("R:自发光 G:细节遮罩 B:颜色Tint遮罩", 2D) = "black" {}

        [Header(Color)]
        _ColTint ("基础颜色Tint", Color) = (1,1,1,1)
        _highCol ("高光颜色", Color) = (1,1,1,1)

        [Header(Emissive)]
        _EmitTint ("自发光Tint", Color) = (1,1,1,1)

        [Header(Diffuse)]
        _EnvDiffInt ("环境漫反射强度", Range(0, 2)) = 1
        _EnvUpCol ("环境天顶颜色", Color) = (1.0, 1.0, 1.0, 1.0)
        _EnvSideCol ("环境水平颜色", Color) = (0.5, 0.5, 0.5, 1.0)
        _EnvDownCol ("环境地表颜色", Color) = (0.0, 0.0, 0.0, 0.0)

        [Header(CubeMap)]
        _Cubemap ("CubeMap", Cube) = "_Skybox" {}
        _CubemapMip ("CubemapMip层级", Range(0, 7)) = 0

        [Header(Specular)]
        _SpecPow ("高光次幂", Range(1, 90)) = 30
        _EnvSpecInt ("环境镜面反射强度", Range(0, 5)) = 0.2
        _FresnelPow ("菲涅尔次幂", Range(0, 5)) = 1


        [Header(shadow)]
        _shadowCol ("阴影颜色", Color) = (0.5,0.5,0.5,1)
        _shadowPow ("阴影次幂", range(1,50)) = 1   

        [Header(DetalMask)]
        _DetalTex ("细节贴图", 2D) = "black" {}




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
            #include "AutoLight.cginc"                  // Unity投影库文件
            #include "Lighting.cginc"                   // Unity投影库文件
            #pragma multi_compile_fwdbase_fullshadows
            #pragma target 3.0
            //载入自定义库
            #include "./Assets/Cginc/MyCginc.cginc"

            // 输入参数
            // Texture
            uniform sampler2D _MainOpTex;
            uniform sampler2D _MSEATex;
            uniform sampler2D _NormTex;
            uniform sampler2D _EDTTex;
            //DetalMask
            uniform sampler2D _DetalTex;
            
            // Color
            uniform float4 _ColTint;
            uniform float4 _highCol;

            uniform float4 _EmitTint;
            //Diffuse
            uniform float _EnvDiffInt;
            uniform float3  _EnvUpCol;
            uniform float3  _EnvSideCol;
            uniform float3  _EnvDownCol;
            // Specular
            uniform fixed _UseSpeclMask;
            uniform float _SpecPow;
            uniform float _FresnelPow;
            uniform float _EnvSpecInt;

            //cubemap
            uniform samplerCUBE _Cubemap ;
            uniform float _CubemapMip ;

            //shadow
            uniform float4 _shadowCol;
            uniform float _shadowPow ; // add shadow Pow sider




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
                float4 posWS : TEXCOORD1; // 世界空间顶点位置
                float2 uv0 : TEXCOORD0; // UV0
                float3 nDirWS : TEXCOORD2; // 世界空间法线方向
                float3 tDirWS : TEXCOORD3; // 世界空间切线方向
                float3 bDirWS : TEXCOORD4; // 世界空间副切线方向
                LIGHTING_COORDS(5,6)            //投影用坐标信息
            };
            // 输入结构>>>顶点Shader>>>输出结构
            VertexOutput vert (VertexInput v) {
                VertexOutput o = (VertexOutput)0; // 新建输出结构
                    o.pos = UnityObjectToClipPos( v.vertex ); // 顶点位置 OS>CS
                    o.posWS = mul(unity_ObjectToWorld, v.vertex); // 顶点位置 OS>WS
                    o.uv0 = v.uv0; // 传递UV

                    o.nDirWS = UnityObjectToWorldNormal(v.normal); // 法线方向 OS>WS
                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); // 切线方向 OS>WS
                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w); // 副切线方向

                    TRANSFER_VERTEX_TO_FRAGMENT(o) // 投影相关

                return o; // 返回输出结构
            }

            float4 frag(VertexOutput i) : COLOR {

                // 准备向量
                    //法线切线空间转为世界空间
                float3 nDirTS = UnpackNormal(tex2D(_NormTex, i.uv0)).rgb; //采样法线贴图UV0
                float3x3 TBN = float3x3(i.tDirWS, i.bDirWS, i.nDirWS);
                float3 nDirWS = normalize(mul(nDirTS, TBN));

                float3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS.xyz);//获取vDir 计算Fresnel

                float3 vrDirWS = reflect(-vDirWS, nDirWS);//获取视角反方向 - 用于Cubemap
                float3 lDirWS = _WorldSpaceLightPos0.xyz; //获取光方向
                float3 lrDirWS = reflect(-lDirWS, nDirWS);//获取光视反方向



                //采样贴图
                float4 var_MainOpTex = tex2D(_MainOpTex, i.uv0); 
                float4 var_MSEATex = tex2D(_MSEATex, i.uv0); 
                float4 var_EDTTex = tex2D(_EDTTex, i.uv0); 
                float4 var_DetalTex = tex2D(_DetalTex, i.uv0); 


                
                // 准备点积结果
                float ndotl = dot(nDirWS, lDirWS);  //得到lambert
                float vdotr = dot(vDirWS, lrDirWS); //得到phong
                float vdotn = dot(vDirWS, nDirWS);  //得到视方向，为fresnel准备 
                
                //编写光照模型
                float lambert = max(0.0, ndotl); 
                float Phong = pow(max(0.0,vdotr),_SpecPow);
                //Tint mask
                float3 var_Tintmask = _ColTint * var_EDTTex.b;
                // float4 Use_ColorTintMask = UNITY_ACCESS_INSTANCED_PROP( Props, _Use_ColorTint_Mask );
                float3 LambertPhong = ((var_MainOpTex* (lambert*0.5+0.5))  )+ (_highCol * (Phong * (var_MSEATex.g * var_MSEATex.b)));

                //shadow
                float shadow = LIGHT_ATTENUATION (i) ;                    // 同样Unity封装好的函数 可取出投影
                float var_shadowPow = pow( shadow , _shadowPow) ;            //阴影硬度
                float3 var_shadowCol = (_shadowCol.rgb * (1.0 - var_shadowPow)) + var_shadowPow; 
                float3 Lightshadow = LambertPhong * var_shadowCol ;

                //3ColAmbient 引用库文件

                // float3 envCol = TriColAmbient (nDirWS, _EnvUpCol, _EnvSideCol, _EnvDownCol);
                float uMask = max(0.0, nDirWS.g); // 获取朝上部分遮罩
                float dMask = max(0.0, -nDirWS.g); // 获取朝下部分遮罩
                float sMask = 1.0 - uMask - dMask; // 获取侧面部分遮罩
                float3 envCol =_EnvUpCol * uMask + _EnvSideCol * sMask + _EnvDownCol * dMask; // 混合环境色


                // cubemap
                float3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, _CubemapMip)).rgb;
                float var_fresnel = pow(max(0.0, 1.0 - vdotn), _FresnelPow);     //fresnel
                float3 envSpecLighting = var_Cubemap * var_fresnel * var_MSEATex.r * _EnvSpecInt; // 叠加菲涅尔效果以及环境镜面反射强度

                // 3col Mul AO
                float3 Col3Ao = var_MSEATex.a * (envCol* _EnvDiffInt )* Lightshadow;
                float3 finalCol = Col3Ao + envSpecLighting + ( _EmitTint * var_EDTTex.r)+(var_DetalTex * var_EDTTex.g );

                //返回结果
                return float4 (finalCol , 1.0 );

            }
            ENDCG
        }
    }
    FallBack "Diffuse"
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=t('<p>ps：最终还是用了默认的贴图写食人魔的shader 然后 高光度，金属度，表现不正常。待与答案对比； 较前写的森海飞霞的shader也没写好，😭。</p><h4 id="森海飞霞的尝试" tabindex="-1"><a class="header-anchor" href="#森海飞霞的尝试"><span>森海飞霞的尝试</span></a></h4><p>根据大作业链接中提到的需求-以及官方data2获取的模型和贴图梳理了下</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240420012142.png" style="width:95% !important;"></div><p>Texoplish 后</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240405020202.png" style="width:95% !important;"></div><p>shaderforge</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/sf_l1_taskdtbesf4520.png" style="width:95% !important;"></div>',8);function w(M,O){const r=d("CodeTabs"),o=d("Badge");return v(),c("div",null,[p,m(" more "),h,s(r,{id:"820",data:[{id:"MyCginc.cginc"}],"tab-id":"shell"},{title0:n(({value:l,isActive:i})=>[a("MyCginc.cginc")]),tab0:n(({value:l,isActive:i})=>[f]),_:1}),_,s(r,{id:"828",data:[{id:"xxx.shader"}],"tab-id":"shell"},{title0:n(({value:l,isActive:i})=>[a("xxx.shader")]),tab0:n(({value:l,isActive:i})=>[g]),_:1}),s(r,{id:"833",data:[{id:"使用 xxx.shader"}],"tab-id":"shell"},{title0:n(({value:l,isActive:i})=>[a("使用 xxx.shader")]),tab0:n(({value:l,isActive:i})=>[S]),_:1}),D,e("details",null,[e("summary",null,[s(o,{text:"Code-view",color:"#e0dd8b"})]),s(r,{id:"853",data:[{id:"食人魔魔法师"},{id:"森海飞霞"}],"tab-id":"shell"},{title0:n(({value:l,isActive:i})=>[a("食人魔魔法师")]),title1:n(({value:l,isActive:i})=>[a("森海飞霞")]),tab0:n(({value:l,isActive:i})=>[C]),tab1:n(({value:l,isActive:i})=>[x]),_:1})]),T])}const W=u(b,[["render",w],["__file","shader11.html.vue"]]),y=JSON.parse('{"path":"/engine/unity/shader/shader11.html","title":"unity-shader-11","lang":"zh-CN","frontmatter":{"title":"unity-shader-11","description":"回顾复习 摘要：面板、参数、IVO、函数、cginc","icon":"iconfont alicon-biaoji","category":"shader","tag":["shader","unity"],"date":"2024-03-30T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330204620.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader11.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-11"}],["meta",{"property":"og:description","content":"回顾复习 摘要：面板、参数、IVO、函数、cginc"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330204620.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T09:07:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330204620.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-11"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-03-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T09:07:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-11\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330204620.png\\"],\\"datePublished\\":\\"2024-03-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-15T09:07:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"面板","slug":"面板","link":"#面板","children":[{"level":3,"title":"面板参数声明格式","slug":"面板参数声明格式","link":"#面板参数声明格式","children":[]},{"level":3,"title":"参数属性","slug":"参数属性","link":"#参数属性","children":[]}]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[{"level":3,"title":"ShaderLab中的参数类型","slug":"shaderlab中的参数类型","link":"#shaderlab中的参数类型","children":[]},{"level":3,"title":"参数的精度选择","slug":"参数的精度选择","link":"#参数的精度选择","children":[]}]},{"level":2,"title":"IVO - input  vector  output","slug":"ivo-input-vector-output","link":"#ivo-input-vector-output","children":[{"level":3,"title":"可访问的顶点lnput数据","slug":"可访问的顶点lnput数据","link":"#可访问的顶点lnput数据","children":[]},{"level":3,"title":"常用的顶点Output数据","slug":"常用的顶点output数据","link":"#常用的顶点output数据","children":[]},{"level":3,"title":"常用顶点Shader操作","slug":"常用顶点shader操作","link":"#常用顶点shader操作","children":[]},{"level":3,"title":"输入参数","slug":"输入参数","link":"#输入参数","children":[]}]},{"level":2,"title":"方法 & 函数","slug":"方法-函数","link":"#方法-函数","children":[{"level":3,"title":"3ColAmbient函数","slug":"_3colambient函数","link":"#_3colambient函数","children":[]}]},{"level":2,"title":"自定义 shader cginc 函数工具库","slug":"自定义-shader-cginc-函数工具库","link":"#自定义-shader-cginc-函数工具库","children":[{"level":3,"title":"定义函数工具库文件","slug":"定义函数工具库文件","link":"#定义函数工具库文件","children":[]},{"level":3,"title":"库引用","slug":"库引用","link":"#库引用","children":[]}]},{"level":2,"title":"大作业","slug":"大作业","link":"#大作业","children":[{"level":3,"title":"Submit","slug":"submit","link":"#submit","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1718442447000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":6}]},"filePathRelative":"engine/unity/shader/shader11.md","localizedDate":"2024年3月30日","excerpt":"<p>回顾复习<br>\\n摘要：面板、参数、IVO、函数、cginc</p>\\n","autoDesc":true}');export{W as comp,y as data};
