<template>
    <div class="activity">
        <menu-bar></menu-bar>
        <div class="page-wrap activity-page-wrap">
            <mu-tabs class="tabs-wrap" :value="activeTab" @change="handleTabChange">
                <mu-tab value="tab1" title="我的活动" />
                <mu-tab value="tab2" title="全部活动" />
            </mu-tabs>
            <div class="active-tab1" v-if="activeTab === 'tab1'">
                <mu-date-picker mode="landscape" hintText="请选择活动日期" />
                <mu-select-field v-model="game1" class="select-field">
                    <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                </mu-select-field>
                <mu-raised-button label="筛选" class="demo-raised-button" />
                <mu-raised-button label="重置" class="demo-raised-button" primary/>
                <mu-text-field hintText="搜索活动标题、发布人" class="form-field" :underlineShow="true" icon="search" />
                <mu-divider/>
                <mu-table :selectable="false" ref="table">
                    <mu-thead>
                        <mu-tr>
                            <mu-th>活动标题</mu-th>
                            <mu-th>活动时间</mu-th>
                            <mu-th>发布人</mu-th>
                            <mu-th>浏览量</mu-th>
                            <mu-th>点赞数</mu-th>
                            <mu-th>报名数</mu-th>
                            <mu-th>状态</mu-th>
                            <mu-th>二维码</mu-th>
                            <mu-th>操作</mu-th>
                        </mu-tr>
                    </mu-thead>
                    <mu-tbody>
                        <mu-tr v-for="item in 4">
                            <mu-td>如何管理你的情绪</mu-td>
                            <mu-td>2017-01-01 18:00</mu-td>
                            <mu-td>Employed</mu-td>
                            <mu-td>11</mu-td>
                            <mu-td>2</mu-td>
                            <mu-td>12</mu-td>
                            <mu-td>已发布</mu-td>
                            <mu-td>
                                <mu-icon value="fullscreen" /></mu-td>
                            <mu-td>
                                <span class="table-text" @click="view()">查看</span>
                                <span class="table-text edit" @click="edit()">编辑</span>
                            </mu-td>
                        </mu-tr>
    
                    </mu-tbody>
                </mu-table>
                <div class="pagination">
                    <mu-raised-button label="导出数据" class="daochu-raised-button" icon="publish"/>
                    <mu-pagination class="item" :total="total" :current="current" @pageChange="handleClick"></mu-pagination>
                </div>
            </div>
            <div v-if="activeTab === 'tab2'">
                <h2>Tab Two</h2>
                <p>
                    这是第二个 tab
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { MenuBar } from 'components'
export default {
    data() {
        return {
            activeTab: 'tab1',
            game1: 0,
            list: ['请选择活动发布单位', '影之刃', '天下HD', '穿越火线', '英雄联盟', '王者荣耀'],
            total: 500,
            current: 1
        }
    },
    methods: {
        handleClick(newIndex) {
        },
        handleTabChange(val) {
            this.activeTab = val
        },
        handleActive() {
            window.alert('tab active')
        },
        view() {

        },
        edit() {

        }
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

    .active-tab1 {
        width: 100%;
        min-height: 300px;
        background-color: #ffffff;
        padding: 15px;
        border-radius: 4px;
        margin-top: 15px;
        .select-field {
            width: 256px;
            display: inline-grid;
        }
        .form-field {
            position: fixed;
            right: 30px;
        }
        .demo-raised-button {
            margin: 0 10px 0 0;
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

.table-text {
    font-size: 14px;
    margin: 0 10px;
    cursor: pointer;
    &.edit {
        color: #7e57c2;
    }
}
</style>
