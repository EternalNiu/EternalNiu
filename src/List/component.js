import React, {Component} from 'react';
import {Button, message, Checkbox} from 'antd';
import styles from './platform.less';
import {
  AMap,
  Marker,
  Polygon,
} from 'react-amap-binding';
const ButtonGroup = Button.Group;
const CheckboxGroup = Checkbox.Group;
const AMAP_KEY = '964ffab2ef1edca12c97f817342c4315';
const AMAP_STYLE = 'amap://styles/9c109cbf2e0f55701c6ec4e5c90c56ba';
let polyEditor;
let editIndex;

/**
 * List
 */
class List extends Component {
  /**
   * [constructor description]
   * @param  {[type]} props [description]
   */
  constructor(props) {
    super(props);
    this.state = {
      bound: undefined,
      checkedValues: [],
      isShowClearList: false,
      isShowEditList: false,
      milkArea: [
        [
          [120.189268, 30.205297],
          [120.1915, 30.201588],
          [120.198796, 30.205297],
          [120.196821, 30.208635],
          [120.189268, 30.205297],
        ],
        [
          [120.193989, 30.197285],
          [120.201113, 30.20092],
          [120.202572, 30.198027],
          [120.202658, 30.196098],
          [120.202658, 30.19187],
          [120.195276, 30.191202],
          [120.193989, 30.197285],

        ],
        [
          [120.206434, 30.209154],
          [120.208838, 30.205074],
          [120.216648, 30.209228],
          [120.213301, 30.213827],
          [120.210812, 30.216571],
          [120.20858, 30.214049],
          [120.204203, 30.211973],
          [120.206434, 30.209154],
        ],
        [
          [120.209954, 30.198695],
          [120.218022, 30.199956],
          [120.218107, 30.194466],
          [120.228407, 30.195134],
          [120.229094, 30.195208],
          [120.228836, 30.19187],
          [120.218622, 30.192167],
          [120.218365, 30.190089],
          [120.210983, 30.189644],
          [120.209954, 30.198695],
        ],
      ],
      otherMilkArea: [
        [
          [120.224201, 30.213382],
          [120.232269, 30.217164],
          [120.235016, 30.211527],
          [120.234501, 30.206558],
          [120.229094, 30.206187],
          [120.224201, 30.213382],
        ],
        [
          [120.234415, 30.200475],
          [120.234673, 30.201291],
          [120.240681, 30.201069],
          [120.241797, 30.194318],
          [120.234587, 30.194689],
          [120.234415, 30.200475],
        ],
        [
          [120.235188, 30.19187],
          [120.233814, 30.182967],
          [120.244286, 30.18267],
          [120.243685, 30.19187],
          [120.235703, 30.191499],
          [120.235188, 30.19187],
        ],
        [
          [120.210683, 30.181557],
          [120.211541, 30.176363],
          [120.231626, 30.175325],
          [120.23154, 30.183115],
          [120.210683, 30.181557],
        ],
      ],
      marker: [
        [120.243548, 30.199871],
        [120.249148, 30.199816],
        [120.249256, 30.194419],
        [120.243569, 30.194511],
        [120.243548, 30.199871],
      ],
    };
  }

  polygon = {};
  otherPolygon = []

  /**
   * [componentDidUpdate description]
   * @param  {[type]} prevProps [description]
   */
  componentDidUpdate(prevProps) {
    setTimeout(() => {
      this.map && this.map.setFitView();
    }, 500);
  }

