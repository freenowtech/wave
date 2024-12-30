"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[5224],{"./src/components/experimental/Table/docs/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Async:()=>Async,Default:()=>Default,Empty:()=>Empty,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var react=__webpack_require__("./node_modules/react/index.js"),Table=__webpack_require__("./node_modules/react-aria-components/dist/Table.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeGet=__webpack_require__("./src/utils/experimental/themeGet.ts"),Text=__webpack_require__("./src/components/experimental/Text/Text.tsx"),cssVariables=__webpack_require__("./src/essentials/experimental/cssVariables.ts");const Table_Table=(0,styled_components_browser_esm.Ay)(Table.XI)`
    border-collapse: collapse;
    border-spacing: 0;
    position: relative;
    width: 100%;
    max-height: 100vh;
    background: ${(0,cssVariables.sR)("surface")};
    color: ${(0,cssVariables.sR)("on-surface")};
`,Cell=(0,styled_components_browser_esm.Ay)(Table.fh)`
    box-sizing: border-box;
    padding: 0 ${(0,themeGet.J)("space.3")};
    position: relative;

    > * {
        position: relative;
    }

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        border-radius: inherit;
        opacity: 0;
        transition: opacity ease 200ms;
    }

    &:first-of-type {
        border-radius: ${(0,themeGet.J)("radii.4")} 0 0 ${(0,themeGet.J)("radii.4")};
    }

    &:last-of-type {
        border-radius: 0 ${(0,themeGet.J)("radii.4")} ${(0,themeGet.J)("radii.4")} 0;
    }

    &[data-focused] {
        outline: 0;
    }
`,Column=(0,styled_components_browser_esm.Ay)(Table.VP)`
    position: sticky;
    top: 0;
    z-index: 1;
    box-sizing: border-box;
    padding: 0 ${(0,themeGet.J)("space.3")};
    height: 3rem;
    background: ${(0,cssVariables.sR)("surface")};
    border-bottom: 1px solid ${(0,cssVariables.sR)("divider")};
    text-align: start;
    white-space: nowrap;
    outline: 0;
    ${Text.U.variants.title2}
`,Row=(0,styled_components_browser_esm.Ay)(Table.fI)`
    height: 3rem;
    border-bottom: 1px solid ${(0,cssVariables.sR)("divider")};
    border-radius: ${(0,themeGet.J)("radii.4")};
    ${Text.U.variants.body1}

    &[data-hovered] td::before {
        background: ${(0,cssVariables.sR)("on-surface")};
        opacity: 0.08;
    }

    &[data-selected] {
        background: ${(0,cssVariables.sR)("interactive-container")};
    }

    &[data-focused] {
        outline: 0.125rem solid ${(0,cssVariables.sR)("accent")};
        outline-offset: -0.125rem;
    }
`,Skeleton=styled_components_browser_esm.Ay.div`
    height: 1rem;
    border-radius: ${(0,themeGet.J)("radii.2")};
    background: ${(0,cssVariables.sR)("surface-variant")};
