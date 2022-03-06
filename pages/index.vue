<template>
  <main>
    <!-- Inspired by: https://codepen.io/natewiley/pen/Ciwyn -->
    <div id="p-container" role="presentation">
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
      <div class="p"></div>
    </div>

    <div twocolumngrid>
      <FlorianSchommertz
        class="hasGridAreaVar"
        style="--gridArea: FlorianSchommertz"
      />
      <FlorianSlogan class="hasGridAreaVar" style="--gridArea: FlorianSlogan" />
      <FlorianAddress
        class="hasGridAreaVar"
        style="--gridArea: FlorianAddress"
      />

      <Portfolio class="hasGridAreaVar" style="--gridArea: Portfolio" />

      <Languages
        class="Languages hasGridAreaVar"
        style="--gridArea: Languages"
      />
      <Technologies class="hasGridAreaVar" style="--gridArea: Technologies" />
      <!--
       -->
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
/* alegreya-sans-regular - latin */
@font-face {
  font-family: 'Alegreya Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
    url('/fonts/alegreya-sans-v20-latin/alegreya-sans-v20-latin-regular.woff2')
      format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('/fonts/alegreya-sans-v20-latin/alegreya-sans-v20-latin-regular.woff')
      format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* alegreya-sans-800 - latin */
@font-face {
  font-family: 'Alegreya Sans';
  font-style: normal;
  font-weight: 800;
  src: local(''),
    url('/fonts/alegreya-sans-v20-latin/alegreya-sans-v20-latin-800.woff2')
      format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('/fonts/alegreya-sans-v20-latin/alegreya-sans-v20-latin-800.woff')
      format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* alegreya-sans-900 - latin */
@font-face {
  font-family: 'Alegreya Sans';
  font-style: normal;
  font-weight: 900;
  src: local(''),
    url('/fonts/alegreya-sans-v20-latin/alegreya-sans-v20-latin-900.woff2')
      format('woff2'),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('/fonts/alegreya-sans-v20-latin/alegreya-sans-v20-latin-900.woff')
      format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
:root {
  --v: 1.2vmin;
  font-size: 1.2vw;
  font-family: 'Alegreya Sans', Helvetica, Arial, sans-serif;
}
@media screen and (max-width: 1400px) {
  :root {
    font-size: 18px;
  }
}
body {
  background: #ccc;
}
pre {
  font-family: inherit;
  white-space: pre-wrap;
}
a {
  position: relative;
  text-decoration: none;
  color: #000;
  width: 100%;
  border-bottom: 1px transparent dotted;
  padding: 0 0em;
}
a:hover {
  border-bottom-color: #000;
  color: #000;
  text-align: right;
  padding: 0 0.5em;
  transition: padding 0.3s ease-in-out;
}
a:visited {
  color: #777;
}
a:before {
  background: #fff;
  content: '';
  inset: 0;
  position: absolute;
  transform: scaleX(0) scaleY(1.5);
  transform-origin: right;
  transition: transform 0.2s ease-in-out;
  z-index: -1;
}

a:hover:before {
  transform: scaleX(1) scaleY(1.5);
  transform-origin: left;
}
p {
  padding: 0 0 2em 0;
}
[twocolumngrid] {
  display: grid;
  max-width: 80vw;
  margin: 0 auto;
  gap: 2em;

  grid-template-columns: 3fr 1fr;

  grid-template-areas:
    'FlorianSchommertz FlorianSlogan'
    'FlorianAddress .'
    'Portfolio Languages'
    'Portfolio Technologies'
    'Portfolio .';
}

@media (max-width: 1200px) {
  [twocolumngrid] {
    max-width: 87vw;
    grid-template-columns: 2fr 1fr;
  }
}
@media (max-width: 1000px) {
  [twocolumngrid] {
    max-width: 90vw;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 767px) {
  [twocolumngrid] {
    max-width: 90vw;
    grid-template-columns: 1fr;
    grid-template-areas:
      'FlorianSlogan'
      'FlorianSchommertz'
      'FlorianAddress'
      'Languages'
      'Technologies'
      'Portfolio';
  }
}

.hasGridAreaVar {
  grid-area: var(--gridArea);
}

.p {
  position: absolute;
  border-radius: 50%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 1em;
}
h1,
h2 {
  font-weight: bold;
}
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
@keyframes p-animation-main {
  0% {
    transform: perspective(1000px) rotateY(0deg) translateZ(-25px);
  }
  100% {
    transform: perspective(1000px) rotateY(360deg) translateZ(-25px);
  }
}
#p-container {
  animation: p-animation-main 20s linear infinite;
  height: 80vh;
  width: 100vw;
  position: fixed;
  // background: #030;
}
@for $i from 1 through 30 {
  @keyframes p-animation-#{$i} {
    100% {
      transform: translate3d(
        calc(random(90) * var(--v)),
        (random(90) * 1.2vh),
        (random(100) * 1px)
      );
    }
  }

  .p:nth-child(#{$i}) {
    animation: p-animation-#{$i} 60s infinite;
    $size: random(5) + 5 + px;
    opacity: random(100) / 100;
    height: $size;
    width: $size;
    animation-delay: -$i * 2s;
    transform: translate3d(
      (random(90) * 1vw),
      (random(90) * 1vh),
      (random(100) * 1px)
    );
    background: hsl(random(360), 70%, 99%);
  }
}
</style>
