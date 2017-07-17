<template>
    <div class="menu">
        <mu-appbar title="深圳巴士集团EAP管理后台">
            <mu-icon-button icon="menu" slot="left" />
            <mu-flat-button label="expand_more" slot="right" />
            <mu-icon-button icon="expand_more" slot="right" />
        </mu-appbar>
        <div class="menu-wrap">
            <ul class="menu-table-view">
                <li class="menu-table-cell">
                    <span>活动列表</span>
                </li>
                <li class="menu-table-cell">
                    <span>用户管理</span>
                </li>
                <li class="menu-table-cell">
                    <span>数据统计</span>
                </li>
                <li class="menu-table-cell">
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
        background-color: #7e57c2;
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
                &:hover {
                    background-color: #744db7;
                }
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>


