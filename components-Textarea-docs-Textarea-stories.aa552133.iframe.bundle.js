"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[24889],{"./src/components/Textarea/docs/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithError:()=>WithError,WithLabel:()=>WithLabel,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Textarea_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("./src/essentials/theme.ts"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),BoxedInput=__webpack_require__("./src/components/Input/BoxedInput.ts"),BoxedInputLabel=__webpack_require__("./src/components/Input/BoxedInputLabel.ts");const TextAreaWrapper=styled_components_browser_esm.Ay.div.attrs({theme:theme.w})`
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 21.5rem;
    height: 7.25rem;

    ${(0,index_esm.Zz)(index_esm.Lc,index_esm.uJ,index_esm.VL)}
`,TextareaField=(0,styled_components_browser_esm.Ay)(BoxedInput.D).attrs({as:"textarea"})`
    height: 100%;
    padding: 0.75rem;
    overflow: auto;

    resize: ${p=>p.resize};
`,Textarea=({resize="both",...props})=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.Fk)(props),{marginProps,restProps:withoutMargin}=(0,extractProps.LI)(withoutClassName),{widthProps,restProps:withoutWidth}=(0,extractProps.IL)(withoutMargin),{heightProps,restProps}=(0,extractProps.hA)(withoutWidth),{label,onChange,...rest}=restProps,id=(0,useGeneratedId.s)(props.id),[hasValue,setHasValue]=(0,react.useState)(rest.value&&rest.value.toString().length>0);return(0,react.useEffect)((()=>{setHasValue(rest.value&&rest.value.toString().length>0)}),[rest.value]),react.createElement(TextAreaWrapper,{...classNameProps,...marginProps,...widthProps,...heightProps},react.createElement(TextareaField,{...rest,resize,id,variant:"boxed",size:"medium",hasValue,onChange:event=>{onChange&&onChange(event)}}),label&&react.createElement(BoxedInputLabel.H,{htmlFor:id,waveSize:"medium"},label))};try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"'boxed'"},description:"Sets the variant of the textarea",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}},size:{defaultValue:{value:"'medium'"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Textarea/Textarea.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"src/components/Textarea/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}const Textarea_stories={title:"Form Elements/Textarea",component:Textarea,argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},args:{label:"E-Mail Address"}},Default={args:{label:void 0}},WithLabel={},WithPlaceholder={args:{placeholder:"user@free-now.com"}},WithError={args:{error:!0}},Disabled={args:{disabled:!0}},__namedExportsOrder=["Default","WithLabel","WithPlaceholder","WithError","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: undefined\n  }\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{}",...WithLabel.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'user@free-now.com'\n  }\n}",...WithPlaceholder.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    error: true\n  }\n}",...WithError.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}},"./src/components/Input/BaseInput.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>BaseInput});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/cssVariables.ts");const sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({prop:"size",variants:{small:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fontSizes.1")},medium:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fontSizes.2")}}}),inputVariants=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({variants:{boxed:{borderRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("radii.2"),border:`0.0625rem solid ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-neutral-default")}`,"&:active, &:focus":{borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-focus"),boxShadow:`inset 0 0 0 0.0625rem ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-focus")}`}},"bottom-lined":{border:"none",borderTopLeftRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("radii.1"),borderTopRightRadius:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("radii.1"),borderBottom:`0.0625rem solid ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-neutral-default")}`,"&:active, &:focus":{borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-focus"),boxShadow:`inset 0 -0.0625rem 0 0 ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_2__.sR)("border-focus")}`}}}}),BaseInput=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.input`
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
`},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{Fk:()=>extractClassNameProps,IL:()=>extractWidthProps,LI:()=>extractWrapperMarginProps,hA:()=>extractHeightProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/hooks/useGeneratedId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useGeneratedId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useGeneratedId=id=>{const generatedId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return id||generatedId}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=components-Textarea-docs-Textarea-stories.aa552133.iframe.bundle.js.map