//import { OrbitControls } from "OrbitControls";
import { FontLoader } from 'FontLoader';
import { GLTFLoader } from 'gltfLoader';
import { TextGeometry } from 'textGeo';
import * as THREE from "three";
import gsap from "./gsap/all.js";

console.log(GLTFLoader);
console.log(THREE);
console.log(gsap);

var canvas = document.querySelector("#c");

var renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});

renderer.setClearColor("black");
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//document.body.appendChild(renderer.domElement);
canvas.append(renderer.domElement);

window.addEventListener("resize", function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix(); 
});


var scene = new THREE.Scene();
var group = new THREE.Group();

//partical model
var partGeo = new THREE.BufferGeometry;
var partCount = 5000 ; 
var posArray = new Float32Array(partCount*3);

for(let i=0 ; i<partCount*3 ; i++){
   posArray[i] = (Math.random()-0.5)*2;
}
partGeo.setAttribute("position" , new THREE.BufferAttribute(posArray,3));


var material5 = new THREE.MeshStandardMaterial({
   // "MeshStandardMaterial" and "MeshPhogMaterial" cast or receive shadows
   color: 0xf0f0f0,
   side: THREE.DoubleSide,
   roughness: 0.1, // min=0; and maxValue=1
   metalness: 0, // min=0; and maxValue=1
 });

 var material6 = new THREE.PointsMaterial({
   size: 0.001 ,
 })
var mesh_points = new THREE.Points(partGeo , material6);
scene.add( mesh_points)


var fov = 65;
var aspect = window.innerWidth / window.innerHeight;
var near = 0.1;
var far = 1000000;
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.lookAt(0,0,0);
//camera.position.z = 2;

