"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[13537,24269],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Headline/docs/Headline.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Responsive:()=>Responsive,WithAnotherLevel:()=>WithAnotherLevel,WithAnotherSize:()=>WithAnotherSize,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Headline__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Headline/Headline.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Headline",component:_Headline__WEBPACK_IMPORTED_MODULE_0__.$,args:{children:"The dos and don'ts of eating sushi"},argTypes:{size:{table:{defaultValue:{summary:"depends on the heading level",detail:Object.entries(_Headline__WEBPACK_IMPORTED_MODULE_0__.v).map((([tag,size])=>`${tag} → ${size}`)).join("\n")}},control:"select",options:["xxl","xl","l","m","s","xs"]}}},Default={},WithAnotherLevel={args:{as:"h3"}},WithAnotherSize={args:{size:"s"}},Responsive={args:{children:"Change the viewport size",size:["s","xl"]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithAnotherLevel.parameters={...WithAnotherLevel.parameters,docs:{...WithAnotherLevel.parameters?.docs,source:{originalSource:"{\n  args: {\n    as: 'h3'\n  }\n}",...WithAnotherLevel.parameters?.docs?.source}}},WithAnotherSize.parameters={...WithAnotherSize.parameters,docs:{...WithAnotherSize.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 's'\n  }\n}",...WithAnotherSize.parameters?.docs?.source}}},Responsive.parameters={...Responsive.parameters,docs:{...Responsive.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Change the viewport size',\n    size: ['s', 'xl']\n  }\n}",...Responsive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithAnotherLevel","WithAnotherSize","Responsive"]},"./src/components/Headline/Headline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Headline,v:()=>DEFAULT_HEADLINE_SIZE});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/themeGet.ts");const DEFAULT_HEADLINE_SIZE={h1:"xxl",h2:"xl",h3:"l",h4:"m",h5:"s",h6:"xs"},parser=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qU)({fontSize:{property:"fontSize",defaultScale:{xs:"0.75rem",s:"0.875rem",m:"1rem",l:"1.5rem",xl:"2rem",xxl:"3rem"}},lh:{property:"lineHeight",defaultScale:{xs:"1.125rem",s:"1.25rem",m:"1.375rem",l:"2rem",xl:"2.5rem",xxl:"3.75rem"}}}),getSize=({as="h1",size})=>size||DEFAULT_HEADLINE_SIZE[as],Headline=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.h1.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w})`
    color: inherit;
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.J)("fonts.normal")};
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_3__.J)("fontWeights.bold")};
    margin: 0;

    ${props=>parser({fontSize:getSize(props),lh:getSize(props),...props})}
    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc,styled_system__WEBPACK_IMPORTED_MODULE_0__.Jh)}
`;try{Headline.displayName="Headline",Headline.__docgenInfo={description:"",displayName:"Headline",props:{as:{defaultValue:{value:"h1"},description:"Set the html tag for the headline including the appropriate styles",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},size:{defaultValue:null,description:"Set the style of the headline",name:"size",required:!1,type:{name:'ResponsiveValue<"m" | "s" | "xxl" | "xl" | "l" | "xs", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Headline/Headline.tsx#Headline"]={docgenInfo:Headline.__docgenInfo,name:"Headline",path:"src/components/Headline/Headline.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/cssVariables.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts");const Link=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.a.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w})`
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
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"normal" | "bold" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/docs/StyledSystemLinks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>StyledSystemLinks});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Link/Link.tsx"),_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const mapping={margin:"space",width:"layout",height:"layout",borderradius:"border"},StyledSystemLinks=({component,supportedProps,...rest})=>{const supportedPropsTextParts=supportedProps.map((element=>(prop=>{const lowercaseProp=prop.toLowerCase(),anchor=mapping[lowercaseProp]?mapping[lowercaseProp]:lowercaseProp;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.N,{href:`https://styled-system.com/table/#${anchor}`,target:"_blank",rel:"noreferrer noopener",children:prop})})(element))).reduce(((acc,prop,index)=>{if(acc.push(prop),index!==supportedProps.length-1){const join=index===supportedProps.length-2?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:" and "}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:", "});acc.push(join)}return acc}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__.E,{...rest,as:"p",children:["The ",component," supports"," ",supportedPropsTextParts.map(((c,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:c},index)))," ","styled-system props."]})};StyledSystemLinks.displayName="StyledSystemLinks";try{StyledSystemLinks.displayName="StyledSystemLinks",StyledSystemLinks.__docgenInfo={description:"",displayName:"StyledSystemLinks",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"string"}},supportedProps:{defaultValue:null,description:"",name:"supportedProps",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/docs/StyledSystemLinks.tsx#StyledSystemLinks"]={docgenInfo:StyledSystemLinks.__docgenInfo,name:"StyledSystemLinks",path:"src/docs/StyledSystemLinks.tsx#StyledSystemLinks"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))},"./src/components/Headline/docs/Headline.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Headline_storybook});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),Spaces=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const ItemWrapper=styled_components_browser_esm.Ay.div`
    align-items: end;
    padding: ${Spaces.om[2]} ${Spaces.om[4]};
    margin-left: -${Spaces.om[4]};
    margin-right: -${Spaces.om[4]};
    display: grid;
    grid-template-columns: ${p=>p.gridTemplate?p.gridTemplate:"1fr"};
    grid-row-gap: ${Spaces.om[3]};
    grid-column-gap: ${Spaces.om[2]};
    background-color: ${(0,cssVariables.sR)("background-page-default")};

    ${(0,index_esm.Zz)(index_esm.Ms,index_esm.Lc)}
