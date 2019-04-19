(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/MapArea/component.js":
/*!**********************************!*\
  !*** ./src/MapArea/component.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _input = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

__webpack_require__(/*! antd/es/input/style */ "./node_modules/antd/es/input/style/index.js");

__webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _reactAmapBinding = __webpack_require__(/*! react-amap-binding */ "./node_modules/react-amap-binding/index.es.js");

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");

var _test = __webpack_require__(/*! ./test.js */ "./src/MapArea/test.js");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AMAP_KEY = '964ffab2ef1edca12c97f817342c4315';
var AMAP_STYLE = 'amap://styles/9c109cbf2e0f55701c6ec4e5c90c56ba';


var polyEditor = void 0;

/**
 * List Page
 */
var List = (_dec = (0, _reactHotLoader.hot)(module), _dec(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(List, _React$Component);

  /**
   * Constructor
   * @param {Object} props
   */
  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.state = {
      bounds: undefined,
      data: [[116.398258, 39.9046], [116.382122, 39.901176], [116.368904, 39.913423], [116.387271, 39.912501]],
      data1: [[116.398258, 39.9046], [116.387271, 39.912501], [116.382122, 39.901176], [116.368904, 39.913423]],
      data2: [[116.376907, 39.910967], [116.384911, 39.919505], [116.40109, 39.919728], [116.411132, 39.911408], [116.412076, 39.899135], [116.402292, 39.892353], [116.3874, 39.892518], [116.376971, 39.899267]],
      otherData: [[116.390233, 39.906602], [116.400962, 39.898589], [116.400661, 39.906667], [116.395254, 39.908668], [116.395769, 39.894855], [116.390147, 39.898049]],
      newData: [[116.368904, 39.913423], [116.382122, 39.901176], [116.387271, 39.912501], [116.398258, 39.904600]]
    };
    return _this;
  }

  /**
   * [onMapComplete description]
   * @param  {[type]} map [description]
   */


  _createClass(List, [{
    key: 'onMapComplete',
    value: function onMapComplete(map) {
      this.map = map;
    }

    /**
     * [onOtherPolygonComplete description]
     * @param  {[type]} index   [description]
     * @param  {[type]} map     [description]
     * @param  {[type]} polygon [description]
     */

  }, {
    key: 'onPolygonComplete',
    value: function onPolygonComplete(index, map, polygon) {
      this.polygon1 = polygon;
    }

    /**
     * [onOtherPolygonComplete description]
     * @param  {[type]} index   [description]
     * @param  {[type]} map     [description]
     * @param  {[type]} polygon [description]
     */

  }, {
    key: 'onOtherPolygonComplete',
    value: function onOtherPolygonComplete(index, map, polygon) {
      this.polygon2 = polygon;
    }
    /**
     * [cratePoly description]
     */

  }, {
    key: 'cratePoly',
    value: function cratePoly() {
      var _self = this;
      var map = this.map;
      map.plugin(['AMap.MouseTool'], function () {
        var polyLine = new window.AMap.MouseTool(map);
        polyLine.polygon({
          fillColor: 'red',
          strokeColor: 'green',
          fillOpacity: '0.5'
        });
        polyLine.on('draw', function (e) {
          var path = e.obj.getPath().map(function (marker) {
            return [marker.lng, marker.lat];
          });
          _self.setState(_extends({}, _self.state, {
            data: path
          }));
          polyLine.close(true);
        });
      });
    }

    /**
     * [handlePlon description]
     * @param  {[type]} e [description]
     */

  }, {
    key: 'editPolygon',
    value: function editPolygon() {
      var _self = this;
      var map = this.map;
      map.plugin(['AMap.PolyEditor'], function () {
        // 实例化多边形编辑器，传入地图实例和要进行编辑的多边形实例
        polyEditor = new window.AMap.PolyEditor(map, _self.polygon1);

        // 开启编辑模式
        polyEditor.open();
      });
      this.polyEditor = polyEditor;
    }

    /**
     * [savePolygon description]
     */

  }, {
    key: 'savePolygon',
    value: function savePolygon() {
      if (polyEditor) {
        var polygon = polyEditor.aq[0].map(function (marker) {
          return [marker.lng, marker.lat];
        });
        this.setState(_extends({}, this.state, {
          data: polygon
        }));
        polyEditor.close();
      }
    }

    /**
     * [deletePolygon description]
     */

  }, {
    key: 'deletePolygon',
    value: function deletePolygon() {
      if (polyEditor) {
        polyEditor.close();
      }
      this.setState(_extends({}, this.state, {
        data: []
      }));
    }

    /**
     * [compare description]
     * @return {[type]} [description]
     */

  }, {
    key: 'compare',
    value: function compare() {
      var polygon1_path = this.polygon1.getPath();
      var polygon2_path = this.polygon2.getPath();
      // 小圈是否在大圈内
      var isRingInRing = window.AMap.GeometryUtil.isRingInRing(polygon2_path, polygon1_path);
      // 两圈是否交叉
      var doesRingRingIntersect = window.AMap.GeometryUtil.doesRingRingIntersect(polygon2_path, polygon1_path);
      var ringRingClip = window.AMap.GeometryUtil.ringRingClip(polygon2_path, polygon1_path);
      var ringArea = parseInt(window.AMap.GeometryUtil.ringArea(ringRingClip));

      var text = '两圈关系：在大圈外';
      if (isRingInRing) {
        text = '两圈关系：在大圈内';
      } else if (doesRingRingIntersect) {
        text = '两圈关系：两圈相交, 交叉区域面积为' + ringArea + '平方米';
      }
      console.log(text);
    }

    /**
     * [addressInputChange description]
     * @param  {[type]} event [description]
     */

  }, {
    key: 'addressInputChange',
    value: function addressInputChange(event) {
      window.AMap.plugin('AMap.Geocoder', function () {
        var geocoder = new window.AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city: '南京'
        });
        geocoder.getLocation('南京市江宁区金轮第一城', function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // result中对应详细地理坐标信息
            console.log(result);
          }
        });
      });
    }

    /**
     * Render List Page
     * @return {Component}
     */

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          bounds = _state.bounds,
          data = _state.data,
          otherData = _state.otherData,
          data1 = _state.data1;

      var name = (0, _test2.default)(otherData);
      console.log(name);
      return _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '100%' } },
        _react2.default.createElement(
          _button2.default,
          { onClick: this.cratePoly.bind(this) },
          '\u7ED8\u5236'
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: this.editPolygon.bind(this) },
          '\u7F16\u8F91'
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: this.savePolygon.bind(this) },
          '\u4FDD\u5B58'
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: this.deletePolygon.bind(this) },
          '\u6E05\u9664'
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: this.compare.bind(this) },
          '\u5BF9\u6BD4'
        ),
        _react2.default.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740', onChange: this.addressInputChange.bind(this) }),
        _react2.default.createElement(
          _reactAmapBinding.AMap,
          {
            appKey: AMAP_KEY,
            bounds: bounds,
            version: '1.3.0',
            defaultCursor: 'pointer',
            mapStyle: AMAP_STYLE,
            center: [116.3972443, 39.91397024],
            onComplete: this.onMapComplete.bind(this),
            zoom: 13
          },
          _react2.default.createElement(_reactAmapBinding.Polygon, {
            path: data,
            fillColor: 'red',
            strokeColor: 'green',
            fillOpacity: 0.5,
            onComplete: this.onPolygonComplete.bind(this, 1)
          }),
          data1.map(function (item, index) {
            return _react2.default.createElement(_reactAmapBinding.Marker, {
              key: index,
              offset: [-10, -30],
              position: item
            });
          }),
          _react2.default.createElement(_reactAmapBinding.Polygon, {
            path: name,
            fillColor: 'red',
            strokeColor: 'green',
            fillOpacity: 0.5,
            onComplete: this.onOtherPolygonComplete.bind(this, 2)
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return List;
}(_react2.default.Component), _class2.propTypes = {
  classes: _propTypes.object,
  count: _propTypes.number,
  fetchSomeAsyncRequest: _propTypes.func
}, _temp)) || _class);
exports.default = List;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AMAP_KEY, 'AMAP_KEY', 'E:/test/EternalNiu/src/MapArea/component.js');
  reactHotLoader.register(AMAP_STYLE, 'AMAP_STYLE', 'E:/test/EternalNiu/src/MapArea/component.js');
  reactHotLoader.register(polyEditor, 'polyEditor', 'E:/test/EternalNiu/src/MapArea/component.js');
  reactHotLoader.register(List, 'List', 'E:/test/EternalNiu/src/MapArea/component.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/MapArea/container.js":
/*!**********************************!*\
  !*** ./src/MapArea/container.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _component = __webpack_require__(/*! ./component */ "./src/MapArea/component.js");

