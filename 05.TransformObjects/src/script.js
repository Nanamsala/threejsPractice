import './style.css'
import * as THREE from 'three'

console.log("Hi!");
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
/* const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 1;
mesh.scale.x=2; */
/* mesh.scale.y=0.5; */
/* mesh.scale.z=0.3; */

// Eulers
// be careful of gimbal lock
//mesh.rotation.reorder('YXZ')
//mesh.rotation.y=Math.PI/2
//mesh.rotation.x=Math.PI/4
//scene.add(mesh)

//
// console.log(mesh.position.lenght());
// console.log(mesh.position.distanceTo(camera.position));
// mesh.position.normalize()
// mesh.position.set(0,1,2);
//

// Axis  Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Group
const group = new THREE.Group();
group.position.y=1;
group.scale.y=2;
scene.add(group)

const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube1.position.x=0
group.add(cube1)

const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube2.position.x=2
group.add(cube2)

const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube3.position.x=-2
group.add(cube3)
// Quaternion

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

// camera.lookAt(mesh.position)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)