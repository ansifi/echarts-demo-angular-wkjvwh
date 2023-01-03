import { Component, Input, OnInit, ElementRef } from '@angular/core';
import * as echarts from "echarts";

import $ from 'jquery';
@Component({
  selector: 'pie-chart',
  template: `<div class="mGraph-wrapper">
  <div class="mGraph" id="piechart"></div>
</div>`,
  styles: [`
  .mGraph-wrapper{
    width: 100%;
    height: 239px;
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mGraph-wrapper .mGraph{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }`]
})
export class PiechartComponent implements OnInit{
  constructor(private elm:ElementRef){}
  ngOnInit(){
    let piechart =  echarts.init($(this.elm.nativeElement).find('#piechart')[0]);
    piechart.setOption({
      backgroundColor: '#FFFFFF',

    title: {
        text: 'Pie Chart',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: [{
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    }],
    series : [
        {
            name:'Web Series',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'13 Reasons Y'},
                {value:310, name:'Wirl'},
                {value:274, name:'Sunnyzao'},
                {value:235, name:'Oremo'},
                {value:400, name:'Bolesho'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(44, 46, 79, 0.8)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(44, 46, 79, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#848AF0',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
    })
  }
}