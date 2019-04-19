(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/less-loader/dist/cjs.js??ref--4-2!./src/List/platform.less":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/less-loader/dist/cjs.js??ref--4-2!./src/List/platform.less ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".marker_35Uv5 {\n  width: 18px;\n  height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  border: 1px solid;\n  border-radius: 50%;\n}\n.buttonGroup_T6_yY {\n  position: absolute;\n  top: 90px;\n  right: 20px;\n  z-index: 999;\n}\n.buttonGroup2_oDrIQ {\n  position: absolute;\n  top: 122px;\n  right: 83px;\n  z-index: 999;\n}\n.buttonGroup2_oDrIQ .ant-checkbox-group-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: 0px;\n  border: 1px solid #ccc;\n  padding: 4px 8px;\n  border-radius: 3px;\n}\n.buttonGroup2_oDrIQ .ant-checkbox-group {\n  display: flex;\n  flex-direction: column;\n  background: white;\n}\n.buttonGroup2_oDrIQ .ant-checkbox-group-item > span:last-child {\n  width: 18px;\n  height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid;\n  border-radius: 50%;\n  font-size: 12px;\n}\n.buttonGroup3_2PIYH {\n  position: absolute;\n  top: 122px;\n  right: 146px;\n  display: flex;\n  flex-direction: column;\n  z-index: 999;\n}\n", ""]);

// exports
exports.locals = {
	"marker": "marker_35Uv5",
	"buttonGroup": "buttonGroup_T6_yY",
	"buttonGroup2": "buttonGroup2_oDrIQ",
	"buttonGroup3": "buttonGroup3_2PIYH"
};

/***/ }),

/***/ "./src/List/component.js":
/*!*******************************!*\
  !*** ./src/List/component.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message2 = __webpack_require__(/*! antd/es/message */ "./node_modules/antd/es/message/index.js");

var _message3 = _interopRequireDefault(_message2);

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "./node_modules/antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/message/style */ "./node_modules/antd/es/message/style/index.js");

__webpack_require__(/*! antd/es/checkbox/style */ "./node_modules/antd/es/checkbox/style/index.js");

__webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _platform = __webpack_require__(/*! ./platform.less */ "./src/List/platform.less");

var _platform2 = _interopRequireDefault(_platform);

