<template>
    <div class="add">
        <menu-bar actived="activity"></menu-bar>
        <div class="page-wrap activity-page-wrap">
            <mu-raised-button class="back-button" label="如何管理你的情绪" icon="keyboard_arrow_left" primary @click="back" />
            <div class="active-tab1">
                <div class="actions">
                    <mu-select-field class="select-field" hintText="公司">
                        <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                    </mu-select-field>
                    <mu-select-field class="select-field" hintText="角色">
                        <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                    </mu-select-field>
                    <mu-select-field class="select-field" hintText="签到情况">
                        <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                    </mu-select-field>
                    <div class="buttons">
                        <mu-raised-button label="筛选" class="demo-raised-button" />
                        <mu-raised-button label="重置" class="demo-raised-button" primary/>
                        <mu-chip class="demo-chip">浏览数： 1000</mu-chip>
                        <mu-chip class="demo-chip">点赞数： 78</mu-chip>
                        <mu-chip class="demo-chip">报名数： 10</mu-chip>
                        <mu-chip class="demo-chip">签到数： 22</mu-chip>
                    </div>
                    
                </div>
                <mu-divider/>
                <mu-table :selectable="false" ref="table">
                    <mu-thead>
                        <mu-tr>
                            <mu-th>姓名</mu-th>
                            <mu-th>工号</mu-th>
                            <mu-th>公司</mu-th>
                            <mu-th>性别</mu-th>
                            <mu-th>电话</mu-th>
                            <mu-th>角色</mu-th>
                            <mu-th>积分</mu-th>
                            <mu-th>签到</mu-th>
                        </mu-tr>
                    </mu-thead>
                    <mu-tbody>
                        <mu-tr v-for="item in 4">
                            <mu-td>鱼多多</mu-td>
                            <mu-td>9527</mu-td>
                            <mu-td>MKO科技</mu-td>
                            <mu-td>男</mu-td>
                            <mu-td>13444443322</mu-td>
                            <mu-td>普通用户</mu-td>
                            <mu-td>78</mu-td>
                            <mu-td>已签到</mu-td>
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
            .actions {
                width: 100%;
                height: 50px;
                position: relative;
                .select-field {
                    margin-bottom: 0;
                }
                .buttons {
                    width: auto;
                    height: 50px;
                    position: absolute;
                    left: 800px;
                    top: 0;
                    .demo-raised-button {
                        margin: 0 10px 0 0;
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
