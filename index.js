// https://dog.ceo/api/breeds/list/all
const breed8=["beagle","greyhound","weimaraner","pug","sharpei","redbone","shiba","saluki"]

async function grabAllBreeds(){
    const response=await fetch("https://dog.ceo/api/breeds/list/all")
        const data=await response.json()
        if(data.status===404){
            console.log("It broke")
            return}
        return data.message}

async function getDogImage(name){
    const response=await fetch("https://dog.ceo/api/breed/"+name+"/images/random")  
    const data=await response.json()
        if(data.status===404){
            console.log("It broke")
            return}
        return data.message}

async function renderBreeds(breed){
    const ele=document.createElement("div")
    ele.style.border="2px solid black"
    ele.style.borderRadius="8px"
    ele.style.marginTop="4px"
    ele.style.padding="4px"
    ele.innerHTML=breed
    const img=document.createElement("img")
    img.src=await getDogImage(breed)
    img.style.width="300px"
    ele.appendChild(img)
    document.getElementById("wrapper").appendChild(ele)
}
grabAllBreeds().then(()=>{
    breed8.forEach(breed=>{
        renderBreeds(breed)
    })
})
