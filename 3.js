const divideAndSort = (isiAngka) =>{
    let hasilSort = []
    let divideZero = isiAngka.toString().split('0')
    for (let i = 0; i < divideZero.length; i++){
        const prosesSort = divideZero[i].split('').sort((a,b)=> a-b).join('')
        hasilSort.push(prosesSort)
    }
    console.log(parseInt(hasilSort.join('')))
}

divideAndSort(5956560159466056)