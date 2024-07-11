import { callFetch } from "../utils/CallFetch";

export  async function setEmail(locale,data){
    try {
        const params ={
            method:"POST",
            headers:{
                "content-type":'application/json',
                "locale":locale
            },
           
        }
        params.body=JSON.stringify(data)
        const res = await callFetch(`${process.env.BACK_API}/email`,params);
        return res?res:null
    } catch (error) {
        return null
    }
}

