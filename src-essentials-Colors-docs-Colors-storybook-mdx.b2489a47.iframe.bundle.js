"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[7192],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Password_Password__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Password/Password.tsx"),_InnerInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Input/InnerInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>"password"===props.type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Password_Password__WEBPACK_IMPORTED_MODULE_2__._,{...props,ref}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_InnerInput__WEBPACK_IMPORTED_MODULE_3__.P,{...props,ref})));Input.defaultProps={size:"medium",variant:"boxed",type:"text"};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Table/components/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Table});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("./src/essentials/theme.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts"),TableContext=__webpack_require__("./src/components/Table/context/TableContext.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TableElement=styled_components_browser_esm.Ay.table.attrs({theme:theme.w})`
    font-size: ${(0,themeGet.J)("fontSizes.1")};
    font-family: ${(0,themeGet.J)("fonts.normal")};
    border-collapse: collapse;
    border-spacing: 0;
    box-sizing: border-box;

    thead tr:hover {
        background-color: inherit;
    }

    ${(0,index_esm.Zz)(index_esm.Lc,index_esm.VL,index_esm.uJ)}
`,Table=({children,rowStyle,rowSize="normal",columnSpace="normal",...props})=>{const context={columnSpace:(columnSpaceValue=columnSpace,"normal"===columnSpaceValue?"1.5rem":"small"===columnSpaceValue?"1rem":columnSpaceValue),rowSize:(rowSizeValue=rowSize,"large"===rowSizeValue?"4.5rem":"normal"===rowSizeValue?"3.5rem":"small"===rowSizeValue?"3rem":rowSizeValue),rowStyle};var rowSizeValue,columnSpaceValue;return(0,jsx_runtime.jsx)(TableElement,{...props,children:(0,jsx_runtime.jsx)(TableContext.G.Provider,{value:context,children})})};Table.displayName="Table";try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{rowStyle:{defaultValue:{value:"lines"},description:"Row style (background colors, borders, etc.)",name:"rowStyle",required:!0,type:{name:"enum",value:[{value:'"lines"'},{value:'"zebra"'},{value:'"blank"'}]}},rowSize:{defaultValue:{value:"normal"},description:"The height of the table rows. More info on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/height)",name:"rowSize",required:!1,type:{name:"string"}},columnSpace:{defaultValue:{value:"normal"},description:"The space between columns of the table (any CSS value will be divided by 2 using `calc`)",name:"columnSpace",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/components/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/components/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}try{TableElement.displayName="TableElement",TableElement.__docgenInfo={description:"",displayName:"TableElement",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/components/Table.tsx#TableElement"]={docgenInfo:TableElement.__docgenInfo,name:"TableElement",path:"src/components/Table/components/Table.tsx#TableElement"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Table/components/TableCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>TableCell});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_context_TableContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Table/context/TableContext.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TableCellElement=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.td`
    height: ${p=>p.rowSize};
    padding: 0 calc(${p=>p.columnSpace} / 2);
    vertical-align: middle;
    white-space: nowrap;

    &:first-child {
        padding-left: ${p=>p.columnSpace};
    }

    &:last-child {
        padding-right: ${p=>p.columnSpace};
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.Jh,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp)}
`,TableCell=props=>{const{rowSize,columnSpace}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_TableContext__WEBPACK_IMPORTED_MODULE_4__.G);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TableCellElement,{rowSize,columnSpace,...props})};TableCell.displayName="TableCell";try{TableCell.displayName="TableCell",TableCell.__docgenInfo={description:"",displayName:"TableCell",props:{rowSize:{defaultValue:null,description:"The height of the table rows. More info on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/height)",name:"rowSize",required:!1,type:{name:"string"}},columnSpace:{defaultValue:null,description:"The space between columns of the table (any CSS value will be divided by 2 using `calc`)",name:"columnSpace",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/components/TableCell.tsx#TableCell"]={docgenInfo:TableCell.__docgenInfo,name:"TableCell",path:"src/components/Table/components/TableCell.tsx#TableCell"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Table/components/TableHeaderCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>TableHeaderCell});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/cssVariables.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/themeGet.ts"),_context_TableContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Table/context/TableContext.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TableHeaderCellElement=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.th.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.w})`
    border-bottom: 0.0625rem solid ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__.sR)("border-neutral-emphasized")} !important;
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_6__.J)("fontWeights.bold")};
    height: ${p=>p.rowSize};
    padding: 0 calc(${p=>p.columnSpace} / 2);
    text-align: left;
    vertical-align: middle;
    white-space: nowrap;

    &:first-child {
        padding-left: ${p=>p.columnSpace};
    }

    &:last-child {
        padding-right: ${p=>p.columnSpace};
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.Jh,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zp)}
`,TableHeaderCell=props=>{const{rowSize,columnSpace}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_TableContext__WEBPACK_IMPORTED_MODULE_7__.G);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TableHeaderCellElement,{rowSize,columnSpace,...props})};TableHeaderCell.displayName="TableHeaderCell";try{TableHeaderCell.displayName="TableHeaderCell",TableHeaderCell.__docgenInfo={description:"",displayName:"TableHeaderCell",props:{rowSize:{defaultValue:null,description:"The height of the table rows. More info on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/height)",name:"rowSize",required:!1,type:{name:"string"}},columnSpace:{defaultValue:null,description:"The space between columns of the table (any CSS value will be divided by 2 using `calc`)",name:"columnSpace",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/components/TableHeaderCell.tsx#TableHeaderCell"]={docgenInfo:TableHeaderCell.__docgenInfo,name:"TableHeaderCell",path:"src/components/Table/components/TableHeaderCell.tsx#TableHeaderCell"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Table/components/TableRow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>TableRow});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_context_TableContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Table/context/TableContext.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/cssVariables.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TableRowElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.tr((({rowStyle,active,hover=!0})=>{switch(rowStyle){case"zebra":return((active,hover)=>styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
    &:nth-child(even) {
        background-color: hsla(${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("background-surface-neutral-faded-hsl")}, 0.3);
    }

    &:hover {
        ${hover?`background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("background-surface-info-faded")}`:""};
    }

    ${active?`background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("background-surface-info-active")} !important`:""};
`)(active,hover);case"lines":return((active,hover)=>styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
    td,
    th {
        border-bottom: 0.0625rem solid ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("border-neutral-default")};
    }

    &:first-of-type {
        th {
            border-bottom: 0.0625rem solid ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("border-neutral-emphasized")};
        }
    }

    &:hover {
        ${hover?`background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("background-surface-neutral-faded")};`:""}
    }

    ${active?`background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("background-surface-info-faded")} !important`:""};
