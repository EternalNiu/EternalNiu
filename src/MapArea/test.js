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
    let sumX=0;
    let sumY=0;
    for (let i=0; i<latLngPoints.length; i++) {
        sumX+=latLngPoints[i][0];
        sumY+=latLngPoints[i][1];
    }
    let centerX=sumX/latLngPoints.length;
    let centerY=sumY/latLngPoints.length;
    let centerPoint= {};
    centerPoint.x=centerX;
    centerPoint.y=centerY;
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
    let x = lngb - lnga;
    let y = latb - lata;
    let brng = Math.atan2(x, y);

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
const points = (latLngPoints) => {
    let tmpSortArray=[];
    let lineDegree=null;
    let pointCenter=calcCenterPoint(latLngPoints);
    for (let i=0, len=latLngPoints.length; i<len; i++) {
        lineDegree=getAngle1(pointCenter.x, pointCenter.y, latLngPoints[i][0], latLngPoints[i][1]);
        tmpSortArray.push({degree: lineDegree, latLng: latLngPoints[i]});
    }
    tmpSortArray.sort(function(a, b) {
        return b.degree - a.degree;
    });

    let sortedArray=[];
    for (let i=0; i<tmpSortArray.length; i++) {
        sortedArray.push(tmpSortArray[i].latLng);
    }
    return sortedArray;
};

export default points;
