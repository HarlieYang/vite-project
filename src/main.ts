/*
 * @Author: your name
 * @Date: 2021-07-15 21:35:24
 * @LastEditTime: 2021-07-15 22:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/main.ts
 */
import { createApp } from 'vue'
import router from './router/index'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue'
const app = createApp(App)
// 自动导入公共组件
const modulesFiles: any = import.meta.globEager('./components/*/*.vue')
const result = Object.keys(modulesFiles).filter((item: any) => true)
result.forEach((item: any) => {
  const moduleName = item.split("/")[2]
  const componentConfig = modulesFiles[item]
  app.component(moduleName, componentConfig.default || componentConfig)
})
app.use(Antd).use(router).mount('#app')