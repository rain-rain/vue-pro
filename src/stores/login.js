import Vue from 'vue'
import { checkPhone } from '../scripts/utils/validator.js'
export const CHECK_PHONE = 'CHECK_PHONE'
export const CHECK_CAPT = 'CHECK_CAPT'
export const GET_CODE = 'GET_CODE'
export default {
  state: {
    isActive: -1,
    isLogin: false,
    count: '60',
    codeFacus: false,
    loading: false,
    isCapt: false
  },
  mutations: {
    [CHECK_PHONE] (state, mobileNo) {
      console.log(mobileNo, checkPhone(mobileNo))
      if (checkPhone(mobileNo)) {
        state.isActive = 1
      } else {
        state.isActive = -1
      }
    },
    [CHECK_CAPT] (state, capt) {
      if (capt != "") {
        state.isCapt = true
      } else {
        state.isCapt = false
      }
      if (state.isCapt && state.isActive == 1) {
        state.isLogin = true
      } else {
        state.isLogin = false
      }
    },
    [GET_CODE] (state, countdown) {
      if (countdown == 0) {
        state.isActive = 1
        return
      } else {
        state.isActive = 2
        state.count = countdown
        console.log("countdown", countdown, "state.count", state.count)
      }
    }
  },
  actions: {
    [CHECK_PHONE] ({ commit }, mobileNo, capt) {
      commit(CHECK_PHONE, mobileNo, capt)
    },
    [CHECK_CAPT] ({ commit }, capt) {
      commit(CHECK_CAPT, capt)
    },
    [GET_CODE] ({ commit }) {
      // commit(GET_CODE, 60)
      // setTimeout(function() {
      //   commit(GET_CODE)
      // }, 1000)
      var countdown = 60
      function settime() {
        if (countdown == 0) {
          commit(GET_CODE, countdown)
          return
        } else {
          countdown--
          commit(GET_CODE, countdown)
        }
        setTimeout(function() {
          settime()
        }, 1000)
      }
      settime()
    }
  }
}