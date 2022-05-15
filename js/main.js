document.querySelector('#check').addEventListener('click', check)

function check(){
    const day = document.querySelector('#day').value

    if (day === "Tuesday" || day === "tuesday" ||day === "Thursday" || day === "thursday"){
        alert('Class Day')
    }else if (day === "Saturday" || day === "Sunday" || day === "saturday" || day === "sunday"){
        alert('Weekend')
    }else {
        alert('Boring Day!!')
    }
}