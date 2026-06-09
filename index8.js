// localStorage.setItem("key","helloooo")
// let data=localStorage.getItem("key")
// console.log(data);
 let formData=document.querySelector('#formdata')
 formData.addEventListener("submit",(e)=>{
     e.preventDefault()
//     console.log(formdata[0].value);
//     console.log(formData[1].value);
//     console.log(formData[2].value);
let data={
    name:formData[0].value,
     email:formData[1].value,
      pass:formData[2].value,


}
localStorage.setItem("userData",json.stringify(data))    
})
let loginData=document.querySelector("#loginData")
loginData.addEventListener("submitt",(e)=>{
    let localStorageData=localStorage.getItem("userData")
    console.log(mainData);
    if(loginData.email===mainData.email && loginData.pass===mainData.pass){
        alert("done")
    }else{
        alert("not done")
    }
    
})