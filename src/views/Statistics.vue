<template>
    <div class="activity">
        <menu-bar actived="statistics"></menu-bar>
        <div class="page-wrap activity-page-wrap">
            <mu-tabs class="tabs-wrap" :value="activeTab">
                <mu-tab value="tab1" title="数据统计" />
            </mu-tabs>
    
            <div class="active-tab1" v-if="activeTab === 'tab1'">
                <div class="actions">
                    <mu-raised-button label="总数据" class="demo-raised-button" />
                    <mu-raised-button label="指定月份数据" class="demo-raised-button" primary/>
                </div>
                <mu-divider/>
                <mu-table :selectable="false" ref="table">
                    <mu-thead>
                        <mu-tr>
                            <mu-th>公司</mu-th>
                            <mu-th>员工数</mu-th>
                            <mu-th>活动数</mu-th>
                            <mu-th>浏览总数</mu-th>
                            <mu-th>点赞总数</mu-th>
                            <mu-th>参与总数</mu-th>
                            <mu-th>活跃人数</mu-th>
                            <mu-th>积分总额</mu-th>
                        </mu-tr>
                    </mu-thead>
                    <mu-tbody>
                        <mu-tr v-for="item in 10">
                            <mu-td>MKO科技</mu-td>
                            <mu-td>2100</mu-td>
                            <mu-td>23</mu-td>
                            <mu-td>22</mu-td>
                            <mu-td>45</mu-td>
                            <mu-td>11</mu-td>
                            <mu-td>12</mu-td>
                            <mu-td>232</mu-td>
                        </mu-tr>
    
                    </mu-tbody>
                </mu-table>
                <div class="pagination">
                    <mu-raised-button label="导出数据" class="daochu-raised-button" icon="publish" />
                    <mu-pagination class="item" :total="total" :current="current" @pageChange="handleClick"></mu-pagination>
                </div>
            </div>
        </div>
        <mu-dialog :open="editViewShow" title="姓名：余多多     工号：9527">
            <div class="dialog-main">
                <mu-select-field class="select-field" label="性别" labelFloat>
                    <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                </mu-select-field>
                <mu-select-field class="select-field" label="单位" labelFloat>
                    <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                </mu-select-field>
                <mu-select-field class="select-field" label="角色" labelFloat>
                    <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                </mu-select-field>
            </div>
            <mu-flat-button slot="actions" @click="cancel" primary label="取消" />
            <mu-flat-button slot="actions" primary @click="submit" label="确定" />
        </mu-dialog>
    </div>
</template>

<script>
import { MenuBar } from 'components'
export default {
    data() {
        return {
            activeTab: 'tab1',
            list: ['请选择活动发布单位', '影之刃', '天下HD', '穿越火线', '英雄联盟', '王者荣耀'],
            total: 500,
            current: 1,
            editViewShow: false
        }
    },
    methods: {
        handleClick(newIndex) {
        },
        linkPath(path) {
            this.$router.push(path)
        },
        edit() {
            this.editViewShow = true;
        },
        cancel() {
            this.editViewShow = false;
        },
        submit() {
            this.editViewShow = false;
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
    .create-button {
        position: absolute;
        right: 15px;
        top: 83px;
    }
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
        .actions {
            width: 100%;
            height: 50px;
            position: relative;
            .demo-raised-button {
                margin: 0 10px 0 0;
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

.table-text {
    font-size: 14px;
    margin: 0 10px;
    cursor: pointer;
    &.edit {
        color: #ff5252;
    }
}

.qr-code {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    display: block;
}

.dialog-main {
    display: flex;
}
</style>
