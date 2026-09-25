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
        return data}

function renderBreeds(breed){
    const picture="https://dog.ceo/api/breed/beagle/images/random"
    const ele=document.createElement("div")
    ele.innerHTML=breed
    const img=document.createElement("img")
    img.src=picture//'"'+getDogImage(breed)+'"'
    ele.appendChild(img)
    document.getElementById("wrapper").appendChild(ele)
}
grabAllBreeds().then(()=>{
    breed8.forEach(breed=>{
        console.log(breed)
        renderBreeds(breed)
    })
})
