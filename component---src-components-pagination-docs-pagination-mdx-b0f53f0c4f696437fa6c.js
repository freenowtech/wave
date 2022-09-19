(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{uT1N:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a("Fcif"),l=a("+I+c"),i=(a("mXGw"),a("/FXl")),o=a("TjRS"),s=a("J+1L"),r=a("Zzo/"),b=a("SoUW"),c=a("8X4S"),p=(a("aD51"),["components"]),u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!Object.prototype.hasOwnProperty.call(u,"__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Pagination/docs/Pagination.mdx"}});var g={_frontmatter:u},m=o.a;function d(e){var t=e.components,a=Object(l.a)(e,p);return Object(i.b)(m,Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"pagination"},"Pagination"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use pagination to split long datasets like tables and lists"),Object(i.b)("li",{parentName:"ul"},"As a rule of thumb set pagination after ",Object(i.b)("strong",{parentName:"li"},"10, 15 or 20 items")),Object(i.b)("li",{parentName:"ul"},"Use small navigation on mobile and for small datasets")),Object(i.b)("h3",{id:"normal"},"Normal"),Object(i.b)(c.a,{mdxType:"NormalPagination"}),Object(i.b)("h3",{id:"small"},"Small"),Object(i.b)(c.c,{mdxType:"SmallPagination"}),Object(i.b)("h3",{id:"normal-with-multiple-page-sizes"},"Normal with multiple page sizes"),Object(i.b)(c.b,{mdxType:"PaginationWithPageSize"}),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"full-example"},"Full example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'export default () => {\n    const PAGE_SIZE = 20;\n    const TOTAL_ITEMS = 200;\n    \n    const [currentPage, setCurrentPage] = useState(1);\n\n    const lastPage = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);\n\n    return (\n        <Pagination\n            value={currentPage}\n            pageSize={PAGE_SIZE}\n            totalItems={TOTAL_ITEMS}\n            label={\n                <Text weak>\n                    Page{\' \'}\n                    <Text as="b" fontWeight="semibold" weak>\n                        {currentPage} of {lastPage}\n                    </Text>\n                </Text>\n            }\n            onNextPage={() => setCurrentPage(current => current + 1)}\n            onPrevPage={() => setCurrentPage(current => current - 1)}\n            onSkipForward={() => setCurrentPage(lastPage)}\n            onSkipBackward={() => setCurrentPage(1)}\n        />\n    );\n};\n')),Object(i.b)("h3",{id:"label"},"Label"),Object(i.b)("p",null,"The label should be used to display the current state of the pagination which\ntypically consists of the current page and the total number of pages. This can be as simple as passing a string:"),Object(i.b)(r.a,{value:1,pageSize:20,totalItems:200,label:"Page 1 of 20",mdxType:"Pagination"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<Pagination\n    value={currentPage}\n    pageSize={PAGE_SIZE}\n    totalItems={TOTAL_ITEMS}\n    label={`Page ${currentPage} of ${Math.ceil(TOTAL_ITEMS / PAGE_SIZE)}`}\n/>\n")),Object(i.b)("p",null,"To display a label like in the examples above you can pass a custom component:"),Object(i.b)(r.a,{value:1,pageSize:20,totalItems:200,label:Object(i.b)(s.a,{weak:!0,mdxType:"Text"},"Page"," ",Object(i.b)(s.a,{as:"b",fontWeight:"semibold",weak:!0,mdxType:"Text"},1," of ",20)),mdxType:"Pagination"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Pagination\n    value={currentPage}\n    pageSize={PAGE_SIZE}\n    totalItems={TOTAL_ITEMS}\n    label={\n        <Text weak>\n            Page{\' \'}\n            <Text as="b" fontWeight="semibold" weak>\n                {currentPage} of {lastPage}\n            </Text>\n        </Text>\n    }\n/>\n')),Object(i.b)("h3",{id:"accessibility"},"Accessibility"),Object(i.b)("p",null,"It is recommended to set ARIA labels to provide accessible names for the pagination inputs.\nThis also helps when ",Object(i.b)("a",{parentName:"p",href:"#testing"},"testing"),". You can use the following props to provide translated\nARIA labels."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Pagination\n    ariaLabelFirst="First"\n    ariaLabelPrevious="Previous"\n    ariaLabelNext="Next"\n    ariaLabelLast="Last"\n    ariaLabelSelectPageSizeContainer="Select page size container" /* Only if you are using the `pageSizes` prop */\n/>\n')),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)(b.a,{mdxType:"PaginationPropsTable"}),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"In tests you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"aria-label")," attributes to select the individual buttons.\nHere is an example using ",Object(i.b)("inlineCode",{parentName:"p"},"@testing-library/react"),"."),Object(i.b)("p",null,"You can see how to test the page sizes select in ",Object(i.b)("a",{parentName:"p",href:"https://wave.free-now.com/components/select-list"},"Wave's SelectList")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"test('should select by aria-label', () => {\n    const { getByRole } = render(<Pagination value={1} pageSize={20} totalItems={200} />);\n\n    expect(getByRole('button', { name: 'First' })).toBeInTheDocument();\n    expect(getByRole('button', { name: 'Previous' })).toBeInTheDocument();\n    expect(getByRole('button', { name: 'Next' })).toBeInTheDocument();\n    expect(getByRole('button', { name: 'Last' })).toBeInTheDocument();\n});\n")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,"__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Pagination/docs/Pagination.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-pagination-docs-pagination-mdx-b0f53f0c4f696437fa6c.js.map