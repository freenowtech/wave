"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[88711,54435],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Label/docs/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,FilledColor:()=>FilledColor,Info:()=>Info,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Label",component:__webpack_require__("./src/components/Label/Label.tsx").J,argTypes:{children:{description:"Content of the label",table:{type:{summary:"string"}}},variant:{options:["default","info","success","warning","danger"],defaultValue:"default",control:"select"},ref:{table:{disable:!0}},theme:{table:{disable:!0}},as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},secondary:{table:{disable:!0}},disabled:{table:{disable:!0}},fontWeight:{table:{disable:!0}},weak:{table:{disable:!0}}},args:{children:"music"}},Default={},Info={args:{variant:"info",children:"Info"}},Success={args:{variant:"success",children:"Passed"}},Warning={args:{variant:"warning",children:"Cautious"}},Danger={args:{variant:"danger",children:"Blocked"}},FilledColor={args:{filled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'info',\n    children: 'Info'\n  }\n}",...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'success',\n    children: 'Passed'\n  }\n}",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'warning',\n    children: 'Cautious'\n  }\n}",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'danger',\n    children: 'Blocked'\n  }\n}",...Danger.parameters?.docs?.source}}},FilledColor.parameters={...FilledColor.parameters,docs:{...FilledColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    filled: true\n  }\n}",...FilledColor.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Info","Success","Warning","Danger","FilledColor"]},"./src/components/Label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const normalVariantStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({variants:{default:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-neutral"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("border-neutral-default"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-neutral-emphasized")},info:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-info-default"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("border-info-faded"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-info-default")},success:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-success-default"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("border-success-faded"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-success-default")},warning:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-warning"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("border-warning-default"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-warning-default")},danger:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-danger-emphasized"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("border-danger-faded"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-surface-danger-faded")}}}),filledVariantStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({variants:{default:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-primary"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("transparent"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-surface-primary-emphasized")},info:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-info"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("transparent"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-surface-info-emphasized")},success:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-success"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("transparent"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-surface-success-emphasized")},warning:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-warning"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("transparent"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-surface-warning-emphasized")},danger:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-danger"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("transparent"),backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-surface-danger-emphasized")}}}),Label=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Text_Text__WEBPACK_IMPORTED_MODULE_3__.E).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.w})`
    display: inline-block;
    box-sizing: border-box;
    font-size: 0.625rem;
    border-radius: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_5__.J)("radii.1")};
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_5__.J)("fontWeights.semibold")};
    padding: 0.1875rem 0.5rem;

    border-width: 0.0625rem;
    border-style: solid;

    ${props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(props.filled?filledVariantStyles:normalVariantStyles,styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc)(props)}
`;Label.defaultProps={variant:"default"};try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"Set the appropriate colors for the component with 'default' as a default",name:"variant",required:!1,type:{name:'ResponsiveValue<"default" | "info" | "success" | "warning" | "danger", Required<Theme<TLengthStyledSystem>>>'}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},filled:{defaultValue:{value:"false"},description:"Use the alternative version of the label for critical status and extra emphasis",name:"filled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/cssVariables.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts");const Link=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.a.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w})`
    display: inline-block;
    color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("foreground-accent-default")};
    cursor: pointer;
    line-height: 1.4;
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fonts.normal")};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fontSizes.2")};
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fontWeights.semibold")};
    text-decoration: none;

    &:link,
    &:visited {
        color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("foreground-accent-default")};
    }

    &:hover,
    &:active {
        color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("foreground-accent-emphasized")};
        text-decoration: underline;
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc,styled_system__WEBPACK_IMPORTED_MODULE_0__.J,styled_system__WEBPACK_IMPORTED_MODULE_0__.Jh)}
`;try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.w})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc,styled_system__WEBPACK_IMPORTED_MODULE_0__.J,styled_system__WEBPACK_IMPORTED_MODULE_0__.Wy,styled_system__WEBPACK_IMPORTED_MODULE_0__.mw,styled_system__WEBPACK_IMPORTED_MODULE_0__.Jh)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/docs/StyledSystemLinks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>StyledSystemLinks});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Link/Link.tsx"),_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const mapping={margin:"space",width:"layout",height:"layout",borderradius:"border"},StyledSystemLinks=({component,supportedProps,...rest})=>{const supportedPropsTextParts=supportedProps.map((element=>(prop=>{const lowercaseProp=prop.toLowerCase(),anchor=mapping[lowercaseProp]?mapping[lowercaseProp]:lowercaseProp;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.N,{href:`https://styled-system.com/table/#${anchor}`,target:"_blank",rel:"noreferrer noopener",children:prop})})(element))).reduce(((acc,prop,index)=>{if(acc.push(prop),index!==supportedProps.length-1){const join=index===supportedProps.length-2?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:" and "}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:", "});acc.push(join)}return acc}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__.E,{...rest,as:"p",children:["The ",component," supports"," ",supportedPropsTextParts.map(((c,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:c},index)))," ","styled-system props."]})};StyledSystemLinks.displayName="StyledSystemLinks";try{StyledSystemLinks.displayName="StyledSystemLinks",StyledSystemLinks.__docgenInfo={description:"",displayName:"StyledSystemLinks",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"string"}},supportedProps:{defaultValue:null,description:"",name:"supportedProps",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/docs/StyledSystemLinks.tsx#StyledSystemLinks"]={docgenInfo:StyledSystemLinks.__docgenInfo,name:"StyledSystemLinks",path:"src/docs/StyledSystemLinks.tsx#StyledSystemLinks"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))},"./src/components/Label/docs/Label.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/docs/StyledSystemLinks.tsx"),_Label_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Label/docs/Label.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_Label_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"label",children:"Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Multiple or single labels can be used to categorize items.\nUse short labels for easy scanning. Use two words only if necessary to describe the status and differentiate it from other tags."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.ov,{of:_Label_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__.s,{component:"Label",supportedProps:["margin"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.om,{includePrimary:!1})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=src-components-Label-docs-Label-storybook-mdx.1817113b.iframe.bundle.js.map