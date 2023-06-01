"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[87918,43929],{"./src/components/Input/BaseInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>BaseInput});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.1")},medium:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.2")}}}),inputVariants=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({variants:{boxed:{borderRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("radii.2"),border:`0.0625rem solid ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200}`,"&:active, &:focus":{borderColor:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900,boxShadow:`inset 0 0 0 0.0625rem ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900}`}},"bottom-lined":{border:"none",borderTopLeftRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("radii.1"),borderTopRightRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("radii.1"),borderBottom:`0.0625rem solid ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200}`,"&:active, &:focus":{borderColor:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900,boxShadow:`inset 0 -0.0625rem 0 0 ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900}`}}}}),BaseInput=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.input`
    margin: 0;
    box-sizing: border-box;
    background: ${p=>p.inverted?"transparent":_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE};
    border-radius: 0;
    color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fonts.normal")};
    transition: box-shadow ${100}ms, border ${100}ms;
    outline: none;
    appearance: none;
    width: 100%;

    &::placeholder {
        color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_350};
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.bf,sizeVariant,inputVariants)};

    &:disabled {
        color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200};
        border-color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200};
        box-shadow: none;
        cursor: not-allowed;

        &::placeholder {
            color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900};
        transition: background-color 99999999ms ease 99999999ms;
    }
`},"./src/components/Input/BaseInputLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>BaseInputLabel,i:()=>activePositionBaseStyles});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const activePositionBaseStyles=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontWeights.semibold")};
`,BaseInputLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.label.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r})`
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
`;try{BaseInputLabel.displayName="BaseInputLabel",BaseInputLabel.__docgenInfo={description:"",displayName:"BaseInputLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement>"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/BaseInputLabel.tsx#BaseInputLabel"]={docgenInfo:BaseInputLabel.__docgenInfo,name:"BaseInputLabel",path:"src/components/Input/BaseInputLabel.tsx#BaseInputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/BoxedInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>BoxedInput});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_BaseInput__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Input/BaseInput.ts"),_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/BoxedInputLabel.ts");const errorStyles=styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    box-shadow: inset 0 0 0 0.0625rem ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.NEGATIVE_ORANGE_900};
    border-color: ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.NEGATIVE_ORANGE_900};

    & ~ ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
        color: ${_essentials__WEBPACK_IMPORTED_MODULE_2__.w.NEGATIVE_ORANGE_900};
    }
`,sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{height:"2rem",padding:"0 0.5rem"},medium:{height:"3rem",padding:"0 0.75rem"}}}),BoxedInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)(_BaseInput__WEBPACK_IMPORTED_MODULE_4__.Q)`
    ${sizeVariant}
    & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
        ${p=>p.hasValue||p.placeholder?(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.V)(p.size):void 0};
        color: ${({hasValue,inverted})=>inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200:hasValue?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_350};
        background: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE};
        background: ${p=>`linear-gradient(0deg, ${p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE} calc(50% + ${"small"===p.size?"0.0825rem":"0.0625rem"}), transparent 50%)`};
    }

    ${p=>p.error?errorStyles:void 0}
    &:disabled {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_200};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            ${p=>(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.V)(p.size)};
        }
    }

    &:focus:not(:disabled) {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            ${p=>(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.V)(p.size)};
            color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.ACTION_BLUE_900};
            background: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE};
            background: ${p=>`linear-gradient(0deg, ${p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_2__.w.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_2__.w.WHITE} calc(50% + ${"small"===p.size?"0.0825rem":"0.0625rem"}), transparent 50%)`};
        }
    }
`},"./src/components/Input/BoxedInputLabel.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>BoxedInputLabel,V:()=>activeBoxedPosition});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/themeGet.ts"),_BaseInputLabel__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/BaseInputLabel.tsx");const activeBoxedPosition=size=>styled_components__WEBPACK_IMPORTED_MODULE_1__.iv`
    ${_BaseInputLabel__WEBPACK_IMPORTED_MODULE_2__.i};

    top: ${"small"===size?"-0.375rem":"-0.5rem"};
    font-size: ${"small"===size?"0.625rem":(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.U)("fontSizes.0")};