`)(active,hover);default:return styled_components__WEBPACK_IMPORTED_MODULE_2__.AH`
                    &:hover {
                        ${hover?`background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("background-surface-neutral-faded")}`:""};
                    }

                    ${active?`background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.sR)("background-surface-info-faded")} !important`:""};
                `}})),TableRow=props=>{const{rowStyle}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_TableContext__WEBPACK_IMPORTED_MODULE_4__.G);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableRowElement,{rowStyle,...props})};TableRow.displayName="TableRow";try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{active:{defaultValue:{value:"false"},description:"Show active state styling on the row",name:"active",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"true"},description:"Show the hover state styling on the row",name:"hover",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/components/TableRow.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/components/Table/components/TableRow.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Table/context/TableContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>TableContext});const TableContext=__webpack_require__("./node_modules/react/index.js").createContext({columnSpace:"24px",rowSize:"56px",rowStyle:"lines"})},"./src/essentials/Colors/docs/Colors.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Colors_storybook});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),Colors=__webpack_require__("./src/essentials/Colors/Colors.ts"),esm=__webpack_require__("./node_modules/storybook-dark-mode/dist/esm/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TableCell=__webpack_require__("./src/components/Table/components/TableCell.tsx"),Table=__webpack_require__("./src/components/Table/components/Table.tsx"),TableRow=__webpack_require__("./src/components/Table/components/TableRow.tsx"),TableHeaderCell=__webpack_require__("./src/components/Table/components/TableHeaderCell.tsx"),Box=__webpack_require__("./src/components/Box/Box.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),EnforcedColorScheme=__webpack_require__("./src/components/ColorScheme/EnforcedColorScheme.tsx"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts"),ModernColors=__webpack_require__("./src/essentials/Colors/ModernColors.ts");const CenteredTableCell=(0,styled_components_browser_esm.Ay)(TableCell.n)`
    text-align: center;
    width: 1%; /* Hack to make width as small as possible while respecting table-layout: auto */

    &:first-child {
        padding-left: 1rem;
    }
`,BlockContainer=styled_components_browser_esm.Ay.div`
    width: 4rem;
    margin: auto !important;
