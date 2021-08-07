<template>
  <div class="home">
    <div class="featured-card">
      <router-link to="/account/9c236bbf-7d55-4393-8f56-731009a13538">
        <img
          src="https://i.pravatar.cc/280"
          alt="This person"
          class="featured-image"
        />
        <div class="detail">
          <h3>Verna</h3>
          <p>
            ariatur ad ea esse. Cillum ex laboris quis culpa culpa ex
            adipisicing esse pariatur non nisi
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="searchAccounts()" class="search-box">
      <input type="text" placeholder="Enter account detail" v-model="search" />
      <input type="submit" value="Search" />
    </form>
    <div class="account-list">ACCOUNTS</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from "vue";
export default {
  setup() {
    const search = ref("");
    const accounts = ref([]);

    const searchAccounts = () => {
      if (search.value != "") {
        console.log("search value:", search.value);
      }
    };

    return {
      search,
      accounts,
      searchAccounts,
    };
  },
};
</script>

<style lang="scss">
.home {
  .featured-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;
      width: 100%;
    }

    h3 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    align-items: center;
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: #fff;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #43b883;
        padding: 16px;
        border-radius: 8px;
        font-size: 20px;
        color: #fff;
        text-transform: uppercase;

        &:active {
          background-color: #3b8070;
        }
      }
    }
  }
}
</style>