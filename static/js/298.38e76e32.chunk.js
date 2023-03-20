"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298],{1782:function(e,t,n){var a=n(1413),r=n(5987),o=n(2791),i=n(5984),l=n(781),s=n(3329),c=["label","name","handleChange"];t.Z=function(e){var t=e.label,n=e.name,d=e.handleChange,u=(0,r.Z)(e,c),p=(0,o.useMemo)((function(){return(0,i.x0)()}),[]),m=(0,o.useMemo)((function(){return n||p}),[n,p]);return(0,s.jsx)(l.Z,(0,a.Z)({fullWidth:!0,margin:"normal",label:t,variant:"filled",name:m,id:p,onChange:d},u))}},9298:function(e,t,n){n.r(t),n.d(t,{default:function(){return Oe}});var a=n(9439),r=n(9434),o=n(2791),i=n(5987),l="section_section__Ytira",s="section_header__vtq7c",c=n(3329),d=["title","children"];var u=function(e){e.title;var t=e.children,n=(0,i.Z)(e,d),a=n.button,r=n.style;return(0,c.jsxs)("section",{className:"".concat(l," ").concat(r),children:[(0,c.jsx)("div",{className:s,children:a}),t]})},p=n(493),m=n(9259),h=n(4223),f=(0,h.Z)((0,c.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),v=n(6151),x=n(4942),g=n(3366),Z=n(7462),b=n(8182),j=n(4419),C=n(6248),y=n(4036),S=n(1923),w=n(627),_=n(5527),N=n(1046),k=n(7630),W=n(5878),M=n(1217);function D(e){return(0,M.Z)("MuiDialog",e)}var B=(0,W.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var P=o.createContext({}),T=n(5119),F=n(3967),A=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],R=(0,k.ZP)(T.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,t){return t.backdrop}})({zIndex:-1}),z=(0,k.ZP)(S.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,t){return t.root}})({"@media print":{position:"absolute !important"}}),E=(0,k.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,t){var n=e.ownerState;return[t.container,t["scroll".concat((0,y.Z)(n.scroll))]]}})((function(e){var t=e.ownerState;return(0,Z.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===t.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===t.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),I=(0,k.ZP)(_.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,t){var n=e.ownerState;return[t.paper,t["scrollPaper".concat((0,y.Z)(n.scroll))],t["paperWidth".concat((0,y.Z)(String(n.maxWidth)))],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})((function(e){var t=e.theme,n=e.ownerState;return(0,Z.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===n.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===n.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===n.maxWidth&&(0,x.Z)({maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):"".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit)},"&.".concat(B.paperScrollBody),(0,x.Z)({},t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),n.maxWidth&&"xs"!==n.maxWidth&&(0,x.Z)({maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)},"&.".concat(B.paperScrollBody),(0,x.Z)({},t.breakpoints.down(t.breakpoints.values[n.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&(0,x.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(B.paperScrollBody),{margin:0,maxWidth:"100%"}))})),L=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiDialog"}),a=(0,F.Z)(),r={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},i=n["aria-describedby"],l=n["aria-labelledby"],s=n.BackdropComponent,d=n.BackdropProps,u=n.children,p=n.className,m=n.disableEscapeKeyDown,h=void 0!==m&&m,f=n.fullScreen,v=void 0!==f&&f,x=n.fullWidth,S=void 0!==x&&x,k=n.maxWidth,W=void 0===k?"sm":k,M=n.onBackdropClick,B=n.onClose,T=n.open,L=n.PaperComponent,Y=void 0===L?_.Z:L,H=n.PaperProps,q=void 0===H?{}:H,U=n.scroll,J=void 0===U?"paper":U,K=n.TransitionComponent,O=void 0===K?w.Z:K,X=n.transitionDuration,V=void 0===X?r:X,$=n.TransitionProps,G=(0,g.Z)(n,A),Q=(0,Z.Z)({},n,{disableEscapeKeyDown:h,fullScreen:v,fullWidth:S,maxWidth:W,scroll:J}),ee=function(e){var t=e.classes,n=e.scroll,a=e.maxWidth,r=e.fullWidth,o=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,y.Z)(n))],paper:["paper","paperScroll".concat((0,y.Z)(n)),"paperWidth".concat((0,y.Z)(String(a))),r&&"paperFullWidth",o&&"paperFullScreen"]};return(0,j.Z)(i,D,t)}(Q),te=o.useRef(),ne=(0,C.Z)(l),ae=o.useMemo((function(){return{titleId:ne}}),[ne]);return(0,c.jsx)(z,(0,Z.Z)({className:(0,b.Z)(ee.root,p),closeAfterTransition:!0,components:{Backdrop:R},componentsProps:{backdrop:(0,Z.Z)({transitionDuration:V,as:s},d)},disableEscapeKeyDown:h,onClose:B,open:T,ref:t,onClick:function(e){te.current&&(te.current=null,M&&M(e),B&&B(e,"backdropClick"))},ownerState:Q},G,{children:(0,c.jsx)(O,(0,Z.Z)({appear:!0,in:T,timeout:V,role:"presentation"},$,{children:(0,c.jsx)(E,{className:(0,b.Z)(ee.container),onMouseDown:function(e){te.current=e.target===e.currentTarget},ownerState:Q,children:(0,c.jsx)(I,(0,Z.Z)({as:Y,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":ne},q,{className:(0,b.Z)(ee.paper,q.className),ownerState:Q,children:(0,c.jsx)(P.Provider,{value:ae,children:u})}))})}))}))}));function Y(e){return(0,M.Z)("MuiDialogActions",e)}(0,W.Z)("MuiDialogActions",["root","spacing"]);var H=["className","disableSpacing"],q=(0,k.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,Z.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),U=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiDialogActions"}),a=n.className,r=n.disableSpacing,o=void 0!==r&&r,i=(0,g.Z)(n,H),l=(0,Z.Z)({},n,{disableSpacing:o}),s=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,j.Z)(n,Y,t)}(l);return(0,c.jsx)(q,(0,Z.Z)({className:(0,b.Z)(s.root,a),ownerState:l,ref:t},i))}));function J(e){return(0,M.Z)("MuiDialogContent",e)}(0,W.Z)("MuiDialogContent",["root","dividers"]);function K(e){return(0,M.Z)("MuiDialogTitle",e)}var O=(0,W.Z)("MuiDialogTitle",["root"]),X=["className","dividers"],V=(0,k.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dividers&&t.dividers]}})((function(e){var t=e.theme,n=e.ownerState;return(0,Z.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}:(0,x.Z)({},".".concat(O.root," + &"),{paddingTop:0}))})),$=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiDialogContent"}),a=n.className,r=n.dividers,o=void 0!==r&&r,i=(0,g.Z)(n,X),l=(0,Z.Z)({},n,{dividers:o}),s=function(e){var t=e.classes,n={root:["root",e.dividers&&"dividers"]};return(0,j.Z)(n,J,t)}(l);return(0,c.jsx)(V,(0,Z.Z)({className:(0,b.Z)(s.root,a),ownerState:l,ref:t},i))})),G=n(8519);function Q(e){return(0,M.Z)("MuiTypography",e)}(0,W.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var ee=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],te=(0,k.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,y.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(e){var t=e.theme,n=e.ownerState;return(0,Z.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),ne={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ae={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},re=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiTypography"}),a=function(e){return ae[e]||e}(n.color),r=(0,G.Z)((0,Z.Z)({},n,{color:a})),o=r.align,i=void 0===o?"inherit":o,l=r.className,s=r.component,d=r.gutterBottom,u=void 0!==d&&d,p=r.noWrap,m=void 0!==p&&p,h=r.paragraph,f=void 0!==h&&h,v=r.variant,x=void 0===v?"body1":v,C=r.variantMapping,S=void 0===C?ne:C,w=(0,g.Z)(r,ee),_=(0,Z.Z)({},r,{align:i,color:a,className:l,component:s,gutterBottom:u,noWrap:m,paragraph:f,variant:x,variantMapping:S}),k=s||(f?"p":S[x]||ne[x])||"span",W=function(e){var t=e.align,n=e.gutterBottom,a=e.noWrap,r=e.paragraph,o=e.variant,i=e.classes,l={root:["root",o,"inherit"!==e.align&&"align".concat((0,y.Z)(t)),n&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return(0,j.Z)(l,Q,i)}(_);return(0,c.jsx)(te,(0,Z.Z)({as:k,ref:t,ownerState:_,className:(0,b.Z)(W.root,l)},w))}));function oe(e){return(0,M.Z)("MuiDialogContentText",e)}(0,W.Z)("MuiDialogContentText",["root"]);var ie=["children","className"],le=(0,k.ZP)(re,{shouldForwardProp:function(e){return(0,k.FO)(e)||"classes"===e},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),se=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiDialogContentText"}),a=n.className,r=(0,g.Z)(n,ie),o=function(e){var t=e.classes,n=(0,j.Z)({root:["root"]},oe,t);return(0,Z.Z)({},t,n)}(r);return(0,c.jsx)(le,(0,Z.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:r,className:(0,b.Z)(o.root,a)},n,{classes:o}))})),ce=["className","id"],de=(0,k.ZP)(re,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),ue=o.forwardRef((function(e,t){var n=(0,N.Z)({props:e,name:"MuiDialogTitle"}),a=n.className,r=n.id,i=(0,g.Z)(n,ce),l=n,s=function(e){var t=e.classes;return(0,j.Z)({root:["root"]},K,t)}(l),d=o.useContext(P).titleId,u=void 0===d?r:d;return(0,c.jsx)(de,(0,Z.Z)({component:"h2",className:(0,b.Z)(s.root,a),ownerState:l,ref:t,variant:"h6",id:null!=r?r:u},i))})),pe=(0,h.Z)((0,c.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),me="dialog_delBtn__Pw4IU";function he(e){var t=e.onDeleteContact,n=e.contact,r=o.useState(!1),i=(0,a.Z)(r,2),l=i[0],s=i[1],d=function(){s(!1)};return(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{className:me,variant:"outlined",onClick:function(){s(!0)},children:(0,c.jsx)(m.Z,{sx:{fontSize:20,color:"red"},children:(0,c.jsx)(pe,{})})}),(0,c.jsxs)(L,{open:l,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,c.jsx)(ue,{id:"alert-dialog-title"}),(0,c.jsx)($,{children:(0,c.jsx)(se,{id:"alert-dialog-description",children:"Are you sure that you want to delete this contact?"})}),(0,c.jsxs)(U,{children:[(0,c.jsx)(v.Z,{onClick:d,children:"Cansel"}),(0,c.jsx)(v.Z,{onClick:function(){return t(n.id)},autoFocus:!0,children:"Delete"})]})]})]})}var fe=(0,h.Z)((0,c.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),ve=(0,h.Z)((0,c.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone"),xe="list-item_listItem__ynxBH",ge="list-item_text__oTwJB",Ze="list-item_data__r4YPF",be="list-item_contactField__8dfH1",je="list-item_editBtn__04SxN";var Ce=function(e){var t=e.onDeleteContact,n=e.onEditContact,a=e.contact;return(0,c.jsxs)(p.Z,{className:xe,children:[(0,c.jsxs)("p",{className:ge,children:[(0,c.jsxs)("span",{className:be,children:[(0,c.jsx)(m.Z,{sx:{fontSize:15},children:(0,c.jsx)(fe,{})}),(0,c.jsx)("span",{className:Ze,children:a.name})]}),(0,c.jsxs)("span",{className:be,children:[(0,c.jsx)(m.Z,{sx:{fontSize:15},children:(0,c.jsx)(ve,{})}),(0,c.jsx)("span",{className:Ze,children:a.number})]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(he,{onDeleteContact:t,contact:a}),(0,c.jsx)("button",{className:je,type:"button",onClick:function(){n(a.id)},children:(0,c.jsx)(m.Z,{sx:{fontSize:16,color:"green"},children:(0,c.jsx)(f,{})})})]})]})},ye=n(3433),Se=function(e){var t=e.contacts,n=e.filter,a=(0,ye.Z)(t.items).sort((function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}));if(!n)return a;var r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},we="contact-list_list__+6N15";var _e=function(e){var t=e.onDeleteContact,n=e.onEditContact,a=(0,r.v9)(Se);return(0,c.jsx)("ul",{className:we,children:a.map((function(e){return(0,c.jsx)(Ce,{onEditContact:n,onDeleteContact:t,contact:e},e.id)}))})},Ne=n(1782);var ke=function(e){var t=e.filter,n=e.onChangeFilter,a=e.setFF?"block":"none";return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(Ne.Z,{sx:{display:"".concat(a),"& .MuiInputBase-input":{border:"0",padding:"10px"}},placeholder:"Find contacts by name",type:"text",value:t,name:"filter",onChange:n,autoComplete:"off"})})},We=n(1413),Me={name:"",number:""},De={form:"contacts-form_form__YZ371",addButton:"contacts-form_addButton__ppq06"},Be=function(e){var t=e.onSubmit,n=(0,o.useState)((0,We.Z)({},Me)),r=(0,a.Z)(n,2),i=r[0],l=r[1],s=function(e){var t=e.target,n=t.name,a=t.value;l((function(e){return(0,We.Z)((0,We.Z)({},e),{},(0,x.Z)({},n,a))}))},d=i.name,u=i.number;return(0,c.jsxs)("form",{className:De.form,children:[(0,c.jsx)("label",{className:De.label,children:(0,c.jsx)(Ne.Z,{type:"text",name:"name",placeholder:"Name",value:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:s})}),(0,c.jsx)("label",{className:De.label,children:(0,c.jsx)(Ne.Z,{type:"tel",name:"number",placeholder:"Phone",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:s})}),(0,c.jsx)(v.Z,{onClick:function(e){e.preventDefault(),t((0,We.Z)({},i)),l((0,We.Z)({},Me))},children:"Add"})]})};function Pe(e){var t=e.onSubmit,n=o.useState(!1),r=(0,a.Z)(n,2),i=r[0],l=r[1],s=function(){l(!1)};return(0,c.jsxs)("div",{children:[(0,c.jsx)(v.Z,{onClick:function(){l(!0)},fullWidth:!0,children:"Edit"}),(0,c.jsxs)(L,{open:i,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,c.jsx)(ue,{id:"alert-dialog-title"}),(0,c.jsx)($,{children:(0,c.jsx)(se,{id:"alert-dialog-description",children:"Save changes?"})}),(0,c.jsxs)(U,{children:[(0,c.jsx)(v.Z,{onClick:s,children:"Cansel"}),(0,c.jsx)(v.Z,{onClick:t,autoFocus:!0,children:"Save"})]})]})]})}var Te={name:"",number:""},Fe={form:"edit-contact_form__CcNvC",addButton:"edit-contact_addButton__uYnio"},Ae=function(e){var t=e.data,n=e.onSubmit,i=(0,r.v9)(Se),l=(0,o.useState)((0,We.Z)({},Te)),s=(0,a.Z)(l,2),d=s[0],u=s[1];(0,o.useEffect)((function(){i.filter((function(e){return e.id===t&&u(e),e}))}),[i,t]);var p=function(e){var t=e.target,n=t.name,a=t.value;u((function(e){return(0,We.Z)((0,We.Z)({},e),{},(0,x.Z)({},n,a))}))},m=d.name,h=d.number;return(0,c.jsxs)("form",{className:Fe.form,children:[(0,c.jsx)("label",{className:Fe.label,children:(0,c.jsx)(Ne.Z,{type:"text",name:"name",placeholder:"Name",value:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p})}),(0,c.jsx)("label",{className:Fe.label,children:(0,c.jsx)(Ne.Z,{type:"tel",name:"number",placeholder:"Phone",value:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p})}),(0,c.jsx)(Pe,{onSubmit:function(e){e.preventDefault(),n((0,We.Z)({},d)),u((0,We.Z)({},Te))}})]})},Re=n(3119),ze=n(5653),Ee=function(e){return e.filter},Ie="contacts_wrapper__YO7U4",Le=n(4554),Ye="modal_modal__6fysU",He="modal_modalTitle__XBDmg",qe=["onToggle","setHandler","children"],Ue={bgcolor:"background.paper",boxShadow:24},Je=function(e){var t=e.onToggle,n=e.setHandler,r=e.children,l=(0,i.Z)(e,qe),s=(0,o.useState)(!1),d=(0,a.Z)(s,2),u=d[0],p=d[1],m=(0,o.useCallback)((function(){p(!1),n(!1)}),[n]);return(0,o.useEffect)((function(){t?p(!0):m()}),[m,t]),(0,c.jsx)("div",{children:(0,c.jsx)(S.Z,{open:u,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,c.jsxs)(Le.Z,{className:Ye,sx:Ue,children:[(0,c.jsx)("h3",{className:He,children:l.title}),r]})})})},Ke=function(){var e=(0,r.v9)(Se),t=(0,r.v9)(Ee),n=(0,r.I0)(),i=(0,o.useState)(!1),l=(0,a.Z)(i,2),s=l[0],d=l[1],p=(0,o.useState)(!1),m=(0,a.Z)(p,2),h=m[0],f=m[1],x=(0,o.useState)(!1),g=(0,a.Z)(x,2),Z=g[0],b=g[1],j=(0,o.useState)(null),C=(0,a.Z)(j,2),y=C[0],S=C[1];(0,o.useEffect)((function(){n((0,Re.CL)())}),[n]);var w=function(t){b(!1),S(t),e.filter((function(e){return e.id===t?(b(!Z),e):"fail"}))};return(0,c.jsxs)("div",{className:"".concat(Ie),children:[(0,c.jsxs)(u,{title:"Contacts",button:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v.Z,{onClick:function(){f(!h)},children:"Filter"}),(0,c.jsx)(v.Z,{onClick:function(){d(!s)},children:"Add new"})]}),children:[(0,c.jsx)(ke,{filter:t,onChangeFilter:function(e){var t=e.target.value,a=(0,ze.T)(t);n(a)},setFF:h}),(0,c.jsx)(_e,{onDeleteContact:function(e){n((0,Re.in)(e));var t=(0,ze.T)("");n(t)},filteredContacts:e,onEditContact:w})]}),(0,c.jsx)(Je,{title:"New contact",onToggle:s,setHandler:d,children:(0,c.jsx)(Be,{onSubmit:function(e){n((0,Re.v6)(e)),d(!1)}})}),(0,c.jsx)(Je,{title:'Contact"s name',onToggle:Z,setHandler:w,children:(0,c.jsx)(Ae,{data:y,onSubmit:function(e){n((0,Re.LG)(e)),b(!1)}})})]})},Oe=function(){return(0,c.jsx)(Ke,{})}}}]);
//# sourceMappingURL=298.38e76e32.chunk.js.map