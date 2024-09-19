"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[29795],{"./src/components/Breadcrumbs/docs/Breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumbs_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ChevronRightIcon=__webpack_require__("./src/icons/arrows/ChevronRightIcon.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),theme=__webpack_require__("./src/essentials/theme.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),Box=__webpack_require__("./src/components/Box/Box.tsx"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BreadcrumbsList=styled_components_browser_esm.Ay.ul`
    padding: 0;
    list-style: none;
    display: flex;
    overflow: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
`,BreadcrumbsListItem=styled_components_browser_esm.Ay.li`
    display: flex;
`,Breadcrumbs=({children})=>{const arrayChildren=react.Children.toArray(children),breadcrumbsListRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{breadcrumbsListRef.current&&(breadcrumbsListRef.current.scrollLeft=breadcrumbsListRef.current.scrollWidth)}),[]),(0,jsx_runtime.jsx)(BreadcrumbsList,{ref:breadcrumbsListRef,children:react.Children.map(arrayChildren,((child,index)=>(0,jsx_runtime.jsxs)(BreadcrumbsListItem,{children:[(0,jsx_runtime.jsx)("nav",{"aria-label":"breadcrumbs",children:(0,react.cloneElement)(child)}),index<arrayChildren.length-1?(0,jsx_runtime.jsx)(Box.a,{height:16,mt:"0.125rem",children:(0,jsx_runtime.jsx)(ChevronRightIcon.A,{size:16,color:(0,cssVariables.sR)("foreground-neutral-default")})}):null]})))})};Breadcrumbs.displayName="Breadcrumbs";const Link=styled_components_browser_esm.Ay.a.attrs({theme:theme.w})`
    display: inline-block;
    color: ${(0,cssVariables.sR)("foreground-accent-default")};
    cursor: pointer;
    line-height: 1.4;
    font-family: ${(0,themeGet.J)("fonts.normal")};
    font-size: ${(0,themeGet.J)("fontSizes.1")};
    text-decoration: none;
    padding: 0 0.25rem 0 0.25rem;

    &:hover,
    &:active {
        color: ${(0,cssVariables.sR)("foreground-accent-emphasized")};
        text-decoration: underline;
    }
`,Item=(0,styled_components_browser_esm.Ay)(Text.E).attrs((()=>({fontSize:"small",padding:"0 0.25rem 0 0.25rem"})))``;Breadcrumbs.Item=Item,Breadcrumbs.Link=Link;try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{children:{defaultValue:null,description:"Content of the Breadcrumbs\n@required",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"src/components/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}const DefaultBreadcrumbs=({...props})=>(0,jsx_runtime.jsxs)(Breadcrumbs,{...props,children:[(0,jsx_runtime.jsx)(Breadcrumbs.Link,{href:"/path",children:"Path"}),(0,jsx_runtime.jsx)(Breadcrumbs.Link,{href:"/path/to",children:"to"}),(0,jsx_runtime.jsx)(Breadcrumbs.Item,{children:"Glory"})]});DefaultBreadcrumbs.displayName="DefaultBreadcrumbs";try{DefaultBreadcrumbs.displayName="DefaultBreadcrumbs",DefaultBreadcrumbs.__docgenInfo={description:"",displayName:"DefaultBreadcrumbs",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs/docs/DefaultBreadcrumbs.tsx#DefaultBreadcrumbs"]={docgenInfo:DefaultBreadcrumbs.__docgenInfo,name:"DefaultBreadcrumbs",path:"src/components/Breadcrumbs/docs/DefaultBreadcrumbs.tsx#DefaultBreadcrumbs"})}catch(__react_docgen_typescript_loader_error){}const Breadcrumbs_stories={title:"Components/Breadcrumbs",component:Breadcrumbs,argTypes:{children:{table:{type:{summary:"ReactNode"}}},inverted:{options:[!0,!1],control:"select",table:{type:{summary:"boolean"}}}}},Default={render:DefaultBreadcrumbs};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: DefaultBreadcrumbs\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.w})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc,styled_system__WEBPACK_IMPORTED_MODULE_0__.J,styled_system__WEBPACK_IMPORTED_MODULE_0__.Wy,styled_system__WEBPACK_IMPORTED_MODULE_0__.mw,styled_system__WEBPACK_IMPORTED_MODULE_0__.Jh)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"normal" | "bold" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/arrows/ChevronRightIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ChevronRightIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M13.675 12L7.5 5h2.676l6.222 7-6.222 7H7.5l6.175-7z",fill:"currentColor"})})};ChevronRightIcon.displayName="ChevronRightIcon";const __WEBPACK_DEFAULT_EXPORT__=ChevronRightIcon;try{ChevronRightIcon.displayName="ChevronRightIcon",ChevronRightIcon.__docgenInfo={description:"",displayName:"ChevronRightIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'"inherit" | (string & {}) | ReadCssColorVariable'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/arrows/ChevronRightIcon.tsx#ChevronRightIcon"]={docgenInfo:ChevronRightIcon.__docgenInfo,name:"ChevronRightIcon",path:"src/icons/arrows/ChevronRightIcon.tsx#ChevronRightIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=components-Breadcrumbs-docs-Breadcrumbs-stories.f48d259a.iframe.bundle.js.map