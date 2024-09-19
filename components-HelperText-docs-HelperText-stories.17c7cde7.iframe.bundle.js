"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[74425],{"./src/components/HelperText/docs/HelperText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsErrorDescription:()=>AsErrorDescription,AsInputClarification:()=>AsInputClarification,Danger:()=>Danger,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Input_Input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Input/Input.tsx"),_HelperText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/HelperText/HelperText.tsx"),_Box_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Box/Box.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/HelperText",component:_HelperText__WEBPACK_IMPORTED_MODULE_2__.E,args:{children:"This field is required"},argTypes:{variant:{control:"radio",options:["info","danger"]}}},Default={},Danger={args:{variant:"danger"}},AsInputClarification={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Box_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_4__.p,{placeholder:"Enter something"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HelperText__WEBPACK_IMPORTED_MODULE_2__.E,{mt:"1",children:"127 Characters left"})]})},AsErrorDescription={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Box_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_4__.p,{label:"Email",placeholder:"who@free-now.com",error:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HelperText__WEBPACK_IMPORTED_MODULE_2__.E,{mt:"1",variant:"danger",children:"Email is required"})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},AsInputClarification.parameters={...AsInputClarification.parameters,docs:{...AsInputClarification.parameters?.docs,source:{originalSource:'{\n  render: () => <Box p={2}>\n            <Input placeholder="Enter something" />\n            <HelperText mt="1">127 Characters left</HelperText>\n        </Box>\n}',...AsInputClarification.parameters?.docs?.source}}},AsErrorDescription.parameters={...AsErrorDescription.parameters,docs:{...AsErrorDescription.parameters?.docs,source:{originalSource:'{\n  render: () => <Box p={2}>\n            <Input label="Email" placeholder="who@free-now.com" error />\n            <HelperText mt="1" variant="danger">\n                Email is required\n            </HelperText>\n        </Box>\n}',...AsErrorDescription.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Danger","AsInputClarification","AsErrorDescription"]},"./src/components/HelperText/HelperText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>HelperText});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/themeGet.ts"),_Text_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx");const variants=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({variants:{info:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-neutral-emphasized")},danger:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-danger-default")}}}),HelperText=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_Text_Text__WEBPACK_IMPORTED_MODULE_3__.E).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.w})`
    display: block;
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_5__.J)("fontSizes.0")};
    text-align: left;
    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(variants,styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc)};
`;HelperText.defaultProps={variant:"info"};try{HelperText.displayName="HelperText",HelperText.__docgenInfo={description:"",displayName:"HelperText",props:{variant:{defaultValue:{value:"info"},description:"Set the appropriate colors for component with 'info' as default",name:"variant",required:!1,type:{name:'ResponsiveValue<"info" | "danger", Required<Theme<TLengthStyledSystem>>>'}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"normal" | "bold" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HelperText/HelperText.tsx#HelperText"]={docgenInfo:HelperText.__docgenInfo,name:"HelperText",path:"src/components/HelperText/HelperText.tsx#HelperText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Password_Password__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Password/Password.tsx"),_InnerInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/InnerInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>"password"===props.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Password_Password__WEBPACK_IMPORTED_MODULE_2__._,{...props,ref}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_InnerInput__WEBPACK_IMPORTED_MODULE_3__.P,{...props,ref})));Input.defaultProps={size:"medium",variant:"boxed",type:"text"};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.w})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc,styled_system__WEBPACK_IMPORTED_MODULE_0__.J,styled_system__WEBPACK_IMPORTED_MODULE_0__.Wy,styled_system__WEBPACK_IMPORTED_MODULE_0__.mw,styled_system__WEBPACK_IMPORTED_MODULE_0__.Jh)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"normal" | "bold" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=components-HelperText-docs-HelperText-stories.17c7cde7.iframe.bundle.js.map