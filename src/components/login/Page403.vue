<template>
  <div class="right-side">
    <div class="card error">
      <div class="row">
        <div>
          <h1 class="text-center">403</h1>
          <h2 class="text-center">Forbidden</h2>
        </div>
        <div class="route text-center">
          <button type="button" class="btn btn-info m-l-50" @click="$router.push('/login')">Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Page403"
  }
</script>

<style scoped>

</style>
