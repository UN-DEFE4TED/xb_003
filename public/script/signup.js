
let next_btn = (show, hide, pgshow, pghide)=>{
    let toShow = document.getElementsByClassName(show);
    toShow = Array.from(toShow)
    toShow.forEach(element => {
        element.style.display = 'grid'
    });
    let toHide = document.getElementsByClassName(hide);
    toHide = Array.from(toHide)
    toHide.forEach( element =>{
        element.style.display = 'none'
    })
    let pgtoShow = document.getElementsByClassName(pgshow)[0];
    pgtoShow.style.display = 'block'
    let pgtoHide = document.getElementsByClassName(pghide)[0];
    pgtoHide.style.display = 'none'
}