"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[85317],{"./src/components/TabBar/docs/TabBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabBar_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("./src/essentials/theme.ts"),Spaces=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UnderLine=styled_components_browser_esm.ZP.div`
    background-color: transparent;
    height: 0.1875rem;
    margin-top: ${Spaces.c0[1]};
`,InnerLink=styled_components_browser_esm.ZP.a.attrs({theme:theme.r})`
    color: ${(0,cssVariables.wp)("foreground-neutral-emphasized")};
    cursor: pointer;
    font-size: ${(0,themeGet.U)("fontSizes.1")};
    font-weight: ${(0,themeGet.U)("fontWeights.semibold")};
    font-family: ${(0,themeGet.U)("fonts.normal")};
    margin-right: ${Spaces.c0[3]};
    text-decoration: none;

    &:last-child {
        margin-right: 0;
    }

    &.${props=>props.activeClassName?props.activeClassName:"active"} {
        color: ${(0,cssVariables.wp)("foreground-accent-default")};

        ${UnderLine} {
            background-color: ${(0,cssVariables.wp)("foreground-accent-default")};
        }
    }
`,Link=({children,selected,...rest})=>{const combinedClassNames=[rest.className];return selected&&combinedClassNames.push(rest.activeClassName?rest.activeClassName:"active"),(0,jsx_runtime.jsxs)(InnerLink,{...rest,className:combinedClassNames.join(" "),children:[children,(0,jsx_runtime.jsx)(UnderLine,{})]})};Link.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{selected:{defaultValue:{value:"false"},description:"Indicates that the link is currently selected",name:"selected",required:!1,type:{name:"boolean"}},activeClassName:{defaultValue:null,description:"Override the default active class name (see react-router)",name:"activeClassName",required:!1,type:{name:"string"}},as:{defaultValue:{value:"'a'"},description:"Replace the rendered component with an HTML tag or another component",name:"as",required:!1,type:{name:"ComponentType<any> | keyof IntrinsicElements"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabBar/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/TabBar/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}const TabBar=Object.assign(styled_components_browser_esm.ZP.nav.attrs({theme:theme.r})`
        display: flex;

        ${index_esm.e6}
    `,{Link}),TABS=["A New Hope","Empire Strikes Back","Return of the Jedi"],TabBar_stories={title:"Components/TabBar",component:TabBar.Link,argTypes:{as:{control:"text"}}},Default={render:args=>{const[selected,setSelected]=(0,react.useState)();return(0,jsx_runtime.jsx)(TabBar,{children:TABS.map((it=>(0,jsx_runtime.jsx)(TabBar.Link,{href:"#",onClick:e=>{e.preventDefault(),setSelected(it)},selected:selected===it,...args,children:it},it)))})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [selected, setSelected] = useState<string>();\n    return <TabBar>\n                {TABS.map(it => <TabBar.Link key={it} href="#" onClick={e => {\n        e.preventDefault();\n        setSelected(it);\n      }} selected={selected === it} {...args}>\n                        {it}\n                    </TabBar.Link>)}\n            </TabBar>;\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=components-TabBar-docs-TabBar-stories.25a0c2ad.iframe.bundle.js.map