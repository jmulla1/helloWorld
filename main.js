document.write("<h1>Random Duck Pic</h1>")




const randomDuck = document.getElementById('randomDuck');
const duckPic = document.getElementById('duckPic');

randomDuck.addEventListener('click', getDuck)

function getDuck() {
    fetch('https://random-d.uk/api/quack')
    .then(res => res.json())
		.then(data => {
			duckPic.innerHTML = `<img src=${data.file} alt="duck" />`
		});
}