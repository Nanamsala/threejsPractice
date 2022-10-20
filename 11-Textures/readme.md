
# Three.js Journey

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build

```
## Texture!

#### Color (Albedo)
* Color to be applied in the geometry

#### Alpha
* Grayscale 
* Color Dependent 

#### Height (Displacement)
* Grayscale
* Height dependent
* White : Up | Black : Down

#### Normal
* Add details
* Doesn't have subdivision
* Vertices are plain and won't move
* Lure light about the face orientation
* Better performances than height texture with lot of vertices for subdivision

#### Ambient Occlusion
* Grayscale
* Fake shadows in crevices
* Not accurate
* Helps with contrast

#### Metalness
* Grayscale
* White : Metallic | Black : Non-metallic
* Used mostly for reflection

#### Roughness
* Grayscale
* In duo with metalness
* White : Rough| Black : Smooth
* Light dissipation
#### Many more types to be listed next time!

### PBR
**Physically Based Rendering**
Follow techniques that tend to follow real-life directions to get realistic results. It is becoming the standard for realistic render and many softwares, engines, and libraries use it.

### TextureLoader
3 functions for TextureLoader

#### Load
when the image is loaded successfully

#### Progress
when loading is in progress

#### Error
when something went wrong

### UV maps

### MipMapping

#### Minification Filter
Happens when the pixels of texture are smaller than the render pixels.