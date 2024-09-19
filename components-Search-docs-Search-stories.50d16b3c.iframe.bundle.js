"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[47825],{"./src/components/Search/docs/Search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithAPI:()=>WithAPI,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Search_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Elevation=__webpack_require__("./src/essentials/Elevation/Elevation.ts"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts"),MagnifierIcon=__webpack_require__("./src/icons/actions/MagnifierIcon.tsx"),XCrossIcon=__webpack_require__("./src/icons/actions/XCrossIcon.tsx");function useControlledState([value,setValue],defaultState){const[state,setState]=react.useState(value||defaultState);return[void 0!==setValue?value:state,setValue||setState]}var Box=__webpack_require__("./src/components/Box/Box.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx");const ActiveStyle=`\n    background-color: ${(0,cssVariables.sR)("background-element-info-default")};\n    color: ${(0,cssVariables.sR)("foreground-info-faded")};\n`,SearchResultsContainer=(0,styled_components_browser_esm.Ay)(Box.a)`
    position: absolute;
    z-index: ${Elevation.e.SUGGESTIONS_LIST};
    margin-top: 0.0625rem;
    padding: 0.25rem 0;
    width: inherit;
    background-color: ${(0,cssVariables.sR)("background-page-elevation-1")};
    box-shadow: 0 0.125rem 0.5rem 0.0625rem ${(0,cssVariables.sR)("shadow-default")};
    border-radius: 0.25rem;
    cursor: pointer;
`,ActiveBox=(0,styled_components_browser_esm.Ay)(Box.a)`
    &[aria-selected='true'] > div {
        ${ActiveStyle}
    }
`,SearchInputContainer=(0,styled_components_browser_esm.Ay)(Box.a)`
    box-sizing: border-box;
    background: ${(0,cssVariables.sR)("background-page-default")};
    border-radius: 0.25rem;
    border: ${p=>`0.0625rem solid ${(0,cssVariables.sR)(p.isInFocus?"border-focus":"border-neutral-default")}`};
    box-shadow: ${p=>p.isInFocus?`inset 0 0 0 0.0625rem ${(0,cssVariables.sR)("border-focus")}`:"none"};
    height: ${p=>"small"===p.size?"2.2rem":"3.2rem"};
    transition: box-shadow 100ms ease, border 100ms ease;
`,StyledInput=(0,styled_components_browser_esm.Ay)(Input.p)`
    width: 100%;

    input {
        caret-color: ${(0,cssVariables.sR)("foreground-info-faded")};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${p=>(0,cssVariables.sR)(p.disabled?"foreground-disabled":"foreground-neutral-default")};
            opacity: 1;
        }

        &:focus,
        &:active {
            outline: 0;
            border: 0;
            box-shadow: unset;
        }

        text-overflow: ellipsis;

        ::-webkit-search-cancel-button {
            display: none;
        }
    }
