<template>
    <div v-if="errorsList.length > 0">
      <h2>There was an error fetching weather data.</h2>
      <ul class="errors">
        <li v-for="error in errorsList">{{ error }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ErrorsList',
  data () {
    return {
    }
  },
  props: {
      errorsList: []
  }
}
</script>

<style scoped>
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
</style>


