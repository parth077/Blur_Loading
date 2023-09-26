const loadText = document.querySelector('.loading')
const bg = document.querySelector('.bg')


let load = 0;

let start = setInterval(increment,30)

function increment(){
    load++;
    
    if(load == 100){
        clearInterval(start)
    }

    loadText.innerHTML = `${load}%`

    loadText.style.opacity = scale(load,0,100,1,0)

    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}


const scale = (num,in_min,in_max,out_min,out_max)=>{
    let numb = (num-in_min) * (out_max - out_min) / (in_max - in_min) + out_min

    return numb

}