  /**
   * [cratePoly description]
   */
  cratePoly() {
    this.map.plugin(['AMap.MouseTool'], () => {
      const polyLine = new window.AMap.MouseTool(this.map);
      polyLine.polygon({
        fillColor: '#8dc5f3',
        strokeColor: '#4f7de3',
        fillOpacity: '0.3',
      });
      polyLine.on('draw', (e) => {
        const path = e.obj.getPath().map((marker) => ([marker.lng, marker.lat]));
        this.setState({
          ...this.state,
          milkArea: [
            ...this.state.milkArea,
            path,
          ],
        });
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
  countPolygonCenter(polygonList) {
    return polygonList.map((paths) => {
      const lngs = paths.map((poi) => (poi[0] || poi.lng));
      const lats = paths.map((poi) => (poi[1] || poi.lat));
      const lng = (Math.min.apply(null, lngs) + Math.max.apply(null, lngs)) * 0.5;
      const lat = (Math.min.apply(null, lats) + Math.max.apply(null, lats)) * 0.5;
      return [lng, lat];
    });
  }

  /**
   * [clearPolygon description]
   * @return {[type]} [description]
   */
  clearPolygon() {
    editIndex = null;
    const {checkedValues, milkArea} = this.state;
    if (polyEditor) {
      const polygon = polyEditor.aq[0].map((marker) => ([marker.lng, marker.lat]));
      this.setState({
        ...this.state,
        milkArea: this.state.milkArea.map((item, index) => {
          return index === editIndex ? polygon : item;
        }),
      });
      polyEditor.close();
    }
    console.log(checkedValues);
    let values = milkArea;
    if (checkedValues.length > 0) {
      checkedValues.forEach((value) => {
        values = values.filter((item, index) => {
          return (index + 1) !== +value;
        });
      });
    }
    console.log(values);
    this.setState({
      ...this.state,
      milkArea: values,
      isShowClearList: false,
    });
  }

  /**
   * [editPolygon description]
   * @param  {[type]} index [description]
   */
  editPolygon(index) {
    editIndex = index;
    if (polyEditor) {
      const polygon = polyEditor.aq[0].map((marker) => ([marker.lng, marker.lat]));
      this.setState({
        ...this.state,
        milkArea: this.state.milkArea.map((item, index) => {
          return index === editIndex ? polygon : item;
        }),
      });
      polyEditor.close();
    }
    let polygon = this.polygon[index];
    this.polygonIndex = index;
    this.map.plugin(['AMap.PolyEditor'], () => {
    // 实例化多边形编辑器，传入地图实例和要进行编辑的多边形实例
      polyEditor = new window.AMap.PolyEditor(this.map, polygon);

      // 开启编辑模式
      polyEditor.open();
    });
    this.polyEditor = polyEditor;
  }

  /**
   * [onMapComplete description]
   * @param  {[type]} map [description]
   */
  onMapComplete(map) {
    this.map = map;
    this.map.setFitView();
  }

  /**
   * [savePolygon description]
   */
  savePolygon() {
    const {milkArea} = this.state;
    if (polyEditor) {
      let compare;
      this.otherPolygon.map((item) => {
        compare = this.compare(item, this.polygon[editIndex]);
      });
      editIndex = null;
      if (!compare) {
        return;
      }
      const polygon = polyEditor.aq[0].map((marker) => ([marker.lng, marker.lat]));
      this.setState({
        ...this.state,
        milkArea: milkArea.map((item, index) => {
          return index === editIndex ? polygon : item;
        }),
      });

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
  compare(polygon, polygon1) {
    const polygonPath = polygon.getPath();
    const polygon1Path = polygon1.getPath();
    // 小圈是否在大圈内
    const isRingInRing = window.AMap.GeometryUtil.isRingInRing(polygon1Path, polygonPath);
    // 两圈是否交叉
    const doesRingRingIntersect = window.AMap.GeometryUtil.doesRingRingIntersect(polygon1Path, polygonPath);
    const ringRingClip = window.AMap.GeometryUtil.ringRingClip(polygon1Path, polygonPath);
    const ringArea = parseInt(window.AMap.GeometryUtil.ringArea(ringRingClip));
    let canSave = true;
    if (isRingInRing) {
      message.error('两圈关系：在大圈内');
      canSave = false;
    } else if (doesRingRingIntersect) {
      message.error('两圈关系：两圈相交, 交叉区域面积为' + ringArea + '平方米');
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
  onPolygonComplete(index, map, polygon) {
    this.polygon[index] = polygon;
  }
  /**
   * [otherPolygonComplete description]
   * @param  {[type]} index   [description]
   * @param  {[type]} map     [description]
   * @param  {[type]} polygon [description]
   */
  otherPolygonComplete(index, map, polygon) {
    this.otherPolygon.push(polygon);
  }
  /**
   * [toggleClearList description]
   */
  toggleClearList() {
    const {
      milkArea,
    } = this.state;

    if (milkArea.length === 0) {
      return;
    }

    this.setState({
      isShowClearList: !this.state.isShowClearList,
      isShowEditList: false,
    });
  }
  /**
   * [toggleEditList description]
   */
  toggleEditList() {
    const {
      milkArea,
    } = this.state;

    if (milkArea.length === 0) {
      return;
    }

    this.setState({
      isShowClearList: false,
      isShowEditList: !this.state.isShowEditList,
    });
  }
  /**
   * [hideList description]
   */
  hideList() {
    this.setState({
      isShowClearList: false,
      isShowEditList: false,
    });
  }
  /**
   * [onCheckboxChange description]
   * @param  {[type]} checkedValues [description]
   */
  onCheckboxChange(checkedValues) {
    this.setState({checkedValues});
  }
  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const {bound, milkArea, otherMilkArea, isShowEditList, isShowClearList, marker} = this.state;
    const markerList = this.countPolygonCenter(milkArea);

    const plainOptions = Array.from({length: markerList.length}).map((v, k) => `${k + 1}`);
    const mapHeight = (1 - (160 / window.innerHeight)) * 100;
    return (
      <div style={{width: '100%', height: `${mapHeight}vh`, position: 'reelative'}}>
        <ButtonGroup className={styles.buttonGroup}>
          <Button onClick={this.cratePoly.bind(this)}>绘制</Button>
          <Button onClick={this.toggleEditList.bind(this)}>编辑</Button>
          <Button onClick={this.toggleClearList.bind(this)}>清除</Button>
          <Button onClick={this.savePolygon.bind(this)}>保存</Button>
        </ButtonGroup>
        {
          isShowClearList &&
          <div className={styles.buttonGroup2}>
            <CheckboxGroup options={plainOptions} onChange={this.onCheckboxChange.bind(this)}/>
            <Button
              onClick={this.clearPolygon.bind(this)}
              type="primary"
            >
              确定
            </Button>
          </div>
        }
        {
          isShowEditList &&
          <div className={styles.buttonGroup3}>
            {
              plainOptions.map((no) => (
                <Button
                  onClick={this.editPolygon.bind(this, no)}
                  key={no}
                >
                  {no}
                </Button>
              ))
            }
          </div>
        }
        <AMap
          appKey={AMAP_KEY}
          bounds={bound}
          defaultCursor='pointer'
          mapStyle={AMAP_STYLE}
          onComplete={this.onMapComplete.bind(this)}
          onClick={this.hideList.bind(this)}
          zoom={13}
        >
          {
            milkArea.map((path, index) => (
              <Polygon
                key={index}
                fillColor='#8dc5f3'
                strokeColor='#4f7de3'
                fillOpacity='0.3'
                path={path}
                onComplete={this.onPolygonComplete.bind(this, index + 1)}
              />
            ))
          }
          {
            markerList.map((position, index) => (
              <Marker
                content={
                  `<div class='${styles.marker}'>
                    ${index + 1}
                  </div>`
                }
                key={index}
                offset={[-10, -10]}
                position={position}
              />
            ))
          }
          {
            otherMilkArea.map((path, index) => (
              <Polygon
                key={index}
                path={path}
                strokeColor='#4285F4'
                fillColor='black'
                fillOpacity='0.3'
                bubble={true}
                onComplete={this.otherPolygonComplete.bind(this, index + 1)}
              />
            ))
          }
          {
            marker.map((marker, index) => (
              <Marker
                key={index}
                position={marker}
                offset={[-10, -30]}
              />
            ))
          }
        </AMap>
      </div>
    );
  }
}
export default List;
