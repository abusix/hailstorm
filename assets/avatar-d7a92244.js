import{j as r}from"./jsx-runtime-94f6e698.js";const l={primary:"bg-primary-200 text-primary-500 ",success:"bg-success-200 text-success-600",neutral:"bg-neutral-200 text-neutral-800",warning:"bg-warning-100 text-warning-700",danger:"bg-danger-100 text-danger-600"},n=({color:e="primary",children:t,onClick:a})=>{const s=t.substring(0,2);return r.jsx("div",{className:`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-xs ${l[e]}`,onClick:a,onKeyDown:a,tabIndex:0,role:"button",children:r.jsx("span",{className:"uppercase",children:s})})};try{n.displayName="Avatar",n.__docgenInfo={description:"",displayName:"Avatar",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"primary"'},{value:'"neutral"'}]}}}}}catch{}export{n as A};
//# sourceMappingURL=avatar-d7a92244.js.map
