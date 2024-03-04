let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")

const days = document.getElementById("days")
const months = document.getElementById("months")
const years = document.getElementById("years")




document.getElementById("btn").addEventListener("click", function(){
    const d = new Date();
    let ev = d.getFullYear()

    let evek = (ev - year.value-1)

    let honap = d.getMonth()
    let honapok
    let napok

    if(honap - month.value <= 0){
        honapok = (month.value - honap+1)
        
    }

    else{
        honapok = (honap+1 - month.value)
        
    }

    let nap = d.getDate()

    if(nap - day.value <= 0){

        napok = day.value - nap
        
    }
    
    else{
        napok = nap - day.value
    }



    years.innerText =  evek

    months.innerText = honapok

    days.innerText =  napok

})