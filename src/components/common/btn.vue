<template>
  <div :class="`__btn ${className}`">
    <span class="btn" type="button" @click="onClick">
      <b flex="main:center cross:center">{{text}}</b><u class='ui-loading'></u>
    </span>
  </div>
</template>
<script>
import is from 'is'
export default {
  data () {
    return {
    }
  },
  props: [
    "text",
    "disabled",
    "inline",
    "loading"
  ],
  computed: {
    className() {
      let {
        inline,
        disabled,
        loading
      } = this.$props
      let klass = []
      if (!is.undefined(inline)) klass.push("inline")
      if (disabled) klass.push("disabled")
      if (loading) klass.push("loading")
      return klass.join(" ")
    }
  },
  mounted() {
  },
  methods: {
    onClick() {
      let disabled = this.$props.disabled
      if (!disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import (less) "../../styles/mixin.less";
  .__btn{
    border: 1px solid @themeColor;
    background: @themeColor;
    &.inline{
      display: inline-block;
    }
    &.disabled{
      border: 1px solid @disableColor;
      background: @disableColor;
    }
    &:active:not(.disabled){
      background: darken(@themeColor, 10%);
    }
    .btn {
      background: transparent;
      position: relative;
      color: #fff;
      box-shadow: none;
      outline: none;
      -webkit-appearance: none;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      width: 100%;
      height: 0.858rem;
      font-size: 0.280rem;
      border-radius: 0;
      display: inline-block;
      b{
        height: 100%;
      }
    }
  }
  .ui-loading,
  .ui-loading:after,
  .ui-loading:before {
    width: 5px;
    height: 10px;
    -webkit-animation: loading 1.4s infinite linear;
    animation: loading 1.4s infinite linear;
    background: #fff;
  }
  .ui-loading {
    position: absolute;
    margin: 0 auto;
    display: none;
    padding: 0 !important;
    opacity: 0.1;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    left: 50%;
    margin-left: -4px;
    top: 50%;
    margin-top: -6px;
  }
  .ui-loading:after,
  .ui-loading:before {
    content: "";
    position: absolute;
  }
  .ui-loading:after {
    margin-right: auto;
    left: -6px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .ui-loading:before {
    margin-right: auto;
    left: 6px;
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  .loading .ui-loading {
    display: block;
  }
  .loading b {
    visibility: hidden;
  }
  @-webkit-keyframes loading {
    0%, 100% {
      opacity: 0.1;
    }
    30% {
      opacity: 1;
    }
  }
  @keyframes loading {
    0%, 100% {
      opacity: 0.1;
    }
    30% {
      opacity: 1;
    }
  }
</style>