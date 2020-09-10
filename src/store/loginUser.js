// 登录用户 的仓库数据
import { login, loginOut, whoAmI } from "../services/userService";
export default {
  // 默认的都是在全局的命名空间,如果分发一个action或者提交一个mutation其他没有开启命名空间的同名函数都会响应,这样不是我们想要的,所以在使用mapState,mapMutations, mapActions,mapGetters这些辅助函数时就需要开启命名空间
  // 开启命名空间,作用是给当前模块加上锁,在全局调用dispatch这些方法的时候,全局其他地方同名action不会执行,
  namespaced: true,
  state: {
    data: null, // 当前登录的用户
    isLoading: false, // 是否正在远程加载中
  },
  mutations: {//只能做同步没有副作用的操作,commit 一个 mutation是改变数据的唯一方法
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: { //异步的操作,有副作用的操作要放在action里面,
    /**
     * 
     * @param {*} context 与 store 实例具有相同方法和属性的对象
     * @param {*} payload 
     * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
     */

    async login(context, payload) {
      context.commit("setIsLoading", true);
      var resp = await login(payload); // {code:0, msg:"", data:xxx}
      var result = false;
      if (resp.code === 0) {
        // 登录成功
        context.commit("setData", resp.data);
        result = true;
      }
      context.commit("setIsLoading", false);
      return result;
    },
    async whoAmI(context) {
      context.commit("setIsLoading", true);
      var resp = await whoAmI();
      context.commit("setData", resp);
      context.commit("setIsLoading", false);
    },
    loginOut(context) {
      loginOut();
      context.commit("setData", null);
    },
  },
};
