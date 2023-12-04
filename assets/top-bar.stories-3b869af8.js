import{j as e}from"./jsx-runtime-94f6e698.js";import{c as _}from"./class-names-9cb99c69.js";import{az as g,d7 as f,a0 as y}from"./zoom-to-fit-icon-acda7f0b.js";import{A as B}from"./avatar-d7a92244.js";import{M as a}from"./menu-4c52e8f1.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./menu-info-item-d6680240.js";import"./keyboard-21395176.js";import"./disposables-253897a2.js";import"./use-disposables-4086b7a6.js";import"./use-text-value-786875d7.js";import"./owner-b1a1dac1.js";import"./bugs-8e007c11.js";import"./focus-management-0b66a118.js";import"./use-outside-click-cd4630be.js";import"./open-closed-e73c4555.js";import"./use-resolve-button-type-2af9297b.js";import"./use-owner-fa402f7f.js";import"./menu-separator-2e97c8ed.js";import"./menu-title-3210640e.js";const s=({src:r})=>e.jsx("img",{src:r,alt:"logo"});try{s.displayName="TopBarLogo",s.__docgenInfo={description:"",displayName:"TopBarLogo",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}}}}}catch{}const i=({children:r})=>e.jsx("div",{className:"flex grow gap-12 pl-20 pr-6",children:r});try{i.displayName="TopBarNavLinks",i.__docgenInfo={description:"",displayName:"TopBarNavLinks",props:{}}}catch{}const p=({isActive:r=!1,children:o})=>e.jsx("div",{children:e.jsx("div",{className:"group rounded px-4 py-1 hover:bg-neutral-800 group-focus:ring-2 group-focus:ring-primary-200",children:e.jsx("div",{className:_("relative font-sans text-sm text-neutral-0 ",r&&"after:absolute after:left-0 after:right-0 after:top-7 after:block after:h-0.5 after:bg-neutral-0"),children:o})})});try{p.displayName="TopBarNavLink",p.__docgenInfo={description:"",displayName:"TopBarNavLink",props:{isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const c=({children:r})=>e.jsxs(a.Button,{className:"flex items-center gap-1 rounded px-1 py-1 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200",children:[e.jsx(B,{color:"primary",children:r}),e.jsx(g,{className:"h-4 w-4 fill-neutral-400"})]});try{c.displayName="TopBarAvatarButton",c.__docgenInfo={description:"",displayName:"TopBarAvatarButton",props:{}}}catch{}const l=({children:r})=>e.jsx("div",{className:"flex items-center gap-2 px-2",children:r});try{l.displayName="TrayButtons",l.__docgenInfo={description:"",displayName:"TrayButtons",props:{}}}catch{}const m=({onClick:r,id:o,children:v})=>e.jsx("div",{role:"button",id:o,tabIndex:-1,onClick:r,onKeyDown:r,className:"cursor-pointer rounded p-3 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200",children:v});try{m.displayName="TrayButton",m.__docgenInfo={description:"",displayName:"TrayButton",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const N=()=>e.jsxs("div",{className:"flex gap-1",children:[e.jsx(f,{className:"h-4 w-4 fill-primary-200"}),e.jsx(g,{className:"h-4 w-4 fill-neutral-400"})]}),t=({children:r})=>e.jsx("div",{className:"flex h-12 min-w-[1024px] items-center justify-between bg-abusix-dusk px-4",children:r});t.TrayButtons=l;t.TrayButton=m;t.Logo=s;t.NavLinks=i;t.NavLink=p;t.AvatarButton=c;t.HelpButton=N;try{t.displayName="TopBar",t.__docgenInfo={description:"",displayName:"TopBar",props:{}}}catch{}const K={title:"TopBar",component:t,parameters:{layout:"fullscreen"}},n={render:()=>e.jsxs(t,{children:[e.jsx(t.Logo,{src:"https://placekitten.com/80/80"}),e.jsxs(t.NavLinks,{children:[e.jsx(t.NavLink,{isActive:!0,children:"Dashboard"}),e.jsx(t.NavLink,{children:"Cases"}),e.jsx(t.NavLink,{children:"Events"}),e.jsx(t.NavLink,{children:"Statistics"}),e.jsx(t.NavLink,{children:"Mailbox"})]}),e.jsxs(a,{children:[e.jsx(t.AvatarButton,{children:"DS"}),e.jsxs(a.Items,{children:[e.jsx(a.InfoItem,{title:"Abusix",subtitle:"john.doe@abusix.com"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{LeftIcon:y,children:"Portal"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{children:"Account Settings"}),e.jsx(a.Item,{children:"Plans & billing"}),e.jsx(a.Item,{children:"Team members"}),e.jsx(a.Item,{children:"My profile"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{children:"User Settings"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{children:"Sign out"})]})]})]})};var u,d,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(d=n.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const O=["Default"];export{n as Default,O as __namedExportsOrder,K as default};
//# sourceMappingURL=top-bar.stories-3b869af8.js.map
