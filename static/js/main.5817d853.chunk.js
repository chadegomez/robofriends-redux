(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(46)},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),c=n.n(o),i=n(26),s=n(16),l=n(24),u=n(25),h=(n(40),n(11)),d=n(12),b=n(14),E=n(13),m=n(15),p=n(6),g=(n(41),function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc card"},a.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robot"}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))}),f=(n(42),function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,n){return a.a.createElement(g,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}))}),O=(n(43),function(e){e.searchField;var t=e.searchChange;return a.a.createElement("div",null,a.a.createElement("input",{type:"search",placeholder:"Search here",className:"pa3 ba b--light-blue bg-lightest-blue",onChange:t}))}),R=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",height:"800px",marginTop:"20px"}},e.children)},S=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Not good"):this.props.children}}]),t}(r.Component),v=(n(44),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",{className:"f2 neonText"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f2 neonText"},"RoboFriends"),a.a.createElement(O,{searchChange:n}),a.a.createElement(R,null,a.a.createElement(S,null,a.a.createElement(f,{robots:c}))))}}]),t}(r.Component)),y=Object(p.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(v),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})},C=(n(45),{searchField:""}),T={isPending:!1,robots:[],error:""},_=Object(l.createLogger)(),F=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),w=Object(s.c)(F,Object(s.a)(u.a,_));c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:w},a.a.createElement(y,null)))),j()}},[[27,1,2]]]);
//# sourceMappingURL=main.5817d853.chunk.js.map