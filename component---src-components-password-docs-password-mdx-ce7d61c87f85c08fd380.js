(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{coPj:function(e,t,s){"use strict";s.r(t),s.d(t,"_frontmatter",(function(){return p})),s.d(t,"default",(function(){return m}));s("5hJT"),s("W1QL"),s("K/PF"),s("t91x"),s("75LO"),s("PJhk");var a=s("/FXl"),o=s("TjRS"),n=s("ZFoC"),r=s("/VS8"),l=s("a7L+"),d=s("VuFt"),i=s("jWjX"),b=s("YhlO");s("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Password/docs/Password.mdx"}});var w={_frontmatter:p},u=o.a;function m(e){var t,s=e.components,m=function(e,t){if(null==e)return{};var s,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,["components"]);return Object(a.b)(u,c({},w,m,{components:s,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"password"},"Password"),Object(a.b)("p",null,"The component to ask for a password or set a password."),Object(a.b)("p",null,"It has two modes a user can toggle between with a button:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hidden")," — the password is hidden"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"shown")," — the password is shown as plain text")),Object(a.b)("h2",{id:"use-cases"},"Use cases"),Object(a.b)("h3",{id:"login"},"Login"),Object(a.b)("p",null,"By default, ",Object(a.b)("inlineCode",{parentName:"p"},"<Password />")," has the settings to be used for login screen or any case when a user\nmust provide the existing password."),Object(a.b)("p",null,"In that case the browser, or the password manager will recognise the password field and will offer autocomplete."),Object(a.b)("h3",{id:"sign-up-or-reset-password"},"Sign up or reset password"),Object(a.b)("p",null,"If you are in the situation when a user needs to create a new password, set ",Object(a.b)("inlineCode",{parentName:"p"},"purpose")," prop to ",Object(a.b)("inlineCode",{parentName:"p"},"new-password"),":"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),'<Password purpose="new-password" label="New password" />\n')),Object(a.b)("p",null,"This will allow password managers to generate a password for the user automatically."),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(d.a,{mdxType:"PasswordPropsTable"}),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)(n.b,{__position:1,__code:'<div>\n  <ControlledPassword label="Password" />\n</div>\n<div>\n  <ControlledPassword label="Password" width="100%" my={2} />\n</div>\n\n<Box display="flex" flexDirection="column">\n  <ControlledPassword label="Password" />\n  <ControlledPassword label="Password" width="100%" my={2} />\n</Box>',__scope:(t={props:m,DefaultLayout:o.a,Playground:n.b,Combination:r.a,ControlledPassword:l.a,PasswordPropsTable:d.a,Box:i.a,Video:b.a},t.DefaultLayout=o.a,t._frontmatter=p,t),mdxType:"Playground"},Object(a.b)("div",null,Object(a.b)(l.a,{label:"Password",mdxType:"ControlledPassword"})),Object(a.b)("div",null,Object(a.b)(l.a,{label:"Password",width:"100%",my:2,mdxType:"ControlledPassword"})),Object(a.b)(i.a,{display:"flex",flexDirection:"column",mdxType:"Box"},Object(a.b)(l.a,{label:"Password",mdxType:"ControlledPassword"}),Object(a.b)(l.a,{label:"Password",width:"100%",my:2,mdxType:"ControlledPassword"}))),Object(a.b)("h2",{id:"accessibility"},"Accessibility"),Object(a.b)("p",null,"The component is done with accessibility in mind and has built-in English aria labels for the button and the component state."),Object(a.b)("p",null,'When screen reader user clicks the toggle mode button, the screen reader announces the new state "Your password is hidden/shown":'),Object(a.b)(b.a,{src:"/public/password/a11y.mp4",mdxType:"Video"}),Object(a.b)("p",null,"If you project supports multiple languages it is recommended to pass translated labels to the component:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"<Password label=\"Password\" aria={{\n    showPasswordButton: 'Show password',\n    hidePasswordButton: 'Hide password',\n    messagePasswordIsHidden: 'Your password is hidden',\n    messagePasswordIsShown: 'Your password is shown'\n}}/>\n")),Object(a.b)("p",null,"The keys to set are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"showPasswordButton")," - the label of the button when the password is hidden"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hidePasswordButton")," - the label of the button when the password is shown"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"messagePasswordIsHidden")," - the message to announce the state of the component after the password value is hidden"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"messagePasswordIsShown")," - the message to announce the state of the component after the password value is shown")),Object(a.b)("h2",{id:"combinations"},"Combinations"),Object(a.b)(r.a,{variant:["boxed","bottom-lined"],size:["medium","small"],disabled:[!1,!0],inverted:[!1,!0],error:[!1,!0],mdxType:"Combination"},(function(e,t){return Object(a.b)(l.a,c({key:t},e,{label:"Password",value:"my-password",mdxType:"ControlledPassword"}))})))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Password/docs/Password.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-password-docs-password-mdx-ce7d61c87f85c08fd380.js.map