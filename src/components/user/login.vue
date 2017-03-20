<style lang="less" scoped>
input {
  background: #F2F2F2;
  outline: none;
  height: 0.858rem;
}
.login-info {
  background: #ffffff;
  font-size: .28rem;
  margin-bottom: .2rem;
}
.phone-area {
  height: .9rem;
  margin-bottom: .2rem;
  background: #F2F2F2;
  label span {
    line-height: .88rem;
    margin: 0 .3rem 0 .16rem;
    font-size: .3rem;
    font-weight: bold;
  }
}
.code-area {
  margin-bottom: .2rem;
  label {
    display: inline-block;
    height: .9rem;
    background: #F2F2F2;
    span {
      line-height: .88rem;
      margin: 0 .3rem 0 .16rem;
      font-size: .3rem;
      font-weight: bold;
    }
  }
  input {
    width: 2rem;
  }
}
.code-area {
  label {
    width: 4.5rem;
  }
}
.get-code {
  display: inline-block;
  vertical-align: middle;
  height: .9rem;
  line-height: .88rem;
  float: right;
  width: 2.4rem;
  text-align: center;
  color: #ffffff;
  background: #F2BB62;
  :disabled {
    background: #D9D9D9;
  }
}
.voice-code {
  color: #F2BB62;
  font-size: .26rem;
  display: inline-block;
}
.login-btn{
  margin-top: .6rem;
}
</style>
<template>
  <div>
    <div class="login-info">
      <div class="phone-area">
        <label>
          <span>手机号</span>
          <input type="number" v-model="mobileNo" placeholder-style="color:#b2b2b2" placeholder="请输入手机号" @input="checkPhone"/>
        </label>
      </div>
      <div class="code-area">
        <label>
          <span>验证码</span>
          <input type="number" v-model="capt" placeholder-style="color:#b2b2b2" placeholder="请输入验证码" @input="CHECK_CAPT(capt)"/>
        </label>
        <v-btn
          :text="isActive == 2 ? `${count}秒` : '获取验证码'"
          :disabled="isActive != 1"
          inline
          @click="getCode(0)"
          style="height:.9rem;width:2.4rem;float:right"
        ></v-btn>
      </div>
    </div>
    <div>
      <v-btn class="login-btn" text="登录" :disabled="!isLogin" @click="onLogin"></v-btn>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { CHECK_PHONE, CHECK_CAPT, GET_CODE } from '../../stores/login'
export default {
  data() {
    return {
      mobileNo: '',
      capt: ''
    }
  },
  methods: {
    ...mapActions([CHECK_PHONE, CHECK_CAPT, GET_CODE]),
    checkPhone() {
      let that = this
      that.CHECK_PHONE(that.mobileNo)
      that.CHECK_CAPT(that.capt)
    },
    getCode(type = 0) {
      this.GET_CODE()
      let {
        mobileNo
      } = this
      let params = {
        mobileNo,
        isvoice: type
      }
      this.post('usermgr/getverifycode.do', params, (data) => {
        console.log("success======", data)
      }, (data) => {
        console.log("error======", data)
      })
      this.isActive = 2
      setTimeout(() => {
        this.count--
      }, 1000)
    },
    onLogin() {
      console.log('login~~')
      let {
        mobileNo,
        capt
      } = this
      let params = {
        mobileNo,
        capt
      }
      this.post('usermgr/login.do', params, (data) => {
        console.log("success======", data)
      }, (data) => {
        console.log("error======", data)
      })
    }
  },
  watch: {
  },
  mounted() {
  },
  computed: mapState({
    isActive: (state) => state.login.isActive,
    isLogin: (state) => state.login.isLogin,
    count: (state) => state.login.count,
    codeFacus: (state) => state.login.codeFacus,
    loading: (state) => state.login.loading
  })
}
</script>