async function postNewUserData(event){
    event.preventDefault();

    try{
        const newUserData={
            name:document.getElementById('username').value,
            email:document.getElementById('email').value,
            password:document.getElementById('password').value
        }

        const newUserResp=await axios.post('/sign-up',newUserData);

        if(newUserResp.status===201){
            alert(newUserResp.data.message)
            window.location.href='/login';
        }
    }
    catch(err){
        console.log('err=>',err)
        alert(err.response.data.error);

    }

}