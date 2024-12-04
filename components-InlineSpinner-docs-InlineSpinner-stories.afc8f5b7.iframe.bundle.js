"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[25815],{"./src/components/InlineSpinner/docs/InlineSpinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InlineSpinner_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const sizeVariant=(0,index_esm.Ox)({prop:"size",variants:{small:{width:"1rem",height:"1rem",borderWidth:"0.1rem"},medium:{width:"1.25rem",height:"1.25rem",borderWidth:"0.125rem"}}}),rotation=styled_components_browser_esm.i7`
    to {
        transform: rotate(360deg);
    }
`,InlineSpinnerIcon=styled_components_browser_esm.Ay.span`
    display: inline-block;
    box-sizing: border-box;
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: text-bottom;
    border: 0.125rem solid ${p=>p.color};
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${rotation} 750ms linear infinite;

    ${(0,index_esm.Zz)(index_esm.Lc,sizeVariant)}
`,InlineSpinner=({color=(0,cssVariables.sR)("foreground-primary"),size="medium",...rest})=>(0,jsx_runtime.jsx)("span",{role:"progressbar",children:(0,jsx_runtime.jsx)(InlineSpinnerIcon,{color,size,...rest})});InlineSpinner.displayName="InlineSpinner";try{InlineSpinner.displayName="InlineSpinner",InlineSpinner.__docgenInfo={description:"",displayName:"InlineSpinner",props:{color:{defaultValue:{value:"getSemanticValue('foreground-primary')"},description:"Override the color of the spinner",name:"color",required:!1,type:{name:"ReadCssColorVariable | (string & {})"}},size:{defaultValue:{value:"medium"},description:"Set the size of the component",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InlineSpinner/InlineSpinner.tsx#InlineSpinner"]={docgenInfo:InlineSpinner.__docgenInfo,name:"InlineSpinner",path:"src/components/InlineSpinner/InlineSpinner.tsx#InlineSpinner"})}catch(__react_docgen_typescript_loader_error){}const InlineSpinner_stories={title:"Components/InlineSpinner",component:InlineSpinner,argTypes:{size:{control:"radio",options:["medium","small"]}}},Default={},Small={args:{size:"small"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small"]}}]);
//# sourceMappingURL=components-InlineSpinner-docs-InlineSpinner-stories.afc8f5b7.iframe.bundle.js.map