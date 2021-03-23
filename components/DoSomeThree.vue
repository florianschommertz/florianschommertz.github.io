<template>
  <div ref="threeJsWrapper" class="threeJsWrapper"></div>
</template>
<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  name: 'DoSomeThree',
  props: {
    zoom: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    this.doSomeThree()
  },
  methods: {
    doSomeThree() {
      let scene, camera, renderer

      const init = () => {
        const el = this.$refs.threeJsWrapper

        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(
          75,
          el.clientWidth / el.clientHeight,
          0.1,
          1000
        )
        camera.position.set(0, 3, this.zoom)

        const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820)
        scene.add(ambient)

        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(1, 10, 6)
        scene.add(light)

        renderer = new THREE.WebGLRenderer()

        renderer.setSize(el.clientWidth, el.clientHeight)
        el.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.target.set(0, 4, 0)
        controls.update()

        // Add meshes here
        const height = 0.4
        const geometry = new THREE.BoxGeometry(3, height, 0.9)
        const material = new THREE.MeshLambertMaterial({
          color: 0xff9988,
        })

        const mesh = new THREE.Mesh(geometry, material)
        for (let row = 0; row < 20; row++) {
          const yPos = row * (height + height * 0.1)
          let offset = -1
          for (let count = 0; count < 3; count++) {
            const block = mesh.clone()
            if (row % 2) {
              block.rotation.y = Math.PI / 2
              block.position.set(offset, yPos, 0)
            } else {
              block.position.set(0, yPos, offset)
            }
            scene.add(block)
            offset++
          }
        }
        const resize = () => {
          // camera.aspect = window.innerWidth / window.innerHeight
          // camera.updateProjectionMatrix()
          // renderer.setSize(window.innerWidth, window.innerHeight)
          camera.aspect = el.clientWidth / el.clientHeight
          camera.updateProjectionMatrix()
          renderer.setSize(el.clientWidth, el.clientHeight)
        }
        const update = () => {
          requestAnimationFrame(update)
          renderer.render(scene, camera)
        }
        window.addEventListener('resize', resize, false)
        update()
      }

      init()
    },
  },
}
</script>
<style lang="scss" scoped>
.threeJsWrapper {
  display: block;
  width: 200px;
  height: 200px;
}
</style>
