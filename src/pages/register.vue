<template>
  <div class="login">
    <Header :title="'注册'" :backpath="'/index'"></Header>
    <h1 class="login-title">注册</h1>
    <p class="login-des">欢迎注册账号</p>
    <el-form :model="ruleForm" v-if="isPassValidate" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
      <el-form-item label="" prop="name">
        <el-input type="text" v-model="ruleForm.name" maxlength='16'  placeholder="请输入用户名" ></el-input>
      </el-form-item>
      <el-form-item label="" prop="email">
        <el-input type="text" v-model="ruleForm.email"   placeholder="邮箱" ></el-input>
      </el-form-item>
      <el-form-item label="" prop="pass" v-if="isPassValidate">
        <el-input type="password" v-model="ruleForm.pass" maxlength='16' placeholder="请输入密码" ></el-input>
      </el-form-item>
      <el-form-item label="" prop="phone">
        <el-input type="text" v-model="ruleForm.phone" maxlength='11' placeholder="请输入手机号码" ></el-input>
      </el-form-item>
      <el-form-item label="" prop="VerificationCode">
        <el-input type="text" v-model="ruleForm.VerificationCode" placeholder="请输入验证码" ></el-input>
        <el-button style="position:absolute;top:0;right:10px" round @click="sendCode">点击发送</el-button>
      </el-form-item>
      <el-button round size="medium" @click="submitForm('ruleForm')">下一步</el-button>
    </el-form>
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
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入正确的邮箱格式'))
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
        email: '',
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
        email: [
          { validator: validateEmail, trigger: 'blur' }
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
    register () {
      var self = this
      let params = {
        username: self.ruleForm.name,
        password: self.ruleForm.pass,
        email: self.ruleForm.email,
        mobilePhoneNumber: self.ruleForm.phone
      }
      Bmob.User.register(params).then(res => {
        console.log(res)
        self.checkEmail(self.ruleForm.email)
        self.$router.push({
          path: '/login'
        })
      }).catch(err => {
        console.log(err)
        self.$message.error(err.error)
      })
    },
    sendCode () {
      let params = {
        mobilePhoneNumber: this.ruleForm.phone
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
          self.register()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    checkEmail: function (value) {
      Bmob.User.requestEmailVerify(value).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
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
