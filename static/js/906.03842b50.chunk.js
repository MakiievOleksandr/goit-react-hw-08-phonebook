"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[906],{3833:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(5987),r=(t(2791),t(142)),s="button_button__lXCnD",o=t(3329),c=["children","size","type","onClick"],l=function(e){var n=e.children,t=e.size,l=e.type,i=void 0===l?"submit":l,u=e.onClick,d=(0,a.Z)(e,c);return(0,o.jsxs)(r.Z,{size:t,className:"".concat(s," ").concat(d.style),onClick:u,type:i,children:[n," "]})}},1782:function(e,n,t){var a=t(1413),r=t(5987),s=t(2791),o=t(5984),c=t(8295),l=t(3329),i=["label","name","handleChange"];n.Z=function(e){var n=e.label,t=e.name,u=e.handleChange,d=(0,r.Z)(e,i),m=(0,s.useMemo)((function(){return(0,o.x0)()}),[]),f=(0,s.useMemo)((function(){return t||m}),[t,m]);return(0,l.jsx)(c.Z,(0,a.Z)({fullWidth:!0,margin:"normal",label:n,variant:"filled",name:f,id:m,onChange:u},d))}},5906:function(e,n,t){t.r(n),t.d(n,{default:function(){return re}});var a=t(9439),r=t(9434),s=t(2791),o=t(5987),c="section_section__Ytira",l="section_header__vtq7c",i="section_title__S0sev",u=t(3329),d=["title","children"];var m=function(e){var n=e.title,t=e.children,a=(0,o.Z)(e,d),r=a.button,s=a.style;return(0,u.jsxs)("section",{className:"".concat(c," ").concat(s),children:[(0,u.jsxs)("div",{className:l,children:[n&&(0,u.jsx)("h2",{className:i,children:n}),r]}),t]})},f=t(7225),h=t(9259),p=t(4223),x=(0,p.Z)((0,u.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),v=t(3833),Z=(0,p.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),j=(0,p.Z)((0,u.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone"),b="list-item_listItem__ynxBH",_="list-item_text__oTwJB",C="list-item_contactField__8dfH1";var y=function(e){var n=e.onDeleteContact,t=e.contact;return(0,u.jsxs)(f.Z,{className:b,children:[(0,u.jsxs)("p",{className:_,children:[(0,u.jsxs)("span",{className:C,children:[(0,u.jsx)(h.Z,{sx:{fontSize:15},children:(0,u.jsx)(Z,{})}),t.name]}),(0,u.jsx)("br",{}),(0,u.jsxs)("span",{className:C,children:[(0,u.jsx)(h.Z,{sx:{fontSize:15},children:(0,u.jsx)(j,{})}),t.number]})]}),(0,u.jsx)(v.Z,{type:"button",onClick:function(){return n(t.id)},children:(0,u.jsx)(h.Z,{sx:{fontSize:20,color:"blue"},children:(0,u.jsx)(x,{})})})]})},N=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},g="contact-list_list__+6N15";var k=function(e){var n=e.onDeleteContact,t=(0,r.v9)(N);return(0,u.jsx)("ul",{className:g,children:t.map((function(e){return(0,u.jsx)(y,{onDeleteContact:n,contact:e},e.id)}))})},z=t(1782);var w=function(e){var n=e.filter,t=e.onChangeFilter;return(0,u.jsx)("label",{children:(0,u.jsx)(z.Z,{sx:{"& .MuiInputBase-input":{border:"0",padding:"10px"}},placeholder:"Find contacts by name",type:"text",value:n,name:"filter",onChange:t,autoComplete:"off"})})},B=t(3119),P=t(5653),S=function(e){return e.filter},M="contacts_wrapper__YO7U4",A=t(7462),D=t(3366),F=t(8182),T=t(2421),q=t(104),E=t(3433),O=t(2466),I=t(7416),L=["sx"];function Y(e){var n,t=e.sx,a=function(e){var n,t,a={systemProps:{},otherProps:{}},r=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:I.Z;return Object.keys(e).forEach((function(n){r[n]?a.systemProps[n]=e[n]:a.otherProps[n]=e[n]})),a}((0,D.Z)(e,L)),r=a.systemProps,s=a.otherProps;return n=Array.isArray(t)?[r].concat((0,E.Z)(t)):"function"===typeof t?function(){var e=t.apply(void 0,arguments);return(0,O.P)(e)?(0,A.Z)({},r,e):r}:(0,A.Z)({},r,t),(0,A.Z)({},s,{sx:n})}var H=t(886),J=["className","component"];var R=t(5902),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.defaultTheme,t=e.defaultClassName,a=void 0===t?"MuiBox-root":t,r=e.generateClassName,o=(0,T.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(q.Z),c=s.forwardRef((function(e,t){var s=(0,H.Z)(n),c=Y(e),l=c.className,i=c.component,d=void 0===i?"div":i,m=(0,D.Z)(c,J);return(0,u.jsx)(o,(0,A.Z)({as:d,ref:t,className:(0,F.Z)(l,r?r(a):a),theme:s},m))}));return c}({defaultTheme:(0,t(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:R.Z.generate}),V=U,W=t(9939),X=t(4942),$=t(1413),G={name:"",number:""},K={form:"contacts-form_form__YZ371",addButton:"contacts-form_addButton__ppq06"},Q=function(e){var n=e.onSubmit,t=(0,s.useState)((0,$.Z)({},G)),r=(0,a.Z)(t,2),o=r[0],c=r[1],l=function(e){var n=e.target,t=n.name,a=n.value;c((function(e){return(0,$.Z)((0,$.Z)({},e),{},(0,X.Z)({},t,a))}))},i=o.name,d=o.number;return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n((0,$.Z)({},o)),c((0,$.Z)({},G))},className:K.form,children:[(0,u.jsx)("label",{className:K.label,children:(0,u.jsx)(z.Z,{type:"text",name:"name",placeholder:"Name",value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:l})}),(0,u.jsx)("label",{className:K.label,children:(0,u.jsx)(z.Z,{type:"tel",name:"number",placeholder:"Phone",value:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:l})}),(0,u.jsx)(v.Z,{type:"submit",style:K.addButton,children:"Add"})]})},ee="modal_modal__MpoEi",ne={bgcolor:"background.paper",boxShadow:24,p:4},te=function(e){var n=e.openBcdrp,t=e.onOpenBcdrp,r=e.onSubmit,o=(0,s.useState)(!1),c=(0,a.Z)(o,2),l=c[0],i=c[1],d=(0,s.useCallback)((function(){i(!1),t(!1)}),[t]);return(0,s.useEffect)((function(){n?i(!0):d()}),[d,n]),(0,u.jsx)("div",{children:(0,u.jsx)(W.Z,{open:l,onClose:d,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,u.jsxs)(V,{className:ee,sx:ne,children:[(0,u.jsx)("h3",{children:"New contact"}),(0,u.jsx)(Q,{onSubmit:r})]})})})},ae=function(){var e=(0,r.v9)(N),n=(0,r.v9)(S),t=(0,r.I0)(),o=(0,s.useState)(!1),c=(0,a.Z)(o,2),l=c[0],i=c[1];(0,s.useEffect)((function(){t((0,B.CL)())}),[t]);return(0,u.jsxs)("div",{className:M,children:[(0,u.jsxs)(m,{title:"Contacts",button:(0,u.jsx)(v.Z,{onClick:function(){i(!l)},children:"Add contact"}),children:[(0,u.jsx)(w,{filter:n,onChangeFilter:function(e){var n=e.target.value,a=(0,P.T)(n);t(a)}}),(0,u.jsx)(k,{onDeleteContact:function(e){t((0,B.in)(e));var n=(0,P.T)("");t(n)},filteredContacts:e})]}),(0,u.jsx)(te,{onSubmit:function(e){t((0,B.v6)(e)),i(!1)},openBcdrp:l,onOpenBcdrp:i})]})},re=function(){return(0,u.jsx)(ae,{})}}}]);
//# sourceMappingURL=906.03842b50.chunk.js.map