import{r as o}from"./index-4g5l5LRQ.js";import{o as s}from"./keyboard-19WRbd6j.js";import{f as g}from"./use-is-mounted-FwWzDaoX.js";function b(i,r){let t=o.useRef([]),e=s(i);o.useEffect(()=>{let u=[...t.current];for(let[l,c]of r.entries())if(t.current[l]!==c){let f=e(r,u);return t.current=r,f}},[e,...r])}function m(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function d(){return/Android/gi.test(window.navigator.userAgent)}function k(){return m()||d()}function C(i=0){let[r,t]=o.useState(i),e=g(),u=o.useCallback(n=>{e.current&&t(a=>a|n)},[r,e]),l=o.useCallback(n=>!!(r&n),[r]),c=o.useCallback(n=>{e.current&&t(a=>a&~n)},[t,e]),f=o.useCallback(n=>{e.current&&t(a=>a^n)},[t]);return{flags:r,addFlag:u,hasFlag:l,removeFlag:c,toggleFlag:f}}export{C as c,b as m,k as n,m as t};
