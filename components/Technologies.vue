<template>
  <div>
    <h2>technologies</h2>
    <h3>web development</h3>
    <ul>
      <li v-ranking="75">JavaScript</li>
      <li v-ranking="80">Vue.js</li>
      <li v-ranking="85">jQuery</li>
      <li v-ranking="90" class="mt-3">WordPress</li>
      <li v-ranking="45">Drupal</li>
      <li v-ranking="80" class="mt-3">PHP</li>
      <li v-ranking="60">MySql</li>
      <li v-ranking="98">CSS / animation</li>
      <li v-ranking="90">SASS / SCSS</li>
      <li v-ranking="90">HTML</li>
      <li v-ranking="60">SVG</li>
      <li v-ranking="80" class="mt-3">SEO</li>
      <li v-ranking="80">Performance</li>
      <li v-ranking="30" class="mt-3">Threejs</li>
      <li v-ranking="75">PWA</li>
      <li v-ranking="75">SPA</li>
      <li v-ranking="50" class="mt-3">Docker</li>
      <li v-ranking="65">git</li>
      <li v-ranking="55">node.js</li>
      <li v-ranking="70" class="mt-3">RESTful APIs</li>
      <li v-ranking="70">JSON</li>
      <li v-ranking="35">GraphQl</li>
      <li class="mt-3">Basic knowledge:</li>
      <li>node.js, i18n, ssr, vite, vitepress, elementor</li>
    </ul>
    <h3 class="mt-5">design & concept</h3>
    <ul>
      <li v-ranking="100">Illustrator</li>
      <li v-ranking="100">Lightroom</li>
      <li v-ranking="85">Photoshop</li>
      <li v-ranking="80">Indesign</li>
      <li v-ranking="60">Adobe XD</li>
      <li v-ranking="70">Ui/UX</li>
    </ul>
    <h3 class="mt-5">Audio & Video</h3>
    <ul>
      <li v-ranking="100">Logic Audio</li>
      <li v-ranking="50">Native Instruments</li>
      <li v-ranking="60">Final Cut</li>
      <li v-ranking="60">Motion</li>
    </ul>
    <h3 class="mt-5">UI/UX/CI/CJ/CX</h3>

    <!-- <DoSomeThree zoom="4" />
<DoSomeThree zoom="5" />
<DoSomeThree zoom="6" />
<DoSomeThree zoom="7" />
<DoSomeThree zoom="8" />
<DoSomeThree zoom="9" /> -->
  </div>
</template>
<script>
export default {
  name: 'Technologies',
  directives: {
    ranking(el, binding) {
      el.style.setProperty('--ranking', `${binding.expression}`)
    },
  },
}
</script>
<style lang="scss" scoped>
ul {
  padding: none;
  li {
    + li {
      margin-top: 0.25em;
    }
    display: grid;
    grid-gap: 1em;
    list-style: none;
    grid-template-columns: 2fr 3fr;
    position: relative;
    align-items: center;

    &:before {
      display: block;
      justify-self: end;
      content: '\00A0';
      font-size: 0;
      line-height: 0;
      height: 0.75rem;
      width: calc(var(--ranking) * 1%);
      border-radius: 0.75rem;
      background: #fff;
    }
  }
}
</style>
