      // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('show-star')); 
                
                var option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        x : 'right',
                        y:'bottom',
                        data:['同年同月/同星座','其他',]
                    },
                    title : {
                          text: '同星座比例',
                          x: 'center',
                          y:'bottom',
                          textStyle:{
                                    fontSize: 18,
                                    fontWeight: 'normal',
                                    color: '#712d0f'
                                }     
                      },
                    calculable : true,
                    series : [
                        {
                            name:'同星座比例',
                            type:'pie',
                            radius : ['50%', '70%'],
                            itemStyle : {
                                normal : {
                                    label : {
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    }
                                },
                                emphasis : {
                                    label : {
                                        show : true,
                                        position : 'center',
                                        textStyle : {
                                            fontSize : '20',
                                            fontWeight : 'bold'
                                        }
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'同星座人数'},
                                {value:310, name:'其他'},
                            ]
                        }
                    ]
};
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );