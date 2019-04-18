import React from 'react';
import {
  object,
  number,
  func,
} from 'prop-types';
import {Button, Input} from 'antd';
import {
  AMap,
  Marker,
  Polygon,
} from 'react-amap-binding';
import {hot} from 'react-hot-loader';
const AMAP_KEY = '964ffab2ef1edca12c97f817342c4315';
const AMAP_STYLE = 'amap://styles/9c109cbf2e0f55701c6ec4e5c90c56ba';
import points from './test.js';

let polyEditor;
@hot(module)
/**
 * List Page
 */
export default class List extends React.Component {
  static propTypes = {
    classes: object,
    count: number,
    fetchSomeAsyncRequest: func,
  };

  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      bounds: undefined,
      data: [
        [116.398258, 39.9046],
        [116.382122, 39.901176],
        [116.368904, 39.913423],
        [116.387271, 39.912501],
      ],
      data1: [
        [116.398258, 39.9046],
        [116.387271, 39.912501],
        [116.382122, 39.901176],
        [116.368904, 39.913423],
      ],
      data2: [
        [116.376907, 39.910967],
        [116.384911, 39.919505],
        [116.40109, 39.919728],
        [116.411132, 39.911408],
        [116.412076, 39.899135],
        [116.402292, 39.892353],
        [116.3874, 39.892518],
        [116.376971, 39.899267],
      ],
      otherData: [
        [116.390233, 39.906602],
        [116.400962, 39.898589],
        [116.400661, 39.906667],
        [116.395254, 39.908668],
        [116.395769, 39.894855],
        [116.390147, 39.898049],
      ],
      newData: [
        [116.368904, 39.913423],
        [116.382122, 39.901176],
        [116.387271, 39.912501],
        [116.398258, 39.904600],
      ],
    };
  }

  /**
   * [onMapComplete description]
   * @param  {[type]} map [description]
   */
  onMapComplete(map) {
    this.map = map;
  }

  /**
   * [onOtherPolygonComplete description]
   * @param  {[type]} index   [description]
   * @param  {[type]} map     [description]
   * @param  {[type]} polygon [description]
   */
  onPolygonComplete(index, map, polygon) {
    this.polygon1 = polygon;
  }

  /**
   * [onOtherPolygonComplete description]
   * @param  {[type]} index   [description]
   * @param  {[type]} map     [description]
   * @param  {[type]} polygon [description]
   */
   onOtherPolygonComplete(index, map, polygon) {
    this.polygon2 = polygon;
  }
  /**
   * [cratePoly description]
   */
  cratePoly() {
    const _self = this;
    const map = this.map;
    map.plugin(['AMap.MouseTool'], function() {
      const polyLine = new window.AMap.MouseTool(map);
      polyLine.polygon({
        fillColor: 'red',
        strokeColor: 'green',
        fillOpacity: '0.5',
      });
      polyLine.on('draw', (e) => {
        const path = e.obj.getPath().map((marker) => ([marker.lng, marker.lat]));
         _self.setState({
          ..._self.state,
          data: path,
        });
        polyLine.close(true);
      });
    });
  }

  /**
   * [handlePlon description]
   * @param  {[type]} e [description]
   */
  editPolygon() {
    const _self = this;
    const map = this.map;
    map.plugin(['AMap.PolyEditor'], function() {
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
  savePolygon() {
    if (polyEditor) {
      const polygon = polyEditor.aq[0].map((marker) => ([marker.lng, marker.lat]));
      this.setState({
        ...this.state,
        data: polygon,
      });
      polyEditor.close();
    }
  }

  /**
   * [deletePolygon description]
   */
  deletePolygon() {
    if (polyEditor) {
      polyEditor.close();
    }
    this.setState({
      ...this.state,
      data: [],
    });
  }

  /**
   * [compare description]
   * @return {[type]} [description]
   */
  compare() {
    const polygon1_path = this.polygon1.getPath();
    const polygon2_path = this.polygon2.getPath();
    // 小圈是否在大圈内
    const isRingInRing = window.AMap.GeometryUtil.isRingInRing(polygon2_path, polygon1_path);
    // 两圈是否交叉
    const doesRingRingIntersect = window.AMap.GeometryUtil.doesRingRingIntersect(polygon2_path, polygon1_path);
    const ringRingClip = window.AMap.GeometryUtil.ringRingClip(polygon2_path, polygon1_path);
    const ringArea = parseInt(window.AMap.GeometryUtil.ringArea(ringRingClip));
    
    let text = '两圈关系：在大圈外';
    if (isRingInRing) {
        text = '两圈关系：在大圈内';
    } else if (doesRingRingIntersect) {
        text = '两圈关系：两圈相交, 交叉区域面积为'+ringArea+'平方米';
    }
    console.log(text);
  }

  /**
   * [addressInputChange description]
   * @param  {[type]} event [description]
   */
  addressInputChange(event) {
    window.AMap.plugin('AMap.Geocoder', function() {
      const geocoder = new window.AMap.Geocoder({
        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
        city: '南京',
      });
      geocoder.getLocation('南京市江宁区金轮第一城', function(status, result) {
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
  render() {
    const {bounds, data, otherData, data1} = this.state;
    const name = points(otherData);
    console.log(name);
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Button onClick={this.cratePoly.bind(this)}>绘制</Button>
        <Button onClick={this.editPolygon.bind(this)}>编辑</Button>
        <Button onClick={this.savePolygon.bind(this)}>保存</Button>
        <Button onClick={this.deletePolygon.bind(this)}>清除</Button>
        <Button onClick={this.compare.bind(this)}>对比</Button>
        <Input placeholder='请输入详细地址' onChange={this.addressInputChange.bind(this)}/>
        <AMap
          appKey={AMAP_KEY}
          bounds={bounds}
          version='1.3.0'
          defaultCursor='pointer'
          mapStyle={AMAP_STYLE}
          center={[116.3972443, 39.91397024]}
          onComplete={this.onMapComplete.bind(this)}
          zoom={13}
        >
          <Polygon
            path={data}
            fillColor='red'
            strokeColor='green'
            fillOpacity={0.5}
            onComplete={this.onPolygonComplete.bind(this, 1)}
          />
          {
            data1.map((item, index) => (
              <Marker
              key={index}
              offset={[-10, -30]}
              position={item}
            />
            ))
          }
          <Polygon
            path={name}
            fillColor='red'
            strokeColor='green'
            fillOpacity={0.5}
            onComplete={this.onOtherPolygonComplete.bind(this, 2)}
          />
        </AMap>
      </div>
    );
  }
}
