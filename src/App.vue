<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link>
  </div>
  <router-view/>
  <ul>
    <li>欢迎光临洗脚城</li>
      <li v-for="(item, index) in msg" v-bind:key="index">
        <!-- 通过下标进行选择服务对象 -->
        <button @click="check(index)">{{item}}</button>
        <!-- 直接传递人名进行选择服务对象 -->
        <button @click="check1(item)">{{item}}1</button>
      </li>
      <li>你选中了【{{user}}】为你服务</li>
      <li>你选中了【{{user1}}】为你服务</li>
    </ul>
    <ul>
      <li>使用reactive优化ref，reactive声明的变量，只需要返回一个data就可以了，不像ref每个都要一个一个的返回</li>
      <li v-for="(item,index) in list" :key="index">
          <button @click="y(item)">{{item}}</button>
      </li>
      <li :style="{'font-size':b,'color':'red'}">你选中了【{{a}}】为你服务</li>
      <li><mark>在ts中使用reactive的时候，要使用interface进行接口类型声明变量的类型</mark></li>
    </ul>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered } from 'vue'
export default defineComponent({
  name:'App',
  setup(){
    const msg=ref(['小明','小红','消费']);
    const user=ref();
    const user1=ref();
    const check=(index: number)=>{
      user.value=msg.value[index];
    }
    const check1=(val: string)=>{
      user1.value=val;
    }
    //使用reactive优化上面的代码ref声明的变量
    interface Dat{
      list: string[];
      a: string;
      b: string;
    }
    const you: Dat=reactive({
      list:['小明','小红','小张'],
      a:'',
      b:'30px'
    })
    const y=(val: string)=>{
      you.a=val;
    }
    // 这是状态触发，就是你点击或者是那个数据变化，就会打印出来，只有当前触发的，会将新的value值和旧的value都打印
    // 相比下面的钩子函数，这个更精准一些
    onRenderTriggered((e)=>{
      console.log(e);
    })
    // 状态跟踪钩子函数，只要页面上的数据发生改变就会进行触发
    onRenderTracked((event)=>{
      console.log(event);
    });
     onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("4-组件更新之前-----onBeforeUpdate()");
    });

    onUpdated(() => {
      console.log("5-组件更新之后-----onUpdated()");
    });
    return {
      msg,
      user,
      check,
      user1,
      check1,
      ...toRefs(you),
      y
    }

  },
  // 这是vue2.0的语法中的生命周期也可以进行使用
      // beforeCreate() {
      //   console.log("1-组件创建之前-----beforeCreate()");
      // },
      // beforeMount() {
      //   console.log("2-组件挂载到页面之前执行-----BeforeMount()");
      // },
      // mounted() {
      //   console.log("3-组件挂载到页面之后执行-----Mounted()");
      // },
      // beforeUpdate() {
      //   console.log("4-组件更新之前-----BeforeUpdate()");
      // },
      // updated() {
      //   console.log("5-组件更新之后-----Updated()");
      // },
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
