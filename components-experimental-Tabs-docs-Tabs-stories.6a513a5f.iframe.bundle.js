"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[88582],{"./src/components/experimental/Tabs/docs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DisabledTab:()=>DisabledTab,DisabledTabs:()=>DisabledTabs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});__webpack_require__("./node_modules/react/index.js");var Tabs=__webpack_require__("./node_modules/react-aria-components/dist/Tabs.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeGet=__webpack_require__("./src/utils/experimental/themeGet.ts"),cssVariables=__webpack_require__("./src/essentials/experimental/cssVariables.ts"),Text=__webpack_require__("./src/components/experimental/Text/Text.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledTabs=(0,styled_components_browser_esm.Ay)(Tabs.tU)`
    display: flex;
    gap: ${(0,themeGet.J)("space.4")};

    &[data-orientation='vertical'] {
        flex-direction: row;
    }

    &[data-orientation='horizontal'] {
        flex-direction: column;
    }
`,StyledTabList=(0,styled_components_browser_esm.Ay)(Tabs.wb)`
    display: flex;
    gap: ${(0,themeGet.J)("space.4")};

    &[data-orientation='vertical'] {
        flex-direction: column;
    }

    &[data-orientation='horizontal'] {
        flex-direction: row;
    }
`,StyledTab=(0,styled_components_browser_esm.Ay)(Tabs.oz)`
    position: relative;
    cursor: pointer;
    outline: none;
    padding: ${(0,themeGet.J)("space.2")} 0;
    ${Text.U.variants.label1};
    color: ${(0,cssVariables.sR)("on-surface-variant")};
    transition: color 200ms ease;

    display: flex;
    align-items: center;
    justify-content: center;

    &[data-hovered] {
        color: ${(0,cssVariables.sR)("on-surface")};
    }

    &[data-selected] {
        color: ${(0,cssVariables.sR)("accent")};
    }

    &[data-disabled] {
        color: ${(0,cssVariables.sR)("on-surface-variant")};
        opacity: 0.38;
        cursor: default;
    }

    &::after {
        content: '';
        position: absolute;
        background: ${(0,cssVariables.sR)("accent")};
        opacity: 0;
        transition: opacity 200ms ease;
    }

    [data-orientation='vertical'] &::after {
        top: 50%;
        transform: translateY(-50%);
        right: -1px;
        width: 2px;
        height: 85%;
    }

    [data-orientation='horizontal'] &::after {
        left: 50%;
        transform: translateX(-50%);
        bottom: -1px;
        height: 2px;
        width: 85%;
    }

    &[data-selected]::after {
        opacity: 1;
    }

    &[data-focus-visible] {
        outline: 0.125rem solid ${(0,cssVariables.sR)("accent")};
        outline-offset: 0.125rem;
    }
`,StyledTabPanel=(0,styled_components_browser_esm.Ay)(Tabs.Kp)`
    outline: none;
    ${Text.U.variants.body1};
`;function Tabs_Tabs(props){return(0,jsx_runtime.jsx)(StyledTabs,{...props})}function TabList(props){return(0,jsx_runtime.jsx)(StyledTabList,{...props})}function Tab(props){return(0,jsx_runtime.jsx)(StyledTab,{...props})}function TabPanel(props){return(0,jsx_runtime.jsx)(StyledTabPanel,{...props})}Tabs_Tabs.displayName="Tabs",TabList.displayName="TabList",Tab.displayName="Tab",TabPanel.displayName="TabPanel";try{Tabs_Tabs.displayName="Tabs",Tabs_Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs_Tabs.__docgenInfo,name:"Tabs",path:"src/components/experimental/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Tabs/Tabs.tsx#TabList"]={docgenInfo:TabList.__docgenInfo,name:"TabList",path:"src/components/experimental/Tabs/Tabs.tsx#TabList"})}catch(__react_docgen_typescript_loader_error){}try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Tabs/Tabs.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/experimental/Tabs/Tabs.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"",displayName:"TabPanel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Tabs/Tabs.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"src/components/experimental/Tabs/Tabs.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}const Tabs_stories={title:"Experimental/Components/Tabs",component:Tabs_Tabs,parameters:{layout:"centered"},argTypes:{keyboardActivation:{control:"radio",options:["automatic","manual"]},orientation:{control:"radio",options:["horizontal","vertical"]},isDisabled:{control:"boolean"}}},Default={render:args=>(0,jsx_runtime.jsxs)(Tabs_Tabs,{...args,children:[(0,jsx_runtime.jsxs)(TabList,{"aria-label":"Tabs",children:[(0,jsx_runtime.jsx)(Tab,{id:"T1",children:"Tab 1"}),(0,jsx_runtime.jsx)(Tab,{id:"T2",children:"Tab 2"}),(0,jsx_runtime.jsx)(Tab,{id:"T3",children:"Tab 3"})]}),(0,jsx_runtime.jsx)(TabPanel,{id:"T1",children:"Content of Tab 1"}),(0,jsx_runtime.jsx)(TabPanel,{id:"T2",children:"Content of Tab 2"}),(0,jsx_runtime.jsx)(TabPanel,{id:"T3",children:"Content of Tab 3"})]})},DisabledTab={render:args=>(0,jsx_runtime.jsxs)(Tabs_Tabs,{...args,children:[(0,jsx_runtime.jsxs)(TabList,{"aria-label":"Tabs",children:[(0,jsx_runtime.jsx)(Tab,{id:"T1",children:"Tab 1"}),(0,jsx_runtime.jsx)(Tab,{id:"T2",isDisabled:!0,children:"Tab 2"}),(0,jsx_runtime.jsx)(Tab,{id:"T3",children:"Tab 3"})]}),(0,jsx_runtime.jsx)(TabPanel,{id:"T1",children:"Content of Tab 1"}),(0,jsx_runtime.jsx)(TabPanel,{id:"T2",children:"Content of Tab 2"}),(0,jsx_runtime.jsx)(TabPanel,{id:"T3",children:"Content of Tab 3"})]})},DisabledTabs={args:{isDisabled:!0},render:args=>(0,jsx_runtime.jsxs)(Tabs_Tabs,{...args,children:[(0,jsx_runtime.jsxs)(TabList,{"aria-label":"Tabs",children:[(0,jsx_runtime.jsx)(Tab,{id:"T1",children:"Tab 1"}),(0,jsx_runtime.jsx)(Tab,{id:"T2",children:"Tab 2"}),(0,jsx_runtime.jsx)(Tab,{id:"T3",children:"Tab 3"})]}),(0,jsx_runtime.jsx)(TabPanel,{id:"T1",children:"Content of Tab 1"}),(0,jsx_runtime.jsx)(TabPanel,{id:"T2",children:"Content of Tab 2"}),(0,jsx_runtime.jsx)(TabPanel,{id:"T3",children:"Content of Tab 3"})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <Tabs {...args}>\n            <TabList aria-label="Tabs">\n                <Tab id="T1">Tab 1</Tab>\n                <Tab id="T2">Tab 2</Tab>\n                <Tab id="T3">Tab 3</Tab>\n            </TabList>\n            <TabPanel id="T1">Content of Tab 1</TabPanel>\n            <TabPanel id="T2">Content of Tab 2</TabPanel>\n            <TabPanel id="T3">Content of Tab 3</TabPanel>\n        </Tabs>\n}',...Default.parameters?.docs?.source}}},DisabledTab.parameters={...DisabledTab.parameters,docs:{...DisabledTab.parameters?.docs,source:{originalSource:'{\n  render: args => <Tabs {...args}>\n            <TabList aria-label="Tabs">\n                <Tab id="T1">Tab 1</Tab>\n                <Tab id="T2" isDisabled>\n                    Tab 2\n                </Tab>\n                <Tab id="T3">Tab 3</Tab>\n            </TabList>\n            <TabPanel id="T1">Content of Tab 1</TabPanel>\n            <TabPanel id="T2">Content of Tab 2</TabPanel>\n            <TabPanel id="T3">Content of Tab 3</TabPanel>\n        </Tabs>\n}',...DisabledTab.parameters?.docs?.source}}},DisabledTabs.parameters={...DisabledTabs.parameters,docs:{...DisabledTabs.parameters?.docs,source:{originalSource:'{\n  args: {\n    isDisabled: true\n  },\n  render: args => <Tabs {...args}>\n            <TabList aria-label="Tabs">\n                <Tab id="T1">Tab 1</Tab>\n                <Tab id="T2">Tab 2</Tab>\n                <Tab id="T3">Tab 3</Tab>\n            </TabList>\n            <TabPanel id="T1">Content of Tab 1</TabPanel>\n            <TabPanel id="T2">Content of Tab 2</TabPanel>\n            <TabPanel id="T3">Content of Tab 3</TabPanel>\n        </Tabs>\n}',...DisabledTabs.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DisabledTab","DisabledTabs"]},"./src/components/experimental/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text,U:()=>textStyles});var react_aria_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-aria-components/dist/Text.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/experimental/theme.ts");const textStyles={variants:{display:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[4],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.bold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[4],fontStretch:"50%"},headline:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[3],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.bold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[3],fontStretch:"50%"},title1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[2],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.semibold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[2]},title2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.medium,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},body1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},body2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[0],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[0]},label1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.medium,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},label2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[0],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[0]}}},Text=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__.E)`
    color: inherit;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)((0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)(textStyles))}
`;Text.defaultProps={variant:"body1"};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}},variant:{defaultValue:{value:"body1"},description:"",name:"variant",required:!1,type:{name:"ResponsiveValue<TextVariant, Required<Theme<TLengthStyledSystem>>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/experimental/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/experimental/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>theme});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_index__WEBPACK_IMPORTED_MODULE_0__.R,fontSizes:["0.875rem","1rem","1.25rem","1.75rem","3rem"],fontWeights:{normal:400,medium:500,semibold:600,bold:700},fonts:{normal:fontStack(["Roboto Flex","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_index__WEBPACK_IMPORTED_MODULE_0__.H,space:["0","0.25rem","0.5rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem","3rem"],radii:["0rem","0.125rem","0.25rem","0.5rem","0.75rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"},lineHeights:["1.25rem","1.5rem","1.75rem","2.25rem","3.625rem"]};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/utils/experimental/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_experimental_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/experimental/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_experimental_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=components-experimental-Tabs-docs-Tabs-stories.6a513a5f.iframe.bundle.js.map