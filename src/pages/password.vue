<template>
  <div class="login">
    <Header :title="''" :backpath="'/index'"></Header>
    <h1 class="login-title">{{title.h1}}</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
      <el-form-item label="" prop="pass">
        <el-input type="text" v-model="ruleForm.pass" placeholder="请输入密码" ></el-input>
      </el-form-item>
      <el-form-item label="" prop="checked" style="padding-left:10px">
        <el-checkbox v-model="ruleForm.checked">已阅读并同意《任租客用户租赁通知与协议》</el-checkbox>
      </el-form-item>
      <el-button round size="medium" @click="submitForm('ruleForm')">{{title.sbt}}</el-button>
    </el-form>
  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  data () {
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
    var validatechecked = (rule, value, callback) => {
      if (value === false) {
        callback(new Error('请阅读《任租客用户租赁通知与协议》后选中'))
      } else {
        callback()
      }
    }
    return {
      title: {
        h1: '设置密码',
        p: '',
        p2: '使用验证码登录',
        sbt: '完成'
      },
      ruleForm: {
        pass: '',
        checked: false
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checked: [
          { validator: validatechecked, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    Header
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.$router.push({
            path: '/index'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .login
    width 100%
    .login-title
      width 140px
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
      width 110px
      height 40px
      border-bottom 6px solid #fcc609
      z-index -1
      position absolute
      bottom 6px
      right 8px
    .login-des
      color #dcdcdc
      padding-left 4%
  .demo-ruleForm
    margin 40px 5% 5%
    .el-button--medium
      width 80%
      margin 30px 10% 0
      border none
      color #fff
      background: linear-gradient(to bottom right, #ffd801, #fdc20c);
</style>