var _component2 = _interopRequireDefault(_component);

var _actions = __webpack_require__(/*! ./actions */ "./src/MapArea/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var someAsync = _actions.async.someAsync;


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    count: state.mapArea.count
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchSomeAsyncRequest: function fetchSomeAsyncRequest() {
      dispatch(someAsync());
    }
  };
};

/**
 * Connected react component
 */
var Container = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  return Container;
}(_component2.default)) || _class);
exports.default = Container;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(someAsync, 'someAsync', 'E:/test/EternalNiu/src/MapArea/container.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'E:/test/EternalNiu/src/MapArea/container.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'E:/test/EternalNiu/src/MapArea/container.js');
  reactHotLoader.register(Container, 'Container', 'E:/test/EternalNiu/src/MapArea/container.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/MapArea/test.js":
/*!*****************************!*\
  !*** ./src/MapArea/test.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

/**
 * 计算中心点的方法
 * @param  {[type]} angrad [description]
 * @return {[type]}        [description]
 */
function toDegrees(angrad) {
    return angrad * 180.0 / 3.14159265358979323846;
}

/**
 * [calcCenterPoint description]
 * @param  {[type]} latLngPoints [description]
 * @return {[type]}              [description]
 */
function calcCenterPoint(latLngPoints) {
    var sumX = 0;
    var sumY = 0;
    for (var i = 0; i < latLngPoints.length; i++) {
        sumX += latLngPoints[i][0];
        sumY += latLngPoints[i][1];
    }
    var centerX = sumX / latLngPoints.length;
    var centerY = sumY / latLngPoints.length;
    var centerPoint = {};
    centerPoint.x = centerX;
    centerPoint.y = centerY;
    return centerPoint;
}

/**
 * [getAngle1 description]
 * @param  {[type]} lata [description]
 * @param  {[type]} lnga [description]
 * @param  {[type]} latb [description]
 * @param  {[type]} lngb [description]
 * @return {[type]}      [description]
 */
function getAngle1(lata, lnga, latb, lngb) {
    var x = lngb - lnga;
    var y = latb - lata;
    var brng = Math.atan2(x, y);

    brng = toDegrees(brng);
    if (brng < 0) {
        brng = brng + 360;
    }
    return brng;
}

/**
 * [geneOrderlyDatas description]
 * @param  {[type]} latLngPoints [description]
 * @return {[type]}              [description]
 */
var points = function points(latLngPoints) {
    var tmpSortArray = [];
    var lineDegree = null;
    var pointCenter = calcCenterPoint(latLngPoints);
    for (var i = 0, len = latLngPoints.length; i < len; i++) {
        lineDegree = getAngle1(pointCenter.x, pointCenter.y, latLngPoints[i][0], latLngPoints[i][1]);
        tmpSortArray.push({ degree: lineDegree, latLng: latLngPoints[i] });
    }
    tmpSortArray.sort(function (a, b) {
        return b.degree - a.degree;
    });

    var sortedArray = [];
    for (var _i = 0; _i < tmpSortArray.length; _i++) {
        sortedArray.push(tmpSortArray[_i].latLng);
    }
    return sortedArray;
};

var _default = points;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(toDegrees, "toDegrees", "E:/test/EternalNiu/src/MapArea/test.js");
    reactHotLoader.register(calcCenterPoint, "calcCenterPoint", "E:/test/EternalNiu/src/MapArea/test.js");
    reactHotLoader.register(getAngle1, "getAngle1", "E:/test/EternalNiu/src/MapArea/test.js");
    reactHotLoader.register(points, "points", "E:/test/EternalNiu/src/MapArea/test.js");
    reactHotLoader.register(_default, "default", "E:/test/EternalNiu/src/MapArea/test.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTWFwQXJlYS9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01hcEFyZWEvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9NYXBBcmVhL3Rlc3QuanMiXSwibmFtZXMiOlsiQU1BUF9LRVkiLCJBTUFQX1NUWUxFIiwicG9seUVkaXRvciIsIkxpc3QiLCJtb2R1bGUiLCJwcm9wcyIsInN0YXRlIiwiYm91bmRzIiwidW5kZWZpbmVkIiwiZGF0YSIsImRhdGExIiwiZGF0YTIiLCJvdGhlckRhdGEiLCJuZXdEYXRhIiwibWFwIiwiaW5kZXgiLCJwb2x5Z29uIiwicG9seWdvbjEiLCJwb2x5Z29uMiIsIl9zZWxmIiwicGx1Z2luIiwicG9seUxpbmUiLCJ3aW5kb3ciLCJBTWFwIiwiTW91c2VUb29sIiwiZmlsbENvbG9yIiwic3Ryb2tlQ29sb3IiLCJmaWxsT3BhY2l0eSIsIm9uIiwiZSIsInBhdGgiLCJvYmoiLCJnZXRQYXRoIiwibWFya2VyIiwibG5nIiwibGF0Iiwic2V0U3RhdGUiLCJjbG9zZSIsIlBvbHlFZGl0b3IiLCJvcGVuIiwiYXEiLCJwb2x5Z29uMV9wYXRoIiwicG9seWdvbjJfcGF0aCIsImlzUmluZ0luUmluZyIsIkdlb21ldHJ5VXRpbCIsImRvZXNSaW5nUmluZ0ludGVyc2VjdCIsInJpbmdSaW5nQ2xpcCIsInJpbmdBcmVhIiwicGFyc2VJbnQiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwiZ2VvY29kZXIiLCJHZW9jb2RlciIsImNpdHkiLCJnZXRMb2NhdGlvbiIsInN0YXR1cyIsInJlc3VsdCIsImluZm8iLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJjcmF0ZVBvbHkiLCJiaW5kIiwiZWRpdFBvbHlnb24iLCJzYXZlUG9seWdvbiIsImRlbGV0ZVBvbHlnb24iLCJjb21wYXJlIiwiYWRkcmVzc0lucHV0Q2hhbmdlIiwib25NYXBDb21wbGV0ZSIsIm9uUG9seWdvbkNvbXBsZXRlIiwiaXRlbSIsIm9uT3RoZXJQb2x5Z29uQ29tcGxldGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImNsYXNzZXMiLCJvYmplY3QiLCJjb3VudCIsIm51bWJlciIsImZldGNoU29tZUFzeW5jUmVxdWVzdCIsImZ1bmMiLCJzb21lQXN5bmMiLCJhc3luYyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwQXJlYSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiQ29udGFpbmVyIiwidG9EZWdyZWVzIiwiYW5ncmFkIiwiY2FsY0NlbnRlclBvaW50IiwibGF0TG5nUG9pbnRzIiwic3VtWCIsInN1bVkiLCJpIiwibGVuZ3RoIiwiY2VudGVyWCIsImNlbnRlclkiLCJjZW50ZXJQb2ludCIsIngiLCJ5IiwiZ2V0QW5nbGUxIiwibGF0YSIsImxuZ2EiLCJsYXRiIiwibG5nYiIsImJybmciLCJNYXRoIiwiYXRhbjIiLCJwb2ludHMiLCJ0bXBTb3J0QXJyYXkiLCJsaW5lRGVncmVlIiwicG9pbnRDZW50ZXIiLCJsZW4iLCJwdXNoIiwiZGVncmVlIiwibGF0TG5nIiwic29ydCIsImEiLCJiIiwic29ydGVkQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFNQTs7QUFLQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkEsSUFBTUEsV0FBVyxrQ0FBakI7QUFDQSxJQUFNQyxhQUFhLGdEQUFuQjs7O0FBR0EsSUFBSUMsbUJBQUo7O0FBRUE7OztJQUdxQkMsSSxXQUpwQix5QkFBSUMsTUFBSixDOzs7QUFXQzs7OztBQUlBLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRQyxTQURHO0FBRVhDLFlBQU0sQ0FDSixDQUFDLFVBQUQsRUFBYSxPQUFiLENBREksRUFFSixDQUFDLFVBQUQsRUFBYSxTQUFiLENBRkksRUFHSixD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LGNBQVl0QixnQkFBZ0JDLFlBQWhCLENBQWhCO0FBQ0EsU0FBSyxJQUFJRyxJQUFFLENBQU4sRUFBU21CLE1BQUl0QixhQUFhSSxNQUEvQixFQUF1Q0QsSUFBRW1CLEdBQXpDLEVBQThDbkIsR0FBOUMsRUFBbUQ7QUFDL0NpQixxQkFBV1YsVUFBVVcsWUFBWWIsQ0FBdEIsRUFBeUJhLFlBQVlaLENBQXJDLEVBQXdDVCxhQUFhRyxDQUFiLEVBQWdCLENBQWhCLENBQXhDLEVBQTRESCxhQUFhRyxDQUFiLEVBQWdCLENBQWhCLENBQTVELENBQVg7QUFDQWdCLHFCQUFhSSxJQUFiLENBQWtCLEVBQUNDLFFBQVFKLFVBQVQsRUFBcUJLLFFBQVF6QixhQUFhRyxDQUFiLENBQTdCLEVBQWxCO0FBQ0g7QUFDRGdCLGlCQUFhTyxJQUFiLENBQWtCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQzdCLGVBQU9BLEVBQUVKLE1BQUYsR0FBV0csRUFBRUgsTUFBcEI7QUFDSCxLQUZEOztBQUlBLFFBQUlLLGNBQVksRUFBaEI7QUFDQSxTQUFLLElBQUkxQixLQUFFLENBQVgsRUFBY0EsS0FBRWdCLGFBQWFmLE1BQTdCLEVBQXFDRCxJQUFyQyxFQUEwQztBQUN0QzBCLG9CQUFZTixJQUFaLENBQWlCSixhQUFhaEIsRUFBYixFQUFnQnNCLE1BQWpDO0FBQ0g7QUFDRCxXQUFPSSxXQUFQO0FBQ0gsQ0FqQkQ7O2VBbUJlWCxNOzs7Ozs7Ozs7Ozs7OzRCQXBFTnJCLFM7NEJBU0FFLGU7NEJBdUJBVyxTOzRCQWlCSFEsTSIsImZpbGUiOiJqcy8xLjE2MWQ4MWQ1MjdlNTQ0YTE5ZTI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBvYmplY3QsXHJcbiAgbnVtYmVyLFxyXG4gIGZ1bmMsXHJcbn0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7QnV0dG9uLCBJbnB1dH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7XHJcbiAgQU1hcCxcclxuICBNYXJrZXIsXHJcbiAgUG9seWdvbixcclxufSBmcm9tICdyZWFjdC1hbWFwLWJpbmRpbmcnO1xyXG5pbXBvcnQge2hvdH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcic7XHJcbmNvbnN0IEFNQVBfS0VZID0gJzk2NGZmYWIyZWYxZWRjYTEyYzk3ZjgxNzM0MmM0MzE1JztcclxuY29uc3QgQU1BUF9TVFlMRSA9ICdhbWFwOi8vc3R5bGVzLzljMTA5Y2JmMmUwZjU1NzAxYzZlYzRlNWM5MGM1NmJhJztcclxuaW1wb3J0IHBvaW50cyBmcm9tICcuL3Rlc3QuanMnO1xyXG5cclxubGV0IHBvbHlFZGl0b3I7XHJcbkBob3QobW9kdWxlKVxyXG4vKipcclxuICogTGlzdCBQYWdlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgY2xhc3Nlczogb2JqZWN0LFxyXG4gICAgY291bnQ6IG51bWJlcixcclxuICAgIGZldGNoU29tZUFzeW5jUmVxdWVzdDogZnVuYyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYm91bmRzOiB1bmRlZmluZWQsXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICBbMTE2LjM5ODI1OCwgMzkuOTA0Nl0sXHJcbiAgICAgICAgWzExNi4zODIxMjIsIDM5LjkwMTE3Nl0sXHJcbiAgICAgICAgWzExNi4zNjg5MDQsIDM5LjkxMzQyM10sXHJcbiAgICAgICAgWzExNi4zODcyNzEsIDM5LjkxMjUwMV0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGRhdGExOiBbXHJcbiAgICAgICAgWzExNi4zOTgyNTgsIDM5LjkwNDZdLFxyXG4gICAgICAgIFsxMTYuMzg3MjcxLCAzOS45MTI1MDFdLFxyXG4gICAgICAgIFsxMTYuMzgyMTIyLCAzOS45MDExNzZdLFxyXG4gICAgICAgIFsxMTYuMzY4OTA0LCAzOS45MTM0MjNdLFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRhMjogW1xyXG4gICAgICAgIFsxMTYuMzc2OTA3LCAzOS45MTA5NjddLFxyXG4gICAgICAgIFsxMTYuMzg0OTExLCAzOS45MTk1MDVdLFxyXG4gICAgICAgIFsxMTYuNDAxMDksIDM5LjkxOTcyOF0sXHJcbiAgICAgICAgWzExNi40MTExMzIsIDM5LjkxMTQwOF0sXHJcbiAgICAgICAgWzExNi40MTIwNzYsIDM5Ljg5OTEzNV0sXHJcbiAgICAgICAgWzExNi40MDIyOTIsIDM5Ljg5MjM1M10sXHJcbiAgICAgICAgWzExNi4zODc0LCAzOS44OTI1MThdLFxyXG4gICAgICAgIFsxMTYuMzc2OTcxLCAzOS44OTkyNjddLFxyXG4gICAgICBdLFxyXG4gICAgICBvdGhlckRhdGE6IFtcclxuICAgICAgICBbMTE2LjM5MDIzMywgMzkuOTA2NjAyXSxcclxuICAgICAgICBbMTE2LjQwMDk2MiwgMzkuODk4NTg5XSxcclxuICAgICAgICBbMTE2LjQwMDY2MSwgMzkuOTA2NjY3XSxcclxuICAgICAgICBbMTE2LjM5NTI1NCwgMzkuOTA4NjY4XSxcclxuICAgICAgICBbMTE2LjM5NTc2OSwgMzkuODk0ODU1XSxcclxuICAgICAgICBbMTE2LjM5MDE0NywgMzkuODk4MDQ5XSxcclxuICAgICAgXSxcclxuICAgICAgbmV3RGF0YTogW1xyXG4gICAgICAgIFsxMTYuMzY4OTA0LCAzOS45MTM0MjNdLFxyXG4gICAgICAgIFsxMTYuMzgyMTIyLCAzOS45MDExNzZdLFxyXG4gICAgICAgIFsxMTYuMzg3MjcxLCAzOS45MTI1MDFdLFxyXG4gICAgICAgIFsxMTYuMzk4MjU4LCAzOS45MDQ2MDBdLFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFtvbk1hcENvbXBsZXRlIGRlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbWFwIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBvbk1hcENvbXBsZXRlKG1hcCkge1xyXG4gICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbb25PdGhlclBvbHlnb25Db21wbGV0ZSBkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGluZGV4ICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbWFwICAgICBbZGVzY3JpcHRpb25dXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBwb2x5Z29uIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBvblBvbHlnb25Db21wbGV0ZShpbmRleCwgbWFwLCBwb2x5Z29uKSB7XHJcbiAgICB0aGlzLnBvbHlnb24xID0gcG9seWdvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFtvbk90aGVyUG9seWdvbkNvbXBsZXRlIGRlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggICBbZGVzY3JpcHRpb25dXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBtYXAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHBvbHlnb24gW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gICBvbk90aGVyUG9seWdvbkNvbXBsZXRlKGluZGV4LCBtYXAsIHBvbHlnb24pIHtcclxuICAgIHRoaXMucG9seWdvbjIgPSBwb2x5Z29uO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBbY3JhdGVQb2x5IGRlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGNyYXRlUG9seSgpIHtcclxuICAgIGNvbnN0IF9zZWxmID0gdGhpcztcclxuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwO1xyXG4gICAgbWFwLnBsdWdpbihbJ0FNYXAuTW91c2VUb29sJ10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBwb2x5TGluZSA9IG5ldyB3aW5kb3cuQU1hcC5Nb3VzZVRvb2wobWFwKTtcclxuICAgICAgcG9seUxpbmUucG9seWdvbih7XHJcbiAgICAgICAgZmlsbENvbG9yOiAncmVkJyxcclxuICAgICAgICBzdHJva2VDb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICBmaWxsT3BhY2l0eTogJzAuNScsXHJcbiAgICAgIH0pO1xyXG4gICAgICBwb2x5TGluZS5vbignZHJhdycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IGUub2JqLmdldFBhdGgoKS5tYXAoKG1hcmtlcikgPT4gKFttYXJrZXIubG5nLCBtYXJrZXIubGF0XSkpO1xyXG4gICAgICAgICBfc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAuLi5fc2VsZi5zdGF0ZSxcclxuICAgICAgICAgIGRhdGE6IHBhdGgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcG9seUxpbmUuY2xvc2UodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbaGFuZGxlUGxvbiBkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGUgW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGVkaXRQb2x5Z29uKCkge1xyXG4gICAgY29uc3QgX3NlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXA7XHJcbiAgICBtYXAucGx1Z2luKFsnQU1hcC5Qb2x5RWRpdG9yJ10sIGZ1bmN0aW9uKCkge1xyXG4gICAgIC8vIOWunuS+i+WMluWkmui+ueW9oue8lui+keWZqO+8jOS8oOWFpeWcsOWbvuWunuS+i+WSjOimgei/m+ihjOe8lui+keeahOWkmui+ueW9ouWunuS+i1xyXG4gICAgICBwb2x5RWRpdG9yID0gbmV3IHdpbmRvdy5BTWFwLlBvbHlFZGl0b3IobWFwLCBfc2VsZi5wb2x5Z29uMSk7XHJcblxyXG4gICAgIC8vIOW8gOWQr+e8lui+keaooeW8j1xyXG4gICAgICBwb2x5RWRpdG9yLm9wZW4oKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wb2x5RWRpdG9yID0gcG9seUVkaXRvcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFtzYXZlUG9seWdvbiBkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBzYXZlUG9seWdvbigpIHtcclxuICAgIGlmIChwb2x5RWRpdG9yKSB7XHJcbiAgICAgIGNvbnN0IHBvbHlnb24gPSBwb2x5RWRpdG9yLmFxWzBdLm1hcCgobWFya2VyKSA9PiAoW21hcmtlci5sbmcsIG1hcmtlci5sYXRdKSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgZGF0YTogcG9seWdvbixcclxuICAgICAgfSk7XHJcbiAgICAgIHBvbHlFZGl0b3IuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFtkZWxldGVQb2x5Z29uIGRlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGRlbGV0ZVBvbHlnb24oKSB7XHJcbiAgICBpZiAocG9seUVkaXRvcikge1xyXG4gICAgICBwb2x5RWRpdG9yLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgZGF0YTogW10sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFtjb21wYXJlIGRlc2NyaXB0aW9uXVxyXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGNvbXBhcmUoKSB7XHJcbiAgICBjb25zdCBwb2x5Z29uMV9wYXRoID0gdGhpcy5wb2x5Z29uMS5nZXRQYXRoKCk7XHJcbiAgICBjb25zdCBwb2x5Z29uMl9wYXRoID0gdGhpcy5wb2x5Z29uMi5nZXRQYXRoKCk7XHJcbiAgICAvLyDlsI/lnIjmmK/lkKblnKjlpKflnIjlhoVcclxuICAgIGNvbnN0IGlzUmluZ0luUmluZyA9IHdpbmRvdy5BTWFwLkdlb21ldHJ5VXRpbC5pc1JpbmdJblJpbmcocG9seWdvbjJfcGF0aCwgcG9seWdvbjFfcGF0aCk7XHJcbiAgICAvLyDkuKTlnIjmmK/lkKbkuqTlj4lcclxuICAgIGNvbnN0IGRvZXNSaW5nUmluZ0ludGVyc2VjdCA9IHdpbmRvdy5BTWFwLkdlb21ldHJ5VXRpbC5kb2VzUmluZ1JpbmdJbnRlcnNlY3QocG9seWdvbjJfcGF0aCwgcG9seWdvbjFfcGF0aCk7XHJcbiAgICBjb25zdCByaW5nUmluZ0NsaXAgPSB3aW5kb3cuQU1hcC5HZW9tZXRyeVV0aWwucmluZ1JpbmdDbGlwKHBvbHlnb24yX3BhdGgsIHBvbHlnb24xX3BhdGgpO1xyXG4gICAgY29uc3QgcmluZ0FyZWEgPSBwYXJzZUludCh3aW5kb3cuQU1hcC5HZW9tZXRyeVV0aWwucmluZ0FyZWEocmluZ1JpbmdDbGlwKSk7XHJcbiAgICBcclxuICAgIGxldCB0ZXh0ID0gJ+S4pOWciOWFs+ezu++8muWcqOWkp+WciOWklic7XHJcbiAgICBpZiAoaXNSaW5nSW5SaW5nKSB7XHJcbiAgICAgICAgdGV4dCA9ICfkuKTlnIjlhbPns7vvvJrlnKjlpKflnIjlhoUnO1xyXG4gICAgfSBlbHNlIGlmIChkb2VzUmluZ1JpbmdJbnRlcnNlY3QpIHtcclxuICAgICAgICB0ZXh0ID0gJ+S4pOWciOWFs+ezu++8muS4pOWciOebuOS6pCwg5Lqk5Y+J5Yy65Z+f6Z2i56ev5Li6JytyaW5nQXJlYSsn5bmz5pa557GzJztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogW2FkZHJlc3NJbnB1dENoYW5nZSBkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGV2ZW50IFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBhZGRyZXNzSW5wdXRDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHdpbmRvdy5BTWFwLnBsdWdpbignQU1hcC5HZW9jb2RlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBnZW9jb2RlciA9IG5ldyB3aW5kb3cuQU1hcC5HZW9jb2Rlcih7XHJcbiAgICAgICAgLy8gY2l0eSDmjIflrprov5vooYznvJbnoIHmn6Xor6LnmoTln47luILvvIzmlK/mjIHkvKDlhaXln47luILlkI3jgIFhZGNvZGUg5ZKMIGNpdHljb2RlXHJcbiAgICAgICAgY2l0eTogJ+WNl+S6rCcsXHJcbiAgICAgIH0pO1xyXG4gICAgICBnZW9jb2Rlci5nZXRMb2NhdGlvbign5Y2X5Lqs5biC5rGf5a6B5Yy66YeR6L2u56ys5LiA5Z+OJywgZnVuY3Rpb24oc3RhdHVzLCByZXN1bHQpIHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnY29tcGxldGUnICYmIHJlc3VsdC5pbmZvID09PSAnT0snKSB7XHJcbiAgICAgICAgICAvLyByZXN1bHTkuK3lr7nlupTor6bnu4blnLDnkIblnZDmoIfkv6Hmga9cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVyIExpc3QgUGFnZVxyXG4gICAqIEByZXR1cm4ge0NvbXBvbmVudH1cclxuICAgKi9cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7Ym91bmRzLCBkYXRhLCBvdGhlckRhdGEsIGRhdGExfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBuYW1lID0gcG9pbnRzKG90aGVyRGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJ319PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jcmF0ZVBvbHkuYmluZCh0aGlzKX0+57uY5Yi2PC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmVkaXRQb2x5Z29uLmJpbmQodGhpcyl9Pue8lui+kTwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zYXZlUG9seWdvbi5iaW5kKHRoaXMpfT7kv53lrZg8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGVsZXRlUG9seWdvbi5iaW5kKHRoaXMpfT7muIXpmaQ8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY29tcGFyZS5iaW5kKHRoaXMpfT7lr7nmr5Q8L0J1dHRvbj5cclxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9J+ivt+i+k+WFpeivpue7huWcsOWdgCcgb25DaGFuZ2U9e3RoaXMuYWRkcmVzc0lucHV0Q2hhbmdlLmJpbmQodGhpcyl9Lz5cclxuICAgICAgICA8QU1hcFxyXG4gICAgICAgICAgYXBwS2V5PXtBTUFQX0tFWX1cclxuICAgICAgICAgIGJvdW5kcz17Ym91bmRzfVxyXG4gICAgICAgICAgdmVyc2lvbj0nMS4zLjAnXHJcbiAgICAgICAgICBkZWZhdWx0Q3Vyc29yPSdwb2ludGVyJ1xyXG4gICAgICAgICAgbWFwU3R5bGU9e0FNQVBfU1RZTEV9XHJcbiAgICAgICAgICBjZW50ZXI9e1sxMTYuMzk3MjQ0MywgMzkuOTEzOTcwMjRdfVxyXG4gICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbk1hcENvbXBsZXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB6b29tPXsxM31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UG9seWdvblxyXG4gICAgICAgICAgICBwYXRoPXtkYXRhfVxyXG4gICAgICAgICAgICBmaWxsQ29sb3I9J3JlZCdcclxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I9J2dyZWVuJ1xyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eT17MC41fVxyXG4gICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uUG9seWdvbkNvbXBsZXRlLmJpbmQodGhpcywgMSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhMS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgb2Zmc2V0PXtbLTEwLCAtMzBdfVxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtpdGVtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPFBvbHlnb25cclxuICAgICAgICAgICAgcGF0aD17bmFtZX1cclxuICAgICAgICAgICAgZmlsbENvbG9yPSdyZWQnXHJcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yPSdncmVlbidcclxuICAgICAgICAgICAgZmlsbE9wYWNpdHk9ezAuNX1cclxuICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbk90aGVyUG9seWdvbkNvbXBsZXRlLmJpbmQodGhpcywgMil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQU1hcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQge2FzeW5jfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5jb25zdCB7XHJcbiAgc29tZUFzeW5jLFxyXG59ID0gYXN5bmM7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvdW50OiBzdGF0ZS5tYXBBcmVhLmNvdW50LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZldGNoU29tZUFzeW5jUmVxdWVzdDogKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzb21lQXN5bmMoKSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5AY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuLyoqXHJcbiAqIENvbm5lY3RlZCByZWFjdCBjb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiDorqHnrpfkuK3lv4PngrnnmoTmlrnms5VcclxuICogQHBhcmFtICB7W3R5cGVdfSBhbmdyYWQgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5mdW5jdGlvbiB0b0RlZ3JlZXMoYW5ncmFkKSB7XHJcbiAgICByZXR1cm4gYW5ncmFkICogMTgwLjAgLyAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2O1xyXG59XHJcblxyXG4vKipcclxuICogW2NhbGNDZW50ZXJQb2ludCBkZXNjcmlwdGlvbl1cclxuICogQHBhcmFtICB7W3R5cGVdfSBsYXRMbmdQb2ludHMgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjQ2VudGVyUG9pbnQobGF0TG5nUG9pbnRzKSB7XHJcbiAgICBsZXQgc3VtWD0wO1xyXG4gICAgbGV0IHN1bVk9MDtcclxuICAgIGZvciAobGV0IGk9MDsgaTxsYXRMbmdQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdW1YKz1sYXRMbmdQb2ludHNbaV1bMF07XHJcbiAgICAgICAgc3VtWSs9bGF0TG5nUG9pbnRzW2ldWzFdO1xyXG4gICAgfVxyXG4gICAgbGV0IGNlbnRlclg9c3VtWC9sYXRMbmdQb2ludHMubGVuZ3RoO1xyXG4gICAgbGV0IGNlbnRlclk9c3VtWS9sYXRMbmdQb2ludHMubGVuZ3RoO1xyXG4gICAgbGV0IGNlbnRlclBvaW50PSB7fTtcclxuICAgIGNlbnRlclBvaW50Lng9Y2VudGVyWDtcclxuICAgIGNlbnRlclBvaW50Lnk9Y2VudGVyWTtcclxuICAgIHJldHVybiBjZW50ZXJQb2ludDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFtnZXRBbmdsZTEgZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge1t0eXBlXX0gbGF0YSBbZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge1t0eXBlXX0gbG5nYSBbZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge1t0eXBlXX0gbGF0YiBbZGVzY3JpcHRpb25dXHJcbiAqIEBwYXJhbSAge1t0eXBlXX0gbG5nYiBbZGVzY3JpcHRpb25dXHJcbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBbmdsZTEobGF0YSwgbG5nYSwgbGF0YiwgbG5nYikge1xyXG4gICAgbGV0IHggPSBsbmdiIC0gbG5nYTtcclxuICAgIGxldCB5ID0gbGF0YiAtIGxhdGE7XHJcbiAgICBsZXQgYnJuZyA9IE1hdGguYXRhbjIoeCwgeSk7XHJcblxyXG4gICAgYnJuZyA9IHRvRGVncmVlcyhicm5nKTtcclxuICAgIGlmIChicm5nIDwgMCkge1xyXG4gICAgICAgIGJybmcgPSBicm5nICsgMzYwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJybmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbZ2VuZU9yZGVybHlEYXRhcyBkZXNjcmlwdGlvbl1cclxuICogQHBhcmFtICB7W3R5cGVdfSBsYXRMbmdQb2ludHMgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5jb25zdCBwb2ludHMgPSAobGF0TG5nUG9pbnRzKSA9PiB7XHJcbiAgICBsZXQgdG1wU29ydEFycmF5PVtdO1xyXG4gICAgbGV0IGxpbmVEZWdyZWU9bnVsbDtcclxuICAgIGxldCBwb2ludENlbnRlcj1jYWxjQ2VudGVyUG9pbnQobGF0TG5nUG9pbnRzKTtcclxuICAgIGZvciAobGV0IGk9MCwgbGVuPWxhdExuZ1BvaW50cy5sZW5ndGg7IGk8bGVuOyBpKyspIHtcclxuICAgICAgICBsaW5lRGVncmVlPWdldEFuZ2xlMShwb2ludENlbnRlci54LCBwb2ludENlbnRlci55LCBsYXRMbmdQb2ludHNbaV1bMF0sIGxhdExuZ1BvaW50c1tpXVsxXSk7XHJcbiAgICAgICAgdG1wU29ydEFycmF5LnB1c2goe2RlZ3JlZTogbGluZURlZ3JlZSwgbGF0TG5nOiBsYXRMbmdQb2ludHNbaV19KTtcclxuICAgIH1cclxuICAgIHRtcFNvcnRBcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYi5kZWdyZWUgLSBhLmRlZ3JlZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBzb3J0ZWRBcnJheT1bXTtcclxuICAgIGZvciAobGV0IGk9MDsgaTx0bXBTb3J0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzb3J0ZWRBcnJheS5wdXNoKHRtcFNvcnRBcnJheVtpXS5sYXRMbmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNvcnRlZEFycmF5O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9pbnRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9