<template>
  <div>
    <h2>Technologies</h2>
    <h3>Web Development</h3>
    <ul>
      <li v-ranking="75">JavaScript</li>
      <li v-ranking="80">Vue.js</li>
      <li v-ranking="85">jQuery</li>
      <li v-ranking="85">WordPress</li>
      <li v-ranking="70">PHP</li>
      <li v-ranking="60">MySql</li>
      <li v-ranking="98">CSS / animation</li>
      <li v-ranking="90">SASS / SCSS</li>
      <li v-ranking="90">HTML</li>
      <li v-ranking="60">SVG</li>
      <li v-ranking="80">SEO</li>
      <li v-ranking="80">Performance</li>
      <li v-ranking="40">Threejs</li>
      <li v-ranking="70">PWA</li>
      <li v-ranking="70">SPA</li>
      <li v-ranking="50">Docker</li>
      <li v-ranking="50">git</li>
      <li v-ranking="50">node.js</li>
      <li v-ranking="60">RESTful APIs</li>
      <li v-ranking="70">JSON/GraphQl</li>
      <li>Basic knowledge:</li>
      <li>webpack, angular, react, aws, keycloak, mongo, vite</li>
      <li>No knowledge:</li>
      <li>Azure, C/C#, Python, .NET</li>
    </ul>
    <h3>design & concept</h3>
    <ul>
      <li v-ranking="100">Illustrator</li>
      <li v-ranking="100">Lightroom</li>
      <li v-ranking="85">Photoshop</li>
      <li v-ranking="80">Indesign</li>
      <li v-ranking="50">Adobe XD</li>
      <li v-ranking="70">Ui/UX</li>
    </ul>
    <h3>Audio & Video</h3>
    <ul>
      <li v-ranking="100">Logic Audio</li>
      <li v-ranking="50">Native Instruments</li>
      <li v-ranking="80">Final Cut</li>
      <li v-ranking="80">Motion</li>
    </ul>
    <h3>UI/UX/CI/CJ/CX</h3>
  </div>
</template>
<script>
export default {
  name: 'Technologies',
  directives: {
    ranking(el, binding) {
      el.style.setProperty('--ranking', `${binding.expression}%`)
    },
  },
}
</script>
<style lang="scss" scoped>
li {
  display: flex;
  &:before {
    display: block;
    content: '\00A0';
    font-size: 0;
    line-height: 0;
    height: 1.5rem;
    width: calc(var(--ranking) * 0.4);
    background: red;
    margin-right: 0.2rem;
  }
}
</style>
