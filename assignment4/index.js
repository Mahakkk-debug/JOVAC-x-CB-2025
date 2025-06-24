// default is bubbling, event g


document.querySelector('.c').addEventListener('click', () => {
  console.log('child');
});

document.querySelector('.p').addEventListener('click', () => {
  console.log('parent');
});

document.querySelector('.g').addEventListener('click', () => {
  console.log('grandparent');
});

// ///////////////////////////////////////////////////////
// // use true for capturing,

// document.querySelector('.g').addEventListener('click', () => {
//   console.log('grandparent');
// }, true);

// document.querySelector('.p').addEventListener('click', () => {
//   console.log('parent');
// }, true);

// document.querySelector('.c').addEventListener('click', () => {
//   console.log('child');
// }, true);
// ////////////////////////////////////////////////////////////

function show(e) {
  if (e.target === e.currentTarget) {
    console.log(e.currentTarget.className + ' - ' + e.currentTarget.className);
  }
}

document.querySelector('.g').addEventListener('click', show);
document.querySelector('.p').addEventListener('click', show);
document.querySelector('.c').addEventListener('click', show);
