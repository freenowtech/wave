(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{ztl8:function(e,a,l){"use strict";l.r(a),l.d(a,"_frontmatter",(function(){return d})),l.d(a,"default",(function(){return m}));l("5hJT"),l("W1QL"),l("K/PF"),l("t91x"),l("75LO"),l("PJhk");var t=l("/FXl"),n=l("TjRS"),o=l("dEMt"),b=l("DG2S"),r=l("Xp6s"),i=l("vzL1");l("aD51");function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e}).apply(this,arguments)}var d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Table/docs/Table.mdx"}});var s={_frontmatter:d},p=n.a;function m(e){var a=e.components,l=function(e,a){if(null==e)return{};var l,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)l=o[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,["components"]);return Object(t.b)(p,c({},s,l,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"table"},"Table"),Object(t.b)("p",null,"Tables are used to render tabular data in a basic grid, making it easier for people to scan it. Tables are comprised of cells, columns, and rows."),Object(t.b)(o.a,{mdxType:"LiveTable"}),Object(t.b)("pre",null,Object(t.b)("code",c({parentName:"pre"},{className:"language-jsx"}),'<Table rowStyle="zebra">\n    <caption style={{ captionSide: \'bottom\', padding: \'1rem\' }}>The wonderful Wave list</caption>\n    <thead>\n        <TableRow>\n            <TableHeaderCell scope="col">Name</TableHeaderCell>\n            <TableHeaderCell scope="col">E-Mail</TableHeaderCell>\n        </TableRow>\n    </thead>\n    <tbody>\n        <TableRow>\n            <TableCell scope="row">Luka Hartwig</TableCell>\n            <TableCell>l.hartwig@mytaxi.com</TableCell>\n        </TableRow>\n        <TableRow>\n            <TableCell scope="row">Alba Gonzales</TableCell>\n            <TableCell>alba.gonzales@free-now.com</TableCell>\n        </TableRow>\n        <TableRow>\n            <TableCell scope="row">Alexis Duran</TableCell>\n            <TableCell>alexis.duran@free-now.com</TableCell>\n        </TableRow>\n    </tbody>\n</Table>\n')),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Tables are not width 100% by default, if required, you must set ",Object(t.b)("inlineCode",{parentName:"p"},"width: 100%")," to the ",Object(t.b)("inlineCode",{parentName:"p"},"Table")," Component.\nTo better understand some of the props in the above table, an in-depth guide of accessible tables can be found at ",Object(t.b)("a",c({parentName:"p"},{href:"https://a11y-101.com/development/tables"}),"https://a11y-101.com/development/tables"))),Object(t.b)("h2",{id:"active-row"},"Active Row"),Object(t.b)("p",null,"To highlight an active (or selected) row, you can add set ",Object(t.b)("inlineCode",{parentName:"p"},"active")," to true on the ",Object(t.b)("inlineCode",{parentName:"p"},"TableRow")," component. This will mark\nthe row as active and change the background color."),Object(t.b)(b.a,{mdxType:"ActiveRowTable"}),Object(t.b)("pre",null,Object(t.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"<TableRow active={true}>\n    <TableCell><Checkbox checked={true} /></TableCell>\n    <TableCell>Alex Ponomarenko</TableCell>\n    <TableCell>a.ponomarenko@mytaxi.com</TableCell>\n    <TableCell>Booker</TableCell>\n    <TableCell>Product</TableCell>\n</TableRow>\n")),Object(t.b)("h2",{id:"complex-data"},"Complex Data"),Object(t.b)("p",null,"When dealing with complex data, it is possible to use up to two lines of text in one row. Keep in mind, that the smallest row size\nwill not work when you have multiple lines in one cells."),Object(t.b)(r.a,{mdxType:"ComplexDataTable"}),Object(t.b)("h2",{id:"loading-state"},"Loading State"),Object(t.b)(i.a,{mdxType:"SkeletonTable"}),Object(t.b)("pre",null,Object(t.b)("code",c({parentName:"pre"},{className:"language-jsx"}),"<Table rowStyle=\"zebra\">\n    <thead>\n        <TableRow>\n            <TableHeaderCell style={{ width: '10rem', whiteSpace: 'normal' }}>Creation Date / Activity</TableHeaderCell>\n            <TableHeaderCell style={{ width: '6.5rem' }}>Name</TableHeaderCell>\n            <TableHeaderCell style={{ width: '3rem' }}>Status</TableHeaderCell>\n            <TableHeaderCell style={{ width: '7.5rem' }}>Phone</TableHeaderCell>\n            <TableHeaderCell style={{ width: '13rem' }}>E-Mail</TableHeaderCell>\n            <TableHeaderCell style={{ width: '6.5rem' }}>Actions</TableHeaderCell>\n        </TableRow>\n    </thead>\n    <tbody>\n        {loading && [0, 1, 2, 3, 4].map(key => <TableRowSkeleton key={key} columns={6} />)}\n    </tbody>\n</Table>\n")),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"By default cells has ",Object(t.b)("inlineCode",{parentName:"p"},"whiteSpace")," set to ",Object(t.b)("inlineCode",{parentName:"p"},"nowrap")," which will make cells expand depending on the content instead the given ",Object(t.b)("inlineCode",{parentName:"p"},"width"),".\nIf you really want to fix a width make sure to override ",Object(t.b)("inlineCode",{parentName:"p"},"whiteSpace")," property too. On top of that make sure to check your table a11y.\nAn in-depth guide of accessible tables can be found at ",Object(t.b)("a",c({parentName:"p"},{href:"https://a11y-101.com/development/tables"}),"https://a11y-101.com/development/tables"))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Table/docs/Table.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-table-docs-table-mdx-22e8c417aa145842428f.js.map