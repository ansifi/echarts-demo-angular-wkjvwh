import { Component, Input, OnInit, ElementRef } from '@angular/core';

import * as echarts from "echarts";
// var echarts = require('echarts')

import $ from 'jquery';
@Component({
  selector: 'stack-chart',
  template: `<div class="mGraph-wrapper">
  <div class="mGraph" id="mGraph_sale"></div>
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
export class StackchartComponent implements OnInit {
  // data Structure for Series
   data=[{
    legend:"Marketing",
    dataPoints:[220, 182, 191, 234, 290, 330, 310]
  },{
    legend:"Sales",
    dataPoints:[150, 232, 201, 154, 190, 330, 410]
  },{
    legend:"HumanResource",
    dataPoints:[170, 132, 291, 254, 145, 390, 610]
  }];
  // @Input() name: string;
  // @Input() data:any;
  series=[];
  legends=[];
  constructor(private elm:ElementRef){}
  ngOnInit(){
    let stackchart = echarts.init($(this.elm.nativeElement).find('#mGraph_sale')[0]);
    this.data.forEach(x=>{
      this.series.push({
        name:x.legend,
        type:'line',
        stack:'Total Amount',
        areaStyle:{normal:{}},
        data:x.dataPoints
        })

        this.legends.push(x.legend)
      
    })

    stackchart.setOption({
      tooltip:{
        trigger:'axis',
        axisPointer:{
          type:'cross',
          label:{backgroundColor:'#6a7985'}
        }
      },
    //    title: {
    //     left: 'center',
    //     text: 'Stack Chart',
    // },
       legend:{data:this.legends},
        grid: {
        left: '10%',
        right: '10%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: this.series,
    },
   
    )

  }
}
