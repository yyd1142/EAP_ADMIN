<template>
    <div class="add">
        <menu-bar actived="user"></menu-bar>
        <div class="page-wrap activity-page-wrap">
            <mu-raised-button class="back-button" label="活动参与记录" icon="keyboard_arrow_left" primary @click="back" />
            <div class="active-tab1">
                <div class="statistics">
                    <div class="canyu">
                        <span>参与角色统计</span>
                        <span>1次组织者&nbsp;&nbsp;&nbsp;3次志愿者&nbsp;&nbsp;&nbsp;4次参与者</span>
                    </div>
                    <div class="canyu">
                        <span>基本信息</span>
                        <span>姓名：杨子康&nbsp;&nbsp;&nbsp;公司：深圳巴士集团&nbsp;&nbsp;&nbsp;性别：男&nbsp;&nbsp;&nbsp;角色：EAP专员&nbsp;&nbsp;&nbsp;工号：9527&nbsp;&nbsp;&nbsp;电话：14333333333&nbsp;&nbsp;&nbsp;年龄：25&nbsp;&nbsp;&nbsp;积分：244</span>
                    </div>
                </div>
                <mu-divider/>
                <mu-table :selectable="false" ref="table">
                    <mu-thead>
                        <mu-tr>
                            <mu-th>活动标题</mu-th>
                            <mu-th>活动时间</mu-th>
                            <mu-th>举办公司</mu-th>
                            <mu-th>活动地点</mu-th>
                            <mu-th>参与角色</mu-th>
                            <mu-th>签到情况</mu-th>
                            <mu-th>积分变动</mu-th>
                        </mu-tr>
                    </mu-thead>
                    <mu-tbody>
                        <mu-tr v-for="item in 4">
                            <mu-td>鱼多多</mu-td>
                            <mu-td>2017-01-01 18：00</mu-td>
                            <mu-td>MKO科技</mu-td>
                            <mu-td>深圳市会展中心B展区</mu-td>
                            <mu-td>组织者</mu-td>
                            <mu-td>已签到</mu-td>
                            <mu-td>+90</mu-td>
                        </mu-tr>
    
                    </mu-tbody>
                </mu-table>
                <div class="pagination">
                    <mu-pagination class="item" :total="total" :current="current" @pageChange="handleClick"></mu-pagination>
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
            total: 500,
            current: 1,
            list: ['部落冲突', '影之刃', '天下HD', '穿越火线', '英雄联盟', '王者荣耀']
        }
    },
    methods: {
        handleClick(newIndex) {
        },
        back() {
            this.$router.go(-1)
        }
    },
    components: {
        MenuBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.add {
    .activity-page-wrap {
        padding: 0 15px 0 183px;
        .back-button {
            width: auto;
            margin: 25px 0 0 0;
        }
        .active-tab1 {
            width: 100%;
            min-height: 300px;
            background-color: #ffffff;
            padding: 15px;
            border-radius: 4px;
            margin-top: 15px;
            .statistics {
                width: 100%;
                height: 50px;
                .canyu {
                    span:first-child {
                        font-weight: bold;
                        font-size: 16px;
                        margin-right: 10px;
                    }
                    span:last-child {
                        font-size: 14px;
                    }
                }
            }
            .pagination {
                width: 100%;
                height: 36px;
                position: relative;
                margin: 0 auto;
                .item {
                    width: auto;
                    position: fixed;
                    right: 15px;
                }
                .daochu-raised-button {
                    width: auto;
                    position: fixed;
                    left: 206px;
                }
            }
        }
    }
}
</style>
