<template>
	<div>
		<p><el-button type="primary" @click="toAddVisible = true" icon="el-icon-circle-plus-outline">添加</el-button></p>

		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="日期" width="180"></el-table-column>
			<el-table-column prop="name" label="姓名" width="180"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button type="text" size="small">编辑</el-button>
					<el-button type="text" size="small" :style="{ color: 'red' }" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		
		<to-add :toAddVisible.sync="toAddVisible" @addTable='handlAdd($event)'></to-add>
	</div>
</template>

<script>
import toAdd from '@/components/ToAdd.vue';
export default {
	components: { toAdd },
	methods: {
		handleDel(index, row) {
			// console.log(index,row);
			this.tableData.splice(index, 1);
		},
		handlAdd($event){
			this.tableData.unshift({...$event})
		}
	},
	data() {
		return {
			toAddVisible: false,
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			]
		};
	}
};
</script>

<style></style>
