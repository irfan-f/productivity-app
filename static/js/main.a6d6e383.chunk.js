(this.webpackJsonpproductivity_app=this.webpackJsonpproductivity_app||[]).push([[0],{128:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(33),i=a.n(r),l=(a(40),a(41),a(4)),c=a(5),s=a(7),d=a(6),u=(a(13),function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"page-header"},n.a.createElement("h1",{id:"header"},"Productivity ",n.a.createElement("small",null,"An organizer for tasks"))))}}]),a}(o.Component)),m=a(2),p=a.n(m),f=a(11),v=a(24),h=a(8),E=a(9),g=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).updateText=function(e){t.setState({note:{text:e.target.value,dateTo:t.state.note.dateTo,dateFrom:t.state.note.dateFrom,title:""===t.state.note.title?"Note":t.state.note.title,id:t.props.keyProp,color:t.state.note.color}})},t.updateTitle=function(e){t.setState({note:{text:t.state.note.text,dateTo:t.state.note.dateTo,dateFrom:t.state.note.dateFrom,title:e.target.value,id:t.props.keyProp,color:t.state.note.color}})},t.updateDateTo=function(e){t.setState({note:{text:t.state.note.text,dateTo:e.target.value,dateFrom:t.state.note.dateFrom,title:""===t.state.note.title?"Note":t.state.note.title,id:t.props.keyProp,color:t.state.note.color}})},t.updateDateFrom=function(e){t.setState({note:{text:t.state.note.text,dateTo:t.state.note.dateTo,dateFrom:e.target.value,title:""===t.state.note.title?"Note":t.state.note.title,id:t.props.keyProp,color:t.state.note.color}})},t.updateColor=function(e){t.setState({note:{text:t.state.note.text,dateTo:t.state.note.dateTo,dateFrom:t.state.note.dateFrom,title:""===t.state.note.title?"Note":t.state.note.title,id:t.props.keyProp,color:e.target.value}})},t.submitForm=function(e){e.preventDefault();var a=(new Date).toISOString().split("T")[0];""!==document.getElementById("create").value&&(t.setState({note:{text:t.state.note.text,dateTo:t.state.note.dateTo,dateFrom:t.state.note.dateFrom,title:t.state.note.title,id:t.props.keyProp,color:t.state.note.color}}),t.props.append(t.state.note),document.getElementById("create").value="",document.getElementById("title").value="",document.getElementById("dateTo").value="",document.getElementById("dateFrom").value=a,document.getElementById("colors").option=t.state.color,t.setState({note:{text:"",title:"",dateTo:"",dateFrom:a,id:"",color:t.state.note.color}}))},t.state={note:{text:"",title:"",dateTo:(new Date).toISOString().split("T")[0],dateFrom:"",color:"grey"}},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){return t.submitForm(e)}},n.a.createElement("textarea",{rows:"2",id:"create",placeholder:"Note",onChange:function(e){return t.updateText(e)},type:"text"}),n.a.createElement("button",{type:"button",id:"optionsButton","data-toggle":"collapse","data-target":"#collapseOptions","aria-expanded":"false","aria-controls":"collapseOptions",tabIndex:"-1"},n.a.createElement("i",{className:"arrowDown",tabIndex:"-1"})),n.a.createElement("button",{type:"submit",id:"createButton",tabIndex:"-1"},n.a.createElement(h.a,{icon:E.d})),n.a.createElement("div",{className:"collapse",id:"collapseOptions"},n.a.createElement("input",{id:"title",placeholder:"Title",type:"text",onChange:function(e){return t.updateTitle(e)}}),n.a.createElement("div",{className:"colors"},n.a.createElement("label",{htmlFor:"colors"},"Color:"),n.a.createElement("select",{name:"colors",id:"colors",onChange:function(e){return t.updateColor(e)}},n.a.createElement("option",{value:"grey"},"Grey"),n.a.createElement("option",{value:"red"},"Red"),n.a.createElement("option",{value:"orange"},"Orange"),n.a.createElement("option",{value:"yellow"},"Yellow"),n.a.createElement("option",{value:"blue"},"Blue"))),n.a.createElement("label",{htmlFor:"dateFrom",id:"dateFromLabel"},"From:"),n.a.createElement("label",{htmlFor:"dateTo",id:"dateToLabel"},"To:"),n.a.createElement("input",{id:"dateFrom",defaultValue:(new Date).toISOString().split("T")[0],type:"date",onChange:function(e){return t.updateDateFrom(e)}}),n.a.createElement("input",{id:"dateTo",type:"date",onChange:function(e){return t.updateDateTo(e)}}),n.a.createElement("br",null))))}}]),a}(o.Component),y=a(34),b=a.n(y),N=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(t){var o;return Object(l.a)(this,a),(o=e.call(this,t)).updateText=function(t){o.setState({note:{text:t.target.value,dateTo:o.state.note.dateTo,dateFrom:o.state.note.dateFrom,title:""===o.state.note.title?"Note":o.state.note.title,id:o.state.note.id,color:o.state.note.color,complete:o.state.note.complete}})},o.updateTitle=function(t){o.setState({note:{text:o.state.note.text,dateTo:o.state.note.dateTo,dateFrom:o.state.note.dateFrom,title:t.target.value,id:o.state.note.id,color:o.state.note.color,complete:o.state.note.complete}})},o.updateDateTo=function(t){o.setState({note:{text:o.state.note.text,dateTo:t.target.value,dateFrom:o.state.note.dateFrom,title:""===o.state.note.title?"Note":o.state.note.title,id:o.state.note.id,color:o.state.note.color,complete:o.state.note.complete}})},o.updateDateFrom=function(t){o.setState({note:{text:o.state.note.text,dateTo:o.state.note.dateTo,dateFrom:t.target.value,title:""===o.state.note.title?"Note":o.state.note.title,id:o.state.note.id,color:o.state.note.color,complete:o.state.note.complete}})},o.updateColor=function(t){o.setState({note:{text:o.state.note.text,dateTo:o.state.note.dateTo,dateFrom:o.state.note.dateFrom,title:""===o.state.note.title?"Note":o.state.note.title,id:o.state.note.id,color:t.target.value,complete:o.state.note.complete}})},o.toggle=function(t){"removeButton"===t.target.id?o.removeItem(o.props.note):"completeIt"!==t.target.id&&"completeButton"!==t.target.id&&"completeUn"!==t.target.id&&"completeIt"!==t.target.parentNode.id&&"completeUn"!==t.target.parentNode.id||(o.setState({complete:!o.state.complete}),o.props.update(o.props.note))},o.removeItem=function(t){t.stopPropagation(),o.props.removeItem(o.props.note)},o.editNote=function(){var t=Object(f.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.setState({edit:!o.state.edit}),t.next=3,document.getElementById("colorsEditSelect");case 3:t.sent.value=o.state.note.color;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o.submitEdit=function(t){t.preventDefault(),o.props.edit(o.state.note),o.setState({edit:!o.state.edit})},o.state={note:o.props.note,edit:!1,complete:o.props.note.complete},o}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=this.props.note;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col ok"},n.a.createElement("div",{className:"card"+(e.complete?" completed":""),style:{backgroundColor:"grey"!==e.color?e.color:"gainsboro"}},n.a.createElement("div",{className:"card-title"},n.a.createElement("span",{className:"remove",hidden:this.state.edit},n.a.createElement("button",{type:"button",id:"removeButton",onClick:this.removeItem},n.a.createElement(h.a,{icon:E.c}))),this.state.edit?n.a.createElement("input",{id:"titleEdit",defaultValue:this.state.note.title,type:"text",onChange:function(e){return t.updateTitle(e)}}):n.a.createElement("div",{id:"title"},e.title),n.a.createElement("span",{id:"dates",hidden:this.state.edit},""!==e.dateFrom?e.dateFrom+"\n":n.a.createElement("br",null),""!==e.dateTo?e.dateTo:""),n.a.createElement("button",{type:"button",id:"editButton",onClick:this.editNote},n.a.createElement(h.a,{icon:E.b,hidden:this.state.edit}),n.a.createElement(h.a,{icon:E.f,hidden:!this.state.edit}))),n.a.createElement("span",{id:"datesEdit",hidden:!this.state.edit},n.a.createElement("input",{id:"dateFromEdit",defaultValue:this.state.note.dateFrom,type:"date",onChange:function(e){return t.updateDateFrom(e)},hidden:!this.state.edit}),n.a.createElement("input",{type:"date",id:"dateToEdit",defaultValue:this.state.note.dateTo,onChange:function(e){return t.updateDateTo(e)},hidden:!this.state.edit})),n.a.createElement("div",{className:"card-body"+(e.complete?" completed":"")},n.a.createElement("textarea",{id:"noteEdit",rows:"2",defaultValue:this.state.note.text,onChange:function(e){return t.updateText(e)},type:"text",hidden:!this.state.edit}),n.a.createElement("div",{className:"colorsEdit",hidden:!this.state.edit},n.a.createElement("label",{htmlFor:"colorsEdit"},"Color:"),n.a.createElement("select",{name:"colorsEdit",id:"colorsEditSelect",onChange:this.updateColor},n.a.createElement("option",{value:"grey"},"Grey"),n.a.createElement("option",{value:"red"},"Red"),n.a.createElement("option",{value:"orange"},"Orange"),n.a.createElement("option",{value:"yellow"},"Yellow"),n.a.createElement("option",{value:"blue"},"Blue")),n.a.createElement("button",{type:"button",id:"editCompleteButton",tabIndex:"-1",hidden:!this.state.edit},n.a.createElement(h.a,{icon:E.d,onClick:this.submitEdit}))),n.a.createElement("div",{id:"note",hidden:this.state.edit},n.a.createElement(b.a,{source:e.text})),n.a.createElement("button",{type:"button",id:"completeButton",onClick:function(e){return t.toggle(e)},tabIndex:"0",hidden:!!this.state.edit||!!this.state.complete},n.a.createElement(h.a,{id:"completeIt",icon:E.a})),n.a.createElement("button",{type:"button",id:"completeButton",onClick:function(e){return t.toggle(e)},tabIndex:"0",hidden:!!this.state.edit||!this.state.complete},n.a.createElement(h.a,{id:"completeUn",icon:E.f})," ")))))}}]),a}(o.Component),x=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).doDefault=function(){return t.props.notes.map((function(e,a){return n.a.createElement(N,{tag:"note",key:a,note:e,update:t.updateNote,edit:t.editNote,removeItem:t.removeItem})}))},t.doFilter=function(){var e=t.props,a=e.notes,o=e.filter;switch(e.filterBy){case"title":return a.map((function(e,a){return e.title.toLowerCase().includes(o)?n.a.createElement(N,{tag:"note",key:a,note:e,update:t.updateNote,edit:t.editNote,removeItem:t.removeItem}):null}));case"note":return a.map((function(e,a){return e.text.toLowerCase().includes(o)?n.a.createElement(N,{tag:"note",key:a,note:e,update:t.updateNote,edit:t.editNote,removeItem:t.removeItem}):null}));case"color":return a.map((function(e,a){return e.color.toLowerCase().substring(0,o.length)===o?n.a.createElement(N,{tag:"note",key:a,note:e,update:t.updateNote,edit:t.editNote,removeItem:t.removeItem}):null}));case"dateTo":return a.map((function(e,a){return e.dateTo.toLowerCase().substring(0,o.length)===o?n.a.createElement(N,{tag:"note",key:a,note:e,update:t.updateNote,edit:t.editNote,removeItem:t.removeItem}):null}));case"dateFrom":return a.map((function(e,a){return e.dateFrom.toLowerCase().substring(0,o.length)===o?n.a.createElement(N,{tag:"note",key:a,note:e,update:t.updateNote,edit:t.editNote,removeItem:t.removeItem}):null}));default:return a.map((function(e,a){return e.title.toLowerCase().includes(o)?n.a.createElement(N,{tag:"note",key:a,note:e,update:t.updateNote,edit:t.editNote,removeItem:t.removeItem}):null}))}},t.removeItem=function(e){t.props.removeItem(e)},t.updateNote=function(e){t.props.update(e)},t.editNote=function(e){t.props.edit(e)},t}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){this.notes=this.doFilter()}},{key:"render",value:function(){return n.a.createElement("div",{className:"container",id:"list"},""===this.props.filter?this.doDefault():this.doFilter())}}]),a}(o.Component),T=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).componentDidMount=function(){var e=localStorage.getItem("notes"),a=localStorage.getItem("count");if(e){var o=JSON.parse(e),n=JSON.parse(a);t.setState({notes:Object(v.a)(o),count:n,filter:t.state.filter})}},t.appendNote=function(){var e=Object(f.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({notes:[{text:a.text,title:a.title,dateTo:a.dateTo,dateFrom:a.dateFrom,complete:!1,id:a.id,color:a.color}].concat(Object(v.a)(t.state.notes)),count:t.state.count+1,filter:t.state.filter},(function(){localStorage.setItem("notes",JSON.stringify(t.state.notes)),localStorage.setItem("count",parseInt(JSON.stringify(t.state.count)))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.updateNote=function(){var e=Object(f.a)(p.a.mark((function e(a){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.state.notes.map((function(t){return a===t?{text:a.text,title:a.title,dateTo:a.dateTo,dateFrom:a.dateFrom,complete:!a.complete,id:a.id,color:a.color}:t})),t.setState({notes:o,count:t.state.count,filter:t.state.filter},(function(){localStorage.setItem("notes",JSON.stringify(t.state.notes))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.editNote=function(){var e=Object(f.a)(p.a.mark((function e(a){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.state.notes.map((function(t){return a.id===t.id?{text:a.text,title:a.title,dateTo:a.dateTo,dateFrom:a.dateFrom,complete:a.complete,id:a.id,color:a.color}:t})),t.setState({notes:o,count:t.state.count,filter:t.state.filter},(function(){localStorage.setItem("notes",JSON.stringify(t.state.notes))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.updateIndexing=function(){var e=Object(f.a)(p.a.mark((function e(a){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(o=a.reverse().map((function(t,e){return t.id=e,t}))).reverse(),t.setState({notes:o,count:t.state.count-1,filter:t.state.filter},(function(){localStorage.setItem("notes",JSON.stringify(t.state.notes)),localStorage.setItem("count",JSON.stringify(t.state.count))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.removeItem=function(){var e=Object(f.a)(p.a.mark((function e(a){var o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.state.notes.filter((function(t){return t.id!==a.id})),t.updateIndexing(o);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.clearList=function(){localStorage.clear(),t.setState({notes:[],count:0,filter:""})},t.setSearch=function(e){t.setState({notes:t.state.notes,count:t.state.count,filter:e.target.value.toLowerCase(),filterBy:t.state.filterBy})},t.setSearchBy=function(e){t.setState({notes:t.state.notes,count:t.state.count,filter:t.state.filter,filterBy:e.target.value})},t.state={notes:[],count:0,filter:"",filterBy:"title"},t}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container",id:"wrapper2"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("h3",null,"You have ",n.a.createElement("span",{className:"badge badge-info"},n.a.createElement("big",null,this.state.count))," notes")),n.a.createElement("div",{className:"col-7"},n.a.createElement(g,{append:this.appendNote,keyProp:this.state.count})),n.a.createElement("div",{className:"col-2"})),n.a.createElement("div",{className:"row",id:"funcs"},n.a.createElement("div",{className:"col-4",id:"funcsLeft"},n.a.createElement("span",{className:"float-left"},n.a.createElement("button",{type:"button",id:"clearButton",onClick:this.clearList},n.a.createElement(h.a,{icon:E.g})))),n.a.createElement("div",{className:"col-8",id:"funcsRight"},n.a.createElement("div",{className:"filterOn"},n.a.createElement(h.a,{icon:E.e,id:"searchIcon"}),n.a.createElement("input",{onChange:this.setSearch,id:"search",type:"text"}),n.a.createElement("label",{htmlFor:"filterBy"},"in  "),n.a.createElement("select",{name:"filterBy",id:"searchs",onChange:this.setSearchBy},n.a.createElement("option",{value:"title"},"Title"),n.a.createElement("option",{value:"note"},"Note"),n.a.createElement("option",{value:"dateFrom"},"From"),n.a.createElement("option",{value:"dateTo"},"To"),n.a.createElement("option",{value:"color"},"Color"))))),n.a.createElement(x,{notes:this.state.notes,update:this.updateNote,edit:this.editNote,removeItem:this.removeItem,filter:this.state.filter,filterBy:this.state.filterBy}))}}]),a}(o.Component),F=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={},t}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid",id:"wrapper"},n.a.createElement("div",{className:"row head"},n.a.createElement(u,null)),n.a.createElement(T,null))}}]),a}(o.Component);var I=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},13:function(t,e,a){},35:function(t,e,a){t.exports=a(128)},40:function(t,e,a){},41:function(t,e,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.a6d6e383.chunk.js.map