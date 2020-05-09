<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>{{foots[0].text}}</span>
        <template #icon="">
          <i class="iconfont" v-html="foots[0].icon"></i>
        </template>
      </van-tabbar-item>

      <van-tabbar-item>
        <span>{{foots[1].text}}</span>
        <template #icon="">
          <i class="iconfont" v-html="foots[1].icon"></i>
        </template>
      </van-tabbar-item>
      

    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinle"></use>
    </svg>

       <van-tabbar-item>
        <span>{{foots[2].text}}</span>
        <template #icon="">
          <i class="iconfont" v-html="foots[2].icon"></i>
        </template>
      </van-tabbar-item>

       <van-tabbar-item>
        <span>{{foots[3].text}}</span>
        <template #icon="">
          <i class="iconfont" v-html="foots[3].icon"></i>
        </template>
      </van-tabbar-item>


    </van-tabbar>
  </div>
</template>

<script>
import { foots } from "@/utils";
export default {
  data() {
    return {
      foots,
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>