`,sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{top:"0.5rem",left:"0.375rem",padding:"0 0.125rem",fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.U)("fontSizes.1")},medium:{top:"0.75rem",left:"0.5rem",padding:"0 0.25rem",fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.U)("fontSizes.2")}}}),BoxedInputLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP)(_BaseInputLabel__WEBPACK_IMPORTED_MODULE_2__.h).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.r})`
    ${sizeVariant};
`},"./src/components/Input/InnerInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>InnerInput});var react=__webpack_require__("./node_modules/react/index.js"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),Colors=__webpack_require__("./src/essentials/Colors/Colors.ts"),BaseInput=__webpack_require__("./src/components/Input/BaseInput.ts"),theme=__webpack_require__("./src/essentials/theme.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),BaseInputLabel=__webpack_require__("./src/components/Input/BaseInputLabel.tsx");const activeBottomLinedPosition=size=>styled_components_browser_esm.iv`
    ${BaseInputLabel.i};
    top: ${"small"===size?"0":"0.25rem"};
    font-size: ${"small"===size?"0.625rem":(0,themeGet.U)("fontSizes.0")};
`,sizeVariant=(0,index_esm.bU)({prop:"size",variants:{small:{top:"0.875rem",padding:"0 0.125rem",fontSize:(0,themeGet.U)("fontSizes.1")},medium:{top:"1.375rem",padding:"0 0.25rem",fontSize:(0,themeGet.U)("fontSizes.2")}}}),BottomLinedInputLabel=(0,styled_components_browser_esm.ZP)(BaseInputLabel.h).attrs({theme:theme.r})`
    left: 0;
    ${sizeVariant}
`,errorStyles=styled_components_browser_esm.iv`
    box-shadow: inset 0 -0.0625rem 0 0 ${Colors.w.NEGATIVE_ORANGE_900};
    border-color: ${Colors.w.NEGATIVE_ORANGE_900};

    & ~ ${BottomLinedInputLabel} {
        color: ${Colors.w.NEGATIVE_ORANGE_900};
    }
