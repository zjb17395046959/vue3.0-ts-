import { ref } from 'vue';
import axios from 'axios';
function userUrlAxios(url: string){
    const result=ref(null);//存储数据
    const loading=ref(true);//显示loading
    const loaded=ref(false);//是否显示图片
    const error=ref(null);//报错提示

    axios.get(url).then(res=>{
        loading.value=false;
        loaded.value=true;
        result.value=res.data;
    }).catch(e=>{
        error.value=e;
        loading.value=false;
    })
    return{
        result,
        loaded,
        loading,
        error
    }
}
export default userUrlAxios;