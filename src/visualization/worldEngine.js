import * as THREE from "three"

export function initWorld(repos){

const container = document.getElementById("world")

container.innerHTML=""

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
container.clientWidth/container.clientHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(container.clientWidth,container.clientHeight)

container.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(5,32,32)

const material = new THREE.MeshBasicMaterial({wireframe:true})

const globe = new THREE.Mesh(geometry,material)

scene.add(globe)

camera.position.z=10

function animate(){

requestAnimationFrame(animate)

globe.rotation.y+=0.002

renderer.render(scene,camera)

}

animate()

}