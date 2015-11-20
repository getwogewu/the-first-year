 // // 路径配置
 //        require.config({
 //            paths: {
 //                echarts: 'http://echarts.baidu.com/build/dist'
 //            }
 //        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('hometwon')); 
                
                var option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        x : 'right',
                        y:'bottom',
                        data:['同乡人数','全校人数',]
                    },
                    
                    calculable : true,
                    series : [
                        {
                            name:'同乡比例',
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
                                            fontSize : '30',
                                            fontWeight : 'bold'
                                        }
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'全校人数'},
                                {value:310, name:'同乡人数'},
                            ]
                        }
                    ]
};

        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
 