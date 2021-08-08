<template>
  <div class="account-detail">
    <h2>{{ account.name_last }}, {{ account.name_first }}</h2>
    <img :src="account.picture" alt="profile picture" class="featured-img" />

    <p>{{ account.comments }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const account = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`http://localhost:8080/api/account/${route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          account.value = data;
          console.log(account.value);
        })
        .catch((err) => {
          console.log("Not found. ", err.message);
        });
    });

    return {
      account,
    };
  },
};
</script>

<style lang="scss">
.account-detail {
  padding: 16px;

  h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .featured-img {
    display: block;
    max-width: 400px;
    margin-bottom: 16px;
  }

  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>