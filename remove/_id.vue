<template>
  <div>
    <header>
      <h1>Florian Schommertz</h1>
      <div class="avatar">Foto</div>
    </header>
    <main>
      <b-container>
        <b-row>
          <b-col>
            <pre>
Digital Noises + Florian Schommertz
Dipl. Sound Engineer, Dipl. Medien-Designer
            </pre>
            {{ $route.params.id }}
          </b-col>
        </b-row>
      </b-container>
      <Education />
    </main>
    <footer class="footer">
      <div class="text-center"></div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
