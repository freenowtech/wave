"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[71497],{"./src/components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/theme.ts");const Box=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_1__.r})`
    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.FK,styled_system__WEBPACK_IMPORTED_MODULE_0__.$_,styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.eC,styled_system__WEBPACK_IMPORTED_MODULE_0__.Oq,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/BaseInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>BaseInput});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/index.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts");const sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fontSizes.1")},medium:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fontSizes.2")}}}),inputVariants=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({variants:{boxed:{borderRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("radii.2"),border:`0.0625rem solid ${_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_200}`,"&:active, &:focus":{borderColor:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.ACTION_BLUE_900,boxShadow:`inset 0 0 0 0.0625rem ${_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.ACTION_BLUE_900}`}},"bottom-lined":{border:"none",borderTopLeftRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("radii.1"),borderTopRightRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("radii.1"),borderBottom:`0.0625rem solid ${_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_200}`,"&:active, &:focus":{borderColor:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.ACTION_BLUE_900,boxShadow:`inset 0 -0.0625rem 0 0 ${_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.ACTION_BLUE_900}`}}}}),BaseInput=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.input`
    margin: 0;
    box-sizing: border-box;
    background: ${p=>p.inverted?"transparent":_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.WHITE};
    border-radius: 0;
    color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_900};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fonts.normal")};
    transition: box-shadow ${100}ms, border ${100}ms;
    outline: none;
    appearance: none;
    width: 100%;

    &::placeholder {
        color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_200:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_350};
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.bf,sizeVariant,inputVariants)};

    &:disabled {
        color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_200};
        border-color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_200};
        box-shadow: none;
        cursor: not-allowed;

        &::placeholder {
            color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_200};
        }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_900};
        transition: background-color 99999999ms ease 99999999ms;
    }
`},"./src/components/Input/BaseInputLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>BaseInputLabel,i:()=>activePositionBaseStyles});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const activePositionBaseStyles=styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontWeights.semibold")};
`,BaseInputLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_0__.r})`
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
`;try{BaseInputLabel.displayName="BaseInputLabel",BaseInputLabel.__docgenInfo={description:"",displayName:"BaseInputLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement>"}},size:{defaultValue:null,description:"Sets the size of the input",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/BaseInputLabel.tsx#BaseInputLabel"]={docgenInfo:BaseInputLabel.__docgenInfo,name:"BaseInputLabel",path:"src/components/Input/BaseInputLabel.tsx#BaseInputLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/BoxedInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>BoxedInput});var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/index.ts"),_BaseInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/BaseInput.ts"),_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/BoxedInputLabel.ts");const errorStyles=styled_components__WEBPACK_IMPORTED_MODULE_4__.iv`
    box-shadow: inset 0 0 0 0.0625rem ${_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.NEGATIVE_ORANGE_900};
    border-color: ${_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.NEGATIVE_ORANGE_900};

    & ~ ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
        color: ${_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.NEGATIVE_ORANGE_900};
    }
`,sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{height:"2rem",padding:"0 0.5rem"},medium:{height:"3rem",padding:"0 0.75rem"}}}),BoxedInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(_BaseInput__WEBPACK_IMPORTED_MODULE_2__.Q)`
    ${sizeVariant}
    & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
        ${p=>p.hasValue||p.placeholder?(0,_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.V)(p.size):void 0};
        color: ${({hasValue,inverted})=>inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_200:hasValue?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_350};
        background: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.WHITE};
        background: ${p=>`linear-gradient(0deg, ${p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.WHITE} calc(50% + ${"small"===p.size?"0.0825rem":"0.0625rem"}), transparent 50%)`};
    }

    ${p=>p.error?errorStyles:void 0}
    &:disabled {
        & + ${_BoxedInputLabel__WEBPACK_IMPORTED_MODULE_3__.H} {
            color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_550:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_200};
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
            color: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.WHITE:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.ACTION_BLUE_900};
            background: ${p=>p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.WHITE};
            background: ${p=>`linear-gradient(0deg, ${p.inverted?_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.AUTHENTIC_BLUE_900:_essentials__WEBPACK_IMPORTED_MODULE_1__.wL.WHITE} calc(50% + ${"small"===p.size?"0.0825rem":"0.0625rem"}), transparent 50%)`};
        }
    }