`,BottomLinedInput_sizeVariant=(0,index_esm.bU)({prop:"size",variants:{small:{height:"2.5rem",padding:"1rem 0.125rem 0.375rem"},medium:{height:"3.5rem",padding:"1.625rem 0.25rem 0.625rem"}}}),BottomLinedInput=(0,styled_components_browser_esm.ZP)(BaseInput.Q)`
    ${BottomLinedInput_sizeVariant}
    & ~ ${BottomLinedInputLabel} {
        ${p=>p.hasValue||p.placeholder?activeBottomLinedPosition(p.size):""};
        color: ${({hasValue,inverted})=>inverted?Colors.w.AUTHENTIC_BLUE_200:hasValue?Colors.w.AUTHENTIC_BLUE_550:Colors.w.AUTHENTIC_BLUE_350};
        background: ${p=>p.inverted?Colors.w.AUTHENTIC_BLUE_900:Colors.w.WHITE};
    }

    ${p=>p.error?errorStyles:void 0}
    &:disabled {
        & ~ ${BottomLinedInputLabel} {
            color: ${p=>p.inverted?Colors.w.AUTHENTIC_BLUE_550:Colors.w.AUTHENTIC_BLUE_200};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        & + ${BottomLinedInputLabel} {
            ${p=>activeBottomLinedPosition(p.size)};
        }
    }

    &:focus:not(:disabled) {
        & ~ ${BottomLinedInputLabel} {
            ${p=>activeBottomLinedPosition(p.size)};
            color: ${p=>p.inverted?Colors.w.WHITE:Colors.w.ACTION_BLUE_900};
            background: ${p=>p.inverted?Colors.w.AUTHENTIC_BLUE_900:Colors.w.WHITE};
        }
    }
`;var BoxedInput=__webpack_require__("./src/components/Input/BoxedInput.ts"),BoxedInputLabel=__webpack_require__("./src/components/Input/BoxedInputLabel.ts");const InputWrapper=styled_components_browser_esm.ZP.div.attrs({theme:theme.r})`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${(0,index_esm.qC)(index_esm.e6,index_esm.bf)}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InnerInput=(0,react.forwardRef)(((props,ref)=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.BY)(props),{marginProps,restProps:withoutMargin}=(0,extractProps.c2)(withoutClassName),{widthProps,restProps}=(0,extractProps.Jy)(withoutMargin),inputRef=(0,react.useRef)(),{label,onChange,size,id:providedId,variant,...rest}=restProps,id=(0,useGeneratedId.I)(providedId),[hasValue,setHasValue]=(0,react.useState)(rest?.value?.toString().length>0),hasUncontrolledValue=inputRef?.current?.value?.length>0,handleChange=event=>{setHasValue(event.target.value.length>0),onChange&&onChange(event)};return(0,react.useEffect)((()=>{setHasValue(rest?.value?.toString().length>0)}),[rest.value]),"boxed"===variant?(0,jsx_runtime.jsxs)(InputWrapper,{ref,...classNameProps,...marginProps,...widthProps,children:[(0,jsx_runtime.jsx)(BoxedInput.i,{...rest,ref:inputRef,variant,id,size,hasValue:hasValue||hasUncontrolledValue,onChange:handleChange}),label&&(0,jsx_runtime.jsx)(BoxedInputLabel.H,{htmlFor:id,size,children:label})]}):"bottom-lined"===variant?(0,jsx_runtime.jsxs)(InputWrapper,{ref,...classNameProps,...marginProps,...widthProps,children:[(0,jsx_runtime.jsx)(BottomLinedInput,{...rest,variant,id,size,hasValue:hasValue||hasUncontrolledValue,onChange:handleChange}),label&&(0,jsx_runtime.jsx)(BottomLinedInputLabel,{htmlFor:id,size,children:label})]}):void 0}));InnerInput.defaultProps={size:"medium",variant:"boxed",type:"text"};try{InnerInput.displayName="InnerInput",InnerInput.__docgenInfo={description:"",displayName:"InnerInput",props:{label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:null,description:"Inverts the colors of the input",name:"inverted",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/InnerInput.tsx#InnerInput"]={docgenInfo:InnerInput.__docgenInfo,name:"InnerInput",path:"src/components/Input/InnerInput.tsx#InnerInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Password/Password.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Password});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),EyeOpenIcon=__webpack_require__("./src/icons/actions/EyeOpenIcon.tsx"),EyeClosedIcon=__webpack_require__("./src/icons/actions/EyeClosedIcon.tsx"),InnerInput=__webpack_require__("./src/components/Input/InnerInput.tsx");const VisuallyHidden=styled_components_browser_esm.ZP.div`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px; /* stylelint-disable-line unit-whitelist */
    width: 1px; /* stylelint-disable-line unit-whitelist */
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}var Colors=__webpack_require__("./src/essentials/Colors/Colors.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts");const inputType=(0,index_esm.bU)({prop:"variant",variants:{"bottom-lined":{justifyContent:"right"}}}),ToggleButton=styled_components_browser_esm.ZP.button`
    box-sizing: border-box;
    position: absolute;
    background: transparent;
    border-radius: ${(0,themeGet.U)("radii.2")};
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
        fill: var(--color);
    }

    &:hover svg path {
        fill: var(--hover-color);
    }
`;var extractProps=__webpack_require__("./src/utils/extractProps.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PasswordWrapper=styled_components_browser_esm.ZP.div`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${(0,index_esm.qC)(index_esm.e6,index_esm.bf)}

    input {
        /* avoid text under the toggle mode button */
        padding-right: ${"2.5rem"};
    }
`,defaultAriaStrings={showPasswordButton:"Show password",hidePasswordButton:"Hide password",messagePasswordIsHidden:"Your password is hidden",messagePasswordIsShown:"Your password is shown"},iconColors={regular:{color:Colors.w.AUTHENTIC_BLUE_550,hover:Colors.w.AUTHENTIC_BLUE_900},inverted:{color:Colors.w.AUTHENTIC_BLUE_200,hover:Colors.w.AUTHENTIC_BLUE_50}},Password=(0,react.forwardRef)((({purpose="login",id,disabled,size="medium",variant="boxed",inverted,ariaStrings={},...rest},ref)=>{const[isHidden,setIsHidden]=(0,react.useState)(!0),aria={...defaultAriaStrings,...ariaStrings},{color,hover}=iconColors[inverted?"inverted":"regular"],inputId=(0,useGeneratedId.I)(id),{marginProps,restProps:withoutMargin}=(0,extractProps.c2)(rest),{widthProps,restProps}=(0,extractProps.Jy)(withoutMargin);return(0,jsx_runtime.jsxs)(PasswordWrapper,{...widthProps,...marginProps,children:[(0,jsx_runtime.jsx)(InnerInput._,{...restProps,width:"100%",id:inputId,size,variant,inverted,disabled,ref,type:isHidden?"password":"text",autoComplete:"new-password"===purpose?"new-password":"off"}),disabled?void 0:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ToggleButton,{size,variant,type:"button",onClick:()=>{setIsHidden((prevValue=>!prevValue));const inputElement=document.querySelector(`input[id=${inputId}]`);inputElement&&inputElement.focus()},"aria-controls":inputId,"aria-label":isHidden?aria.showPasswordButton:aria.hidePasswordButton,style:{"--color":color,"--hover-color":hover},children:isHidden?(0,jsx_runtime.jsx)(EyeOpenIcon.Z,{}):(0,jsx_runtime.jsx)(EyeClosedIcon.Z,{})}),(0,jsx_runtime.jsx)(VisuallyHidden,{as:"span","aria-live":"polite",children:isHidden?aria.messagePasswordIsHidden:aria.messagePasswordIsShown})]})]})}));try{Password.displayName="Password",Password.__docgenInfo={description:"",displayName:"Password",props:{label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},inverted:{defaultValue:null,description:"Inverts the colors of the input",name:"inverted",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}},purpose:{defaultValue:{value:"login"},description:"Sets the purpose of the password input element",name:"purpose",required:!1,type:{name:"enum",value:[{value:'"login"'},{value:'"new-password"'}]}},ariaStrings:{defaultValue:{value:"{}"},description:"If you project supports multiple languages it is recommended to pass translated labels to these properties",name:"ariaStrings",required:!1,type:{name:"{ showPasswordButton?: string; hidePasswordButton?: string; messagePasswordIsHidden?: string; messagePasswordIsShown?: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Password/Password.tsx#Password"]={docgenInfo:Password.__docgenInfo,name:"Password",path:"src/components/Password/Password.tsx#Password"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/actions/EyeClosedIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _essentials__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const EyeClosedIcon=({size="medium",...props})=>{const sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M13.025 16.956V20h-2.05v-3.044a11.746 11.746 0 01-2.941-.636l-1.232 3.044-1.904-.752 1.266-3.127a.56.56 0 01.013-.018 11.41 11.41 0 01-2.551-1.98l-.057.072-2.12 2.094L0 14.221l2.248-2.22.094-.114A10.743 10.743 0 011 9.001l1.128.001L3.178 9l.087.226c1.332 3.344 4.644 5.66 8.449 5.77L12 15c3.924 0 7.37-2.346 8.735-5.774L20.82 9H23a10.748 10.748 0 01-1.355 2.905c.065.056.107.095.107.095L24 14.221l-1.45 1.432-2.12-2.094-.063-.064a11.412 11.412 0 01-2.54 1.97c.006.012.008.02.008.02l1.267 3.127-1.904.752-1.232-3.044c-.93.33-1.916.549-2.941.636z",fill:"currentColor"})})};EyeClosedIcon.displayName="EyeClosedIcon",EyeClosedIcon.defaultProps={color:_essentials__WEBPACK_IMPORTED_MODULE_3__.w.AUTHENTIC_BLUE_900};const __WEBPACK_DEFAULT_EXPORT__=EyeClosedIcon;try{EyeClosedIcon.displayName="EyeClosedIcon",EyeClosedIcon.__docgenInfo={description:"",displayName:"EyeClosedIcon",props:{color:{defaultValue:{value:"Colors.AUTHENTIC_BLUE_900"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:"enum",value:[{value:'"#FFFFFF"'},{value:'"#000000"'},{value:'"#000F1F"'},{value:'"#001E3E"'},{value:'"#637689"'},{value:'"#9CA7B4"'},{value:'"#C6CDD4"'},{value:'"#F1F2F4"'},{value:'"#BF0820"'},{value:'"#FF0A2B"'},{value:'"#0750A4"'},{value:'"#096BDB"'},{value:'"#9FC5F1"'},{value:'"#D6E6F9"'},{value:'"#E4EFFB"'},{value:'"#F1F7FD"'},{value:'"#BF00B9"'},{value:'"#FF00F7"'},{value:'"#FF9CFC"'},{value:'"#FFF1FF"'},{value:'"#05763B"'},{value:'"#069D4F"'},{value:'"#9ED9BB"'},{value:'"#F1FAF5"'},{value:'"#FFCC00"'},{value:'"#FFEB9C"'},{value:'"#FFFCF1"'},{value:'"#BF4704"'},{value:'"#FF5E05"'},{value:'"#FFC09E"'},{value:'"#FFF6F1"'},{value:'"inherit"'}]}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/EyeClosedIcon.tsx#EyeClosedIcon"]={docgenInfo:EyeClosedIcon.__docgenInfo,name:"EyeClosedIcon",path:"src/icons/actions/EyeClosedIcon.tsx#EyeClosedIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/actions/EyeOpenIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _essentials__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/Colors/Colors.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const EyeOpenIcon=({size="medium",...props})=>{const sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 4c5.035 0 9.28 3.383 10.586 8-1.307 4.618-5.551 8-10.586 8s-9.28-3.383-10.586-8C2.721 7.382 6.965 4 12 4zm0 2a9.006 9.006 0 00-8.406 5.775L3.511 12l.083.226a9.007 9.007 0 008.13 5.77L12 18a9.006 9.006 0 008.406-5.775l.082-.226-.082-.224a9.007 9.007 0 00-8.13-5.77L12 6zm0 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z",fill:"currentColor"})})};EyeOpenIcon.displayName="EyeOpenIcon",EyeOpenIcon.defaultProps={color:_essentials__WEBPACK_IMPORTED_MODULE_3__.w.AUTHENTIC_BLUE_900};const __WEBPACK_DEFAULT_EXPORT__=EyeOpenIcon;try{EyeOpenIcon.displayName="EyeOpenIcon",EyeOpenIcon.__docgenInfo={description:"",displayName:"EyeOpenIcon",props:{color:{defaultValue:{value:"Colors.AUTHENTIC_BLUE_900"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:"enum",value:[{value:'"#FFFFFF"'},{value:'"#000000"'},{value:'"#000F1F"'},{value:'"#001E3E"'},{value:'"#637689"'},{value:'"#9CA7B4"'},{value:'"#C6CDD4"'},{value:'"#F1F2F4"'},{value:'"#BF0820"'},{value:'"#FF0A2B"'},{value:'"#0750A4"'},{value:'"#096BDB"'},{value:'"#9FC5F1"'},{value:'"#D6E6F9"'},{value:'"#E4EFFB"'},{value:'"#F1F7FD"'},{value:'"#BF00B9"'},{value:'"#FF00F7"'},{value:'"#FF9CFC"'},{value:'"#FFF1FF"'},{value:'"#05763B"'},{value:'"#069D4F"'},{value:'"#9ED9BB"'},{value:'"#F1FAF5"'},{value:'"#FFCC00"'},{value:'"#FFEB9C"'},{value:'"#FFFCF1"'},{value:'"#BF4704"'},{value:'"#FF5E05"'},{value:'"#FFC09E"'},{value:'"#FFF6F1"'},{value:'"inherit"'}]}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/EyeOpenIcon.tsx#EyeOpenIcon"]={docgenInfo:EyeOpenIcon.__docgenInfo,name:"EyeOpenIcon",path:"src/icons/actions/EyeOpenIcon.tsx#EyeOpenIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{BY:()=>extractClassNameProps,Jy:()=>extractWidthProps,Qb:()=>extractHeightProps,c2:()=>extractWrapperMarginProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/hooks/useGeneratedId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useGeneratedId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ids__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/ids.ts");const useGeneratedId=id=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>id||(0,_ids__WEBPACK_IMPORTED_MODULE_1__.O)()),[id])},"./src/utils/ids.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>generateId});var nanoid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/nanoid/index.browser.js");const generateId=()=>`wave-${(0,nanoid__WEBPACK_IMPORTED_MODULE_0__.x0)(6)}`}}]);
//# sourceMappingURL=87918.d87a5c8b.iframe.bundle.js.map