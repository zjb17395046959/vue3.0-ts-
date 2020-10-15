<template>
  <div class="home">
    
    <mark>我是vue3.0ts练习项目</mark>
    <HelloWorld msg="欢迎使用vue3.0+ts来进行项目的练习"/>
    <p>欢迎使用vue3.0+ts进行项目的练习</p>
    <p>下面就让我们一起来学习吧！</p>
   
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  
}
</script>
