<template>
    <div class="activity">
        <menu-bar actived="config"></menu-bar>
        <div class="page-wrap activity-page-wrap">
            <mu-tabs class="tabs-wrap" :value="activeTab">
                <mu-tab value="tab1" title="修改密码" />
            </mu-tabs>
            <div class="config-wrap">
                <div class="password-wrap">
                    <mu-text-field class="text-field" label="请输入原密码" labelFloat type="password" />
                    <br/>
                    <mu-text-field class="text-field" label="请输入新密码" labelFloat type="password" />
                    <br/>
                    <mu-text-field class="text-field" label="请再次输入新密码" labelFloat type="password" />
                    <br/>
                    <mu-raised-button class="button" label="确认" fullWidth primary/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MenuBar } from 'components'
export default {
    data() {
        return {
            activeTab: 'tab1'
        }
    },
    methods: {
    },
    components: {
        MenuBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.activity-page-wrap {
    padding: 0 15px 0 183px;
    .tabs-wrap {
        width: 300px;
        margin: 10px 0 0 50px;
        border-radius: 4px;
    }
    .config-wrap {
        width: 100%;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 100px 0;
        margin-top: 15px;
        .password-wrap {
            width: 400px;
            margin: 0 auto;
            .text-field {
                width: 100%;
            }
            .button {
                margin: 15px 0 0 0;
            }
        }
    }
}
</style>
