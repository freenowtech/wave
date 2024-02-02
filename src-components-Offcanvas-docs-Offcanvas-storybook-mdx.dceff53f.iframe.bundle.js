"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[49068,25361],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Offcanvas/docs/Offcanvas.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DismissedWithHook:()=>DismissedWithHook,DismissedWithRenderProps:()=>DismissedWithRenderProps,FromRightSide:()=>FromRightSide,WithoutAutomaticDismiss:()=>WithoutAutomaticDismiss,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Offcanvas_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),useIsEscKeyPressed=__webpack_require__("./src/utils/hooks/useIsEscKeyPressed.ts"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),Elevation=__webpack_require__("./src/essentials/Elevation/Elevation.ts"),Card=__webpack_require__("./src/components/Card/Card.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TRANSITION_KEY="centered-card-animation",inFrom={top:styled_components_browser_esm.iv`
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
    `,bottom:styled_components_browser_esm.iv`
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
    `},position={top:styled_components_browser_esm.iv`
        left: 0;
        right: 0;
        top: 0;
        bottom: unset;
    `,bottom:styled_components_browser_esm.iv`
        left: 0;
        right: 0;
        top: unset;
        bottom: 0;
    `},StyledCard=(0,styled_components_browser_esm.ZP)(Card.Z)`
    position: fixed;

    left: ${p=>"right"===p.side?"unset":0};
    right: ${p=>"right"===p.side?0:"unset"};
    transform: translate(0%, 0%);
    z-index: ${Elevation.u.CARD_ON_DIMMING};
    width: 100%;
    will-change: transform, opacity;
    transition: transform ${150}ms ease-out, opacity ${150}ms ease-out;

    ${p=>inFrom[p.side]};
    ${p=>position[p.side]};

    @media (max-width: calc(${p=>p.width} + 2rem)) {
        width: calc(100% - 2rem);
    }
`,CenteredCard=({visible,height="28.375rem",...rest})=>(0,jsx_runtime.jsx)(CSSTransition.Z,{in:visible,classNames:TRANSITION_KEY,timeout:150,unmountOnExit:!0,appear:!0,children:(0,jsx_runtime.jsx)(StyledCard,{...rest,height,level:300})});CenteredCard.displayName="CenteredCard";try{CenteredCard.displayName="CenteredCard",CenteredCard.__docgenInfo={description:"",displayName:"CenteredCard",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"string"}},level:{defaultValue:{value:"0"},description:"Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)",name:"level",required:!1,type:{name:"ResponsiveValue<0 | 100 | 200 | 300, Required<Theme<TLengthStyledSystem>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/CenteredCard.tsx#CenteredCard"]={docgenInfo:CenteredCard.__docgenInfo,name:"CenteredCard",path:"src/components/Offcanvas/components/CenteredCard.tsx#CenteredCard"})}catch(__react_docgen_typescript_loader_error){}const SideCard_inFrom={right:styled_components_browser_esm.iv`
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
    `,left:styled_components_browser_esm.iv`
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
    `},SideCard_position={right:styled_components_browser_esm.iv`
        left: unset;
        right: 0;
        top: 0;
        bottom: 0;
    `,left:styled_components_browser_esm.iv`
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
    `},SideCard_StyledCard=(0,styled_components_browser_esm.ZP)(Card.Z)`
    position: fixed;

    left: ${p=>"right"===p.side?"unset":0};
    right: ${p=>"right"===p.side?0:"unset"};
    transform: translate(0%, 0%);
    z-index: ${Elevation.u.CARD_ON_DIMMING};
    height: 100%;
    will-change: transform, opacity;
    transition: transform ${150}ms ease-out, opacity ${150}ms ease-out;

    ${p=>SideCard_inFrom[p.side]};
    ${p=>SideCard_position[p.side]};

    @media (max-width: calc(${p=>p.width} + 2rem)) {
        width: calc(100% - 2rem);
    }
`,SideCard=({visible,width="28.375rem",...rest})=>(0,jsx_runtime.jsx)(CSSTransition.Z,{in:visible,classNames:"centered-card-animation",timeout:150,unmountOnExit:!0,appear:!0,children:(0,jsx_runtime.jsx)(SideCard_StyledCard,{...rest,width,level:300})});SideCard.displayName="SideCard";try{SideCard.displayName="SideCard",SideCard.__docgenInfo={description:"",displayName:"SideCard",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"string"}},level:{defaultValue:{value:"0"},description:"Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)",name:"level",required:!1,type:{name:"ResponsiveValue<0 | 100 | 200 | 300, Required<Theme<TLengthStyledSystem>>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/SideCard.tsx#SideCard"]={docgenInfo:SideCard.__docgenInfo,name:"SideCard",path:"src/components/Offcanvas/components/SideCard.tsx#SideCard"})}catch(__react_docgen_typescript_loader_error){}var Dimming=__webpack_require__("./src/components/Dimming/Dimming.tsx"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const fadeInAnimation=(maxOpacity=.6)=>styled_components_browser_esm.iv`
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
`,fullscreenDimming=styled_components_browser_esm.iv`
    background-color: ${(0,cssVariables.wp)("background-surface-neutral-default")};
    opacity: 1;
`,DimmingFadeStyled=(0,styled_components_browser_esm.ZP)(Dimming.g)`
    will-change: opacity;

    ${p=>p.fullscreen?fadeInAnimation(1):fadeInAnimation()};
    ${p=>p.fullscreen?fullscreenDimming:void 0}
`,DimmingFade=({visible,...rest})=>(0,jsx_runtime.jsx)(CSSTransition.Z,{in:visible,classNames:"dimming-fade-animation",timeout:200,unmountOnExit:!0,appear:!0,children:(0,jsx_runtime.jsx)(DimmingFadeStyled,{...rest})});DimmingFade.displayName="DimmingFade";try{DimmingFade.displayName="DimmingFade",DimmingFade.__docgenInfo={description:"",displayName:"DimmingFade",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/DimmingFade.tsx#DimmingFade"]={docgenInfo:DimmingFade.__docgenInfo,name:"DimmingFade",path:"src/components/Offcanvas/components/DimmingFade.tsx#DimmingFade"})}catch(__react_docgen_typescript_loader_error){}var Spaces=__webpack_require__("./src/essentials/Spaces/Spaces.ts"),XCrossIcon=__webpack_require__("./src/icons/actions/XCrossIcon.tsx");const TopRightXIcon=(0,styled_components_browser_esm.ZP)(XCrossIcon.Z)`
    position: absolute;
    top: ${Spaces.c0[1]};
    right: ${Spaces.c0[1]};
    cursor: pointer;
    z-index: ${Elevation.u.CARD_ON_DIMMING};
`;try{TopRightXIcon.displayName="TopRightXIcon",TopRightXIcon.__docgenInfo={description:"",displayName:"TopRightXIcon",props:{color:{defaultValue:null,description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'ReadCssColorVariable | "inherit" | (string & {})'}},size:{defaultValue:null,description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/components/TopRightXIcon.tsx#TopRightXIcon"]={docgenInfo:TopRightXIcon.__docgenInfo,name:"TopRightXIcon",path:"src/components/Offcanvas/components/TopRightXIcon.tsx#TopRightXIcon"})}catch(__react_docgen_typescript_loader_error){}const DismissContext=react.createContext(void 0),PreventBackgroundScroll=styled_components_browser_esm.vJ`
    body {
        overflow: hidden;
    }
`,Offcanvas_ANIMATION_DURATION=Math.max(200,150),Offcanvas=({children,onClose,dismissible,side="left",...rest})=>{const[visible,setVisible]=(0,react.useState)(!0),isEscKeyPressed=(0,useIsEscKeyPressed.d)(),handleClose=()=>{setVisible(!1),onClose&&setTimeout((()=>onClose()),Offcanvas_ANIMATION_DURATION)};(0,react.useEffect)((()=>{dismissible&&isEscKeyPressed&&handleClose()}),[dismissible,isEscKeyPressed]);const renderChildren=()=>"function"==typeof children?children(handleClose):children;return(0,jsx_runtime.jsxs)(DismissContext.Provider,{value:handleClose,children:[(0,jsx_runtime.jsx)(DimmingFade,{onClick:()=>{dismissible&&handleClose()},visible,"data-testid":"dimming-background"}),"top"===side||"bottom"===side?(0,jsx_runtime.jsxs)(CenteredCard,{visible,...rest,side,children:[dismissible&&(0,jsx_runtime.jsx)(TopRightXIcon,{"data-testid":"close-icon",onClick:handleClose}),renderChildren()]}):(0,jsx_runtime.jsxs)(SideCard,{visible,...rest,side,children:[dismissible&&(0,jsx_runtime.jsx)(TopRightXIcon,{"data-testid":"close-icon",onClick:handleClose}),renderChildren()]}),(0,jsx_runtime.jsx)(PreventBackgroundScroll,{})]})};Offcanvas.displayName="Offcanvas",Offcanvas.defaultProps={dismissible:!0};try{Offcanvas.displayName="Offcanvas",Offcanvas.__docgenInfo={description:"",displayName:"Offcanvas",props:{side:{defaultValue:{value:"left"},description:"Show the Offcanvas on the side of the page: left or right",name:"side",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'}]}},dismissible:{defaultValue:{value:"true"},description:"Makes the Offcanvas dismissible by the user (defaults to true)",name:"dismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Function that will be called when the user intends to close the Offcanvas",name:"onClose",required:!1,type:{name:"() => void"}},children:{defaultValue:null,description:"Children can be rendered with a dismiss function as render prop. Calling\nthe dismiss function will close the Offcanvas.",name:"children",required:!1,type:{name:"ReactNode | ((dismiss: DismissFunc) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Offcanvas/Offcanvas.tsx#Offcanvas"]={docgenInfo:Offcanvas.__docgenInfo,name:"Offcanvas",path:"src/components/Offcanvas/Offcanvas.tsx#Offcanvas"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx");const Offcanvas_stories={title:"Components/Offcanvas",component:Offcanvas,decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{willChange:"transform",height:"150px",border:"1px dashed gray"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{children:"Offcanvas Content"}},Default={render:({onClose,...args})=>{const[open,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{size:"small",mr:1,onClick:()=>setOpen(!0),children:"Open Offcanvas"}),open&&(0,jsx_runtime.jsx)(Offcanvas,{...args,onClose:()=>{onClose?.(),setOpen(!1)}})]})}},WithoutAutomaticDismiss={...Default,args:{dismissible:!1}},FromRightSide={...Default,args:{side:"right"}},DismissedWithRenderProps={render:args=>(0,jsx_runtime.jsx)(Offcanvas,{...args,children:dismiss=>(0,jsx_runtime.jsx)(Button.z,{onClick:dismiss,children:"Close"})})},Content=()=>{const dismiss=(()=>{const dismiss=(0,react.useContext)(DismissContext);if(void 0===dismiss)throw new Error("useOffcanvasDismiss must be used within a <Offcanvas />");return dismiss})();return(0,jsx_runtime.jsx)(Button.z,{onClick:dismiss,children:"Close"})};Content.displayName="Content";const DismissedWithHook={render:args=>(0,jsx_runtime.jsx)(Offcanvas,{...args,children:(0,jsx_runtime.jsx)(Content,{})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: ({\n    onClose,\n    ...args\n  }) => {\n    const [open, setOpen] = useState(false);\n    return <>\n                <Button size="small" mr={1} onClick={() => setOpen(true)}>\n                    Open Offcanvas\n                </Button>\n                {open && <Offcanvas {...args} onClose={() => {\n        onClose?.();\n        setOpen(false);\n      }} />}\n            </>;\n  }\n}',...Default.parameters?.docs?.source}}},WithoutAutomaticDismiss.parameters={...WithoutAutomaticDismiss.parameters,docs:{...WithoutAutomaticDismiss.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    dismissible: false\n  }\n}",...WithoutAutomaticDismiss.parameters?.docs?.source}}},FromRightSide.parameters={...FromRightSide.parameters,docs:{...FromRightSide.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    side: 'right'\n  }\n}",...FromRightSide.parameters?.docs?.source}}},DismissedWithRenderProps.parameters={...DismissedWithRenderProps.parameters,docs:{...DismissedWithRenderProps.parameters?.docs,source:{originalSource:"{\n  render: args => <Offcanvas {...args}>{dismiss => <Button onClick={dismiss}>Close</Button>}</Offcanvas>\n}",...DismissedWithRenderProps.parameters?.docs?.source}}},DismissedWithHook.parameters={...DismissedWithHook.parameters,docs:{...DismissedWithHook.parameters?.docs,source:{originalSource:"{\n  render: args => <Offcanvas {...args}>\n            <Content />\n        </Offcanvas>\n}",...DismissedWithHook.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithoutAutomaticDismiss","FromRightSide","DismissedWithRenderProps","DismissedWithHook"]},"./src/components/Button/BaseButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>BaseButton});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const sizeVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"size",variants:{small:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.1"),height:"2rem",minWidth:"5rem",padding:"0 0.75rem"},medium:{fontSize:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontSizes.2"),height:"3rem",minWidth:"6.25rem",padding:"0 1rem"}}}),BaseButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.r})`
    align-items: center;
    background: transparent;
    border-radius: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("radii.2")};
    border: 0.0625rem solid transparent;
    cursor: pointer;
    display: inline-flex;
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fonts.normal")};
    font-weight: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.U)("fontWeights.semibold")};
    justify-content: center;
    text-align: center;
    text-decoration: none;

    &:disabled {
        cursor: not-allowed;
    }

    svg path {
        fill: inherit;
    }

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,sizeVariant,styled_system__WEBPACK_IMPORTED_MODULE_0__.bf)}
`;try{BaseButton.displayName="BaseButton",BaseButton.__docgenInfo={description:"",displayName:"BaseButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},size:{defaultValue:null,description:"Adjusts the size of the button",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/BaseButton.tsx#BaseButton"]={docgenInfo:BaseButton.__docgenInfo,name:"BaseButton",path:"src/components/Button/BaseButton.tsx#BaseButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/essentials/theme.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts"),_BaseButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/BaseButton.tsx");const variantStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({variants:{primary:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-on-background-primary"),fill:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-on-background-primary"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-element-primary-default"),"&:hover":{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-on-background-accent"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-element-primary-emphasized")},"&:disabled":{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-on-background-disabled"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-element-disabled-default")}},secondary:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-primary"),fill:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-primary"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-page-default"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("border-neutral-default"),"&:hover":{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-on-background-neutral"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-element-neutral-emphasized")},"&:disabled":{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-disabled"),fill:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-disabled"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("transparent"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("border-disabled")}},danger:{color:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-on-background-danger"),fill:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-on-background-danger"),background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-element-danger-default"),"&:hover":{background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-element-danger-emphasized")},"&:disabled":{background:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-element-disabled-default"),borderColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("border-disabled")}}}}),Button=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_BaseButton__WEBPACK_IMPORTED_MODULE_3__.Y).attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_4__.r})`
    transition: background ease 200ms, border-color ease 200ms, color ease 200ms, fill ease 200ms;

    ${variantStyles};
