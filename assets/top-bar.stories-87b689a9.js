import{j as e,a as n}from"./jsx-runtime-91a467a5.js";import{c as y}from"./class-names-9cb99c69.js";import{k as _,l as B,m as N}from"./zoom-to-fit-icon-b8f307a9.js";import{A as h}from"./avatar-47deb917.js";import{a as t}from"./menu-1b083be1.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./menu-info-item-107c360c.js";import"./keyboard-5e933fe8.js";import"./bugs-7a186658.js";import"./use-text-value-1d5c8b57.js";import"./focus-management-d35c5d70.js";import"./open-closed-535072ce.js";import"./use-resolve-button-type-68f089c3.js";import"./use-owner-470a7b02.js";import"./menu-separator-7c254e88.js";import"./menu-title-3068a1c6.js";const s=({src:r})=>e("img",{src:r,alt:"logo"});try{s.displayName="TopBarLogo",s.__docgenInfo={description:"",displayName:"TopBarLogo",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}}}}}catch{}const p=({children:r})=>e("div",{className:"flex grow gap-12 pl-20 pr-6",children:r});try{p.displayName="TopBarNavLinks",p.__docgenInfo={description:"",displayName:"TopBarNavLinks",props:{}}}catch{}const c=({isActive:r=!1,children:i})=>e("div",{children:e("div",{className:"group rounded px-4 py-1 hover:bg-neutral-800 group-focus:ring-2 group-focus:ring-primary-200",children:e("div",{className:y("relative font-sans text-sm text-neutral-0 ",r&&"after:absolute after:left-0 after:right-0 after:top-7 after:block after:h-0.5 after:bg-neutral-0"),children:i})})});try{c.displayName="TopBarNavLink",c.__docgenInfo={description:"",displayName:"TopBarNavLink",props:{isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const l=({children:r})=>n(t.Button,{className:"flex items-center gap-1 rounded px-1 py-1 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200",children:[e(h,{color:"primary",children:r}),e(_,{className:"h-4 w-4 fill-neutral-400"})]});try{l.displayName="TopBarAvatarButton",l.__docgenInfo={description:"",displayName:"TopBarAvatarButton",props:{}}}catch{}const m=({children:r})=>e("div",{className:"flex items-center gap-2 px-2",children:r});try{m.displayName="TrayButtons",m.__docgenInfo={description:"",displayName:"TrayButtons",props:{}}}catch{}const u=({onClick:r,id:i,children:f})=>e("div",{role:"button",id:i,tabIndex:-1,onClick:r,onKeyDown:r,className:"cursor-pointer rounded p-3 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200",children:f});try{u.displayName="TrayButton",u.__docgenInfo={description:"",displayName:"TrayButton",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const T=()=>n("div",{className:"flex gap-1",children:[e(B,{className:"h-4 w-4 fill-primary-200"}),e(_,{className:"h-4 w-4 fill-neutral-400"})]}),a=({children:r})=>e("div",{className:"flex h-12 min-w-[1024px] items-center justify-between bg-abusix-dusk px-4",children:r});a.TrayButtons=m;a.TrayButton=u;a.Logo=s;a.NavLinks=p;a.NavLink=c;a.AvatarButton=l;a.HelpButton=T;try{a.displayName="TopBar",a.__docgenInfo={description:"",displayName:"TopBar",props:{}}}catch{}const R={title:"TopBar",component:a,parameters:{layout:"fullscreen"}},o={render:()=>n(a,{children:[e(a.Logo,{src:"https://placekitten.com/80/80"}),n(a.NavLinks,{children:[e(a.NavLink,{isActive:!0,children:"Dashboard"}),e(a.NavLink,{children:"Cases"}),e(a.NavLink,{children:"Events"}),e(a.NavLink,{children:"Statistics"}),e(a.NavLink,{children:"Mailbox"})]}),n(t,{children:[e(a.AvatarButton,{children:"DS"}),n(t.Items,{children:[e(t.InfoItem,{title:"Abusix",subtitle:"john.doe@abusix.com"}),e(t.Separator,{}),e(t.Item,{LeftIcon:N,children:"Portal"}),e(t.Separator,{}),e(t.Item,{children:"Account Settings"}),e(t.Item,{children:"Plans & billing"}),e(t.Item,{children:"Team members"}),e(t.Item,{children:"My profile"}),e(t.Separator,{}),e(t.Item,{children:"User Settings"}),e(t.Separator,{}),e(t.Item,{children:"Sign out"})]})]})]})};var d,g,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,R as default};
//# sourceMappingURL=top-bar.stories-87b689a9.js.map
