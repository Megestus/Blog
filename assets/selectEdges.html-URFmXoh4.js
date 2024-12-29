import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as s,e as p,a as u,g as e,r,o as k,d as n}from"./app-DJGYRO-r.js";const d={};function m(b,a){const l=r("CodeTabs");return k(),i("div",null,[a[2]||(a[2]=s("div",{class:"image-preview"},[s("img",{src:"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png",style:{width:"25% !important"}})],-1)),p(" more "),u(l,{id:"3",data:[{id:"mel"}],"tab-id":"shell"},{title0:e(({value:t,isActive:c})=>a[0]||(a[0]=[n("mel")])),tab0:e(({value:t,isActive:c})=>a[1]||(a[1]=[s("div",{class:"language-mel line-numbers-mode","data-highlighter":"prismjs","data-ext":"mel","data-title":"mel"},[s("pre",null,[s("code",null,[s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token keyword"},"proc"),n(),s("span",{class:"token function"},"selectEdges"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"{"),s("span",{class:"token keyword"},"string"),n(),s("span",{class:"token variable"},"$numbOfNEdgesSelected"),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token code italic"},[s("span",{class:"token delimiter punctuation"},"`"),s("span",{class:"token statement"},[s("span",{class:"token function"},"filterExpand"),n(),s("span",{class:"token flag operator"},"-expand"),n(" true "),s("span",{class:"token flag operator"},"-sm"),n(),s("span",{class:"token number"},"32")]),s("span",{class:"token delimiter punctuation"},"`")]),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token keyword"},"int"),n(),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"size"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$numbOfNEdgesSelected"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"0"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"error"),n(),s("span",{class:"token string"},'"Select at least one edge before running the script."'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"polySelectEdgesEveryN"),n(),s("span",{class:"token string"},'"edgeRing"'),n(),s("span",{class:"token number"},"2"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"print"),n(),s("span",{class:"token string"},'"1 loop pattern selected   (^▽^ )."'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"2"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"polySelectEdgesEveryN"),n(),s("span",{class:"token string"},'"edgeRing"'),n(),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"print"),n(),s("span",{class:"token string"},'"2 loop pattern selected   ヾ(≧▽≦*)o."'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"3"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"polySelectEdgesEveryN"),n(),s("span",{class:"token string"},'"edgeRing"'),n(),s("span",{class:"token number"},"6"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"print"),n(),s("span",{class:"token string"},'"3 loop pattern selected  （′v｀）."'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"4"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"polySelectEdgesEveryN"),n(),s("span",{class:"token string"},'"edgeRing"'),n(),s("span",{class:"token number"},"8"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"print"),n(),s("span",{class:"token string"},'"4 loop pattern selected  (p≧w≦q)."'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"5"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"polySelectEdgesEveryN"),n(),s("span",{class:"token string"},'"edgeRing"'),n(),s("span",{class:"token number"},"10"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"print"),n(),s("span",{class:"token string"},'"5 loop pattern selected （＞人＜；）."'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"6"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"polySelectEdgesEveryN"),n(),s("span",{class:"token string"},'"edgeRing"'),n(),s("span",{class:"token number"},"12"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"print"),n(),s("span",{class:"token string"},'"6 loop pattern selected  (*￣︿￣)."'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"7"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"polySelectEdgesEveryN"),n(),s("span",{class:"token string"},'"edgeRing"'),n(),s("span",{class:"token number"},"14"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"print"),n(),s("span",{class:"token string"},'"7 loop pattern selected  （＝。＝）."'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},"=="),n(),s("span",{class:"token number"},"8"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"polySelectEdgesEveryN"),n(),s("span",{class:"token string"},'"edgeRing"'),n(),s("span",{class:"token number"},"16"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"print"),n(),s("span",{class:"token string"},'"8 loop pattern selected  (。﹏。)."'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$sizeNComponents"),n(),s("span",{class:"token operator"},">"),n(),s("span",{class:"token number"},"8"),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"error"),n(),s("span",{class:"token string"},'"Select 8 or less edges.  ○|￣|_"'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token keyword"},"string"),n(),s("span",{class:"token variable"},"$SelectEdgeswindow"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token string"},'"SelectEdges"'),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token code italic"},[s("span",{class:"token delimiter punctuation"},"`"),s("span",{class:"token statement"},[s("span",{class:"token function"},"window"),n(),s("span",{class:"token flag operator"},"-ex"),n(),s("span",{class:"token variable"},"$SelectEdgeswindow")]),s("span",{class:"token delimiter punctuation"},"`")]),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token function"},"deleteUI"),n(),s("span",{class:"token flag operator"},"-window"),n(),s("span",{class:"token variable"},"$SelectEdgeswindow"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"},[n("    "),s("span",{class:"token keyword"},"if"),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"!"),s("span",{class:"token code italic"},[s("span",{class:"token delimiter punctuation"},"`"),s("span",{class:"token statement"},[s("span",{class:"token function"},"window"),n(),s("span",{class:"token flag operator"},"-ex"),n(),s("span",{class:"token variable"},"$SelectEdgeswindow")]),s("span",{class:"token delimiter punctuation"},"`")]),s("span",{class:"token punctuation"},")")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"{")]),n(`
`),s("span",{class:"line"},[n("            "),s("span",{class:"token keyword"},"string"),n(),s("span",{class:"token variable"},"$lbWinName0"),n(),s("span",{class:"token operator"},"="),n(),s("span",{class:"token code italic"},[s("span",{class:"token delimiter punctuation"},"`"),s("span",{class:"token statement"},[s("span",{class:"token function"},"window")]),n(`
`),s("span",{class:"line"},[n("                                "),s("span",{class:"token flag operator"},"-tlb"),n(),s("span",{class:"token number"},"1")]),n(`
`),s("span",{class:"line"},[n("                                "),s("span",{class:"token flag operator"},"-bgc"),n(),s("span",{class:"token number"},".25"),n(),s("span",{class:"token number"},".25"),n(),s("span",{class:"token number"},".25")]),n(`
`),s("span",{class:"line"},[n("                                "),s("span",{class:"token variable"},"$SelectEdgeswindow")]),s("span",{class:"token delimiter punctuation"},"`")]),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[n("        "),s("span",{class:"token punctuation"},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"columnLayout"),n(),s("span",{class:"token flag operator"},"-adjustableColumn"),n(" true"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"text"),n(),s("span",{class:"token flag operator"},"-label"),n(),s("span",{class:"token string"},'"选边-或多边-点执行"'),n(),s("span",{class:"token flag operator"},"-h"),n(),s("span",{class:"token number"},"50"),n(),s("span",{class:"token flag operator"},"-w"),n(),s("span",{class:"token number"},"150"),n(),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"button"),n(),s("span",{class:"token flag operator"},"-label"),n(),s("span",{class:"token string"},'"执行"'),n(),s("span",{class:"token flag operator"},"-command"),n(),s("span",{class:"token string"},'"selectEdges"'),n(),s("span",{class:"token flag operator"},"-bgc"),n(),s("span",{class:"token number"},".80"),n(),s("span",{class:"token number"},".60"),n(),s("span",{class:"token number"},".50"),n(),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"setParent"),n(),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token function"},"showWindow"),n(),s("span",{class:"token variable"},"$SelectEdgeswindow"),s("span",{class:"token punctuation"},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})])}const y=o(d,[["render",m],["__file","selectEdges.html.vue"]]),f=JSON.parse('{"path":"/posts/maya/selectEdges.html","title":"Maya-SelectEdges","lang":"zh-CN","frontmatter":{"title":"Maya-SelectEdges","icon":"iconfont alicon-maya1","category":["maya"],"tags":["maya","tool"],"date":"2023-12-02T00:00:00.000Z","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/maya/selectEdges.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Maya-SelectEdges"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"property":"article:tag","content":"maya"}],["meta",{"property":"article:tag","content":"tool"}],["meta",{"property":"article:published_time","content":"2023-12-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maya-SelectEdges\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":4}]},"filePathRelative":"posts/maya/selectEdges.md","localizedDate":"2023年12月2日","excerpt":"<div class=\\"image-preview\\">\\n  <img src=\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png\\" style=\\"width: 25% !important;\\">\\n</div>\\n"}');export{y as comp,f as data};