"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[91106],{"./src/components/experimental/Checkbox/docs/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,DisabledChecked:()=>DisabledChecked,DisabledIndeterminate:()=>DisabledIndeterminate,Error:()=>Error,Indeterminate:()=>Indeterminate,InvalidSelected:()=>InvalidSelected,Selected:()=>Selected,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});__webpack_require__("./node_modules/react/index.js");var Checkbox=__webpack_require__("./node_modules/react-aria-components/dist/Checkbox.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Text=__webpack_require__("./src/components/experimental/Text/Text.tsx"),useHover=__webpack_require__("./node_modules/@react-aria/interactions/dist/useHover.mjs"),mergeProps=__webpack_require__("./node_modules/@react-aria/utils/dist/mergeProps.mjs"),theme=__webpack_require__("./src/essentials/experimental/theme.ts"),cssVariables=__webpack_require__("./src/essentials/experimental/cssVariables.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledLabel=styled_components_browser_esm.Ay.label.attrs({theme:theme.w})`
    display: inline-flex;
    position: relative;
    user-select: none;
    color: ${props=>(0,cssVariables.sR)(props.isDisabled?"outline-variant":props.isInvalid?"negative-variant":"on-surface")};
    line-height: 1;
    gap: 0.5rem;
    padding: 3px 2px;
    align-items: center;
`;function LabelWrapper(props){const{isDisabled=!1,isInvalid=!1,...otherProps}=props,{hoverProps,isHovered}=(0,useHover.M)({isDisabled});return(0,jsx_runtime.jsx)(StyledLabel,{isDisabled,isInvalid,isHovered,...(0,mergeProps.v)(hoverProps,otherProps)})}LabelWrapper.displayName="LabelWrapper";try{LabelWrapper.displayName="LabelWrapper",LabelWrapper.__docgenInfo={description:"",displayName:"LabelWrapper",props:{isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Checkbox/components/LabelWrapper.tsx#LabelWrapper"]={docgenInfo:LabelWrapper.__docgenInfo,name:"LabelWrapper",path:"src/components/experimental/Checkbox/components/LabelWrapper.tsx#LabelWrapper"})}catch(__react_docgen_typescript_loader_error){}var themeGet=__webpack_require__("./src/utils/experimental/themeGet.ts");const StyledCheckbox=(0,styled_components_browser_esm.Ay)(Checkbox.Sc)`
    --selected-color: ${(0,cssVariables.sR)("accent")};
    --selected-color-pressed: ${(0,cssVariables.sR)("interactive")};
    --checkmark-color: ${(0,cssVariables.sR)("surface")};

    position: relative;
    display: inline-flex;
    align-items: center;
    forced-color-adjust: none;
    cursor: pointer;

    .checkbox {
        width: ${(0,themeGet.J)("space.5")};
        height: ${(0,themeGet.J)("space.5")};
        border: 2px solid ${(0,cssVariables.sR)("divider")};
        border-radius: ${(0,themeGet.J)("radii.2")};
        transition: all 200ms;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        &:hover {
            border-color: ${(0,cssVariables.sR)("interactive")};
        }
    }

    svg {
        position: absolute;
        width: 65%;
        height: 62%;
        top: 45%;
        left: 53%;
        transform: translate(-45%, -40%);
        fill: none;
        stroke: ${(0,cssVariables.sR)("surface")};
        stroke-width: 3px;
        stroke-dasharray: 22px;
        stroke-dashoffset: 66;
        transition: all 200ms;
    }

    &[data-pressed] .checkbox {
        border-color: ${(0,cssVariables.sR)("surface-variant")};
    }

    &[data-focus-visible] .checkbox {
        outline: 2px solid ${(0,cssVariables.sR)("surface-variant")};
        outline-offset: 2px;
    }

    &[data-disabled] {
        color: transparent;
        cursor: not-allowed;

        .checkbox {
            background-color: ${(0,cssVariables.sR)("surface")};
            border-color: ${(0,cssVariables.sR)("surface-variant")};
        }
    }

    &[data-invalid] .checkbox {
        border-color: ${(0,cssVariables.sR)("negative-variant")};
    }

    &[data-selected] .checkbox,
    &[data-indeterminate] .checkbox {
        border-color: ${(0,cssVariables.sR)("accent")};
        background: ${(0,cssVariables.sR)("accent")};
    }

    &[data-selected] svg,
    &[data-indeterminate] svg {
        stroke-dashoffset: 44;
    }

    &[data-indeterminate] svg {
        stroke: none;
        fill: ${(0,cssVariables.sR)("surface")};
        left: 52%;
    }

    &[data-invalid] .checkbox:hover {
        border-color: ${(0,cssVariables.sR)("negative")};
    }

    &[data-selected] .checkbox:hover,
    &[data-indeterminate] .checkbox:hover {
        border-color: ${(0,cssVariables.sR)("on-interactive-container")};
        background: ${(0,cssVariables.sR)("on-interactive-container")};
    }

    &[data-selected][data-pressed] .checkbox,
    &[data-indeterminate][data-pressed] .checkbox {
        border-color: ${(0,cssVariables.sR)("interactive")};
        background: ${(0,cssVariables.sR)("interactive")};
    }

    &[data-selected][data-disabled],
    &[data-indeterminate][data-disabled] {
        color: transparent;
        cursor: not-allowed;

        .checkbox {
            background-color: ${(0,cssVariables.sR)("surface")};
            border-color: ${(0,cssVariables.sR)("surface-variant")};
        }

        svg {
            stroke: ${(0,cssVariables.sR)("outline-variant")};
        }
    }

    &[data-indeterminate][data-disabled] svg {
        stroke: none;
        fill: ${(0,cssVariables.sR)("outline-variant")};
        left: 52%;
    }

    &[data-invalid][data-selected] .checkbox,
    &[data-invalid][data-indeterminate] .checkbox {
        background-color: ${(0,cssVariables.sR)("negative-variant")};
        border-color: ${(0,cssVariables.sR)("negative-variant")};
    }

    &[data-invalid][data-selected] .checkbox:hover,
    &[data-invalid][data-indeterminate] .checkbox:hover {
        background-color: ${(0,cssVariables.sR)("negative")};
        border-color: ${(0,cssVariables.sR)("negative")};
    }
`,Checkbox_Checkbox=props=>{const{isDisabled,isInvalid,isIndeterminate,label,variant="body1",...rest}=props;let dynamicLabel=label;return"string"==typeof label&&(dynamicLabel=(0,jsx_runtime.jsx)(Text.E,{onClick:e=>e.stopPropagation(),variant,children:label})),(0,jsx_runtime.jsxs)(LabelWrapper,{isDisabled,isInvalid,children:[(0,jsx_runtime.jsx)(StyledCheckbox,{isDisabled,isIndeterminate,isInvalid,...rest,children:(0,jsx_runtime.jsx)("div",{className:"checkbox",children:(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 18 18","aria-hidden":"true",children:isIndeterminate?(0,jsx_runtime.jsx)("rect",{x:1,y:7.5,width:15,height:3,rx:1.5,ry:1.5}):(0,jsx_runtime.jsx)("polyline",{points:"1 9 7 14 15 4",strokeLinecap:"round",strokeLinejoin:"round"})})})}),dynamicLabel]})};Checkbox_Checkbox.displayName="Checkbox";try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"Provide a label for the input which will be shown next to the checkbox",name:"label",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"Text variant for the label",name:"variant",required:!1,type:{name:"enum",value:[{value:'"display"'},{value:'"headline"'},{value:'"title1"'},{value:'"title2"'},{value:'"body1"'},{value:'"body2"'},{value:'"label1"'},{value:'"label2"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/experimental/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}const Checkbox_stories={title:"Experimental/Components/Checkbox",component:Checkbox_Checkbox,argTypes:{textVerticalAlign:{control:"radio",options:["center","top"]}},args:{label:"Accept T&C"}},Default={args:{label:void 0}},Selected={args:{defaultSelected:!0}},Error={args:{label:"With Error",isInvalid:!0}},Disabled={args:{isDisabled:!0}},DisabledChecked={args:{isDisabled:!0,defaultSelected:!0}},DisabledIndeterminate={args:{isDisabled:!0,isIndeterminate:!0,defaultSelected:!0,label:"Disabled indeterminate checkbox"}},Indeterminate={args:{isIndeterminate:!0}},InvalidSelected={args:{isInvalid:!0,defaultSelected:!0,label:"Invalid selected checkbox"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: undefined\n  }\n}",...Default.parameters?.docs?.source}}},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultSelected: true\n  }\n}",...Selected.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'With Error',\n    isInvalid: true\n  }\n}",...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    isDisabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},DisabledChecked.parameters={...DisabledChecked.parameters,docs:{...DisabledChecked.parameters?.docs,source:{originalSource:"{\n  args: {\n    isDisabled: true,\n    defaultSelected: true\n  }\n}",...DisabledChecked.parameters?.docs?.source}}},DisabledIndeterminate.parameters={...DisabledIndeterminate.parameters,docs:{...DisabledIndeterminate.parameters?.docs,source:{originalSource:"{\n  args: {\n    isDisabled: true,\n    isIndeterminate: true,\n    defaultSelected: true,\n    label: 'Disabled indeterminate checkbox'\n  }\n}",...DisabledIndeterminate.parameters?.docs?.source}}},Indeterminate.parameters={...Indeterminate.parameters,docs:{...Indeterminate.parameters?.docs,source:{originalSource:"{\n  args: {\n    isIndeterminate: true\n  }\n}",...Indeterminate.parameters?.docs?.source}}},InvalidSelected.parameters={...InvalidSelected.parameters,docs:{...InvalidSelected.parameters?.docs,source:{originalSource:"{\n  args: {\n    isInvalid: true,\n    defaultSelected: true,\n    label: 'Invalid selected checkbox'\n  }\n}",...InvalidSelected.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Selected","Error","Disabled","DisabledChecked","DisabledIndeterminate","Indeterminate","InvalidSelected"]},"./src/components/experimental/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text,U:()=>textStyles});var react_aria_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-aria-components/dist/Text.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/experimental/theme.ts");const textStyles={variants:{display:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[4],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.bold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[4],fontStretch:"50%"},headline:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[3],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.bold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[3],fontStretch:"50%"},title1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[2],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.semibold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[2]},title2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.medium,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},body1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},body2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[0],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[0]},label1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.medium,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},label2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[0],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[0]}}},Text=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__.E)`
    color: inherit;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)((0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)(textStyles))}
`;Text.defaultProps={variant:"body1"};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:{value:"body1"},description:"",name:"variant",required:!1,type:{name:'ResponsiveValue<"display" | "headline" | "title1" | "title2" | "body1" | "body2" | "label1" | "label2", Required<Theme<TLengthStyledSystem>>>'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/experimental/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/experimental/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>theme});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_index__WEBPACK_IMPORTED_MODULE_0__.R,fontSizes:["0.875rem","1rem","1.25rem","1.75rem","3rem"],fontWeights:{normal:400,medium:500,semibold:600,bold:700},fonts:{normal:fontStack(["Roboto Flex","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_index__WEBPACK_IMPORTED_MODULE_0__.H,space:["0","0.25rem","0.5rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem","3rem"],radii:["0rem","0.125rem","0.25rem","0.5rem","0.75rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"},lineHeights:["1.25rem","1.5rem","1.75rem","2.25rem","3.625rem"]};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/utils/experimental/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_experimental_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/experimental/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_experimental_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=components-experimental-Checkbox-docs-Checkbox-stories.83c16b52.iframe.bundle.js.map