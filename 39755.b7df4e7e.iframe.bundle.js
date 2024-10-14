"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[39755],{"./node_modules/@react-aria/menu/dist/useMenuTrigger.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>$168583247155ddda$export$dc9c12ed27dd1b49});var $2cbb7ca666678a14$exports={};$2cbb7ca666678a14$exports={"ar-AE":{longPressMessage:"اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"},"bg-BG":{longPressMessage:"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"},"cs-CZ":{longPressMessage:"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"},"da-DK":{longPressMessage:"Langt tryk eller tryk på Alt + pil ned for at åbne menuen"},"de-DE":{longPressMessage:"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"},"el-GR":{longPressMessage:"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"},"en-US":{longPressMessage:"Long press or press Alt + ArrowDown to open menu"},"es-ES":{longPressMessage:"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"},"et-EE":{longPressMessage:"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"},"fi-FI":{longPressMessage:"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"},"fr-FR":{longPressMessage:"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."},"he-IL":{longPressMessage:"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"},"hr-HR":{longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"},"hu-HU":{longPressMessage:"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"},"it-IT":{longPressMessage:"Premere a lungo o premere Alt + Freccia giù per aprire il menu"},"ja-JP":{longPressMessage:"長押しまたは Alt+下矢印キーでメニューを開く"},"ko-KR":{longPressMessage:"길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"},"lt-LT":{longPressMessage:"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."},"lv-LV":{longPressMessage:"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"},"nb-NO":{longPressMessage:"Langt trykk eller trykk Alt + PilNed for å åpne menyen"},"nl-NL":{longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"},"pl-PL":{longPressMessage:"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"},"pt-BR":{longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"},"pt-PT":{longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"},"ro-RO":{longPressMessage:"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"},"ru-RU":{longPressMessage:"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"},"sk-SK":{longPressMessage:"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"},"sl-SI":{longPressMessage:"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"},"sr-SP":{longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"},"sv-SE":{longPressMessage:"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"},"tr-TR":{longPressMessage:"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"},"uk-UA":{longPressMessage:"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"},"zh-CN":{longPressMessage:"长按或按 Alt + 向下方向键以打开菜单"},"zh-TW":{longPressMessage:"長按或按 Alt+向下鍵以開啟功能表"}};var useId=__webpack_require__("./node_modules/@react-aria/utils/dist/useId.mjs"),useLocalizedStringFormatter=__webpack_require__("./node_modules/@react-aria/i18n/dist/useLocalizedStringFormatter.mjs"),useLongPress=__webpack_require__("./node_modules/@react-aria/interactions/dist/useLongPress.mjs"),useOverlayTrigger=__webpack_require__("./node_modules/@react-aria/overlays/dist/useOverlayTrigger.mjs");function $168583247155ddda$export$dc9c12ed27dd1b49(props,state,ref){let{type="menu",isDisabled,trigger="press"}=props,menuTriggerId=(0,useId.Bi)(),{triggerProps,overlayProps}=(0,useOverlayTrigger.o)({type},state,ref),stringFormatter=(0,useLocalizedStringFormatter.o)(function $parcel$interopDefault(a){return a&&a.__esModule?a.default:a}($2cbb7ca666678a14$exports),"@react-aria/menu"),{longPressProps}=(0,useLongPress.H)({isDisabled:isDisabled||"longPress"!==trigger,accessibilityDescription:stringFormatter.format("longPressMessage"),onLongPressStart(){state.close()},onLongPress(){state.open("first")}}),pressProps={onPressStart(e){"touch"===e.pointerType||"keyboard"===e.pointerType||isDisabled||state.open("virtual"===e.pointerType?"first":null)},onPress(e){"touch"!==e.pointerType||isDisabled||state.toggle()}};return delete triggerProps.onPress,{menuTriggerProps:{...triggerProps,..."press"===trigger?pressProps:longPressProps,id:menuTriggerId,onKeyDown:e=>{if(!isDisabled&&("longPress"!==trigger||e.altKey)&&ref&&ref.current)switch(e.key){case"Enter":case" ":if("longPress"===trigger)return;case"ArrowDown":"continuePropagation"in e||e.stopPropagation(),e.preventDefault(),state.toggle("first");break;case"ArrowUp":"continuePropagation"in e||e.stopPropagation(),e.preventDefault(),state.toggle("last");break;default:"continuePropagation"in e&&e.continuePropagation()}}},menuProps:{...overlayProps,"aria-labelledby":menuTriggerId,autoFocus:state.focusStrategy||!0,onClose:state.close}}}},"./node_modules/@react-stately/list/dist/useSingleSelectListState.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>$a0d645289fe9b86b$export$e7f05e985daf4b5f});var _useListState_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@react-stately/list/dist/useListState.mjs"),_react_stately_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@react-stately/utils/dist/useControlledState.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props){var _props_defaultSelectedKey;let[selectedKey,setSelectedKey]=(0,_react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.P)(props.selectedKey,null!==(_props_defaultSelectedKey=props.defaultSelectedKey)&&void 0!==_props_defaultSelectedKey?_props_defaultSelectedKey:null,props.onSelectionChange),selectedKeys=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>null!=selectedKey?[selectedKey]:[]),[selectedKey]),{collection,disabledKeys,selectionManager}=(0,_useListState_mjs__WEBPACK_IMPORTED_MODULE_2__.p)({...props,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys,onSelectionChange:keys=>{var _keys_values_next_value;let key=null!==(_keys_values_next_value=keys.values().next().value)&&void 0!==_keys_values_next_value?_keys_values_next_value:null;key===selectedKey&&props.onSelectionChange&&props.onSelectionChange(key),setSelectedKey(key)}}),selectedItem=null!=selectedKey?collection.getItem(selectedKey):null;return{collection,disabledKeys,selectionManager,selectedKey,setSelectedKey,selectedItem}}}}]);