import{r as f,t as c}from"./index-DX35FyXq.js";import{s as d,a as l,b as u}from"./use-sync-refs-DTQ85WuU.js";function b(r,e,o){let i=d(n=>{let t=n.getBoundingClientRect();t.x===0&&t.y===0&&t.width===0&&t.height===0&&o()});f.useEffect(()=>{if(!r)return;let n=e===null?null:e instanceof HTMLElement?e:e.current;if(!n)return;let t=l();if(typeof ResizeObserver<"u"){let s=new ResizeObserver(()=>i.current(n));s.observe(n),t.add(()=>s.disconnect())}if(typeof IntersectionObserver<"u"){let s=new IntersectionObserver(()=>i.current(n));s.observe(n),t.add(()=>s.disconnect())}return()=>t.dispose()},[e,i,r])}function a(){let r=typeof document>"u";return"useSyncExternalStore"in c?(e=>e.useSyncExternalStore)(c)(()=>()=>{},()=>!1,()=>!r):!1}function E(){let r=a(),[e,o]=f.useState(u.isHandoffComplete);return e&&u.isHandoffComplete===!1&&o(!1),f.useEffect(()=>{e!==!0&&o(!0)},[e]),f.useEffect(()=>u.handoff(),[]),r?!1:e}export{E as l,b as m};