`;var StyledSystemLinks=__webpack_require__("./src/docs/StyledSystemLinks.tsx"),Headline=__webpack_require__("./src/components/Headline/Headline.tsx"),Headline_stories=__webpack_require__("./src/components/Headline/docs/Headline.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",ul:"ul",li:"li",h2:"h2",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:Headline_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"headline",children:"Headline"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The Headline component will render an html ",(0,jsx_runtime.jsx)(_components.code,{children:"h1-6"})," tag. Please reference the\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/headings/",target:"_blank",rel:"nofollow noopener noreferrer",children:"w3 recommendations for headings"})," to ensure your headings\nprovide an accessible experience for screen reader users."]}),"\n",(0,jsx_runtime.jsx)(dist.Tn,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Prefer to use headlines starting from level one and not skip levels. Use combination of ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," property to keep\nthe semantics while following the design."]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use different headlines and paragraphs to structure your content hierarchically"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Avoid using headline lengths, breaking more than two times (three times on mobile)"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Avoid using sizes outside the given range"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Recommended width of headline is between 500px and 700px"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:Headline_stories}),"\n",(0,jsx_runtime.jsx)(StyledSystemLinks.s,{component:"Headline",supportedProps:["margin","textAlign"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"default-headlines",children:"Default headlines"}),"\n",(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(ItemWrapper,{children:[(0,jsx_runtime.jsx)(Headline.$,{as:"h1",children:"headline h1"}),(0,jsx_runtime.jsx)(Headline.$,{as:"h2",children:"headline h2"}),(0,jsx_runtime.jsx)(Headline.$,{as:"h3",children:"headline h3"}),(0,jsx_runtime.jsx)(Headline.$,{as:"h4",children:"headline h4"}),(0,jsx_runtime.jsx)(Headline.$,{as:"h5",children:"headline h5"}),(0,jsx_runtime.jsx)(Headline.$,{as:"h6",children:"headline h6"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"responsive-size",children:"Responsive size"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," property supports ",(0,jsx_runtime.jsx)(_components.a,{href:"https://styled-system.com/responsive-styles/",target:"_blank",rel:"nofollow noopener noreferrer",children:"responsive values"}),". Pass an array or an object\nand the design system use corresponding values for different viewport sizes."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For example, the following snippet uses ",(0,jsx_runtime.jsx)(_components.code,{children:"s"})," size for mobile and ",(0,jsx_runtime.jsx)(_components.code,{children:"xl"})," size bigger screens:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Headline as=\"h2\" size={{ _: 's', medium: 'xl' }}>\n    Small on mobile, big on bigger screens\n</Headline>\n"})}),"\n",(0,jsx_runtime.jsx)(dist.om,{includePrimary:!1})]})}const Headline_storybook=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=src-components-Headline-docs-Headline-storybook-mdx.f92d68c5.iframe.bundle.js.map