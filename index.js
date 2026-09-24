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
        console.log(data.message)
        return data.message}

function renderBreeds(breed){
    const ele=document.createElement("div")
    const pict=document.createElement("img")
    pict.src=getDogImage(breed)
    ele.appendChild(pict)
    document.getElementById("wrapper").appendChild(ele)
}

breed8.forEach(breed=>{
    renderBreeds(breed)
    })