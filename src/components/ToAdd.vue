<template>
	<el-dialog title="添加用户" :visible="toAddVisible" @close="$emit('update:toAddVisible',false)">
		<el-form  label-width="80px" >
		  <el-form-item label="日期">
		   <el-date-picker	
			     value-format="yyyy-MM-dd"
		         type="date"
				 v-model="row.date"
		         placeholder="选择日期">
		    </el-date-picker>
			<!-- 日期格式化 value-format -->
		  </el-form-item>
		  <el-form-item label="姓名">
		    <el-input v-model="row.name" ></el-input>
		  </el-form-item>
		  <el-form-item label="地址">
		    <el-input v-model="row.address"  ></el-input>
		  </el-form-item>
		</el-form>
		<!-- 表单内容 -->
			
		<div slot="footer" class="dialog-footer">
		    <el-button @click="$emit('update:toAddVisible',false)">取 消</el-button>
		    <el-button type="primary" @click="handleSure()">确 定</el-button>
		 </div>
		 <!-- 确定取消 -->
	</el-dialog>
</template>

<script>
	export default {
		methods:{
			handleSure(){
				this.$emit("update:toAddVisible",false);//关闭窗口
				this.$emit('addTable',this.row);//把当前行的值发送给父组件
				this.row={
					date:'',
					name:'',
					address:'',
				};
			}
		},
		data(){
			return {
				row:{
					date:'',
					name:'',
					address:'',
				}
			}
		},
		props:{
			"toAddVisible":{type:Boolean,default:false}
		},
		
	}
</script>

<style>
</style>
