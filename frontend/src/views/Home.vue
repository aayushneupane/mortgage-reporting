<template>
  <div class="home container">
    <form @submit.prevent="searchAccounts()" class="search-box">
      <input type="text" placeholder="Enter account detail" v-model="search" />
      <input type="submit" value="Search" />
    </form>
    <div class="accounts-list">
      <div class="account" v-for="account in accounts" :key="account">
        <router-link :to="'/account/' + account.id" class="account-link">
          <div class="product-image">
            <img :src="account.picture" alt="profile picture" />
            <div class="type">Type</div>
          </div>
          <div class="detail">
            <h3>{{ account.name_last }}, {{ account.name_first }}</h3>
            <p>{{ account.comments }}</p>
          </div>
        </router-link>
      </div>
    </div>
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
    const accounts = ref();
    const a = ref();

    const searchAccounts = () => {
      if (search.value != "") {
        console.log("search value:", search.value);
        fetch(`http://localhost:8080/api/account/?firstName=${search.value}`)
          .then((response) => response.json())
          .then((data) => {
            accounts.value = data;
            a.value = data[0];
            // search.value = "";
            console.log(accounts.value);
          })
          .catch((err) => {
            console.log("Not found. ", err.message);
          });
      }
    };

    return {
      search,
      accounts,
      searchAccounts,
      a,
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

  .accounts-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;

    .account {
      max-width: 300px;
      flex: 1 1 50%;
      padding: 16px 8px;

      .account-link {
        display: flex;
        flex-direction: column;
        height: 100%;

        .product-image {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }

          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42b883;
            color: #fff;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }

        .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;

          p {
            color: #fff;
          }
        }

        h3 {
          color: #fff;
          font-weight: 600;
          font-size: 18px;

          span {
            color: #42b883;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background-color: #141625;
}

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
}

.dark-purple {
  background-color: #252945;
}

.red {
  background-color: #ec5757;
}

.purple {
  background-color: #7c5dfa;
}

.green {
  background-color: #33d69f;
}

.orange {
  background-color: #ff8f00;
}

// utility classes

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;

  @media (min-width: 900px) {
    padding-top: 72px;
  }
}

.nav-link {
  text-decoration: none;
  color: initial;
}

// Status Button Styling

.status-button {
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  font-size: 12px;
  margin-right: 30px;
  align-items: center;
  padding: 8px 30px;
  border-radius: 10px;
}

.paid {
  &::before {
    background-color: #33d69f;
  }
  color: #33d69f;
  background-color: rgba(51, 214, 160, 0.1);
}

.pending {
  &::before {
    background-color: #ff8f00;
  }
  color: #ff8f00;
  background-color: rgba(255, 145, 0, 0.1);
}

.draft {
  &::before {
    background-color: #dfe3fa;
  }
  color: #dfe3fa;
  background-color: rgba(223, 227, 250, 0.1);
}
</style>