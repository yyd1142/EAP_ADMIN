<template>
    <div class="menu">
        <mu-appbar title="深圳巴士集团EAP管理后台">
            <mu-icon-button icon="menu" slot="left" />
            <mu-flat-button label="你好，管理员YYD" slot="right" />
            <mu-icon-button icon="expand_more" slot="right" />
        </mu-appbar>
        <div class="menu-wrap">
            <ul class="menu-table-view">
                <li class="menu-table-cell" :class="actived === 'activity' ? 'actived' : ''" @click="linkPath('/activity')">
                    <span>活动列表</span>
                </li>
                <li class="menu-table-cell" :class="actived === 'user' ? 'actived' : ''" @click="linkPath('/user')">
                    <span>用户管理</span>
                </li>
                <li class="menu-table-cell" :class="actived === 'statistics' ? 'actived' : ''" @click="linkPath('/statistics')">
                    <span>数据统计</span>
                </li>
                <li class="menu-table-cell" :class="actived === 'config' ? 'actived' : ''" @click="linkPath('/config')">
                    <span>修改密码</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
.menu {
    .menu-wrap {
        width: 168px;
        position: fixed;
        top: 64px;
        bottom: 0;
        height: 100vh;
        background-color: #474a4f;
        .menu-table-view {
            width: 100%;
            .menu-table-cell {
                width: 100%;
                height: 52px;
                line-height: 52px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.11);
                cursor: pointer;
                span {
                    font-size: 16px;
                    color: #fff;
                    width: 100%;
                    display: block;
                    text-align: CENTER;
                }
                &:hover, &.actived {
                    background-color: #7e848c;
                }
            }
        }
    }
}
</style>

<script>
export default {
    props: ['actived'],
    data() {
        return {

        }
    },
    methods: {
        linkPath(path) {
            this.$router.push(path)
        }
    }
}
</script>


