import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Axis Helper
const axisHelper = new THREE.AxesHelper()
scene.add(axisHelper)
/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/7.png')

/**
 * Object
 */
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial()
)

// scene.add(cube)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Fonts
const fontLoader = new FontLoader()

fontLoader.load('/fonts/helvetiker_regular.typeface.json', 
    (font)=>{
        const textGeometry = new TextGeometry( 'Sheesh!', {
            font: font,
            size: .5,
            height: .2,
            curveSegments: 4,
            bevelEnabled: true,
            bevelThickness: .05,
            bevelSize: .04,
            bevelOffset: 0,
            bevelSegments: 4
        });
        textGeometry.computeBoundingBox()
        console.log(textGeometry.boundingBox)
        // textGeometry.translate(
        //     (textGeometry.boundingBox.max.x -.1) * -0.5,
        //     (textGeometry.boundingBox.max.y -.1) * -0.5,
        //     (textGeometry.boundingBox.max.z -.1) * -0.5
        // )
        textGeometry.center()
        // const textMaterial = new THREE.MeshBasicMaterial({wireframe: true,color: 0x00aa00})
        const textMaterial = new THREE.MeshMatcapMaterial({matcap: matcapTexture})
        const text = new THREE.Mesh(textGeometry, textMaterial)
        scene.add(text)
        const donutGeometry = new THREE.TorusGeometry(.3,.2,10,20)
        for (let i = 0 ; i < 200; i++){
            const donut = new THREE.Mesh(donutGeometry,textMaterial)
            donut.position.x = (Math.random()-.5) * 10 
            // donut.position.x =  donut.position.x>=0?  donut.position.x+1.5:  donut.position.x-1.5;
            donut.position.y = (Math.random()-.5) * 10
            // donut.position.y =  donut.position.y>=0?  donut.position.y+.4:  donut.position.y-.4;
            donut.position.z = (Math.random()-.5) * 10 
            // donut.position.z =  donut.position.z>=0?  donut.position.z+.2:  donut.position.z-.2;

            donut.rotation.x = Math.random() * Math.PI
            donut.rotation.y = Math.random() * Math.PI
            
            scene.add(donut)
        }
    })

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()