// 使用
require(
    [
        'echarts',
        'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
    ],
    function(ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('gra_school'));

        var option = {
            title: {
                text: '全校本科生就业率情况',
                subtext: '截止2014年12月10日，2014届本科毕业生总人数为4834人，其中签就业协议有3826人，升学出国有772人，灵活就业有49人，待就业有\n187人，就业率为96.13%。',
                x: 'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y: 'center',
                data: ['签就业协议', '升学出国', '灵活就业',
                    '待就业'
                ]
            },
            calculable: true,
            series: [{
                name: '全校本科生就业率情况',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [{
                    value: 3826,
                    name: '签就业协议'
                }, {
                    value: 772,
                    name: '升学出国'
                }, {
                    value: 49,
                    name: '灵活就业'
                }, {
                    value: 187,
                    name: '待就业'
                }]
            }]
        };
        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);