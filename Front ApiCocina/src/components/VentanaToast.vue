<script setup>

const props=defineProps({
  verToast: {
    type: Boolean,
    required: true
  },

  mensajeToast: {
    type: String,
    required: true
  }

})

</script>

<template>

  <div :class="['toast',{ visible:verToast }]">
    <h2>{{ mensajeToast }}</h2>
  </div>


</template>

<style scoped>
  .toast {
    position: fixed;
    top: 50px;
    right: 50px;
    min-width: 200px;
    background-color: #727272;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    border-radius: 30px;
  }

  .toast.visible {
    display: flex;
    scale: 1;
    transition: scale 0.5s;

    @starting-style {
      scale: 0;
    }

  }

  h2 {
    color: white;
    background-color: #727272;
    padding: 10px;
    border-radius: 5px;
    right: 0;
  }


</style>