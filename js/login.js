import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";

const apiUrl = "https://vue3-course-api.hexschool.io/v2";
const apiPath = "mingyo";

// app => Vue實體
const app = createApp({
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post(`${apiUrl}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          // 寫入 cookie token
          document.cookie = `token=${token};expires=${new Date(expired)}; path=/`;
          window.location = "products.html";
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
  mounted() {},
});
// 掛載
app.mount("#app");
