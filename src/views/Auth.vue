<template>
  <Center>
    <h1>登录验证中...权鉴页面</h1>
  </Center>
</template>

<script>
import Center from "@/components/Center";
import { mapState } from "vuex";
export default {
  components: {
    Center,
  },
  // mapState刚好是computed所需的计算属性,如果还要添加其他属性就加{}展开就行,一样的
  computed: mapState("loginUser", ["data", "isLoading"]),// 如果需要其他属性就展开就行
  methods: {
    handleLogin() {
      if (this.isLoading) {
        return;
      }
      if (this.data) {
        if (this.$route.query.returnurl) {
          this.$router.push(this.$route.query.returnurl);
        } else {
          this.$router.push({ name: "Personal" });
        }
      } else {
        this.$router.push({ name: "Login" });
      }
    },
  },
  watch: {
    data: {
      immediate: true,
      handler() {
        this.handleLogin();
      },
    },
    isLoading: {
      immediate: true,
      handler() {
        this.handleLogin();
      },
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2em;
}
</style>
