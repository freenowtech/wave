"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[28285],{"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}},"./src/components/Select/docs/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomLined:()=>BottomLined,Default:()=>Default,Disabled:()=>Disabled,Small:()=>Small,WithError:()=>WithError,WithLabel:()=>WithLabel,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("./src/essentials/theme.ts"),ChevronDownIcon=__webpack_require__("./src/icons/arrows/ChevronDownIcon.tsx"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const SelectLabel=styled_components_browser_esm.Ay.label`
    position: absolute;
    pointer-events: none;
    line-height: 1;
    font-weight: ${(0,themeGet.J)("fontWeights.semibold")};
    color: ${(0,cssVariables.sR)("foreground-neutral-emphasized")};
    background: ${(0,cssVariables.sR)("background-page-default")};
    transition: color ${100}ms ease-out, background ${100}ms ease-out;
`,bottomLinedSizeVariants=(0,index_esm.Ox)({prop:"size",variants:{small:{fontSize:(0,themeGet.J)("fontSizes.1"),height:"2.5rem",padding:"0.625rem 1.25rem 0.125rem 0.125rem",[`& ~ ${SelectLabel}`]:{top:"0.125rem",left:"0",padding:"0 0.125rem",fontSize:"0.625rem"},"& ~ .svg-icon":{top:"0.625rem"}},medium:{fontSize:(0,themeGet.J)("fontSizes.2"),height:"3.5rem",padding:"1.25rem 1.75rem 0.25rem 0.25rem",[`& ~ ${SelectLabel}`]:{top:"0.375rem",left:"0",padding:"0 0.25rem",fontSize:(0,themeGet.J)("fontSizes.0")},"& ~ .svg-icon":{top:"1rem"}}}}),boxedSizeVariants=(0,index_esm.Ox)({prop:"size",variants:{small:{fontSize:(0,themeGet.J)("fontSizes.1"),height:"2rem",padding:"0 1.5rem 0 0.5rem",[`& ~ ${SelectLabel}`]:{top:"-0.3125rem",left:"0.4375rem",padding:"0 0.125rem",fontSize:"0.625rem"}},medium:{fontSize:(0,themeGet.J)("fontSizes.2"),height:"3rem",padding:"0 2.25rem 0 0.75rem",[`& ~ ${SelectLabel}`]:{top:"-0.3125rem",left:"0.5625rem",padding:"0 0.25rem",fontSize:(0,themeGet.J)("fontSizes.0")}}}}),inputVariants=(0,index_esm.Ox)({variants:{boxed:{borderRadius:(0,themeGet.J)("radii.2"),border:`0.0625rem solid ${(0,cssVariables.sR)("border-neutral-default")}`,"&:active:not(:disabled), &:focus:not(:disabled)":{borderColor:(0,cssVariables.sR)("border-focus"),boxShadow:`inset 0 0 0 0.0625rem ${(0,cssVariables.sR)("border-focus")}`}},"bottom-lined":{border:"none",borderTopLeftRadius:(0,themeGet.J)("radii.1"),borderTopRightRadius:(0,themeGet.J)("radii.1"),borderBottom:`0.0625rem solid ${(0,cssVariables.sR)("border-neutral-default")}`,"&:active:not(:disabled), &:focus:not(:disabled)":{borderColor:(0,cssVariables.sR)("border-focus"),boxShadow:`inset 0 -0.0625rem 0 0 ${(0,cssVariables.sR)("border-focus")}`}}}}),disabledStyles=styled_components_browser_esm.AH`
    color: ${(0,cssVariables.sR)("foreground-disabled")};
    cursor: not-allowed;
    border-color: ${(0,cssVariables.sR)("border-disabled")};

    & ~ ${SelectLabel} {
        color: ${(0,cssVariables.sR)("foreground-disabled")};
    }

    & ~ .svg-icon svg > * {
        fill: ${(0,cssVariables.sR)("foreground-disabled")};
    }
