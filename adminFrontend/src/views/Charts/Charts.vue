<template>
    <section class="chart-container">
        <el-row>
            <!-- 销量数据图表 -->
            <el-col :span="24">
                <div ref="saleChart" style="width:100%; height:400px;"></div>
            </el-col>
            <el-col :span="24">
                <div ref="weekSaleChart" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
import echarts from 'echarts'

export default {
    data() {
        return {
            saleChartData: null,
            chartBar: null,
            chartLine: null,
            chartPie: null
        }
    },

    methods: {
        drawSaleChart(saleData) {
            this.saleChartData = echarts.init(this.$refs.saleChart);
            this.saleChartData.setOption({
                title: { text: '分类商品销量图表' },
                tooltip: {},
                xAxis: {
                    data: saleData.map((saleItem) => {
                        return saleItem.name;
                    })
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: saleData.map((saleItem) => {
                        return saleItem.sale;
                    })
                }],
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: '#1F2D3D',
                    }
                }
            });
        },
        drawWeekSaleChart(saleData) {
            this.chartPie = echarts.init(this.$refs.weekSaleChart);
            this.chartPie.setOption({
                title: {
                    text: '七天内每天商品销量',
                    subtext: '销量统计',
                    x: 'center'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: saleData.map((saleItem) => {
                        switch (Number.parseInt(saleItem.time)) {
                            case 1:
                                return '一';
                            case 2:
                                return '二';
                            case 3:
                                return '三';
                            case 4:
                                return '四';
                            case 5:
                                return '五';
                            case 6:
                                return '六';
                            case 7:
                                return '七';
                        }
                    })
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: saleData.map((saleItem) => {
                            let day = '';
                            switch (Number.parseInt(saleItem.time)) {
                                case 1:
                                    day = '一';
                                    break;
                                case 2:
                                    day = '二';
                                    break;
                                case 3:
                                    day = '三';
                                    break;
                                case 4:
                                    day = '四';
                                    break;
                                case 5:
                                    day = '五';
                                    break;
                                case 6:
                                    day = '六';
                                    break;
                                case 7:
                                    day = '七';
                                    break;
                            }

                            return {
                                value: saleItem.sale,
                                name: day
                            }
                        }),
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        roseType: 'angle'
                    }
                ]
            });
        },
    },
    mounted: function () {
        // 发送请求，获取销量数据
        this.$axios({
            method: 'get',
            url: '/admin/sale',
        }).then(res => {
            let data = res.data;

            if (data.result == 'success') {
                // 获取销量数据的列表
                let saleData = data.data;
                this.drawSaleChart(saleData);
            } else {
                this.$message.error({
                    title: 'Error',
                    message: '获取销量数据失败'
                });
            }
        }).catch(error => {
            this.$message.error({
                title: 'Error',
                message: '获取销量数据失败'
            });
        });

        // 发送请求，获取商品的销量
        this.$axios({
            method: 'get',
            url: '/admin/recentSale',
        }).then(res => {
            let data = res.data;

            if (data.result == 'success') {
                // 获取销量数据的列表
                let saleData = data.data;
                this.drawWeekSaleChart(saleData);
            } else {
                this.$message.error({
                    title: 'Error',
                    message: '获取销量数据失败'
                });
            }
        }).catch(error => {
            this.$message.error({
                title: 'Error',
                message: '获取销量数据失败'
            });
        });
    }
}
</script>

<style scoped>
.chart-container {
    width: 100%;
    float: left;
}

.el-col {
    padding: 30px 20px;
}
</style>