`,ColorBlock=styled_components_browser_esm.Ay.div`
    background-color: var(${p=>p.token});
    border: 0.0625rem solid ${(0,cssVariables.sR)("border-neutral-default")};
    height: 1.5rem;
`,Tokens={s:{light:{classic:Colors.pi,modern:ModernColors.pi},dark:{classic:Colors.SX,modern:ModernColors.SX}},b:{light:{classic:Colors.Jy,modern:ModernColors.Jy},dark:{classic:Colors.Jy,modern:ModernColors.Jy}}},CssVariablesTable=({tier})=>{const[nameSearchInput,setNameSearchInput]=(0,react.useState)(""),isDark=(0,esm.D2)(),{store:{globals}}=(0,react.useContext)(dist.vt),{theme}=globals.get(),tokens=Tokens[tier][isDark?"dark":"light"][theme],invertedSchemeTokens=Tokens[tier][isDark?"light":"dark"][theme],entries=(0,react.useMemo)((()=>{const schemeEntries=(0,cssVariables.Jl)(tokens),invertedSchemeEntries=(0,cssVariables.Jl)(invertedSchemeTokens);return schemeEntries.map((({value,variable},i)=>({value,variable,invertedValue:invertedSchemeEntries[i].value})))}),[tokens,invertedSchemeTokens]),filteredTokens=nameSearchInput?entries.filter((({variable})=>variable.includes(nameSearchInput.toLowerCase().trim()))):entries;return(0,jsx_runtime.jsxs)(Table.X,{rowStyle:"lines",width:"100%",rowSize:"small",children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)(TableRow.H,{children:[(0,jsx_runtime.jsx)(TableHeaderCell.M,{children:"Color"}),(0,jsx_runtime.jsx)(TableHeaderCell.M,{children:"Inverted Color"}),(0,jsx_runtime.jsx)(TableHeaderCell.M,{children:(0,jsx_runtime.jsxs)(Box.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:["Name",(0,jsx_runtime.jsx)(Input.p,{placeholder:"Filter",size:"small",value:nameSearchInput,onChange:e=>setNameSearchInput(e.target.value)})]})})]})}),(0,jsx_runtime.jsx)("tbody",{children:filteredTokens.map((({variable,value,invertedValue})=>{const token=(0,cssVariables.tN)(variable,tier);return(0,jsx_runtime.jsxs)(TableRow.H,{children:[(0,jsx_runtime.jsxs)(CenteredTableCell,{children:[(0,jsx_runtime.jsx)(BlockContainer,{children:(0,jsx_runtime.jsx)(ColorBlock,{token})}),(0,jsx_runtime.jsx)("code",{children:value})]}),(0,jsx_runtime.jsxs)(CenteredTableCell,{children:[(0,jsx_runtime.jsx)(BlockContainer,{children:isDark?(0,jsx_runtime.jsx)(EnforcedColorScheme.a2,{children:(0,jsx_runtime.jsx)(ColorBlock,{token})}):(0,jsx_runtime.jsx)(EnforcedColorScheme.Ak,{children:(0,jsx_runtime.jsx)(ColorBlock,{token})})}),(0,jsx_runtime.jsx)("code",{children:invertedValue})]}),(0,jsx_runtime.jsx)(TableCell.n,{children:(0,jsx_runtime.jsx)("code",{children:variable})})]},variable)}))})]})};CssVariablesTable.displayName="CssVariablesTable";try{CssVariablesTable.displayName="CssVariablesTable",CssVariablesTable.__docgenInfo={description:"",displayName:"CssVariablesTable",props:{tier:{defaultValue:null,description:"",name:"tier",required:!0,type:{name:"enum",value:[{value:'"b"'},{value:'"s"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/essentials/Colors/docs/SemanticColorsTable.tsx#CssVariablesTable"]={docgenInfo:CssVariablesTable.__docgenInfo,name:"CssVariablesTable",path:"src/essentials/Colors/docs/SemanticColorsTable.tsx#CssVariablesTable"})}catch(__react_docgen_typescript_loader_error){}function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",em:"em",h2:"h2",pre:"pre",strong:"strong"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Essentials/Colors",component:Colors.Jy}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"colors",children:"Colors"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Wave has a set of colors that are used throughout the design system. HSL model is used to define colors."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The exact set of colors depend on the theme that is used. Two themes provided as a part of the library:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"classic"})," - the default theme with primary blue color;"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"modern"})," - the redesigned theme with maroon primary color."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Each theme provides a set of CSS variables used to style components. They are divided into two tiers:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.em,{children:"bare colors"})," - matching color names provided by the theme. this tier is theme-specific and changes when the theme changes;"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.em,{children:"semantic colors"})," - color names that convey semantic meaning, e.g. ",(0,jsx_runtime.jsx)(_components.code,{children:"foreground-primary"}),". This tier is theme-agnostic and does not change when the theme changes."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can create you own theme by creating a set of semantic CSS variables with predefined names."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"semantic-colors",children:"Semantic Colors"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Semantic color tokens represent not just a color value but also a semantic role it's used for.\nIn Wave, most color tokens belong to one of three roles: ",(0,jsx_runtime.jsx)(_components.em,{children:"foreground"}),", ",(0,jsx_runtime.jsx)(_components.em,{children:"background"}),", and ",(0,jsx_runtime.jsx)(_components.em,{children:"border"}),".\nBy assigning semantic roles to colors, we achieve predictable theming and dark mode support."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can build your custom components using the semantic color tokens, and they will automatically support theming and dark mode.\nPrefer to use them for your app."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Every color token follows the naming convention:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["design system prefix for semantic colors ",(0,jsx_runtime.jsx)(_components.code,{children:"wave-s"}),";"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["semantic role ",(0,jsx_runtime.jsx)(_components.code,{children:"foreground"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"background-surface"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"background-element"}),", or ",(0,jsx_runtime.jsx)(_components.code,{children:"border"}),";"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["color name ",(0,jsx_runtime.jsx)(_components.code,{children:"primary"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"neutral"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"info"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"accent"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"success"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"warning"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"danger"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"}),";"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["optional modifier ",(0,jsx_runtime.jsx)(_components.code,{children:"default"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"faded"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"highlighted"}),"."]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use ",(0,jsx_runtime.jsx)(_components.code,{children:"getSemanticValue"})," function to reduce boilerplate when using semantic colors in your components:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"const BeautifulParagraph = styled.p`\n    background-color: ${getSemanticValue('background-surface-primary-default')};\n    color: ${getSemanticValue('foreground-on-background-primary')};\n`;\n"})}),"\n",(0,jsx_runtime.jsx)(CssVariablesTable,{tokens:Colors.pi,tier:"s"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"bare-colors",children:"Bare Colors"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Bare color tokens are static and not themeable. They are used to define semantic colors and should not be used directly in your components."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["We provide CSS variables for bare colors as an ",(0,jsx_runtime.jsx)(_components.strong,{children:"escape hatch"})," for cases when you need to use a color that is not covered by semantic colors.\nPlease, report such cases to us, so we can add the missing semantic color."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Bare color tokens aren't accessible via ",(0,jsx_runtime.jsx)(_components.code,{children:"getSemanticValue"})," function. Read the CSS variable directly, they have ",(0,jsx_runtime.jsx)(_components.code,{children:"--wave-b-"})," prefix, followed by the color name:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"const BeautifulParagraph = styled.p`\n    color: var('--wave-b-red-900')};\n`;\n"})}),"\n",(0,jsx_runtime.jsx)(CssVariablesTable,{tokens:Colors.Jy,tier:"b"}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{id:"hsl-variables--hsl",children:["HSL variables (",(0,jsx_runtime.jsx)(_components.code,{children:"-hsl"}),")"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Wave stores HSL color values in semantic tokens. It becomes a challenge to apply opacity to a color, without making the whole component transparent.\nThat's why together with semantic tokens, we expose HSL channels as separate variables. They follow the same convention as semantic tokens, but ends with the ",(0,jsx_runtime.jsx)(_components.code,{children:"-hsl"})," suffix:"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For example, ",(0,jsx_runtime.jsx)(_components.code,{children:"background-surface-primary-default"})," stores ",(0,jsx_runtime.jsx)(_components.code,{children:"hsl(210, 100%, 50%)"}),", but ",(0,jsx_runtime.jsx)(_components.code,{children:"background-surface-primary-default-hsl"})," stores ",(0,jsx_runtime.jsx)(_components.code,{children:"210, 100%, 50%"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use them, when you need an alpha channel:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-ts",children:"const BeautifulParagraph = styled.p`\n    background-color: hsla(${getSemanticValue('background-surface-primary-default-hsl')}, 0.5);\n`;\n"})})]})}const Colors_storybook=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=src-essentials-Colors-docs-Colors-storybook-mdx.b2489a47.iframe.bundle.js.map