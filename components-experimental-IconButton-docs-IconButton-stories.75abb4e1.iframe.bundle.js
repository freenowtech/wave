"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[47662],{"./src/components/experimental/IconButton/docs/IconButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,Default:()=>Default,Disabled:()=>Disabled,Loading:()=>Loading,Tonal:()=>Tonal,TonalActive:()=>TonalActive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IconButton_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./node_modules/react-aria-components/dist/Button.mjs"),cssVariables=__webpack_require__("./src/essentials/experimental/cssVariables.ts"),InlineSpinner=__webpack_require__("./src/components/InlineSpinner/InlineSpinner.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StandardIconContainer=(0,styled_components_browser_esm.Ay)(Button.$)`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
    background-color: transparent;
    border-color: transparent;

    cursor: pointer;

    &[data-disabled],
    &[data-pending] {
        cursor: not-allowed;
    }

    /* we create a before pseudo element to mess with the opacity (see the hovered state) */
    &::before {
        position: absolute;
        content: '';
        border-radius: inherit;
        opacity: 0;
        height: inherit;
        width: inherit;
    }

    /* we want to change the opacity here but not affect the icon, so we have to use the before pseudo element */
    &[data-hovered]::before {
        opacity: 0.16;
        background-color: ${(0,cssVariables.sR)("on-surface")};
    }

    display: flex;
    align-items: center;
    justify-content: center;

    &:not([data-disabled]) {
        color: ${props=>props.isActive?(0,cssVariables.sR)("interactive"):(0,cssVariables.sR)("on-surface")};
    }

    &[data-disabled],
    &[data-pending] {
        opacity: 0.38;
    }
`,TonalIconContainer=(0,styled_components_browser_esm.Ay)(Button.$)`
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 100%;
    border-color: transparent;
    background: none;

    cursor: pointer;

    &[data-disabled],
    &[data-pending] {
        cursor: not-allowed;
    }

    /* we create a before pseudo element to mess with the opacity (see the hovered state) */
    &::before {
        position: absolute;
        content: '';
        border-radius: inherit;
        height: inherit;
        width: inherit;
        background-color: ${props=>props.isActive&&!props.isDisabled?(0,cssVariables.sR)("interactive-container"):(0,cssVariables.sR)("surface")};
        z-index: -1;
    }

    /* we want to change the opacity here but not affect the icon, so we have to use the before pseudo element */
    &[data-hovered]::before {
        background-color: color-mix(
            in hsl,
            ${(0,cssVariables.sR)("on-surface")} 100%,
            ${props=>props.isActive?(0,cssVariables.sR)("interactive-container"):(0,cssVariables.sR)("on-surface")}
                100%
        );
        opacity: 0.16;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    &:not([data-disabled]) {
        color: ${props=>props.isActive?(0,cssVariables.sR)("on-interactive-container"):(0,cssVariables.sR)("on-surface")};
    }

    &[data-disabled],
    &[data-pending] {
        opacity: 0.38;
    }
`,IconButton=({isDisabled=!1,isActive=!1,isLoading=!1,Icon,variant="standard",onPress})=>{const Container="standard"===variant?StandardIconContainer:TonalIconContainer;return(0,jsx_runtime.jsx)(Container,{"data-testid":"standard"===variant?"standard-icon-container":"tonal-icon-container",onPress,isDisabled,isActive,isPending:isLoading,children:isLoading?(0,jsx_runtime.jsx)(InlineSpinner.Z,{"data-testid":"iconbutton-spinner",color:(0,cssVariables.sR)("on-surface")}):(0,jsx_runtime.jsx)(Icon,{"data-testid":"iconbutton-icon"})})};IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"standard"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"tonal"'}]}},Icon:{defaultValue:null,description:"",name:"Icon",required:!0,type:{name:"FC<IconProps>"}},onPress:{defaultValue:null,description:"Handler that is called when the press is released over the target.",name:"onPress",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/experimental/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/experimental/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}const IconButton_stories={title:"Experimental/Components/IconButton",component:IconButton,parameters:{layout:"centered"},args:{Icon:__webpack_require__("./src/icons/actions/TrashIcon.tsx").A,onPress:()=>alert("Clicked!"),isDisabled:!1,isLoading:!1}},Default={},Disabled={args:{isDisabled:!0}},Loading={args:{isLoading:!0}},Active={args:{isActive:!0}},Tonal={args:{variant:"tonal"}},TonalActive={args:{variant:"tonal",isActive:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    isDisabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    isLoading: true\n  }\n}",...Loading.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"{\n  args: {\n    isActive: true\n  }\n}",...Active.parameters?.docs?.source}}},Tonal.parameters={...Tonal.parameters,docs:{...Tonal.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'tonal'\n  }\n}",...Tonal.parameters?.docs?.source}}},TonalActive.parameters={...TonalActive.parameters,docs:{...TonalActive.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'tonal',\n    isActive: true\n  }\n}",...TonalActive.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Loading","Active","Tonal","TonalActive"]},"./src/components/InlineSpinner/InlineSpinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>InlineSpinner});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/cssVariables.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Ox)({prop:"size",variants:{small:{width:"1rem",height:"1rem",borderWidth:"0.1rem"},medium:{width:"1.25rem",height:"1.25rem",borderWidth:"0.125rem"}}}),rotation=styled_components__WEBPACK_IMPORTED_MODULE_3__.i7`
    to {
        transform: rotate(360deg);
    }
`,InlineSpinnerIcon=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.span`
    display: inline-block;
    box-sizing: border-box;
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: text-bottom;
    border: 0.125rem solid ${p=>p.color};
    border-right-color: transparent;
    border-radius: 50%;
    animation: ${rotation} 750ms linear infinite;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_1__.Lc,sizeVariant)}
`,InlineSpinner=({color=(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_4__.sR)("foreground-primary"),size="medium",...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{role:"progressbar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InlineSpinnerIcon,{color,size,...rest})});InlineSpinner.displayName="InlineSpinner";try{InlineSpinner.displayName="InlineSpinner",InlineSpinner.__docgenInfo={description:"",displayName:"InlineSpinner",props:{color:{defaultValue:{value:"getSemanticValue('foreground-primary')"},description:"Override the color of the spinner",name:"color",required:!1,type:{name:"ReadCssColorVariable | (string & {})"}},size:{defaultValue:{value:"medium"},description:"Set the size of the component",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InlineSpinner/InlineSpinner.tsx#InlineSpinner"]={docgenInfo:InlineSpinner.__docgenInfo,name:"InlineSpinner",path:"src/components/InlineSpinner/InlineSpinner.tsx#InlineSpinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/actions/TrashIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TrashIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.J)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M7.074 7l.857 13h8.138l.725-13h2.013l-.743 13.142A2 2 0 0116.069 22H7.93a2 2 0 01-1.995-1.858L5.06 7H4V5h16v2H7.074zM14 2v2h-4V2h4z",fill:"currentColor"})})};TrashIcon.displayName="TrashIcon";const __WEBPACK_DEFAULT_EXPORT__=TrashIcon;try{TrashIcon.displayName="TrashIcon",TrashIcon.__docgenInfo={description:"",displayName:"TrashIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'ReadCssColorVariable | "inherit" | (string & {})'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/TrashIcon.tsx#TrashIcon"]={docgenInfo:TrashIcon.__docgenInfo,name:"TrashIcon",path:"src/icons/actions/TrashIcon.tsx#TrashIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=components-experimental-IconButton-docs-IconButton-stories.75abb4e1.iframe.bundle.js.map