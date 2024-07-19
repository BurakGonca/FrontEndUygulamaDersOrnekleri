import axios from "axios"

const AuthService = {
    login: async(username,password)=>{
        const url=" https://api.escuelajs.co/api/v1/auth/login";
        const response = await axios.post(url,{
            email: username,
            password //password: password bu şekilde  yazılabiliyor
        }) //giris basarili ise tokenleri  döner (acsess,refresh)
        console.log(response);
        if (response.data.access_token) {
            localStorage.setItem("user",JSON.stringify(response.data));
            //giris basarili ise localStorage'a tokenleri kaydettik.

        }
        return response.data;

    },


    logout: () =>{
        localStorage.removeItem("user");
        //login durumunda localstroage'a kaydedilen tokenleri siler.
    }

}

export default AuthService;