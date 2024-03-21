import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{c as N}from"./class-names-xhKKfcKT.js";import{l,d8 as x,a1 as g}from"./zoom-to-fit-icon-65magoHv.js";import{A as h}from"./avatar-zyahZRnX.js";import{a}from"./menu-v-J7fPh8.js";import"./index-OjgoNOWw.js";import"./menu-info-item-zXznKl6s.js";import"./render--CnTCjM4.js";import"./disposables-x8EK1kJp.js";import"./use-disposables-zYA53INM.js";import"./keyboard-ypJuuhig.js";import"./use-text-value-5FULYfhL.js";import"./owner-k5blU4nj.js";import"./bugs-DTVvle51.js";import"./focus-management-3l6xl84w.js";import"./use-owner-is5PDNtX.js";import"./open-closed-QZcf9p9x.js";import"./use-resolve-button-type-CvYxBXG6.js";import"./menu-separator-A-X6ODcl.js";import"./menu-title-T4by162O.js";const c=({src:t})=>e.jsx("img",{src:t,alt:"logo"});c.__docgenInfo={description:"",methods:[],displayName:"TopBarLogo",props:{src:{required:!0,tsType:{name:"string"},description:""}}};const m=({children:t})=>e.jsx("div",{className:"flex grow gap-12 pl-20 pr-6",children:t});m.__docgenInfo={description:"",methods:[],displayName:"TopBarNavLinks",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const u=({isActive:t=!1,children:o})=>e.jsx("div",{children:e.jsx("div",{className:"group rounded px-4 py-1 hover:bg-neutral-800 group-focus:ring-2 group-focus:ring-primary-200",children:e.jsx("div",{className:N("relative font-sans text-sm text-neutral-0 ",t&&"after:absolute after:left-0 after:right-0 after:top-7 after:block after:h-0.5 after:bg-neutral-0"),children:o})})});u.__docgenInfo={description:"",methods:[],displayName:"TopBarNavLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const d=({children:t})=>e.jsxs(a.Button,{className:"flex items-center gap-1 rounded px-1 py-1 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200",children:[e.jsx(h,{color:"primary",children:t}),e.jsx(l,{className:"h-4 w-4 fill-neutral-400"})]});d.__docgenInfo={description:"",methods:[],displayName:"TopBarAvatarButton",props:{children:{required:!0,tsType:{name:"string"},description:""}}};const T=({children:t})=>e.jsx("div",{className:"flex items-center gap-2 px-2",children:t});T.__docgenInfo={description:"",methods:[],displayName:"TrayButtons",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f=({onClick:t,id:o,children:v})=>e.jsx("div",{role:"button",id:o,tabIndex:-1,onClick:t,onKeyDown:t,className:"cursor-pointer rounded p-3 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-200",children:v});f.__docgenInfo={description:"",methods:[],displayName:"TrayButton",props:{id:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const B=()=>e.jsxs("div",{className:"flex gap-1",children:[e.jsx(x,{className:"h-4 w-4 fill-primary-200"}),e.jsx(l,{className:"h-4 w-4 fill-neutral-400"})]});B.__docgenInfo={description:"",methods:[],displayName:"TopBarHelpButton"};const r=({children:t})=>e.jsx("div",{className:"flex h-12 min-w-[1024px] items-center justify-between bg-abusix-dusk px-4",children:t});r.TrayButtons=T;r.TrayButton=f;r.Logo=c;r.NavLinks=m;r.NavLink=u;r.AvatarButton=d;r.HelpButton=B;r.__docgenInfo={description:"",methods:[{name:"TrayButtons",docblock:null,modifiers:["static"],params:[{name:"{ children }: TTrayButtonsProps",optional:!1,type:{name:"TTrayButtonsProps",alias:"TTrayButtonsProps"}}],returns:null},{name:"TrayButton",docblock:null,modifiers:["static"],params:[{name:"{ onClick, id, children }: TrayButtonProps",optional:!1,type:{name:"TrayButtonProps",alias:"TrayButtonProps"}}],returns:null},{name:"Logo",docblock:null,modifiers:["static"],params:[{name:"{ src }: TopBarLogoProps",optional:!1,type:{name:"TopBarLogoProps",alias:"TopBarLogoProps"}}],returns:null},{name:"NavLinks",docblock:null,modifiers:["static"],params:[{name:"{ children }: TopBarNavLinksProps",optional:!1,type:{name:"TopBarNavLinksProps",alias:"TopBarNavLinksProps"}}],returns:null},{name:"NavLink",docblock:null,modifiers:["static"],params:[{name:"{ isActive = false, children }: TopBarNavLinkProps",optional:!1,type:{name:"TopBarNavLinkProps",alias:"TopBarNavLinkProps"}}],returns:null},{name:"AvatarButton",docblock:null,modifiers:["static"],params:[{name:"{ children }: TopBarAvatarButtonProps",optional:!1,type:{name:"TopBarAvatarButtonProps",alias:"TopBarAvatarButtonProps"}}],returns:null},{name:"HelpButton",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"TopBar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const O={title:"TopBar",component:r,parameters:{layout:"fullscreen"}},n={render:()=>e.jsxs(r,{children:[e.jsx(r.Logo,{src:"https://placekitten.com/80/80"}),e.jsxs(r.NavLinks,{children:[e.jsx(r.NavLink,{isActive:!0,children:"Dashboard"}),e.jsx(r.NavLink,{children:"Cases"}),e.jsx(r.NavLink,{children:"Events"}),e.jsx(r.NavLink,{children:"Statistics"}),e.jsx(r.NavLink,{children:"Mailbox"})]}),e.jsxs(a,{children:[e.jsx(r.AvatarButton,{children:"DS"}),e.jsxs(a.Items,{children:[e.jsx(a.InfoItem,{title:"Abusix",subtitle:"john.doe@abusix.com"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{LeftIcon:g,children:"Portal"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{children:"Account Settings"}),e.jsx(a.Item,{children:"Plans & billing"}),e.jsx(a.Item,{children:"Team members"}),e.jsx(a.Item,{children:"My profile"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{children:"User Settings"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{children:"Sign out"})]})]})]})};var s,i,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const V=["Default"];export{n as Default,V as __namedExportsOrder,O as default};
