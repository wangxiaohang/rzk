<template>
<div class="login">
  <Header :title="'登录'" :backpath="'/index'"></Header>
  <h1 class="login-title">{{title.h1}}</h1>
  <p class="login-des">{{title.p}}<span v-show="title.h1=='登录'" style="color:#fcdd7d" @click="toRegister()">注册 </span></p>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
    <el-form-item label="" prop="name" v-if="isPassValidate">
      <el-input type="text" v-model="ruleForm.name" maxlength='16'  placeholder="请输入用户名" ></el-input>
    </el-form-item>
    <el-form-item label="" prop="phone" v-else>
      <el-input type="text" v-model="ruleForm.phone" maxlength='11' placeholder="请输入手机号码" ></el-input>
    </el-form-item>
    <el-form-item label="" prop="pass" v-if="isPassValidate">
      <el-input type="password" v-model="ruleForm.pass" maxlength='16' placeholder="请输入密码" ></el-input>
    </el-form-item>
    <el-form-item label="" prop="VerificationCode" v-else>
      <el-input type="text" v-model="ruleForm.VerificationCode" placeholder="请输入验证码" ></el-input>
      <el-button style="position:absolute;top:0;right:10px" round @click="sendCode">点击发送</el-button>
    </el-form-item>
    <p v-show="isPassValidate" style="width:100%;text-align: right; margin-top:20px;">
      <span style="color:#dcdcdc" @click="forgetPass">忘记密码去设置》 </span>
    </p>
    <el-button round size="medium" @click="submitForm('ruleForm')">{{title.sbt}}</el-button>
  </el-form>
  <p v-show="title.h1=='登录'" style="width:100%;text-align: center"><span style="color:#dcdcdc" @click="loginFromValidateCode">{{title.p2}} </span></p>
</div>
</template>
<script>
import Header from '@/components/Header'
import Bmob from 'hydrogen-js-sdk'
Bmob.initialize('bd871ea12dc290abce3d439aa8cd12aa', '5c7a9c2c9b82387a615d8a674e1ebc78')

export default {
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
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
        name: '',
        phone: '',
        pass: '',
        VerificationCode: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
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
  components: {
    Header
  },
  methods: {
    login () {
      var self = this
      Bmob.User.login(self.ruleForm.name, self.ruleForm.pass).then(res => {
        console.log(res)
        this.$router.push({
          path: '/index'
        })
      }).catch(err => {
        console.log(err)
        self.$message.error('用户名或验证码错误')
      })
    },
    loginByPhone () {
      var self = this
      Bmob.User.signOrLoginByMobilePhone(self.ruleForm.phone, self.ruleForm.VerificationCode).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    sendCode () {
      let params = {
        mobilePhoneNumber: '18755267637'
      }
      Bmob.requestSmsCode(params).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    submitForm (formName) {
      var self = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isPassValidate) {
            self.login()
          } else {
            self.loginByPhone()
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    forgetPass () {
      this.$router.push({
        path: '/password'
      })
    },
    toRegister () {
      this.$router.push({
        path: '/register'
      })
    },
    loginFromValidateCode () {
      /**
       * //短信验证码resultAPI 用尽
       * if (this.title.p2 === '使用验证码登录') {
       *  this.isPassValidate = false
       *  this.title.p2 = '使用密码登录'
       * } else {
       *  this.isPassValidate = true
       *  this.title.p2 = '使用验证码登录'
       * }
       **/
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
    margin-top 15px
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