`,Search=({results=[],value:propsValue,setValue:setPropsValue,showResults:propsShowResults,setShowResults:setPropsShowResults,width,placeholder="Search...",disabled,size,onInputChange,onClear,onEnter,onChangeSelection,...props})=>{const containerRef=react.useRef(null),[isInFocus,setIsInFocus]=react.useState(!1),[activeIndex,setActiveIndex]=react.useState(0),[value,setValue]=useControlledState([propsValue,setPropsValue],""),[showResults,setShowResults]=useControlledState([propsShowResults,setPropsShowResults],!1);react.useEffect((()=>{const elementLength=Array.isArray(results)?results.length:1,emitKeyEvent=({key})=>{if(isInFocus)switch(key){case"ArrowUp":{const index=activeIndex>0?(activeIndex-1)%elementLength:elementLength-1;setActiveIndex(index),onChangeSelection?.(index);break}case"ArrowDown":{const index=(activeIndex+1)%elementLength;setActiveIndex(index),onChangeSelection?.(index);break}case"Enter":{const el=document.querySelector(`#result-item-${activeIndex}`);el?.children[0]?.click(),onEnter?.(value);break}case"Escape":setShowResults(!1)}};return document.addEventListener("keydown",emitKeyEvent),()=>{document.removeEventListener("keydown",emitKeyEvent)}}),[isInFocus,activeIndex,setActiveIndex,onChangeSelection,onEnter,value,propsValue,results]),react.useEffect((()=>{const emitIfClickingOutsideSearch=event=>{disabled||(containerRef.current.contains(event.target)?setShowResults(!0):setShowResults(!1))};return document.addEventListener("click",emitIfClickingOutsideSearch),()=>{document.removeEventListener("click",emitIfClickingOutsideSearch)}}),[showResults,setShowResults,disabled]);return react.createElement("div",{ref:containerRef,style:{width},role:"search"},react.createElement(SearchInputContainer,{isInFocus,display:"flex",flexDirection:"row",alignItems:"center",width:"100%",size},react.createElement(Box.a,{style:{display:"flex",margin:"small"===size?"0.5rem":"1rem",marginRight:"auto"},onClick:()=>!disabled&&onEnter?.(value)},react.createElement(MagnifierIcon.A,{size:"small"===size?20:24,"aria-hidden":"true",color:(0,cssVariables.sR)(disabled?"foreground-disabled":"foreground-neutral-default")})),react.createElement(StyledInput,{size,type:"search",disabled,"aria-label":placeholder,autoComplete:"off",placeholder,value,onChange:event=>{setShowResults(!0);const searchText=event.target.value;setValue?.(searchText),onInputChange?.(searchText)},onFocus:()=>setIsInFocus(!0),onBlur:()=>setIsInFocus(!1),...props}),value?react.createElement(Box.a,{"aria-label":"clear-search",style:{margin:"1rem",marginLeft:"auto",cursor:"pointer",display:"flex"},onClick:()=>{setValue?.(""),onClear?.()},role:"button"},react.createElement(XCrossIcon.A,{"aria-hidden":"true",color:(0,cssVariables.sR)("foreground-neutral-default")})):void 0),showResults&&results.length>0&&react.createElement(SearchResultsContainer,{role:"listbox"},results.map(((result,index)=>react.createElement(ActiveBox,{role:"option",id:`result-item-${index}`,key:index,onMouseEnter:()=>setActiveIndex(index),onMouseMove:()=>setActiveIndex(index),"aria-selected":activeIndex===index},result)))))};try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{results:{defaultValue:{value:"[]"},description:"",name:"results",required:!1,type:{name:"ReactNode[]"}},value:{defaultValue:null,description:"Sets the value",name:"value",required:!1,type:{name:"string"}},setValue:{defaultValue:null,description:"Function to set the value",name:"setValue",required:!1,type:{name:"(value: string) => void"}},showResults:{defaultValue:null,description:"show results dropdown",name:"showResults",required:!1,type:{name:"boolean"}},setShowResults:{defaultValue:null,description:"Function to show and hide the dropdown",name:"setShowResults",required:!1,type:{name:"(value: boolean) => void"}},width:{defaultValue:null,description:"Sets the width of the search box",name:"width",required:!1,type:{name:"string"}},onEnter:{defaultValue:null,description:'This function is called when the "Enter" key is pressed or the search icon is clicked',name:"onEnter",required:!1,type:{name:"(value: string) => void"}},onChangeSelection:{defaultValue:null,description:"This function is called when the selection is changed. It emits the selected index",name:"onChangeSelection",required:!1,type:{name:"(index: number) => void"}},onInputChange:{defaultValue:null,description:"This function is called when the value in the search box changes",name:"onInputChange",required:!1,type:{name:"(value: string) => void"}},onClear:{defaultValue:null,description:"This function is called when the search box is cleared",name:"onClear",required:!1,type:{name:"() => void"}},size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Search..."},description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Search/Search.tsx#Search"]={docgenInfo:Search.__docgenInfo,name:"Search",path:"src/components/Search/Search.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}var Text=__webpack_require__("./src/components/Text/Text.tsx");const Search_stories={title:"Components/Search",component:Search,args:{results:["Adam","Barry","Charles","David"]}},Default={},WithPlaceholder={args:{placeholder:"Search by name"}},Disabled={args:{disabled:!0}},WithAPI={args:{width:"20rem",placeholder:"Enter a name"},parameters:{},argTypes:{results:{table:{disable:!0}}},render:args=>{const[results,setResults]=(0,react.useState)([]),mapName=({name},index)=>react.createElement(Box.a,{key:`${name}-${index}`,height:"2.5rem",display:"flex",alignItems:"center"},react.createElement(Text.E,{marginLeft:"1rem"},name));return react.createElement(Search,{...args,results,onInputChange:name=>(async name=>{const response=await(await fetch(`https://swapi.dev/api/people/?search=${name}`)).json();setResults(response.results?.map(mapName))})(name),onClear:()=>setResults([])})}},__namedExportsOrder=["Default","WithPlaceholder","Disabled","WithAPI"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:"{\n  args: {\n    placeholder: 'Search by name'\n  }\n}",...WithPlaceholder.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},WithAPI.parameters={...WithAPI.parameters,docs:{...WithAPI.parameters?.docs,source:{originalSource:'{\n  args: {\n    width: \'20rem\',\n    placeholder: \'Enter a name\'\n  },\n  parameters: {},\n  argTypes: {\n    results: {\n      table: {\n        disable: true\n      }\n    }\n  },\n  render: args => {\n    const [results, setResults] = useState<JSX.Element[]>([]);\n    const mapName = ({\n      name\n    }: {\n      name: string;\n    }, index: number) => <Box key={`${name}-${index}`} height="2.5rem" display="flex" alignItems="center">\n                <Text marginLeft="1rem">{name}</Text>\n            </Box>;\n    const fetchCharacter = async (name: string) => {\n      const response: {\n        results: {\n          name: string;\n        }[];\n      } = await (await fetch(`https://swapi.dev/api/people/?search=${name}`)).json();\n      setResults(response.results?.map(mapName));\n    };\n    return <Search {...args} results={results} onInputChange={name => fetchCharacter(name)} onClear={() => setResults([])} />;\n  }\n}',...WithAPI.parameters?.docs?.source}}}},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.Jt)(props.theme,path,fallback)}}},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Password_Password__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Password/Password.tsx"),_InnerInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/InnerInput.tsx");const Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>"password"===props.type?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Password_Password__WEBPACK_IMPORTED_MODULE_1__._,{...props,ref}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InnerInput__WEBPACK_IMPORTED_MODULE_2__.P,{...props,ref})));Input.defaultProps={size:"medium",variant:"boxed",type:"text"};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{size:{defaultValue:{value:"medium"},description:"Sets the size of the input",name:"size",required:!1,type:{name:'ResponsiveValue<"small" | "medium", Required<Theme<TLengthStyledSystem>>>'}},label:{defaultValue:null,description:"Sets the input label",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disable the input",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Sets the input placeholder",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Shows the error state",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"boxed"},description:"Sets the variant of the input",name:"variant",required:!1,type:{name:'ResponsiveValue<"boxed" | "bottom-lined", Required<Theme<TLengthStyledSystem>>>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.w})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.sR)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.J)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Zz)(styled_system__WEBPACK_IMPORTED_MODULE_0__.Lc,styled_system__WEBPACK_IMPORTED_MODULE_0__.J,styled_system__WEBPACK_IMPORTED_MODULE_0__.Wy,styled_system__WEBPACK_IMPORTED_MODULE_0__.mw,styled_system__WEBPACK_IMPORTED_MODULE_0__.Jh)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"normal" | "bold" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/essentials/Elevation/Elevation.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Elevation});const Elevation={DIMMING:1e3,CARD_ON_DIMMING:1100,DATEPICKER:1150,SELECT_LIST:1150,SUGGESTIONS_LIST:1150,BANNER:1200,TOOLTIP:1300}},"./src/icons/actions/MagnifierIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const MagnifierIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("iconSizes.medium")(props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 3a7 7 0 016.066 10.495l5.641 5.798-1.414 1.414-1.81-1.89.015-.012-3.022-3.13-.613-.64-.003.002-1.389-1.438a5 5 0 10-1.73 1.09l1.478 1.528A7 7 0 1110 3z",fill:"currentColor"}))},__WEBPACK_DEFAULT_EXPORT__=MagnifierIcon;try{MagnifierIcon.displayName="MagnifierIcon",MagnifierIcon.__docgenInfo={description:"",displayName:"MagnifierIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'"inherit" | (string & {}) | ReadCssColorVariable'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/MagnifierIcon.tsx#MagnifierIcon"]={docgenInfo:MagnifierIcon.__docgenInfo,name:"MagnifierIcon",path:"src/icons/actions/MagnifierIcon.tsx#MagnifierIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/actions/XCrossIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/themeGet.ts");const XCrossIcon=({size="medium",color="inherit",...rest})=>{const props={...rest,color},sizePx=Number.isFinite(size)?size:(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)(`iconSizes.${size}`)(props)||(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_1__.J)("iconSizes.medium")(props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{...props,width:sizePx,height:sizePx,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",fill:"currentColor"}))},__WEBPACK_DEFAULT_EXPORT__=XCrossIcon;try{XCrossIcon.displayName="XCrossIcon",XCrossIcon.__docgenInfo={description:"",displayName:"XCrossIcon",props:{color:{defaultValue:{value:"inherit"},description:"Overrides the default color of the icon.",name:"color",required:!1,type:{name:'"inherit" | (string & {}) | ReadCssColorVariable'}},size:{defaultValue:{value:"medium"},description:"Adjusts the size of the icon with defaults or the size in pixels.",name:"size",required:!1,type:{name:'number | "small" | "medium" | "large"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/actions/XCrossIcon.tsx#XCrossIcon"]={docgenInfo:XCrossIcon.__docgenInfo,name:"XCrossIcon",path:"src/icons/actions/XCrossIcon.tsx#XCrossIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Search-docs-Search-stories.50d16b3c.iframe.bundle.js.map