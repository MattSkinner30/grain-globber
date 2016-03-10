var peanuts = {
	name: 'Peanuts',
	img: 'peanuts.jpg',
	desc: 'First cultivated in the valleys of Paraguay.'
};

var beans = {
	name: 'Beans',
	img: 'images/beans.jpg',
	desc: 'A summer crop that needs warm temperatures.'
};

var lentils = {
	name: 'Lentils',
	img: 'lentils.jpg',
	desc: 'An edible pulse from a bushy annual plant.'
};

var writeGrains = function (grains) {

    document.write('<h2>' + grain.name + '</h2>');
    document.write('img src="images/' + grain.img + '" alt="">');