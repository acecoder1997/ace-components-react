import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const preshrunk = {
    id: 'ID',
    dyeLot: '缸号',
    machineId: '机台ID',
    machineNo: '机台',
    billNo: '订单号',
    customerPo: '客户PO',
    needleQty: '针寸数',
    articleNo: 'zt号',
    process: '工序',
    materialName: '布类',
    ingredients: '成分',
    color: '颜色',
    meterNum: '米数',
    weight: '重量',
    rollNum: '疋数',
    weavingMachineNo: '织机号',
    comment: '开发办评语',
    // 原胚煮前
    width: '原胚煮前 封度',
    gramWeight: '原胚煮前 克重',
    CPI: '原胚煮前 CPI',
    WPI: '原胚煮前 WPI',
    slantAngle: '原胚煮前 斜度',
    // 原胚煮后
    widthB: '原胚煮后 封度',
    gramWeightB: '原胚煮后 克重',
    CPIB: '原胚煮后 CPI',
    WPIB: '原胚煮后 WPI',
    slantAngleB: '原胚煮后 斜度',
    // 胚定煮前
    widthC: '胚定煮前 封度',
    gramWeightC: '胚定煮前 克重',
    CPIC: '胚定煮前 CPI',
    WPIC: '胚定煮前 WPI',
    slantAngleC: '胚定煮前 斜度',
    // 胚定煮后
    widthD: '胚定煮后 封度',
    gramWeightD: '胚定煮后 克重',
    CPID: '胚定煮后 CPI',
    WPID: '胚定煮后 WPI',
    slantAngleD: '胚定煮后 斜度',
    // 半成品煮前
    widthE: '半成品煮前 封度',
    gramWeightE: '半成品煮前 克重',
    CPIE: '半成品煮前 CPI',
    WPIE: '半成品煮前 WPI',
    slantAngleE: '半成品煮前 斜度',
    // 半成品煮后
    widthF: '半成品煮后 封度',
    gramWeightF: '半成品煮后 克重',
    CPIF: '半成品煮后 CPI',
    WPIF: '半成品煮后 WPI',
    slantAngleF: '半成品煮后 斜度',
    // 开发办定型
    temperature: '开发办定型 温度',
    machineSpeed: '开发办定型 机速',
    rack: '开发办定型 机架',
    overFeeding: '开发办定型 超喂',
    windStrength: '开发办定型 风力',
    // 开发办定后
    widthG: '开发办定后 封度',
    gramWeightG: '开发办定后 克重',
    CPIG: '开发办定后 CPI',
    WPIG: '开发办定后 WPI',
    slantAngleG: '开发办定后 斜度',
}


const standardProcess = {
    id: 'id',
    process: '工序',
    articleNo: 'zt号',
    // 目标规格
    width: '封度',
    gramWeight: '克重',
    densityC: '密度C',
    densityW: '密度W',
    requireHumid: '要求含潮',
    // 预缩工艺
    settingTemp: '设定温度',
    machineSpeed: '机速',
    rack: '机架',
    overFeeding: '超喂',
    preshrunkPaper: '预缩纸',
    restoreWidth: '还原布封',
    gramWeightB: '克重',
    densityCB: '密度C',
    densityWB: '密度W',
    slantAngle: '斜度',
    outWidth: '出机布封',
    gramWeightC: '克重',
    densityCC: '密度C',
    densityWC: '密度W',
    clothMark: "布纹",
    // 张力
    tensionIn: '入布张力',
    tensionDown: '下毛毯张力',
    tensionUp: '上毛毯张力',
    tensionOut: '出布张力',
    blanketPressure: '毛毯张力'
}
