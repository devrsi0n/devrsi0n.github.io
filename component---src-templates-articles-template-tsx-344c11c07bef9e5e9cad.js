(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+utQ":function(t){t.exports=JSON.parse('{"data":{"site":{"edges":[{"node":{"id":"Site","siteMetadata":{"hero":{"heading":"I build software for humans.","maxWidth":652}}}}]}}}')},"C/pb":function(t,e,r){"use strict";r.r(e);var n=r("wTIg"),a=r("q1tI"),o=r.n(a),i=r("ijqZ"),l=r("ytpH"),c=r("Ng2+"),s=(r("a1Th"),r("rE2o"),r("ioFf"),r("rGqo"),r("T39b"),r("qKvR")),u=r("Wbzz"),d=r("TJpk"),p=r("2yN9"),h=r("0lfv");function b(){var t=x(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "]);return b=function(){return t},t}function g(){var t=x(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "]);return g=function(){return t},t}function f(){var t=x(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]);return f=function(){return t},t}function x(t,e){return e||(e=t.slice(0)),t.raw=e,t}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}class v extends a.Component{constructor(){super(...arguments),this.maxPages=3,this.count=this.props.pageCount,this.current=this.props.index,this.pageRoot=this.props.pathPrefix,this.getFullPath=t=>"/"===this.pageRoot?1===t?this.pageRoot:this.pageRoot+"page/"+t:1===t?this.pageRoot:this.pageRoot+"/page/"+t}get nextPath(){return this.getFullPath(this.current+1)}get previousPath(){return this.getFullPath(this.current-1)}get getPageLinks(){var t=this.current,e=this.count,r=this.maxPages,n=1===t?t:t-1,a=Object(h.i)(n,e+1-n),o=a.slice(0,r);return a[0]>2&&o.unshift(null),a[0]>1&&o.unshift(1),a[0]+1===e&&a[0]-1>0&&o.splice(a.length-1-r,0,a[0]-1),a[0]+r<e&&o.push(null),a[0]+r-1<e&&o.push(e),m(new Set(o)).map(e=>null===e?Object(s.d)(k,{key:"PaginatorPage_spacer_"+e,"aria-hidden":!0}):Object(s.d)(O,{key:"PaginatorPage_"+e,to:this.getFullPath(e),style:{opacity:t===e?1:.3},className:"Paginator__pageLink"},e))}render(){var t=this.count,e=this.current;if(t<=1)return null;var r=this.previousPath,n=this.nextPath,a=this.current<this.count,i=this.current>1;return Object(s.d)(o.a.Fragment,null,Object(s.d)(d.Helmet,null,i&&Object(s.d)("link",{rel:"prev",href:r}),a&&Object(s.d)("link",{rel:"next",href:n})),Object(s.d)(z,null,i&&Object(s.d)(j,{to:r},"上一页"),this.getPageLinks,Object(s.d)(L,{"aria-hidden":"true"},Object(s.d)("em",null,e)," o / ",t),a&&Object(s.d)(j,{to:n},"下一页")))}}var w=v,y=t=>Object(s.c)("line-height:1;color:",t.theme.colors.primary,";padding:0;width:6.8rem;height:6.8rem;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;",p.a.desktop_up(f())),j=Object(n.a)(u.Link,{target:"eek34jz0"})("font-weight:600;font-size:18px;text-decoration:none;color:",t=>t.theme.colors.primary,";",y," &:hover,&:focus{opacity:1;text-decoration:underline;}"),O=Object(n.a)(u.Link,{target:"eek34jz1"})("font-weight:400;font-size:18px;text-decoration:none;color:",t=>t.theme.colors.primary,";",y," &:hover,&:focus{opacity:1;text-decoration:underline;}"),k=Object(n.a)("span",{target:"eek34jz2"})("opacity:0.3;",y," &::before{content:'...';}"),L=Object(n.a)("span",{target:"eek34jz3"})("font-weight:400;",y," color:",t=>t.theme.colors.primary,";em{font-style:normal;color:",t=>t.theme.colors.primary,";}"),z=Object(n.a)("nav",{target:"eek34jz4"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",p.a.tablet(g(),k)," ",p.a.desktop_up(b(),L)),P=r("+utQ"),S=r("CvMP");var _=function(t){var e=t.author;return Object(s.d)(A,null,Object(s.d)(q,{as:e.authorsPage?u.Link:"div",to:e.slug,"data-a11y":"false","aria-label":"Author's bio"},Object(s.d)(C,null,Object(s.d)(S.c,{src:e.avatar.medium}))),Object(s.d)(T,{dangerouslySetInnerHTML:{__html:e.bio}}))},A=Object(n.a)("div",{target:"e16746q20"})({name:"3j1lrl",styles:"display:flex;align-items:center;position:relative;left:-10px;"}),q=Object(n.a)("div",{target:"e16746q21"})("display:block;position:relative;height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;margin:10px 26px 10px 10px;&::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border-radius:50%;border:1px solid rgba(0,0,0,0.25);}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border:2px solid ",t=>t.theme.colors.accent,";}"),C=Object(n.a)("div",{target:"e16746q22"})({name:"1ecqw02",styles:"height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.025);margin-right:16px;overflow:hidden;"}),T=Object(n.a)("p",{target:"e16746q23"})("max-width:430px;font-size:14px;line-height:1.45;color:",t=>t.theme.colors.grey,";"),R=r("5oGM"),I=r("eYrS");function M(){var t=D(["\n    font-size: 32px;\n  "]);return M=function(){return t},t}function F(){var t=D(["\n    font-size: 38px\n  "]);return F=function(){return t},t}function G(){var t=D(["\n    width: 100%;\n  "]);return G=function(){return t},t}function H(){var t=D(["\n    width: 80%;\n  "]);return H=function(){return t},t}function N(){var t=D(["\n    display: none;\n  "]);return N=function(){return t},t}function E(){var t=D(["\n    display: none;\n  "]);return E=function(){return t},t}function J(){var t=D(["\n    margin-bottom: 60px;\n  "]);return J=function(){return t},t}function W(){var t=D(["\n    margin-bottom: 80px;\n  "]);return W=function(){return t},t}function D(t,e){return e||(e=t.slice(0)),t.raw=e,t}var Y=function(t){var e=t.authors,r=Object(a.useContext)(I.a),n=r.gridLayout,o=void 0===n?"tiles":n,l=r.hasSetGridLayout,c=r.setGridLayout,u=P.data.site.edges[0].node.siteMetadata.hero,d=l&&"tiles"===o,p=e.find(t=>t.featured);if(!p)throw new Error("\n      No featured Author found.\n      Please ensure you have at least featured Author.\n  ");return Object(s.d)(i.a,{id:"Articles__Hero"},Object(s.d)(Z,{style:{maxWidth:u.maxWidth+"px"}},Object(s.d)(B,{dangerouslySetInnerHTML:{__html:u.heading}})),Object(s.d)(Q,null,Object(s.d)(_,{author:p}),Object(s.d)(K,null,Object(s.d)(U,{onClick:()=>c("tiles"),active:d,"data-a11y":"false",title:"Show articles in Tile grid","aria-label":"Show articles in Tile grid"},Object(s.d)(R.a.Tiles,null)),Object(s.d)(U,{onClick:()=>c("rows"),active:!d,"data-a11y":"false",title:"Show articles in Row grid","aria-label":"Show articles in Row grid"},Object(s.d)(R.a.Rows,null)))))},Q=Object(n.a)("div",{target:"e1h88k0n0"})("display:flex;align-items:center;justify-content:space-between;margin-bottom:100px;",p.a.desktop(W()),";",p.a.tablet(J()),";",p.a.phablet(E()),";"),K=Object(n.a)("div",{target:"e1h88k0n1"})("display:flex;align-items:center;",p.a.tablet(N()),";"),Z=Object(n.a)("div",{target:"e1h88k0n2"})("margin:100px 0;",p.a.desktop(H())," ",p.a.tablet(G())),B=Object(n.a)("h1",{target:"e1h88k0n3"})("font-style:normal;font-weight:600;font-size:52px;line-height:1.15;color:",t=>t.theme.colors.primary,";a{color:",t=>t.theme.colors.accent,";}",p.a.desktop(F())," ",p.a.phablet(M())),U=Object(n.a)("button",{target:"e1h88k0n4"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",t=>t.theme.colors.hover,";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",t=>t.theme.colors.accent,";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",t=>t.active?1:.25,";transition:opacity 0.2s;path{fill:",t=>t.theme.colors.primary,";}}"),V=r("zIkO");function X(){var t=ft(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "]);return X=function(){return t},t}function $(){var t=ft(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "]);return $=function(){return t},t}function tt(){var t=ft(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]);return tt=function(){return t},t}function et(){var t=ft(["\n    margin-bottom; 15px;\n  "]);return et=function(){return t},t}function rt(){var t=ft(["\n    display: -webkit-box;\n  "]);return rt=function(){return t},t}function nt(){var t=ft(["\n    font-size: 22px;\n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]);return nt=function(){return t},t}function at(){var t=ft(["\n    font-size: 24px;\n  "]);return at=function(){return t},t}function ot(){var t=ft(["\n    margin-bottom: 15px;\n  "]);return ot=function(){return t},t}function it(){var t=ft(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "]);return it=function(){return t},t}function lt(){var t=ft(["\n    height: 200px;\n    margin-bottom: 35px;\n  "]);return lt=function(){return t},t}function ct(){var t=ft(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return ct=function(){return t},t}function st(){var t=ft(["\n    margin-bottom: 60px;\n  "]);return st=function(){return t},t}function ut(){var t=ft(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return ut=function(){return t},t}function dt(){var t=ft(["\n    grid-template-columns: 1fr;\n  "]);return dt=function(){return t},t}function pt(){var t=ft(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "]);return pt=function(){return t},t}function ht(){var t=ft(["\n    grid-template-columns: 1fr;\n\n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]);return ht=function(){return t},t}function bt(){var t=ft(["\n    grid-template-columns: 1fr 1fr;\n  "]);return bt=function(){return t},t}function gt(){var t=ft(["\n    -webkit-line-clamp: 3;\n  "]);return gt=function(){return t},t}function ft(t,e){return e||(e=t.slice(0)),t.raw=e,t}function xt(t){var e=t.articles,r=t.alwaysShowAllDetails,n=Object(a.useContext)(I.a),o=n.gridLayout,i=void 0===o?"tiles":o,l=n.hasSetGridLayout,c=n.getGridLayout;if(Object(a.useEffect)(()=>c(),[c]),!e)return null;var u=1===e.length,d=e.reduce((t,e,r,n)=>(r%2==0&&t.push(n.slice(r,r+2)),t),[]);return Object(s.d)(yt,{style:{opacity:l?1:0},alwaysShowAllDetails:r},d.map((t,e)=>{var r=e%2!=0,n=e%2!=1;return Object(s.d)(zt,{key:e,gridLayout:i,hasOnlyOneArticle:u,reverse:r},Object(s.d)(mt,{article:t[0],narrow:r}),Object(s.d)(mt,{article:t[1],narrow:n}))}))}var mt=t=>{var e=t.article,r=t.narrow,n=Object(a.useContext)(I.a).gridLayout;if(!e)return null;var o=r&&e.title.length>35,i=r?e.hero.narrow:e.hero.regular,l=i&&0!==Object.keys(i).length&&i.constructor===Object;return Object(s.d)(Ct,{to:e.slug,"data-a11y":"false"},Object(s.d)(Pt,{gridLayout:n},Object(s.d)(St,{narrow:r,gridLayout:n},l?Object(s.d)(S.c,{src:i}):Object(s.d)(S.a,null)),Object(s.d)("div",null,Object(s.d)(_t,{dark:!0,hasOverflow:o,gridLayout:n},e.secret?e.title+" 🚧":e.title),Object(s.d)(At,{narrow:r,hasOverflow:o,gridLayout:n},e.excerpt),Object(s.d)(qt,null,e.date))))},vt=Object(s.c)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;",p.a.phablet(gt())),wt={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},yt=Object(n.a)("div",{target:"e19rvdil0"})("transition:opacity 0.25s;",t=>t.alwaysShowAllDetails&&wt),jt=t=>Object(s.c)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:75px;}",p.a.desktop_medium(bt())," ",p.a.tablet(ht())),Ot=t=>Object(s.c)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 488px;grid-column-gap:96px;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",p.a.desktop(pt())," ",p.a.tablet(dt())," @media (max-width:540px){background:",t.theme.colors.card,";}",p.a.phablet(ut())),kt=t=>Object(s.c)("position:relative;",p.a.tablet(st())," @media (max-width:540px){background:",t.theme.colors.card,";}",p.a.phablet(ct())),Lt=t=>Object(s.c)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";"),zt=Object(n.a)("div",{target:"e19rvdil1"})(t=>"tiles"===t.gridLayout?jt:Lt),Pt=Object(n.a)("div",{target:"e19rvdil2"})(t=>"rows"===t.gridLayout?Ot:kt),St=Object(n.a)("div",{target:"e19rvdil3"})("position:relative;height:",t=>"tiles"===t.gridLayout?"280px":"220px",";box-shadow:0 30px 60px -10px rgba(0,0,0,",t=>t.narrow?.22:.3,"),0 18px 36px -18px rgba(0,0,0,",t=>t.narrow?.25:.33,");margin-bottom:",t=>"tiles"===t.gridLayout?"30px":0,";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",p.a.tablet(lt())," ",p.a.phablet(it())),_t=Object(n.a)(V.a.h2,{target:"e19rvdil4"})("font-size:21px;font-family:",t=>t.theme.fonts.serif,";margin-bottom:",t=>t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px",";transition:color 0.3s ease-in-out;",vt,";",p.a.desktop(ot())," ",p.a.tablet(at())," ",p.a.phablet(nt())),At=Object(n.a)("p",{target:"e19rvdil5"})(vt,";font-size:16px;margin-bottom:10px;color:",t=>t.theme.colors.grey,";display:",t=>t.hasOverflow&&"tiles"===t.gridLayout?"none":"box",";max-width:",t=>t.narrow?"415px":"515px",";",p.a.desktop(rt())," ",p.a.phablet(et())," ",p.a.phablet(tt())),qt=Object(n.a)("div",{target:"e19rvdil6"})("font-weight:600;font-size:16px;color:",t=>t.theme.colors.grey,";opacity:0.33;",p.a.phablet($())),Ct=Object(n.a)(u.Link,{target:"e19rvdil7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",St,",&:focus ",St,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",t=>t.theme.colors.accent,";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",t=>t.theme.colors.accent,";background:rgba(255,255,255,0.01);border-radius:5px;}",p.a.phablet(X(),St));e.default=function(t){var e=t.location,r=t.pageContext,n=r.group,a=r.additionalContext.authors;return Object(s.d)(c.a,null,Object(s.d)(l.a,{pathname:e.pathname}),Object(s.d)(Y,{authors:a}),Object(s.d)(i.a,{narrow:!0},Object(s.d)(xt,{articles:n}),Object(s.d)(Rt,{show:r.pageCount>1},Object(s.d)(w,r))),Object(s.d)(Tt,null))};var Tt=Object(n.a)("div",{target:"e1nfntr40"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",t=>t.theme.colors.gradient,";transition:",t=>t.theme.colorModeTransition,";"),Rt=Object(n.a)("div",{target:"e1nfntr41"})(t=>t.show&&"margin-top: 95px;")}}]);