<style lang="less" scoped>
#login {
  padding: .5rem .2rem .4rem;
}
.protocol {
  margin-top: .4rem;
  text-align: center;
  font-size: .26rem;
  color: #9B9B9B;
  a {
    color: #F2BB62;
  }
}
</style>

<template>
	<div id="login">
    <div style="text-align:center;margin:.3rem">
      <img src="../../images/logo.png" style="width:60%;">
    </div>
		<v-login></v-login>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>


