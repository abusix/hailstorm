const B="-";function se(e){const r=le(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function l(s){const a=s.split(B);return a[0]===""&&a.length!==1&&a.shift(),ee(a,r)||ie(s)}function n(s,a){const u=t[s]||[];return a&&o[s]?[...u,...o[s]]:u}return{getClassGroupId:l,getConflictingClassGroupIds:n}}function ee(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),l=o?ee(e.slice(1),o):void 0;if(l)return l;if(r.validators.length===0)return;const n=e.join(B);return(s=r.validators.find(({validator:a})=>a(n)))==null?void 0:s.classGroupId}const Q=/^\[(.+)\]$/;function ie(e){if(Q.test(e)){const r=Q.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function le(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return ce(Object.entries(e.classGroups),t).forEach(([n,s])=>{O(s,o,n,r)}),o}function O(e,r,t,o){e.forEach(l=>{if(typeof l=="string"){const n=l===""?r:Y(r,l);n.classGroupId=t;return}if(typeof l=="function"){if(ae(l)){O(l(o),r,t,o);return}r.validators.push({validator:l,classGroupId:t});return}Object.entries(l).forEach(([n,s])=>{O(s,Y(r,n),t,o)})})}function Y(e,r){let t=e;return r.split(B).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function ae(e){return e.isThemeGetter}function ce(e,r){return r?e.map(([t,o])=>{const l=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[r+s,a])):n);return[t,l]}):e}function de(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function l(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return l(n,s),s},set(n,s){t.has(n)?t.set(n,s):l(n,s)}}}const re="!";function ue(e){const r=e.separator,t=r.length===1,o=r[0],l=r.length;return function(s){const a=[];let u=0,b=0,p;for(let f=0;f<s.length;f++){let m=s[f];if(u===0){if(m===o&&(t||s.slice(f,f+l)===r)){a.push(s.slice(b,f)),b=f+l;continue}if(m==="/"){p=f;continue}}m==="["?u++:m==="]"&&u--}const g=a.length===0?s:s.substring(b),y=g.startsWith(re),w=y?g.substring(1):g,S=p&&p>b?p-b:void 0;return{modifiers:a,hasImportantModifier:y,baseClassName:w,maybePostfixModifierPosition:S}}}function pe(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function be(e){return{cache:de(e.cacheSize),splitModifiers:ue(e),...se(e)}}const fe=/\s+/;function ge(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:l}=r,n=new Set;return e.trim().split(fe).map(s=>{const{modifiers:a,hasImportantModifier:u,baseClassName:b,maybePostfixModifierPosition:p}=t(s);let g=o(p?b.substring(0,p):b),y=!!p;if(!g){if(!p)return{isTailwindClass:!1,originalClassName:s};if(g=o(b),!g)return{isTailwindClass:!1,originalClassName:s};y=!1}const w=pe(a).join(":");return{isTailwindClass:!0,modifierId:u?w+re:w,classGroupId:g,originalClassName:s,hasPostfixModifier:y}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:u,hasPostfixModifier:b}=s,p=a+u;return n.has(p)?!1:(n.add(p),l(u,b).forEach(g=>n.add(a+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function me(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=te(r))&&(o&&(o+=" "),o+=t);return o}function te(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=te(e[o]))&&(t&&(t+=" "),t+=r);return t}function he(e,...r){let t,o,l,n=s;function s(u){const b=r.reduce((p,g)=>g(p),e());return t=be(b),o=t.cache.get,l=t.cache.set,n=a,a(u)}function a(u){const b=o(u);if(b)return b;const p=ge(u,t);return l(u,p),p}return function(){return n(me.apply(null,arguments))}}function c(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const oe=/^\[(?:([a-z-]+):)?(.+)\]$/i,ye=/^\d+\/\d+$/,xe=new Set(["px","full","screen"]),we=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ve=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ke=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ce=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function h(e){return z(e)||xe.has(e)||ye.test(e)}function k(e){return M(e,"length",Pe)}function z(e){return!!e&&!Number.isNaN(Number(e))}function j(e){return M(e,"number",z)}function I(e){return!!e&&Number.isInteger(Number(e))}function ze(e){return e.endsWith("%")&&z(e.slice(0,-1))}function i(e){return oe.test(e)}function C(e){return we.test(e)}const Se=new Set(["length","size","percentage"]);function Me(e){return M(e,Se,ne)}function Ae(e){return M(e,"position",ne)}const Ge=new Set(["image","url"]);function Ie(e){return M(e,Ge,Ee)}function Re(e){return M(e,"",Te)}function R(){return!0}function M(e,r,t){const o=oe.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Pe(e){return ve.test(e)}function ne(){return!1}function Te(e){return ke.test(e)}function Ee(e){return Ce.test(e)}function je(){const e=c("colors"),r=c("spacing"),t=c("blur"),o=c("brightness"),l=c("borderColor"),n=c("borderRadius"),s=c("borderSpacing"),a=c("borderWidth"),u=c("contrast"),b=c("grayscale"),p=c("hueRotate"),g=c("invert"),y=c("gap"),w=c("gradientColorStops"),S=c("gradientColorStopPositions"),f=c("inset"),m=c("margin"),v=c("opacity"),x=c("padding"),$=c("saturate"),_=c("scale"),U=c("sepia"),F=c("skew"),q=c("space"),J=c("translate"),L=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",i,r],d=()=>[i,r],X=()=>["",h,k],P=()=>["auto",z,i],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],T=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],V=()=>["start","end","center","between","around","evenly","stretch"],A=()=>["","0",i],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>[z,j],E=()=>[z,i];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[h,k],blur:["none","",C,i],brightness:G(),borderColor:[e],borderRadius:["none","","full",C,i],borderSpacing:d(),borderWidth:X(),contrast:G(),grayscale:A(),hueRotate:E(),invert:A(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[ze,k],inset:W(),margin:W(),opacity:G(),padding:d(),saturate:G(),scale:G(),sepia:A(),skew:E(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",i]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),i]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[f]}],"inset-x":[{"inset-x":[f]}],"inset-y":[{"inset-y":[f]}],start:[{start:[f]}],end:[{end:[f]}],top:[{top:[f]}],right:[{right:[f]}],bottom:[{bottom:[f]}],left:[{left:[f]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I,i]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",i]}],grow:[{grow:A()}],shrink:[{shrink:A()}],order:[{order:["first","last","none",I,i]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",I,i]},i]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[I,i]},i]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",i]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",i]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[q]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[q]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",i,r]}],"min-w":[{"min-w":["min","max","fit",i,h]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[C]},C,i]}],h:[{h:[i,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",h,i]}],"max-h":[{"max-h":[i,r,"min","max","fit"]}],"font-size":[{text:["base",C,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",j]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",i]}],"line-clamp":[{"line-clamp":["none",z,j]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",h,i]}],"list-image":[{"list-image":["none",i]}],"list-style-type":[{list:["none","disc","decimal",i]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...T(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",h,k]}],"underline-offset":[{"underline-offset":["auto",h,i]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),Ae]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Me]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ie]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...T(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:T()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...T()]}],"outline-offset":[{"outline-offset":[h,i]}],"outline-w":[{outline:[h,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[h,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,Re]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":H()}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",C,i]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[g]}],saturate:[{saturate:[$]}],sepia:[{sepia:[U]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[$]}],"backdrop-sepia":[{"backdrop-sepia":[U]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",i]}],duration:[{duration:E()}],ease:[{ease:["linear","in","out","in-out",i]}],delay:[{delay:E()}],animate:[{animate:["none","spin","ping","pulse","bounce",i]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[I,i]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",i]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",i]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",i]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[h,k,j]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const _e=he(je);function D(...e){return _e(e.filter(Boolean).join(" "))}try{D.displayName="classNames",D.__docgenInfo={description:"",displayName:"classNames",props:{}}}catch{}export{D as c};