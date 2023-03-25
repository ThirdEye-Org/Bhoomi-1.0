import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeScene() {
  const mount = useRef(null);
  var c5,c4;
  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      10,
      1000000
    );

    camera.position.set(0, 1000, 2125);
    var mouse = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();

    function onMouseMove(event) {
      // event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) *2  + 1;
  };
  function OnScrollMouse(event) {
    console.log("scrolled")
    console.log(camera.position)
    if(event.deltaY<0)
    {
      if(camera.position.z>1000)
      {  
        camera.position.z += event.deltaY ;
      }
    }
    else{
      if(camera.position.z<=2700)
      {
        camera.position.z += event.deltaY ;
      }
    }
}

function onDocumentMouseDown(event) {
  event.preventDefault();

  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(c5.children);
  if (intersects.length > 0) {
    // window.alert("Do you want to buy this building")
    console.log(intersects);
    const result = intersects.find(obj=>obj.object.name==="House_World_ap_0")
    // result.object.material.color.r=255;
    result.object.position.x+=30;   
    console.log(result.object.position);
    // result.object.position.x+=30;
    // console.log(intersects[0].object.material.color);
    // setismodalshown(!ismodalshown)
    // <Modal />
  }
}

  window.addEventListener('mousemove', onMouseMove, false);
  window.addEventListener('wheel', OnScrollMouse, false);
  window.addEventListener('click', onDocumentMouseDown, false);

    const scene = new THREE.Scene(); // declare scene outside of loader.load()

    scene.background = new THREE.Color("white");
    const light = new THREE.DirectionalLight(0xffffff,1)
	  light.position.set(100,1000,100);
    scene.add(light)

    const loader = new GLTFLoader();
    // loader.setPath("./");
    // loader.setResourcePath("./stone/");
    loader.crossOrigin = true;
    loader.load("scene.gltf", (glb) => { 
      console.log(glb.scene)
      glb.scene.position.set(500,0,400)
      scene.add(glb.scene); // add gltf.scene to the scene
      var c1=glb.scene.children[0];
      var c2= c1.children[0];
      var c3=c2.children[0];
      c4=c3.children[3]
      c5= c4.children[4];
      console.log(c5)
      // const mesh = scene.getObjectByName('House_3_World ap_0');
      // c5.position.setY(500)
      // const mesh = glb.scene.children.getObjectByName('House_World ap_0');
      // console.log(mesh)
    },function(error)
    {
      console.log(error)
    });

    const renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight)
    document.body.appendChild(renderer.domElement);

    //lights
        var ambientLight = new THREE.AmbientLight(0xffffff, 1);
        var lightFront = new THREE.SpotLight(0x000000, 20, 10);
        var lightBack = new THREE.PointLight(0x000000, 0.5);

        lightFront.rotation.x = 45 * Math.PI / 180;
        lightFront.rotation.z = -45 * Math.PI / 180;
        lightFront.position.set(5, 5, 5);
        lightFront.castShadow = true;
        lightFront.shadow.mapSize.width = 6000;
        lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
        lightFront.penumbra = 0.1;
        lightBack.position.set(0, 6, 0);

        scene.add(ambientLight);
        scene.add(lightBack);
        scene.add(lightFront);

    if (window.innerWidth > 800) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.shadowMap.needsUpdate = true;
  };
    renderer.setSize(window.innerWidth, window.innerHeight);
    function animate() {
      requestAnimationFrame(animate);
      scene.rotation.y -= ((mouse.x * 8) - camera.rotation.y) * 0.005;
      scene.rotation.x -= (-(mouse.y * 3) - camera.rotation.x) * 0.005;
      if (scene.rotation.x < -0.05) scene.rotation.x = -0.05;
      else if (scene.rotation.x > 0.3) scene.rotation.x = 0.3;

      raycaster.setFromCamera(mouse, camera);
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }
    console.log(scene)
    animate();
  }, []);

  return <div ref={mount} />;
}

export default ThreeScene;
