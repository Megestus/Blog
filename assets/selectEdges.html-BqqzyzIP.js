import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as i,a as p,w as e,d as n,r as u,o as r,e as s}from"./app-DLlczNUh.js";const k={},d=n("div",{class:"image-preview"},[n("img",{src:"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png",style:{width:"25% !important"}})],-1),m=n("div",{class:"language-mel line-numbers-mode","data-ext":"mel","data-title":"mel"},[n("pre",{class:"language-mel"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"proc"),s(),n("span",{class:"token function"},"selectEdges"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"string"),s(),n("span",{class:"token variable"},"$numbOfNEdgesSelected"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token code italic"},[n("span",{class:"token delimiter punctuation"},"`"),n("span",{class:"token statement"},[n("span",{class:"token function"},"filterExpand"),s(),n("span",{class:"token flag operator"},"-expand"),s(" true "),n("span",{class:"token flag operator"},"-sm"),s(),n("span",{class:"token number"},"32")]),n("span",{class:"token delimiter punctuation"},"`")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$numbOfNEdgesSelected"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token function"},"error"),s(),n("span",{class:"token string"},'"Select at least one edge before running the script."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"1 loop pattern selected   (^▽^ )."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"2 loop pattern selected   ヾ(≧▽≦*)o."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"3 loop pattern selected  （′v｀）."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"4 loop pattern selected  (p≧w≦q)."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"5 loop pattern selected （＞人＜；）."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"6 loop pattern selected  (*￣︿￣)."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"7 loop pattern selected  （＝。＝）."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"8 loop pattern selected  (。﹏。)."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"error"),s(),n("span",{class:"token string"},'"Select 8 or less edges.  ○|￣|_"'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"string"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"SelectEdges"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token code italic"},[n("span",{class:"token delimiter punctuation"},"`"),n("span",{class:"token statement"},[n("span",{class:"token function"},"window"),s(),n("span",{class:"token flag operator"},"-ex"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow")]),n("span",{class:"token delimiter punctuation"},"`")]),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"deleteUI"),s(),n("span",{class:"token flag operator"},"-window"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token code italic"},[n("span",{class:"token delimiter punctuation"},"`"),n("span",{class:"token statement"},[n("span",{class:"token function"},"window"),s(),n("span",{class:"token flag operator"},"-ex"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow")]),n("span",{class:"token delimiter punctuation"},"`")]),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"string"),s(),n("span",{class:"token variable"},"$lbWinName0"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token code italic"},[n("span",{class:"token delimiter punctuation"},"`"),n("span",{class:"token statement"},[n("span",{class:"token function"},"window"),s(`
                                `),n("span",{class:"token flag operator"},"-tlb"),s(),n("span",{class:"token number"},"1"),s(`
                                `),n("span",{class:"token flag operator"},"-bgc"),s(),n("span",{class:"token number"},".25"),s(),n("span",{class:"token number"},".25"),s(),n("span",{class:"token number"},".25"),s(`
                                `),n("span",{class:"token variable"},"$SelectEdgeswindow")]),n("span",{class:"token delimiter punctuation"},"`")]),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token function"},"columnLayout"),s(),n("span",{class:"token flag operator"},"-adjustableColumn"),s(" true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"text"),s(),n("span",{class:"token flag operator"},"-label"),s(),n("span",{class:"token string"},'"选边-或多边-点执行"'),s(),n("span",{class:"token flag operator"},"-h"),s(),n("span",{class:"token number"},"50"),s(),n("span",{class:"token flag operator"},"-w"),s(),n("span",{class:"token number"},"150"),s(),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"button"),s(),n("span",{class:"token flag operator"},"-label"),s(),n("span",{class:"token string"},'"执行"'),s(),n("span",{class:"token flag operator"},"-command"),s(),n("span",{class:"token string"},'"selectEdges"'),s(),n("span",{class:"token flag operator"},"-bgc"),s(),n("span",{class:"token number"},".80"),s(),n("span",{class:"token number"},".60"),s(),n("span",{class:"token number"},".50"),s(),n("span",{class:"token punctuation"},";"),s(`


`),n("span",{class:"token function"},"setParent"),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"showWindow"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(v,g){const a=u("CodeTabs");return r(),c("div",null,[d,i(" more "),p(a,{id:"3",data:[{id:"mel"}],"tab-id":"shell"},{title0:e(({value:t,isActive:o})=>[s("mel")]),tab0:e(({value:t,isActive:o})=>[m]),_:1})])}const w=l(k,[["render",b],["__file","selectEdges.html.vue"]]),E=JSON.parse('{"path":"/posts/maya/selectEdges.html","title":"Maya-SelectEdges","lang":"zh-CN","frontmatter":{"title":"Maya-SelectEdges","icon":"iconfont alicon-maya1","category":["maya"],"tag":["maya","tool"],"date":"2023-12-02T00:00:00.000Z","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/maya/selectEdges.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Maya-SelectEdges"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T09:07:27.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"maya"}],["meta",{"property":"article:tag","content":"tool"}],["meta",{"property":"article:published_time","content":"2023-12-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T09:07:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maya-SelectEdges\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-15T09:07:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[],"git":{"createdTime":1711204216000,"updatedTime":1718442447000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":3}]},"filePathRelative":"posts/maya/selectEdges.md","localizedDate":"2023年12月2日","excerpt":"<div class=\\"image-preview\\">\\n  <img src=\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png\\" style=\\"width: 25% !important;\\">\\n</div>\\n"}');export{w as comp,E as data};
