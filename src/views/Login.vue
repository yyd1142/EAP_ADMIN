<template>
    <div class="login">
        <div class="login-bar">
            <span class="text">深圳巴士集团EAP管理后台</span>
        </div>
    
        <div class="form">
            <div class="header">欢迎使用EAP管理后台</div>
            <div class="main">
                <mu-text-field hintText="请输入账号" class="form-field" :underlineShow="true" />
                <!-- <mu-divider/> -->
                <mu-text-field hintText="请输入密码" class="form-field" type="password" :underlineShow="true" />
                <!-- <mu-divider/> -->
                <mu-checkbox label="下次自动登录" class="form-checkbox" />
                <!-- <mu-divider/> -->
                <mu-raised-button label="登录" class="login-btn" fullWidth @click="login()"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        login() {
            this.$router.push('/activity')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login {
    width: 100vw;
    .login-bar {
        width: 100vw;
        height: 200px;
        background-color: #7e57c2;
        display: table;
        .text {
            line-height: 200px;
            text-align: center;
            width: 100vw;
            display: table-cell;
            vertical-align: middle;
            font-size: 36px;
            color: #ffffff;
        }
    }
    .form {
        width: 600px;
        background-color: #ffffff;
        top: 300px;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        border-radius: 4px;
        .header {
            width: 100%;
            height: 48px;
            line-height: 48px;
            text-align: center;
            background-color: #7e57c2;
            color: #ffffff;
            font-size: 18px;
            border-radius: 4px 4px 0 0;
        }
        .main {
            padding: 14px;
        }
    }
}

.form-field {
    margin: 0 20px 0 20px 0;
    width: 100%;
    padding: 0 12px;
}

.form-checkbox {
    font-size: 14px;
    padding-left: 8px;
}

.login-btn {
    background-color: #7e57c2;
    color: #ffffff;
    margin-top: 24px;
}
</style>
