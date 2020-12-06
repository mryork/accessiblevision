(function() {

const sp = document.createElement('span');

sp.id = 'adi';

document.body.addEventListener("mousemove", e => {
  sp.style.setProperty('--mouse-x', Number(e.clientX - 75) + "px");
  sp.style.setProperty('--mouse-y', Number(e.clientY - 75) + "px");
});

document.body.after(sp);

})();