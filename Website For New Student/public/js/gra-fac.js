// 使用
require(
    [
        'echarts',
        'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
    ],
    function(ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('gra_fac'));
        var idx = 1;
        var option = {
            timeline: {
                data: [
                    '计院', '先进制造', '通信', '法学院', '自动化',
                    '体院', '光电', '生物', '传媒',
                    '外国语', '软件', '数理', '国际'

                ],
                label: {
                    formatter: function(s) {
                        return s.slice(0, 4);
                    }
                },
                controlPosition: 'none',
                type: 'number'
            },

            options: [{
                title: {
                    text: '本学院各专业就业率情况',
                    subtext: '自动化学院测控技术与仪器专业升学出国率为12.33%，\n灵活就业率为0.00%，待就业率2.74%，就业率97.26%。',
                    x: 'left'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x: 'right',
                    y: 'center',
                    orient: 'vertical',
                    data: ['签就业协议', '升学出国', '灵活就业',
                        '待就业'
                    ]
                },

                series: [{
                    name: '计算机学院就业情况',
                    type: 'pie',
                    center: ['60%', '45%'],
                    radius: '50%',
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
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '计算机学院就业情况',
                    type: 'pie',
                    center: ['60%', '45%'],
                    radius: '50%',
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
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '通信学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '法学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '自动化学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '体育学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '光电学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '生物学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '传媒学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '外国语学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '软件学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '数理学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '国际学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '传媒学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, {
                series: [{
                    name: '传媒学院学生心中最难科目',
                    type: 'pie',
                    center: ['50%', '45%'],
                    radius: '50%',
                    data: [{
                            value: idx * 128 + 80,
                            name: '中外设计史'
                        }, {
                            value: idx * 64 + 160,
                            name: '设计素面'
                        }, {
                            value: idx * 32 + 320,
                            name: '西方美术史'
                        }

                    ]
                }]
            }, ]
        }


        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);