import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{c as _}from"./class-names-J070TWId.js";import{az as g,d7 as f,a0 as y}from"./zoom-to-fit-icon-OF_-LHoW.js";import{A as B}from"./avatar-K6Ihbd2W.js";import{a as t}from"./menu-N85RMCec.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./menu-info-item-1h3Ff0FU.js";import"./keyboard-UncMrW7s.js";import"./use-disposables-nAkgq7bY.js";import"./use-text-value-pEWxbmSc.js";import"./focus-management-CoYP-xeJ.js";import"./bugs-DTVvle51.js";import"./use-owner-bymvWI7o.js";import"./use-resolve-button-type-Kqf38QZL.js";import"./menu-separator--WaryJuh.js";import"./menu-title-FfBvOeUF.js";const s=({src:r})=>e.jsx("img",{src:r,alt:"logo"});try{s.displayName="TopBarLogo",s.__docgenInfo={description:"",displayName:"TopBarLogo",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}}}}}catch{}const i=({children:r})=>e.jsx("div",{className:"flex grow gap-12 pl-20 pr-6",children:r});try{i.displayName="TopBarNavLinks",i.__docgenInfo={description:"",displayName:"TopBarNavLinks",props:{}}}catch{}const p=({isActive:r=!1,children:o})=>e.jsx("div",{children:e.jsx("div",{className:"group rounded px-4 py-1 hover:bg-neutral-800 group-focus:ring-2 group-focus:ring-primary-200",children:e.jsx("div",{className:_("relative font-sans text-sm text-neutral-0 ",r&&"after:absolute after:left-0 after:right-0 after:top-7 after:block after:h-0.5 after:bg-neutral-0"),children:o})})});try{p.displayName="TopBarNavLink",p.__docgenInfo={description:"",displayName:"TopBarNavLink",props:{isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const c=({children:r})=>e.jsxs(t.Button,{className:"flex items-center gap-1 rounded px-1 py-1 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200",children:[e.jsx(B,{color:"primary",children:r}),e.jsx(g,{className:"h-4 w-4 fill-neutral-400"})]});try{c.displayName="TopBarAvatarButton",c.__docgenInfo={description:"",displayName:"TopBarAvatarButton",props:{}}}catch{}const l=({children:r})=>e.jsx("div",{className:"flex items-center gap-2 px-2",children:r});try{l.displayName="TrayButtons",l.__docgenInfo={description:"",displayName:"TrayButtons",props:{}}}catch{}const m=({onClick:r,id:o,children:v})=>e.jsx("div",{role:"button",id:o,tabIndex:-1,onClick:r,onKeyDown:r,className:"cursor-pointer rounded p-3 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200",children:v});try{m.displayName="TrayButton",m.__docgenInfo={description:"",displayName:"TrayButton",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const N=()=>e.jsxs("div",{className:"flex gap-1",children:[e.jsx(f,{className:"h-4 w-4 fill-primary-200"}),e.jsx(g,{className:"h-4 w-4 fill-neutral-400"})]}),a=({children:r})=>e.jsx("div",{className:"flex h-12 min-w-[1024px] items-center justify-between bg-abusix-dusk px-4",children:r});a.TrayButtons=l;a.TrayButton=m;a.Logo=s;a.NavLinks=i;a.NavLink=p;a.AvatarButton=c;a.HelpButton=N;try{a.displayName="TopBar",a.__docgenInfo={description:"",displayName:"TopBar",props:{}}}catch{}const H={title:"TopBar",component:a,parameters:{layout:"fullscreen"}},n={render:()=>e.jsxs(a,{children:[e.jsx(a.Logo,{src:"https://placekitten.com/80/80"}),e.jsxs(a.NavLinks,{children:[e.jsx(a.NavLink,{isActive:!0,children:"Dashboard"}),e.jsx(a.NavLink,{children:"Cases"}),e.jsx(a.NavLink,{children:"Events"}),e.jsx(a.NavLink,{children:"Statistics"}),e.jsx(a.NavLink,{children:"Mailbox"})]}),e.jsxs(t,{children:[e.jsx(a.AvatarButton,{children:"DS"}),e.jsxs(t.Items,{children:[e.jsx(t.InfoItem,{title:"Abusix",subtitle:"john.doe@abusix.com"}),e.jsx(t.Separator,{}),e.jsx(t.Item,{LeftIcon:y,children:"Portal"}),e.jsx(t.Separator,{}),e.jsx(t.Item,{children:"Account Settings"}),e.jsx(t.Item,{children:"Plans & billing"}),e.jsx(t.Item,{children:"Team members"}),e.jsx(t.Item,{children:"My profile"}),e.jsx(t.Separator,{}),e.jsx(t.Item,{children:"User Settings"}),e.jsx(t.Separator,{}),e.jsx(t.Item,{children:"Sign out"})]})]})]})};var u,d,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <TopBar>
            <TopBar.Logo src="https://placekitten.com/80/80" />
            <TopBar.NavLinks>
                <TopBar.NavLink isActive>Dashboard</TopBar.NavLink>
                <TopBar.NavLink>Cases</TopBar.NavLink>
                <TopBar.NavLink>Events</TopBar.NavLink>
                <TopBar.NavLink>Statistics</TopBar.NavLink>
                <TopBar.NavLink>Mailbox</TopBar.NavLink>
            </TopBar.NavLinks>
            <Menu>
                <TopBar.AvatarButton>DS</TopBar.AvatarButton>
                <Menu.Items>
                    <Menu.InfoItem title="Abusix" subtitle="john.doe@abusix.com" />
                    <Menu.Separator />
                    <Menu.Item LeftIcon={ArrowTopRightIcon}>Portal</Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>Account Settings</Menu.Item>
                    <Menu.Item>Plans & billing</Menu.Item>
                    <Menu.Item>Team members</Menu.Item>
                    <Menu.Item>My profile</Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>User Settings</Menu.Item>
                    <Menu.Separator />
                    <Menu.Item>Sign out</Menu.Item>
                </Menu.Items>
            </Menu>
        </TopBar>
}`,...(x=(d=n.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const R=["Default"];export{n as Default,R as __namedExportsOrder,H as default};