`;Button.defaultProps={size:"medium",variant:"primary"};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the button",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},variant:{defaultValue:{value:"primary"},description:"Define style of the button component, defaults to primary",name:"variant",required:!1,type:{name:"ResponsiveValue<Variant, Required<Theme<TLengthStyledSystem>>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const levelVariant=(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.bU)({prop:"level",variants:{0:{backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-page-default"),boxShadow:"none"},100:{backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-page-elevation-1"),boxShadow:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r.shadows.small},200:{backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-page-elevation-2"),boxShadow:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r.shadows.medium},300:{backgroundColor:(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-page-elevation-3"),boxShadow:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r.shadows.large}}}),Card=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r})`
    overflow: auto;
    box-sizing: border-box;
    border-radius: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("radii.1")};
    padding: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("space.5")};

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(levelVariant,styled_system__WEBPACK_IMPORTED_MODULE_0__.E0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Cb,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_0__.bf,styled_system__WEBPACK_IMPORTED_MODULE_0__.o3)}
`;try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},level:{defaultValue:{value:"0"},description:"Set the visual depth of the card by adding a shadow (available values: 0, 100, 200, 300)",name:"level",required:!1,type:{name:"ResponsiveValue<0 | 100 | 200 | 300, Required<Theme<TLengthStyledSystem>>>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dimming/Dimming.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Dimming});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_essentials__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/Elevation/Elevation.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Dimming=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
    background-color: ${(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("background-backdrop")};
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${_essentials__WEBPACK_IMPORTED_MODULE_2__.u.DIMMING};
`;try{Dimming.displayName="Dimming",Dimming.__docgenInfo={description:"",displayName:"Dimming",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dimming/Dimming.tsx#Dimming"]={docgenInfo:Dimming.__docgenInfo,name:"Dimming",path:"src/components/Dimming/Dimming.tsx#Dimming"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/cssVariables.ts"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts");const Link=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.a.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r})`
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
`;try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLAnchorElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.r})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ue,styled_system__WEBPACK_IMPORTED_MODULE_0__.I8,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/docs/StyledSystemLinks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>StyledSystemLinks});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Link/Link.tsx"),_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const mapping={margin:"space",width:"layout",height:"layout",borderradius:"border"},StyledSystemLinks=({component,supportedProps,...rest})=>{const supportedPropsTextParts=supportedProps.map((element=>(prop=>{const lowercaseProp=prop.toLowerCase(),anchor=mapping[lowercaseProp]?mapping[lowercaseProp]:lowercaseProp;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.r,{href:`https://styled-system.com/table/#${anchor}`,target:"_blank",rel:"noreferrer noopener",children:prop})})(element))).reduce(((acc,prop,index)=>{if(acc.push(prop),index!==supportedProps.length-1){const join=index===supportedProps.length-2?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:" and "}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:", "});acc.push(join)}return acc}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__.x,{...rest,as:"p",children:["The ",component," supports"," ",supportedPropsTextParts.map(((c,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:c},index)))," ","styled-system props."]})};StyledSystemLinks.displayName="StyledSystemLinks";try{StyledSystemLinks.displayName="StyledSystemLinks",StyledSystemLinks.__docgenInfo={description:"",displayName:"StyledSystemLinks",props:{component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"string"}},supportedProps:{defaultValue:null,description:"",name:"supportedProps",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/docs/StyledSystemLinks.tsx#StyledSystemLinks"]={docgenInfo:StyledSystemLinks.__docgenInfo,name:"StyledSystemLinks",path:"src/docs/StyledSystemLinks.tsx#StyledSystemLinks"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/Elevation/Elevation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Elevation});const Elevation={DIMMING:1e3,CARD_ON_DIMMING:1100,DATEPICKER:1150,SELECT_LIST:1150,SUGGESTIONS_LIST:1150,BANNER:1200,TOOLTIP:1300}},"./src/icons/actions/XCrossIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _utils_themeGet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/themeGet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const XCrossIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_2__.U)("iconSizes.medium")(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",fill:"currentColor"})})};XCrossIcon.displayName="XCrossIcon";const __WEBPACK_DEFAULT_EXPORT__=XCrossIcon;try{XCrossIcon.displayName="XCrossIcon",XCrossIcon.__docgenInfo={description:"",displayName:"XCrossIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'ReadCssColorVariable | "inherit" | (string & {})'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/XCrossIcon.tsx#XCrossIcon"]={docgenInfo:XCrossIcon.__docgenInfo,name:"XCrossIcon",path:"src/icons/actions/XCrossIcon.tsx#XCrossIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/hooks/useIsEscKeyPressed.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>useIsEscKeyPressed});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIsEscKeyPressed=()=>{const[keyPressed,setKeyPressed]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const upHandler=event=>{const key=event.key||event.keyCode;setKeyPressed("Escape"===key||"Esc"===key||27===key)};return window.addEventListener("keyup",upHandler),()=>{window.removeEventListener("keyup",upHandler)}}),[]),keyPressed}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./src/components/Offcanvas/docs/Offcanvas.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/docs/StyledSystemLinks.tsx"),_Offcanvas_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Offcanvas/docs/Offcanvas.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",h4:"h4"},(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Offcanvas_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"offcanvas",children:"Offcanvas"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Offcanvas should only contain content or flows which are related to the current page and not replace pages, therefore\nits complexity level has to be simple. Consider the fullscreen state if you want to focus the users attention to the Offcanvas\ncontent."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Offcanvas is responsive per default but the width can be adjusted (the default is 600px or 37.5rem). Content on the Offcanvas\nis scrollable and has a space5 bounding box."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Offcanvas_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__.h,{component:"Offcanvas",supportedProps:["width"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"basic-use",children:"Basic use"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'const [showOffcanvas, setShowOffcanvas] = useState(true);\n\n<Offcanvas onClose={() => setShowOffcanvas(false)} fullscreen={true}>\n    {dismiss => (\n        <>\n            <Headline as="h2">Add Note</Headline>\n            <Text as="p" my={3}>\n                Ensure that all participants are aware of the change.\n            </Text>\n            <Button onClick={dismiss}>Add Note</Button>\n            <TextButton onClick={dismiss}>Cancel</TextButton>\n        </>\n    )}\n</Offcanvas>;\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"dismissing-the-offcanvas",children:"Dismissing the Offcanvas"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Offcanvas provides a function to dismiss the component with an animation. The\ndismiss function is available either through render props or a hook. After the\nanimation has finished the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"onClose"})," callback will be called."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"via-render-props",children:"Via Render Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Pass render function as a child to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Offcanvas"}),". Call the function passed as an argument to close the Offcanvas:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"<Offcanvas>{dismiss => <Button onClick={dismiss}>Close</Button>}</Offcanvas>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"via-hook",children:"Via Hook"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useOffcanvasDismiss"})," hook to get the dismiss function. It is only available inside the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Offcanvas"})," component because\nit uses React context to get the dismiss function."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"const InsideOffcanvas = () => {\n    const dismiss = useOffcanvasDismiss();\n    return <button onClick={dismiss}>Close</button>;\n};\n\nconst OffcanvasWrapper = () => (\n    <Offcanvas>\n        <InsideOffcanvas />\n    </Offcanvas>\n);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.fQ,{includePrimary:!1})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
//# sourceMappingURL=src-components-Offcanvas-docs-Offcanvas-storybook-mdx.dceff53f.iframe.bundle.js.map