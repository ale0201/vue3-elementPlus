<template>
  <div class="layout-wrapper">
    <el-container class="layout-content">
      <el-aside class="layout-aside">
        <el-menu class="el-menu" @select="selectMenu">
          <template v-for="menu in state.menus">
            <el-sub-menu
              :index="menu.index"
              v-if="menu.children"
              :key="menu.index"
            >
              <template v-slot:title>{{ menu.name }}</template>
              <template v-for="smenu in menu.children">
                <el-sub-menu
                  :index="smenu.index"
                  v-if="smenu.children"
                  :key="smenu.index"
                >
                  <template v-slot:title>{{ smenu.name }}</template>
                  <el-menu-item
                    v-for="tmenu in smenu.children"
                    :key="tmenu.index"
                    :index="tmenu.index"
                  >
                    {{ tmenu.name }}
                  </el-menu-item>
                </el-sub-menu>
                <el-menu-item :index="smenu.index" v-else :key="smenu.index">
                  {{ smenu.name }}
                </el-menu-item>
              </template>
            </el-sub-menu>

            <el-menu-item :index="menu.index" v-else :key="menu.index">
              {{ menu.name }}
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container class="layout-main">
        <el-header style="text-align: right; font-size: 12px">
          <span>王小虎</span>
        </el-header>
        <TestC :name="state.name" :text="state.text" @text="textClick"></TestC>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { defineMenus } from "@/router/defineMenu";
import { useRouter } from "vue-router";
import TestC from "../../components/testComponent/index.vue";
export default defineComponent({
  components: {
    TestC,
  },
  setup() {
    const router = useRouter();
    // const route = useRoute();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const state = reactive<any>({
      menus: defineMenus,
      text: "texthaha",
      name: "namehaha",
    });
    onMounted(() => {
      console.log(">>>mounted");
    });
    const textClick = (text: string) => {
      alert(text);
    };
    const selectMenu = (index: string, indexPath: string[]) => {
      router.push({
        path: index,
      });
    };
    return {
      state,
      selectMenu,
      textClick,
    };
  },
});
</script>
<style lang="scss" src="./index.scss"></style>
