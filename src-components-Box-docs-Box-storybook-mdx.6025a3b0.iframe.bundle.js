/*! For license information please see src-components-Box-docs-Box-storybook-mdx.6025a3b0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[79101,55013],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/Box/docs/Box.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Box_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Box/docs/Box.stories.tsx"),_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/docs/StyledSystemLinks.tsx");function _createMdxContent(props){const _components={h1:"h1",h2:"h2",p:"p",...(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_Box_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"box",children:"Box"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This component serves as a wrapper component for most layout related needs. Use Box to set values such as display, width, height, and more. In practice, this component is used frequently as a wrapper around other components to achieve Box Model related styling."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__.s,{component:"Box",supportedProps:["space","layout","position","color","flexbox","grid-layout","background"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.om,{includePrimary:!1})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/Box/docs/Box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Inline:()=>Inline,Responsive:()=>Responsive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Box",component:__webpack_require__("./src/components/Box/Box.tsx").a},Default={args:{children:"By default it is a block `div` element"}},Inline={args:{as:"span",children:"I can be inline when `as` prop is used"}},Responsive={args:{children:"I can be responsive",bg:"#FF9CFC",width:[1,1,.5]}},__namedExportsOrder=["Default","Inline","Responsive"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'By default it is a block `div` element'\n  }\n}",...Default.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:"{\n  args: {\n    as: 'span',\n    children: 'I can be inline when `as` prop is used'\n  }\n}",...Inline.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'I can be responsive',\n    bg: '#FF9CFC',\n    width: [1, 1, 1 / 2]\n  }\n}",...Responsive.parameters?.docs?.source}}}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/cssVariables.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts");const Link=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.a.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w})`
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
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"normal" | "bold" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/docs/StyledSystemLinks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>StyledSystemLinks});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Link/Link.tsx"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Text/Text.tsx");const mapping={margin:"space",width:"layout",height:"layout",borderradius:"border"},StyledSystemLinks=({component,supportedProps,...rest})=>{const supportedPropsTextParts=supportedProps.map((element=>(prop=>{const lowercaseProp=prop.toLowerCase(),anchor=mapping[lowercaseProp]?mapping[lowercaseProp]:lowercaseProp;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.N,{href:`https://styled-system.com/table/#${anchor}`,target:"_blank",rel:"noreferrer noopener"},prop)})(element))).reduce(((acc,prop,index)=>{if(acc.push(prop),index!==supportedProps.length-1){const join=index===supportedProps.length-2?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null," and "):react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,", ");acc.push(join)}return acc}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.E,{...rest,as:"p"},"The ",component," supports"," ",supportedPropsTextParts.map(((c,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:index},c)))," ","styled-system props.")};try{StyledSystemLinks.displayName="StyledSystemLinks",StyledSystemLinks.__docgenInfo={description:"",displayName:"StyledSystemLinks",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"string"}},supportedProps:{defaultValue:null,description:"",name:"supportedProps",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/docs/StyledSystemLinks.tsx#StyledSystemLinks"]={docgenInfo:StyledSystemLinks.__docgenInfo,name:"StyledSystemLinks",path:"src/docs/StyledSystemLinks.tsx#StyledSystemLinks"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=src-components-Box-docs-Box-storybook-mdx.6025a3b0.iframe.bundle.js.map