`,SelectInput=styled_components_browser_esm.Ay.select.attrs({theme:theme.w})`
    margin: 0;
    box-sizing: border-box;
    background: ${(0,cssVariables.sR)("background-page-default")};
    border-radius: 0;
    color: ${(0,cssVariables.sR)("foreground-primary")};
    font-size: ${(0,themeGet.J)("fontSizes.2")};
    font-family: ${(0,themeGet.J)("fonts.normal")};
    transition: box-shadow ${100}ms, border ${100}ms;
    outline: none;
    appearance: none;
    width: 100%;
    padding-right: 2rem;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;

    & ~ .svg-icon svg > * {
        fill: ${(0,cssVariables.sR)("foreground-neutral-emphasized")};
    }

    ${p=>{switch(p.variant){case"boxed":return(0,index_esm.Zz)(boxedSizeVariants,inputVariants)(p);case"bottom-lined":return(0,index_esm.Zz)(bottomLinedSizeVariants,inputVariants)(p);default:return}}}
    ${({error,variant:variantProp})=>{if(error)return styled_components_browser_esm.AH`
            border-color: ${(0,cssVariables.sR)("border-danger-default")};
            box-shadow: ${"boxed"===variantProp?`inset 0 0 0 0.0625rem ${(0,cssVariables.sR)("border-danger-default")}`:`inset 0 -0.0625rem 0 0 ${(0,cssVariables.sR)("border-danger-default")}`};

            & ~ ${SelectLabel} {
                color: ${(0,cssVariables.sR)("foreground-danger-emphasized")};
            }
        `}}
    ${p=>p.disabled?disabledStyles:void 0}
    &:-moz-focusring {
        outline: none;
        text-shadow: 0 0 0 ${(0,cssVariables.sR)("foreground-neutral-emphasized")};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-text-fill-color: ${(0,cssVariables.sR)("foreground-neutral-emphasized")};
        transition: background-color 99999999ms ease 99999999ms;
    }

    &:active:not(:disabled),
    &:focus:not(:disabled) {
        & ~ ${SelectLabel} {
            color: ${(0,cssVariables.sR)("foreground-neutral-emphasized")};
        }

        & ~ .svg-icon svg > * {
            fill: ${(0,cssVariables.sR)("foreground-neutral-emphasized")};
        }
    }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectWrapper=styled_components_browser_esm.Ay.div.attrs({theme:theme.w})`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${(0,index_esm.Zz)(index_esm.Lc,index_esm.VL)}
`,IconNode=styled_components_browser_esm.Ay.div`
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    pointer-events: none;
    right: 0.5rem;
    top: 0;
`,Select=({variant="boxed",size="medium",...props})=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.Fk)(props),{marginProps,restProps:withoutMargin}=(0,extractProps.LI)(withoutClassName),{widthProps,restProps}=(0,extractProps.IL)(withoutMargin),{label,children,placeholder,...rest}=restProps,id=(0,useGeneratedId.s)(props.id);return(0,jsx_runtime.jsxs)(SelectWrapper,{...classNameProps,...marginProps,...widthProps,children:[(0,jsx_runtime.jsxs)(SelectInput,{variant,size,...rest,id,children:[placeholder?(0,jsx_runtime.jsx)("option",{value:"",children:placeholder}):void 0,children]}),(0,jsx_runtime.jsx)(IconNode,{className:"svg-icon",children:(0,jsx_runtime.jsx)(ChevronDownIcon.A,{})}),label&&(0,jsx_runtime.jsx)(SelectLabel,{htmlFor:id,children:label})]})};Select.displayName="Select";try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"Set the label for the select input",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Set a placeholder for the select component, allowing users to remove their selection",name:"placeholder",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"boxed"},description:"Define the display variant with boxed as the default",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}},error:{defaultValue:null,description:"Indicate that the input contains an error",name:"error",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Set the size of the input with medium as the default",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}const Select_stories={title:"Form Elements/Select",component:Select,argTypes:{children:{description:"The options to be displayed in the select",control:!1},size:{options:["medium","small"],control:"radio"},variant:{options:["boxed","bottom-lined"],control:"radio"}},args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("option",{children:"Scooter"}),(0,jsx_runtime.jsx)("option",{children:"Ride (PHV)"}),(0,jsx_runtime.jsx)("option",{children:"Taxi"})]})}},Default={},WithLabel={args:{label:"Transportation"}},WithPlaceholder={args:{placeholder:"Select a transportation",label:"Transportation"}},BottomLined={args:{variant:"bottom-lined"}},WithError={args:{error:!0}},Small={args:{size:"small"}},Disabled={args:{disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Transportation'\n  }\n}",...WithLabel.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'Select a transportation',\n    label: 'Transportation'\n  }\n}",...WithPlaceholder.parameters?.docs?.source}}},BottomLined.parameters={...BottomLined.parameters,docs:{...BottomLined.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'bottom-lined'\n  }\n}",...BottomLined.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    error: true\n  }\n}",...WithError.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","WithPlaceholder","BottomLined","WithError","Small","Disabled"]},"./src/icons/arrows/ChevronDownIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChevronDownIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 13.726l7-6.175v2.676l-7 6.222-7-6.222V7.55l7 6.175z",fill:"currentColor"})})};ChevronDownIcon.displayName="ChevronDownIcon";const __WEBPACK_DEFAULT_EXPORT__=ChevronDownIcon;try{ChevronDownIcon.displayName="ChevronDownIcon",ChevronDownIcon.__docgenInfo={description:"",displayName:"ChevronDownIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'ReadCssColorVariable | "inherit" | (string & {})'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/arrows/ChevronDownIcon.tsx#ChevronDownIcon"]={docgenInfo:ChevronDownIcon.__docgenInfo,name:"ChevronDownIcon",path:"src/icons/arrows/ChevronDownIcon.tsx#ChevronDownIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{Fk:()=>extractClassNameProps,IL:()=>extractWidthProps,LI:()=>extractWrapperMarginProps,hA:()=>extractHeightProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/hooks/useGeneratedId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useGeneratedId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useGeneratedId=id=>{const generatedId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return id||generatedId}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=components-Select-docs-Select-stories.0852e379.iframe.bundle.js.map