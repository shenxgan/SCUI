<template>
	<el-main>
		<el-alert title="" type="success" style="margin-bottom:20px;">
      <template #title>
        <el-text>
          扩展了Element Plus图标库,可以在@/assets/icons中新增自己的SVG图标组件,记得在@/assets/icons/index.js中引入. 
          建议前往阿里iconfont复制SVG代码
          <a style="color: #409EFF;" target="_blank" href="https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=25353">https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=25353</a>
        </el-text>
      </template>
    </el-alert>
		<el-alert title="" type="success" style="margin-bottom:20px;">
      <template #title>
        <el-text>
          ✅ 现已添加自动化脚本，可一键添加新图标。
          脚本介绍：<a style="color: #409EFF;" href="https://python-abc.xyz/scui-doc/guide/iconfont#图标脚本介绍">https://python-abc.xyz/scui-doc/guide/iconfont#图标脚本介绍</a>
        </el-text>
      </template>
    </el-alert>
		<el-row :gutter="0" class="box">
			<el-col :span="4" v-for="(icon, index) in icons" :key="index" >
				<div class="icon-box">
					<el-icon><component :is="icon" /></el-icon>
					<p>{{ icon }}</p>
				</div>
			</el-col>
		</el-row>
	</el-main>

</template>

<script>
	import * as scIcons from '@/assets/icons'

	export default {
		data() {
			return {
				icons: []
			}
		},
		mounted() {
			for(let icon in scIcons){
				this.icons.push('sc-icon'+icon.replace(/[A-Z]/g,(match)=>'-'+match.toLowerCase()))
			}
		}
	}
</script>

<style scoped>
	.box {border-top: 1px solid #eee;border-left: 1px solid #eee;}
	.icon-box {height:120px;text-align: center;background: #fff;border-bottom: 1px solid #eee;border-right: 1px solid #eee;color: #666;padding:30px 10px;}
	.icon-box i {font-size: 26px;transition: color .15s linear;}
	.icon-box p {color: #999;margin-top: 15px;transition: color .15s linear;}
	.icon-box:hover i, .icon-box:hover p {color: #5cb6ff;}

	.dark .box {border-color: var(--el-border-color-light);}
	.dark .icon-box {background: var(--el-bg-color-overlay);border-color: var(--el-border-color-light);}
</style>
