<template>
	<div class="yan-admin-user">
		<!-- 面包屑 -->
		<el-breadcrumb class="yan-breadcrumb" separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>用户列表</el-breadcrumb-item>
		</el-breadcrumb>
	
		<!-- 搜索框 -->
		<el-form :model="searchForm" :inline="true">
			<el-form-item prop="name" label="用户名">
				<el-input placeholder="输入用户名" v-on:keyup.enter="searchUser" v-model="searchForm.name"></el-input>
			</el-form-item>
			<el-form-item label-width="200px">
				<el-button @click="searchUser">搜索</el-button>
			</el-form-item>
		</el-form>
	
		<!-- 订单的表格 -->
		<el-table v-loading="isLoading" :data="filteredUsers" style="width: 100%">

			<!-- 用户名 -->
			<el-table-column sortable prop="name" label="用户名" width="180"></el-table-column>
			<!-- 用户的姓别 -->
			<el-table-column prop="gender" width="150" label="姓别"></el-table-column>
			<!-- 电话号码 -->
			<el-table-column prop="telephone" label="电话号码"></el-table-column>
	
			<!-- 操作 -->
			<el-table-column width="100" fixed="right" label="操作">
				<template scope="scope">
					<el-button @click="deleteUser(scope)" type="danger" :plain="true" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	
		<!-- 分页 -->
		<div class="yan-pagination">
			<el-pagination @current-change="changePage" :page-size="10" layout="prev, pager, next" :total="users.length">
			</el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			filteredUsers: [],
			isLoading: false,
			curPage: 1,
			searchForm: {
				name: ''
			},
		}
	},
	methods: {
		// 格式化时间
		formatDate(time) {
			let date = new Date(time);
			return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
		},
		// 删除用户
		deleteUser(scope) {
			// 发送请求，删除用户
			this.$axios({

				method: 'delete',
				url: `/admin/user/${scope.row.telephone}`,
			}).then(res => {
				let data = res.data;
				if (data.result === 'success') {
					// 删除用户
					this.filteredUsers = this.users = this.users.filter((user) => {
						return user.telephone !== scope.row.telephone;
					});

					// 过滤
					this.changePage(this.curPage);

					this.$message({
						message: '成功删除用户',
						type: 'success'
					});
				} else {
					this.$message.error({
						title: 'Error',
						message: '删除用户失败'
					});
				}
			}).catch(error => {
				this.$message.error({
					title: 'Error',
					message: '删除用户失败'
				});
			})
		},
		// 重置搜索表单
		resetSearchForm() {
			// 取消 Loading
			this.isLoading = false;
		},
		// 搜索用户
		searchUser() {
			// 开启 Loading
			this.isLoading = true;

			// 重置搜索内容
			setTimeout(this.filterUsers, 1000);
		},
		// 过滤用户
		filterUsers() {
			// 如果没有搜索关键字，则直接返回原始数据
			if (this.searchForm.name === '') {
				this.filteredUsers = this.users;
				// 过滤订单
				this.changePage(this.curPage);
			}
			else {
				this.filteredUsers = this.users.filter((user) => {
					return user.name.indexOf(this.searchForm.name) !== -1;
				});
			}

			this.resetSearchForm();
		},
		// 选择不同页
		changePage(currentPage) {
			this.curPage = currentPage;
			this.filteredUsers = this.users.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10);
		}
	},
	mounted() {
		this.$axios({
			method: 'get',
			url: '/admin/user',
		}).then(res => {
			let data = res.data;

			if (data.result == 'success') {
				// 获取订单的列表
				this.users = data.data;
				this.filteredUsers = this.users.slice(0, 10);
			} else {
				this.$message.error({
					title: 'Error',
					message: '获取用户失败'
				});
			}
		}).catch(error => {
			this.$message.error({
				title: 'Error',
				message: '获取用户失败'
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
