"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8198],{33494:function(U,D,e){e.d(D,{FN:function(){return o},WF:function(){return E}});var M=e(5574),_=e.n(M),c=e(67294);function T(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}function i(d){if(typeof window!="undefined"){var t=document.createElement("div");t.style.display="none",document.body.appendChild(t),d.forEach(function(b){var f=new Image;f.src=b,t.appendChild(f)})}}function E(){var d=c.useState({}),t=_()(d,2),b=t[0],f=t[1],C=c.useState(!1),p=_()(C,2),u=p[0],n=p[1];return c.useEffect(function(){Object.keys(b!=null?b:{}).length===0&&typeof fetch!="undefined"&&(n(!0),fetch("https://render.alipay.com/p/h5data/antd4-config_website-h5data.json").then(function(l){return l.json()}).then(function(l){f(l),n(!1)}))},[]),[b,u]}var a={name:"pe4q6k",styles:".slick-dots.slick-dots-bottom{bottom:-22px;li{width:6px;height:6px;background:#e1eeff;border-radius:50%;button{height:6px;background:#e1eeff;border-radius:50%;}&.slick-active{background:#4b9cff;button{background:#4b9cff;}}}}"},o=function(){return{carousel:a}}},74399:function(U,D,e){var M=e(67294),_=function(){return ___EmotionJSX(React.Fragment,null,"API Table")},c=null},2068:function(U,D,e){var M=e(67333),_=e.n(M),c=e(97857),T=e.n(c),i=e(13769),E=e.n(i),a=e(13669),o=e(67294),d=e(96923),t=["style"],b=function(C){var p=C.style,u=E()(C,t);return(0,d.tZ)(a.Alert,_()({},u,{style:T()({margin:"24px 0"},p)}))};D.Z=b},63942:function(U,D,e){var M=e(67294),_=e(10274),c=e(96923),T=e(52180),i=function(){var o=(0,T.Z)(),d=o.token;return{codeSpan:(0,c.iv)("padding:0.2em 0.4em;font-size:0.9em;background:",d.siteMarkdownCodeBg,";border-radius:",d.borderRadius,"px;font-family:monospace;",""),dot:(0,c.iv)("display:inline-block;width:6px;height:6px;border-radius:",d.borderRadiusSM,"px;margin-right:4px;border:1px solid ",d.colorSplit,";","")}},E=function(o){var d=i(),t=o.color,b=o.children,f=M.useMemo(function(){var C=new _.C(t).toHex8String();return C.endsWith("ff")?C.slice(0,-2):C},[t]);return(0,c.tZ)("span",{css:d.codeSpan},(0,c.tZ)("span",{css:d.dot,style:{backgroundColor:f}}),b!=null?b:f)};D.Z=E},24628:function(U,D,e){e.d(D,{Z:function(){return f}});var M=e(5574),_=e.n(M),c=e(67294),T=e(28257),i=e(34081),E=e(37472),a=e(96923),o=70,d=70,t=function(){var p=(0,c.useState)("#1890ff"),u=_()(p,2),n=u[0],l=u[1],r=(0,c.useState)(null),S=_()(r,2),g=S[0],v=S[1],x=function(m,Z){var s=m.target?m.target.value:m;l(s),v(Z)},A=(0,c.useMemo)(function(){var y="";return g&&(g.hsv.s*100<o&&(y+=" \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(o,"\uFF08\u73B0\u5728 ").concat((g.hsv.s*100).toFixed(2),"\uFF09")),g.hsv.v*100<d&&(y+=" \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(d,"\uFF08\u73B0\u5728 ").concat((g.hsv.v*100).toFixed(2),"\uFF09"))),(0,a.tZ)("span",{className:"color-palette-picker-validation"},y.trim())},[g,o,d]);return(0,a.tZ)("div",{className:"color-palette-horizontal"},(0,a.tZ)("div",{className:"color-palette-pick"},(0,a.tZ)(T._H,{id:"app.docs.color.pick-primary"})),(0,a.tZ)("div",{className:"main-color"},(0,E.Z)({color:n})),(0,a.tZ)("div",{className:"color-palette-picker"},(0,a.tZ)("span",{style:{display:"inline-block",verticalAlign:"middle"}},(0,a.tZ)(i.Z,{color:n,onChange:x})),(0,a.tZ)("span",{className:"color-palette-picker-value"},n),A))},b=t,f=b},19260:function(U,D,e){e.d(D,{Z:function(){return C}});var M=e(5574),_=e.n(M),c=e(67294),T=e(28257),i=e(13669),E=e(34081),a=e(37472),o=e(96923),d=70,t=70,b=function(){var u=(0,c.useState)("#1890ff"),n=_()(u,2),l=n[0],r=n[1],S=(0,c.useState)("#141414"),g=_()(S,2),v=g[0],x=g[1],A=(0,c.useState)(null),y=_()(A,2),m=y[0],Z=y[1],s=function(O,I){var K=O.target?O.target.value:O;r(K),Z(I)},P=function(O){var I=O.target?O.target.value:O;x(I)},R=(0,c.useMemo)(function(){var B="";return m&&(m.hsv.s*100<d&&(B+=" \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(d,"\uFF08\u73B0\u5728 ").concat((m.hsv.s*100).toFixed(2),"\uFF09")),m.hsv.v*100<t&&(B+=" \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(t,"\uFF08\u73B0\u5728 ").concat((m.hsv.v*100).toFixed(2),"\uFF09"))),(0,o.tZ)("span",{className:"color-palette-picker-validation color-palette-picker-validation-dark"},B.trim())},[m]);return(0,o.tZ)("div",{className:"color-palette-horizontal color-palette-horizontal-dark"},(0,o.tZ)("div",{className:"main-color"},(0,a.Z)({color:l,dark:!0,backgroundColor:v})),(0,o.tZ)("div",{className:"color-palette-picker"},(0,o.tZ)(i.Row,null,(0,o.tZ)(i.Col,{span:12},(0,o.tZ)("div",{className:"color-palette-pick"},(0,o.tZ)(T._H,{id:"app.docs.color.pick-primary"})),(0,o.tZ)("span",{style:{display:"inline-block",verticalAlign:"middle"}},(0,o.tZ)(i.Row,null,(0,o.tZ)(i.Col,{span:18},(0,o.tZ)(E.Z,{color:l,onChange:s})),(0,o.tZ)(i.Col,{span:6},(0,o.tZ)("span",{className:"color-palette-pick-hex"},l))))),(0,o.tZ)(i.Col,{span:12},(0,o.tZ)("div",{className:"color-palette-pick"},(0,o.tZ)(T._H,{id:"app.docs.color.pick-background"})),(0,o.tZ)("span",{style:{display:"inline-block",verticalAlign:"middle"}},(0,o.tZ)(i.Row,null,(0,o.tZ)(i.Col,{span:18},(0,o.tZ)(E.Z,{color:v,onChange:P})),(0,o.tZ)(i.Col,{span:6},(0,o.tZ)("span",{className:"color-palette-pick-hex"},v)))))),R))},f=b,C=f},16073:function(U,D,e){e.d(D,{Z:function(){return d}});var M=e(67294),_=e(94184),c=e.n(_),T=e(63379),i=e(96923),E=[{name:"red",english:"Dust Red",chinese:"\u8584\u66AE",description:"\u6597\u5FD7\u3001\u5954\u653E"},{name:"volcano",english:"Volcano",chinese:"\u706B\u5C71",description:"\u9192\u76EE\u3001\u6F8E\u6E43"},{name:"orange",english:"Sunset Orange",chinese:"\u65E5\u66AE",description:"\u6E29\u6696\u3001\u6B22\u5FEB"},{name:"gold",english:"Calendula Gold",chinese:"\u91D1\u76CF\u82B1",description:"\u6D3B\u529B\u3001\u79EF\u6781"},{name:"yellow",english:"Sunrise Yellow",chinese:"\u65E5\u51FA",description:"\u51FA\u751F\u3001\u9633\u5149"},{name:"lime",english:"Lime",chinese:"\u9752\u67E0",description:"\u81EA\u7136\u3001\u751F\u673A"},{name:"green",english:"Polar Green",chinese:"\u6781\u5149\u7EFF",description:"\u5065\u5EB7\u3001\u521B\u65B0"},{name:"cyan",english:"Cyan",chinese:"\u660E\u9752",description:"\u5E0C\u671B\u3001\u575A\u5F3A"},{name:"blue",english:"Daybreak Blue",chinese:"\u62C2\u6653\u84DD",description:"\u5305\u5BB9\u3001\u79D1\u6280\u3001\u666E\u60E0"},{name:"geekblue",english:"Geek Blue",chinese:"\u6781\u5BA2\u84DD",description:"\u63A2\u7D22\u3001\u94BB\u7814"},{name:"purple",english:"Golden Purple",chinese:"\u9171\u7D2B",description:"\u4F18\u96C5\u3001\u6D6A\u6F2B"},{name:"magenta",english:"Magenta",chinese:"\u6CD5\u5F0F\u6D0B\u7EA2",description:"\u660E\u5FEB\u3001\u611F\u6027"}],a=function(b){var f=b.dark,C=c()("color-palettes",{"color-palettes-dark":!!f});return(0,i.tZ)("div",{className:C},E.map(function(p){return(0,i.tZ)(T.Z,{key:p.name,color:p,dark:f,showTitle:!0})}))},o=a,d=o},56140:function(U,D,e){e.d(D,{Z:function(){return m}});var M=e(97857),_=e.n(M),c=e(5574),T=e.n(c),i=e(67294),E=e(28257),a=e(96923),o=e(23279),d=e.n(o),t=e(13669),b=e(68795),f=[{cover:"https://gw.alipayobjects.com/zos/antfincdn/4n5H%24UX%24j/bianzu%2525204.svg",link:"https://procomponents.ant.design/components/layout",subtitle:"\u9AD8\u7EA7\u5E03\u5C40",title:"ProLayout",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/mStei5BFC/bianzu%2525207.svg",link:"https://procomponents.ant.design/components/form",subtitle:"\u9AD8\u7EA7\u8868\u5355",title:"ProForm",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg",link:"https://procomponents.ant.design/components/table",subtitle:"\u9AD8\u7EA7\u8868\u683C",title:"ProTable",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/H0%26LSYYfh/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/descriptions",subtitle:"\u9AD8\u7EA7\u5B9A\u4E49\u5217\u8868",title:"ProDescriptions",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/uZUmLtne5/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/list",subtitle:"\u9AD8\u7EA7\u5217\u8868",title:"ProList",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/N3eU432oA/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/editable-table",subtitle:"\u53EF\u7F16\u8F91\u8868\u683C",title:"EditableProTable",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"}],C=f,p=e(52180);function u(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var n={name:"l0aeht",styles:"cursor:pointer;transition:all 0.5s;&:hover{box-shadow:0 6px 16px -8px #00000014,0 9px 28px #0000000d,0 12px 48px 16px #00000008;}"},l={name:"eyizcg",styles:"display:flex;align-items:center;justify-content:center;height:152px"},r={name:"smln73",styles:"margin-bottom:24px!important"},S={name:"1hcx8jb",styles:"padding:0"},g=function(){var s=(0,p.Z)(),P=s.token;return{componentsOverview:S,componentsOverviewGroupTitle:r,componentsOverviewTitle:(0,a.iv)("overflow:hidden;color:",P.colorTextHeading,";text-overflow:ellipsis;",""),componentsOverviewImg:l,componentsOverviewCard:n,componentsOverviewSearch:(0,a.iv)("font-size:",P.fontSizeXL,"px;","")}},v=function(s){window.gtag&&window.gtag("event","\u70B9\u51FB",{event_category:"\u7EC4\u4EF6\u603B\u89C8\u5361\u7247",event_label:s})},x=d()(function(Z){window.gtag&&window.gtag("event","\u641C\u7D22",{event_category:"\u7EC4\u4EF6\u603B\u89C8\u5361\u7247",event_label:Z})},2e3),A=t.Typography.Title,y=function(){var s=g(),P=(0,E.tx)(),R=(0,E.TH)(),B=R.search,O=(0,E.YB)(),I=O.locale,K=O.formatMessage,H=(0,i.useState)(""),F=T()(H,2),X=F[0],oe=F[1],V=i.useRef(null),z=function(w){if(w.keyCode===13&&X.trim().length){var N,h;(N=V.current)===null||N===void 0||(h=N.querySelector(".components-overview-card"))===null||h===void 0||h.click()}},W=(0,i.useMemo)(function(){return P.filter(function(L){return L==null?void 0:L.title}).map(function(L){return{title:L==null?void 0:L.title,children:L.children.map(function(w){var N;return{title:(N=w.frontmatter)===null||N===void 0?void 0:N.title,subtitle:w.frontmatter.subtitle,cover:w.frontmatter.cover,link:w.link}})}}).concat([{title:I==="zh-CN"?"\u91CD\u578B\u7EC4\u4EF6":"Others",children:I==="zh-CN"?C:C.map(function(L){return _()(_()({},L),{},{subtitle:""})})}])},[P,I]);return(0,a.tZ)("section",{className:"markdown",ref:V},(0,a.tZ)(t.Divider,null),(0,a.tZ)(t.Input,{value:X,placeholder:K({id:"app.components.overview.search"}),css:s.componentsOverviewSearch,onChange:function(w){oe(w.target.value),x(w.target.value)},onKeyDown:z,bordered:!1,autoFocus:!0,suffix:(0,a.tZ)(b.Z,null)}),(0,a.tZ)(t.Divider,null),W.filter(function(L){return L==null?void 0:L.title}).map(function(L){var w,N=L==null||(w=L.children)===null||w===void 0?void 0:w.filter(function(h){var k,j;return!X.trim()||(h==null||(k=h.title)===null||k===void 0||(j=k.toLowerCase())===null||j===void 0?void 0:j.includes(X.trim().toLowerCase()))||((h==null?void 0:h.subtitle)||"").toLowerCase().includes(X.trim().toLowerCase())});return N!=null&&N.length?(0,a.tZ)("div",{key:L==null?void 0:L.title,css:s.componentsOverview},(0,a.tZ)(A,{level:2,css:s.componentsOverviewGroupTitle},(0,a.tZ)(t.Space,{align:"center"},(0,a.tZ)("span",{style:{fontSize:24}},L==null?void 0:L.title),(0,a.tZ)(t.Tag,{style:{display:"block"}},N.length))),(0,a.tZ)(t.Row,{gutter:[24,24]},N.map(function(h){var k=h.link.startsWith("http"),j="".concat(h.link);k||(j+=B);var q=k?"a":E.rU;return(0,a.tZ)(t.Col,{xs:24,sm:12,lg:8,xl:6,key:h==null?void 0:h.title},(0,a.tZ)(q,{to:j,href:j,onClick:function(){return v(j)}},(0,a.tZ)(t.Card,{bodyStyle:{backgroundRepeat:"no-repeat",backgroundPosition:"bottom right",backgroundImage:"url(".concat((h==null?void 0:h.tag)||"",")")},size:"small",css:s.componentsOverviewCard,title:(0,a.tZ)("div",{css:s.componentsOverviewTitle},h==null?void 0:h.title," ",h.subtitle)},(0,a.tZ)("div",{css:s.componentsOverviewImg},(0,a.tZ)("img",{src:h.cover,alt:h==null?void 0:h.title})))))}))):null}))},m=(0,i.memo)(y)},5388:function(U,D,e){var M=e(97857),_=e.n(M),c=e(5574),T=e.n(c),i=e(67294),E=e(28257),a=e(13669),o=e(39020),d=e(89035),t=e(2659),b=e(37993),f=e(94184),C=e.n(f),p=e(24229),u=e(96923),n=function(r){var S=r.items,g=(0,i.useContext)(p.Z),v=g.showDebug,x=g.setShowDebug,A=(0,i.useState)(!1),y=T()(A,2),m=y[0],Z=y[1],s=C()("code-box-expand-trigger",{"code-box-expand-trigger-active":m}),P=function(){x==null||x(!v)},R=function(){Z(!m)},B=v?S:S.filter(function(I){return!I.previewerProps.debug}),O=B.map(function(I){return _()(_()({},I),{},{previewerProps:_()(_()({},I.previewerProps),{},{expand:m})})});return(0,u.tZ)("div",{className:"demo-wrapper"},(0,u.tZ)("span",{className:"all-code-box-controls"},(0,u.tZ)(a.Tooltip,{title:(0,u.tZ)(E._H,{id:"app.component.examples.".concat(m?"collapse":"expand")})},m?(0,u.tZ)(o.Z,{className:s,onClick:R}):(0,u.tZ)(d.Z,{className:s,onClick:R})),(0,u.tZ)(a.Tooltip,{title:(0,u.tZ)(E._H,{id:"app.component.examples.".concat(v?"hide":"visible")})},v?(0,u.tZ)(t.Z,{className:s,onClick:P}):(0,u.tZ)(b.Z,{className:s,onClick:P}))),(0,u.tZ)(E.Z1,{items:O,key:"".concat(m).concat(v)}))};D.Z=n},49545:function(U,D,e){e.d(D,{Z:function(){return N}});var M=e(97857),_=e.n(M),c=e(5574),T=e.n(c),i=e(67294),E=e(82768),a=e(16165),o=e(13669),d=e(28257),t=e(23279),b=e.n(t),f=e(9783),C=e.n(f),p=e(74855),u=e.n(p),n=e(94184),l=e.n(n),r=e(96923),S=E,g=function(k){var j=k.name,q=k.isNew,Y=k.justCopied,ne=k.onCopied,ae=k.theme,le=l()(C()({copied:Y===j},ae,!!ae)),re=function($,G){G?ne(j,$):o.message.error("Copy icon name failed, please try again.")};return(0,r.tZ)(u(),{text:"<".concat(j," />"),onCopy:re},(0,r.tZ)("li",{className:le},i.createElement(S[j]),(0,r.tZ)("span",{className:"anticon-class"},(0,r.tZ)(o.Badge,{dot:q},j))))},v=g,x=function(k){var j=k.icons,q=k.title,Y=k.newIcons,ne=k.theme,ae=(0,d.YB)(),le=i.useState(null),re=T()(le,2),se=re[0],$=re[1],G=i.useRef(null),ie=i.useCallback(function(ee,Q){o.message.success((0,r.tZ)("span",null,(0,r.tZ)("code",{className:"copied-code"},Q)," copied \u{1F389}")),$(ee),G.current=setTimeout(function(){$(null)},2e3)},[]);return i.useEffect(function(){return function(){G.current&&clearTimeout(G.current)}},[]),(0,r.tZ)("div",null,(0,r.tZ)("h3",null,ae.formatMessage({id:"app.docs.components.icon.category.".concat(q)})),(0,r.tZ)("ul",{className:"anticons-list"},j.map(function(ee){return(0,r.tZ)(v,{key:ee,name:ee,theme:ne,isNew:Y.includes(ee),justCopied:se,onCopied:ie})})))},A=x,y=e(67333),m=e.n(y),Z=function(k){var j="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z";return(0,r.tZ)("svg",m()({},k,{viewBox:"0 0 1024 1024"}),(0,r.tZ)("path",{d:j}))},s=function(k){var j="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z";return(0,r.tZ)("svg",m()({},k,{viewBox:"0 0 1024 1024"}),(0,r.tZ)("path",{d:j}))},P=function(k){var j="M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z";return(0,r.tZ)("svg",m()({},k,{viewBox:"0 0 1024 1024"}),(0,r.tZ)("path",{d:j}))},R=e(62816),B=Object.keys(R).map(function(h){return h.replace(/(Outlined|Filled|TwoTone)$/,"")}).filter(function(h,k,j){return j.indexOf(h)===k}),O=["StepBackward","StepForward","FastBackward","FastForward","Shrink","ArrowsAlt","Down","Up","Left","Right","CaretUp","CaretDown","CaretLeft","CaretRight","UpCircle","DownCircle","LeftCircle","RightCircle","DoubleRight","DoubleLeft","VerticalLeft","VerticalRight","VerticalAlignTop","VerticalAlignMiddle","VerticalAlignBottom","Forward","Backward","Rollback","Enter","Retweet","Swap","SwapLeft","SwapRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PlayCircle","UpSquare","DownSquare","LeftSquare","RightSquare","Login","Logout","MenuFold","MenuUnfold","BorderBottom","BorderHorizontal","BorderInner","BorderOuter","BorderLeft","BorderRight","BorderTop","BorderVerticle","PicCenter","PicLeft","PicRight","RadiusBottomleft","RadiusBottomright","RadiusUpleft","RadiusUpright","Fullscreen","FullscreenExit"],I=["Question","QuestionCircle","Plus","PlusCircle","Pause","PauseCircle","Minus","MinusCircle","PlusSquare","MinusSquare","Info","InfoCircle","Exclamation","ExclamationCircle","Close","CloseCircle","CloseSquare","Check","CheckCircle","CheckSquare","ClockCircle","Warning","IssuesClose","Stop"],K=["Edit","Form","Copy","Scissor","Delete","Snippets","Diff","Highlight","AlignCenter","AlignLeft","AlignRight","BgColors","Bold","Italic","Underline","Strikethrough","Redo","Undo","ZoomIn","ZoomOut","FontColors","FontSize","LineHeight","Dash","SmallDash","SortAscending","SortDescending","Drag","OrderedList","UnorderedList","RadiusSetting","ColumnWidth","ColumnHeight"],H=["AreaChart","PieChart","BarChart","DotChart","LineChart","RadarChart","HeatMap","Fall","Rise","Stock","BoxPlot","Fund","Sliders"],F=["Android","Apple","Windows","Ie","Chrome","Github","Aliwangwang","Dingding","WeiboSquare","WeiboCircle","TaobaoCircle","Html5","Weibo","Twitter","Wechat","Youtube","AlipayCircle","Taobao","Skype","Qq","MediumWorkmark","Gitlab","Medium","Linkedin","GooglePlus","Dropbox","Facebook","Codepen","CodeSandbox","CodeSandboxCircle","Amazon","Google","CodepenCircle","Alipay","AntDesign","AntCloud","Aliyun","Zhihu","Slack","SlackSquare","Behance","BehanceSquare","Dribbble","DribbbleSquare","Instagram","Yuque","Alibaba","Yahoo","Reddit","Sketch"],X=[].concat(O,I,K,H,F),oe=B.filter(function(h){return!X.includes(h)}),V={direction:O,suggestion:I,editor:K,data:H,logo:F,other:oe},z=null,W;(function(h){h.Filled="Filled",h.Outlined="Outlined",h.TwoTone="TwoTone"})(W||(W={}));var L=E,w=function(){var k=(0,d.YB)(),j=i.useState({theme:W.Outlined,searchKey:""}),q=T()(j,2),Y=q[0],ne=q[1],ae=[],le=i.useCallback(b()(function($){ne(function(G){return _()(_()({},G),{},{searchKey:$})})}),[]),re=i.useCallback(function($){ne(function(G){return _()(_()({},G),{},{theme:$.target.value})})},[]),se=i.useMemo(function(){var $=Y.searchKey,G=$===void 0?"":$,ie=Y.theme,ee=Object.keys(V).map(function(Q){var J=V[Q];if(G){var de=G.replace(new RegExp("^<([a-zA-Z]*)\\s/>$","gi"),function(te,ue){return ue}).replace(/(Filled|Outlined|TwoTone)$/,"").toLowerCase();J=J.filter(function(te){return te.toLowerCase().includes(de)})}return J=J.filter(function(te){return te!=="CopyrightCircle"}),{category:Q,icons:J.map(function(te){return te+ie}).filter(function(te){return L[te]})}}).filter(function(Q){var J=Q.icons;return!!J.length}).map(function(Q){var J=Q.category,de=Q.icons;return(0,r.tZ)(A,{key:J,title:J,theme:ie,icons:de,newIcons:ae})});return ee.length===0?(0,r.tZ)(o.Empty,{style:{margin:"2em 0"}}):ee},[Y.searchKey,Y.theme]);return(0,r.tZ)("div",{className:"markdown"},(0,r.tZ)("div",{style:{display:"flex",justifyContent:"space-between"}},(0,r.tZ)(o.Radio.Group,{value:Y.theme,onChange:re,size:"large",buttonStyle:"solid"},(0,r.tZ)(o.Radio.Button,{value:W.Outlined},(0,r.tZ)(a.Z,{component:s})," ",k.formatMessage({id:"app.docs.components.icon.outlined"})),(0,r.tZ)(o.Radio.Button,{value:W.Filled},(0,r.tZ)(a.Z,{component:Z})," ",k.formatMessage({id:"app.docs.components.icon.filled"})),(0,r.tZ)(o.Radio.Button,{value:W.TwoTone},(0,r.tZ)(a.Z,{component:P})," ",k.formatMessage({id:"app.docs.components.icon.two-tone"}))),(0,r.tZ)(o.Input.Search,{placeholder:k.formatMessage({id:"app.docs.components.icon.search.placeholder"}),style:{margin:"0 10px",flex:1},allowClear:!0,onChange:function(G){return le(G.currentTarget.value)},size:"large",autoFocus:!0})),se)},N=w},6965:function(U,D,e){var M=e(67333),_=e.n(M),c=e(97857),T=e.n(c),i=e(67294),E=e(94184),a=e.n(E),o=e(13669),d=e(45598),t=e(96923);function b(l){return/\bgood\b/i.test(l)}function f(l){return/\bbad\b/i.test(l)}function C(l){return/\binline\b/i.test(l)}function p(l){return l.isGood||l.isBad}function u(l){return p(l)||l.inline}var n=function(r){var S=r.children,g=(0,d.default)(S).filter(function(s){return s.type==="img"}),v=g.map(function(s){var P=s.props,R=P.alt,B=P.description,O=P.src,I=P.className;return{className:I,alt:R,description:B,src:O,isGood:b(I),isBad:f(I),inline:C(I)}}),x=v.map(function(s,P){var R=T()({},s);return delete R.description,delete R.isGood,delete R.isBad,(0,t.tZ)("div",{key:P},(0,t.tZ)("div",{className:"image-modal-container"},(0,t.tZ)("img",_()({},R,{src:s.src,alt:s.alt}))))}),A=g.length===2&&v.every(u)||g.length>=2&&v.every(p),y=A?{width:"".concat((100/g.length).toFixed(3),"%")}:{},m=g.length>1&&!A,Z=a()({"preview-image-boxes":!0,clearfix:!0,"preview-image-boxes-compare":A,"preview-image-boxes-with-carousel":m});return(0,t.tZ)("div",{className:Z},x.map(function(s,P){if(!A&&P!==0)return null;var R=v[P],B=a()("preview-image-wrapper",{good:R.isGood,bad:R.isBad});return(0,t.tZ)("div",{className:"preview-image-box",style:y,key:P},(0,t.tZ)("div",{className:B},(0,t.tZ)(o.Image,{className:R.className,src:R.src,alt:R.alt})),(0,t.tZ)("div",{className:"preview-image-title"},R.alt),(0,t.tZ)("div",{className:"preview-image-description",dangerouslySetInnerHTML:{__html:R.description}}))}))};D.Z=n},49706:function(U,D,e){var M=e(63379);D.Z=M.Z},95127:function(U,D,e){var M=e(19632),_=e.n(M),c=e(5574),T=e.n(c),i=e(67294),E=e(27484),a=e.n(E),o=e(28257),d=e(13669),t=e(96923),b=e(33494),f=e(52180),C=function(){var n=(0,f.Z)(),l=n.token,r=l.antCls;return{articles:(0,t.iv)("h4{margin:40px 0 24px;font-weight:500;font-size:20px;}",r,"-skeleton{h3{margin:0;}ul li{display:block;margin-left:0;}}",r,"-tabs-nav::before{display:none;}table{width:100%;table-layout:fixed;td{width:50%;vertical-align:top;}}",""),articleList:(0,t.iv)("li{margin:1em 0;padding:0;font-size:14px;list-style:none;}",r,"-avatar>img{max-width:unset;}","")}},p=function(n){var l=n.name,r=n.data,S=r===void 0?[]:r,g=n.authors,v=g===void 0?[]:g,x=C(),A=x.articleList;return(0,t.tZ)("td",null,(0,t.tZ)("h4",null,l),(0,t.tZ)("ul",{css:A},S.length===0?(0,t.tZ)(d.Empty,{image:d.Empty.PRESENTED_IMAGE_SIMPLE}):S.map(function(y,m){var Z=v.find(function(s){return s.name===y.author});return(0,t.tZ)("li",{key:m},(0,t.tZ)("a",{href:Z==null?void 0:Z.href,target:"_blank",rel:"noreferrer"},(0,t.tZ)(d.Avatar,{size:"small",src:Z==null?void 0:Z.avatar})),(0,t.tZ)(d.Divider,{type:"vertical"}),(0,t.tZ)("a",{href:y.href,target:"_blank",rel:"noreferrer"},y==null?void 0:y.title))})))};D.Z=function(){var u=(0,o.YB)(),n=u.locale,l=n==="zh-CN",r=(0,b.WF)(),S=T()(r,2),g=S[0],v=g.articles,x=v===void 0?{cn:[],en:[]}:v,A=g.authors,y=A===void 0?[]:A,m=S[1],Z=C(),s=i.useMemo(function(){var B,O={};return(B=x[l?"cn":"en"])===null||B===void 0||B.forEach(function(I){var K=a()(I.date).year();O[K]=O[K]||{},O[K][I.type]=[].concat(_()(O[K][I.type]||[]),[I])}),O},[x]),P;if(m)P=(0,t.tZ)(d.Skeleton,{active:!0});else{var R=Object.keys(s).sort(function(B,O){return Number(O)-Number(B)});P=R.length?(0,t.tZ)(d.Tabs,null,R.map(function(B){return(0,t.tZ)(d.Tabs.TabPane,{tab:"".concat(B).concat(l?" \u5E74":""),key:B},(0,t.tZ)("table",null,(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)(p,{name:(0,t.tZ)(o._H,{id:"app.docs.resource.design"}),data:s[B].design,authors:y}),(0,t.tZ)(p,{name:(0,t.tZ)(o._H,{id:"app.docs.resource.develop"}),data:s[B].develop,authors:y})))))})):null}return(0,t.tZ)("div",{id:"articles",css:Z.articles},P)}},74418:function(U,D,e){var M=e(67294),_=e(13669),c=e(96923),T=e(52180);function i(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var E={name:"1rmwczg",styles:"margin:0 20px 20px;color:#697b8c;font-size:14px;line-height:22px"},a={name:"6nm2f1",styles:"margin:16px 20px 8px;color:#0d1a26;font-size:20px;line-height:28px"},o={name:"rff6uk",styles:"position:absolute;top:8px;right:8px;padding:4px 8px;color:#fff;font-size:12px;line-height:1;background:rgba(0, 0, 0, 0.65);border-radius:1px;box-shadow:0 0 2px rgba(255, 255, 255, 0.2)"},d={name:"12391av",styles:"width:calc(100% + 2px);max-width:none;height:184px;margin:-1px -1px 0;object-fit:cover"},t=function(){var p=(0,T.Z)(),u=p.token,n=u.boxShadowSecondary;return{card:(0,c.iv)("position:relative;display:flex;flex-direction:column;height:100%;color:inherit;list-style:none;border:1px solid #e6e6e6;border-radius:2px;cursor:pointer;transition:box-shadow 0.3s;&:hover{box-shadow:",n,";}",""),image:d,badge:o,title:a,description:E}},b=function(p){var u=p.resource,n=t(),l=u.title,r=u.description,S=u.cover,g=u.src,v=u.official,x=null,A=l,y=l.match(/(.*)(#[\dA-Fa-f]{6})/);return y&&(A=y[1].trim(),x=y[2]),(0,c.tZ)(_.Col,{xs:24,sm:12,md:8,lg:6,style:{padding:12}},(0,c.tZ)("a",{css:n.card,target:"_blank",href:g,rel:"noreferrer"},(0,c.tZ)("img",{css:n.image,src:S,alt:A,style:x?{backgroundColor:x}:{}}),v&&(0,c.tZ)("div",{css:n.badge},"Official"),(0,c.tZ)("p",{css:n==null?void 0:n.title},A),(0,c.tZ)("p",{css:n.description},r)))},f=function(p){var u=p.resources;return(0,c.tZ)(_.Row,{style:{margin:"-12px -12px 0 -12px"}},u.map(function(n){return(0,c.tZ)(b,{resource:n,key:n==null?void 0:n.title})}))};D.Z=f},73024:function(U,D,e){var M=e(5574),_=e.n(M),c=e(67294),T=e(27693),i=e(97501),E=e(13669),a=e(96923),o=e(2559),d=e(52180),t=e(63942),b=(0,i.Z)(),f={cn:{token:"Token \u540D\u79F0",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",value:"\u9ED8\u8BA4\u503C"},en:{token:"Token Name",description:"Description",type:"Type",value:"Default Value"}},C=function(){var n=(0,d.Z)(),l=n.token;return{codeSpan:(0,a.iv)("margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",l.siteMarkdownCodeBg,";border:1px solid ",l.colorSplit,";border-radius:3px;font-family:monospace;","")}},p=function(n){var l=n.type,r=C(),S=(0,o.Z)(f),g=_()(S,2),v=g[0],x=g[1],A=[{title:v.token,key:"name",dataIndex:"name"},{title:v.description,key:"desc",dataIndex:"desc"},{title:v.type,key:"type",dataIndex:"type",render:function(Z,s){return(0,a.tZ)("span",{css:r.codeSpan},s.type)}},{title:v.value,key:"value",render:function(Z,s){var P=typeof s.value=="string"&&(s.value.startsWith("#")||s.value.startsWith("rgb"));return P?(0,a.tZ)(t.Z,{color:s.value},s.value):typeof s.value!="string"?JSON.stringify(s.value):s.value}}],y=(0,c.useMemo)(function(){return Object.entries(T).filter(function(m){var Z=_()(m,2),s=Z[1];return s.source===l}).map(function(m){var Z=_()(m,2),s=Z[0],P=Z[1];return{name:s,desc:x==="cn"?P.desc:P.descEn,type:P.type,value:b[s]}})},[l,x]);return(0,a.tZ)(E.Table,{dataSource:y,columns:A,pagination:!1,bordered:!0})};D.Z=p},37472:function(U,D,e){e.d(D,{Z:function(){return p}});var M=e(67294),_=e(92138),c=e(44908),T=e.n(c),i=e(5574),E=e.n(i),a=e(74855),o=e.n(a),d=e(13669),t=e(96923),b=function(n){var l=n.color,r=n.index,S=n.dark,g=(0,M.useMemo)(function(){var v={default:["#fff","unset"],dark:["#314659","#fff"]},x=S?v.dark:v.default,A=E()(x,2),y=A[0],m=A[1];return{background:l,color:r>5?y:m,fontWeight:r===6?"bold":"normal"}},[l,S,r]);return(0,t.tZ)(o(),{text:l,onCopy:function(){return d.message.success("Copied: ".concat(l))}},(0,t.tZ)("div",{className:"main-color-item",style:g},"color-",r,(0,t.tZ)("span",{className:"main-color-value"},l.toLowerCase())))},f=b,C=function(n){var l=n.color,r=n.dark,S=n.backgroundColor,g=(0,_.generate)(l,r?{theme:"dark",backgroundColor:S}:{});return T()(g).map(function(v,x){return(0,t.tZ)(f,{color:v,index:x+1,dark:r,key:v})})},p=C},34081:function(U,D,e){var M=e(5574),_=e.n(M),c=e(67294),T=e(713),i=e(96923),E=function(){},a=function(d){var t=d.small,b=d.position,f=b===void 0?"bottom":b,C=d.presetColors,p=d.onChange,u=p===void 0?E:p,n=d.onChangeComplete,l=n===void 0?E:n,r=(0,c.useState)(d.color),S=_()(r,2),g=S[0],v=S[1],x=(0,c.useState)(!1),A=_()(x,2),y=A[0],m=A[1],Z=function(){m(y)},s=function(){m(!1)},P=function(F){v(F.hex),u(F.hex,F)},R=function(F){v(F.hex),l(F.hex)},B=t?80:120,O={color:{width:"".concat(B,"px"),height:t?"16px":"24px",borderRadius:"2px",background:g},swatch:{padding:"4px",background:"#fff",borderRadius:"2px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:10},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},wrapper:{position:"inherit",zIndex:100}};f==="top"&&(O.wrapper.transform="translate(calc(-100% + ".concat(B+8,"px), -100%)"),O.wrapper.paddingBottom=8);var I=(0,i.tZ)("div",{style:O.swatch,onClick:Z},(0,i.tZ)("div",{style:O.color})),K=y?(0,i.tZ)("div",{style:O.popover},(0,i.tZ)("div",{style:O.cover,onClick:s}),(0,i.tZ)("div",{style:O.wrapper},(0,i.tZ)(T.xS,{presetColors:C,color:g,onChange:P,onChangeComplete:R}))):null;return f==="top"?(0,i.tZ)("div",null,K,I):(0,i.tZ)("div",null,I,K)};D.Z=a},63379:function(U,D,e){var M=e(5574),_=e.n(M),c=e(67294),T=e(13669),i=e(74855),E=e.n(i),a=e(92138),o=e(96923),d=function(f){var C=f.match(/\d+/g),p=parseInt(C[0],10).toString(16),u=parseInt(C[1],10).toString(16),n=parseInt(C[2],10).toString(16);return p=p.length===1?"0".concat(p):p,u=u.length===1?"0".concat(u):u,n=n.length===1?"0".concat(n):n,"#".concat(p).concat(u).concat(n)},t=function(f){var C=f.showTitle,p=f.direction,u=f.dark,n=f.color;n=n===void 0?{name:"gray",count:13}:n;var l=n.name,r=n.count,S=r===void 0?10:r,g=n.description,v=n.english,x=n.chinese,A=c.useState({}),y=_()(A,2),m=y[0],Z=y[1],s=c.useRef({});(0,c.useEffect)(function(){var V={};Object.keys(s.current||{}).forEach(function(z){var W=getComputedStyle(s.current[z])["background-color"];W.includes("rgba")?V[z]=W:V[z]=d(W)}),Z(V)},[]);for(var P=p==="horizontal"?"color-palette-horizontal":"color-palette",R=[],B="".concat(v," / ").concat(x),O={dark:["#fff","unset"],default:["rgba(0,0,0,0.85)","#fff"]},I=u?O.dark:O.default,K=_()(I,2),H=K[0],F=K[1],X=function(z){var W="".concat(l,"-").concat(z),L=u?a.presetDarkPalettes[l][z-1]:"";R.push((0,o.tZ)(E(),{text:m[W],onCopy:function(){return T.message.success("@".concat(W," copied: ").concat(m[W]))},key:W},(0,o.tZ)("div",{key:z,ref:function(N){s.current["".concat(l,"-").concat(z)]=N},className:"main-color-item palette-".concat(l,"-").concat(z),style:{color:(l==="yellow"?z>6:z>5)?F:H,fontWeight:z===6?"bold":"normal",backgroundColor:L},title:"click to copy color"},(0,o.tZ)("span",{className:"main-color-text"},W),(0,o.tZ)("span",{className:"main-color-value"},m[W]))))},oe=1;oe<=S;oe+=1)X(oe);return(0,o.tZ)("div",{className:P},C&&(0,o.tZ)("div",{className:"color-title"},B,(0,o.tZ)("span",{className:"color-description"},g)),(0,o.tZ)("div",{className:"main-color"},R))};D.Z=t},24229:function(U,D,e){var M=e(67294),_=(0,M.createContext)({});D.Z=_}}]);
