"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[17390],{"./src/components/experimental/TextField/docs/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsTextArea:()=>AsTextArea,Default:()=>Default,Disabled:()=>Disabled,Invalid:()=>Invalid,InvalidWithMessage:()=>InvalidWithMessage,WithActionIcon:()=>WithActionIcon,WithDefaultValue:()=>WithDefaultValue,WithDescription:()=>WithDescription,WithLeadingIcon:()=>WithLeadingIcon,WithMaxLength:()=>WithMaxLength,WithPlaceholder:()=>WithPlaceholder,WithoutActionIcon:()=>WithoutActionIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextField_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),TextField=__webpack_require__("./node_modules/react-aria-components/dist/TextField.mjs"),Text=__webpack_require__("./node_modules/react-aria-components/dist/Text.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeGet=__webpack_require__("./src/utils/experimental/themeGet.ts"),cssVariables=__webpack_require__("./src/essentials/experimental/cssVariables.ts"),Text_Text=__webpack_require__("./src/components/experimental/Text/Text.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),Button=__webpack_require__("./node_modules/react-aria-components/dist/Button.mjs"),XCrossCircleIcon=__webpack_require__("./src/icons/actions/XCrossCircleIcon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=(0,styled_components_browser_esm.Ay)(Button.$)`
    appearance: none;
    background: none;
    border: none;
    display: flex;
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: ${(0,cssVariables.sR)("on-surface-variant")};
`;function ClearButton(props){return(0,jsx_runtime.jsx)(StyledButton,{...props,children:(0,jsx_runtime.jsx)(XCrossCircleIcon.A,{})})}ClearButton.displayName="ClearButton";try{ClearButton.displayName="ClearButton",ClearButton.__docgenInfo={description:"",displayName:"ClearButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/TextField/ClearButton.tsx#ClearButton"]={docgenInfo:ClearButton.__docgenInfo,name:"ClearButton",path:"src/components/experimental/TextField/ClearButton.tsx#ClearButton"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./node_modules/react-aria-components/dist/Label.mjs");const flyingLabelStyles=styled_components_browser_esm.AH`
    top: 0;
    transform: translate3d(0, 0, 0);

    ${Text_Text.U.variants.label2}
`,Label_Label=(0,styled_components_browser_esm.Ay)(Label.J)`
    position: absolute;
    top: 50%;
    color: currentColor;

    ${Text_Text.U.variants.body1}

    transform: translate3d(0, calc(-${Text_Text.U.variants.body1.lineHeight} / 2), 0);
    transform-origin: 0;

    transition: top 200ms ease, font-size 200ms ease, transform 200ms ease;

    ${props=>props.$flying&&flyingLabelStyles}
`;var TextArea=__webpack_require__("./node_modules/react-aria-components/dist/TextArea.mjs"),Input=__webpack_require__("./node_modules/react-aria-components/dist/Input.mjs");const fieldStyles=styled_components_browser_esm.AH`
    border: none;
    background-color: unset;
    outline: none;

    display: block;
    width: 100%;
    padding: 0;

    caret-color: ${(0,cssVariables.sR)("interactive")};
    color: ${(0,cssVariables.sR)("on-surface")};

    ${Text_Text.U.variants.body1}

    &::placeholder {
        color: ${(0,cssVariables.sR)("on-surface-variant")};
    }
`,Field_TextArea=(0,styled_components_browser_esm.Ay)(TextArea.f).attrs({rows:1})`
    ${fieldStyles};

    resize: none;
    min-height: ${Text_Text.U.variants.body1.lineHeight};
`,Field_Input=(0,styled_components_browser_esm.Ay)(Input.p)`
    ${fieldStyles}

    &[type='search'] {
        &::-webkit-search-cancel-button {
            display: none;
        }
    }
`,defaultAriaStrings={clearFieldButton:"Clear field",messageFieldIsCleared:"The field is cleared"},InnerWrapper=styled_components_browser_esm.Ay.div`
    width: 100%;
    padding-top: ${(0,themeGet.J)("space.4")};

    position: relative;
    overflow: hidden;

    ${props=>props.$autoResize&&styled_components_browser_esm.AH`
            display: grid;

            &::after {
                /* Styling should be the same */
                ${Text_Text.U.variants.body1}

                /* Note the weird space! Needed to prevent jumpy behavior */
                content: attr(data-replicated-value) ' ';

                /* This is how textarea text behaves */
                white-space: pre-wrap;

                /* Hidden from view, clicks, and screen readers */
                visibility: hidden;
            }

            &::after,
            ${Field_TextArea} {
                overflow: hidden;

                /* Place on top of each other */
                grid-area: 1 / 1 / 2 / 2;
            }
        `}
`,TopLine=styled_components_browser_esm.Ay.div`
    box-sizing: content-box;
    cursor: text;

    color: ${(0,cssVariables.sR)("on-surface-variant")};
    background-color: ${(0,cssVariables.sR)("surface")};
    border-width: 0.0625rem;
    border-style: solid;
    border-color: ${(0,cssVariables.sR)("outline-variant")};
    border-radius: ${(0,themeGet.J)("radii.4")};

    padding: ${(0,themeGet.J)("space.2")} ${(0,themeGet.J)("space.3")} ${(0,themeGet.J)("space.2")} ${(0,themeGet.J)("space.4")};
    display: flex;
    align-items: start;
    gap: ${(0,themeGet.J)("space.3")};

    /* stylelint-disable selector-type-case, selector-type-no-unknown */
    & > :not(${InnerWrapper}) {
        flex-shrink: 0;
        margin-top: ${(0,themeGet.J)("space.2")};
    }

    &:hover {
        border-color: ${(0,cssVariables.sR)("outline")};
        color: ${(0,cssVariables.sR)("on-surface")};
    }

    &:focus-within {
        color: ${(0,cssVariables.sR)("interactive")};
        outline: ${(0,cssVariables.sR)("interactive")} solid 0.125rem;
        outline-offset: -0.125rem;

        ${Label_Label} {
            ${flyingLabelStyles}
        }
    }
`,BottomLine=styled_components_browser_esm.Ay.footer`
    display: grid;
    grid-template-areas: '. counter';
    justify-content: space-between;
    gap: ${(0,themeGet.J)("space.2")};

    padding: ${(0,themeGet.J)("space.1")} ${(0,themeGet.J)("space.3")} ${(0,themeGet.J)("space.0")};

    color: ${(0,cssVariables.sR)("on-surface-variant")};

    ${Text_Text.U.variants.label2}

    &:empty {
        display: none;
    }
`,Counter=styled_components_browser_esm.Ay.span`
    grid-area: counter;
`,Wrapper=(0,styled_components_browser_esm.Ay)(TextField.A)`
    padding: ${(0,themeGet.J)("space.2")} ${(0,themeGet.J)("space.0")};

    &[data-disabled] {
        opacity: 0.38;

        ${TopLine} {
            pointer-events: none;
        }
    }

    &[data-invalid] {
        ${Label_Label},
        ${BottomLine} {
            color: ${(0,cssVariables.sR)("negative")};
        }

        ${TopLine} {
            border-color: ${(0,cssVariables.sR)("negative")};
        }
    }
`;function TextField_TextField({label,description,errorMessage,placeholder,leadingIcon,actionIcon,multiline=!1,ariaStrings=defaultAriaStrings,...props}){const[text,setText]=react.useState(props.defaultValue||props.value||""),inputRef=react.useRef(null);react.useEffect((()=>{void 0!==props.value&&setText(props.value)}),[props.value]);const handleChange=value=>{setText(value),props.onChange?.(value)},clearField=text.length>0?(0,jsx_runtime.jsx)(ClearButton,{"aria-controls":inputRef.current?.id,"aria-label":ariaStrings.clearFieldButton,onPress:()=>{inputRef.current.value="",handleChange("")}}):(0,jsx_runtime.jsx)(VisuallyHidden.s,{"aria-live":"polite",children:ariaStrings.messageFieldIsCleared});return(0,jsx_runtime.jsxs)(Wrapper,{...props,value:text,onChange:handleChange,children:[(0,jsx_runtime.jsxs)(TopLine,{onClick:()=>inputRef.current?.focus(),children:[leadingIcon,(0,jsx_runtime.jsxs)(InnerWrapper,{$autoResize:multiline,"data-replicated-value":text,children:[(0,jsx_runtime.jsx)(Label_Label,{$flying:Boolean(placeholder||text.length>0),children:label}),multiline?(0,jsx_runtime.jsx)(Field_TextArea,{placeholder,ref:inputRef}):(0,jsx_runtime.jsx)(Field_Input,{placeholder,ref:inputRef})]}),void 0===actionIcon?clearField:actionIcon]}),(0,jsx_runtime.jsxs)(BottomLine,{children:[(description||errorMessage)&&(0,jsx_runtime.jsx)(Text.E,{slot:description?"description":"errorMessage",children:errorMessage||description}),Boolean(props.maxLength)&&(0,jsx_runtime.jsx)(Counter,{children:`${text.length} / ${props.maxLength}`})]})]})}TextField_TextField.displayName="TextField";try{TextField_TextField.displayName="TextField",TextField_TextField.__docgenInfo={description:"",displayName:"TextField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"ReactNode"}},actionIcon:{defaultValue:null,description:"",name:"actionIcon",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},multiline:{defaultValue:{value:"false"},description:"",name:"multiline",required:!1,type:{name:"boolean"}},ariaStrings:{defaultValue:{value:"{\n    clearFieldButton: 'Clear field',\n    messageFieldIsCleared: 'The field is cleared'\n}"},description:"If you project supports multiple languages, it is recommended to pass translated labels to these properties",name:"ariaStrings",required:!1,type:{name:"{ clearFieldButton: string; messageFieldIsCleared: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/TextField/TextField.tsx#TextField"]={docgenInfo:TextField_TextField.__docgenInfo,name:"TextField",path:"src/components/experimental/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}var PersonFilledIcon=__webpack_require__("./src/icons/trip/PersonFilledIcon.tsx"),EyeIcon=__webpack_require__("./src/icons/actions/EyeIcon.tsx"),ClockIcon=__webpack_require__("./src/icons/basic/ClockIcon.tsx");const TextField_stories={title:"Experimental/Components/TextField",component:TextField_TextField,args:{label:"Passenger name"},argTypes:{label:{description:"The label of the text field"},maxLength:{description:"The maximum length of the text field (optional)",control:"number"},isDisabled:{control:"boolean"},isInvalid:{control:"boolean"},type:{control:"select",options:["text","password","search","tel"]}}},Default={},WithPlaceholder={args:{placeholder:"Placeholder"}},WithDefaultValue={args:{defaultValue:"Value"}},WithDescription={args:{description:"Helper text"}},WithMaxLength={args:{maxLength:999}},Disabled={args:{isDisabled:!0}},Invalid={args:{isInvalid:!0}},InvalidWithMessage={args:{isInvalid:!0,errorMessage:"Error text"}},WithLeadingIcon={args:{leadingIcon:(0,jsx_runtime.jsx)(PersonFilledIcon.A,{color:(0,cssVariables.sR)("on-surface-variant")})}},WithActionIcon={args:{label:"Password",type:"password",actionIcon:(0,jsx_runtime.jsx)(EyeIcon.A,{color:(0,cssVariables.sR)("on-surface-variant"),onClick:(0,dist.XI)("Show password")})}},WithoutActionIcon={args:{label:"Time",leadingIcon:(0,jsx_runtime.jsx)(ClockIcon.A,{}),actionIcon:null}},AsTextArea={args:{multiline:!0,label:"Leave us a comment"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'Placeholder'\n  }\n}",...WithPlaceholder.parameters?.docs?.source}}},WithDefaultValue.parameters={...WithDefaultValue.parameters,docs:{...WithDefaultValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultValue: 'Value'\n  }\n}",...WithDefaultValue.parameters?.docs?.source}}},WithDescription.parameters={...WithDescription.parameters,docs:{...WithDescription.parameters?.docs,source:{originalSource:"{\n  args: {\n    description: 'Helper text'\n  }\n}",...WithDescription.parameters?.docs?.source}}},WithMaxLength.parameters={...WithMaxLength.parameters,docs:{...WithMaxLength.parameters?.docs,source:{originalSource:"{\n  args: {\n    maxLength: 999\n  }\n}",...WithMaxLength.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    isDisabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Invalid.parameters={...Invalid.parameters,docs:{...Invalid.parameters?.docs,source:{originalSource:"{\n  args: {\n    isInvalid: true\n  }\n}",...Invalid.parameters?.docs?.source}}},InvalidWithMessage.parameters={...InvalidWithMessage.parameters,docs:{...InvalidWithMessage.parameters?.docs,source:{originalSource:"{\n  args: {\n    isInvalid: true,\n    errorMessage: 'Error text'\n  }\n}",...InvalidWithMessage.parameters?.docs?.source}}},WithLeadingIcon.parameters={...WithLeadingIcon.parameters,docs:{...WithLeadingIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    leadingIcon: <PersonFilledIcon color={getSemanticValue('on-surface-variant')} />\n  }\n}",...WithLeadingIcon.parameters?.docs?.source}}},WithActionIcon.parameters={...WithActionIcon.parameters,docs:{...WithActionIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Password',\n    type: 'password',\n    actionIcon: <EyeIcon color={getSemanticValue('on-surface-variant')} onClick={action('Show password')} />\n  }\n}",...WithActionIcon.parameters?.docs?.source}}},WithoutActionIcon.parameters={...WithoutActionIcon.parameters,docs:{...WithoutActionIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Time',\n    leadingIcon: <ClockIcon />,\n    // eslint-disable-next-line unicorn/no-null\n    actionIcon: null\n  }\n}",...WithoutActionIcon.parameters?.docs?.source}}},AsTextArea.parameters={...AsTextArea.parameters,docs:{...AsTextArea.parameters?.docs,source:{originalSource:"{\n  args: {\n    multiline: true,\n    label: 'Leave us a comment'\n  }\n}",...AsTextArea.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithPlaceholder","WithDefaultValue","WithDescription","WithMaxLength","Disabled","Invalid","InvalidWithMessage","WithLeadingIcon","WithActionIcon","WithoutActionIcon","AsTextArea"]},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>VisuallyHidden});const VisuallyHidden=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px; /* stylelint-disable-line unit-whitelist */
    width: 1px; /* stylelint-disable-line unit-whitelist */
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/experimental/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text,U:()=>textStyles});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/essentials/experimental/theme.ts");const textStyles={variants:{display:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[4],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.bold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[4],fontStretch:"50%"},headline:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[3],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.bold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[3],fontStretch:"50%"},title1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[2],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.semibold,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[2]},title2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.medium,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},body1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},body2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[0],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[0]},label1:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[1],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.medium,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[1]},label2:{fontFamily:"inherit",fontSize:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontSizes[0],fontWeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.fontWeights.normal,lineHeight:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w.lineHeights[0]}}},variantStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)(textStyles),Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.attrs({theme:_essentials_experimental__WEBPACK_IMPORTED_MODULE_1__.w})`
    color: inherit;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc,variantStyles,styled_system__WEBPACK_IMPORTED_MODULE_0__.mw,styled_system__WEBPACK_IMPORTED_MODULE_0__.Jh)}
