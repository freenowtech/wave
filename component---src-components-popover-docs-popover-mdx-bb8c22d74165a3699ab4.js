(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{Hl01:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return O})),n.d(t,"default",(function(){return d}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var o=n("/FXl"),r=n("TjRS"),a=n("ZFoC"),b=n("ZcQ/"),c=n("oTEE"),l=n("hWRK"),p=n("J+1L"),i=n("GhEE"),s=n("j2GE"),m=n("fyMY");n("aD51");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var O={};void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Popover/docs/Popover.mdx"}});var j={_frontmatter:O},g=r.a;function d(e){var t,n=e.components,d=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(g,u({},j,d,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"popover"},"Popover"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Primary UI element for content whose visibility can be toggled with a click on a trigger element")),Object(o.b)("p",null,"Renders a UI component that opens a popup dialog when user clicks on a trigger element."),Object(o.b)("br",null),Object(o.b)("h3",{id:"popover-trigger--content"},"Popover Trigger & Content"),Object(o.b)("p",null,"Popover components consist of 2 main elements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Popover Trigger")," – an element that shows/hides the Popover."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Popover Content")," – card with content that is toggled by the Trigger.",Object(o.b)("br",null),Object(o.b)("br",null))),Object(o.b)("p",null,"For ",Object(o.b)("strong",{parentName:"p"},"Trigger")," you can use just a plain string (for default variant), or following components from Wave:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"<","Text",">")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"<","Button",">")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"<","Button",">"," with Icon")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"<","Icon",">")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"<","Link",">"))),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Popover Content")," acts as a container for any content: text, form, or anything else..."),Object(o.b)("br",null),Object(o.b)("h3",{id:"difference-from-a-tooltip-component"},"Difference from a Tooltip component"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Popover is toggled by clicking on (not hovering over) the Trigger. The second click (or click outside the Popover) hides the Popover."),Object(o.b)("li",{parentName:"ul"},"Popover scrolls with the page"),Object(o.b)("li",{parentName:"ul"},"Popover content and trigger are not limited to text.")),Object(o.b)("br",null),Object(o.b)("h3",{id:"style-props"},"Style Props"),Object(o.b)("p",null,"The Popover supports:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"placement")," prop for specifying the Popover content attachment in relation to the Popover trigger"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"offset")," prop for the margin between Trigger and Popover card.",Object(o.b)("br",null),Object(o.b)("br",null))),Object(o.b)("hr",null),Object(o.b)("br",null),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)(m.a,{mdxType:"PopoverPropsTable"}),Object(o.b)("br",null),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"default-pass-only-string-as-trigger"},"Default (pass only string as trigger)"),Object(o.b)(b.a,{mdxType:"ItemWrapper"},Object(o.b)(s.a,{content:Object(o.b)(p.a,{mdxType:"Text"},"Content for the Popover. Can contain Icons, Forms or other elements."),mdxType:"Popover"},"Trigger")),Object(o.b)("pre",null,Object(o.b)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Popover content={<Text>Content for the Popover. Can contain Icons, Forms or other elements.</Text>}>\n    Trigger\n</Popover>\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"with-button-as-trigger"},"With Button as trigger"),Object(o.b)(b.a,{mdxType:"ItemWrapper"},Object(o.b)(s.a,{content:Object(o.b)(i.a,{mdxType:"Link"},"Open in Payment CRM"),mdxType:"Popover"},Object(o.b)(l.a,{size:"small",variant:"secondary",mdxType:"Button"},Object(o.b)(c.a,{size:20,style:{marginRight:5},mdxType:"SettingsIcon"})," Manage Booking"))),Object(o.b)("pre",null,Object(o.b)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Popover content={<Link>Open in Payment CRM</Link>}>\n   <Button size='small' variant=\"secondary\"><SettingsIcon size={20} /> Manage Booking</Button>\n</Popover>\n")),Object(o.b)("br",null),Object(o.b)("h3",{id:"bulk-actions"},"Bulk Actions"),Object(o.b)(b.a,{mdxType:"ItemWrapper"},Object(o.b)(s.a,{content:Object(o.b)(i.a,{mdxType:"Link"},"Revert Action"),mdxType:"Popover"},Object(o.b)(l.a,{size:"small",variant:"secondary",mdxType:"Button"},"..."))),Object(o.b)("pre",null,Object(o.b)("code",u({parentName:"pre"},{className:"language-jsx"}),"<Popover content={<Link>Revert Action</Link>}>\n    <Button size='small' variant=\"secondary\">...</Button>\n</Popover>\n")),Object(o.b)("br",null),Object(o.b)("h2",{id:"playground"},"Playground"),Object(o.b)(a.b,{__position:13,__code:"<Popover\n  content={\n    <Text>\n      Content for the Popover. Can contain Icons, Forms or other elements.\n    </Text>\n  }\n>\n  Trigger\n</Popover>",__scope:(t={props:d,DefaultLayout:r.a,Playground:a.b,ItemWrapper:b.a,SettingsIcon:c.a,Button:l.a,Text:p.a,Link:i.a,Popover:s.a,PopoverPropsTable:m.a},t.DefaultLayout=r.a,t._frontmatter=O,t),mdxType:"Playground"},Object(o.b)(s.a,{content:Object(o.b)(p.a,{mdxType:"Text"},"Content for the Popover. Can contain Icons, Forms or other elements."),mdxType:"Popover"},"Trigger")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Popover/docs/Popover.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-popover-docs-popover-mdx-bb8c22d74165a3699ab4.js.map