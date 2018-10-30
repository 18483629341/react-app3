import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
//这里需要1 cnpm install echarts-for-react --save
   // 2 cnpm install echarts  --save  才能使用
const option={
				
		
			xAxis : [
					{
							type : 'category',
							data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
					}
			],
			yAxis : [
					{
							type : 'value'
					}
			],
			series : [
					{
							"name":"销量",
							"type":"bar",
							"data":[5, 20, 40, 10, 10, 20]
					}
			]
    }
const EchartsProjects=()=>(
		<ReactEcharts
		option={option}
		style={{height:"220px",width:"400px"}}
	></ReactEcharts>
	)
	


export default EchartsProjects;