`;Text.defaultProps={variant:"body1"};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},variant:{defaultValue:{value:"body1"},description:"",name:"variant",required:!1,type:{name:'ResponsiveValue<"display" | "headline" | "title1" | "title2" | "body1" | "body2" | "label1" | "label2", Required<Theme<TLengthStyledSystem>>>'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/experimental/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/experimental/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>theme});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts");const theme={breakpoints:_index__WEBPACK_IMPORTED_MODULE_0__.R,fontSizes:["0.875rem","1rem","1.25rem","1.75rem","3rem"],fontWeights:{normal:400,medium:500,semibold:600,bold:700},fonts:{normal:fontStack(["Roboto Flex","sans-serif"]),monospace:fontStack(["Hack","monospace"])},mediaQueries:_index__WEBPACK_IMPORTED_MODULE_0__.H,space:["0","0.25rem","0.5rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem","3rem"],radii:["0rem","0.125rem","0.25rem","0.5rem","0.75rem"],iconSizes:{small:12,medium:24,large:28},shadows:{small:"0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)",medium:"0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)",large:"0 0 0.75rem 0.25rem rgba(0,0,0,0.12)"},lineHeights:["1.25rem","1.5rem","1.75rem","2.25rem","3.625rem"]};function fontStack(fonts){return fonts.map((font=>font.includes(" ")?`"${font}"`:font)).join(", ")}theme.fontSizes.small=theme.fontSizes[1],theme.fontSizes.medium=theme.fontSizes[2],theme.fontSizes.large="1.125rem"},"./src/icons/actions/EyeIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const EyeIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 4c5.035 0 9.28 3.383 10.586 8-1.307 4.618-5.551 8-10.586 8s-9.28-3.383-10.586-8C2.721 7.382 6.965 4 12 4zm0 2a9.006 9.006 0 00-8.406 5.775L3.511 12l.083.226a9.007 9.007 0 008.13 5.77L12 18a9.006 9.006 0 008.406-5.775l.082-.226-.082-.224a9.007 9.007 0 00-8.13-5.77L12 6zm0 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z",fill:"currentColor"})})};EyeIcon.displayName="EyeIcon";const __WEBPACK_DEFAULT_EXPORT__=EyeIcon;try{EyeIcon.displayName="EyeIcon",EyeIcon.__docgenInfo={description:"",displayName:"EyeIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'"inherit" | (string & {}) | ReadCssColorVariable'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/EyeIcon.tsx#EyeIcon"]={docgenInfo:EyeIcon.__docgenInfo,name:"EyeIcon",path:"src/icons/actions/EyeIcon.tsx#EyeIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/actions/XCrossCircleIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const XCrossCircleIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm2.364 4l1.414 1.414-2.475 2.475 2.475 2.475-1.414 1.414-2.475-2.475-2.475 2.475L8 14.364l2.474-2.475L8 9.414 9.414 8l2.475 2.474L14.364 8z",fill:"currentColor"})})};XCrossCircleIcon.displayName="XCrossCircleIcon";const __WEBPACK_DEFAULT_EXPORT__=XCrossCircleIcon;try{XCrossCircleIcon.displayName="XCrossCircleIcon",XCrossCircleIcon.__docgenInfo={description:"",displayName:"XCrossCircleIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'"inherit" | (string & {}) | ReadCssColorVariable'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/XCrossCircleIcon.tsx#XCrossCircleIcon"]={docgenInfo:XCrossCircleIcon.__docgenInfo,name:"XCrossCircleIcon",path:"src/icons/actions/XCrossCircleIcon.tsx#XCrossCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/basic/ClockIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClockIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,xmlns:"http://www.w3.org/2000/svg",width:sizePx,height:sizePx,fill:"none",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.657 17.657A8 8 0 116.343 6.342a8 8 0 0111.314 11.315zM15.827 2.76A10 10 0 002 12c0 5.5 4.47 10 10 10a10 10 0 003.827-19.239zM11 13V7h2v4.845l4.388 2.534-1 1.732L11 13z",clipRule:"evenodd"})})};ClockIcon.displayName="ClockIcon";const __WEBPACK_DEFAULT_EXPORT__=ClockIcon;try{ClockIcon.displayName="ClockIcon",ClockIcon.__docgenInfo={description:"",displayName:"ClockIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'"inherit" | (string & {}) | ReadCssColorVariable'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/basic/ClockIcon.tsx#ClockIcon"]={docgenInfo:ClockIcon.__docgenInfo,name:"ClockIcon",path:"src/icons/basic/ClockIcon.tsx#ClockIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/trip/PersonFilledIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PersonFilledIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M15 11a4 4 0 014 4v7H5v-7a4 4 0 014-4h6zm-3.025-9c2.196 0 3.975 1.79 3.975 4s-1.78 4-3.975 4C9.78 10 8 8.21 8 6s1.78-4 3.975-4z",fill:"currentColor"})})};PersonFilledIcon.displayName="PersonFilledIcon";const __WEBPACK_DEFAULT_EXPORT__=PersonFilledIcon;try{PersonFilledIcon.displayName="PersonFilledIcon",PersonFilledIcon.__docgenInfo={description:"",displayName:"PersonFilledIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'"inherit" | (string & {}) | ReadCssColorVariable'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/trip/PersonFilledIcon.tsx#PersonFilledIcon"]={docgenInfo:PersonFilledIcon.__docgenInfo,name:"PersonFilledIcon",path:"src/icons/trip/PersonFilledIcon.tsx#PersonFilledIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/experimental/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_experimental_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/experimental/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_experimental_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=components-experimental-TextField-docs-TextField-stories.4d4e86fc.iframe.bundle.js.map