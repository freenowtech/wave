"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[15585],{"./src/components/Offcanvas/docs/Offcanvas.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FromRightSide:()=>FromRightSide,WithoutAutomaticDismiss:()=>WithoutAutomaticDismiss,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Offcanvas_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),useIsEscKeyPressed=__webpack_require__("./src/utils/hooks/useIsEscKeyPressed.ts"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),Elevation=__webpack_require__("./src/essentials/Elevation/Elevation.ts"),Card=__webpack_require__("./src/components/Card/Card.tsx");const TRANSITION_KEY="centered-card-animation",inFrom={top:styled_components_browser_esm.AH`
        &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
            opacity: 0;
            transform: translate(0%, calc(-50% - 1rem));
        }

        &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${TRANSITION_KEY}-exit {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
            opacity: 0;
            transform: translate(-0%, -50%);
        }
    `,bottom:styled_components_browser_esm.AH`
        &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
            opacity: 0;
            transform: translate(0%, calc(50% + 1rem));
        }

        &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${TRANSITION_KEY}-exit {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
            opacity: 0;
            transform: translate(0%, 10%);
        }
    `},position={top:styled_components_browser_esm.AH`
        left: 0;
        right: 0;
        top: 0;
        bottom: unset;
    `,bottom:styled_components_browser_esm.AH`
        left: 0;
        right: 0;
        top: unset;
        bottom: 0;
    `},StyledCard=(0,styled_components_browser_esm.Ay)(Card.Z)`
    position: fixed;

    left: ${p=>"right"===p.side?"unset":0};
    right: ${p=>"right"===p.side?0:"unset"};
    transform: translate(0%, 0%);
    z-index: ${Elevation.e.CARD_ON_DIMMING};
    width: 100%;
    will-change: transform, opacity;
    transition: transform ${150}ms ease-out, opacity ${150}ms ease-out;

    ${p=>inFrom[p.side]};
    ${p=>position[p.side]};

    @media (max-width: calc(${p=>p.width} + 2rem)) {
        width: calc(100% - 2rem);
    }
`,CenteredCard=({visible,height="28.375rem",...rest})=>react.createElement(CSSTransition.A,{in:visible,classNames:TRANSITION_KEY,timeout:150,unmountOnExit:!0,appear:!0},react.createElement(StyledCard,{...rest,height,level:300}));try{CenteredCard.displayName="CenteredCard",CenteredCard.__docgenInfo={description:"",displayName:"CenteredCard",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"string"}},level:{defaultValue:{value:"0"},description:"Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)",name:"level",required:!1,type:{name:"ResponsiveValue<0 | 100 | 200 | 300, Required<Theme<TLengthStyledSystem>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/CenteredCard.tsx#CenteredCard"]={docgenInfo:CenteredCard.__docgenInfo,name:"CenteredCard",path:"src/components/Offcanvas/components/CenteredCard.tsx#CenteredCard"})}catch(__react_docgen_typescript_loader_error){}const SideCard_inFrom={right:styled_components_browser_esm.AH`
        &.${"centered-card-animation"}-appear, &.${"centered-card-animation"}-enter {
            opacity: 0;
            transform: translate(calc(50% + 1rem), 0%);
        }

        &.${"centered-card-animation"}-appear-active, &.${"centered-card-animation"}-enter-active {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${"centered-card-animation"}-exit {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${"centered-card-animation"}-exit-done, &.${"centered-card-animation"}-exit-active {
            opacity: 0;
            transform: translate(+10%, 0%);
        }
    `,left:styled_components_browser_esm.AH`
        &.${"centered-card-animation"}-appear, &.${"centered-card-animation"}-enter {
            opacity: 0;
            transform: translate(calc(-50% - 1rem), 0%);
        }

        &.${"centered-card-animation"}-appear-active, &.${"centered-card-animation"}-enter-active {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${"centered-card-animation"}-exit {
            opacity: 1;
            transform: translate(0%, 0%);
        }

        &.${"centered-card-animation"}-exit-done, &.${"centered-card-animation"}-exit-active {
            opacity: 0;
            transform: translate(-10%, 0%);
        }
    `},SideCard_position={right:styled_components_browser_esm.AH`
        left: unset;
        right: 0;
        top: 0;
        bottom: 0;
    `,left:styled_components_browser_esm.AH`
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
    `},SideCard_StyledCard=(0,styled_components_browser_esm.Ay)(Card.Z)`
    position: fixed;

    left: ${p=>"right"===p.side?"unset":0};
    right: ${p=>"right"===p.side?0:"unset"};
    transform: translate(0%, 0%);
    z-index: ${Elevation.e.CARD_ON_DIMMING};
    height: 100%;
    will-change: transform, opacity;
    transition: transform ${150}ms ease-out, opacity ${150}ms ease-out;

    ${p=>SideCard_inFrom[p.side]};
    ${p=>SideCard_position[p.side]};

    @media (max-width: calc(${p=>p.width} + 2rem)) {
        width: calc(100% - 2rem);
    }
`,SideCard=({visible,width="28.375rem",...rest})=>react.createElement(CSSTransition.A,{in:visible,classNames:"centered-card-animation",timeout:150,unmountOnExit:!0,appear:!0},react.createElement(SideCard_StyledCard,{...rest,width,level:300}));try{SideCard.displayName="SideCard",SideCard.__docgenInfo={description:"",displayName:"SideCard",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"string"}},level:{defaultValue:{value:"0"},description:"Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)",name:"level",required:!1,type:{name:"ResponsiveValue<0 | 100 | 200 | 300, Required<Theme<TLengthStyledSystem>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/SideCard.tsx#SideCard"]={docgenInfo:SideCard.__docgenInfo,name:"SideCard",path:"src/components/Offcanvas/components/SideCard.tsx#SideCard"})}catch(__react_docgen_typescript_loader_error){}var Dimming=__webpack_require__("./src/components/Dimming/Dimming.tsx"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const fadeInAnimation=(maxOpacity=.6)=>styled_components_browser_esm.AH`
    transition: opacity ${200}ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &.${"dimming-fade-animation"}-appear, &.${"dimming-fade-animation"}-enter {
        opacity: 0;
    }

    &.${"dimming-fade-animation"}-appear-active, &.${"dimming-fade-animation"}-enter-active {
        opacity: ${maxOpacity};
    }

    &.${"dimming-fade-animation"}-exit {
        opacity: ${maxOpacity};
    }

    &.${"dimming-fade-animation"}-exit-done, &.${"dimming-fade-animation"}-exit-active {
        opacity: 0;
    }
`,fullscreenDimming=styled_components_browser_esm.AH`
    background-color: ${(0,cssVariables.sR)("background-surface-neutral-default")};
    opacity: 1;
`,DimmingFadeStyled=(0,styled_components_browser_esm.Ay)(Dimming.Q)`
    will-change: opacity;

    ${p=>p.fullscreen?fadeInAnimation(1):fadeInAnimation()};
    ${p=>p.fullscreen?fullscreenDimming:void 0}
`,DimmingFade=({visible,...rest})=>react.createElement(CSSTransition.A,{in:visible,classNames:"dimming-fade-animation",timeout:200,unmountOnExit:!0,appear:!0},react.createElement(DimmingFadeStyled,rest));try{DimmingFade.displayName="DimmingFade",DimmingFade.__docgenInfo={description:"",displayName:"DimmingFade",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/DimmingFade.tsx#DimmingFade"]={docgenInfo:DimmingFade.__docgenInfo,name:"DimmingFade",path:"src/components/Offcanvas/components/DimmingFade.tsx#DimmingFade"})}catch(__react_docgen_typescript_loader_error){}var Spaces=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),XCrossIcon=__webpack_require__("./src/icons/actions/XCrossIcon.tsx");const TopRightXIcon=(0,styled_components_browser_esm.Ay)(XCrossIcon.A)`
    position: absolute;
    top: ${Spaces.om[1]};
    right: ${Spaces.om[1]};
    cursor: pointer;
    z-index: ${Elevation.e.CARD_ON_DIMMING};
`;try{TopRightXIcon.displayName="TopRightXIcon",TopRightXIcon.__docgenInfo={description:"",displayName:"TopRightXIcon",props:{color:{defaultValue:null,description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'"inherit" | (string & {}) | ReadCssColorVariable'}},size:{defaultValue:null,description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/TopRightXIcon.tsx#TopRightXIcon"]={docgenInfo:TopRightXIcon.__docgenInfo,name:"TopRightXIcon",path:"src/components/Offcanvas/components/TopRightXIcon.tsx#TopRightXIcon"})}catch(__react_docgen_typescript_loader_error){}const DismissContext=react.createContext(void 0),PreventBackgroundScroll=styled_components_browser_esm.DU`
    body {
        overflow: hidden;
    }
`,Offcanvas_ANIMATION_DURATION=Math.max(200,150),Offcanvas=({children,onClose,dismissible=!0,side="left",...rest})=>{const[visible,setVisible]=(0,react.useState)(!0),isEscKeyPressed=(0,useIsEscKeyPressed.s)(),handleClose=()=>{setVisible(!1),onClose&&setTimeout((()=>onClose()),Offcanvas_ANIMATION_DURATION)};(0,react.useEffect)((()=>{dismissible&&isEscKeyPressed&&handleClose()}),[dismissible,isEscKeyPressed]);const renderChildren=()=>"function"==typeof children?children(handleClose):children;return react.createElement(DismissContext.Provider,{value:handleClose},react.createElement(DimmingFade,{onClick:()=>{dismissible&&handleClose()},visible,"data-testid":"dimming-background"}),"top"===side||"bottom"===side?react.createElement(CenteredCard,{visible,...rest,side},dismissible&&react.createElement(TopRightXIcon,{"data-testid":"close-icon",onClick:handleClose}),renderChildren()):react.createElement(SideCard,{visible,...rest,side},dismissible&&react.createElement(TopRightXIcon,{"data-testid":"close-icon",onClick:handleClose}),renderChildren()),react.createElement(PreventBackgroundScroll,null))};try{Offcanvas.displayName="Offcanvas",Offcanvas.__docgenInfo={description:"",displayName:"Offcanvas",props:{side:{defaultValue:{value:"left"},description:"Show the Offcanvas on the side of the page: left or right",name:"side",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},dismissible:{defaultValue:{value:"true"},description:"Makes the Offcanvas dismissible by the user (defaults to true)",name:"dismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Function that will be called when the user intends to close the Offcanvas",name:"onClose",required:!1,type:{name:"() => void"}},children:{defaultValue:null,description:"Children can be rendered with a dismiss function as render prop. Calling\nthe dismiss function will close the Offcanvas.",name:"children",required:!1,type:{name:"ReactNode | ((dismiss: DismissFunc) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/Offcanvas.tsx#Offcanvas"]={docgenInfo:Offcanvas.__docgenInfo,name:"Offcanvas",path:"src/components/Offcanvas/Offcanvas.tsx#Offcanvas"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx");const Offcanvas_stories={title:"Components/Offcanvas",component:Offcanvas,decorators:[Story=>react.createElement("div",{style:{willChange:"transform",height:"150px",border:"1px dashed gray"}},react.createElement(Story,null))],args:{children:"Offcanvas Content"}},Default={render:({onClose,...args})=>{const[open,setOpen]=(0,react.useState)(!1);return react.createElement(react.Fragment,null,react.createElement(Button.$,{size:"small",mr:1,onClick:()=>setOpen(!0)},"Open Offcanvas"),open&&react.createElement(Offcanvas,{...args,onClose:()=>{onClose?.(),setOpen(!1)}}))}},WithoutAutomaticDismiss={...Default,args:{dismissible:!1}},FromRightSide={...Default,args:{side:"right"}},__namedExportsOrder=["Default","WithoutAutomaticDismiss","FromRightSide"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: ({\n    onClose,\n    ...args\n  }) => {\n    const [open, setOpen] = useState(false);\n    return <>\n                <Button size="small" mr={1} onClick={() => setOpen(true)}>\n                    Open Offcanvas\n                </Button>\n                {open && <Offcanvas {...args} onClose={() => {\n        onClose?.();\n        setOpen(false);\n      }} />}\n            </>;\n  }\n}',...Default.parameters?.docs?.source}}},WithoutAutomaticDismiss.parameters={...WithoutAutomaticDismiss.parameters,docs:{...WithoutAutomaticDismiss.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    dismissible: false\n  }\n}",...WithoutAutomaticDismiss.parameters?.docs?.source}}},FromRightSide.parameters={...FromRightSide.parameters,docs:{...FromRightSide.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    side: 'right'\n  }\n}",...FromRightSide.parameters?.docs?.source}}}},"./src/components/Button/BaseButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>BaseButton});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({prop:"size",variants:{small:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fontSizes.1"),height:"2rem",minWidth:"5rem",padding:"0 0.75rem"},medium:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fontSizes.2"),height:"3rem",minWidth:"6.25rem",padding:"0 1rem"}}}),BaseButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.w})`
    align-items: center;
    background: transparent;
    border-radius: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("radii.2")};
    border: 0.0625rem solid transparent;
    cursor: pointer;
    display: inline-flex;
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fonts.normal")};
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("fontWeights.semibold")};
    justify-content: center;
    text-align: center;
    text-decoration: none;

    &:disabled {
        cursor: not-allowed;
    }

    svg path {
        fill: inherit;
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc,sizeVariant,styled_system__WEBPACK_IMPORTED_MODULE_0__.VL)}
`;try{BaseButton.displayName="BaseButton",BaseButton.__docgenInfo={description:"",displayName:"BaseButton",props:{size:{defaultValue:null,description:"Adjusts the size of the button",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"]={docgenInfo:BaseButton.__docgenInfo,name:"BaseButton",path:"src/components/Button/BaseButton.tsx#BaseButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts"),_BaseButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/BaseButton.tsx");const variantStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({variants:{primary:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-primary"),fill:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-primary"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-primary-default"),"&:hover":{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-accent"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-primary-emphasized")},"&:disabled":{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-disabled"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-disabled-default")}},secondary:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-primary"),fill:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-primary"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-page-default"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("border-neutral-default"),"&:hover":{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-neutral"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-neutral-emphasized")},"&:disabled":{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-disabled"),fill:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-disabled"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("transparent"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("border-disabled")}},danger:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-danger"),fill:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-on-background-danger"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-danger-default"),"&:hover":{background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-danger-emphasized")},"&:disabled":{background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-element-disabled-default"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("border-disabled")}}}}),Button=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_BaseButton__WEBPACK_IMPORTED_MODULE_3__.S).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.w})`
    transition: background ease 200ms, border-color ease 200ms, color ease 200ms, fill ease 200ms;

    ${variantStyles};
