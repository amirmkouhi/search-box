const titles = [
  "چطور آب کرفس بگیرم",
  "چطور آب زرشک بگیرم",
  "چطور آرد عدس درست کنم",
  "چطور پرینت اس ام اس بگیرم",
  "چطور آب زرشک خانگی درست کنم",
];

const search = document.querySelector(".search");
const inputBox = document.querySelector("input");
const resultBox = document.querySelector(".result-box");

inputBox.onkeyup = (e) => {
    const userInput = e.target.value
    let resultArray = []
    
    if (userInput.length > 0) {
        resultArray = titles.filter((title) => {
            if (title.startsWith(userInput)) return title
        })
    
    resultArray = resultArray.map((title) =>{
        return '<li><b>' + userInput + '</b>' + title.substring(userInput.length) + '</li>'
    })
    if (resultArray.length >0){
        resultBox.innerHTML = resultArray.join('')
        search.classList.add('active')
    }
    else{
        search.classList.remove('active')
    }
    }else{
        search.classList.remove('active')
    }
}
