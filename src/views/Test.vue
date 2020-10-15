<template>
    <div>
        <p>我是test页面</p>
        <p>{{title}}</p>
        <p>{{msg}}</p>
        <div v-if="loading">Loading.....</div>
        <img v-if="loaded" :src="result.message" />
    </div>
</template>
<script lang="ts">
import Vue, { defineComponent, onMounted, ref} from 'vue';
import userUrlAxios from '../assets/userAxios';
export default defineComponent({
    name:'test',
    setup(){
        const title=ref('欢迎光临红浪漫洗浴中心');
        const msg=ref('随机出现一张狗狗的图片');
        const { loading, loaded, result} =userUrlAxios("https://dog.ceo/api/breeds/image/random");
        return {
            title,
            msg,
            loading, loaded, result
        }
    }
})
</script>