`;try{Table_Table.displayName="Table",Table_Table.__docgenInfo={description:"",displayName:"Table",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Table/Table.tsx#Table"]={docgenInfo:Table_Table.__docgenInfo,name:"Table",path:"src/components/experimental/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Table/Table.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/experimental/Table/Table.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Table_stories={title:"Experimental/Components/Table",component:Table_Table,parameters:{layout:"centered"},args:{label:"Files"}},Default={render:()=>{const columns=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}];return(0,jsx_runtime.jsxs)(Table_Table,{"aria-label":"Files",selectionMode:"multiple",selectionBehavior:"replace",children:[(0,jsx_runtime.jsx)(Table.A0,{columns,children:column=>(0,jsx_runtime.jsx)(Column,{isRowHeader:column.isRowHeader,children:column.name})}),(0,jsx_runtime.jsx)(Table.BF,{items:[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"},{id:5,name:"log.txt",date:"1/18/2016",type:"Text Document"},{id:6,name:"log.txt",date:"1/18/2016",type:"Text Document"},{id:7,name:"log.txt",date:"1/18/2016",type:"Text Document"}],children:item=>(0,jsx_runtime.jsx)(Row,{columns,children:column=>(0,jsx_runtime.jsx)(Cell,{children:item[column.id]})})})]})}},Loading={render:()=>{const columns=[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}];return(0,jsx_runtime.jsxs)(Table_Table,{"aria-label":"Files",children:[(0,jsx_runtime.jsx)(Table.A0,{columns,children:column=>(0,jsx_runtime.jsx)(Column,{isRowHeader:column.isRowHeader,children:column.name})}),(0,jsx_runtime.jsx)(Table.BF,{items:[{id:1},{id:2},{id:3}],children:()=>(0,jsx_runtime.jsx)(Row,{columns,children:()=>(0,jsx_runtime.jsx)(Cell,{children:(0,jsx_runtime.jsx)(Skeleton,{})})})})]})}},Empty={render:()=>(0,jsx_runtime.jsxs)(Table_Table,{"aria-label":"Files",children:[(0,jsx_runtime.jsx)(Table.A0,{columns:[{name:"Name",id:"name",isRowHeader:!0},{name:"Type",id:"type"},{name:"Date Modified",id:"date"}],children:column=>(0,jsx_runtime.jsx)(Column,{isRowHeader:column.isRowHeader,children:column.name})}),(0,jsx_runtime.jsx)(Table.BF,{items:[],renderEmptyState:()=>(0,jsx_runtime.jsx)("div",{style:{padding:"1rem",textAlign:"center"},children:(0,jsx_runtime.jsx)(Text.E,{variant:"body1",children:"No results found"})}),children:[]})]})},Async={render:()=>{const[isLoading,setIsLoading]=react.useState(!0),[items,setItems]=react.useState(new Array(10).fill({name:"",height:0,mass:0,birth_year:""}).map(((value,idx)=>({...value,name:idx.toString()}))));react.useEffect((()=>{let ignore=!1;return async function startFetching(){const res=await fetch("https://swapi.py4e.com/api/people"),json=await res.json();ignore||setItems(json.results),setIsLoading(!1)}(),()=>{ignore=!0}}),[]);const columns=[{name:"Name",id:"name",isRowHeader:!0},{name:"Height",id:"height"},{name:"Mass",id:"mass"},{name:"Birth Year",id:"birth_year"}];return(0,jsx_runtime.jsxs)(Table_Table,{"aria-label":"Star Wars Characters",children:[(0,jsx_runtime.jsx)(Table.A0,{columns,children:column=>(0,jsx_runtime.jsx)(Column,{isRowHeader:column.isRowHeader,children:column.name})}),(0,jsx_runtime.jsx)(Table.BF,{items,children:item=>(0,jsx_runtime.jsx)(Row,{id:item.name,columns,children:column=>(0,jsx_runtime.jsx)(Cell,{children:isLoading?(0,jsx_runtime.jsx)(Skeleton,{}):item[column.id]})})})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const columns: Array<{\n      id: string;\n      name: string;\n      isRowHeader?: boolean;\n    }> = [{\n      name: 'Name',\n      id: 'name',\n      isRowHeader: true\n    }, {\n      name: 'Type',\n      id: 'type'\n    }, {\n      name: 'Date Modified',\n      id: 'date'\n    }];\n    const rows: Array<{\n      id: number;\n      name: string;\n      date: string;\n      type: string;\n    }> = [{\n      id: 1,\n      name: 'Games',\n      date: '6/7/2020',\n      type: 'File folder'\n    }, {\n      id: 2,\n      name: 'Program Files',\n      date: '4/7/2021',\n      type: 'File folder'\n    }, {\n      id: 3,\n      name: 'bootmgr',\n      date: '11/20/2010',\n      type: 'System file'\n    }, {\n      id: 4,\n      name: 'log.txt',\n      date: '1/18/2016',\n      type: 'Text Document'\n    }, {\n      id: 5,\n      name: 'log.txt',\n      date: '1/18/2016',\n      type: 'Text Document'\n    }, {\n      id: 6,\n      name: 'log.txt',\n      date: '1/18/2016',\n      type: 'Text Document'\n    }, {\n      id: 7,\n      name: 'log.txt',\n      date: '1/18/2016',\n      type: 'Text Document'\n    }];\n    return <Table aria-label=\"Files\" selectionMode=\"multiple\" selectionBehavior=\"replace\">\n                <TableHeader columns={columns}>\n                    {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}\n                </TableHeader>\n                <TableBody items={rows}>\n                    {item => <Row columns={columns}>{column => <Cell>{item[column.id]}</Cell>}</Row>}\n                </TableBody>\n            </Table>;\n  }\n}",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const columns: Array<{\n      id: string;\n      name: string;\n      isRowHeader?: boolean;\n    }> = [{\n      name: 'Name',\n      id: 'name',\n      isRowHeader: true\n    }, {\n      name: 'Type',\n      id: 'type'\n    }, {\n      name: 'Date Modified',\n      id: 'date'\n    }];\n    return <Table aria-label=\"Files\">\n                <TableHeader columns={columns}>\n                    {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}\n                </TableHeader>\n                <TableBody items={[{\n        id: 1\n      }, {\n        id: 2\n      }, {\n        id: 3\n      }]}>\n                    {() => <Row columns={columns}>\n                            {() => <Cell>\n                                    <Skeleton />\n                                </Cell>}\n                        </Row>}\n                </TableBody>\n            </Table>;\n  }\n}",...Loading.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const columns: Array<{\n      id: string;\n      name: string;\n      isRowHeader?: boolean;\n    }> = [{\n      name: 'Name',\n      id: 'name',\n      isRowHeader: true\n    }, {\n      name: 'Type',\n      id: 'type'\n    }, {\n      name: 'Date Modified',\n      id: 'date'\n    }];\n    return <Table aria-label=\"Files\">\n                <TableHeader columns={columns}>\n                    {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}\n                </TableHeader>\n                <TableBody items={[]} renderEmptyState={() => <div style={{\n        padding: '1rem',\n        textAlign: 'center'\n      }}>\n                            <Text variant=\"body1\">No results found</Text>\n                        </div>}>\n                    {[]}\n                </TableBody>\n            </Table>;\n  }\n}",...Empty.parameters?.docs?.source}}},Async.parameters={...Async.parameters,docs:{...Async.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    type Character = {\n      name: string;\n      height: number;\n      mass: number;\n      birth_year: string;\n    };\n    const emptyCharacter: Character = {\n      name: '',\n      height: 0,\n      mass: 0,\n      birth_year: ''\n    };\n    const pageSize = 10;\n    const [isLoading, setIsLoading] = React.useState(true);\n    const [items, setItems] = React.useState<Character[]>( /* eslint-disable-next-line unicorn/no-new-array */\n    new Array(pageSize).fill(emptyCharacter).map((value, idx) => ({\n      ...value,\n      name: idx.toString()\n    })));\n    React.useEffect(() => {\n      let ignore = false;\n      async function startFetching() {\n        const res = await fetch(`https://swapi.py4e.com/api/people`);\n        const json = await res.json();\n        if (!ignore) {\n          setItems(json.results);\n        }\n        setIsLoading(false);\n      }\n\n      // eslint-disable-next-line no-void\n      void startFetching();\n      return () => {\n        ignore = true;\n      };\n    }, []);\n    const columns: Array<{\n      id: string;\n      name: string;\n      isRowHeader?: boolean;\n    }> = [{\n      name: 'Name',\n      id: 'name',\n      isRowHeader: true\n    }, {\n      name: 'Height',\n      id: 'height'\n    }, {\n      name: 'Mass',\n      id: 'mass'\n    }, {\n      name: 'Birth Year',\n      id: 'birth_year'\n    }];\n    return <Table aria-label=\"Star Wars Characters\">\n                <TableHeader columns={columns}>\n                    {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}\n                </TableHeader>\n                <TableBody items={items}>\n                    {item => <Row id={item.name} columns={columns}>\n                            {column => <Cell>{isLoading ? <Skeleton /> : item[column.id]}</Cell>}\n                        </Row>}\n                </TableBody>\n            </Table>;\n  }\n}",...Async.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Loading","Empty","Async"]},"./src/components/experimental/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text,U:()=>textStyles});var react_aria_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-aria-components/dist/Text.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/experimental/theme.ts");const textStyles={variants:{display:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[4],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.bold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[4],fontStretch:"50%"},headline:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[3],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.bold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[3],fontStretch:"50%"},title1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[2],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.semibold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[2]},title2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.medium,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},body1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},body2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[0],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[0]},label1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.medium,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},label2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[0],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[0]}}},Text=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(react_aria_components__WEBPACK_IMPORTED_MODULE_3__.E)`
    color: inherit;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)((0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)(textStyles))}
`;Text.defaultProps={variant:"body1"};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:{value:"body1"},description:"",name:"variant",required:!1,type:{name:'ResponsiveValue<"display" | "headline" | "title1" | "title2" | "body1" | "body2" | "label1" | "label2", Required<Theme<TLengthStyledSystem>>>'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/experimental/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/experimental/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>theme});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_index__WEBPACK_IMPORTED_MODULE_0__.R,fontSizes:["0.875rem","1rem","1.25rem","1.75rem","3rem"],fontWeights:{normal:400,medium:500,semibold:600,bold:700},fonts:{normal:fontStack(["Roboto Flex","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_index__WEBPACK_IMPORTED_MODULE_0__.H,space:["0","0.25rem","0.5rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem","3rem"],radii:["0rem","0.125rem","0.25rem","0.5rem","0.75rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"},lineHeights:["1.25rem","1.5rem","1.75rem","2.25rem","3.625rem"]};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/utils/experimental/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_experimental_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/experimental/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_experimental_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=components-experimental-Table-docs-Table-stories.bbf6a6ef.iframe.bundle.js.map