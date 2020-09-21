<template>
	<div>
		<el-container class="full">
			<el-header class="headers">Header</el-header>
			<el-container>
				<el-aside width="200px" class="asside">
					
					
					
					<el-menu
					      default-active="2"
					      class="el-menu-vertical-demo"
					      @open="handleOpen"
					      @close="handleClose">
					     
					        
					 <el-menu-item index="2">
					        <i class="el-icon-menu"></i>
					      <router-link to="/admin/user">用户管理</router-link>
					  </el-menu-item>
					  
					  <el-menu-item index="3">
					          <i class="el-icon-s-tools"></i>
					          <router-link to="/admin/about">关于</router-link>
					  </el-menu-item> 
					 
					
					</el-menu>
				</el-aside>

				<el-container>
					<el-main>
						<router-view/>
					</el-main>
					<el-footer>Footer</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	  }
	
	
	
</script>

<style>
.full {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
}
.asside {
	background-color: #f0f0f0;
}
.headers {
	background-color: dodgerblue;
	color: #fff;
}
</style>
