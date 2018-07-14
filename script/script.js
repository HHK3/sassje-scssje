let hasSub = document.querySelectorAll('.submenu > a');
console.log(hasSub);

for (let i = 0; i < hasSub.length; i++) {
    hasSub[i].addEventListener('click', (e) => e.preventDefault());
}
