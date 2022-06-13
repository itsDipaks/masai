// api=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
let signupdata=JSON.parse(localStorage.getItem("user"))
console.log(signupdata)
let getdata=async ()=>{
      let value= signupdata.county
      let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
      let res=await fetch(url)
      let data=await res.json()
      console.log(data)
      append(data.articles)
}
getdata()
let container=document.getElementById("news_result")
let leftcontainer=document.getElementById("sidebar")
let append=(data)=>{
      data.forEach(({title,author,urlToImage})=>{
            let div=document.createElement("div")
            div.setAttribute("id","newsdiv")
            div.addEventListener("click",clickeddata(
                  localStorage.setItem("data",JSON.stringify())
            ))
            let h2=document.createElement("h2")
            h2.innerText="Title : "+title;

            let p=document.createElement("p")
            p.innerText="Auther : "+ author

            let img=document.createElement("img")
            img.src=urlToImage
            img.setAttribute("id","newsimg")
           
            div.append(h2,p,img)
            container.append(div)

            
            

      })
      divdata=document.createElement("div")

      let img2=document.createElement("img")
      img2.src=signupdata.pic
      img2.setAttribute("id","userpic")
     
      let name=document.createElement("h2")
      name.innerText="Name : "+signupdata.name

      let email=document.createElement("p")
      email.innerText= "Email : "+signupdata.email

      let country=document.createElement("p")
      country.innerText="Country : "+signupdata.county

      leftcontainer.append(img2,name,email,country)

      // leftcontainer.append(divdata)



}
let clickeddata=()=>{

}
