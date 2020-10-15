<template>
  <div class="about">
    <h1>watch监听的使用</h1>
    <ul>
      <li>{{overText}}</li>
      <li>{{overText1}}</li>
      <li v-for="(item,index) in list" :key="index">
        <button @click="check(index)">{{item}}</button>
      </li>
      <li>你的选择是【{{user}}】</li>
      <li><button @click="overActive">点餐完毕</button></li>
    </ul>
     <mark>{{nowTime}}</mark>
    <button @click="getNowTime">开始</button>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, toRefs, watch } from 'vue'
import {nowTime, getNowTime} from '../assets/userNowTime'
export default defineComponent({
  name:'about',
  setup(){
    const overText=ref('红浪漫');
    const overText1=ref('红浪漫1');
    const overActive=()=>{
      overText.value=overText.value+'点餐完成！';
      overText1.value='ref'
      // document.title=overText.value;
    }
    const msg=reactive({
      list:['小红','小明','小王'],
      user:'',
      check:(index: number)=>{
        msg.user=msg.list[index]
      }
    })
    //监听多个值得时候，使用数组形式，reactive中的值使用函数写法,ref的可以直接写
    watch([overText,overText1,()=>msg.user],(newValue,oldValue)=>{
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];
    })
    return{
      overText,
      overText1,
      overActive,
      ...toRefs(msg),
      nowTime,
      getNowTime
    }
  }
})
</script>
