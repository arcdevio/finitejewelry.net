window.addEventListener('load', function () {

	var animation = new TimelineLite({ paused: true });
      var menu = document.querySelector('#menu');
      var menuIcon = document.querySelector('#menuIcon');
      var menuIconTop = menuIcon.contentDocument.querySelector('#menuIconTop');
      var menuIconMiddle = menuIcon.contentDocument.querySelector('#menuIconMiddle');
      var menuIconBottom = menuIcon.contentDocument.querySelector('#menuIconBottom');

	animation.add([
		TweenLite.to(menuIconTop, 1, {
	            y: 33.5,
	            rotation: 135,
			fill: '#FFF',
	            transformOrigin:'center center'
	      }),
	      TweenLite.to(menuIconMiddle, 1, {
	            rotation: 315,
			fill: '#FFF',
			transformOrigin:'center center'
	      }),
	      TweenLite.to(menuIconBottom, 1, {
	            y: -34,
	            rotation: -135,
			fill: '#FFF',
	            transformOrigin:'center center'
	      })
	],0.5);

      function activateMenu() {
		if (menu.classList[0] != 'active')
            {
                  animation.play();
			window.parent.document.body.style.overflowY = 'hidden';
            }
            else if(menu.classList[0] === 'active')
            {
                  animation.reverse();
			window.parent.document.body.style.overflowY = 'initial';
            }

		menu.classList.toggle('active');
      }
      menuIcon.contentDocument.addEventListener('click', activateMenu);
});
