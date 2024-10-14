import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as n,e as m,f as r,a as t,g as i,r as u,o,d as e}from"./app-CUZmbVYD.js";const b={};function v(g,s){const c=u("CodeTabs");return o(),p("div",null,[s[7]||(s[7]=n("p",null,"对于游戏引擎版本的文件，进行版本控制可能需要 Helix Core 忽略某些文件，例如单个用户设置、缓存等。",-1)),m(" more "),s[8]||(s[8]=r('<p><a href="https://www.perforce.com/manuals/p4v/Content/P4V/ignore-files.html" target="_blank" rel="noopener noreferrer">设置和创建忽略文件 P4 ignore</a></p><hr><p>设置步骤为：</p><ul><li>创建ignore.txt，写好ignore内容-保存-上传p4根目录</li><li>运行bat，并检查是否过滤成功</li></ul><h2 id="p4v-设置-ignore" tabindex="-1"><a class="header-anchor" href="#p4v-设置-ignore"><span>P4V_设置.ignore</span></a></h2><p>过滤忽略无需同步的文件。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240217153354.png" style="width:40% !important;"></div><h3 id="_1-新建p4ignore-txt文件并上传至仓库" tabindex="-1"><a class="header-anchor" href="#_1-新建p4ignore-txt文件并上传至仓库"><span>1 新建P4ignore.txt文件并上传至仓库.</span></a></h3>',8)),n("details",null,[s[4]||(s[4]=n("summary",null,"P4ignore：展开复制",-1)),t(c,{id:"34",data:[{id:"p4ignore.txt"},{id:"UE5"}],"tab-id":"shell"},{title0:i(({value:l,isActive:a})=>s[0]||(s[0]=[e("p4ignore.txt")])),title1:i(({value:l,isActive:a})=>s[1]||(s[1]=[e("UE5")])),tab0:i(({value:l,isActive:a})=>s[2]||(s[2]=[n("div",{class:"language-text line-numbers-mode","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"# directories"),e(`
`),n("span",{class:"line"},"*/.git/*"),e(`
`),n("span",{class:"line"},"*/.vs/*"),e(`
`),n("span",{class:"line"},"*/obj/Development/*"),e(`
`),n("span",{class:"line"},"*/obj/Debug/*"),e(`
`),n("span",{class:"line"},"*/obj/x64/*"),e(`
`),n("span",{class:"line"},"*/Intermediate/*"),e(`
`),n("span",{class:"line"},"*/Saved/*"),e(`
`),n("span",{class:"line"},"*/DerivedDataCache/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"# files"),e(`
`),n("span",{class:"line"},"*.pdb"),e(`
`),n("span",{class:"line"},"*.obj"),e(`
`),n("span",{class:"line"},"*.response"),e(`
`),n("span",{class:"line"},"*.prev"),e(`
`),n("span",{class:"line"},"**DebugGame*"),e(`
`),n("span",{class:"line"},"*.pch"),e(`
`),n("span",{class:"line"},"*.tmp"),e(`
`),n("span",{class:"line"},"*.dSYM"),e(`
`),n("span",{class:"line"},"*.VC.db"),e(`
`),n("span",{class:"line"},"*.opensdf"),e(`
`),n("span",{class:"line"},"*.opendb"),e(`
`),n("span",{class:"line"},"*.sdf"),e(`
`),n("span",{class:"line"},"*.suo"),e(`
`),n("span",{class:"line"},"*.log"),e(`
`),n("span",{class:"line"},"*.DS_Store"),e(`
`),n("span",{class:"line"},"*.ipch"),e(`
`),n("span",{class:"line"},"*.vscode/*"),e(`
`),n("span",{class:"line"},"*.idea/*"),e(`
`),n("span",{class:"line"},"*.sln"),e(`
`),n("span",{class:"line"},"*.p4config"),e(`
`),n("span",{class:"line"},"*.code-workspace"),e(`
`),n("span",{class:"line"},"*.ue4dependencies"),e(`
`),n("span",{class:"line"},"*/Log.txt"),e(`
`),n("span",{class:"line"},"*.akd"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"**/Engine/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"**/Engine/Binaries/Win64/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"**/Engine/Binaries/Mac/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"**/Engine/Plugins/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"**/Engine/Plugins/**Mac-Debug*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"**/Projects/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"**/Projects/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"**/Projects/**/.vs/*"),e(`
`),n("span",{class:"line"},"**/Projects/**/Binaries/*"),e(`
`),n("span",{class:"line"},"**/Projects/**/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"**/Projects/**/Intermediate/*"),e(`
`),n("span",{class:"line"},"**/Projects/**/Saved/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!**/Engine/Binaries/DotNET/*"),e(`
`),n("span",{class:"line"},"!**/Engine/Intermediate/**.precompiled"),e(`
`),n("span",{class:"line"},"!**/Engine/Intermediate/**.lib"),e(`
`),n("span",{class:"line"},"!**/Engine/Intermediate/**.o"),e(`
`),n("span",{class:"line"},"!**/Engine/Intermediate/**.obj"),e(`
`),n("span",{class:"line"},"!**/Engine/Source/**.sln"),e(`
`),n("span",{class:"line"},"!**/Engine/Source/**.vscode/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!**/Projects/**/Content/**.obj"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!Dev-Binaries/**.zip"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"/Engine/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"/Engine/Binaries/Win64/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"/Engine/Binaries/Mac/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"/Engine/Plugins/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"/Engine/Plugins/**Mac-Debug*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"/Projects/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"/Projects/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"/Projects/**/.vs/*"),e(`
`),n("span",{class:"line"},"/Projects/**/Binaries/*"),e(`
`),n("span",{class:"line"},"/Projects/**/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"/Projects/**/Intermediate/*"),e(`
`),n("span",{class:"line"},"/Projects/**/Saved/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!/Engine/Binaries/DotNET/*"),e(`
`),n("span",{class:"line"},"!/Engine/Intermediate/**.precompiled"),e(`
`),n("span",{class:"line"},"!/Engine/Intermediate/**.lib"),e(`
`),n("span",{class:"line"},"!/Engine/Intermediate/**.o"),e(`
`),n("span",{class:"line"},"!/Engine/Intermediate/**.obj"),e(`
`),n("span",{class:"line"},"!/Engine/Source/**.sln"),e(`
`),n("span",{class:"line"},"!/Engine/Source/**.vscode/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!/Projects/**/Content/**.obj"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!/Dev-Binaries/**.zip"),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:i(({value:l,isActive:a})=>s[3]||(s[3]=[n("div",{class:"language-text line-numbers-mode","data-highlighter":"prismjs","data-ext":"text","data-title":"text"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"# DIRECTORIES"),e(`
`),n("span",{class:"line"},"*/UE5_Source_Cahce/*"),e(`
`),n("span",{class:"line"},"*/Engine/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"*/Engine/Binaries/Win64/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"*/Engine/Binaries/Mac/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"*/Engine/Plugins/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"*/Engine/Plugins/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"*/.git/*"),e(`
`),n("span",{class:"line"},"*/.vs/*"),e(`
`),n("span",{class:"line"},"*/obj/Development/*"),e(`
`),n("span",{class:"line"},"*/obj/Debug/*"),e(`
`),n("span",{class:"line"},"*/obj/x64/*"),e(`
`),n("span",{class:"line"},"*/Intermediate/*"),e(`
`),n("span",{class:"line"},"*/Saved/*"),e(`
`),n("span",{class:"line"},"*.vscode/*"),e(`
`),n("span",{class:"line"},"*.idea/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"# FILES"),e(`
`),n("span",{class:"line"},"*.response"),e(`
`),n("span",{class:"line"},"*.prev"),e(`
`),n("span",{class:"line"},"**DebugGame*"),e(`
`),n("span",{class:"line"},"*.pch"),e(`
`),n("span",{class:"line"},"*.tmp"),e(`
`),n("span",{class:"line"},"*.dSYM"),e(`
`),n("span",{class:"line"},"*.VC.db"),e(`
`),n("span",{class:"line"},"*.opensdf"),e(`
`),n("span",{class:"line"},"*.opendb"),e(`
`),n("span",{class:"line"},"*.sdf"),e(`
`),n("span",{class:"line"},"*.suo"),e(`
`),n("span",{class:"line"},"*.log"),e(`
`),n("span",{class:"line"},"*.DS_Store"),e(`
`),n("span",{class:"line"},"*.ipch"),e(`
`),n("span",{class:"line"},"*.sln"),e(`
`),n("span",{class:"line"},"*.akd"),e(`
`),n("span",{class:"line"},"*.pdb"),e(`
`),n("span",{class:"line"},"*.obj"),e(`
`),n("span",{class:"line"},"*.p4config"),e(`
`),n("span",{class:"line"},"*.ue4dependencies"),e(`
`),n("span",{class:"line"},"*.code-workspace"),e(`
`),n("span",{class:"line"},"*/Log.txt"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"# ENGINE"),e(`
`),n("span",{class:"line"},"!Engine/Binaries/DotNET/*"),e(`
`),n("span",{class:"line"},"!Engine/Intermediate/**.precompiled"),e(`
`),n("span",{class:"line"},"!Engine/Intermediate/**.obj"),e(`
`),n("span",{class:"line"},"!Engine/Intermediate/**.lib"),e(`
`),n("span",{class:"line"},"!Engine/Intermediate/**.o"),e(`
`),n("span",{class:"line"},"!Engine/Source/**.sln"),e(`
`),n("span",{class:"line"},"!Engine/Source/**.vscode/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"# LUGINS"),e(`
`),n("span",{class:"line"},"!Engine/Plugins/Marketplace*"),e(`
`),n("span",{class:"line"},"!Engine/Plugins/Runtime/HoudiniEngine*"),e(`
`),n("span",{class:"line"},"!Engine/Plugins/Runtime/OpenCV*"),e(`
`),n("span",{class:"line"},"*/Engine/Plugins/Runtime/**/Binaries/*"),e(`
`),n("span",{class:"line"},"*/Engine/Plugins/Runtime/**/Intermediate/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"# PROJECT"),e(`
`),n("span",{class:"line"},"*/Games/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"*/Games/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"*/Games/UE5_Source_Cahce/"),e(`
`),n("span",{class:"line"},"*/Games/Project_T/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"*/Games/Project_T/Intermediate/*"),e(`
`),n("span",{class:"line"},"*/Games/Project_T/Saved/*"),e(`
`),n("span",{class:"line"},"*/Games/Project_T/Binaries/Android/*"),e(`
`),n("span",{class:"line"},"*/Games/Project_T/Config/DefaultEditorPerProjectUserSettings.ini"),e(`
`),n("span",{class:"line"},"!*/Games/Project_T/Build/IOS/Resources/*"),e(`
`),n("span",{class:"line"},"!*/Games/Project_T/Content/**.obj"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"# PROJECT PLUGINS"),e(`
`),n("span",{class:"line"},"*/Games/Project_T/Plugins/**/Binaries/*"),e(`
`),n("span",{class:"line"},"*/Games/Project_T/Plugins/**/Intermediate/*"),e(`
`),n("span",{class:"line"},"*/Games/Project_T/Plugins/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"*/Games/Project_T/Plugins/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"!*/Games/Project_T/Plugins/MetaHuman/Intermediate/*"),e(`
`),n("span",{class:"line"},"!*/Games/Project_T/Plugins/**.lib*"),e(`
`),n("span",{class:"line"},"!*/Games/Project_T/Plugins/**.dll*"),e(`
`),n("span",{class:"line"},"!*/Games/Project_T/Plugins/**.pdb*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"# ROOT DIRECT"),e(`
`),n("span",{class:"line"},"!Default.uprojectdirs"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"# PROJECT Precompiling"),e(`
`),n("span",{class:"line"},"!*/Dev-Binaries/*"),e(`
`),n("span",{class:"line"},"!*/LocalBuilds/*"),e(`
`),n("span",{class:"line"},"!/Dev-Binaries/**.zip"),e(`
`),n("span",{class:"line"},"!/LocalBuilds/**.zip"),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})]),s[9]||(s[9]=n("p",null," ",-1)),s[10]||(s[10]=n("h3",{id:"_2-用下面代码创建一个p4ignore-bat-然后运行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-用下面代码创建一个p4ignore-bat-然后运行"},[n("span",null,"2.用下面代码创建一个P4ignore.bat ， 然后运行.")])],-1)),t(c,{id:"49",data:[{id:"P4ignore.bat"}],"tab-id":"shell"},{title0:i(({value:l,isActive:a})=>s[5]||(s[5]=[e("P4ignore.bat")])),tab0:i(({value:l,isActive:a})=>s[6]||(s[6]=[n("div",{class:"language-bat line-numbers-mode","data-highlighter":"prismjs","data-ext":"bat","data-title":"bat"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"@echo off"),e(`
`),n("span",{class:"line"},"set workdir=%~dp0"),e(`
`),n("span",{class:"line"},"set result=%workdir%p4ignore.txt"),e(`
`),n("span",{class:"line"},"echo %result%"),e(`
`),n("span",{class:"line"},'p4 set P4IGNORE="%result%"'),e(`
`),n("span",{class:"line"},"pause"),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),s[11]||(s[11]=r(`<p> </p><h3 id="_3-在depot右击打开cmd" tabindex="-1"><a class="header-anchor" href="#_3-在depot右击打开cmd"><span>3.在Depot右击打开CMD</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240217153444.png" style="width:50% !important;"></div><p> </p><h3 id="_4-输入p4-ignores-查询是否启用" tabindex="-1"><a class="header-anchor" href="#_4-输入p4-ignores-查询是否启用"><span>4.输入p4 ignores 查询是否启用</span></a></h3><div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd" data-title="cmd"><pre><code><span class="line">p4 ignores</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240217153513.png" style="width:80% !important;"></div>`,7))])}const E=d(b,[["render",v],["__file","P4ignore.html.vue"]]),D=JSON.parse('{"path":"/posts/Perforce/P4ignore.html","title":"P4ignore Set","lang":"zh-CN","frontmatter":{"title":"P4ignore Set","icon":"iconfont alicon-perforce","category":["Perforce"],"tags":["Perforce","ignore"],"date":"2023-12-21T00:00:00.000Z","description":"对于游戏引擎版本的文件，进行版本控制可能需要 Helix Core 忽略某些文件，例如单个用户设置、缓存等。","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/Perforce/P4ignore.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"P4ignore Set"}],["meta",{"property":"og:description","content":"对于游戏引擎版本的文件，进行版本控制可能需要 Helix Core 忽略某些文件，例如单个用户设置、缓存等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T06:33:59.000Z"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:tag","content":"ignore"}],["meta",{"property":"article:published_time","content":"2023-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T06:33:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"P4ignore Set\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T06:33:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"P4V_设置.ignore","slug":"p4v-设置-ignore","link":"#p4v-设置-ignore","children":[{"level":3,"title":"1 新建P4ignore.txt文件并上传至仓库.","slug":"_1-新建p4ignore-txt文件并上传至仓库","link":"#_1-新建p4ignore-txt文件并上传至仓库","children":[]},{"level":3,"title":"2.用下面代码创建一个P4ignore.bat ， 然后运行.","slug":"_2-用下面代码创建一个p4ignore-bat-然后运行","link":"#_2-用下面代码创建一个p4ignore-bat-然后运行","children":[]},{"level":3,"title":"3.在Depot右击打开CMD","slug":"_3-在depot右击打开cmd","link":"#_3-在depot右击打开cmd","children":[]},{"level":3,"title":"4.输入p4 ignores 查询是否启用","slug":"_4-输入p4-ignores-查询是否启用","link":"#_4-输入p4-ignores-查询是否启用","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1724481239000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":4}]},"filePathRelative":"posts/Perforce/P4ignore.md","localizedDate":"2023年12月21日","excerpt":"<p>对于游戏引擎版本的文件，进行版本控制可能需要 Helix Core 忽略某些文件，例如单个用户设置、缓存等。</p>\\n","autoDesc":true}');export{E as comp,D as data};
