<template>
  <main>
    <!-- Inspired by: https://codepen.io/natewiley/pen/Ciwyn -->
    <div id="p-container">
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
    <b-container>
      <b-row class="row">
        <b-col cols="9">
          Florian Schommertz<br />
          Dipl. Sound Engineer<br />
          Dipl. Medien-Designer
        </b-col>
        <b-col>
          web · social media · av<br />
          design / ux / code / seo
        </b-col>
        <b-col class="mt">
          <p>
            Consultant for:<br />
            Audio Video<br />
            Website-Performance<br />
            WordPress Themes<br />
            UX
          </p>
          <p>
            f@schommertz.com // tel: +49 2434.30 83 890<br />
            skype: florianschommertz // nz: +64 22 089 5068
          </p>
          <p>
            Germany + Sankt Rochusweiler 13a + 41844 Wegberg // USt-IdNr.:
            DE195532753<br />New Zealand + 9 Dalmeny Close + Murrays Bay, North
            Shore, 0630 co. Thomas<br />
            https://florian.schommertz.com ++++
          </p>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
:root {
  --v: 1.2vmin;
}
.row {
  & + .row,
  .mt {
    margin-top: 2em;
  }
}
body {
  background: #ccc;
}

.p {
  position: absolute;
  border-radius: 50%;
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
    animation-delay: -$i * 0.2s;
    transform: translate3d(
      (random(90) * 1vw),
      (random(90) * 1vh),
      (random(100) * 1px)
    );
    background: hsl(random(360), 70%, 99%);
  }
}
</style>
