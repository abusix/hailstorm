import{j as h}from"./jsx-runtime-DvLKfCe6.js";import{T as s}from"./toggle-xj_yRI9R.js";import"./index-aXz8NaAs.js";import"./class-names-J070TWId.js";import"./render-THca3tYe.js";import"./keyboard-NjAwe_S6.js";import"./bugs-DTVvle51.js";import"./label-tTJj5301.js";import"./description-rwhSs07y.js";import"./use-resolve-button-type-Iz3xK6-2.js";import"./hidden-G4mt23Ky.js";import"./use-disposables-qU89AwEH.js";import"./disposables-x8EK1kJp.js";const{Channel:S}=__STORYBOOK_MODULE_CHANNELS__,{global:c}=__STORYBOOK_MODULE_GLOBAL__,{logger:i}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{STORY_RENDERED:q,UPDATE_STORY_ARGS:T,RESET_STORY_ARGS:A,UPDATE_GLOBALS:F,FORCE_RE_RENDER:X}=__STORYBOOK_MODULE_CORE_EVENTS__;function w(){let e={setHandler:()=>{},send:()=>{}};return new S({transport:e})}var v=class{constructor(){this.getChannel=()=>{if(!this.channel){let e=w();return this.setChannel(e),e}return this.channel},this.getServerChannel=()=>{if(!this.serverChannel)throw new Error("Accessing non-existent serverChannel");return this.serverChannel},this.ready=()=>this.promise,this.hasChannel=()=>!!this.channel,this.hasServerChannel=()=>!!this.serverChannel,this.setChannel=e=>{this.channel=e,this.resolve()},this.setServerChannel=e=>{this.serverChannel=e},this.promise=new Promise(e=>{this.resolve=()=>e(this.getChannel())})}},u="__STORYBOOK_ADDONS_PREVIEW";function R(){return c[u]||(c[u]=new v),c[u]}var L=R(),D=(e,t)=>e.length===t.length&&e.every((n,a)=>n===t[a]),g=()=>new Error("Storybook preview hooks can only be called inside decorators and story functions.");function x(){return c.STORYBOOK_HOOKS_CONTEXT||null}function C(){let e=x();if(e==null)throw g();return e}function y(e,t,n){let a=C();if(a.currentPhase==="MOUNT"){n!=null&&!Array.isArray(n)&&i.warn(`${e} received a final argument that is not an array (instead, received ${n}). When specified, the final argument must be an array.`);let r={name:e,deps:n};return a.currentHooks.push(r),t(r),r}if(a.currentPhase==="UPDATE"){let r=a.getNextHook();if(r==null)throw new Error("Rendered more hooks than during the previous render.");return r.name!==e&&i.warn(`Storybook has detected a change in the order of Hooks${a.currentDecoratorName?` called by ${a.currentDecoratorName}`:""}. This will lead to bugs and errors if not fixed.`),n!=null&&r.deps==null&&i.warn(`${e} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`),n!=null&&r.deps!=null&&n.length!==r.deps.length&&i.warn(`The final argument passed to ${e} changed size between renders. The order and size of this array must remain constant.
Previous: ${r.deps}
Incoming: ${n}`),(n==null||r.deps==null||!D(n,r.deps))&&(t(r),r.deps=n),r}throw g()}function N(e,t,n){let{memoizedState:a}=y(e,r=>{r.memoizedState=t()},n);return a}function m(e,t){return N("useCallback",()=>e,t)}function H(){let{currentContext:e}=C();if(e==null)throw g();return e}function b(){let e=L.getChannel(),{id:t,args:n}=H(),a=m(d=>e.emit(T,{storyId:t,updatedArgs:d}),[e,t]),r=m(d=>e.emit(A,{storyId:t,argNames:d}),[e,t]);return[n,a,r]}const J={title:"Toggle",component:s},o={render:e=>{const[{checked:t},n]=b(),a=()=>n({checked:!t});return h.jsxs(s,{children:[h.jsx(s.Switch,{checked:e.checked,disabled:e.disabled,onChange:a,ariaLabel:"Enable notifications"}),h.jsx(s.Label,{children:"notifications"})]})},args:{checked:!1,disabled:!1}},l={render:e=>{const[{checked:t},n]=b(),a=()=>n({checked:!t});return h.jsx(s.Switch,{checked:e.checked,disabled:e.disabled,onChange:a,ariaLabel:"Enable notifications"})},args:{...o.args}};var f,O,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleOnChange = () => updateArgs({
      checked: !checked
    });
    return <Toggle>
                <Toggle.Switch checked={args.checked} disabled={args.disabled} onChange={handleOnChange} ariaLabel="Enable notifications" />
                <Toggle.Label>notifications</Toggle.Label>
            </Toggle>;
  },
  args: {
    checked: false,
    disabled: false
  }
}`,...(k=(O=o.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var _,p,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleOnChange = () => updateArgs({
      checked: !checked
    });
    return <Toggle.Switch checked={args.checked} disabled={args.disabled} onChange={handleOnChange} ariaLabel="Enable notifications" />;
  },
  args: {
    ...Default.args
  }
}`,...(E=(p=l.parameters)==null?void 0:p.docs)==null?void 0:E.source}}};const Q=["Default","WithoutLabel"];export{o as Default,l as WithoutLabel,Q as __namedExportsOrder,J as default};
