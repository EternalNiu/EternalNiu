(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{904:function(e,t,o){"use strict";(function(e){var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a,i=o(229),l=o(910),s=(n=l)&&n.__esModule?n:{default:n},c=o(231);(a=o(9).enterModule)&&a(e);var u,p,_=c.async.someAsync,d=function(e,t){return{count:e.mapArea.count}},f=function(e,t){return{fetchSomeAsyncRequest:function(){e(_())}}},y=(0,i.connect)(d,f)(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),t}())||r;t.default=y,u=o(9).default,p=o(9).leaveModule,u&&(u.register(_,"someAsync","E:/test/EternalNiu/src/MapArea/container.js"),u.register(d,"mapStateToProps","E:/test/EternalNiu/src/MapArea/container.js"),u.register(f,"mapDispatchToProps","E:/test/EternalNiu/src/MapArea/container.js"),u.register(y,"Container","E:/test/EternalNiu/src/MapArea/container.js"),p(e))}).call(this,o(20)(e))},909:function(e,t,o){"use strict";(function(e){var r;function n(e){return 180*e/3.141592653589793}function a(e){for(var t=0,o=0,r=0;r<e.length;r++)t+=e[r][0],o+=e[r][1];var n=t/e.length,a=o/e.length,i={};return i.x=n,i.y=a,i}function i(e,t,o,r){var a=r-t,i=o-e,l=Math.atan2(a,i);return(l=n(l))<0&&(l+=360),l}Object.defineProperty(t,"__esModule",{value:!0}),(r=o(9).enterModule)&&r(e);var l,s,c=function(e){for(var t=[],o=null,r=a(e),n=0,l=e.length;n<l;n++)o=i(r.x,r.y,e[n][0],e[n][1]),t.push({degree:o,latLng:e[n]});t.sort(function(e,t){return t.degree-e.degree});for(var s=[],c=0;c<t.length;c++)s.push(t[c].latLng);return s},u=c;t.default=u,l=o(9).default,s=o(9).leaveModule,l&&(l.register(n,"toDegrees","E:/test/EternalNiu/src/MapArea/test.js"),l.register(a,"calcCenterPoint","E:/test/EternalNiu/src/MapArea/test.js"),l.register(i,"getAngle1","E:/test/EternalNiu/src/MapArea/test.js"),l.register(c,"points","E:/test/EternalNiu/src/MapArea/test.js"),l.register(u,"default","E:/test/EternalNiu/src/MapArea/test.js"),s(e))}).call(this,o(20)(e))},910:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _input=__webpack_require__(172),_input2=_interopRequireDefault(_input),_button=__webpack_require__(74),_button2=_interopRequireDefault(_button),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},_createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),_dec,_class,_class2,_temp;__webpack_require__(233),__webpack_require__(230);var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(0),_reactAmapBinding=__webpack_require__(901),_reactHotLoader=__webpack_require__(9),_test=__webpack_require__(909),_test2=_interopRequireDefault(_test),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(9).enterModule,enterModule&&enterModule(module);var AMAP_KEY="964ffab2ef1edca12c97f817342c4315",AMAP_STYLE="amap://styles/9c109cbf2e0f55701c6ec4e5c90c56ba",polyEditor=void 0,List=(_dec=(0,_reactHotLoader.hot)(module),_dec((_temp=_class2=function(_React$Component){function List(e){_classCallCheck(this,List);var t=_possibleConstructorReturn(this,(List.__proto__||Object.getPrototypeOf(List)).call(this,e));return t.state={bounds:void 0,data:[[116.398258,39.9046],[116.382122,39.901176],[116.368904,39.913423],[116.387271,39.912501]],data1:[[116.398258,39.9046],[116.387271,39.912501],[116.382122,39.901176],[116.368904,39.913423]],data2:[[116.376907,39.910967],[116.384911,39.919505],[116.40109,39.919728],[116.411132,39.911408],[116.412076,39.899135],[116.402292,39.892353],[116.3874,39.892518],[116.376971,39.899267]],otherData:[[116.390233,39.906602],[116.400962,39.898589],[116.400661,39.906667],[116.395254,39.908668],[116.395769,39.894855],[116.390147,39.898049]],newData:[[116.368904,39.913423],[116.382122,39.901176],[116.387271,39.912501],[116.398258,39.9046]]},t}return _inherits(List,_React$Component),_createClass(List,[{key:"onMapComplete",value:function(e){this.map=e}},{key:"onPolygonComplete",value:function(e,t,o){this.polygon1=o}},{key:"onOtherPolygonComplete",value:function(e,t,o){this.polygon2=o}},{key:"cratePoly",value:function(){var e=this,t=this.map;t.plugin(["AMap.MouseTool"],function(){var o=new window.AMap.MouseTool(t);o.polygon({fillColor:"red",strokeColor:"green",fillOpacity:"0.5"}),o.on("draw",function(t){var r=t.obj.getPath().map(function(e){return[e.lng,e.lat]});e.setState(_extends({},e.state,{data:r})),o.close(!0)})})}},{key:"editPolygon",value:function(){var e=this,t=this.map;t.plugin(["AMap.PolyEditor"],function(){(polyEditor=new window.AMap.PolyEditor(t,e.polygon1)).open()}),this.polyEditor=polyEditor}},{key:"savePolygon",value:function(){if(polyEditor){var e=polyEditor.aq[0].map(function(e){return[e.lng,e.lat]});this.setState(_extends({},this.state,{data:e})),polyEditor.close()}}},{key:"deletePolygon",value:function(){polyEditor&&polyEditor.close(),this.setState(_extends({},this.state,{data:[]}))}},{key:"compare",value:function(){var e=this.polygon1.getPath(),t=this.polygon2.getPath(),o=window.AMap.GeometryUtil.isRingInRing(t,e),r=window.AMap.GeometryUtil.doesRingRingIntersect(t,e),n=window.AMap.GeometryUtil.ringRingClip(t,e),a=parseInt(window.AMap.GeometryUtil.ringArea(n)),i="两圈关系：在大圈外";o?i="两圈关系：在大圈内":r&&(i="两圈关系：两圈相交, 交叉区域面积为"+a+"平方米"),console.log(i)}},{key:"addressInputChange",value:function(e){window.AMap.plugin("AMap.Geocoder",function(){new window.AMap.Geocoder({city:"南京"}).getLocation("南京市江宁区金轮第一城",function(e,t){"complete"===e&&"OK"===t.info&&console.log(t)})})}},{key:"render",value:function(){var e=this.state,t=e.bounds,o=e.data,r=e.otherData,n=e.data1,a=(0,_test2.default)(r);return console.log(a),_react2.default.createElement("div",{style:{width:"100%",height:"100%"}},_react2.default.createElement(_button2.default,{onClick:this.cratePoly.bind(this)},"绘制"),_react2.default.createElement(_button2.default,{onClick:this.editPolygon.bind(this)},"编辑"),_react2.default.createElement(_button2.default,{onClick:this.savePolygon.bind(this)},"保存"),_react2.default.createElement(_button2.default,{onClick:this.deletePolygon.bind(this)},"清除"),_react2.default.createElement(_button2.default,{onClick:this.compare.bind(this)},"对比"),_react2.default.createElement(_input2.default,{placeholder:"请输入详细地址",onChange:this.addressInputChange.bind(this)}),_react2.default.createElement(_reactAmapBinding.AMap,{appKey:AMAP_KEY,bounds:t,version:"1.3.0",defaultCursor:"pointer",mapStyle:AMAP_STYLE,center:[116.3972443,39.91397024],onComplete:this.onMapComplete.bind(this),zoom:13},_react2.default.createElement(_reactAmapBinding.Polygon,{path:o,fillColor:"red",strokeColor:"green",fillOpacity:.5,onComplete:this.onPolygonComplete.bind(this,1)}),n.map(function(e,t){return _react2.default.createElement(_reactAmapBinding.Marker,{key:t,offset:[-10,-30],position:e})}),_react2.default.createElement(_reactAmapBinding.Polygon,{path:a,fillColor:"red",strokeColor:"green",fillOpacity:.5,onComplete:this.onOtherPolygonComplete.bind(this,2)})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),List}(_react2.default.Component),_class2.propTypes={classes:_propTypes.object,count:_propTypes.number,fetchSomeAsyncRequest:_propTypes.func},_class=_temp))||_class),reactHotLoader,leaveModule;exports.default=List,reactHotLoader=__webpack_require__(9).default,leaveModule=__webpack_require__(9).leaveModule,reactHotLoader&&(reactHotLoader.register(AMAP_KEY,"AMAP_KEY","E:/test/EternalNiu/src/MapArea/component.js"),reactHotLoader.register(AMAP_STYLE,"AMAP_STYLE","E:/test/EternalNiu/src/MapArea/component.js"),reactHotLoader.register(polyEditor,"polyEditor","E:/test/EternalNiu/src/MapArea/component.js"),reactHotLoader.register(List,"List","E:/test/EternalNiu/src/MapArea/component.js"),leaveModule(module))}).call(this,__webpack_require__(20)(module))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTWFwQXJlYS9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01hcEFyZWEvdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFwQXJlYS9jb21wb25lbnQuanMiXSwibmFtZXMiOlsiX3JlYWN0UmVkdXgiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX2NvbXBvbmVudCIsIl9hY3Rpb25zIiwic29tZUFzeW5jIiwiYXN5bmMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY291bnQiLCJtYXBBcmVhIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaFNvbWVBc3luY1JlcXVlc3QiLCJDb250YWluZXIiLCJjb25uZWN0IiwiQ29tcG9uZW50IiwidG9EZWdyZWVzIiwiYW5ncmFkIiwiY2FsY0NlbnRlclBvaW50IiwibGF0TG5nUG9pbnRzIiwic3VtWCIsInN1bVkiLCJpIiwibGVuZ3RoIiwiY2VudGVyWCIsImNlbnRlclkiLCJjZW50ZXJQb2ludCIsIngiLCJ5IiwiZ2V0QW5nbGUxIiwibGF0YSIsImxuZ2EiLCJsYXRiIiwibG5nYiIsImJybmciLCJNYXRoIiwiYXRhbjIiLCJwb2ludHMiLCJ0bXBTb3J0QXJyYXkiLCJsaW5lRGVncmVlIiwicG9pbnRDZW50ZXIiLCJsZW4iLCJwdXNoIiwiZGVncmVlIiwibGF0TG5nIiwic29ydCIsImEiLCJiIiwic29ydGVkQXJyYXkiLCJfcmVhY3QiLCJfcHJvcFR5cGVzIiwiX3JlYWN0QW1hcEJpbmRpbmciLCJfcmVhY3RIb3RMb2FkZXIiLCJfdGVzdCIsIkFNQVBfS0VZIiwiQU1BUF9TVFlMRSIsInBvbHlFZGl0b3IiLCJMaXN0IiwiaG90IiwibW9kdWxlIiwicHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9fcHJvdG9fXyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiY2FsbCIsImJvdW5kcyIsInVuZGVmaW5lZCIsImRhdGEiLCJkYXRhMSIsImRhdGEyIiwib3RoZXJEYXRhIiwibmV3RGF0YSIsIm1hcCIsImluZGV4IiwicG9seWdvbiIsInBvbHlnb24xIiwicG9seWdvbjIiLCJfc2VsZiIsInBsdWdpbiIsInBvbHlMaW5lIiwid2luZG93IiwiQU1hcCIsIk1vdXNlVG9vbCIsImZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwiZmlsbE9wYWNpdHkiLCJvbiIsImUiLCJwYXRoIiwib2JqIiwiZ2V0UGF0aCIsIm1hcmtlciIsImxuZyIsImxhdCIsInNldFN0YXRlIiwiX2V4dGVuZHMiLCJjbG9zZSIsIlBvbHlFZGl0b3IiLCJvcGVuIiwiYXEiLCJwb2x5Z29uMV9wYXRoIiwicG9seWdvbjJfcGF0aCIsImlzUmluZ0luUmluZyIsIkdlb21ldHJ5VXRpbCIsImRvZXNSaW5nUmluZ0ludGVyc2VjdCIsInJpbmdSaW5nQ2xpcCIsInJpbmdBcmVhIiwicGFyc2VJbnQiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiR2VvY29kZXIiLCJjaXR5IiwiZ2V0TG9jYXRpb24iLCJzdGF0dXMiLCJyZXN1bHQiLCJpbmZvIiwiX3N0YXRlIiwibmFtZSIsIl90ZXN0MiIsImRlZmF1bHQiLCJfcmVhY3QyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJfYnV0dG9uMiIsIm9uQ2xpY2siLCJjcmF0ZVBvbHkiLCJiaW5kIiwiZWRpdFBvbHlnb24iLCJzYXZlUG9seWdvbiIsImRlbGV0ZVBvbHlnb24iLCJjb21wYXJlIiwiX2lucHV0MiIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJhZGRyZXNzSW5wdXRDaGFuZ2UiLCJhcHBLZXkiLCJ2ZXJzaW9uIiwiZGVmYXVsdEN1cnNvciIsIm1hcFN0eWxlIiwiY2VudGVyIiwib25Db21wbGV0ZSIsIm9uTWFwQ29tcGxldGUiLCJ6b29tIiwiUG9seWdvbiIsIm9uUG9seWdvbkNvbXBsZXRlIiwiaXRlbSIsIk1hcmtlciIsImtleSIsIm9mZnNldCIsInBvc2l0aW9uIiwib25PdGhlclBvbHlnb25Db21wbGV0ZSIsIlJlYWN0IiwicHJvcFR5cGVzIiwiY2xhc3NlcyIsIm9iamVjdCIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiIrS0FBQSxRQUFBQSxFQUFBQyxFQUFBLEtBRUFDLEVBQUFELEVBQUEseUNBQ0FFLEVBQUFGLEVBQUEsd0NBRUVHLEVBQ0VDLFFBREZELFVBR0lFLEVBQWtCLFNBQUNDLEVBQU9DLEdBQzlCLE9BQ0VDLE1BQU9GLEVBQU1HLFFBQVFELFFBSW5CRSxFQUFxQixTQUFDQyxFQUFVSixHQUNwQyxPQUNFSyxzQkFBdUIsV0FDckJELEVBQVNSLFFBU01VLEdBSnBCLEVBQUFkLEVBQUFlLFNBQVFULEVBQWlCSyxtckJBSWFLLDhCQUFsQkYsbURBckJuQlYsd0VBR0lFLDhFQU1BSyxpRkFZZUcsOElDckJyQixTQUFTRyxFQUFVQyxHQUNmLE9BQWdCLElBQVRBLEVBQWlCLGtCQVE1QixTQUFTQyxFQUFnQkMsR0FHckIsSUFGQSxJQUFJQyxFQUFLLEVBQ0xDLEVBQUssRUFDQUMsRUFBRSxFQUFHQSxFQUFFSCxFQUFhSSxPQUFRRCxJQUNqQ0YsR0FBTUQsRUFBYUcsR0FBRyxHQUN0QkQsR0FBTUYsRUFBYUcsR0FBRyxHQUUxQixJQUFJRSxFQUFRSixFQUFLRCxFQUFhSSxPQUMxQkUsRUFBUUosRUFBS0YsRUFBYUksT0FDMUJHLEtBR0osT0FGQUEsRUFBWUMsRUFBRUgsRUFDZEUsRUFBWUUsRUFBRUgsRUFDUEMsRUFXWCxTQUFTRyxFQUFVQyxFQUFNQyxFQUFNQyxFQUFNQyxHQUNqQyxJQUFJTixFQUFJTSxFQUFPRixFQUNYSCxFQUFJSSxFQUFPRixFQUNYSSxFQUFPQyxLQUFLQyxNQUFNVCxFQUFHQyxHQU16QixPQUpBTSxFQUFPbEIsRUFBVWtCLElBQ04sSUFDUEEsR0FBYyxLQUVYQSw4RUFRWCxRQUFNRyxFQUFTLFNBQUNsQixHQUlaLElBSEEsSUFBSW1CLEtBQ0FDLEVBQVcsS0FD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dGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQge2FzeW5jfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5jb25zdCB7XHJcbiAgc29tZUFzeW5jLFxyXG59ID0gYXN5bmM7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvdW50OiBzdGF0ZS5tYXBBcmVhLmNvdW50LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoU29tZUFzeW5jUmVxdWVzdDogKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzb21lQXN5bmMoKSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5AY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuLyoqXHJcbiAqIENvbm5lY3RlZCByZWFjdCBjb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiDorqHnrpfkuK3lv4PngrnnmoTmlrnms5VcclxuICogQHBhcmFtICB7W3R5cGVdfSBhbmdyYWQgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5mdW5jdGlvbiB0b0RlZ3JlZXMoYW5ncmFkKSB7XHJcbiAgICByZXR1cm4gYW5ncmFkICogMTgwLjAgLyAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2O1xyXG59XHJcblxyXG4vKipcclxuICogW2NhbGNDZW50ZXJQb2ludCBkZXNjcmlwdGlvbl1cclxuICogQHBhcmFtICB7W3R5cGVdfSBsYXRMbmdQb2ludHMgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjQ2VudGVyUG9pbnQobGF0TG5nUG9pbnRzKSB7XHJcbiAgICBsZXQgc3VtWD0wO1xyXG4gICAgbGV0IHN1bVk9MDtcclxuICAgIGZvciAobGV0IGk9MDsgaTxsYXRMbmdQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdW1YKz1sYXRMbmdQb2ludHNbaV1bMF07XHJcbiAgICAgICAgc3VtWSs9bGF0TG5nUG9pbnRzW2ldWzFdO1xyXG4gICAgfVxyXG4gICAgbGV0IGNlbnRlclg9c3VtWC9sYXRMbmdQb2ludHMubGVuZ3RoO1xyXG4gICAgbGV0IGNlbnRlclk9c3VtWS9sYXRMbmdQb2ludHMubGVuZ3RoO1xyXG4gICAgbGV0IGNlbnRlclBvaW50PSB7fTtcclxuICAgIGNlbnRlclBvaW50Lng9Y2VudGVyWDtcclxuICAgIGNlbnRlclBvaW50Lnk9Y2VudGVyWTtcclxuICAgIHJldHVybiBjZW50ZXJQb2ludDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFtnZXRBbmdsZTEgZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge1t0eXBlXX0gbGF0YSBbZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge1t0eXBlXX0gbG5nYSBbZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge1t0eXBlXX0gbGF0YiBbZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge1t0eXBlXX0gbG5nYiBbZGVzY3JpcHRpb25dXHJcbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBbmdsZTEobGF0YSwgbG5nYSwgbGF0YiwgbG5nYikge1xyXG4gICAgbGV0IHggPSBsbmdiIC0gbG5nYTtcclxuICAgIGxldCB5ID0gbGF0YiAtIGxhdGE7XHJcbiAgICBsZXQgYnJuZyA9IE1hdGguYXRhbjIoeCwgeSk7XHJcblxyXG4gICAgYnJuZyA9IHRvRGVncmVlcyhicm5nKTtcclxuICAgIGlmIChicm5nIDwgMCkge1xyXG4gICAgICAgIGJybmcgPSBicm5nICsgMzYwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJybmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbZ2VuZU9yZGVybHlEYXRhcyBkZXNjcmlwdGlvbl1cclxuICogQHBhcmFtICB7W3R5cGVdfSBsYXRMbmdQb2ludHMgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5jb25zdCBwb2ludHMgPSAobGF0TG5nUG9pbnRzKSA9PiB7XHJcbiAgICBsZXQgdG1wU29ydEFycmF5PVtdO1xyXG4gICAgbGV0IGxpbmVEZWdyZWU9bnVsbDtcclxuICAgIGxldCBwb2ludENlbnRlcj1jYWxjQ2VudGVyUG9pbnQobGF0TG5nUG9pbnRzKTtcclxuICAgIGZvciAobGV0IGk9MCwgbGVuPWxhdExuZ1BvaW50cy5sZW5ndGg7IGk8bGVuOyBpKyspIHtcclxuICAgICAgICBsaW5lRGVncmVlPWdldEFuZ2xlMShwb2ludENlbnRlci54LCBwb2ludENlbnRlci55LCBsYXRMbmdQb2ludHNbaV1bMF0sIGxhdExuZ1BvaW50c1tpXVsxXSk7XHJcbiAgICAgICAgdG1wU29ydEFycmF5LnB1c2goe2RlZ3JlZTogbGluZURlZ3JlZSwgbGF0TG5nOiBsYXRMbmdQb2ludHNbaV19KTtcclxuICAgIH1cclxuICAgIHRtcFNvcnRBcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYi5kZWdyZWUgLSBhLmRlZ3JlZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBzb3J0ZWRBcnJheT1bXTtcclxuICAgIGZvciAobGV0IGk9MDsgaTx0bXBTb3J0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKHRtcFNvcnRBcnJheVtpXS5sYXRMbmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvcnRlZEFycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9pbnRzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIG9iamVjdCxcclxuICBudW1iZXIsXHJcbiAgZnVuYyxcclxufSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtCdXR0b24sIElucHV0fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtcclxuICBBTWFwLFxyXG4gIE1hcmtlcixcclxuICBQb2x5Z29uLFxyXG59IGZyb20gJ3JlYWN0LWFtYXAtYmluZGluZyc7XHJcbmltcG9ydCB7aG90fSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJztcclxuY29uc3QgQU1BUF9LRVkgPSAnOTY0ZmZhYjJlZjFlZGNhMTJjOTdmODE3MzQyYzQzMTUnO1xyXG5jb25zdCBBTUFQX1NUWUxFID0gJ2FtYXA6Ly9zdHlsZXMvOWMxMDljYmYyZTBmNTU3MDFjNmVjNGU1YzkwYzU2YmEnO1xyXG5pbXBvcnQgcG9pbnRzIGZyb20gJy4vdGVzdC5qcyc7XHJcblxyXG5sZXQgcG9seUVkaXRvcjtcclxuQGhvdChtb2R1bGUpXHJcbi8qKlxyXG4gKiBMaXN0IFBhZ2VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBjbGFzc2VzOiBvYmplY3QsXHJcbiAgICBjb3VudDogbnVtYmVyLFxyXG4gICAgZmV0Y2hTb21lQXN5bmNSZXF1ZXN0OiBmdW5jLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBib3VuZHM6IHVuZGVmaW5lZCxcclxuICAgICAgZGF0YTogW1xyXG4gICAgICAgIFsxMTYuMzk4MjU4LCAzOS45MDQ2XSxcclxuICAgICAgICBbMTE2LjM4MjEyMiwgMzkuOTAxMTc2XSxcclxuICAgICAgICBbMTE2LjM2ODkwNCwgMzkuOTEzNDIzXSxcclxuICAgICAgICBbMTE2LjM4NzI3MSwgMzkuOTEyNTAxXSxcclxuICAgICAgXSxcclxuICAgICAgZGF0YTE6IFtcclxuICAgICAgICBbMTE2LjM5ODI1OCwgMzkuOTA0Nl0sXHJcbiAgICAgICAgWzExNi4zODcyNzEsIDM5LjkxMjUwMV0sXHJcbiAgICAgICAgWzExNi4zODIxMjIsIDM5LjkwMTE3Nl0sXHJcbiAgICAgICAgWzExNi4zNjg5MDQsIDM5LjkxMzQyM10sXHJcbiAgICAgIF0sXHJcbiAgICAgIGRhdGEyOiBbXHJcbiAgICAgICAgWzExNi4zNzY5MDcsIDM5LjkxMDk2N10sXHJcbiAgICAgICAgWzExNi4zODQ5MTEsIDM5LjkxOTUwNV0sXHJcbiAgICAgICAgWzExNi40MDEwOSwgMzkuOTE5NzI4XSxcclxuICAgICAgICBbMTE2LjQxMTEzMiwgMzkuOTExNDA4XSxcclxuICAgICAgICBbMTE2LjQxMjA3NiwgMzkuODk5MTM1XSxcclxuICAgICAgICBbMTE2LjQwMjI5MiwgMzkuODkyMzUzXSxcclxuICAgICAgICBbMTE2LjM4NzQsIDM5Ljg5MjUxOF0sXHJcbiAgICAgICAgWzExNi4zNzY5NzEsIDM5Ljg5OTI2N10sXHJcbiAgICAgIF0sXHJcbiAgICAgIG90aGVyRGF0YTogW1xyXG4gICAgICAgIFsxMTYuMzkwMjMzLCAzOS45MDY2MDJdLFxyXG4gICAgICAgIFsxMTYuNDAwOTYyLCAzOS44OTg1ODldLFxyXG4gICAgICAgIFsxMTYuNDAwNjYxLCAzOS45MDY2NjddLFxyXG4gICAgICAgIFsxMTYuMzk1MjU0LCAzOS45MDg2NjhdLFxyXG4gICAgICAgIFsxMTYuMzk1NzY5LCAzOS44OTQ4NTVdLFxyXG4gICAgICAgIFsxMTYuMzkwMTQ3LCAzOS44OTgwNDldLFxyXG4gICAgICBdLFxyXG4gICAgICBuZXdEYXRhOiBbXHJcbiAgICAgICAgWzExNi4zNjg5MDQsIDM5LjkxMzQyM10sXHJcbiAgICAgICAgWzExNi4zODIxMjIsIDM5LjkwMTE3Nl0sXHJcbiAgICAgICAgWzExNi4zODcyNzEsIDM5LjkxMjUwMV0sXHJcbiAgICAgICAgWzExNi4zOTgyNTgsIDM5LjkwNDYwMF0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogW29uTWFwQ29tcGxldGUgZGVzY3JpcHRpb25dXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBtYXAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIG9uTWFwQ29tcGxldGUobWFwKSB7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFtvbk90aGVyUG9seWdvbkNvbXBsZXRlIGRlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggICBbZGVzY3JpcHRpb25dXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBtYXAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHBvbHlnb24gW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIG9uUG9seWdvbkNvbXBsZXRlKGluZGV4LCBtYXAsIHBvbHlnb24pIHtcclxuICAgIHRoaXMucG9seWdvbjEgPSBwb2x5Z29uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogW29uT3RoZXJQb2x5Z29uQ29tcGxldGUgZGVzY3JpcHRpb25dXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBpbmRleCAgIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG1hcCAgICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gcG9seWdvbiBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgIG9uT3RoZXJQb2x5Z29uQ29tcGxldGUoaW5kZXgsIG1hcCwgcG9seWdvbikge1xyXG4gICAgdGhpcy5wb2x5Z29uMiA9IHBvbHlnb247XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFtjcmF0ZVBvbHkgZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgY3JhdGVQb2x5KCkge1xyXG4gICAgY29uc3QgX3NlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXA7XHJcbiAgICBtYXAucGx1Z2luKFsnQU1hcC5Nb3VzZVRvb2wnXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0IHBvbHlMaW5lID0gbmV3IHdpbmRvdy5BTWFwLk1vdXNlVG9vbChtYXApO1xyXG4gICAgICBwb2x5TGluZS5wb2x5Z29uKHtcclxuICAgICAgICBmaWxsQ29sb3I6ICdyZWQnLFxyXG4gICAgICAgIHN0cm9rZUNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIGZpbGxPcGFjaXR5OiAnMC41JyxcclxuICAgICAgfSk7XHJcbiAgICAgIHBvbHlMaW5lLm9uKCdkcmF3JywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBwYXRoID0gZS5vYmouZ2V0UGF0aCgpLm1hcCgobWFya2VyKSA9PiAoW21hcmtlci5sbmcsIG1hcmtlci5sYXRdKSk7XHJcbiAgICAgICAgIF9zZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLl9zZWxmLnN0YXRlLFxyXG4gICAgICAgICAgZGF0YTogcGF0aCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBwb2x5TGluZS5jbG9zZSh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFtoYW5kbGVQbG9uIGRlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZSBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgZWRpdFBvbHlnb24oKSB7XHJcbiAgICBjb25zdCBfc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcDtcclxuICAgIG1hcC5wbHVnaW4oWydBTWFwLlBvbHlFZGl0b3InXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgLy8g5a6e5L6L5YyW5aSa6L655b2i57yW6L6R5Zmo77yM5Lyg5YWl5Zyw5Zu+5a6e5L6L5ZKM6KaB6L+b6KGM57yW6L6R55qE5aSa6L655b2i5a6e5L6LXHJcbiAgICAgIHBvbHlFZGl0b3IgPSBuZXcgd2luZG93LkFNYXAuUG9seUVkaXRvcihtYXAsIF9zZWxmLnBvbHlnb24xKTtcclxuXHJcbiAgICAgLy8g5byA5ZCv57yW6L6R5qih5byPXHJcbiAgICAgIHBvbHlFZGl0b3Iub3BlbigpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnBvbHlFZGl0b3IgPSBwb2x5RWRpdG9yO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogW3NhdmVQb2x5Z29uIGRlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIHNhdmVQb2x5Z29uKCkge1xyXG4gICAgaWYgKHBvbHlFZGl0b3IpIHtcclxuICAgICAgY29uc3QgcG9seWdvbiA9IHBvbHlFZGl0b3IuYXFbMF0ubWFwKChtYXJrZXIpID0+IChbbWFya2VyLmxuZywgbWFya2VyLmxhdF0pKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICBkYXRhOiBwb2x5Z29uLFxyXG4gICAgICB9KTtcclxuICAgICAgcG9seUVkaXRvci5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogW2RlbGV0ZVBvbHlnb24gZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgZGVsZXRlUG9seWdvbigpIHtcclxuICAgIGlmIChwb2x5RWRpdG9yKSB7XHJcbiAgICAgIHBvbHlFZGl0b3IuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICBkYXRhOiBbXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogW2NvbXBhcmUgZGVzY3JpcHRpb25dXHJcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgY29tcGFyZSgpIHtcclxuICAgIGNvbnN0IHBvbHlnb24xX3BhdGggPSB0aGlzLnBvbHlnb24xLmdldFBhdGgoKTtcclxuICAgIGNvbnN0IHBvbHlnb24yX3BhdGggPSB0aGlzLnBvbHlnb24yLmdldFBhdGgoKTtcclxuICAgIC8vIOWwj+WciOaYr+WQpuWcqOWkp+WciOWGhVxyXG4gICAgY29uc3QgaXNSaW5nSW5SaW5nID0gd2luZG93LkFNYXAuR2VvbWV0cnlVdGlsLmlzUmluZ0luUmluZyhwb2x5Z29uMl9wYXRoLCBwb2x5Z29uMV9wYXRoKTtcclxuICAgIC8vIOS4pOWciOaYr+WQpuS6pOWPiVxyXG4gICAgY29uc3QgZG9lc1JpbmdSaW5nSW50ZXJzZWN0ID0gd2luZG93LkFNYXAuR2VvbWV0cnlVdGlsLmRvZXNSaW5nUmluZ0ludGVyc2VjdChwb2x5Z29uMl9wYXRoLCBwb2x5Z29uMV9wYXRoKTtcclxuICAgIGNvbnN0IHJpbmdSaW5nQ2xpcCA9IHdpbmRvdy5BTWFwLkdlb21ldHJ5VXRpbC5yaW5nUmluZ0NsaXAocG9seWdvbjJfcGF0aCwgcG9seWdvbjFfcGF0aCk7XHJcbiAgICBjb25zdCByaW5nQXJlYSA9IHBhcnNlSW50KHdpbmRvdy5BTWFwLkdlb21ldHJ5VXRpbC5yaW5nQXJlYShyaW5nUmluZ0NsaXApKTtcclxuICAgIFxyXG4gICAgbGV0IHRleHQgPSAn5Lik5ZyI5YWz57O777ya5Zyo5aSn5ZyI5aSWJztcclxuICAgIGlmIChpc1JpbmdJblJpbmcpIHtcclxuICAgICAgICB0ZXh0ID0gJ+S4pOWciOWFs+ezu++8muWcqOWkp+WciOWGhSc7XHJcbiAgICB9IGVsc2UgaWYgKGRvZXNSaW5nUmluZ0ludGVyc2VjdCkge1xyXG4gICAgICAgIHRleHQgPSAn5Lik5ZyI5YWz57O777ya5Lik5ZyI55u45LqkLCDkuqTlj4nljLrln5/pnaLnp6/kuLonK3JpbmdBcmVhKyflubPmlrnnsbMnO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbYWRkcmVzc0lucHV0Q2hhbmdlIGRlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gZXZlbnQgW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGFkZHJlc3NJbnB1dENoYW5nZShldmVudCkge1xyXG4gICAgd2luZG93LkFNYXAucGx1Z2luKCdBTWFwLkdlb2NvZGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0IGdlb2NvZGVyID0gbmV3IHdpbmRvdy5BTWFwLkdlb2NvZGVyKHtcclxuICAgICAgICAvLyBjaXR5IOaMh+Wumui/m+ihjOe8lueggeafpeivoueahOWfjuW4gu+8jOaUr+aMgeS8oOWFpeWfjuW4guWQjeOAgWFkY29kZSDlkowgY2l0eWNvZGVcclxuICAgICAgICBjaXR5OiAn5Y2X5LqsJyxcclxuICAgICAgfSk7XHJcbiAgICAgIGdlb2NvZGVyLmdldExvY2F0aW9uKCfljZfkuqzluILmsZ/lroHljLrph5Hova7nrKzkuIDln44nLCBmdW5jdGlvbihzdGF0dXMsIHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdjb21wbGV0ZScgJiYgcmVzdWx0LmluZm8gPT09ICdPSycpIHtcclxuICAgICAgICAgIC8vIHJlc3VsdOS4reWvueW6lOivpue7huWcsOeQhuWdkOagh+S/oeaBr1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXIgTGlzdCBQYWdlXHJcbiAgICogQHJldHVybiB7Q29tcG9uZW50fVxyXG4gICAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtib3VuZHMsIGRhdGEsIG90aGVyRGF0YSwgZGF0YTF9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IG5hbWUgPSBwb2ludHMob3RoZXJEYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnfX0+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNyYXRlUG9seS5iaW5kKHRoaXMpfT7nu5jliLY8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuZWRpdFBvbHlnb24uYmluZCh0aGlzKX0+57yW6L6RPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNhdmVQb2x5Z29uLmJpbmQodGhpcyl9PuS/neWtmDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5kZWxldGVQb2x5Z29uLmJpbmQodGhpcyl9Pua4hemZpDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jb21wYXJlLmJpbmQodGhpcyl9PuWvueavlDwvQnV0dG9uPlxyXG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj0n6K+36L6T5YWl6K+m57uG5Zyw5Z2AJyBvbkNoYW5nZT17dGhpcy5hZGRyZXNzSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgIDxBTWFwXHJcbiAgICAgICAgICBhcHBLZXk9e0FNQVBfS0VZfVxyXG4gICAgICAgICAgYm91bmRzPXtib3VuZHN9XHJcbiAgICAgICAgICB2ZXJzaW9uPScxLjMuMCdcclxuICAgICAgICAgIGRlZmF1bHRDdXJzb3I9J3BvaW50ZXInXHJcbiAgICAgICAgICBtYXBTdHlsZT17QU1BUF9TVFlMRX1cclxuICAgICAgICAgIGNlbnRlcj17WzExNi4zOTcyNDQzLCAzOS45MTM5NzAyNF19XHJcbiAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uTWFwQ29tcGxldGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgIHpvb209ezEzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQb2x5Z29uXHJcbiAgICAgICAgICAgIHBhdGg9e2RhdGF9XHJcbiAgICAgICAgICAgIGZpbGxDb2xvcj0ncmVkJ1xyXG4gICAgICAgICAgICBzdHJva2VDb2xvcj0nZ3JlZW4nXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5PXswLjV9XHJcbiAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Qb2x5Z29uQ29tcGxldGUuYmluZCh0aGlzLCAxKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGExLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBvZmZzZXQ9e1stMTAsIC0zMF19XHJcbiAgICAgICAgICAgICAgcG9zaXRpb249e2l0ZW19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8UG9seWdvblxyXG4gICAgICAgICAgICBwYXRoPXtuYW1lfVxyXG4gICAgICAgICAgICBmaWxsQ29sb3I9J3JlZCdcclxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I9J2dyZWVuJ1xyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eT17MC41fVxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uT3RoZXJQb2x5Z29uQ29tcGxldGUuYmluZCh0aGlzLCAyKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9BTWFwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=