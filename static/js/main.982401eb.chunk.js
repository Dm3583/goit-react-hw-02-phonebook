(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=n(10),s=n(2),u=n(3),l=n(4),d=n(6),b=n(5),j=n(8),m=n(18),h=n(0),f={name:"",number:""},O=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).inputFieldHandler=function(t){var e=t.target,n=e.name,c=e.value;a.setState(Object(s.a)({},n,c))},a.submitHandler=function(t){t.preventDefault();var e=a.state,n=e.name,c=e.number,r={id:Object(m.a)(),name:n,number:c};a.props.addContact(r),a.reset()},a.reset=function(){a.setState(Object(j.a)({},f))},a.state=Object(j.a)({},f),a}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",name:"name",value:e,onChange:this.inputFieldHandler})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.inputFieldHandler})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=function(t){var e=t.value,n=t.filterInput;return Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},v=function(t){var e=t.contact,n=t.deleteContact,a=e.id,c=e.name,r=e.number;return Object(h.jsxs)("li",{children:[c,": ",r,Object(h.jsx)("button",{type:"button",onClick:function(){return n(a)},children:"Delete"})]})},C=function(t){var e=t.contactsList,n=t.deleteContact;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)(v,{contact:t,deleteContact:n},t.id)}))})},x=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).inputFieldHandler=function(t){var e=t.target,n=e.name,c=e.value;a.setState(Object(s.a)({},n,c))},a.addContact=function(t){a.state.contacts.map((function(t){return t.name})).find((function(e){return e===t.name}))?alert("".concat(t.name," is already in contacts")):a.setState((function(e){var n=e.contacts;return{contacts:[].concat(Object(o.a)(n),[t])}}))},a.deleteContact=function(t){a.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},a.getVisibleContacts=function(){var t=a.state,e=t.filter,n=t.contacts,c=e.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(c)}))},a.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(O,{addContact:this.addContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(p,{value:t,filterInput:this.inputFieldHandler}),Object(h.jsx)(C,{contactsList:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.982401eb.chunk.js.map