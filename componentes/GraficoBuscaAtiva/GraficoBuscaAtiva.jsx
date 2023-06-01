import React from "react";
import style from "./GraficoBuscaAtiva.module.css"
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
const GraficoBuscaAtiva = ({dataBarra,dataRosca})=>{
    return (
        <div className={style.GraficoBuscaAtiva}>
            <div className={style.Barra}>
                <ReactEcharts
                    option={dataBarra}
                    style={{ height: '600px', width: '100%' }}
                    echarts={echarts}
                />
            </div>
            <div className={style.Rosca}>
                <ReactEcharts
                    option={dataRosca}
                    style={{ height: '600px', width: '100%' }}
                    echarts={echarts}
                />
            </div>
        </div>

      );
}

export {GraficoBuscaAtiva}