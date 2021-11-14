const btn = document.getElementById('btn');
const head = document.querySelector('.head');
const small = document.querySelector('.small')
const img = document.querySelector('.img')

btn.addEventListener("click", async () =>{
    let wildData = await fetch('https://www.boredapi.com/api/activity');
    let wildData1 = await fetch('https://api.imgflip.com/get_memes?limit=1');
    const data = await wildData.json();
    const data1 = await wildData1.json();
    console.log(data)
    console.log(data1)
    let rand = Math.floor(Math.random() * 100) + 1;

    head.innerHTML = data.activity;
    small.innerHTML = data.type;
    document.querySelector(".image").innerHTML = `<img src="${data1.data.memes[rand].url}">`
})