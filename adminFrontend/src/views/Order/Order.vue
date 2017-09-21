<template>
	<div class="yan-admin-order">
		<!-- 面包屑 -->
		<el-breadcrumb class="yan-breadcrumb" separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>订单列表</el-breadcrumb-item>
		</el-breadcrumb>
	
		<!-- 搜索框 -->
		<el-form :model="searchForm" :rules="searchRules" :inline="true">
			<el-form-item prop="orderID" label="订单编号">
				<el-input placeholder="输入订单编号" v-on:keyup.enter="searchOrder" v-model="searchForm.orderID"></el-input>
			</el-form-item>
			<el-form-item label-width="200px">
				<el-button @click="searchOrder">搜索</el-button>
			</el-form-item>
		</el-form>
	
		<!-- 订单的表格 -->
		<el-table v-loading="isLoading" :data="filteredOrders" style="width: 100%" :row-class-name="tableRowClassName">
			<!-- 订单ID -->
			<el-table-column sortable prop="orderID" label="订单 ID" width="120"></el-table-column>
			<!-- 订单日期 -->
			<el-table-column sortable label="订单日期" width="150">
				<template scope="scope">
					{{formatDate(scope.row.orderDate)}}
				</template>

			</el-table-column>
			<!-- 订单状态 -->
			<el-table-column label="订单状态" width="150">
				<template scope="scope">
					{{formatOrderState(scope.row.orderState)}}
				</template>
			</el-table-column>
			<!-- 订单总价 -->
			<el-table-column width="120" label="总价">
				<template scope="scope">
					&yen;{{scope.row.totalFee}}
				</template>
			</el-table-column>
			<!-- 快递单号 -->
			<el-table-column label="快递单号" width="120">
				<template scope="scope">
					{{scope.row.expressNumber === '' ? '未发货' : scope.row.expressNumber}}
				</template>
			</el-table-column>
			<!-- 快递公司 -->
			<el-table-column label="快递公司" width="120">
				<template scope="scope">
					{{scope.row.expressCompany === '' ? '未发货' : scope.row.expressCompany}}
				</template>
			</el-table-column>
	
			<!-- 操作 -->
			<el-table-column width="190" fixed="right" label="操作">
				<template scope="scope">
					<el-button @click="deleteOrder(scope)" type="danger" :plain="true" size="small">删除订单</el-button>
					<el-button v-show="scope.row.orderState === 1" type="info" @click="showDeliverForm(scope)" :plain="true" size="small">编辑发货</el-button>
					<el-button @click="toExpressUrl(scope)" v-show="scope.row.orderState === 2" type="info" :plain="true" size="small">查看发货</el-button>
				</template>
			</el-table-column>
		</el-table>
	
		<!-- 分页 -->
		<div class="yan-pagination">
			<el-pagination @current-change="changePage" :page-size="10" layout="prev, pager, next" :total="orders.length">
			</el-pagination>
		</div>
	
		<!-- 模态框，用于写快递的信息 -->
		<el-dialog title="物流信息" :visible.sync="isShowDialog">
			<!-- 快递的表单信息 -->
			<el-form :rules="rules" :model="deliverForm">
				<el-form-item label="物流单号" prop="expressNumber">
					<el-input v-model="deliverForm.expressNumber" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="物流公司" prop="expressCompany">
					<el-input v-model="deliverForm.expressCompany" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="isShowDialog = false">取 消</el-button>
				<el-button type="primary" @click="confirmDeliverInfo">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		// 检验物流单号
		let expressNumberValidator = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('请输入物流单号'));
			}
			else if (value.length < 2) {
				return callback(new Error('物流单号不符合规范'));
			}
			else {
				callback();
			}
		};

		// 检验物流公司
		let expressCompanyValidator = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('请输入物流公司'));
			}
			else {
				callback();
			}
		};

		// 检验搜索订单的编号
		let searchValidator = (rule, value, callback) => {
			if (isNaN(value)) {
				return callback(new Error('非法订单编号'));
			}
			else {
				callback();
			}
		}

		return {
			orders: [],
			filteredOrders: [],
			isShowDialog: false,
			isLoading: false,
			curPage: 1,
			deliverForm: {
				orderID: '',
				expressNumber: '',
				expressCompany: ''
			},
			searchForm: {
				orderID: ''
			},
			rules: {
				expressNumber: [
					{ validator: expressNumberValidator, trigger: 'change' }
				],
				expressCompany: [
					{ validator: expressCompanyValidator, trigger: 'change' }
				],
			},
			searchRules: {
				orderID: [
					{ validator: searchValidator, trigger: 'change' }
				],
			}
		}
	},
	methods: {
		// 格式化时间
		formatDate(time) {
			console.log(time);
			let date = new Date(parseInt(time));
			return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
		},
		// 格式化订单状态
		formatOrderState(orderState) {
			// 0表示未付款，1表示已付款，2表示已发货，3表示已确认收货，4表示已评价
			switch (orderState) {
				case 0:
					return '未付款';
				case 1:
					return '已付款';
				case 2:
					return '已发货';
				case 3:
					return '已收货';
				case 4:
					return '已评价';
			}
		},
		// 激活的表格
		tableRowClassName(row, index) {
			if (row.orderState === 0) {
				return 'info';
			} else if (row.orderState === 1) {
				return 'success';
			}
			return '';
		},
		// 删除订单
		deleteOrder(scope) {
			// 删除订单
			this.$axios({
				method: 'delete',
				url: `/shop/order/${scope.row.orderID}`
			})
				.then((res) => {
					// 成功删除订单
					this.filteredOrders = this.orders = this.orders.filter((order) => {
						return order.orderID !== scope.row.orderID;
					});

					// 过滤
					this.changePage(this.curPage);

					this.$message({
						message: '成功删除订单',
						type: 'success'
					});
				})
				.catch((err) => {
					console.log('vue-resource err', err);
				});
		},
		// 设置物流外链
		toExpressUrl(scope) {
			let expressUrl = `https://www.kuaidi100.com/chaxun?com=${scope.row.expressCompany}&nu=${scope.row.expressNumber}`;
			console.log(expressUrl);
			window.location = expressUrl;
		},
		// 显示物流表单
		showDeliverForm(scope) {
			this.isShowDialog = true;
			// 初始化表单
			this.deliverForm.orderID = scope.row.orderID;
			this.deliverForm.expressNumber = scope.row.expressNumber;
			this.deliverForm.expressCompany = scope.row.expressCompany;
		},
		// 重置物流表单
		resetDeliverForm() {
			this.deliverForm.orderID = '';
			this.deliverForm.expressNumber = '';
			this.deliverForm.expressCompany = '';
			// 关闭对话框
			this.isShowDialog = false;
		},
		// 重置搜索表单
		resetSearchForm() {
			// 取消 Loading
			this.isLoading = false;
		},
		// 搜索订单
		searchOrder() {
			// 开启 Loading
			this.isLoading = true;

			// 重置搜索内容
			setTimeout(this.filterOrder, 1000);
		},
		// 过滤订单
		filterOrder() {
			// 如果没有搜索关键字，则直接返回原始数据
			if (this.searchForm.orderID === '') {
				this.filteredOrders = this.orders;
				// 过滤订单
				this.changePage(this.curPage);
			}
			else {
				this.filteredOrders = this.orders.filter((order) => {
					return order.orderID == this.searchForm.orderID;
				});
			}

			this.resetSearchForm();
		},
		// 提交物流信息
		confirmDeliverInfo() {
			// 发送请求，确认编辑快递的信息
			this.$axios({
				method: 'post',
				url: '/shop/deliverGoods',
				data: {
					orderID: this.deliverForm.orderID,
					expressNumber: this.deliverForm.expressNumber,
					expressCompany: this.deliverForm.expressCompany
				}
			}).then(res => {
				let data = res.data;

				if (data.result == 'success') {
					// 成功编辑订单的物流信息
					this.orders.forEach((order) => {
						if (order.orderID === this.deliverForm.orderID) {
							order.expressNumber = this.deliverForm.expressNumber;
							order.expressCompany = this.deliverForm.expressCompany;
							order.orderState=2;
						}
					})

					// 清空表单信息
					this.resetDeliverForm();

					// 显示提示信息
					this.$message({
						message: '成功修改物流信息',
						type: 'success'
					});
				} else {
					this.$message.error({
						title: 'Error',
						message: '修改物流信息失败'
					});
				}
			}).catch(error => {
				this.$message.error({
					title: 'Error',
					message: '修改物流信息失败'
				});
			})
		},
		// 选择不同页
		changePage(currentPage) {
			this.curPage = currentPage;
			this.filteredOrders = this.orders.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10);
		},
	},
	mounted() {
		this.$axios({
			method: 'get',
			url: '/admin/allOrder',
		}).then(res => {
			let data = res.data;

			if (data.result == 'success') {
				// 获取订单的列表
				this.orders = data.data;
				this.filteredOrders = this.orders.slice(0, 10);
			} else {
				this.$message.error({
					title: 'Error',
					message: '获取订单失败'
				});
			}
		}).catch(error => {
			this.$message.error({
				title: 'Error',
				message: '获取订单失败'
			});
		})
	}
}
</script>

<style scoped>
.yan-pagination {
	margin-top: 15px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}
</style>