//adding three js fonts==========================================
const loader = new FontLoader();
loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {


   if(screen.width>=1400){
      const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the future of farming \n  where innovation meets agriculture through \n our groundbreaking drone-like robot , \n your ultimate farming assistant. by our\n AgroGuard , we recognize the \n challenges faced by farmers in managing \n their daily tasks efficiently and safely. Our\n solution lies in the form of a versatile \n robotic assistant designed to handle \n a myriad of essential farming activities \n , from plant irrigation to animal care \n and crop surveillance.\n \n Our Aim and the Problem We Solve: \n The core challenge we address \n is the complexity and physical strain \n associated with traditional farming \n methods.Farmers oftestruggle to balance \n their responsibilities, especially when \n they need to be away from the farm. This gap \n in oversight can lead to \n inefficiencies, health risks, and compromised \n crop and animal well-being', {
         font: font,
         size: 0.07,
         height: 0.01,
         curveSegments: 10,
      } );
      var text_pos= new THREE.Mesh(geometry , material5);
      text_pos.position.x -= 0.9;
      text_pos.position.y -=0.8;
      text_pos.position.z =0;
     // text_pos.position.z -=1;
   
     text_pos.rotation.x -= Math.PI/ 7 ; 
      gsap.to(text_pos.position , {
         y: text_pos.position.y+4.2 , 
         z: text_pos.position.z - 1.5 , 
         duration: 60 , 
         delay: 1 
      })
      camera.position.set(0, 0, 1);
   }else if(screen.width<1400 && screen.width>1080){
      const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the future \n of farming  where innovation \n meets agriculture through our \n groundbreaking drone-like robot , \n your ultimate farming assistant. \n by our AgroGuard , we recognize \n the challenges faced by \n farmers in managing their \n daily tasks efficiently and safely. \n Our solution lies in the \n form of a versatile \n robotic assistant designed \n to handle a myriad of \n essential farming activities \n  ,from plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the Problem We Solve: \n The core challenge we \n address is the complexity \n and physical strain \n associated with traditional \n farming  methods.Farmers \n oftestruggle to balance \n their responsibilities, \n especially when they need \n to be away from \n the farm. This gap \n in oversight can lead to \n inefficiencies, \n health risks, and compromised \n crop and animal well-being', {
         font: font,
         size: 0.12,
         height: 0.01,
         curveSegments: 10,
      } );
      var text_pos= new THREE.Mesh(geometry , material5);
      text_pos.position.x -= 1.1;
      text_pos.position.y -=1.5;
      text_pos.position.z =0;
     // text_pos.position.z -=1;
   
     text_pos.rotation.x -= Math.PI/ 7 ; 
      gsap.to(text_pos.position , {
         y: text_pos.position.y+9, 
         z: text_pos.position.z - 3 , 
         duration: 60 , 
         delay: 1
        })
      camera.position.set(0, 0, 2);
   }else if(screen.width<=1080 && screen.width>= 900){
      const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the \n future of farming  where \n innovation meets \n agriculture through \n our groundbreaking \n drone-like robot , your \n ultimate farming \n assistant. by our \n AgroGuard , we recognize \n the challenges \n faced by farmers \n in managing their \n daily tasks efficiently \n and safely.Our \n solution lies in the \n form of a versatile \n robotic assistant designed \n to handle a myriad of \n essential farming activities \n  ,from plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the \n Problem We Solve: \n\n The core challenge we \n address is the \n complexity \n and physical strain \n associated with traditional \n farming  methods.\n Farmers oftestruggle \n to balance\n their responsibilities \n,especially when they \n need to be \n away from \n the farm. This gap \n in oversight can \n lead to inefficiencies, \n health risks, and \n compromised crop and \n animal well-being', {
         font: font,
         size: 0.12,
         height: 0.01,
         curveSegments: 10,
      } );
      var text_pos= new THREE.Mesh(geometry , material5);
      text_pos.position.x -= 0.9;
      text_pos.position.y -=1.5;
      text_pos.position.z =0;
     // text_pos.position.z -=1;
   
     text_pos.rotation.x -= Math.PI/ 9 ; 
      gsap.to(text_pos.position , {
         y: text_pos.position.y+12, 
         z: text_pos.position.z - 4 , 
         duration: 60 , 
         delay: 1 
        })
      camera.position.set(0, 0, 2);
   }else if(screen.width<900 && screen.width>=700){
      const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the \n future of farming  where \n innovation meets \n agriculture through \n our groundbreaking \n drone-like robot , your \n ultimate farming \n assistant. by our \n AgroGuard , we \n recognize the \n challenges faced \n by farmers in \n managing their daily \n tasks efficiently \n and safely.Our \n solution lies in the \n form of a versatile \n robotic assistant \n designed to handle \n a myriad of \n essential farming \n activities,from \n plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the \n Problem We Solve: \n\n The core challenge we \n address is the \n complexity \n and physical strain \n associated with \n traditional farming \n methods. Farmers \n oftestruggle to balance\n their responsibilities \n,especially when they \n need to be \n away from \n the farm. This gap \n in oversight can \n lead to inefficiencies, \n health risks, and \n compromised crop and \n animal well-being', {
         font: font,
         size: 0.12,
         height: 0.01,
         curveSegments: 10,
      } );
      var text_pos= new THREE.Mesh(geometry , material5);
      text_pos.position.x -= 0.9;
      text_pos.position.y -=1.5;
      text_pos.position.z =0;
     // text_pos.position.z -=1;
   
     text_pos.rotation.x -= Math.PI/ 9 ; 
      gsap.to(text_pos.position , {
         y: text_pos.position.y+12, 
         z: text_pos.position.z - 4 , 
         duration: 60 , 
         delay: 1 
        })
      camera.position.set(0, 0, 2);
   }else if(screen.width<700 && screen.width>=500){
      const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the \n future of farming  where \n innovation meets \n agriculture through \n our groundbreaking \n drone-like robot , your \n ultimate farming \n assistant. by our \n AgroGuard , we \n recognize the \n challenges faced \n by farmers in \n managing their daily \n tasks efficiently \n and safely.Our \n solution lies in the \n form of a versatile \n robotic assistant \n designed to handle \n a myriad of \n essential farming \n activities,from \n plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the \n Problem We Solve: \n\n The core challenge we \n address is the \n complexity \n and physical strain \n associated with \n traditional farming \n methods. Farmers \n oftestruggle to balance\n their responsibilities \n,especially when they \n need to be \n away from \n the farm. This gap \n in oversight can \n lead to inefficiencies, \n health risks, and \n compromised crop and \n animal well-being', {
         font: font,
         size: 0.12,
         height: 0.01,
         curveSegments: 10,
      } );
      var text_pos= new THREE.Mesh(geometry , material5);
      text_pos.position.x -= 0.9;
      text_pos.position.y -=2.3;
      text_pos.position.z =0;
     // text_pos.position.z -=1;
   
     text_pos.rotation.x -= Math.PI/ 9 ; 
      gsap.to(text_pos.position , {
         y: text_pos.position.y+13.5, 
         z: text_pos.position.z - 4 , 
         duration: 60 , 
         delay: 1 
        })
      camera.position.set(0, 0, 3);
   }else if(screen.width<499){
      const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the \n future of farming \n where innovation \n meets agriculture \n through our \n groundbreaking drone \n like robot, \n your ultimate \n farming assistant. \n by our AgroGuard , \n we recognize the \n challenges faced \n by farmers in \n managing their \n daily tasks \n efficiently and \n safely.Our \n solution lies \n in the form \n of a versatile \n robotic assistant \n designed to \n handle a myriad \n of essential farming \n activities,from \n plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the \n Problem We Solve: \n\n The core challenge \n we address \n is the \n complexity and \n physical strain \n associated with \n traditional farming \n methods. Farmers \n oftestruggle to \n balance their \n responsibilities \n,especially when \n they need to \n be away from \n the farm. This gap \n in oversight can \n lead to inefficiencies, \n health risks, and \n compromised crop and \n animal well-being', {
         font: font,
         size: 0.1,
         height: 0.01,
         curveSegments: 10,
      } );
      var text_pos= new THREE.Mesh(geometry , material5);
      text_pos.position.x -= 0.6;
      text_pos.position.y -=2.5;
      text_pos.position.z =0;
     // text_pos.position.z -=1;
   
     text_pos.rotation.x -= Math.PI/ 9 ; 
      gsap.to(text_pos.position , {
         y: text_pos.position.y+13.5, 
         z: text_pos.position.z - 4 , 
         duration: 60 , 
         delay: 1 
        })
      camera.position.set(0, 0, 3.5);
   }

   window.addEventListener("resize" , ()=>{
      if(screen.width>=1400){
         const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the future of farming \n  where innovation meets agriculture through \n our groundbreaking drone-like robot , \n your ultimate farming assistant. by our\n AgroGuard , we recognize the \n challenges faced by farmers in managing \n their daily tasks efficiently and safely. Our\n solution lies in the form of a versatile \n robotic assistant designed to handle \n a myriad of essential farming activities \n , from plant irrigation to animal care \n and crop surveillance.\n \n Our Aim and the Problem We Solve: \n The core challenge we address \n is the complexity and physical strain \n associated with traditional farming \n methods.Farmers oftestruggle to balance \n their responsibilities, especially when \n they need to be away from the farm. This gap \n in oversight can lead to \n inefficiencies, health risks, and compromised \n crop and animal well-being', {
            font: font,
            size: 0.07,
            height: 0.01,
            curveSegments: 10,
         } );
         var text_pos= new THREE.Mesh(geometry , material5);
         text_pos.position.x -= 0.9;
         text_pos.position.y -=0.8;
         text_pos.position.z =0;
        // text_pos.position.z -=1;
      
        text_pos.rotation.x -= Math.PI/ 7 ; 
         gsap.to(text_pos.position , {
            y: text_pos.position.y+4.2 , 
            z: text_pos.position.z - 1.5 , 
            duration: 60 , 
            delay: 1 
         })
         camera.position.set(0, 0, 1);
      }else if(screen.width<1400 && screen.width>1080){
         const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the future \n of farming  where innovation \n meets agriculture through our \n groundbreaking drone-like robot , \n your ultimate farming assistant. \n by our AgroGuard , we recognize \n the challenges faced by \n farmers in managing their \n daily tasks efficiently and safely. \n Our solution lies in the \n form of a versatile \n robotic assistant designed \n to handle a myriad of \n essential farming activities \n  ,from plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the Problem We Solve: \n The core challenge we \n address is the complexity \n and physical strain \n associated with traditional \n farming  methods.Farmers \n oftestruggle to balance \n their responsibilities, \n especially when they need \n to be away from \n the farm. This gap \n in oversight can lead to \n inefficiencies, \n health risks, and compromised \n crop and animal well-being', {
            font: font,
            size: 0.12,
            height: 0.01,
            curveSegments: 10,
         } );
         var text_pos= new THREE.Mesh(geometry , material5);
         text_pos.position.x -= 1.1;
         text_pos.position.y -=1.5;
         text_pos.position.z =0;
        // text_pos.position.z -=1;
      
        text_pos.rotation.x -= Math.PI/ 7 ; 
         gsap.to(text_pos.position , {
            y: text_pos.position.y+9, 
            z: text_pos.position.z - 3 , 
            duration: 60 , 
            delay: 1
           })
         camera.position.set(0, 0, 2);
      }else if(screen.width<=1080 && screen.width>= 900){
         const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the \n future of farming  where \n innovation meets \n agriculture through \n our groundbreaking \n drone-like robot , your \n ultimate farming \n assistant. by our \n AgroGuard , we recognize \n the challenges \n faced by farmers \n in managing their \n daily tasks efficiently \n and safely.Our \n solution lies in the \n form of a versatile \n robotic assistant designed \n to handle a myriad of \n essential farming activities \n  ,from plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the \n Problem We Solve: \n\n The core challenge we \n address is the \n complexity \n and physical strain \n associated with traditional \n farming  methods.\n Farmers oftestruggle \n to balance\n their responsibilities \n,especially when they \n need to be \n away from \n the farm. This gap \n in oversight can \n lead to inefficiencies, \n health risks, and \n compromised crop and \n animal well-being', {
            font: font,
            size: 0.12,
            height: 0.01,
            curveSegments: 10,
         } );
         var text_pos= new THREE.Mesh(geometry , material5);
         text_pos.position.x -= 0.9;
         text_pos.position.y -=1.5;
         text_pos.position.z =0;
        // text_pos.position.z -=1;
      
        text_pos.rotation.x -= Math.PI/ 9 ; 
         gsap.to(text_pos.position , {
            y: text_pos.position.y+12, 
            z: text_pos.position.z - 4 , 
            duration: 60 , 
            delay: 1 
           })
         camera.position.set(0, 0, 2);
      }else if(screen.width<900 && screen.width>=700){
         const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the \n future of farming  where \n innovation meets \n agriculture through \n our groundbreaking \n drone-like robot , your \n ultimate farming \n assistant. by our \n AgroGuard , we \n recognize the \n challenges faced \n by farmers in \n managing their daily \n tasks efficiently \n and safely.Our \n solution lies in the \n form of a versatile \n robotic assistant \n designed to handle \n a myriad of \n essential farming \n activities,from \n plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the \n Problem We Solve: \n\n The core challenge we \n address is the \n complexity \n and physical strain \n associated with \n traditional farming \n methods. Farmers \n oftestruggle to balance\n their responsibilities \n,especially when they \n need to be \n away from \n the farm. This gap \n in oversight can \n lead to inefficiencies, \n health risks, and \n compromised crop and \n animal well-being', {
            font: font,
            size: 0.12,
            height: 0.01,
            curveSegments: 10,
         } );
         var text_pos= new THREE.Mesh(geometry , material5);
         text_pos.position.x -= 0.9;
         text_pos.position.y -=1.5;
         text_pos.position.z =0;
        // text_pos.position.z -=1;
      
        text_pos.rotation.x -= Math.PI/ 9 ; 
         gsap.to(text_pos.position , {
            y: text_pos.position.y+12, 
            z: text_pos.position.z - 4 , 
            duration: 60 , 
            delay: 1 
           })
         camera.position.set(0, 0, 2);
      }else if(screen.width<700 && screen.width>=500){
         const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the \n future of farming  where \n innovation meets \n agriculture through \n our groundbreaking \n drone-like robot , your \n ultimate farming \n assistant. by our \n AgroGuard , we \n recognize the \n challenges faced \n by farmers in \n managing their daily \n tasks efficiently \n and safely.Our \n solution lies in the \n form of a versatile \n robotic assistant \n designed to handle \n a myriad of \n essential farming \n activities,from \n plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the \n Problem We Solve: \n\n The core challenge we \n address is the \n complexity \n and physical strain \n associated with \n traditional farming \n methods. Farmers \n oftestruggle to balance\n their responsibilities \n,especially when they \n need to be \n away from \n the farm. This gap \n in oversight can \n lead to inefficiencies, \n health risks, and \n compromised crop and \n animal well-being', {
            font: font,
            size: 0.12,
            height: 0.01,
            curveSegments: 10,
         } );
         var text_pos= new THREE.Mesh(geometry , material5);
         text_pos.position.x -= 0.9;
         text_pos.position.y -=2.3;
         text_pos.position.z =0;
        // text_pos.position.z -=1;
      
        text_pos.rotation.x -= Math.PI/ 9 ; 
         gsap.to(text_pos.position , {
            y: text_pos.position.y+13.5, 
            z: text_pos.position.z - 4 , 
            duration: 60 , 
            delay: 1 
           })
         camera.position.set(0, 0, 3);
      }else if(screen.width<499){
         const geometry = new TextGeometry( 'AgroGuard: \n \n Welcome to the \n future of farming \n where innovation \n meets agriculture \n through our \n groundbreaking drone \n like robot, \n your ultimate \n farming assistant. \n by our AgroGuard , \n we recognize the \n challenges faced \n by farmers in \n managing their \n daily tasks \n efficiently and \n safely.Our \n solution lies \n in the form \n of a versatile \n robotic assistant \n designed to \n handle a myriad \n of essential farming \n activities,from \n plant irrigation \n to animal care and \n crop surveillance.\n \n Our Aim and the \n Problem We Solve: \n\n The core challenge \n we address \n is the \n complexity and \n physical strain \n associated with \n traditional farming \n methods. Farmers \n oftestruggle to \n balance their \n responsibilities \n,especially when \n they need to \n be away from \n the farm. This gap \n in oversight can \n lead to inefficiencies, \n health risks, and \n compromised crop and \n animal well-being', {
            font: font,
            size: 0.1,
            height: 0.01,
            curveSegments: 10,
         } );
         var text_pos= new THREE.Mesh(geometry , material5);
         text_pos.position.x -= 0.6;
         text_pos.position.y -=2.5;
         text_pos.position.z =0;
        // text_pos.position.z -=1;
      
        text_pos.rotation.x -= Math.PI/ 9 ; 
         gsap.to(text_pos.position , {
            y: text_pos.position.y+13.5, 
            z: text_pos.position.z - 4 , 
            duration: 60 , 
            delay: 1 
           })
         camera.position.set(0, 0, 3.5);
      }
   })


   scene.add(text_pos)

} );

//scene.add(new THREE.AxesHelper(5));
//scene.add(new THREE.GridHelper(50, 50));

//==================== start spotLight   =========================================
const spotLight = new THREE.SpotLight(
   new THREE.Color("rgb(255,255,255)"),
   4,
   10000
 );
 //new THREE.SpotLight(color,intensity,light travelling distance)
 const directionalLight = new THREE.DirectionalLight(
   new THREE.Color("rgb(255,255,255)"),
   4
 );
 directionalLight.position.set(0, 10, 30);
 directionalLight.castShadow = true; // default false
 
 directionalLight.shadow.mapSize.width = 512; // default
 directionalLight.shadow.mapSize.height = 512; // default
 directionalLight.shadow.camera.near = 0.5; // default
 directionalLight.shadow.camera.far = 500; // default
 
 const helper = new THREE.DirectionalLightHelper(
   directionalLight,
   50,
   new THREE.Color("rgb(255,255,255)")
 );
 scene.add( helper );
 
 scene.add(directionalLight);
 //==================== end spotLight     =========================================

var time = Date.now();
const clock = new THREE.Clock();
const tick = () => {
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  const elapsedTime = clock.getElapsedTime();
  
  //console.log(elapsedTime)

  //orbitControls.update();


  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
