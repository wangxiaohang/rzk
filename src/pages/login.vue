<template>
<div class="login">
  <h1 class="login-title">{{title.h1}}</h1>
  <p class="login-des">{{title.p}}<span v-show="title.h1=='登录'" style="color:#fcdd7d" @click="toRegister()">注册 </span></p>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
    <el-form-item label="" prop="phone">
      <el-input type="text" v-model="ruleForm.phone" placeholder="请输入手机号码" ></el-input>
    </el-form-item>
    <el-form-item label="" prop="pass" v-if="isPassValidate">
      <el-input type="text" v-model="ruleForm.pass" placeholder="请输入密码" ></el-input>
    </el-form-item>
    <el-form-item label="" prop="VerificationCode" v-else>
      <el-input type="text" v-model="ruleForm.VerificationCode" placeholder="请输入验证码" ></el-input>
      <el-button style="position:absolute;top:0;right:10px" round>点击发送</el-button>
    </el-form-item>
    <el-button round size="medium" @click="submitForm('ruleForm')">{{title.sbt}}</el-button>
  </el-form>
  <p v-show="title.h1=='登录'" style="width:100%;text-align: center"><span style="color:#dcdcdc" @click="loginFromValidateCode">{{title.p2}} </span></p>
</div>
</template>
<script>
export default {
  data () {
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else {
        var reg = /^1[0-9]{10}$/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('手机号码格式不正确'))
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        var reg = /^[A-Za-z0-9]{6,16}$/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入6-16位密码，包含字母、数字和下划线'))
        }
        callback()
      }
    }
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }
    return {
      title: {
        h1: '登录',
        p: '还没有账号立即',
        p2: '使用验证码登录',
        sbt: '提交'
      },
      isPassValidate: true,
      ruleForm: {
        phone: '',
        pass: '',
        VerificationCode: ''
      },
      rules: {
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        VerificationCode: [
          { validator: validateCode, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          if (this.title.sbt === '下一步') {
            this.$router.push({
              path: '/index'
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    toRegister () {
      this.title.h1 = '注册'
      this.title.p = '欢迎注册账号'
      this.title.sbt = '下一步'
      this.isPassValidate = false
    },
    loginFromValidateCode () {
      if (this.title.p2 === '使用验证码登录') {
        this.isPassValidate = false
        this.title.p2 = '使用密码登录'
      } else {
        this.isPassValidate = true
        this.title.p2 = '使用验证码登录'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.login
  width 100%
  .login-title
    width 70px
    height 40px
    line-height 40px
    font-size 24px
    text-align center
    position relative
    margin-top 30px
    padding-left 4%
    z-index 10
  .login-title:after
    content ""
    display block
    width 55px
    height 40px
    border-bottom 6px solid #fcc609
    z-index -1
    position absolute
    bottom 6px
  .login-des
    color #dcdcdc
    padding-left 4%
.demo-ruleForm
  margin 40px 5% 5%
  .el-button--medium
   width 80%
   margin 30px 10% 0
   border none
   background: linear-gradient(to bottom right, #ffd801, #fdc20c);
</style>
