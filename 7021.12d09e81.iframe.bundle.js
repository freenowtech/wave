"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[7021,30020],{"./src/components/Input/BaseInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>BaseInput});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/cssVariables.ts");const sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({prop:"size",variants:{small:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fontSizes.1")},medium:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fontSizes.2")}}}),inputVariants=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({variants:{boxed:{borderRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("radii.2"),border:`0.0625rem solid ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-neutral-default")}`,"&:active, &:focus":{borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-focus"),boxShadow:`inset 0 0 0 0.0625rem ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-focus")}`}},"bottom-lined":{border:"none",borderTopLeftRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("radii.1"),borderTopRightRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("radii.1"),borderBottom:`0.0625rem solid ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-neutral-default")}`,"&:active, &:focus":{borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-focus"),boxShadow:`inset 0 -0.0625rem 0 0 ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-focus")}`}}}}),BaseInput=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.input`
    margin: 0;
    box-sizing: border-box;
    background: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("background-page-default")};
    border-radius: 0;
    color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-primary")};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fonts.normal")};
    transition: box-shadow ${100}ms, border ${100}ms;
    outline: none;
    appearance: none;
    width: 100%;

    &::placeholder {
        color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-neutral-default")};
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.VL,sizeVariant,inputVariants)};

    &:disabled {
        color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-disabled")};
        border-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-disabled")};
        box-shadow: none;
        cursor: not-allowed;

        &::placeholder {
            color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-disabled")};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-primary")};
        transition: background-color 99999999ms ease 99999999ms;
    }
`},"./src/components/Input/BaseInputLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>BaseInputLabel,n:()=>activePositionBaseStyles});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const activePositionBaseStyles=styled_components__WEBPACK_IMPORTED_MODULE_0__.AH`
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fontWeights.semibold")};
`,BaseInputLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.label.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w})`
    position: absolute;
    pointer-events: none;
    background-color: transparent;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 2rem);
    transition: top ${100}ms ease-out, left ${100}ms ease-out,
        padding ${100}ms ease-out, font-size ${100}ms ease-out,
        color ${100}ms ease-out, background ${100}ms ease-out;
`;try{BaseInputLabel.displayName="BaseInputLabel",BaseInputLabel.__docgenInfo={description:"",displayName:"BaseInputLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/BaseInputLabel.tsx#BaseInputLabel"]={docgenInfo:BaseInputLabel.__docgenInfo,name:"BaseInputLabel",path:"src/components/Input/BaseInputLabel.tsx#BaseInputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/BoxedInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>BoxedInput});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_BaseInput__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Input/BaseInput.ts"),_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/BoxedInputLabel.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/cssVariables.ts");const errorStyles=styled_components__WEBPACK_IMPORTED_MODULE_1__.AH`
    box-shadow: inset 0 0 0 0.0625rem ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-danger-default")};
    border-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-danger-default")};

    & ~ ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
        color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-danger-default")};
    }
`,sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({prop:"waveSize",variants:{small:{height:"2rem",padding:"0 0.5rem"},medium:{height:"3rem",padding:"0 0.75rem"}}}),BoxedInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_BaseInput__WEBPACK_IMPORTED_MODULE_4__.a)`
    ${sizeVariant}
    & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
        ${p=>p.hasValue||p.placeholder?(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.g)(p.waveSize):void 0};
        color: ${({hasValue})=>hasValue?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-neutral-emphasized"):(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-neutral-default")};
        background: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("background-page-default")};
        background: ${p=>`linear-gradient(0deg, \n            ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("background-page-default")} \n            calc(50% + ${"small"===p.waveSize?"0.0825rem":"0.0625rem"}), transparent 50%)`};
    }

    ${p=>p.error?errorStyles:void 0}
    &:disabled {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-disabled")};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            ${p=>(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.g)(p.waveSize)};
        }
    }

    &:focus:not(:disabled) {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            ${p=>(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.g)(p.waveSize)};
            color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("foreground-focus")};
            background: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("background-page-default")};
            background: ${p=>`linear-gradient(0deg, \n                ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("background-page-default")} \n                calc(50% + ${"small"===p.waveSize?"0.0825rem":"0.0625rem"}), transparent 50%)`};
        }
    }
`},"./src/components/Input/BoxedInputLabel.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>BoxedInputLabel,g:()=>activeBoxedPosition});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/themeGet.ts"),_BaseInputLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/BaseInputLabel.tsx");const activeBoxedPosition=size=>styled_components__WEBPACK_IMPORTED_MODULE_1__.AH`
    ${_BaseInputLabel__WEBPACK_IMPORTED_MODULE_2__.n};

    top: ${"small"===size?"-0.375rem":"-0.5rem"};
    font-size: ${"small"===size?"0.625rem":(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.J)("fontSizes.0")};