var _reactAmapBinding = __webpack_require__(/*! react-amap-binding */ "./node_modules/react-amap-binding/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = _button2.default.Group;
var CheckboxGroup = _checkbox2.default.Group;
var AMAP_KEY = '964ffab2ef1edca12c97f817342c4315';
var AMAP_STYLE = 'amap://styles/9c109cbf2e0f55701c6ec4e5c90c56ba';
var polyEditor = void 0;
var editIndex = void 0;

/**
 * List
 */

var List = function (_Component) {
  _inherits(List, _Component);

  /**
   * [constructor description]
   * @param  {[type]} props [description]
   */
  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.polygon = {};
    _this.otherPolygon = [];

    _this.state = {
      bound: undefined,
      checkedValues: [],
      isShowClearList: false,
      isShowEditList: false,
      milkArea: [[[120.189268, 30.205297], [120.1915, 30.201588], [120.198796, 30.205297], [120.196821, 30.208635], [120.189268, 30.205297]], [[120.193989, 30.197285], [120.201113, 30.20092], [120.202572, 30.198027], [120.202658, 30.196098], [120.202658, 30.19187], [120.195276, 30.191202], [120.193989, 30.197285]], [[120.206434, 30.209154], [120.208838, 30.205074], [120.216648, 30.209228], [120.213301, 30.213827], [120.210812, 30.216571], [120.20858, 30.214049], [120.204203, 30.211973], [120.206434, 30.209154]], [[120.209954, 30.198695], [120.218022, 30.199956], [120.218107, 30.194466], [120.228407, 30.195134], [120.229094, 30.195208], [120.228836, 30.19187], [120.218622, 30.192167], [120.218365, 30.190089], [120.210983, 30.189644], [120.209954, 30.198695]]],
      otherMilkArea: [[[120.224201, 30.213382], [120.232269, 30.217164], [120.235016, 30.211527], [120.234501, 30.206558], [120.229094, 30.206187], [120.224201, 30.213382]], [[120.234415, 30.200475], [120.234673, 30.201291], [120.240681, 30.201069], [120.241797, 30.194318], [120.234587, 30.194689], [120.234415, 30.200475]], [[120.235188, 30.19187], [120.233814, 30.182967], [120.244286, 30.18267], [120.243685, 30.19187], [120.235703, 30.191499], [120.235188, 30.19187]], [[120.210683, 30.181557], [120.211541, 30.176363], [120.231626, 30.175325], [120.23154, 30.183115], [120.210683, 30.181557]]],
      marker: [[120.243548, 30.199871], [120.249148, 30.199816], [120.249256, 30.194419], [120.243569, 30.194511], [120.243548, 30.199871]]
    };
    return _this;
  }

  _createClass(List, [{
    key: 'componentDidUpdate',


    /**
     * [componentDidUpdate description]
     * @param  {[type]} prevProps [description]
     */
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      setTimeout(function () {
        _this2.map && _this2.map.setFitView();
      }, 500);
    }

    /**
     * [cratePoly description]
     */

  }, {
    key: 'cratePoly',
    value: function cratePoly() {
      var _this3 = this;

      this.map.plugin(['AMap.MouseTool'], function () {
        var polyLine = new window.AMap.MouseTool(_this3.map);
        polyLine.polygon({
          fillColor: '#8dc5f3',
          strokeColor: '#4f7de3',
          fillOpacity: '0.3'
        });
        polyLine.on('draw', function (e) {
          var path = e.obj.getPath().map(function (marker) {
            return [marker.lng, marker.lat];
          });
          _this3.setState(_extends({}, _this3.state, {
            milkArea: [].concat(_toConsumableArray(_this3.state.milkArea), [path])
          }));
          polyLine.close(true);
        });
      });
    }

    // 计算polygon列表中心点
    /**
     * [countPolygonCenter description]
     * @param  {[type]} polygonList [description]
     * @return {[type]}             [description]
     */

  }, {
    key: 'countPolygonCenter',
    value: function countPolygonCenter(polygonList) {
      return polygonList.map(function (paths) {
        var lngs = paths.map(function (poi) {
          return poi[0] || poi.lng;
        });
        var lats = paths.map(function (poi) {
          return poi[1] || poi.lat;
        });
        var lng = (Math.min.apply(null, lngs) + Math.max.apply(null, lngs)) * 0.5;
        var lat = (Math.min.apply(null, lats) + Math.max.apply(null, lats)) * 0.5;
        return [lng, lat];
      });
    }

    /**
     * [clearPolygon description]
     * @return {[type]} [description]
     */

  }, {
    key: 'clearPolygon',
    value: function clearPolygon() {
      editIndex = null;
      var _state = this.state,
          checkedValues = _state.checkedValues,
          milkArea = _state.milkArea;

      if (polyEditor) {
        var polygon = polyEditor.aq[0].map(function (marker) {
          return [marker.lng, marker.lat];
        });
        this.setState(_extends({}, this.state, {
          milkArea: this.state.milkArea.map(function (item, index) {
            return index === editIndex ? polygon : item;
          })
        }));
        polyEditor.close();
      }
      console.log(checkedValues);
      var values = milkArea;
      if (checkedValues.length > 0) {
        checkedValues.forEach(function (value) {
          values = values.filter(function (item, index) {
            return index + 1 !== +value;
          });
        });
      }
      console.log(values);
      this.setState(_extends({}, this.state, {
        milkArea: values,
        isShowClearList: false
      }));
    }

    /**
     * [editPolygon description]
     * @param  {[type]} index [description]
     */

  }, {
    key: 'editPolygon',
    value: function editPolygon(index) {
      var _this4 = this;

      editIndex = index;
      if (polyEditor) {
        var _polygon = polyEditor.aq[0].map(function (marker) {
          return [marker.lng, marker.lat];
        });
        this.setState(_extends({}, this.state, {
          milkArea: this.state.milkArea.map(function (item, index) {
            return index === editIndex ? _polygon : item;
          })
        }));
        polyEditor.close();
      }
      var polygon = this.polygon[index];
      this.polygonIndex = index;
      this.map.plugin(['AMap.PolyEditor'], function () {
        // 实例化多边形编辑器，传入地图实例和要进行编辑的多边形实例
        polyEditor = new window.AMap.PolyEditor(_this4.map, polygon);

        // 开启编辑模式
        polyEditor.open();
      });
      this.polyEditor = polyEditor;
    }

    /**
     * [onMapComplete description]
     * @param  {[type]} map [description]
     */

  }, {
    key: 'onMapComplete',
    value: function onMapComplete(map) {
      this.map = map;
      this.map.setFitView();
    }

    /**
     * [savePolygon description]
     */

  }, {
    key: 'savePolygon',
    value: function savePolygon() {
      var _this5 = this;

      var milkArea = this.state.milkArea;

      if (polyEditor) {
        var compare = void 0;
        this.otherPolygon.map(function (item) {
          compare = _this5.compare(item, _this5.polygon[editIndex]);
        });
        editIndex = null;
        if (!compare) {
          return;
        }
        var polygon = polyEditor.aq[0].map(function (marker) {
          return [marker.lng, marker.lat];
        });
        this.setState(_extends({}, this.state, {
          milkArea: milkArea.map(function (item, index) {
            return index === editIndex ? polygon : item;
          })
        }));

        polyEditor.close();
        this.hideList();
        polyEditor = null;
      }
    }

    /**
     * [compare description]
     * @param  {[type]} polygon  [description]
     * @param  {[type]} polygon1 [description]
     * @return {[type]}          [description]
     */

  }, {
    key: 'compare',
    value: function compare(polygon, polygon1) {
      var polygonPath = polygon.getPath();
      var polygon1Path = polygon1.getPath();
      // 小圈是否在大圈内
      var isRingInRing = window.AMap.GeometryUtil.isRingInRing(polygon1Path, polygonPath);
      // 两圈是否交叉
      var doesRingRingIntersect = window.AMap.GeometryUtil.doesRingRingIntersect(polygon1Path, polygonPath);
      var ringRingClip = window.AMap.GeometryUtil.ringRingClip(polygon1Path, polygonPath);
      var ringArea = parseInt(window.AMap.GeometryUtil.ringArea(ringRingClip));
      var canSave = true;
      if (isRingInRing) {
        _message3.default.error('两圈关系：在大圈内');
        canSave = false;
      } else if (doesRingRingIntersect) {
        _message3.default.error('两圈关系：两圈相交, 交叉区域面积为' + ringArea + '平方米');
        canSave = false;
      }
      return canSave;
    }
    /**
     * [onPolygonComplete description]
     * @param  {[type]} index   [description]
     * @param  {[type]} map     [description]
     * @param  {[type]} polygon [description]
     */

  }, {
    key: 'onPolygonComplete',
    value: function onPolygonComplete(index, map, polygon) {
      this.polygon[index] = polygon;
    }
    /**
     * [otherPolygonComplete description]
     * @param  {[type]} index   [description]
     * @param  {[type]} map     [description]
     * @param  {[type]} polygon [description]
     */

  }, {
    key: 'otherPolygonComplete',
    value: function otherPolygonComplete(index, map, polygon) {
      this.otherPolygon.push(polygon);
    }
    /**
     * [toggleClearList description]
     */

  }, {
    key: 'toggleClearList',
    value: function toggleClearList() {
      var milkArea = this.state.milkArea;


      if (milkArea.length === 0) {
        return;
      }

      this.setState({
        isShowClearList: !this.state.isShowClearList,
        isShowEditList: false
      });
    }
    /**
     * [toggleEditList description]
     */

  }, {
    key: 'toggleEditList',
    value: function toggleEditList() {
      var milkArea = this.state.milkArea;


      if (milkArea.length === 0) {
        return;
      }

      this.setState({
        isShowClearList: false,
        isShowEditList: !this.state.isShowEditList
      });
    }
    /**
     * [hideList description]
     */

  }, {
    key: 'hideList',
    value: function hideList() {
      this.setState({
        isShowClearList: false,
        isShowEditList: false
      });
    }
    /**
     * [onCheckboxChange description]
     * @param  {[type]} checkedValues [description]
     */

  }, {
    key: 'onCheckboxChange',
    value: function onCheckboxChange(checkedValues) {
      this.setState({ checkedValues: checkedValues });
    }
    /**
     * [render description]
     * @return {[type]} [description]
     */

  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _state2 = this.state,
          bound = _state2.bound,
          milkArea = _state2.milkArea,
          otherMilkArea = _state2.otherMilkArea,
          isShowEditList = _state2.isShowEditList,
          isShowClearList = _state2.isShowClearList,
          marker = _state2.marker;

      var markerList = this.countPolygonCenter(milkArea);

      var plainOptions = Array.from({ length: markerList.length }).map(function (v, k) {
        return '' + (k + 1);
      });
      var mapHeight = (1 - 160 / window.innerHeight) * 100;
      return _react2.default.createElement(
        'div',
        { style: { width: '100%', height: mapHeight + 'vh', position: 'reelative' } },
        _react2.default.createElement(
          ButtonGroup,
          { className: _platform2.default.buttonGroup },
          _react2.default.createElement(
            _button2.default,
            { onClick: this.cratePoly.bind(this) },
            '\u7ED8\u5236'
          ),
          _react2.default.createElement(
            _button2.default,
            { onClick: this.toggleEditList.bind(this) },
            '\u7F16\u8F91'
          ),
          _react2.default.createElement(
            _button2.default,
            { onClick: this.toggleClearList.bind(this) },
            '\u6E05\u9664'
          ),
          _react2.default.createElement(
            _button2.default,
            { onClick: this.savePolygon.bind(this) },
            '\u4FDD\u5B58'
          )
        ),
        isShowClearList && _react2.default.createElement(
          'div',
          { className: _platform2.default.buttonGroup2 },
          _react2.default.createElement(CheckboxGroup, { options: plainOptions, onChange: this.onCheckboxChange.bind(this) }),
          _react2.default.createElement(
            _button2.default,
            {
              onClick: this.clearPolygon.bind(this),
              type: 'primary'
            },
            '\u786E\u5B9A'
          )
        ),
        isShowEditList && _react2.default.createElement(
          'div',
          { className: _platform2.default.buttonGroup3 },
          plainOptions.map(function (no) {
            return _react2.default.createElement(
              _button2.default,
              {
                onClick: _this6.editPolygon.bind(_this6, no),
                key: no
              },
              no
            );
          })
        ),
        _react2.default.createElement(
          _reactAmapBinding.AMap,
          {
            appKey: AMAP_KEY,
            bounds: bound,
            defaultCursor: 'pointer',
            mapStyle: AMAP_STYLE,
            onComplete: this.onMapComplete.bind(this),
            onClick: this.hideList.bind(this),
            zoom: 13
          },
          milkArea.map(function (path, index) {
            return _react2.default.createElement(_reactAmapBinding.Polygon, {
              key: index,
              fillColor: '#8dc5f3',
              strokeColor: '#4f7de3',
              fillOpacity: '0.3',
              path: path,
              onComplete: _this6.onPolygonComplete.bind(_this6, index + 1)
            });
          }),
          markerList.map(function (position, index) {
            return _react2.default.createElement(_reactAmapBinding.Marker, {
              content: '<div class=\'' + _platform2.default.marker + '\'>\n                    ' + (index + 1) + '\n                  </div>',
              key: index,
              offset: [-10, -10],
              position: position
            });
          }),
          otherMilkArea.map(function (path, index) {
            return _react2.default.createElement(_reactAmapBinding.Polygon, {
              key: index,
              path: path,
              strokeColor: '#4285F4',
              fillColor: 'black',
              fillOpacity: '0.3',
              bubble: true,
              onComplete: _this6.otherPolygonComplete.bind(_this6, index + 1)
            });
          }),
          marker.map(function (marker, index) {
            return _react2.default.createElement(_reactAmapBinding.Marker, {
              key: index,
              position: marker,
              offset: [-10, -30]
            });
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
}(_react.Component);

var _default = List;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ButtonGroup, 'ButtonGroup', 'E:/test/EternalNiu/src/List/component.js');
  reactHotLoader.register(CheckboxGroup, 'CheckboxGroup', 'E:/test/EternalNiu/src/List/component.js');
  reactHotLoader.register(AMAP_KEY, 'AMAP_KEY', 'E:/test/EternalNiu/src/List/component.js');
  reactHotLoader.register(AMAP_STYLE, 'AMAP_STYLE', 'E:/test/EternalNiu/src/List/component.js');
  reactHotLoader.register(polyEditor, 'polyEditor', 'E:/test/EternalNiu/src/List/component.js');
  reactHotLoader.register(editIndex, 'editIndex', 'E:/test/EternalNiu/src/List/component.js');
  reactHotLoader.register(List, 'List', 'E:/test/EternalNiu/src/List/component.js');
  reactHotLoader.register(_default, 'default', 'E:/test/EternalNiu/src/List/component.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/List/container.js":
/*!*******************************!*\
  !*** ./src/List/container.js ***!
  \*******************************/
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

var _component = __webpack_require__(/*! ./component */ "./src/List/component.js");

var _component2 = _interopRequireDefault(_component);

var _actions = __webpack_require__(/*! ./actions */ "./src/List/actions.js");

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
    count: state.list.count
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

  reactHotLoader.register(someAsync, 'someAsync', 'E:/test/EternalNiu/src/List/container.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'E:/test/EternalNiu/src/List/container.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', 'E:/test/EternalNiu/src/List/container.js');
  reactHotLoader.register(Container, 'Container', 'E:/test/EternalNiu/src/List/container.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/List/platform.less":
/*!********************************!*\
  !*** ./src/List/platform.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--4-1!../../node_modules/less-loader/dist/cjs.js??ref--4-2!./platform.less */ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/less-loader/dist/cjs.js??ref--4-2!./src/List/platform.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--4-1!../../node_modules/less-loader/dist/cjs.js??ref--4-2!./platform.less */ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/less-loader/dist/cjs.js??ref--4-2!./src/List/platform.less", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--4-1!../../node_modules/less-loader/dist/cjs.js??ref--4-2!./platform.less */ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/less-loader/dist/cjs.js??ref--4-2!./src/List/platform.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); });

	module.hot.dispose(function() { update(); });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTGlzdC9wbGF0Zm9ybS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9MaXN0L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGlzdC9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpc3QvcGxhdGZvcm0ubGVzcz82N2ZiIl0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwIiwiR3JvdXAiLCJDaGVja2JveEdyb3VwIiwiQU1BUF9LRVkiLCJBTUFQX1NUWUxFIiwicG9seUVkaXRvciIsImVkaXRJbmRleCIsIkxpc3QiLCJwcm9wcyIsInBvbHlnb24iLCJvdGhlclBvbHlnb24iLCJzdGF0ZSIsImJvdW5kIiwidW5kZWZpbmVkIiwiY2hlY2tlZFZhbHVlcyIsImlzU2hvd0NsZWFyTGlzdCIsImlzU2hvd0VkaXRMaXN0IiwibWlsa0FyZWEiLCJvdGhlck1pbGtBcmVhIiwibWFya2VyIiwicHJldlByb3BzIiwic2V0VGltZW91dCIsIm1hcCIsInNldEZpdFZpZXciLCJwbHVnaW4iLCJwb2x5TGluZSIsIndpbmRvdyIsIkFNYXAiLCJNb3VzZVRvb2wiLCJmaWxsQ29sb3IiLCJzdHJva2VDb2xvciIsImZpbGxPcGFjaXR5Iiwib24iLCJlIiwicGF0aCIsIm9iaiIsImdldFBhdGgiLCJsbmciLCJsYXQiLCJzZXRTdGF0ZSIsImNsb3NlIiwicG9seWdvbkxpc3QiLCJwYXRocyIsImxuZ3MiLCJwb2kiLCJsYXRzIiwiTWF0aCIsIm1pbiIsImFwcGx5IiwibWF4IiwiYXEiLCJpdGVtIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwidmFsdWVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsInZhbHVlIiwiZmlsdGVyIiwicG9seWdvbkluZGV4IiwiUG9seUVkaXRvciIsIm9wZW4iLCJjb21wYXJlIiwiaGlkZUxpc3QiLCJwb2x5Z29uMSIsInBvbHlnb25QYXRoIiwicG9seWdvbjFQYXRoIiwiaXNSaW5nSW5SaW5nIiwiR2VvbWV0cnlVdGlsIiwiZG9lc1JpbmdSaW5nSW50ZXJzZWN0IiwicmluZ1JpbmdDbGlwIiwicmluZ0FyZWEiLCJwYXJzZUludCIsImNhblNhdmUiLCJlcnJvciIsInB1c2giLCJtYXJrZXJMaXN0IiwiY291bnRQb2x5Z29uQ2VudGVyIiwicGxhaW5PcHRpb25zIiwiQXJyYXkiLCJmcm9tIiwidiIsImsiLCJtYXBIZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJzdHlsZXMiLCJidXR0b25Hcm91cCIsImNyYXRlUG9seSIsImJpbmQiLCJ0b2dnbGVFZGl0TGlzdCIsInRvZ2dsZUNsZWFyTGlzdCIsInNhdmVQb2x5Z29uIiwiYnV0dG9uR3JvdXAyIiwib25DaGVja2JveENoYW5nZSIsImNsZWFyUG9seWdvbiIsImJ1dHRvbkdyb3VwMyIsIm5vIiwiZWRpdFBvbHlnb24iLCJvbk1hcENvbXBsZXRlIiwib25Qb2x5Z29uQ29tcGxldGUiLCJvdGhlclBvbHlnb25Db21wbGV0ZSIsIkNvbXBvbmVudCIsInNvbWVBc3luYyIsImFzeW5jIiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJjb3VudCIsImxpc3QiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoU29tZUFzeW5jUmVxdWVzdCIsIkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSx3Q0FBeUMsZ0JBQWdCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0Isc0JBQXNCLHVCQUF1QixHQUFHLHNCQUFzQix1QkFBdUIsY0FBYyxnQkFBZ0IsaUJBQWlCLEdBQUcsdUJBQXVCLHVCQUF1QixlQUFlLGdCQUFnQixpQkFBaUIsR0FBRyxnREFBZ0Qsa0JBQWtCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLDJCQUEyQixxQkFBcUIsdUJBQXVCLEdBQUcsMkNBQTJDLGtCQUFrQiwyQkFBMkIsc0JBQXNCLEdBQUcsa0VBQWtFLGdCQUFnQixpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0Isc0JBQXNCLHVCQUF1QixvQkFBb0IsR0FBRyx1QkFBdUIsdUJBQXVCLGVBQWUsaUJBQWlCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLEdBQUc7O0FBRTlsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNQSxjQUFjLGlCQUFPQyxLQUEzQjtBQUNBLElBQU1DLGdCQUFnQixtQkFBU0QsS0FBL0I7QUFDQSxJQUFNRSxXQUFXLGtDQUFqQjtBQUNBLElBQU1DLGFBQWEsZ0RBQW5CO0FBQ0EsSUFBSUMsbUJBQUo7QUFDQSxJQUFJQyxrQkFBSjs7QUFFQTs7OztJQUdNQyxJOzs7QUFDSjs7OztBQUlBLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBQUEsVUEyRm5CQyxPQTNGbUIsR0EyRlQsRUEzRlM7QUFBQSxVQTRGbkJDLFlBNUZtQixHQTRGSixFQTVGSTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU9DLFNBREk7QUFFWEMscUJBQWUsRUFGSjtBQUdYQyx1QkFBaUIsS0FITjtBQUlYQyxzQkFBZ0IsS0FKTDtBQUtYQyxnQkFBVSxDQUNSLENBQ0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQURGLEVBRUUsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQUZGLEVBR0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUhGLEVBSUUsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUpGLEVBS0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUxGLENBRFEsRUFRUixDQUNFLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FERixFQUVFLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FGRixFQUdFLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FIRixFQUlFLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FKRixFQUtFLENBQUMsVUFBRCxFQUFhLFFBQWIsQ0FMRixFQU1FLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FORixFQU9FLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FQRixDQVJRLEVBa0JSLENBQ0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQURGLEVBRUUsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUZGLEVBR0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUhGLEVBSUUsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUpGLEVBS0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUxGLEVBTUUsQ0FBQyxTQUFELEVBQVksU0FBWixDQU5GLEVBT0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQVBGLEVBUUUsQ0FBQyxVQUFELEVBQWEsU0FBYixDQVJGLENBbEJRLEVBNEJSLENBQ0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQURGLEVBRUUsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUZGLEVBR0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUhGLEVBSUUsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUpGLEVBS0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUxGLEVBTUUsQ0FBQyxVQUFELEVBQWEsUUFBYixDQU5GLEVBT0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQVBGLEVBUUUsQ0FBQyxVQUFELEVBQWEsU0FBYixDQVJGLEVBU0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQVRGLEVBVUUsQ0FBQyxVQUFELEVBQWEsU0FBYixDQVZGLENBNUJRLENBTEM7QUE4Q1hDLHFCQUFlLENBQ2IsQ0FDRSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBREYsRUFFRSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBRkYsRUFHRSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBSEYsRUFJRSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBSkYsRUFLRSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBTEYsRUFNRSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBTkYsQ0FEYSxFQVNiLENBQ0UsQ0FBQyxVQUFELEVBQWEsU0FBYixDQURGLEVBRUUsQ0FBQyxVQUFELEVBQWEs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O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8wLjBjZjgyZWU0NjAxZWM3ZTVmNWIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFya2VyXzM1VXY1IHtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uYnV0dG9uR3JvdXBfVDZfeVkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA5MHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5idXR0b25Hcm91cDJfb0RySVEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjJweDtcXG4gIHJpZ2h0OiA4M3B4O1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG4uYnV0dG9uR3JvdXAyX29EcklRIC5hbnQtY2hlY2tib3gtZ3JvdXAtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5idXR0b25Hcm91cDJfb0RySVEgLmFudC1jaGVja2JveC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG4uYnV0dG9uR3JvdXAyX29EcklRIC5hbnQtY2hlY2tib3gtZ3JvdXAtaXRlbSA+IHNwYW46bGFzdC1jaGlsZCB7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmJ1dHRvbkdyb3VwM18yUElZSCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEyMnB4O1xcbiAgcmlnaHQ6IDE0NnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm1hcmtlclwiOiBcIm1hcmtlcl8zNVV2NVwiLFxuXHRcImJ1dHRvbkdyb3VwXCI6IFwiYnV0dG9uR3JvdXBfVDZfeVlcIixcblx0XCJidXR0b25Hcm91cDJcIjogXCJidXR0b25Hcm91cDJfb0RySVFcIixcblx0XCJidXR0b25Hcm91cDNcIjogXCJidXR0b25Hcm91cDNfMlBJWUhcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIG1lc3NhZ2UsIENoZWNrYm94fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BsYXRmb3JtLmxlc3MnO1xyXG5pbXBvcnQge1xyXG4gIEFNYXAsXHJcbiAgTWFya2VyLFxyXG4gIFBvbHlnb24sXHJcbn0gZnJvbSAncmVhY3QtYW1hcC1iaW5kaW5nJztcclxuY29uc3QgQnV0dG9uR3JvdXAgPSBCdXR0b24uR3JvdXA7XHJcbmNvbnN0IENoZWNrYm94R3JvdXAgPSBDaGVja2JveC5Hcm91cDtcclxuY29uc3QgQU1BUF9LRVkgPSAnOTY0ZmZhYjJlZjFlZGNhMTJjOTdmODE3MzQyYzQzMTUnO1xyXG5jb25zdCBBTUFQX1NUWUxFID0gJ2FtYXA6Ly9zdHlsZXMvOWMxMDljYmYyZTBmNTU3MDFjNmVjNGU1YzkwYzU2YmEnO1xyXG5sZXQgcG9seUVkaXRvcjtcclxubGV0IGVkaXRJbmRleDtcclxuXHJcbi8qKlxyXG4gKiBMaXN0XHJcbiAqL1xyXG5jbGFzcyBMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBbY29uc3RydWN0b3IgZGVzY3JpcHRpb25dXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBwcm9wcyBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGJvdW5kOiB1bmRlZmluZWQsXHJcbiAgICAgIGNoZWNrZWRWYWx1ZXM6IFtdLFxyXG4gICAgICBpc1Nob3dDbGVhckxpc3Q6IGZhbHNlLFxyXG4gICAgICBpc1Nob3dFZGl0TGlzdDogZmFsc2UsXHJcbiAgICAgIG1pbGtBcmVhOiBbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgWzEyMC4xODkyNjgsIDMwLjIwNTI5N10sXHJcbiAgICAgICAgICBbMTIwLjE5MTUsIDMwLjIwMTU4OF0sXHJcbiAgICAgICAgICBbMTIwLjE5ODc5NiwgMzAuMjA1Mjk3XSxcclxuICAgICAgICAgIFsxMjAuMTk2ODIxLCAzMC4yMDg2MzVdLFxyXG4gICAgICAgICAgWzEyMC4xODkyNjgsIDMwLjIwNTI5N10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbMTIwLjE5Mzk4OSwgMzAuMTk3Mjg1XSxcclxuICAgICAgICAgIFsxMjAuMjAxMTEzLCAzMC4yMDA5Ml0sXHJcbiAgICAgICAgICBbMTIwLjIwMjU3MiwgMzAuMTk4MDI3XSxcclxuICAgICAgICAgIFsxMjAuMjAyNjU4LCAzMC4xOTYwOThdLFxyXG4gICAgICAgICAgWzEyMC4yMDI2NTgsIDMwLjE5MTg3XSxcclxuICAgICAgICAgIFsxMjAuMTk1Mjc2LCAzMC4xOTEyMDJdLFxyXG4gICAgICAgICAgWzEyMC4xOTM5ODksIDMwLjE5NzI4NV0sXHJcblxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgWzEyMC4yMDY0MzQsIDMwLjIwOTE1NF0sXHJcbiAgICAgICAgICBbMTIwLjIwODgzOCwgMzAuMjA1MDc0XSxcclxuICAgICAgICAgIFsxMjAuMjE2NjQ4LCAzMC4yMDkyMjhdLFxyXG4gICAgICAgICAgWzEyMC4yMTMzMDEsIDMwLjIxMzgyN10sXHJcbiAgICAgICAgICBbMTIwLjIxMDgxMiwgMzAuMjE2NTcxXSxcclxuICAgICAgICAgIFsxMjAuMjA4NTgsIDMwLjIxNDA0OV0sXHJcbiAgICAgICAgICBbMTIwLjIwNDIwMywgMzAuMjExOTczXSxcclxuICAgICAgICAgIFsxMjAuMjA2NDM0LCAzMC4yMDkxNTRdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgWzEyMC4yMDk5NTQsIDMwLjE5ODY5NV0sXHJcbiAgICAgICAgICBbMTIwLjIxODAyMiwgMzAuMTk5OTU2XSxcclxuICAgICAgICAgIFsxMjAuMjE4MTA3LCAzMC4xOTQ0NjZdLFxyXG4gICAgICAgICAgWzEyMC4yMjg0MDcsIDMwLjE5NTEzNF0sXHJcbiAgICAgICAgICBbMTIwLjIyOTA5NCwgMzAuMTk1MjA4XSxcclxuICAgICAgICAgIFsxMjAuMjI4ODM2LCAzMC4xOTE4N10sXHJcbiAgICAgICAgICBbMTIwLjIxODYyMiwgMzAuMTkyMTY3XSxcclxuICAgICAgICAgIFsxMjAuMjE4MzY1LCAzMC4xOTAwODldLFxyXG4gICAgICAgICAgWzEyMC4yMTA5ODMsIDMwLjE4OTY0NF0sXHJcbiAgICAgICAgICBbMTIwLjIwOTk1NCwgMzAuMTk4Njk1XSxcclxuICAgICAgICBdLFxyXG4gICAgICBdLFxyXG4gICAgICBvdGhlck1pbGtBcmVhOiBbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgWzEyMC4yMjQyMDEsIDMwLjIxMzM4Ml0sXHJcbiAgICAgICAgICBbMTIwLjIzMjI2OSwgMzAuMjE3MTY0XSxcclxuICAgICAgICAgIFsxMjAuMjM1MDE2LCAzMC4yMTE1MjddLFxyXG4gICAgICAgICAgWzEyMC4yMzQ1MDEsIDMwLjIwNjU1OF0sXHJcbiAgICAgICAgICBbMTIwLjIyOTA5NCwgMzAuMjA2MTg3XSxcclxuICAgICAgICAgIFsxMjAuMjI0MjAxLCAzMC4yMTMzODJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgWzEyMC4yMzQ0MTUsIDMwLjIwMDQ3NV0sXHJcbiAgICAgICAgICBbMTIwLjIzNDY3MywgMzAuMjAxMjkxXSxcclxuICAgICAgICAgIFsxMjAuMjQwNjgxLCAzMC4yMDEwNjldLFxyXG4gICAgICAgICAgWzEyMC4yNDE3OTcsIDMwLjE5NDMxOF0sXHJcbiAgICAgICAgICBbMTIwLjIzNDU4NywgMzAuMTk0Njg5XSxcclxuICAgICAgICAgIFsxMjAuMjM0NDE1LCAzMC4yMDA0NzVdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgWzEyMC4yMzUxODgsIDMwLjE5MTg3XSxcclxuICAgICAgICAgIFsxMjAuMjMzODE0LCAzMC4xODI5NjddLFxyXG4gICAgICAgICAgWzEyMC4yNDQyODYsIDMwLjE4MjY3XSxcclxuICAgICAgICAgIFsxMjAuMjQzNjg1LCAzMC4xOTE4N10sXHJcbiAgICAgICAgICBbMTIwLjIzNTcwMywgMzAuMTkxNDk5XSxcclxuICAgICAgICAgIFsxMjAuMjM1MTg4LCAzMC4xOTE4N10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbMTIwLjIxMDY4MywgMzAuMTgxNTU3XSxcclxuICAgICAgICAgIFsxMjAuMjExNTQxLCAzMC4xNzYzNjNdLFxyXG4gICAgICAgICAgWzEyMC4yMzE2MjYsIDMwLjE3NTMyNV0sXHJcbiAgICAgICAgICBbMTIwLjIzMTU0LCAzMC4xODMxMTVdLFxyXG4gICAgICAgICAgWzEyMC4yMTA2ODMsIDMwLjE4MTU1N10sXHJcbiAgICAgICAgXSxcclxuICAgICAgXSxcclxuICAgICAgbWFya2VyOiBbXHJcbiAgICAgICAgWzEyMC4yNDM1NDgsIDMwLjE5OTg3MV0sXHJcbiAgICAgICAgWzEyMC4yNDkxNDgsIDMwLjE5OTgxNl0sXHJcbiAgICAgICAgWzEyMC4yNDkyNTYsIDMwLjE5NDQxOV0sXHJcbiAgICAgICAgWzEyMC4yNDM1NjksIDMwLjE5NDUxMV0sXHJcbiAgICAgICAgWzEyMC4yNDM1NDgsIDMwLjE5OTg3MV0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcG9seWdvbiA9IHt9O1xyXG4gIG90aGVyUG9seWdvbiA9IFtdXHJcblxyXG4gIC8qKlxyXG4gICAqIFtjb21wb25lbnREaWRVcGRhdGUgZGVzY3JpcHRpb25dXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBwcmV2UHJvcHMgW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcCAmJiB0aGlzLm1hcC5zZXRGaXRWaWV3KCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogW2NyYXRlUG9seSBkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBjcmF0ZVBvbHkoKSB7XHJcbiAgICB0aGlzLm1hcC5wbHVnaW4oWydBTWFwLk1vdXNlVG9vbCddLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBvbHlMaW5lID0gbmV3IHdpbmRvdy5BTWFwLk1vdXNlVG9vbCh0aGlzLm1hcCk7XHJcbiAgICAgIHBvbHlMaW5lLnBvbHlnb24oe1xyXG4gICAgICAgIGZpbGxDb2xvcjogJyM4ZGM1ZjMnLFxyXG4gICAgICAgIHN0cm9rZUNvbG9yOiAnIzRmN2RlMycsXHJcbiAgICAgICAgZmlsbE9wYWNpdHk6ICcwLjMnLFxyXG4gICAgICB9KTtcclxuICAgICAgcG9seUxpbmUub24oJ2RyYXcnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSBlLm9iai5nZXRQYXRoKCkubWFwKChtYXJrZXIpID0+IChbbWFya2VyLmxuZywgbWFya2VyLmxhdF0pKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICBtaWxrQXJlYTogW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLm1pbGtBcmVhLFxyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBwb2x5TGluZS5jbG9zZSh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIOiuoeeul3BvbHlnb27liJfooajkuK3lv4PngrlcclxuICAvKipcclxuICAgKiBbY291bnRQb2x5Z29uQ2VudGVyIGRlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gcG9seWdvbkxpc3QgW2Rlc2NyaXB0aW9uXVxyXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGNvdW50UG9seWdvbkNlbnRlcihwb2x5Z29uTGlzdCkge1xyXG4gICAgcmV0dXJuIHBvbHlnb25MaXN0Lm1hcCgocGF0aHMpID0+IHtcclxuICAgICAgY29uc3QgbG5ncyA9IHBhdGhzLm1hcCgocG9pKSA9PiAocG9pWzBdIHx8IHBvaS5sbmcpKTtcclxuICAgICAgY29uc3QgbGF0cyA9IHBhdGhzLm1hcCgocG9pKSA9PiAocG9pWzFdIHx8IHBvaS5sYXQpKTtcclxuICAgICAgY29uc3QgbG5nID0gKE1hdGgubWluLmFwcGx5KG51bGwsIGxuZ3MpICsgTWF0aC5tYXguYXBwbHkobnVsbCwgbG5ncykpICogMC41O1xyXG4gICAgICBjb25zdCBsYXQgPSAoTWF0aC5taW4uYXBwbHkobnVsbCwgbGF0cykgKyBNYXRoLm1heC5hcHBseShudWxsLCBsYXRzKSkgKiAwLjU7XHJcbiAgICAgIHJldHVybiBbbG5nLCBsYXRdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbY2xlYXJQb2x5Z29uIGRlc2NyaXB0aW9uXVxyXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGNsZWFyUG9seWdvbigpIHtcclxuICAgIGVkaXRJbmRleCA9IG51bGw7XHJcbiAgICBjb25zdCB7Y2hlY2tlZFZhbHVlcywgbWlsa0FyZWF9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGlmIChwb2x5RWRpdG9yKSB7XHJcbiAgICAgIGNvbnN0IHBvbHlnb24gPSBwb2x5RWRpdG9yLmFxWzBdLm1hcCgobWFya2VyKSA9PiAoW21hcmtlci5sbmcsIG1hcmtlci5sYXRdKSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgbWlsa0FyZWE6IHRoaXMuc3RhdGUubWlsa0FyZWEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGluZGV4ID09PSBlZGl0SW5kZXggPyBwb2x5Z29uIDogaXRlbTtcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIHBvbHlFZGl0b3IuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGNoZWNrZWRWYWx1ZXMpO1xyXG4gICAgbGV0IHZhbHVlcyA9IG1pbGtBcmVhO1xyXG4gICAgaWYgKGNoZWNrZWRWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjaGVja2VkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoaW5kZXggKyAxKSAhPT0gK3ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgbWlsa0FyZWE6IHZhbHVlcyxcclxuICAgICAgaXNTaG93Q2xlYXJMaXN0OiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogW2VkaXRQb2x5Z29uIGRlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gaW5kZXggW2Rlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIGVkaXRQb2x5Z29uKGluZGV4KSB7XHJcbiAgICBlZGl0SW5kZXggPSBpbmRleDtcclxuICAgIGlmIChwb2x5RWRpdG9yKSB7XHJcbiAgICAgIGNvbnN0IHBvbHlnb24gPSBwb2x5RWRpdG9yLmFxWzBdLm1hcCgobWFya2VyKSA9PiAoW21hcmtlci5sbmcsIG1hcmtlci5sYXRdKSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgbWlsa0FyZWE6IHRoaXMuc3RhdGUubWlsa0FyZWEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGluZGV4ID09PSBlZGl0SW5kZXggPyBwb2x5Z29uIDogaXRlbTtcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIHBvbHlFZGl0b3IuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIGxldCBwb2x5Z29uID0gdGhpcy5wb2x5Z29uW2luZGV4XTtcclxuICAgIHRoaXMucG9seWdvbkluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLm1hcC5wbHVnaW4oWydBTWFwLlBvbHlFZGl0b3InXSwgKCkgPT4ge1xyXG4gICAgLy8g5a6e5L6L5YyW5aSa6L655b2i57yW6L6R5Zmo77yM5Lyg5YWl5Zyw5Zu+5a6e5L6L5ZKM6KaB6L+b6KGM57yW6L6R55qE5aSa6L655b2i5a6e5L6LXHJcbiAgICAgIHBvbHlFZGl0b3IgPSBuZXcgd2luZG93LkFNYXAuUG9seUVkaXRvcih0aGlzLm1hcCwgcG9seWdvbik7XHJcblxyXG4gICAgICAvLyDlvIDlkK/nvJbovpHmqKHlvI9cclxuICAgICAgcG9seUVkaXRvci5vcGVuKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucG9seUVkaXRvciA9IHBvbHlFZGl0b3I7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbb25NYXBDb21wbGV0ZSBkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG1hcCBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgb25NYXBDb21wbGV0ZShtYXApIHtcclxuICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgdGhpcy5tYXAuc2V0Rml0VmlldygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogW3NhdmVQb2x5Z29uIGRlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIHNhdmVQb2x5Z29uKCkge1xyXG4gICAgY29uc3Qge21pbGtBcmVhfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAocG9seUVkaXRvcikge1xyXG4gICAgICBsZXQgY29tcGFyZTtcclxuICAgICAgdGhpcy5vdGhlclBvbHlnb24ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29tcGFyZSA9IHRoaXMuY29tcGFyZShpdGVtLCB0aGlzLnBvbHlnb25bZWRpdEluZGV4XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlZGl0SW5kZXggPSBudWxsO1xyXG4gICAgICBpZiAoIWNvbXBhcmUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcG9seWdvbiA9IHBvbHlFZGl0b3IuYXFbMF0ubWFwKChtYXJrZXIpID0+IChbbWFya2VyLmxuZywgbWFya2VyLmxhdF0pKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICBtaWxrQXJlYTogbWlsa0FyZWEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGluZGV4ID09PSBlZGl0SW5kZXggPyBwb2x5Z29uIDogaXRlbTtcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwb2x5RWRpdG9yLmNsb3NlKCk7XHJcbiAgICAgIHRoaXMuaGlkZUxpc3QoKTtcclxuICAgICAgcG9seUVkaXRvciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBbY29tcGFyZSBkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHBvbHlnb24gIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHBvbHlnb24xIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBjb21wYXJlKHBvbHlnb24sIHBvbHlnb24xKSB7XHJcbiAgICBjb25zdCBwb2x5Z29uUGF0aCA9IHBvbHlnb24uZ2V0UGF0aCgpO1xyXG4gICAgY29uc3QgcG9seWdvbjFQYXRoID0gcG9seWdvbjEuZ2V0UGF0aCgpO1xyXG4gICAgLy8g5bCP5ZyI5piv5ZCm5Zyo5aSn5ZyI5YaFXHJcbiAgICBjb25zdCBpc1JpbmdJblJpbmcgPSB3aW5kb3cuQU1hcC5HZW9tZXRyeVV0aWwuaXNSaW5nSW5SaW5nKHBvbHlnb24xUGF0aCwgcG9seWdvblBhdGgpO1xyXG4gICAgLy8g5Lik5ZyI5piv5ZCm5Lqk5Y+JXHJcbiAgICBjb25zdCBkb2VzUmluZ1JpbmdJbnRlcnNlY3QgPSB3aW5kb3cuQU1hcC5HZW9tZXRyeVV0aWwuZG9lc1JpbmdSaW5nSW50ZXJzZWN0KHBvbHlnb24xUGF0aCwgcG9seWdvblBhdGgpO1xyXG4gICAgY29uc3QgcmluZ1JpbmdDbGlwID0gd2luZG93LkFNYXAuR2VvbWV0cnlVdGlsLnJpbmdSaW5nQ2xpcChwb2x5Z29uMVBhdGgsIHBvbHlnb25QYXRoKTtcclxuICAgIGNvbnN0IHJpbmdBcmVhID0gcGFyc2VJbnQod2luZG93LkFNYXAuR2VvbWV0cnlVdGlsLnJpbmdBcmVhKHJpbmdSaW5nQ2xpcCkpO1xyXG4gICAgbGV0IGNhblNhdmUgPSB0cnVlO1xyXG4gICAgaWYgKGlzUmluZ0luUmluZykge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKCfkuKTlnIjlhbPns7vvvJrlnKjlpKflnIjlhoUnKTtcclxuICAgICAgY2FuU2F2ZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChkb2VzUmluZ1JpbmdJbnRlcnNlY3QpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcign5Lik5ZyI5YWz57O777ya5Lik5ZyI55u45LqkLCDkuqTlj4nljLrln5/pnaLnp6/kuLonICsgcmluZ0FyZWEgKyAn5bmz5pa557GzJyk7XHJcbiAgICAgIGNhblNhdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjYW5TYXZlO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBbb25Qb2x5Z29uQ29tcGxldGUgZGVzY3JpcHRpb25dXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBpbmRleCAgIFtkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IG1hcCAgICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gcG9seWdvbiBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgb25Qb2x5Z29uQ29tcGxldGUoaW5kZXgsIG1hcCwgcG9seWdvbikge1xyXG4gICAgdGhpcy5wb2x5Z29uW2luZGV4XSA9IHBvbHlnb247XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFtvdGhlclBvbHlnb25Db21wbGV0ZSBkZXNjcmlwdGlvbl1cclxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGluZGV4ICAgW2Rlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gbWFwICAgICBbZGVzY3JpcHRpb25dXHJcbiAgICogQHBhcmFtICB7W3R5cGVdfSBwb2x5Z29uIFtkZXNjcmlwdGlvbl1cclxuICAgKi9cclxuICBvdGhlclBvbHlnb25Db21wbGV0ZShpbmRleCwgbWFwLCBwb2x5Z29uKSB7XHJcbiAgICB0aGlzLm90aGVyUG9seWdvbi5wdXNoKHBvbHlnb24pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBbdG9nZ2xlQ2xlYXJMaXN0IGRlc2NyaXB0aW9uXVxyXG4gICAqL1xyXG4gIHRvZ2dsZUNsZWFyTGlzdCgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbWlsa0FyZWEsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAobWlsa0FyZWEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNTaG93Q2xlYXJMaXN0OiAhdGhpcy5zdGF0ZS5pc1Nob3dDbGVhckxpc3QsXHJcbiAgICAgIGlzU2hvd0VkaXRMaXN0OiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBbdG9nZ2xlRWRpdExpc3QgZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgdG9nZ2xlRWRpdExpc3QoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1pbGtBcmVhLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKG1pbGtBcmVhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzU2hvd0NsZWFyTGlzdDogZmFsc2UsXHJcbiAgICAgIGlzU2hvd0VkaXRMaXN0OiAhdGhpcy5zdGF0ZS5pc1Nob3dFZGl0TGlzdCxcclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBbaGlkZUxpc3QgZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgaGlkZUxpc3QoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNTaG93Q2xlYXJMaXN0OiBmYWxzZSxcclxuICAgICAgaXNTaG93RWRpdExpc3Q6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFtvbkNoZWNrYm94Q2hhbmdlIGRlc2NyaXB0aW9uXVxyXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gY2hlY2tlZFZhbHVlcyBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgb25DaGVja2JveENoYW5nZShjaGVja2VkVmFsdWVzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkVmFsdWVzfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFtyZW5kZXIgZGVzY3JpcHRpb25dXHJcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcbiAgICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2JvdW5kLCBtaWxrQXJlYSwgb3RoZXJNaWxrQXJlYSwgaXNTaG93RWRpdExpc3QsIGlzU2hvd0NsZWFyTGlzdCwgbWFya2VyfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBtYXJrZXJMaXN0ID0gdGhpcy5jb3VudFBvbHlnb25DZW50ZXIobWlsa0FyZWEpO1xyXG5cclxuICAgIGNvbnN0IHBsYWluT3B0aW9ucyA9IEFycmF5LmZyb20oe2xlbmd0aDogbWFya2VyTGlzdC5sZW5ndGh9KS5tYXAoKHYsIGspID0+IGAke2sgKyAxfWApO1xyXG4gICAgY29uc3QgbWFwSGVpZ2h0ID0gKDEgLSAoMTYwIC8gd2luZG93LmlubmVySGVpZ2h0KSkgKiAxMDA7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBgJHttYXBIZWlnaHR9dmhgLCBwb3NpdGlvbjogJ3JlZWxhdGl2ZSd9fT5cclxuICAgICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNyYXRlUG9seS5iaW5kKHRoaXMpfT7nu5jliLY8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy50b2dnbGVFZGl0TGlzdC5iaW5kKHRoaXMpfT7nvJbovpE8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy50b2dnbGVDbGVhckxpc3QuYmluZCh0aGlzKX0+5riF6ZmkPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2F2ZVBvbHlnb24uYmluZCh0aGlzKX0+5L+d5a2YPC9CdXR0b24+XHJcbiAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpc1Nob3dDbGVhckxpc3QgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXAyfT5cclxuICAgICAgICAgICAgPENoZWNrYm94R3JvdXAgb3B0aW9ucz17cGxhaW5PcHRpb25zfSBvbkNoYW5nZT17dGhpcy5vbkNoZWNrYm94Q2hhbmdlLmJpbmQodGhpcyl9Lz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xlYXJQb2x5Z29uLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg56Gu5a6aXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlzU2hvd0VkaXRMaXN0ICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwM30+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwbGFpbk9wdGlvbnMubWFwKChubykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmVkaXRQb2x5Z29uLmJpbmQodGhpcywgbm8pfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e25vfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bm99XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPEFNYXBcclxuICAgICAgICAgIGFwcEtleT17QU1BUF9LRVl9XHJcbiAgICAgICAgICBib3VuZHM9e2JvdW5kfVxyXG4gICAgICAgICAgZGVmYXVsdEN1cnNvcj0ncG9pbnRlcidcclxuICAgICAgICAgIG1hcFN0eWxlPXtBTUFQX1NUWUxFfVxyXG4gICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbk1hcENvbXBsZXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhpZGVMaXN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB6b29tPXsxM31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1pbGtBcmVhLm1hcCgocGF0aCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8UG9seWdvblxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcj0nIzhkYzVmMydcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPScjNGY3ZGUzJ1xyXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9JzAuMydcclxuICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uUG9seWdvbkNvbXBsZXRlLmJpbmQodGhpcywgaW5kZXggKyAxKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJrZXJMaXN0Lm1hcCgocG9zaXRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPScke3N0eWxlcy5tYXJrZXJ9Jz5cclxuICAgICAgICAgICAgICAgICAgICAke2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17Wy0xMCwgLTEwXX1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBvdGhlck1pbGtBcmVhLm1hcCgocGF0aCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8UG9seWdvblxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj0nIzQyODVGNCdcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcj0nYmxhY2snXHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT0nMC4zJ1xyXG4gICAgICAgICAgICAgICAgYnViYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vdGhlclBvbHlnb25Db21wbGV0ZS5iaW5kKHRoaXMsIGluZGV4ICsgMSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWFya2VyLm1hcCgobWFya2VyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17bWFya2VyfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXtbLTEwLCAtMzBdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9BTWFwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgYXN5bmMsXHJcbn0gZnJvbSAnLi9hY3Rpb25zJztcclxuY29uc3Qge1xyXG4gIHNvbWVBc3luYyxcclxufSA9IGFzeW5jO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb3VudDogc3RhdGUubGlzdC5jb3VudCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBmZXRjaFNvbWVBc3luY1JlcXVlc3Q6ICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goc29tZUFzeW5jKCkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuQGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbi8qKlxyXG4gKiBDb25uZWN0ZWQgcmVhY3QgY29tcG9uZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxufVxyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi9wbGF0Zm9ybS5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuL3BsYXRmb3JtLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuL3BsYXRmb3JtLmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9