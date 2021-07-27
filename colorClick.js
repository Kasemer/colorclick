

// let body =document.querySelector(".body");
// let button =document.querySelector('button');

// button.onClick=function() {
// body.classList.remove('purple');
// }

// let body =document.querySelector('.body');
// let button =document.querySelector('button');

// button.onclick = function() {
// 	body.classList.toggle('blue');
// body.classList.toggle('purple');

// // body.classList.toggle('yellow');
// // body.classList.toggle('green');
// // body.classList.toggle('blue');
// // body.classList.toggle('darkblue');
// // body.classList.toggle('purple');
// // body.classList.toggle('pink');
// }

// button.onClick=function() {
// 	body.classList.toggle('yellow');
// body.classList.toggle('green');
// }

// const colorClick = document.getElementById('colorClick'),
// colors = ['purple', 'green', 'blue'];
// let colorIndex =0;

// colorClick.addEventListener('click', () ==> {
// 	document.
// }


// 	)


var place =0;
        function colorClick() {
            // your color list
            var colorList = ["#FF8080"," #FFBD80","#FFF280",'#B8FF80','#80F7FF','#80B2FF','#D680FF','#FF80CC'];
            // set the color
            document.body.style.backgroundColor = colorList[place]; 
            place++;
            // if place is greater than the list size, reset
            if (place ===colorList.length) place=0; 
        }








