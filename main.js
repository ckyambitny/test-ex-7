var link1 = document.querySelector('nav > ul > li:nth-child(2)');
console.log(link1);
var link2 = document.querySelector('nav > ul > li:nth-child(3)');
console.log(link2);
var link3 = document.querySelector('nav > ul > li:nth-child(3) >  ul > li:nth-child(2)');
console.log(link3);

function addActive(link) {
    link.addEventListener('click', function (e) {
        e.stopPropagation();

        link.classList.toggle('active');

       /* if (link.classList.contains('active')) {
            link.classList.remove('active');
        } else {
           link.classList.add('active');
        }*/
    });
}

addActive(link1);
addActive(link2);
addActive(link3);

