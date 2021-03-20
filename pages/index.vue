<template>
  <div>
    <header>
      <h1>Florian Schommertz</h1>
      <div class="avatar">Foto</div>
    </header>
    <main>
      <b-container>
        <b-row>
          <b-col cols="9">
            <pre>
Digital Noises + Florian Schommertz
Dipl. Sound Engineer, Dipl. Medien-Designer
</pre
            >
            {{ $route.params.id }}
          </b-col>
          <b-col>
            web · social media · av<br />
            design / ux / code / seo
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="9">
            <Education />
            <Experience />
          </b-col>
          <b-col>
            <Languages />

            <Technologies />
          </b-col>
        </b-row>
      </b-container>
    </main>
    <footer class="footer">
      <div class="text-center"></div>
    </footer>
  </div>
</template>

<script>
import Education from '~/components/Education.vue'
export default {
  components: { Education },
}
</script>

<style lang="scss" scoped></style>
