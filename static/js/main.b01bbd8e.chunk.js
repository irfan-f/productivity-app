(this.webpackJsonpproductivity_app=this.webpackJsonpproductivity_app||[]).push([[0],{10:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(33),c=a.n(r),l=(a(40),a(41),a(3)),s=a(4),i=a(6),u=a(5),m=(a(10),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h1",{id:"header"},"Productivity ",o.a.createElement("small",null,"A solution to organization"))))}}]),a}(n.Component)),d=a(8),p=a.n(d),v=a(13),f=a(24),E=a(11),h=a(12),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).updateText=function(t){e.setState({note:{text:t.target.value,dateTo:e.state.note.dateTo,dateFrom:e.state.note.dateFrom,title:e.state.note.title,id:e.props.keyProp,color:e.state.note.color}})},e.updateTitle=function(t){e.setState({note:{text:e.state.note.text,dateTo:e.state.note.dateTo,dateFrom:e.state.note.dateFrom,title:t.target.value,id:e.props.keyProp,color:e.state.note.color}})},e.updateDateTo=function(t){e.setState({note:{text:e.state.note.text,dateTo:t.target.value,dateFrom:e.state.note.dateFrom,title:e.state.note.title,id:e.props.keyProp,color:e.state.note.color}})},e.updateDateFrom=function(t){e.setState({note:{text:e.state.note.text,dateTo:e.state.note.dateTo,dateFrom:t.target.value,title:e.state.note.title,id:e.props.keyProp,color:e.state.note.color}})},e.updateColor=function(t){e.setState({note:{text:e.state.note.text,dateTo:e.state.note.dateTo,dateFrom:e.state.note.dateFrom,title:e.state.note.title,id:e.props.keyProp,color:t.target.value}})},e.submitForm=function(t){t.preventDefault(),""!==document.getElementById("create").value&&(e.setState({note:{text:e.state.note.text,dateTo:e.state.note.dateTo,dateFrom:e.state.note.dateFrom,title:e.state.note.title,id:e.props.keyProp,color:e.state.note.color}}),e.props.append(e.state.note),document.getElementById("create").value="",document.getElementById("title").value="",document.getElementById("dateTo").value="",document.getElementById("dateFrom").value="",document.getElementById("colors").value="default",e.setState({note:{text:"",title:"",dateTo:"",dateFrom:"",id:"",color:"default"}}))},e.state={note:{text:"",title:"",dateTo:"",dateFrom:"",color:"default"}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(t){return e.submitForm(t)}},o.a.createElement("textarea",{rows:"2",id:"create",placeholder:"Note",onChange:function(t){return e.updateText(t)},type:"text"}),o.a.createElement("button",{type:"button",id:"optionsButton","data-toggle":"collapse","data-target":"#collapseOptions","aria-expanded":"false","aria-controls":"collapseOptions",tabIndex:"-1"},o.a.createElement("i",{className:"arrowDown",tabIndex:"-1"})),o.a.createElement("button",{type:"submit",id:"createButton",tabIndex:"-1"},o.a.createElement(E.a,{icon:h.b})),o.a.createElement("div",{className:"collapse",id:"collapseOptions"},o.a.createElement("input",{id:"title",placeholder:"Title",type:"text",onChange:function(t){return e.updateTitle(t)}}),o.a.createElement("div",{className:"colors"},o.a.createElement("label",{htmlFor:"colors"},"Color:"),o.a.createElement("select",{name:"colors",id:"colors",onChange:function(t){return e.updateColor(t)}},o.a.createElement("option",{value:"default"},"Default"),o.a.createElement("option",{value:"red"},"Red"),o.a.createElement("option",{value:"orange"},"Orange"),o.a.createElement("option",{value:"yellow"},"Yellow"),o.a.createElement("option",{value:"blue"},"Blue"))),o.a.createElement("input",{id:"dateFrom",placeholder:"Date: from",type:"text",onChange:function(t){return e.updateDateFrom(t)}}),o.a.createElement("input",{id:"dateTo",placeholder:"Date: to",type:"text",onChange:function(t){return e.updateDateTo(t)}}),o.a.createElement("br",null))))}}]),a}(n.Component),b=a(34),y=a.n(b),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).toggle=function(t){"removeButton"!==t.target.id?e.props.update(e.props.note):e.removeItem(e.props.note)},e.removeItem=function(t){t.stopPropagation(),e.props.removeItem(e.props.note)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.note;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col ok"},o.a.createElement("div",{className:"card"+(e.complete?" completed":""),style:{backgroundColor:"default"!==e.color?e.color:"gainsboro"},onClick:this.toggle},o.a.createElement("h4",{className:"card-title"},o.a.createElement("span",{className:"remove"},o.a.createElement("button",{type:"button",id:"removeButton",onClick:this.removeItem},"X")),""!==e.title?e.title:"Note",o.a.createElement("span",{id:"dates"},""!==e.dateFrom?"From: "+e.dateFrom+"\n":"",""!==e.dateTo?"To: "+e.dateTo:"")),o.a.createElement("div",{className:"card-body"+(e.complete?" completed":"")},o.a.createElement(y.a,{source:e.text})))))}}]),a}(n.Component),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).removeItem=function(t){e.props.removeItem(t)},e.updateNote=function(t){e.props.update(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.notes;return o.a.createElement("div",{className:"container",id:"list"},t.map((function(t,a){return o.a.createElement(O,{tag:"note",key:a,note:t,update:e.updateNote,removeItem:e.removeItem})})))}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).componentDidMount=function(){var t=localStorage.getItem("notes"),a=localStorage.getItem("count");if(t){var n=JSON.parse(t),o=JSON.parse(a);e.setState({notes:Object(f.a)(n),count:o})}},e.appendNote=function(){var t=Object(v.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({notes:[{text:a.text,title:a.title,dateTo:a.dateTo,dateFrom:a.dateFrom,complete:!1,id:a.id,color:a.color}].concat(Object(f.a)(e.state.notes)),count:e.state.count+1});case 2:localStorage.setItem("notes",JSON.stringify(e.state.notes)),localStorage.setItem("count",parseInt(JSON.stringify(e.state.count)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateNote=function(){var t=Object(v.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.notes.map((function(e){return a===e?{text:a.text,title:a.title,dateTo:a.dateTo,dateFrom:a.dateFrom,complete:!a.complete,id:a.id,color:a.color}:e})),t.next=3,e.setState({notes:n});case 3:localStorage.setItem("notes",JSON.stringify(e.state.notes));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateIndexing=function(){var t=Object(v.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=a.reverse().map((function(e,t){return e.id=t,e}))).reverse(),t.next=4,e.setState({notes:n,count:e.state.count-1});case 4:localStorage.setItem("notes",JSON.stringify(e.state.notes)),localStorage.setItem("count",JSON.stringify(e.state.count));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.removeItem=function(){var t=Object(v.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.state.notes.filter((function(e){return e.id!==a.id})),e.updateIndexing(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.clearList=function(){localStorage.clear(),e.setState({notes:[],count:0})},e.state={notes:[],count:0},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container",id:"wrapper2"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-3"},o.a.createElement("h3",null,"You have ",o.a.createElement("span",{className:"badge badge-info"},o.a.createElement("big",null,this.state.count))," notes")),o.a.createElement("div",{className:"col-7"},o.a.createElement(g,{append:this.appendNote,keyProp:this.state.count})),o.a.createElement("div",{className:"col-2"})),o.a.createElement("div",{className:"row",id:"funcs"},o.a.createElement("div",{className:"col-6",id:"funcs"},o.a.createElement("span",{className:"float-left"},o.a.createElement("button",{type:"button",id:"clearButton",onClick:this.clearList},o.a.createElement(E.a,{icon:h.a})))),o.a.createElement("div",{className:"col-6",id:"funcs"},o.a.createElement("form",{className:"float-right"},o.a.createElement("input",{id:"search",type:"text",placeholder:"Search: Under Construction"}),o.a.createElement("button",{type:"submit",id:"searchButton"},o.a.createElement(E.a,{icon:h.c}))))),o.a.createElement(x,{notes:this.state.notes,update:this.updateNote,removeItem:this.removeItem}))}}]),a}(n.Component),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid",id:"wrapper"},o.a.createElement("div",{className:"row head"},o.a.createElement(m,null)),o.a.createElement(N,null))}}]),a}(n.Component);var j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){e.exports=a(128)},40:function(e,t,a){},41:function(e,t,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.b01bbd8e.chunk.js.map