`;Button.defaultProps={size:"medium",variant:"primary"};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"medium"},description:"Adjusts the size of the button",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},variant:{defaultValue:{value:"primary"},description:"Define style of the button component, defaults to primary",name:"variant",required:!1,type:{name:"ResponsiveValue<Variant, Required<Theme<TLengthStyledSystem>>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const levelVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ox)({prop:"level",variants:{0:{backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-page-default"),boxShadow:"none"},100:{backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-page-elevation-1"),boxShadow:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w.shadows.small},200:{backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-page-elevation-2"),boxShadow:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w.shadows.medium},300:{backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-page-elevation-3"),boxShadow:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w.shadows.large}}}),Card=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w})`
    overflow: auto;
    box-sizing: border-box;
    border-radius: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("radii.1")};
    padding: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("space.5")};

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(levelVariant,styled_system__WEBPACK_IMPORTED_MODULE_0__.Vq,styled_system__WEBPACK_IMPORTED_MODULE_0__.uJ,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe,styled_system__WEBPACK_IMPORTED_MODULE_0__.VL,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ms)}
`;try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},level:{defaultValue:{value:"0"},description:"Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)",name:"level",required:!1,type:{name:"ResponsiveValue<0 | 100 | 200 | 300, Required<Theme<TLengthStyledSystem>>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dimming/Dimming.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Dimming});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Elevation/Elevation.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Dimming=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div`
    background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("background-backdrop")};
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${_essentials__WEBPACK_IMPORTED_MODULE_2__.e.DIMMING};
`;try{Dimming.displayName="Dimming",Dimming.__docgenInfo={description:"",displayName:"Dimming",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dimming/Dimming.tsx#Dimming"]={docgenInfo:Dimming.__docgenInfo,name:"Dimming",path:"src/components/Dimming/Dimming.tsx#Dimming"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/Elevation/Elevation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Elevation});const Elevation={DIMMING:1e3,CARD_ON_DIMMING:1100,DATEPICKER:1150,SELECT_LIST:1150,SUGGESTIONS_LIST:1150,BANNER:1200,TOOLTIP:1300}},"./src/icons/actions/XCrossIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const XCrossIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("iconSizes.medium")(props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",fill:"currentColor"}))},__WEBPACK_DEFAULT_EXPORT__=XCrossIcon;try{XCrossIcon.displayName="XCrossIcon",XCrossIcon.__docgenInfo={description:"",displayName:"XCrossIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'"inherit" | (string & {}) | ReadCssColorVariable'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/XCrossIcon.tsx#XCrossIcon"]={docgenInfo:XCrossIcon.__docgenInfo,name:"XCrossIcon",path:"src/icons/actions/XCrossIcon.tsx#XCrossIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/hooks/useIsEscKeyPressed.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useIsEscKeyPressed});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsEscKeyPressed=()=>{const[keyPressed,setKeyPressed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const upHandler=event=>{const key=event.key||event.keyCode;setKeyPressed("Escape"===key||"Esc"===key||27===key)};return window.addEventListener("keyup",upHandler),()=>{window.removeEventListener("keyup",upHandler)}}),[]),keyPressed}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.A)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.Jt)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.w,key))}}]);
//# sourceMappingURL=components-Offcanvas-docs-Offcanvas-stories.a3f04d98.iframe.bundle.js.map