`},"./src/components/Input/BoxedInputLabel.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>BoxedInputLabel,V:()=>activeBoxedPosition});var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),_BaseInputLabel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/BaseInputLabel.tsx");const activeBoxedPosition=size=>styled_components__WEBPACK_IMPORTED_MODULE_4__.iv`
    ${_BaseInputLabel__WEBPACK_IMPORTED_MODULE_3__.i};

    top: ${"small"===size?"-0.375rem":"-0.5rem"};
    font-size: ${"small"===size?"0.625rem":(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fontSizes.0")};
`,sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{top:"0.5rem",left:"0.375rem",padding:"0 0.125rem",fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fontSizes.1")},medium:{top:"0.75rem",left:"0.5rem",padding:"0 0.25rem",fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fontSizes.2")}}}),BoxedInputLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(_BaseInputLabel__WEBPACK_IMPORTED_MODULE_3__.h).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_1__.r})`
    ${sizeVariant};
`},"./src/components/Input/InnerInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>InnerInput});var react=__webpack_require__("./node_modules/react/index.js"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),essentials=__webpack_require__("./src/essentials/index.ts"),BaseInput=__webpack_require__("./src/components/Input/BaseInput.ts"),theme=__webpack_require__("./src/essentials/theme.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),BaseInputLabel=__webpack_require__("./src/components/Input/BaseInputLabel.tsx");const activeBottomLinedPosition=size=>styled_components_browser_esm.iv`
    ${BaseInputLabel.i};
    top: ${"small"===size?"0":"0.25rem"};
    font-size: ${"small"===size?"0.625rem":(0,themeGet.U)("fontSizes.0")};
`,sizeVariant=(0,index_esm.bU)({prop:"size",variants:{small:{top:"0.875rem",padding:"0 0.125rem",fontSize:(0,themeGet.U)("fontSizes.1")},medium:{top:"1.375rem",padding:"0 0.25rem",fontSize:(0,themeGet.U)("fontSizes.2")}}}),BottomLinedInputLabel=(0,styled_components_browser_esm.ZP)(BaseInputLabel.h).attrs({theme:theme.r})`
    left: 0;
    ${sizeVariant}
`,errorStyles=styled_components_browser_esm.iv`
    box-shadow: inset 0 -0.0625rem 0 0 ${essentials.wL.NEGATIVE_ORANGE_900};
    border-color: ${essentials.wL.NEGATIVE_ORANGE_900};

    & ~ ${BottomLinedInputLabel} {
        color: ${essentials.wL.NEGATIVE_ORANGE_900};
    }
`,BottomLinedInput_sizeVariant=(0,index_esm.bU)({prop:"size",variants:{small:{height:"2.5rem",padding:"1rem 0.125rem 0.375rem"},medium:{height:"3.5rem",padding:"1.625rem 0.25rem 0.625rem"}}}),BottomLinedInput=(0,styled_components_browser_esm.ZP)(BaseInput.Q)`
    ${BottomLinedInput_sizeVariant}
    & ~ ${BottomLinedInputLabel} {
        ${p=>p.hasValue||p.placeholder?activeBottomLinedPosition(p.size):""};
        color: ${({hasValue,inverted})=>inverted?essentials.wL.AUTHENTIC_BLUE_200:hasValue?essentials.wL.AUTHENTIC_BLUE_550:essentials.wL.AUTHENTIC_BLUE_350};
        background: ${p=>p.inverted?essentials.wL.AUTHENTIC_BLUE_900:essentials.wL.WHITE};
    }

    ${p=>p.error?errorStyles:void 0}
    &:disabled {
        & ~ ${BottomLinedInputLabel} {
            color: ${p=>p.inverted?essentials.wL.AUTHENTIC_BLUE_550:essentials.wL.AUTHENTIC_BLUE_200};
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
            color: ${p=>p.inverted?essentials.wL.WHITE:essentials.wL.ACTION_BLUE_900};
            background: ${p=>p.inverted?essentials.wL.AUTHENTIC_BLUE_900:essentials.wL.WHITE};
        }
    }
`;var BoxedInput=__webpack_require__("./src/components/Input/BoxedInput.ts"),BoxedInputLabel=__webpack_require__("./src/components/Input/BoxedInputLabel.ts");const InputWrapper=styled_components_browser_esm.ZP.div.attrs({theme:theme.r})`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${(0,index_esm.qC)(index_esm.e6,index_esm.bf)}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InnerInput=(0,react.forwardRef)(((props,ref)=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.BY)(props),{marginProps,restProps:withoutMargin}=(0,extractProps.c2)(withoutClassName),{widthProps,restProps}=(0,extractProps.Jy)(withoutMargin),inputRef=(0,react.useRef)(),{label,onChange,size,id:providedId,variant,...rest}=restProps,id=(0,useGeneratedId.I)(providedId),[hasValue,setHasValue]=(0,react.useState)(rest?.value?.toString().length>0),hasUncontrolledValue=inputRef?.current?.value?.length>0,handleChange=event=>{setHasValue(event.target.value.length>0),onChange&&onChange(event)};return(0,react.useEffect)((()=>{setHasValue(rest?.value?.toString().length>0)}),[rest.value]),"boxed"===variant?(0,jsx_runtime.jsxs)(InputWrapper,{ref,...classNameProps,...marginProps,...widthProps,children:[(0,jsx_runtime.jsx)(BoxedInput.i,{...rest,ref:inputRef,variant,id,size,hasValue:hasValue||hasUncontrolledValue,onChange:handleChange}),label&&(0,jsx_runtime.jsx)(BoxedInputLabel.H,{htmlFor:id,size,children:label})]}):"bottom-lined"===variant?(0,jsx_runtime.jsxs)(InputWrapper,{ref,...classNameProps,...marginProps,...widthProps,children:[(0,jsx_runtime.jsx)(BottomLinedInput,{...rest,variant,id,size,hasValue:hasValue||hasUncontrolledValue,onChange:handleChange}),label&&(0,jsx_runtime.jsx)(BottomLinedInputLabel,{htmlFor:id,size,children:label})]}):void 0}));InnerInput.defaultProps={size:"medium",variant:"boxed",type:"text"};try{InnerInput.displayName="InnerInput",InnerInput.__docgenInfo={description:"",displayName:"InnerInput",props:{label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},inverted:{defaultValue:null,description:"Inverts the colors of the input",name:"inverted",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:"enum",value:[{value:'"boxed"'},{value:'"bottom-lined"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/InnerInput.tsx#InnerInput"]={docgenInfo:InnerInput.__docgenInfo,name:"InnerInput",path:"src/components/Input/InnerInput.tsx#InnerInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Password_Password__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Password/Password.tsx"),_InnerInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/InnerInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>"password"===props.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Password_Password__WEBPACK_IMPORTED_MODULE_1__.r,{...props,ref}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_InnerInput__WEBPACK_IMPORTED_MODULE_2__._,{...props,ref})));Input.defaultProps={size:"medium",variant:"boxed",type:"text"};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},inverted:{defaultValue:null,description:"Inverts the colors of the input",name:"inverted",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:"enum",value:[{value:'"boxed"'},{value:'"bottom-lined"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Password/Password.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Password});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),icons=__webpack_require__("./src/icons/index.ts"),InnerInput=__webpack_require__("./src/components/Input/InnerInput.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),Colors=__webpack_require__("./src/essentials/Colors/Colors.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts");const inputType=(0,index_esm.bU)({prop:"variant",variants:{"bottom-lined":{justifyContent:"right"}}}),ToggleButton=styled_components_browser_esm.ZP.button`
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
`,defaultAriaStrings={showPasswordButton:"Show password",hidePasswordButton:"Hide password",messagePasswordIsHidden:"Your password is hidden",messagePasswordIsShown:"Your password is shown"},iconColors={regular:{color:Colors.w.AUTHENTIC_BLUE_550,hover:Colors.w.AUTHENTIC_BLUE_900},inverted:{color:Colors.w.AUTHENTIC_BLUE_200,hover:Colors.w.AUTHENTIC_BLUE_50}},Password=(0,react.forwardRef)((({purpose="login",id,disabled,size="medium",variant="boxed",inverted,ariaStrings={},...rest},ref)=>{const[isHidden,setIsHidden]=(0,react.useState)(!0),aria={...defaultAriaStrings,...ariaStrings},{color,hover}=iconColors[inverted?"inverted":"regular"],inputId=(0,useGeneratedId.I)(id),{marginProps,restProps:withoutMargin}=(0,extractProps.c2)(rest),{widthProps,restProps}=(0,extractProps.Jy)(withoutMargin);return(0,jsx_runtime.jsxs)(PasswordWrapper,{...widthProps,...marginProps,children:[(0,jsx_runtime.jsx)(InnerInput._,{...restProps,width:"100%",id:inputId,size,variant,inverted,disabled,ref,type:isHidden?"password":"text",autoComplete:"new-password"===purpose?"new-password":"off"}),disabled?void 0:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ToggleButton,{size,variant,type:"button",onClick:()=>{setIsHidden((prevValue=>!prevValue))},"aria-controls":inputId,"aria-label":isHidden?aria.showPasswordButton:aria.hidePasswordButton,style:{"--color":color,"--hover-color":hover},children:isHidden?(0,jsx_runtime.jsx)(icons.EyeOpenIcon,{}):(0,jsx_runtime.jsx)(icons.EyeClosedIcon,{})}),(0,jsx_runtime.jsx)(VisuallyHidden.T,{as:"span","aria-live":"polite",children:isHidden?aria.messagePasswordIsHidden:aria.messagePasswordIsShown})]})]})}));try{Password.displayName="Password",Password.__docgenInfo={description:"",displayName:"Password",props:{label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},inverted:{defaultValue:null,description:"Inverts the colors of the input",name:"inverted",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:"enum",value:[{value:'"boxed"'},{value:'"bottom-lined"'}]}},purpose:{defaultValue:{value:"login"},description:"Sets the purpose of the password input element",name:"purpose",required:!1,type:{name:"enum",value:[{value:'"login"'},{value:'"new-password"'}]}},ariaStrings:{defaultValue:{value:"{}"},description:"If you project supports multiple languages it is recommended to pass translated labels to these properties",name:"ariaStrings",required:!1,type:{name:"{ showPasswordButton?: string; hidePasswordButton?: string; messagePasswordIsHidden?: string; messagePasswordIsShown?: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Password/Password.tsx#Password"]={docgenInfo:Password.__docgenInfo,name:"Password",path:"src/components/Password/Password.tsx#Password"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Search/Search.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Search});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),essentials=__webpack_require__("./src/essentials/index.ts"),icons=__webpack_require__("./src/icons/index.ts");function useControlledState([value,setValue],defaultState){const[state,setState]=react.useState(value||defaultState);return[void 0!==setValue?value:state,setValue||setState]}var Box=__webpack_require__("./src/components/Box/Box.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ActiveStyle=`\n    background-color: ${essentials.wL.ACTION_BLUE_50};\n    color: ${essentials.wL.ACTION_BLUE_900};\n`,SearchResultsContainer=(0,styled_components_browser_esm.ZP)(Box.x)`
    position: absolute;
    z-index: ${essentials.uc.SUGGESTIONS_LIST};
    margin-top: 0.0625rem;
    padding: 0.25rem 0;
    width: inherit;
    background-color: ${props=>props.inverted?essentials.wL.AUTHENTIC_BLUE_900:essentials.wL.WHITE};
    box-shadow: 0 0.125rem 0.5rem 0.0625rem ${essentials.wL.AUTHENTIC_BLUE_200};
    border-radius: 0.25rem;
    cursor: pointer;
`,ActiveBox=(0,styled_components_browser_esm.ZP)(Box.x)`
    &[aria-selected='true'] > div {
        ${ActiveStyle}
    }
`,SearchInputContainer=(0,styled_components_browser_esm.ZP)(Box.x)`
    box-sizing: border-box;
    background: white;
    border-radius: 0.25rem;
    border: ${p=>p.isInFocus?`0.0625rem solid ${essentials.wL.ACTION_BLUE_900}`:`0.0625rem solid ${essentials.wL.AUTHENTIC_BLUE_200}`};
    box-shadow: ${p=>p.isInFocus?`inset 0 0 0 0.0625rem ${essentials.wL.ACTION_BLUE_900}`:"none"};
    height: ${p=>"small"===p.size?"2.2rem":"3.2rem"};
    transition: box-shadow 100ms ease, border 100ms ease;
`,StyledInput=(0,styled_components_browser_esm.ZP)(Input.I)`
    width: 100%;

    input {
        caret-color: ${essentials.wL.ACTION_BLUE_900};
        background: transparent;
        border: 0;

        &:focus,
        &:active {
            outline: 0;
            border: 0;
            box-shadow: unset;
        }

        text-overflow: ellipsis;

        ::-webkit-search-cancel-button {
            display: none;
        }

        &::placeholder {
            color: ${p=>p.disabled?essentials.wL.AUTHENTIC_BLUE_200:essentials.wL.AUTHENTIC_BLUE_550};
            opacity: 1;
        }
    }
`,Search=({results=[],value:propsValue,setValue:setPropsValue,showResults:propsShowResults,setShowResults:setPropsShowResults,width,placeholder="Search...",disabled,inverted,size,onInputChange,onClear,onEnter,onChangeSelection})=>{const containerRef=react.useRef(null),[isInFocus,setIsInFocus]=react.useState(!1),[activeIndex,setActiveIndex]=react.useState(0),[value,setValue]=useControlledState([propsValue,setPropsValue],""),[showResults,setShowResults]=useControlledState([propsShowResults,setPropsShowResults],!1);react.useEffect((()=>{const elementLength=Array.isArray(results)?results.length:1,emitKeyEvent=({key})=>{if(isInFocus)switch(key){case"ArrowUp":{const index=activeIndex>0?(activeIndex-1)%elementLength:elementLength-1;setActiveIndex(index),onChangeSelection?.(index);break}case"ArrowDown":{const index=(activeIndex+1)%elementLength;setActiveIndex(index),onChangeSelection?.(index);break}case"Enter":{const el=document.querySelector(`#result-item-${activeIndex}`);el?.children[0]?.click(),onEnter?.(value);break}case"Escape":setShowResults(!1)}};return document.addEventListener("keydown",emitKeyEvent),()=>{document.removeEventListener("keydown",emitKeyEvent)}}),[isInFocus,activeIndex,setActiveIndex,onChangeSelection,onEnter,value,propsValue,results]),react.useEffect((()=>{const emitIfClickingOutsideSearch=event=>{disabled||(containerRef.current.contains(event.target)?setShowResults(!0):setShowResults(!1))};return document.addEventListener("click",emitIfClickingOutsideSearch),()=>{document.removeEventListener("click",emitIfClickingOutsideSearch)}}),[showResults,setShowResults,disabled]);return(0,jsx_runtime.jsxs)("div",{ref:containerRef,style:{width},role:"search",children:[(0,jsx_runtime.jsxs)(SearchInputContainer,{isInFocus,display:"flex",flexDirection:"row",alignItems:"center",width:"100%",size,children:[(0,jsx_runtime.jsx)(Box.x,{style:{display:"flex",margin:"small"===size?"0.5rem":"1rem",marginRight:"auto"},onClick:()=>!disabled&&onEnter?.(value),children:(0,jsx_runtime.jsx)(icons.MagnifyingGlassIcon,{size:"small"===size?20:24,"aria-hidden":"true",color:disabled?essentials.wL.AUTHENTIC_BLUE_200:essentials.wL.AUTHENTIC_BLUE_350})}),(0,jsx_runtime.jsx)(StyledInput,{size,type:"search",inverted,disabled,"aria-label":placeholder,autoComplete:"off",placeholder,value,onChange:event=>{setShowResults(!0);const searchText=event.target.value;setValue?.(searchText),onInputChange?.(searchText)},onFocus:()=>setIsInFocus(!0),onBlur:()=>setIsInFocus(!1)}),value?(0,jsx_runtime.jsx)(Box.x,{"aria-label":"clear-search",style:{margin:"1rem",marginLeft:"auto",cursor:"pointer",display:"flex"},onClick:()=>{setValue?.(""),onClear?.()},role:"button",children:(0,jsx_runtime.jsx)(icons.CloseIcon,{"aria-hidden":"true",color:essentials.wL.AUTHENTIC_BLUE_550})}):void 0]}),showResults&&results.length>0&&(0,jsx_runtime.jsx)(SearchResultsContainer,{inverted,role:"listbox",children:results.map(((result,index)=>(0,jsx_runtime.jsx)(ActiveBox,{role:"option",id:`result-item-${index}`,onMouseEnter:()=>setActiveIndex(index),onMouseMove:()=>setActiveIndex(index),"aria-selected":activeIndex===index,children:result},index)))})]})};Search.displayName="Search";try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{results:{defaultValue:{value:"[]"},description:"",name:"results",required:!1,type:{name:"ReactNode[]"}},value:{defaultValue:null,description:"Sets the value",name:"value",required:!1,type:{name:"string"}},setValue:{defaultValue:null,description:"Function to set the value",name:"setValue",required:!1,type:{name:"(value: string) => void"}},showResults:{defaultValue:null,description:"show results dropdown",name:"showResults",required:!1,type:{name:"boolean"}},setShowResults:{defaultValue:null,description:"Function to show and hide the dropdown",name:"setShowResults",required:!1,type:{name:"(value: boolean) => void"}},width:{defaultValue:null,description:"Sets the width of the search box",name:"width",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"Search..."},description:"Sets the placeholder text to be shown",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Determines whether the search box is disabled",name:"disabled",required:!1,type:{name:"boolean"}},inverted:{defaultValue:null,description:"Determines whether the search box has an inverted color scheme",name:"inverted",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Determines the size of the search box",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},onEnter:{defaultValue:null,description:'This function is called when the "Enter" key is pressed or the search icon is clicked',name:"onEnter",required:!1,type:{name:"(value: string) => void"}},onChangeSelection:{defaultValue:null,description:"This function is called when the selection is changed. It emits the selected index",name:"onChangeSelection",required:!1,type:{name:"(index: number) => void"}},onInputChange:{defaultValue:null,description:"This function is called when the value in the search box changes",name:"onInputChange",required:!1,type:{name:"(value: string) => void"}},onClear:{defaultValue:null,description:"This function is called when the search box is cleared",name:"onClear",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Search/Search.tsx#Search"]={docgenInfo:Search.__docgenInfo,name:"Search",path:"src/components/Search/Search.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),_utils_deprecatedProperty__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/deprecatedProperty.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_1__.r})`
    color: ${function determineTextColor(props){const{weak,secondary,inverted,disabled}=props;return void 0!==weak&&(0,_utils_deprecatedProperty__WEBPACK_IMPORTED_MODULE_3__.M)("Text",weak,"weak","secondary","Rename `weak` to `secondary` to remove the warning."),disabled?(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(inverted?"semanticColors.text.disabledInverted":"semanticColors.text.disabled")(props):secondary||weak?(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(inverted?"semanticColors.text.secondaryInverted":"semanticColors.text.secondary")(props):inverted?(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("semanticColors.text.primaryInverted")(props):(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("semanticColors.text.primary")(props)}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ue,styled_system__WEBPACK_IMPORTED_MODULE_0__.I8,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:null,description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"normal" | "semibold" | "bold", Required<Theme<TLengthStyledSystem>>>'}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},inverted:{defaultValue:null,description:"Adjust color for display on a dark background",name:"inverted",required:!1,type:{name:"boolean"}},weak:{defaultValue:null,description:"Adjust color to indicate secondary information\n@deprecated use `secondary` instead",name:"weak",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});const VisuallyHidden=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px; /* stylelint-disable-line unit-whitelist */
    width: 1px; /* stylelint-disable-line unit-whitelist */
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/deprecatedProperty.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>deprecatedProperty});__webpack_require__("./node_modules/warning/warning.js");let deprecatedProperty=function deprecatedFunction(){}},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{BY:()=>extractClassNameProps,Jy:()=>extractWidthProps,Qb:()=>extractHeightProps,c2:()=>extractWrapperMarginProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/hooks/useGeneratedId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useGeneratedId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useGeneratedId=id=>{const generatedId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return id||generatedId}}}]);
//# sourceMappingURL=71497.e4da17f4.iframe.bundle.js.map