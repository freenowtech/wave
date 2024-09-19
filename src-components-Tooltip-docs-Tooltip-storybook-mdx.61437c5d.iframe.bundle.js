/*! For license information please see src-components-Tooltip-docs-Tooltip-storybook-mdx.61437c5d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[80361,59409],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/Tooltip/docs/Tooltip.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),RadioButton=__webpack_require__("./src/components/RadioButton/RadioButton.tsx"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),Breakpoints=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const TargetSquare=styled_components_browser_esm.Ay.div`
    background: ${(0,cssVariables.sR)("background-surface-info-emphasized")};
    color: ${(0,cssVariables.sR)("foreground-on-background-info")};
    font-size: 0.75rem;
    cursor: default;
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
`,TargetSquareContainer=styled_components_browser_esm.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,ExampleContainer=styled_components_browser_esm.Ay.div`
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 1rem;
    background-color: ${(0,cssVariables.sR)("background-page-default")};
    padding: 1rem;

    ${Breakpoints.H.small} {
        grid-template-columns: 20rem auto;
    }
`,TooltipPlacementExample=()=>{const[placement,setPlacement]=react.useState("top");return react.createElement(ExampleContainer,null,react.createElement("div",null,["top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","top","bottom","right","left","auto","auto-start","auto-end"].map((p=>react.createElement("div",{key:p},react.createElement(RadioButton.a,{name:"tooltip-placement",checked:placement===p,onChange:()=>setPlacement(p),label:react.createElement("code",{style:{fontSize:"1rem"}},p)}),react.createElement("br",null))))),react.createElement(TargetSquareContainer,null,react.createElement(Tooltip.m,{content:"This is a very long explanation for the function",placement},react.createElement(TargetSquare,null,"Hover me!"))))};try{TooltipPlacementExample.displayName="TooltipPlacementExample",TooltipPlacementExample.__docgenInfo={description:"",displayName:"TooltipPlacementExample",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/docs/TooltipPlacementExample.tsx#TooltipPlacementExample"]={docgenInfo:TooltipPlacementExample.__docgenInfo,name:"TooltipPlacementExample",path:"src/components/Tooltip/docs/TooltipPlacementExample.tsx#TooltipPlacementExample"})}catch(__react_docgen_typescript_loader_error){}var Tooltip_stories=__webpack_require__("./src/components/Tooltip/docs/Tooltip.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:Tooltip_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tooltip",children:"Tooltip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This component provides informative text to a UI element."}),"\n",(0,jsx_runtime.jsx)(dist.Tn,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:Tooltip_stories}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use the tooltip for user on-boarding, guiding information about a new feature, detailed interactive workflows or for a contextual help (eg. over a button)."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"appearance",children:"Appearance"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"The font size is 12px and font weight is regular."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Top and bottom padding around the text area is 4px and 8px for right and left."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"The max-width for the tooltip is 300px in desktop and 160px on mobile devices."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"The copy should be instructional and concise. Max 200 characters are allowed."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Emojis are allowed to be used 😇"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"behavior",children:"Behavior"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"The tooltip is accessible on hover or on tap (mobile) and should be automatically dismissed when the user stops hovering\nthe target area (or taps somewhere else on mobile devices)"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"The tooltip should be eased-out."}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Don’ts:"})," don't change the shape of the tooltip (rounded corners, etc), don’t crop it, don’t hide the element it hovers over"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"placement",children:"Placement"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["It is possible to adjust the position of the tooltip connection to the target with the ",(0,jsx_runtime.jsx)(_components.code,{children:"placement"})," prop. Below is a list\nof possible options which are represented in the square next to it. It is important to keep in mind that the tooltip\nwill be moved to a different position if it cannot be shown on the desired side due to screen sizes. Read more about the\nPopper library ",(0,jsx_runtime.jsx)(_components.a,{href:"https://popper.js.org/",rel:"nofollow",children:"here"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsx)(TooltipPlacementExample,{})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"technical-usage",children:"Technical Usage"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For the Tooltip to work properly, it needs to have a single child component to bind the mouse-enter and -leave events to.\nThe library ",(0,jsx_runtime.jsx)(_components.code,{children:"react-popper"})," which is used internally works with setting a ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," to the child. To avoid complications, make\nsure the child component supports the ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," property."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'const CustomComponent = React.forwardRef((props, ref) => (\n    <div {...props}>\n        <button ref={ref}>Hover to show tooltip</button>\n    </div>\n));\n\nconst WithTooltip = () => (\n    <Tooltip content="Information about your feature">\n        <CustomComponent />\n    </Tooltip>\n);\n'})}),"\n",(0,jsx_runtime.jsx)(dist.om,{includePrimary:!1})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/Tooltip/docs/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlwaysVisible:()=>AlwaysVisible,Default:()=>Default,WithCustomPosition:()=>WithCustomPosition,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip",component:__webpack_require__("./src/components/Tooltip/Tooltip.tsx").m,argTypes:{children:{description:"Tooltip target. What must be hovered over to show the tooltip.",control:!1}},args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Hover over me"),content:"This is a regular tooltip 🏓"},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:"100px",display:"flex",alignItems:"center"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},Default={},AlwaysVisible={args:{alwaysVisible:!0}},WithCustomPosition={args:{placement:"bottom-center"}},__namedExportsOrder=["Default","AlwaysVisible","WithCustomPosition"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},AlwaysVisible.parameters={...AlwaysVisible.parameters,docs:{...AlwaysVisible.parameters?.docs,source:{originalSource:"{\n  args: {\n    alwaysVisible: true\n  }\n}",...AlwaysVisible.parameters?.docs?.source}}},WithCustomPosition.parameters={...WithCustomPosition.parameters,docs:{...WithCustomPosition.parameters?.docs,source:{originalSource:"{\n  args: {\n    placement: 'bottom-center'\n  }\n}",...WithCustomPosition.parameters?.docs?.source}}}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/RadioButton/RadioButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>RadioButton});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),extractProps=__webpack_require__("./src/utils/extractProps.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const Checkmark=styled_components_browser_esm.Ay.input`
    appearance: none;
    outline: none;
    border: 0;

    position: relative;

    width: 1rem;
    height: 1rem;
    padding: 0;
    margin: 0 0.5rem 0 0;

    background-color: ${(0,cssVariables.sR)("background-page-default")};
    box-shadow: inset 0 0 0 0.125rem
        ${props=>(0,cssVariables.sR)(props.error?"border-danger-default":"border-neutral-default")};
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
            ${props=>(0,cssVariables.sR)(props.error?"border-danger-default":"border-info-default")};

        &::after {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${(0,cssVariables.sR)("background-element-disabled-faded")};
        box-shadow: inset 0 0 0 0.125rem ${(0,cssVariables.sR)("background-element-disabled-faded")};

        &:hover {
            box-shadow: inset 0 0 0 0.125rem ${(0,cssVariables.sR)("background-element-disabled-faded")};
        }

        &:active {
            background-color: ${(0,cssVariables.sR)("background-element-disabled-faded")};
        }

        &:checked {
            box-shadow: inset 0 0 0 0.3125rem ${(0,cssVariables.sR)("background-element-disabled-faded")};
            background-color: ${(0,cssVariables.sR)("background-page-default")};
        }
    }
`;try{Checkmark.displayName="Checkmark",Checkmark.__docgenInfo={description:"",displayName:"Checkmark",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/components/Checkmark.tsx#Checkmark"]={docgenInfo:Checkmark.__docgenInfo,name:"Checkmark",path:"src/components/RadioButton/components/Checkmark.tsx#Checkmark"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),theme=__webpack_require__("./src/essentials/theme.ts"),themeGet=__webpack_require__("./src/utils/themeGet.ts");const TapArea=styled_components_browser_esm.Ay.div`
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-color: transparent;
    top: -0.375rem;
    left: -0.375rem;
    transition: background-color 125ms;

    &:active {
        background-color: ${(0,cssVariables.sR)("background-element-neutral-emphasized")};
    }
`;try{TapArea.displayName="TapArea",TapArea.__docgenInfo={description:"",displayName:"TapArea",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/components/TapArea.tsx#TapArea"]={docgenInfo:TapArea.__docgenInfo,name:"TapArea",path:"src/components/RadioButton/components/TapArea.tsx#TapArea"})}catch(__react_docgen_typescript_loader_error){}const textVerticalAlignVariant=(0,index_esm.Ox)({prop:"textVerticalAlign",variants:{top:{alignItems:"flex-start"},center:{alignItems:"center"}}}),LabelWrapper=styled_components_browser_esm.Ay.label.attrs({theme:theme.w})`
    display: inline-flex;
    align-items: center;
    position: relative;
    user-select: none;

    color: ${props=>(0,cssVariables.sR)(props.disabled?"foreground-disabled":"foreground-primary")};

    font-family: ${(0,themeGet.J)("fonts.normal")};
    line-height: 1;

    &:hover {
        ${({disabled,error})=>disabled?styled_components_browser_esm.AH`
            cursor: not-allowed;

            & ${TapArea}:active {
                background-color: transparent;
            }
        `:styled_components_browser_esm.AH`
        cursor: pointer;

        & ${TapArea}:not(:active) {
            background-color: ${(0,cssVariables.sR)(error?"background-element-danger-faded":"background-element-info-default")};
        }

        & ${Checkmark}:not(:checked) {
            box-shadow: inset 0 0 0 0.125rem
                ${(0,cssVariables.sR)(error?"border-danger-default":"border-info-default")};
            background-color: ${(0,cssVariables.sR)("background-page-default")};
        }
    `}
    }

    ${(0,index_esm.Zz)(index_esm.Lc,textVerticalAlignVariant)}
`;try{LabelWrapper.displayName="LabelWrapper",LabelWrapper.__docgenInfo={description:"",displayName:"LabelWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},textVerticalAlign:{defaultValue:{value:"center"},description:"Align the label text relatively to the radio button",name:"textVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/components/LabelWrapper.tsx#LabelWrapper"]={docgenInfo:LabelWrapper.__docgenInfo,name:"LabelWrapper",path:"src/components/RadioButton/components/LabelWrapper.tsx#LabelWrapper"})}catch(__react_docgen_typescript_loader_error){}const WithTapAreaWrapper=styled_components_browser_esm.Ay.div`
    width: 1.5rem;
    position: relative;
    display: inline-flex;
    align-items: center;

    ${({textVerticalAlign})=>"top"===textVerticalAlign?"margin-top: 0.1875rem":void 0}
`,RadioButton=({textVerticalAlign="center",...props})=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.Fk)(props),{marginProps,restProps}=(0,extractProps.LI)(withoutClassName),{disabled,error,label,...rest}=restProps;let dynamicLabel=label;return"string"==typeof label&&(dynamicLabel=react.createElement(Text.E,null,label)),react.createElement(LabelWrapper,{disabled,error,textVerticalAlign,...marginProps,...classNameProps},react.createElement(WithTapAreaWrapper,{textVerticalAlign},react.createElement(TapArea,null),react.createElement(Checkmark,{type:"radio",disabled,error,...rest})),dynamicLabel)};try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"Set radio button to render in checked state",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disables the radio button",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Provide a label for the input which will be shown next to the radio button",name:"label",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Add styles to show the radio button has errors",name:"error",required:!1,type:{name:"boolean"}},textVerticalAlign:{defaultValue:{value:"center"},description:"Align the label text relatively to the radio button",name:"textVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"center"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.w})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc,styled_system__WEBPACK_IMPORTED_MODULE_0__.J,styled_system__WEBPACK_IMPORTED_MODULE_0__.Wy,styled_system__WEBPACK_IMPORTED_MODULE_0__.mw,styled_system__WEBPACK_IMPORTED_MODULE_0__.Jh)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"normal" | "bold" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/Elevation/Elevation.ts"),_essentials__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/cssVariables.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/themeGet.ts"),_Text_Text__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/Text/Text.tsx"),_ColorScheme__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/ColorScheme/EnforcedColorScheme.tsx"),_utils_hooks_useClosestColorScheme__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/utils/hooks/useClosestColorScheme.ts");const fadeAnimation=styled_components__WEBPACK_IMPORTED_MODULE_3__.i7`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`,arrowPlacementStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.Ox)({variants:{bottom:{right:"calc(50% - 0.25rem)"},"bottom-end":{right:"0.3rem"},"top-start":{bottom:"-0.5rem",transform:"rotate(-180deg)"},top:{bottom:"-0.5rem",transform:"rotate(-180deg)",right:"calc(50% - 0.25rem)"},"top-end":{bottom:"-0.5rem",transform:"rotate(-180deg)",right:"0.3rem"},left:{top:"calc(50% - 0.25rem)",left:"auto",right:"-0.5rem",transform:"rotate(90deg)"},"left-end":{bottom:"0.5rem",left:"auto",right:"-0.5rem",transform:"rotate(90deg)"},"left-start":{top:"0.5rem",left:"auto",right:"-0.5rem",transform:"rotate(90deg)"},right:{top:"calc(50% - 0.25rem)",left:"-0.25rem",right:"auto",transform:"rotate(-90deg)"},"right-end":{bottom:"0.5rem",left:"-0.25rem",right:"auto",transform:"rotate(-90deg)"},"right-start":{top:"0.5rem",left:"-0.25rem",right:"auto",transform:"rotate(-90deg)"}}}),TooltipBody=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div`
    position: relative;
    z-index: ${_essentials__WEBPACK_IMPORTED_MODULE_4__.e.TOOLTIP};
    background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__.sR)("background-backdrop")};
    color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__.sR)("background-page-default")};
    padding: 0.25rem 0.5rem;
    border-radius: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_6__.J)("radii.2")};
    opacity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 100ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-delay: 400ms;
    max-width: 10rem;

    ${_essentials__WEBPACK_IMPORTED_MODULE_7__.H.small} {
        max-width: 18.75rem;
    }

    &::after {
        bottom: 100%;
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border: 0.25rem solid rgba(0, 0, 0, 0);
        border-bottom-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_5__.sR)("background-backdrop")};
        margin-left: -0.25rem;

        ${arrowPlacementStyles}
    }
`,Tooltip=({content,children,placement="top",alwaysVisible=!1})=>{const[isVisible,setIsVisible]=react__WEBPACK_IMPORTED_MODULE_0__.useState(alwaysVisible),[triggerReference,setTriggerReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0),[contentReference,setContentReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0),{styles,attributes}=(0,react_popper__WEBPACK_IMPORTED_MODULE_8__.E)(triggerReference,contentReference,{placement,modifiers:[{name:"offset",enabled:!0,options:{offset:[0,5]}}]}),enforcedColorScheme=(0,_utils_hooks_useClosestColorScheme__WEBPACK_IMPORTED_MODULE_9__.J)(triggerReference),PortalWrapper=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>enforcedColorScheme?"light"===enforcedColorScheme?_ColorScheme__WEBPACK_IMPORTED_MODULE_10__.a2:_ColorScheme__WEBPACK_IMPORTED_MODULE_10__.Ak:react__WEBPACK_IMPORTED_MODULE_0__.Fragment),[enforcedColorScheme]);let dynamicContent=content;"string"==typeof content&&(dynamicContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text_Text__WEBPACK_IMPORTED_MODULE_11__.E,{as:"p",fontSize:0},content));const handleVisibilityChange=nextState=>{alwaysVisible||setIsVisible(nextState)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{onMouseOver:()=>handleVisibilityChange(!0),onMouseOut:()=>handleVisibilityChange(!1),ref:setTriggerReference}),content&&isVisible&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalWrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(TooltipBody,{ref:setContentReference,style:{...styles.popper},variant:attributes.popper?.["data-popper-placement"],...attributes.popper},dynamicContent)),document.body))};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"The content that will be shown inside the tooltip body",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:'Set the position of where the tooltip is attached to the target, defaults to "top"',name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},alwaysVisible:{defaultValue:{value:"false"},description:"Force the tooltip to always be visible, regardless of user interaction",name:"alwaysVisible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/Elevation/Elevation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Elevation});const Elevation={DIMMING:1e3,CARD_ON_DIMMING:1100,DATEPICKER:1150,SELECT_LIST:1150,SUGGESTIONS_LIST:1150,BANNER:1200,TOOLTIP:1300}},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{Fk:()=>extractClassNameProps,IL:()=>extractWidthProps,LI:()=>extractWrapperMarginProps,hA:()=>extractHeightProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/hooks/useClosestColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>useClosestColorScheme});var react=__webpack_require__("./node_modules/react/index.js");const getColorSchemeFromElement=element=>{if(!element)return;if(element.classList.contains("light-scheme"))return"light";return element.classList.contains("dark-scheme")?"dark":void 0},useClosestColorScheme=element=>{const closestParentWithColorScheme=(0,react.useMemo)((()=>element?.closest(".wave")),[element]),[closestColorScheme,setClosestColorScheme]=(0,react.useState)();(0,react.useEffect)((()=>{const colorScheme=getColorSchemeFromElement(closestParentWithColorScheme);setClosestColorScheme(colorScheme)}),[closestParentWithColorScheme]);return function useMutationObserver(element,callback,options={}){const observer=(0,react.useRef)(null),stop=(0,react.useCallback)((()=>{observer.current&&(observer.current.disconnect(),observer.current=null)}),[]);(0,react.useEffect)((()=>{if(element)return observer.current=new MutationObserver(callback),observer.current?.observe(element,options),stop}),[callback,stop,options,element]),(0,react.useEffect)((()=>stop),[])}(closestParentWithColorScheme,(mutations=>{const changedElement=mutations[mutations.length-1].target;setClosestColorScheme(getColorSchemeFromElement(changedElement))}),{attributes:!0,attributeFilter:["class"]}),closestColorScheme}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=src-components-Tooltip-docs-Tooltip-storybook-mdx.61437c5d.iframe.bundle.js.map