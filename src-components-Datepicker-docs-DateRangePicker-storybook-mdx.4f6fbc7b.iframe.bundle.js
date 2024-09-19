"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[32482],{"./src/components/Datepicker/docs/DateRangePicker.storybook.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/docs/StyledSystemLinks.tsx"),_DatepickerOnModal__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Datepicker/docs/DatepickerOnModal.tsx"),_DateRangePicker_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Datepicker/docs/DateRangePicker.stories.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_DateRangePicker_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"daterangepicker",children:"DateRangePicker"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.ov,{of:_DateRangePicker_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_StyledSystemLinks__WEBPACK_IMPORTED_MODULE_5__.s,{component:"DateRangePicker",supportedProps:["margin","width"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"restricted-dates-range",children:"Restricted dates range"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"There are two ways to restrict selectable dates."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you need to allow dates no later than some date or only after a certain date, use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"minDate"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"maxDate"}),"\nproperties. They accept plain JavaScript ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Date"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"For example, the datepicker allow to select dates one month away from the current date:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_DateRangePicker_stories__WEBPACK_IMPORTED_MODULE_4__.WithRestrictedDays}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If the restriction is more complex, provide a restriction function to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"isDateBlocked"})," property.\nThe function will be called for each date at render, passing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Date"})," object to it."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For example, a function which disables every even day in the calendar ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"(date:Date) => date.getDate() % 2 === 0"}),":"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_DateRangePicker_stories__WEBPACK_IMPORTED_MODULE_4__.WithDayAvailabilityFunction}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"datepicker-on-modal",children:"Datepicker on Modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you need to show the Datepicker in a Modal window, we recommend to set the modal ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"dismissable"})," prop to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"false"})," to avoid\noccasional closing."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.di,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DatepickerOnModal__WEBPACK_IMPORTED_MODULE_6__.r,{})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Example code:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'export const DatepickerOnModal = () => {\n    const [showModal, setShowModal] = useState<boolean>(false);\n    const [value, setValue] = useState<{ startDate?: Date; endDate?: Date }>();\n\n    return (\n        <>\n            {!showModal && <Button onClick={() => setShowModal(true)}>Open Modal with Datepicker</Button>}\n            {showModal && (\n                <Modal dismissible={false} onClose={() => setShowModal(false)}>\n                    {dismiss => (\n                        <>\n                            <Headline as="h2">New Event</Headline>\n                            <DateRangePicker value={value} onChange={setValue} />\n                            <br />\n                            <Button onClick={dismiss}>Add Event</Button>\n                            <TextButton onClick={dismiss}>Cancel</TextButton>\n                        </>\n                    )}\n                </Modal>\n            )}\n        </>\n    );\n};\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.om,{includePrimary:!1})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_wave_wave_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/Datepicker/docs/DateRangePicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Compact:()=>Compact,Default:()=>Default,Disabled:()=>Disabled,WithDayAvailabilityFunction:()=>WithDayAvailabilityFunction,WithErrorHandler:()=>WithErrorHandler,WithManualPlacement:()=>WithManualPlacement,WithRestrictedDays:()=>WithRestrictedDays,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DateRangePicker_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/@datepicker-react/hooks/lib/index.esm.js"),toDate=__webpack_require__("./node_modules/date-fns/esm/toDate/index.js"),requiredArgs=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");function startOfDay(dirtyDate){(0,requiredArgs.A)(1,arguments);var date=(0,toDate.A)(dirtyDate);return date.setHours(0,0,0,0),date}function endOfDay(dirtyDate){(0,requiredArgs.A)(1,arguments);var date=(0,toDate.A)(dirtyDate);return date.setHours(23,59,59,999),date}var parse=__webpack_require__("./node_modules/date-fns/esm/parse/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist_index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Breakpoints=__webpack_require__("./src/essentials/Breakpoints/Breakpoints.ts"),theme=__webpack_require__("./src/essentials/theme.ts"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts"),useGeneratedId=__webpack_require__("./src/utils/hooks/useGeneratedId.ts"),ChevronRightIcon=__webpack_require__("./src/icons/arrows/ChevronRightIcon.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),Datepicker=__webpack_require__("./src/components/Datepicker/Datepicker.tsx"),isValidDateText=__webpack_require__("./src/components/Datepicker/utils/isValidDateText.ts"),HelperText=__webpack_require__("./src/components/HelperText/HelperText.tsx"),dateToDisplayText=__webpack_require__("./src/components/Datepicker/utils/dateToDisplayText.ts"),useLocaleObject=__webpack_require__("./src/components/Datepicker/utils/useLocaleObject.ts");var DatepickerContentElements=__webpack_require__("./src/components/Datepicker/DatepickerContentElements.tsx"),EnforcedColorScheme=__webpack_require__("./src/components/ColorScheme/EnforcedColorScheme.tsx"),useClosestColorScheme=__webpack_require__("./src/utils/hooks/useClosestColorScheme.ts");const DateRangeWrapper=styled_components_browser_esm.Ay.div.attrs({theme:theme.w})`
    display: inline-flex;
    align-items: center;
    position: relative;
    z-index: 0;
    width: 100%;

    input {
        &:focus,
        &:active {
            box-shadow: none;
            border-color: ${(0,cssVariables.sR)("border-neutral-default")};
        }
    }

    .startDate input {
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        text-align: center;
    }

    .endDate input {
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        text-align: center;
    }

    ${Breakpoints.H.small} {
        width: 14rem;

        .startDate input,
        .endDate input {
            text-align: left;
        }
    }

    ${(0,dist_index_esm.Zz)(dist_index_esm.Lc,dist_index_esm.VL)}
`,DateArrow=(0,styled_components_browser_esm.Ay)(ChevronRightIcon.A)`
    position: absolute;
    left: calc(50% - 0.75rem);
    z-index: 1;
`,StartDateFocusedBlock=styled_components_browser_esm.Ay.div`
    background: ${(0,cssVariables.sR)("background-element-info-emphasized")};
    height: 0.25rem;
    width: calc(50% - 1.5rem);

    position: absolute;
    bottom: 0;
    left: 0.75rem;
`,EndDateFocusedBlock=styled_components_browser_esm.Ay.div`
    background: ${(0,cssVariables.sR)("background-element-info-emphasized")};
    height: 0.25rem;
    width: calc(50% - 1.5rem);

    position: absolute;
    bottom: 0;
    right: 0.75rem;
`,dateRangeToDisplayText=(locale,displayFormat,dateRange)=>dateRange?{startText:(0,dateToDisplayText.R)(locale,displayFormat,dateRange.startDate),endText:(0,dateToDisplayText.R)(locale,displayFormat,dateRange.endDate)}:{startText:"",endText:""},isValidRange=(startDate,endDate)=>!startDate||!endDate||function compareDesc(dirtyDateLeft,dirtyDateRight){(0,requiredArgs.A)(2,arguments);var dateLeft=(0,toDate.A)(dirtyDateLeft),dateRight=(0,toDate.A)(dirtyDateRight),diff=dateLeft.getTime()-dateRight.getTime();return diff>0?-1:diff<0?1:diff}(startDate,endDate)>=0,PLACEMENT_TO_POPPER_PLACEMENT_MAP={center:"bottom",left:"bottom-start",right:"bottom-end"},DatepickerRangeInput=({minDate,maxDate,firstDayOfWeek,isDateBlocked,onClose,startPlaceholder,endPlaceholder,placement="left",label,onChange,displayFormat="dd/MM/yyyy",locale="en-US",value={},errorHandler,startInputId,endInputId,variant="normal",disabled,...rest})=>{const[triggerReference,setTriggerReference]=(0,react.useState)(void 0),[contentReference,setContentReference]=(0,react.useState)(void 0),[arrowReference,setArrowReference]=(0,react.useState)(void 0),localeObject=(0,useLocaleObject.Z)(locale),startDateRef=(0,react.useRef)(),endDateRef=(0,react.useRef)(),[focusedInput,setFocusedInput]=(0,react.useState)(null),[inputText,setInputText]=(0,react.useState)(dateRangeToDisplayText(localeObject,displayFormat,value)),[error,setError]=(0,react.useState)({startDate:!1,endDate:!1}),displayErrorMessage="string"==typeof errorHandler,mappedPlacement=(placement=>PLACEMENT_TO_POPPER_PLACEMENT_MAP[placement])(placement),{styles,attributes}=(0,usePopper.E)(triggerReference,contentReference,{placement:mappedPlacement,modifiers:[{name:"flip",enabled:!0},{name:"offset",enabled:!0,options:{offset:[0,15]}},{name:"arrow",options:{element:arrowReference}}]}),enforcedColorScheme=(0,useClosestColorScheme.J)(triggerReference),startId=(0,useGeneratedId.s)(startInputId),endId=(0,useGeneratedId.s)(endInputId);(0,react.useEffect)((()=>{focusedInput||!error.startDate&&!error.endDate||"function"!=typeof errorHandler||errorHandler()}),[error.startDate,error.endDate,focusedInput]),(0,react.useEffect)((()=>{setInputText(dateRangeToDisplayText(localeObject,displayFormat,value))}),[value.startDate,value.endDate,displayFormat,localeObject]),(0,react.useEffect)((()=>{switch(focusedInput){case index_esm.SW:startDateRef?.current&&startDateRef.current.focus();break;case index_esm.HG:endDateRef?.current&&endDateRef.current.focus()}}),[focusedInput]),((onChange,value)=>{const[oldValue,setOldValue]=(0,react.useState)(value);(0,react.useEffect)((()=>{oldValue!==value&&(setOldValue(value),onChange(value,oldValue))}),[value])})((newFocusedInput=>{!newFocusedInput&&onClose&&onClose()}),focusedInput);const handleDateChange=(startDate,endDate)=>{onChange&&onChange({startDate:startDate&&startOfDay(startDate),endDate:endDate&&endOfDay(endDate)})},PortalWrapper=(0,react.useMemo)((()=>enforcedColorScheme?"light"===enforcedColorScheme?EnforcedColorScheme.a2:EnforcedColorScheme.Ak:react.Fragment),[enforcedColorScheme]);return react.createElement(react.Fragment,null,react.createElement(DateRangeWrapper,{ref:setTriggerReference,...rest},react.createElement(Input.p,{id:startId,ref:startDateRef,autoComplete:"off",className:"startDate","data-testid":"start-date-input",label,placeholder:startPlaceholder,onFocus:()=>setFocusedInput(index_esm.SW),onBlur:()=>setFocusedInput(null),value:inputText.startText,width:"100%",onChange:({target:{value:inputValue}})=>{setInputText({startText:inputValue,endText:inputText.endText});const parsedDate=""===inputValue?void 0:(0,parse.A)(inputValue,displayFormat,new Date),validDate=(0,isValidDateText._)(parsedDate,inputValue,displayFormat),validRange=isValidRange(parsedDate,value.endDate),hasError=!!inputValue&&!validDate||!validRange;hasError||handleDateChange(parsedDate,value.endDate),setError((state=>({...state,startDate:hasError})))},"data-error":error.startDate,disabled}),focusedInput===index_esm.SW&&react.createElement(StartDateFocusedBlock,null),react.createElement(DateArrow,{color:(0,cssVariables.sR)(disabled?"foreground-disabled":"foreground-neutral-emphasized")}),react.createElement(Input.p,{id:endId,ref:endDateRef,tabIndex:inputText.startText?0:-1,autoComplete:"off",className:"endDate","data-testid":"end-date-input",placeholder:endPlaceholder,onFocus:()=>setFocusedInput(value.startDate?index_esm.HG:index_esm.SW),onBlur:()=>setFocusedInput(null),value:inputText.endText,onChange:({target:{value:inputValue}})=>{setInputText({startText:inputText.startText,endText:inputValue});const parsedDate=""===inputValue?void 0:(0,parse.A)(inputValue,displayFormat,new Date),validDate=(0,isValidDateText._)(parsedDate,inputValue,displayFormat),validRange=isValidRange(value.startDate,parsedDate),hasError=!!inputValue&&!validDate||!validRange;hasError||handleDateChange(value.startDate,parsedDate),setError((state=>({...state,endDate:hasError})))},width:"100%","data-error":error.endDate,disabled}),focusedInput===index_esm.HG&&react.createElement(EndDateFocusedBlock,null)),displayErrorMessage&&(error.startDate||error.endDate)&&!focusedInput&&react.createElement(HelperText.E,{mt:"1"},errorHandler||`error (${displayFormat})`),focusedInput&&(0,react_dom.createPortal)(react.createElement(PortalWrapper,null,react.createElement(DatepickerContentElements.z,{ref:setContentReference,style:styles.popper,...attributes.popper},react.createElement(DatepickerContentElements.i,{ref:setArrowReference,style:styles.arrow,...attributes.arrow}),react.createElement(Datepicker.t,{numberOfMonths:"normal"===variant&&window.innerWidth>=768?2:1,minBookingDays:1,startDate:value.startDate,endDate:value.endDate,minBookingDate:minDate,maxBookingDate:maxDate,firstDayOfWeek,focusedInput,onDatesChange:({focusedInput:focusedValue,startDate,endDate})=>{setFocusedInput(focusedValue),handleDateChange(startDate||void 0,endDate||void 0)},isDateBlocked,locale:localeObject}))),document.body))};try{DatepickerRangeInput.displayName="DatepickerRangeInput",DatepickerRangeInput.__docgenInfo={description:"",displayName:"DatepickerRangeInput",props:{startPlaceholder:{defaultValue:null,description:"Placeholder for start date.",name:"startPlaceholder",required:!1,type:{name:"string"}},endPlaceholder:{defaultValue:null,description:"Placeholder for end date.",name:"endPlaceholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label for the input.",name:"label",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Function that is used when datepicker closes without selected date.",name:"onClose",required:!1,type:{name:"() => void"}},value:{defaultValue:{value:"{}"},description:"Set the value for the date",name:"value",required:!1,type:{name:"DateRange"}},onChange:{defaultValue:null,description:"Function that is used when datepicker selects new date.",name:"onChange",required:!1,type:{name:"(change: DateRange) => void"}},minDate:{defaultValue:null,description:"Minimal date to select from.",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Maximum date to select from.",name:"maxDate",required:!1,type:{name:"Date"}},firstDayOfWeek:{defaultValue:{value:"1"},description:"Accepts a number for first day of the week from 0 (Sunday) to 6 (Saturday).",name:"firstDayOfWeek",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},isDateBlocked:{defaultValue:{value:"() => false"},description:"Function that runs for each date and returns boolean whether date is disabled or not.",name:"isDateBlocked",required:!1,type:{name:"(date: Date) => boolean"}},placement:{defaultValue:{value:"left"},description:"Used to align the datepicker in relation to input.\nDefault: left",name:"placement",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},displayFormat:{defaultValue:{value:"dd/MM/yyyy"},description:"String to format dates. See the format at [date-fns docs](https://date-fns.org/v2.29.3/docs/format)",name:"displayFormat",required:!1,type:{name:"string"}},locale:{defaultValue:{value:"en-US"},description:"String to define the locale in ISO-639-1",name:"locale",required:!1,type:{name:"string"}},errorHandler:{defaultValue:null,description:"Text to be shown if error filling the input\nor fn to be trigger as a callback when error",name:"errorHandler",required:!1,type:{name:"string | (() => void)"}},startInputId:{defaultValue:null,description:"The id to be assigned to the start date input",name:"startInputId",required:!1,type:{name:"string"}},endInputId:{defaultValue:null,description:"The id to be assigned to the end date input",name:"endInputId",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"normal"},description:"Show two (`'normal'`) or one (`'compact'`) month in the datepicker\n@value `'compact'` displays only a single month",name:"variant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"compact"'}]}},disabled:{defaultValue:null,description:"Determines whether the datePicker is disabled or not",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Datepicker/DatepickerRangeInput.tsx#DatepickerRangeInput"]={docgenInfo:DatepickerRangeInput.__docgenInfo,name:"DatepickerRangeInput",path:"src/components/Datepicker/DatepickerRangeInput.tsx#DatepickerRangeInput"})}catch(__react_docgen_typescript_loader_error){}const DateRangePicker_stories={title:"Form Elements/Datepicker/DateRangePicker",component:DatepickerRangeInput,argTypes:{firstDayOfWeek:{type:"number",defaultValue:1,control:{type:"number",min:1,max:6}},displayFormat:{control:"radio",options:["dd/MM/yyyy","E, d MMM, y","do LLLL"]},variant:{control:"radio",options:["normal","compact"]}},args:{label:"Rides between"}},Default={render:({onChange,...args})=>{const[range,setRange]=(0,react.useState)();return react.createElement(DatepickerRangeInput,{...args,value:range,onChange:newRange=>{onChange?.(newRange),setRange(newRange)}})}},Compact={...Default,args:{variant:"compact"}},TODAY=new Date,minDate=new Date;minDate.setMonth(TODAY.getMonth()-1);const maxDate=new Date;maxDate.setMonth(TODAY.getMonth()+1);const WithRestrictedDays={...Default,args:{minDate,maxDate}},WithDayAvailabilityFunction={...Default,args:{isDateBlocked:date=>date.getDate()%2==0}},WithErrorHandler={...Default,args:{errorHandler:"The expected format is dd/MM/yyyy"}},Disabled={...Default,args:{disabled:!0}},WithManualPlacement={...Default,args:{placement:"center"}},__namedExportsOrder=["Default","Compact","WithRestrictedDays","WithDayAvailabilityFunction","WithErrorHandler","Disabled","WithManualPlacement"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: ({\n    onChange,\n    ...args\n  }) => {\n    const [range, setRange] = useState<{\n      startDate?: Date;\n      endDate?: Date;\n    }>();\n    return <DateRangePicker {...args} value={range} onChange={newRange => {\n      onChange?.(newRange);\n      setRange(newRange);\n    }} />;\n  }\n}",...Default.parameters?.docs?.source}}},Compact.parameters={...Compact.parameters,docs:{...Compact.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    variant: 'compact'\n  }\n}",...Compact.parameters?.docs?.source}}},WithRestrictedDays.parameters={...WithRestrictedDays.parameters,docs:{...WithRestrictedDays.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    minDate,\n    maxDate\n  }\n}",...WithRestrictedDays.parameters?.docs?.source}}},WithDayAvailabilityFunction.parameters={...WithDayAvailabilityFunction.parameters,docs:{...WithDayAvailabilityFunction.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    isDateBlocked: date => date.getDate() % 2 === 0\n  }\n}",...WithDayAvailabilityFunction.parameters?.docs?.source}}},WithErrorHandler.parameters={...WithErrorHandler.parameters,docs:{...WithErrorHandler.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    errorHandler: 'The expected format is dd/MM/yyyy'\n  }\n}",...WithErrorHandler.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},WithManualPlacement.parameters={...WithManualPlacement.parameters,docs:{...WithManualPlacement.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    placement: 'center'\n  }\n}",...WithManualPlacement.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=src-components-Datepicker-docs-DateRangePicker-storybook-mdx.4f6fbc7b.iframe.bundle.js.map