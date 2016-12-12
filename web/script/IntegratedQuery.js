var intergratedQuery = {
    createMap: function (mapId) {
        var myCharts = echarts.init(document.getElementById(mapId));

        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    selectedMode : 'single',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    }
                }
            ]
        };

        myCharts.setOption(option,true);

        myCharts.on('click',function (param) {
            var orgUrlMap = {
                "安徽":"34",
                "北京":"11",
                "重庆":"50",
                "山东":"37",
                "湖北":"42",
                "福建":"35",
                "甘肃":"62",
                "广东":"http://www.guangdong.com",
                "广西":"45",
                "贵州":"52",
                "海南":"46",
                "河北":"13",
                "河南":"41",
                "黑龙江":"23",
                "湖南":"43",
                "吉林":"22",
                "江苏":"32",
                "江西":"36",
                "辽宁":"21",
                "上海":"31",
                "内蒙古自治区":"15",
                "宁夏":"64",
                "青海":"63",
                "山西":"14",
                "陕西":"61",
                "四川":"51",
                "天津":"12",
                "西藏":"54",
                "新疆":"65",
                "云南":"53",
                "浙江":"33"
            };

            var url = orgUrlMap[param.name];
           alert(url);
        });
    }
}

$(function () {
    intergratedQuery.createMap("map");
});