import{u as N,g as te,h as se,i as $,j as ae,P as re,t as le,k as ne,l as D,m as P,n as ie,p as I,q as s,s as oe,R as M,v as ue,x as he,y as ce,C as me,z as pe,A as de,B as ye,D as ve,E as ge,F as ke,G as fe,H as O,I as T,J as be,K as C,L as xe}from"./app-RXuAIlGf.js";const we=["/Friends.html","/","/about.html","/about2.html","/intro.html","/log.html","/demo/","/engine/","/posts/","/server/","/demo/vuepress/mdNotes.html","/demo/vuepress/page.html","/demo/vuepress/vuepressdebug.html","/engine/unreal/BSP.html","/engine/unreal/unreal.html","/engine/unreal/unrealtips.html","/posts/3dmax/MaxNotes.html","/posts/3dmax/Maxscript101.html","/posts/3dmax/MaxscriptLearn.html","/posts/Cinema4D/C4DBP.html","/posts/Perforce/P4checTips.html","/posts/Perforce/P4ignore.html","/posts/Perforce/PerforceCmd.html","/posts/Perforce/PerforceSet.html","/posts/Substance/SPAOBake.html","/posts/maya/ErrorOpenNewFileMaya.html","/posts/maya/MayaChecklist.html","/posts/maya/MayaNotes.html","/posts/maya/PythonLearn.html","/posts/maya/Pythonwindow.html","/posts/maya/UVzTool.html","/posts/maya/mayacanotdesktop.html","/posts/maya/mayaspeed.html","/posts/maya/melLearn.html","/posts/maya/py2_3.html","/posts/maya/reset_Camera.html","/posts/maya/selectEdges.html","/posts/other/other.html","/posts/zbrush/ZbrushToPs.html","/posts/zbrush/pathset.html","/posts/zbrush/zbrushtips.html","/server/app/COS_Piclist.html","/server/app/GitHubActions.html","/server/app/WindowsWeb.html","/server/app/gallery.html","/server/app/lankong.html","/server/app/windowstips.html","/server/docker/NPS_NPM.html","/server/docker/Portainer.html","/server/docker/docker.html","/server/docker/dockermirror.html","/server/docker/linux.html","/server/docker/linuxSL.html","/server/docker/mariadb.html","/engine/unity/C_sharp/C_Basics.html","/engine/unity/shader/shader0.html","/engine/unity/shader/shader1.html","/engine/unity/shader/shader10.html","/engine/unity/shader/shader11.html","/engine/unity/shader/shader12.html","/engine/unity/shader/shader13.html","/engine/unity/shader/shader14.html","/engine/unity/shader/shader2.html","/engine/unity/shader/shader3.html","/engine/unity/shader/shader4.html","/engine/unity/shader/shader5.html","/engine/unity/shader/shader6.html","/engine/unity/shader/shader7.html","/engine/unity/shader/shader8.html","/engine/unity/shader/shader9.html","/404.html","/job/","/demo/vuepress/","/engine/unreal/","/posts/3dmax/","/posts/Cinema4D/","/posts/Perforce/","/posts/Substance/","/posts/maya/","/posts/other/","/posts/zbrush/","/server/app/","/server/docker/","/engine/unity/C_sharp/","/engine/unity/","/engine/unity/shader/","/category/","/category/unreal/","/category/3dmax/","/category/perforce/","/category/substance/","/category/maya/","/category/zbrush/","/category/%E5%9B%BE%E5%BA%8A/","/category/github/","/category/windows/","/category/docker/","/category/linux/","/category/shader/","/tag/","/tag/unreal/","/tag/bsp/","/tag/3dmax/","/tag/tips/","/tag/perforce/","/tag/ignore/","/tag/cloud-sever/","/tag/teams/","/tag/ue5/","/tag/substance-paint/","/tag/substance/","/tag/maya/","/tag/tool/","/tag/checklist/","/tag/python/","/tag/mayanote/","/tag/mel/","/tag/zbrush/","/tag/%E5%9B%BE%E5%BA%8A/","/tag/gallery/","/tag/github/","/tag/automation/","/tag/actions/","/tag/windows/","/tag/web/","/tag/lsky/","/tag/docker/","/tag/nas/","/tag/portainer/","/tag/linux/","/tag/mariadb/","/tag/adminer/","/tag/mysql/","/tag/shader/","/tag/unity/","/article/","/star/","/timeline/"],He="SEARCH_PRO_QUERY_HISTORY",g=N(He,[]),Pe=()=>{const{queryHistoryCount:a}=C,r=a>0;return{enabled:r,queryHistory:g,addQueryHistory:l=>{r&&(g.value=Array.from(new Set([l,...g.value.slice(0,a-1)])))},removeQueryHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},B=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),Ce="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=C,k=N(Ce,[]),Re=()=>{const a=j>0;return{enabled:a,resultHistory:k,addResultHistory:r=>{if(a){const l={link:B(r),display:r.display};"header"in r&&(l.header=r.header),k.value=[l,...k.value.slice(0,j-1)]}},removeResultHistory:r=>{k.value=[...k.value.slice(0,r),...k.value.slice(r+1)]}}},Se=a=>{const r=me(),l=$(),R=pe(),i=D(0),x=P(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:S}=ve(),f=be(h=>{const b=h.join(" "),{searchFilter:Q=p=>p,splitWord:q,suggestionsFilter:_,...v}=r.value;b?(i.value+=1,y(h.join(" "),l.value,v).then(p=>Q(p,b,l.value,R.value)).then(p=>{i.value-=1,d.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(d.value=[])})):d.value=[]},C.searchDelay-C.suggestDelay);I([a,l],([h])=>f(h),{immediate:!0}),ge(()=>{S()})}),{isSearching:x,results:d}};var qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:r}){const l=se(),R=$(),i=ae(re),{enabled:x,addQueryHistory:d,queryHistory:y,removeQueryHistory:S}=Pe(),{enabled:f,resultHistory:h,addResultHistory:b,removeResultHistory:Q}=Re(),q=x||f,_=le(a,"queries"),{results:v,isSearching:p}=Se(_),n=ne({isQuery:!0,index:0}),c=D(0),m=D(0),z=P(()=>q&&(y.value.length>0||h.value.length>0)),E=P(()=>v.value.length>0),L=P(()=>v.value[c.value]||null),U=()=>{const{isQuery:e,index:t}=n;t===0?(n.isQuery=!e,n.index=e?h.value.length-1:y.value.length-1):n.index=t-1},Y=()=>{const{isQuery:e,index:t}=n;t===(e?y.value.length-1:h.value.length-1)?(n.isQuery=!e,n.index=0):n.index=t+1},G=()=>{c.value=c.value>0?c.value-1:v.value.length-1,m.value=L.value.contents.length-1},V=()=>{c.value=c.value<v.value.length-1?c.value+1:0,m.value=0},W=()=>{m.value<L.value.contents.length-1?m.value+=1:V()},J=()=>{m.value>0?m.value-=1:G()},A=e=>e.map(t=>xe(t)?t:s(t[0],t[1])),K=e=>{if(e.type==="customField"){const t=ke[e.index]||"$content",[o,H=""]=fe(t)?t[R.value].split("$content"):t.split("$content");return e.display.map(u=>s("div",A([o,...u,H])))}return e.display.map(t=>s("div",A(t)))},w=()=>{c.value=0,m.value=0,r("updateQuery",""),r("close")},Z=()=>x?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:n.isQuery&&n.index===t}],onClick:()=>{r("updateQuery",e)}},[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(t)}})]))])):null,X=()=>f?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),h.value.map((e,t)=>s(M,{to:e.link,class:["search-pro-result-item",{active:!n.isQuery&&n.index===t}],onClick:()=>{w()}},()=>[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(o=>A(o)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:T,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(t)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(E.value){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")W();else if(e.key==="Enter"){const t=L.value.contents[m.value];d(a.queries.join(" ")),b(t),l.push(B(t)),w()}}else if(f){if(e.key==="ArrowUp")U();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:t}=n;n.isQuery?(r("updateQuery",y.value[t]),e.preventDefault()):(l.push(h.value[t].link),w())}}}}),I([c,m],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!E.value:!z.value}],id:"search-pro-results"},a.queries.length?p.value?s(oe,{hint:i.value.searching}):E.value?s("ul",{class:"search-pro-result-list"},v.value.map(({title:e,contents:t},o)=>{const H=c.value===o;return s("li",{class:["search-pro-result-list-item",{active:H}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((u,ee)=>{const F=H&&m.value===ee;return s(M,{to:B(u),class:["search-pro-result-item",{active:F,"aria-selected":F}],onClick:()=>{d(a.queries.join(" ")),b(u),w()}},()=>[u.type==="text"?null:s(u.type==="title"?ue:u.type==="heading"?he:ce,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?s("div",{class:"content-header"},u.header):null,s("div",K(u))])])})])})):i.value.emptyResult:q?z.value?[Z(),X()]:i.value.emptyHistory:i.value.emptyResult)}});export{qe as default};
