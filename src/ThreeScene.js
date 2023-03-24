import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeScene() {
  const mount = useRef(null);

  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1000;
    var mouse = new THREE.Vector2();

    function onMouseMove(event) {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) *2  + 1;
  };
  function onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
          event.preventDefault();
          mouse.x = event.touches[0].pageX - window.innerWidth / 2;
          mouse.y = event.touches[0].pageY - window.innerHeight / 2;
      };
  };
  function onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
          event.preventDefault();
          mouse.x = event.touches[0].pageX - window.innerWidth / 2;
          mouse.y = event.touches[0].pageY - window.innerHeight / 2;
      }
  }
  function OnScrollMouse(event) {
    // event.preventDefault();
    if(event.deltaY<0)
    {
      camera.position.z += event.deltaY / 500;
    }
    else{
      if(camera.position.z<=18)
      {
        camera.position.z += event.deltaY / 500;
        // console.log(camera.position.z)
      }
    }
}
  window.addEventListener('mousemove', onMouseMove, false);
  window.addEventListener('wheel', OnScrollMouse, false);
  // window.addEventListener('click', onDocumentMouseDown, false);
  window.addEventListener('touchstart', onDocumentTouchStart, false );
  window.addEventListener('touchmove', onDocumentTouchMove, false );

    const scene = new THREE.Scene(); // declare scene outside of loader.load()
    const light = new THREE.DirectionalLight(0xffffff,1)
	  light.position.set(2,2,5);
    scene.add(light)

      // const useLoader= new THREE.Loader()
    const loader = new GLTFLoader();
    loader.load('./scene.glb', (glb) => { 
      console.log(glb)
      scene.add(glb.scene); // add gltf.scene to the scene
    });

    const renderer = new THREE.WebGLRenderer({mount,antialias:true});
    renderer.setClearColor("grey")
    mount.current.appendChild(renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);
    function animate() {
      requestAnimationFrame(animate);
      scene.rotation.y -= ((mouse.x * 8) - camera.rotation.y) * 0.005;
      scene.rotation.x -= (-(mouse.y * 3) - camera.rotation.x) * 0.005;
      if (scene.rotation.x < -0.05) scene.rotation.x = -0.05;
      else if (scene.rotation.x > 1) scene.rotation.x = 1;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <div ref={mount} />;
}

export default ThreeScene;
