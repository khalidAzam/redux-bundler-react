!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(t.reduxBundlerReact={},t.react)}(this,function(t,e){var o={store:function(){}},r=function(t){function o(){t.apply(this,arguments)}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.getChildContext=function(){return{store:this.props.store}},o.prototype.render=function(){return e.Children.only(this.props.children)},o}(e.Component);r.childContextTypes=o;t.Provider=r,t.connect=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];var n=t.slice(-1)[0],i=[],c=[];(t.length>1?t.slice(0,-1):[]).forEach(function(t){if("select"!==t.slice(0,6)){if("do"!==t.slice(0,2))throw Error("CanNotConnect "+t);i.push(t)}else c.push(t)});var s=function(t){function o(e,o){var r=this;t.call(this,e,o);var n=o.store;this.state=n.select(c),this.unsubscribe=n.subscribeToSelectors(c,this.setState.bind(this)),this.actionCreators={},i.forEach(function(t){r.actionCreators[t]=function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return n[t].apply(n,e)}})}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.componentWillUnmount=function(){this.unsubscribe()},o.prototype.render=function(){return e.createElement(n,Object.assign({},this.props,this.state,this.actionCreators))},o}(e.Component);return s.contextTypes=o,s}});
//# sourceMappingURL=index.umd.js.map
