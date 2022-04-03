import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


const cursor = {
	x:0,
	y:0
}
window.addEventListener('mousemove',(event) =>
{
	cursor.x = event.clientX / sizes.width  - 0.5;
	cursor.y = event.clientY / sizes.height - 0.5;
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
scene.add(mesh)

// Camera
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(60, aspectRatio, 0.1, 50)
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 50)
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animates
const clock = new THREE.Clock()
var x = 0

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true //making it slide 

// controls.target.y =2
// controls.update()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime;
	
	// Update Camera
	// camera.lookAt(mesh.position)
	// camera.position.x = -cursor.x * 10
	// camera.position.y = cursor.y * 10
	// x += cursor.x/10
	// camera.position.x = Math.cos(x)*3
	// camera.position.z = Math.sin(x)*3
	// camera.position.y = cursor.y * 3
		
	// Update Controls
	controls.update()
		
    // Render
    renderer.render(scene, camera)
	
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()