$(document).ready(()=>{ 
  
  const cake = document.getElementById("cake");
  const bsound = document.getElementById("b-sound");

  const play = () => {
    console.log("working!")
    if (cake.object3D.visible == true){
      bsound.components.sound.playSound();
    }else{
      bsound.components.sound.pauseSound();
    }
  }
  play();
  
})

// AFRAME.registerComponent('soundhandler', {
//   tick: function () {
//          var entity = document.querySelector('[sound]');
//        if (document.querySelector('a-marker').object3D.visible == true) {
//           entity.components.sound.playSound();
//       } else {
//           entity.components.sound.pauseSound();
//       }

//    }
// });