`,sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({prop:"waveSize",variants:{small:{top:"0.5rem",left:"0.375rem",padding:"0 0.125rem",fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.J)("fontSizes.1")},medium:{top:"0.75rem",left:"0.5rem",padding:"0 0.25rem",fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.J)("fontSizes.2")}}}),BoxedInputLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_BaseInputLabel__WEBPACK_IMPORTED_MODULE_2__.W).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.w})`
    ${sizeVariant};
`},"./src/components/Input/InnerInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>InnerInput});var react=__webpack_require__("./node_modules/react/index.js"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),BaseInput=__webpack_require__("./src/components/Input/BaseInput.ts"),theme=__webpack_require__("./src/essentials/theme.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),BaseInputLabel=__webpack_require__("./src/components/Input/BaseInputLabel.tsx");const activeBottomLinedPosition=size=>styled_components_browser_esm.AH`
    ${BaseInputLabel.n};
    top: ${"small"===size?"0":"0.25rem"};
    font-size: ${"small"===size?"0.625rem":(0,themeGet.J)("fontSizes.0")};
`,sizeVariant=(0,index_esm.Ox)({prop:"waveSize",variants:{small:{top:"0.875rem",padding:"0 0.125rem",fontSize:(0,themeGet.J)("fontSizes.1")},medium:{top:"1.375rem",padding:"0 0.25rem",fontSize:(0,themeGet.J)("fontSizes.2")}}}),BottomLinedInputLabel=(0,styled_components_browser_esm.Ay)(BaseInputLabel.W).attrs({theme:theme.w})`
    left: 0;
    ${sizeVariant}
`;var cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const errorStyles=styled_components_browser_esm.AH`
    box-shadow: inset 0 -0.0625rem 0 0 ${(0,cssVariables.sR)("border-danger-default")};
    border-color: ${(0,cssVariables.sR)("border-danger-default")};

    & ~ ${BottomLinedInputLabel} {
        color: ${(0,cssVariables.sR)("foreground-danger-default")};
    }
