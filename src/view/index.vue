<!--
 * @Author: your name
 * @Date: 2021-07-15 22:08:26
 * @LastEditTime: 2021-07-15 22:23:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/view/index.vue
-->
<template>
    <div>
         <PieChartOutlined />
    </div>
</template>
<script>
import { defineComponent } from "vue";
import {PieChartOutlined
} from "@ant-design/icons-vue";
export default defineComponent({
  name: "sideMenu",
  setup() {
  },
  components: {
      PieChartOutlined
  }
})
</script>
<style lang="scss" scoped>
div{
    color: red;
}
</style>