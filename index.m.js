import{Children as t,Component as o,createElement as r}from"react";var e={store:function(){}},n=function(o){function r(){o.apply(this,arguments)}return o&&(r.__proto__=o),r.prototype=Object.create(o&&o.prototype),r.prototype.constructor=r,r.prototype.getChildContext=function(){return{store:this.props.store}},r.prototype.render=function(){return t.only(this.props.children)},r}(o);n.childContextTypes=e;var s=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var s=t.slice(-1)[0],i=[],c=[];(t.length>1?t.slice(0,-1):[]).forEach(function(t){if("select"!==t.slice(0,6)){if("do"!==t.slice(0,2))throw Error("CanNotConnect "+t);i.push(t)}else c.push(t)});var p=function(t){function o(o,r){var e=this;t.call(this,o,r);var n=r.store;this.state=n.select(c),this.unsubscribe=n.subscribeToSelectors(c,this.setState.bind(this)),this.actionCreators={},i.forEach(function(t){e.actionCreators[t]=function(){for(var o=[],r=arguments.length;r--;)o[r]=arguments[r];return n[t].apply(n,o)}})}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.componentWillUnmount=function(){this.unsubscribe()},o.prototype.render=function(){return r(s,Object.assign({},this.props,this.state,this.actionCreators))},o}(o);return p.contextTypes=e,p};export{n as Provider,s as connect};
//# sourceMappingURL=index.m.js.map
