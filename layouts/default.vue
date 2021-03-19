<template>
  <div>
    <Nuxt />
  </div>
</template>
<style lang="scss">
header,
footer {
  width: 100%;
  position: fixed;
  background: #fff;
  z-index: 2;
}
header {
  top: 0;
  border-bottom: 1px solid #000;
  display: flex;
  padding: 0.2rem 1rem;
  h1 {
  }
  div.avatar {
    margin-left: auto;
    border-radius: 100%;
    background: #ddd;
    width: 50px;
    height: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
main {
  margin-top: 100px;
  margin-bottom: 20px;
}
footer {
  bottom: 0;
  border-top: 1px solid #000;
}
</style>