`,BottomLinedInput_sizeVariant=(0,index_esm.Ox)({prop:"waveSize",variants:{small:{height:"2.5rem",padding:"1rem 0.125rem 0.375rem"},medium:{height:"3.5rem",padding:"1.625rem 0.25rem 0.625rem"}}}),BottomLinedInput=(0,styled_components_browser_esm.Ay)(BaseInput.a)`
    ${BottomLinedInput_sizeVariant}
    & ~ ${BottomLinedInputLabel} {
        ${p=>p.hasValue||p.placeholder?activeBottomLinedPosition(p.waveSize):""};
        color: ${({hasValue})=>hasValue?(0,cssVariables.sR)("foreground-neutral-emphasized"):(0,cssVariables.sR)("foreground-neutral-default")};
        background: ${(0,cssVariables.sR)("background-page-default")};
    }

    ${p=>p.error?errorStyles:void 0}
    &:disabled {
        & ~ ${BottomLinedInputLabel} {
            color: ${(0,cssVariables.sR)("foreground-disabled")};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        & + ${BottomLinedInputLabel} {
            ${p=>activeBottomLinedPosition(p.waveSize)};
        }
    }

    &:focus:not(:disabled) {
        & ~ ${BottomLinedInputLabel} {
            ${p=>activeBottomLinedPosition(p.waveSize)};
            color: ${(0,cssVariables.sR)("foreground-focus")};
            background: ${(0,cssVariables.sR)("background-page-default")};
        }
    }
`;var BoxedInput=__webpack_require__("./src/components/Input/BoxedInput.ts"),BoxedInputLabel=__webpack_require__("./src/components/Input/BoxedInputLabel.ts");const InputWrapper=styled_components_browser_esm.Ay.div.attrs({theme:theme.w})`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${(0,index_esm.Zz)(index_esm.Lc,index_esm.VL)}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InnerInput=(0,react.forwardRef)(((props,ref)=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.Fk)(props),{marginProps,restProps:withoutMargin}=(0,extractProps.LI)(withoutClassName),{widthProps,restProps}=(0,extractProps.IL)(withoutMargin),{label,onChange,size,id:providedId,variant,...rest}=restProps,id=(0,useGeneratedId.s)(providedId),innerRef=(0,react.useRef)();(0,react.useImperativeHandle)(ref,(()=>innerRef.current),[]);const[hasValue,setHasValue]=(0,react.useState)(rest?.value?.toString().length>0),hasUncontrolledValue=innerRef?.current?.value?.length>0,handleChange=event=>{setHasValue(event.target.value.length>0),onChange&&onChange(event)};return(0,react.useEffect)((()=>{setHasValue(rest?.value?.toString().length>0)}),[rest.value]),"boxed"===variant?(0,jsx_runtime.jsxs)(InputWrapper,{...classNameProps,...marginProps,...widthProps,children:[(0,jsx_runtime.jsx)(BoxedInput.D,{...rest,ref:innerRef,variant,id,waveSize:size,hasValue:hasValue||hasUncontrolledValue,onChange:handleChange,"aria-invalid":rest.error}),label&&(0,jsx_runtime.jsx)(BoxedInputLabel.H,{htmlFor:id,waveSize:size,children:label})]}):"bottom-lined"===variant?(0,jsx_runtime.jsxs)(InputWrapper,{...classNameProps,...marginProps,...widthProps,children:[(0,jsx_runtime.jsx)(BottomLinedInput,{...rest,ref:innerRef,variant,id,waveSize:size,hasValue:hasValue||hasUncontrolledValue,onChange:handleChange,"aria-invalid":rest.error}),label&&(0,jsx_runtime.jsx)(BottomLinedInputLabel,{htmlFor:id,waveSize:size,children:label})]}):void 0}));InnerInput.defaultProps={size:"medium",variant:"boxed",type:"text"};try{InnerInput.displayName="InnerInput",InnerInput.__docgenInfo={description:"",displayName:"InnerInput",props:{label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/InnerInput.tsx#InnerInput"]={docgenInfo:InnerInput.__docgenInfo,name:"InnerInput",path:"src/components/Input/InnerInput.tsx#InnerInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Password/Password.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Password});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),EyeIcon=__webpack_require__("./src/icons/actions/EyeIcon.tsx"),EyeClosedIcon=__webpack_require__("./src/icons/actions/EyeClosedIcon.tsx"),InnerInput=__webpack_require__("./src/components/Input/InnerInput.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts");const inputType=(0,index_esm.Ox)({prop:"variant",variants:{"bottom-lined":{justifyContent:"right"}}}),ToggleButton=styled_components_browser_esm.Ay.button`
    box-sizing: border-box;
    position: absolute;
    background: transparent;
    border-radius: ${(0,themeGet.J)("radii.2")};
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    height: 100%;
    width: ${"2.5rem"};
    right: 0;
    align-items: ${p=>"small"===p.size||"bottom-lined"===p.variant?"flex-end":"center"};
    padding-bottom: ${p=>"small"===p.size?"0.25rem":"bottom-lined"===p.variant?"0.5rem":0};
    ${inputType};

    svg path {
        fill: var(--wave-c-password-color);
    }

    &:hover svg path {
        fill: var(--wave-c-password-color-hover);
    }
`;var extractProps=__webpack_require__("./src/utils/extractProps.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PasswordWrapper=styled_components_browser_esm.Ay.div`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${(0,index_esm.Zz)(index_esm.Lc,index_esm.VL)}

    input {
        /* avoid text under the toggle mode button */
        padding-right: ${"2.5rem"};
    }
`,defaultAriaStrings={showPasswordButton:"Show password",hidePasswordButton:"Hide password",messagePasswordIsHidden:"Your password is hidden",messagePasswordIsShown:"Your password is shown"},Password=(0,react.forwardRef)((({purpose="login",id,disabled,size="medium",variant="boxed",ariaStrings={},...rest},ref)=>{const[isHidden,setIsHidden]=(0,react.useState)(!0),aria={...defaultAriaStrings,...ariaStrings},inputId=(0,useGeneratedId.s)(id),{marginProps,restProps:withoutMargin}=(0,extractProps.LI)(rest),{widthProps,restProps}=(0,extractProps.IL)(withoutMargin),inputRef=(0,react.useRef)();return(0,react.useImperativeHandle)(ref,(()=>inputRef.current),[]),(0,jsx_runtime.jsxs)(PasswordWrapper,{...widthProps,...marginProps,children:[(0,jsx_runtime.jsx)(InnerInput.P,{...restProps,width:"100%",id:inputId,size,variant,disabled,ref:inputRef,type:isHidden?"password":"text",autoComplete:"new-password"===purpose?"new-password":"off"}),disabled?void 0:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ToggleButton,{size,variant,type:"button",onClick:()=>{setIsHidden((prevValue=>!prevValue)),inputRef?.current&&inputRef.current.focus()},"aria-controls":inputId,"aria-label":isHidden?aria.showPasswordButton:aria.hidePasswordButton,style:{"--wave-c-password-color":(0,cssVariables.sR)("foreground-neutral-emphasized"),"--wave-c-password-color-hover":(0,cssVariables.sR)("foreground-primary")},children:isHidden?(0,jsx_runtime.jsx)(EyeIcon.A,{}):(0,jsx_runtime.jsx)(EyeClosedIcon.A,{})}),(0,jsx_runtime.jsx)(VisuallyHidden.s,{as:"span","aria-live":"polite",children:isHidden?aria.messagePasswordIsHidden:aria.messagePasswordIsShown})]})]})}));try{Password.displayName="Password",Password.__docgenInfo={description:"",displayName:"Password",props:{label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}},purpose:{defaultValue:{value:"login"},description:"Sets the purpose of the password input element",name:"purpose",required:!1,type:{name:"enum",value:[{value:'"login"'},{value:'"new-password"'}]}},ariaStrings:{defaultValue:{value:"{}"},description:"If you project supports multiple languages it is recommended to pass translated labels to these properties",name:"ariaStrings",required:!1,type:{name:"{ showPasswordButton?: string; hidePasswordButton?: string; messagePasswordIsHidden?: string; messagePasswordIsShown?: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Password/Password.tsx#Password"]={docgenInfo:Password.__docgenInfo,name:"Password",path:"src/components/Password/Password.tsx#Password"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>VisuallyHidden});const VisuallyHidden=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px; /* stylelint-disable-line unit-whitelist */
    width: 1px; /* stylelint-disable-line unit-whitelist */
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/actions/EyeClosedIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const EyeClosedIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 20c-5.035 0-9.28-3.383-10.586-8h2.098a9.005 9.005 0 0016.976 0h2.098c-1.306 4.617-5.55 8-10.586 8z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M2.361 14.305c.163.295.339.581.527.859L.926 16.729l-.624-.782 2.06-1.642z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M.926 16.73l1.962-1.565c.188.276.388.544.599.802L1.55 17.51l-.624-.782zM4.896 20.18l.982-2.04c.278.187.564.36.859.522l-.94 1.952-.9-.434zM5.797 20.614l.94-1.952c.292.159.592.306.9.439l-.939 1.947-.9-.434z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.872 22v-2.057c.329.034.662.053 1 .056V22h-1zm1 0v-2a11.026 11.026 0 001-.034V22h-1zM17.045 21.048l-.895-1.858c.31-.126.613-.266.908-.42l.888 1.844-.9.434zm.901-.434l-.888-1.843c.298-.155.588-.323.87-.503l.919 1.912-.9.434z",fill:"currentColor"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M22.194 17.511l-1.783-1.421c.215-.255.418-.52.61-.793l1.796 1.432-.623.782zM23.44 15.947l-.623.782-1.796-1.433c.192-.274.372-.558.538-.85l1.882 1.501z",fill:"currentColor"})]})};EyeClosedIcon.displayName="EyeClosedIcon";const __WEBPACK_DEFAULT_EXPORT__=EyeClosedIcon;try{EyeClosedIcon.displayName="EyeClosedIcon",EyeClosedIcon.__docgenInfo={description:"",displayName:"EyeClosedIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'ReadCssColorVariable | "inherit" | (string & {})'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/EyeClosedIcon.tsx#EyeClosedIcon"]={docgenInfo:EyeClosedIcon.__docgenInfo,name:"EyeClosedIcon",path:"src/icons/actions/EyeClosedIcon.tsx#EyeClosedIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/actions/EyeIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const EyeIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 4c5.035 0 9.28 3.383 10.586 8-1.307 4.618-5.551 8-10.586 8s-9.28-3.383-10.586-8C2.721 7.382 6.965 4 12 4zm0 2a9.006 9.006 0 00-8.406 5.775L3.511 12l.083.226a9.007 9.007 0 008.13 5.77L12 18a9.006 9.006 0 008.406-5.775l.082-.226-.082-.224a9.007 9.007 0 00-8.13-5.77L12 6zm0 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z",fill:"currentColor"})})};EyeIcon.displayName="EyeIcon";const __WEBPACK_DEFAULT_EXPORT__=EyeIcon;try{EyeIcon.displayName="EyeIcon",EyeIcon.__docgenInfo={description:"",displayName:"EyeIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'ReadCssColorVariable | "inherit" | (string & {})'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/EyeIcon.tsx#EyeIcon"]={docgenInfo:EyeIcon.__docgenInfo,name:"EyeIcon",path:"src/icons/actions/EyeIcon.tsx#EyeIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{Fk:()=>extractClassNameProps,IL:()=>extractWidthProps,LI:()=>extractWrapperMarginProps,hA:()=>extractHeightProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/hooks/useGeneratedId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useGeneratedId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useGeneratedId=id=>{const generatedId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return id||generatedId}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=7021.12d09e81.iframe.bundle.js.map