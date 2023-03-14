function handleSubmit (event){
    event.preventDefault();
    let formData = {
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value
    }

    fetch(`https://reqres.in/api/login`,{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{
            "Content-type":"application/json"
        }

    }).then(r=>r.json())
    .then(r=>{
        if(r.token){
            window.location.href = 'admin.html'
        }
        else{
            alert("You are not authorized. Please fill right credentials")
        }
    })
    .catch(e=>{
        alert("Please fill right credentials")
    })
}