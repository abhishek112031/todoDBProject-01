async function postUserData(event){
    event.preventDefault();

    try{
        const userData={
         
            email:document.getElementById('email').value,
            password:document.getElementById('password').value
        }

        const userResp=await axios.post('/login',userData);

        if(userResp.status===200){
            alert(userResp.data.message)
            // window.location.href='/dash-board';
        }
    }
    catch(err){
        console.log('err=>',err)
        alert(err.response.data.error);

    }

}