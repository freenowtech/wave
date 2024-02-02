"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[84242,13761],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/RadioButton/docs/RadioButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,WithError:()=>WithError,WithLabel:()=>WithLabel,WithVerticalAlignment:()=>WithVerticalAlignment,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Form Elements/RadioButton",component:__webpack_require__("./src/components/RadioButton/RadioButton.tsx").E,argTypes:{textVerticalAlign:{options:["top","center"],defaultValue:"center",control:"radio"}},args:{label:"First Name"}},Default={args:{label:void 0}},WithLabel={args:{}},Checked={args:{checked:!0}},WithError={args:{error:!0}},Disabled={args:{disabled:!0}},WithVerticalAlignment={args:{label:"By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. The author accepts no liability whatsoever in respect of the current relevance, accuracy, completeness or quality of the information on this website. The author accepts no liability whatsoever with respect to either material or immaterial losses incurred as a result of the use or non-use of the information presented here or the use of inaccurate or incomplete information unless the author is demonstrably guilty of acts of wilful or gross negligence. All services offered are subject to change and are without obligation. The author specifically reserves the right to change, amplify or delete parts of the pages or the whole of the services offered without prior notification or to cease publication, either temporarily or definitively.",textVerticalAlign:"top"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: undefined\n  }\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...WithLabel.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true\n  }\n}",...Checked.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    error: true\n  }\n}",...WithError.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},WithVerticalAlignment.parameters={...WithVerticalAlignment.parameters,docs:{...WithVerticalAlignment.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. The author accepts no liability whatsoever in respect of the current relevance, accuracy, completeness or quality of the information on this website. The author accepts no liability whatsoever with respect to either material or immaterial losses incurred as a result of the use or non-use of the information presented here or the use of inaccurate or incomplete information unless the author is demonstrably guilty of acts of wilful or gross negligence. All services offered are subject to change and are without obligation. The author specifically reserves the right to change, amplify or delete parts of the pages or the whole of the services offered without prior notification or to cease publication, either temporarily or definitively.',\n    textVerticalAlign: 'top'\n  }\n}",...WithVerticalAlignment.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","Checked","WithError","Disabled","WithVerticalAlignment"]},"./src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/cssVariables.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts");const Link=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.a.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r})`
    display: inline-block;
    color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.wp)("foreground-accent-default")};
    cursor: pointer;
    line-height: 1.4;
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fonts.normal")};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fontSizes.2")};
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fontWeights.semibold")};
    text-decoration: none;

    &:link,
    &:visited {
        color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.wp)("foreground-accent-default")};
    }

    &:hover,
    &:active {
        color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__.wp)("foreground-accent-emphasized")};
        text-decoration: underline;
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RadioButton/RadioButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioButton});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const Checkmark=styled_components_browser_esm.ZP.input`
    appearance: none;
    outline: none;
    border: 0;

    position: relative;

    width: 1rem;
    height: 1rem;
    padding: 0;
    margin: 0 0.5rem 0 0;

    background-color: ${(0,cssVariables.wp)("background-page-default")};
    box-shadow: inset 0 0 0 0.125rem
        ${props=>(0,cssVariables.wp)(props.error?"border-danger-default":"border-neutral-default")};
    border-radius: 50%;
    transition: background-color 100ms, box-shadow 100ms;
    cursor: pointer;

    vertical-align: text-bottom;

    &::after {
        content: ' ';

        width: 1rem;
        height: 1rem;

        position: absolute;

        opacity: 0;
        visibility: hidden;
        transform: scale(0.2);
        transition: visibility 175ms, opacity 150ms, scale 175ms;
    }

    &:checked {
        box-shadow: inset 0 0 0 0.3125rem
            ${props=>(0,cssVariables.wp)(props.error?"border-danger-default":"border-info-default")};

        &::after {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${(0,cssVariables.wp)("background-element-disabled-faded")};
        box-shadow: inset 0 0 0 0.125rem ${(0,cssVariables.wp)("background-element-disabled-faded")};

        &:hover {
            box-shadow: inset 0 0 0 0.125rem ${(0,cssVariables.wp)("background-element-disabled-faded")};
        }

        &:active {
            background-color: ${(0,cssVariables.wp)("background-element-disabled-faded")};
        }

        &:checked {
            box-shadow: inset 0 0 0 0.3125rem ${(0,cssVariables.wp)("background-element-disabled-faded")};
            background-color: ${(0,cssVariables.wp)("background-page-default")};
        }
    }
`;try{Checkmark.displayName="Checkmark",Checkmark.__docgenInfo={description:"",displayName:"Checkmark",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/components/Checkmark.tsx#Checkmark"]={docgenInfo:Checkmark.__docgenInfo,name:"Checkmark",path:"src/components/RadioButton/components/Checkmark.tsx#Checkmark"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("./src/essentials/theme.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts");const TapArea=styled_components_browser_esm.ZP.div`
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-color: transparent;
    top: -0.375rem;
    left: -0.375rem;
    transition: background-color 125ms;

    &:active {
        background-color: ${(0,cssVariables.wp)("background-element-neutral-emphasized")};
    }
`;try{TapArea.displayName="TapArea",TapArea.__docgenInfo={description:"",displayName:"TapArea",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/components/TapArea.tsx#TapArea"]={docgenInfo:TapArea.__docgenInfo,name:"TapArea",path:"src/components/RadioButton/components/TapArea.tsx#TapArea"})}catch(__react_docgen_typescript_loader_error){}const textVerticalAlignVariant=(0,index_esm.bU)({prop:"textVerticalAlign",variants:{top:{alignItems:"flex-start"},center:{alignItems:"center"}}}),LabelWrapper=styled_components_browser_esm.ZP.label.attrs({theme:theme.r})`
    display: inline-flex;
    align-items: center;
    position: relative;
    user-select: none;

    color: ${props=>(0,cssVariables.wp)(props.disabled?"foreground-disabled":"foreground-primary")};

    font-family: ${(0,themeGet.U)("fonts.normal")};
    line-height: 1;

    &:hover {
        ${({disabled,error})=>disabled?styled_components_browser_esm.iv`
            cursor: not-allowed;

            & ${TapArea}:active {
                background-color: transparent;
            }
        `:styled_components_browser_esm.iv`
        cursor: pointer;

        & ${TapArea}:not(:active) {
            background-color: ${(0,cssVariables.wp)(error?"background-element-danger-faded":"background-element-info-default")};
        }

        & ${Checkmark}:not(:checked) {
            box-shadow: inset 0 0 0 0.125rem
                ${(0,cssVariables.wp)(error?"border-danger-default":"border-info-default")};
            background-color: ${(0,cssVariables.wp)("background-page-default")};
        }
    `}
    }

    ${(0,index_esm.qC)(index_esm.e6,textVerticalAlignVariant)}
`;try{LabelWrapper.displayName="LabelWrapper",LabelWrapper.__docgenInfo={description:"",displayName:"LabelWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},textVerticalAlign:{defaultValue:{value:"center"},description:"Align the label text relatively to the radio button",name:"textVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/components/LabelWrapper.tsx#LabelWrapper"]={docgenInfo:LabelWrapper.__docgenInfo,name:"LabelWrapper",path:"src/components/RadioButton/components/LabelWrapper.tsx#LabelWrapper"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const WithTapAreaWrapper=styled_components_browser_esm.ZP.div`
    width: 1.5rem;
    position: relative;
    display: inline-flex;
    align-items: center;

    ${({textVerticalAlign})=>"top"===textVerticalAlign?"margin-top: 0.1875rem":void 0}
`,RadioButton=({textVerticalAlign="center",...props})=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.BY)(props),{marginProps,restProps}=(0,extractProps.c2)(withoutClassName),{disabled,error,label,...rest}=restProps;let dynamicLabel=label;return"string"==typeof label&&(dynamicLabel=(0,jsx_runtime.jsx)(Text.x,{children:label})),(0,jsx_runtime.jsxs)(LabelWrapper,{disabled,error,textVerticalAlign,...marginProps,...classNameProps,children:[(0,jsx_runtime.jsxs)(WithTapAreaWrapper,{textVerticalAlign,children:[(0,jsx_runtime.jsx)(TapArea,{}),(0,jsx_runtime.jsx)(Checkmark,{type:"radio",disabled,error,...rest})]}),dynamicLabel]})};RadioButton.displayName="RadioButton";try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"Set radio button to render in checked state",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disables the radio button",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Provide a label for the input which will be shown next to the radio button",name:"label",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Add styles to show the radio button has errors",name:"error",required:!1,type:{name:"boolean"}},textVerticalAlign:{defaultValue:{value:"center"},description:"Align the label text relatively to the radio button",name:"textVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.r})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ue,styled_system__WEBPACK_IMPORTED_MODULE_0__.I8,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/docs/StyledSystemLinks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>StyledSystemLinks});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Link/Link.tsx"),_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const mapping={margin:"space",width:"layout",height:"layout",borderradius:"border"},StyledSystemLinks=({component,supportedProps,...rest})=>{const supportedPropsTextParts=supportedProps.map((element=>(prop=>{const lowercaseProp=prop.toLowerCase(),anchor=mapping[lowercaseProp]?mapping[lowercaseProp]:lowercaseProp;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.r,{href:`https://styled-system.com/table/#${anchor}`,target:"_blank",rel:"noreferrer noopener",children:prop})})(element))).reduce(((acc,prop,index)=>{if(acc.push(prop),index!==supportedProps.length-1){const join=index===supportedProps.length-2?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:" and "}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:", "});acc.push(join)}return acc}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__.x,{...rest,as:"p",children:["The ",component," supports"," ",supportedPropsTextParts.map(((c,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:c},index)))," ","styled-system props."]})};StyledSystemLinks.displayName="StyledSystemLinks";try{StyledSystemLinks.displayName="StyledSystemLinks",StyledSystemLinks.__docgenInfo={description:"",displayName:"StyledSystemLinks",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"string"}},supportedProps:{defaultValue:null,description:"",name:"supportedProps",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/docs/StyledSystemLinks.tsx#StyledSystemLinks"]={docgenInfo:StyledSystemLinks.__docgenInfo,name:"StyledSystemLinks",path:"src/docs/StyledSystemLinks.tsx#StyledSystemLinks"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{BY:()=>extractClassNameProps,Jy:()=>extractWidthProps,Qb:()=>extractHeightProps,c2:()=>extractWrapperMarginProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./src/components/RadioButton/docs/RadioButton.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/docs/StyledSystemLinks.tsx"),_RadioButton_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/RadioButton/docs/RadioButton.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2"},(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_RadioButton_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"radiobutton",children:"RadioButton"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use radio buttons when you have a few options that a user can choose from. Never use radio buttons if the user can\nselect more than one option from a list (consider using a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/components/Checkbox",children:"Checkbox"})," instead)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can provide the label as either a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"})," or as a react component. If a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"})," is provided as the label, it\nwill be wrapped with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/components/text",children:"Text"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_RadioButton_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__.h,{component:"RadioButton",supportedProps:["margin"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{includePrimary:!1})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=src-components-RadioButton-docs-RadioButton-storybook-mdx.562c57de.iframe.bundle.js.map