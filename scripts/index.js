/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
let ob=JSON.parse(localStorage.getItem("user")) || []

let signupdata=()=>{
      
      let name=document.getElementById("user_pic").value
      let picid=document.getElementById("user_name").value
      let email=document.getElementById("user_email").value
      let county=document.getElementById("user_country").value
      
      
      class Userdata{
            constructor(name,picid,email,county){
                  this.name=name;
                  this.pic=picid;
                  this.email=email;
                  this.county=county;
            }
      }
      let data=new Userdata(name,picid,email,county)

window.location.reload()
localStorage.setItem("user",JSON.stringify(data))
}
