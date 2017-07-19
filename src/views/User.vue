<template>
    <div class="activity">
        <menu-bar actived="user"></menu-bar>
        <div class="page-wrap activity-page-wrap">
            <mu-tabs class="tabs-wrap" :value="activeTab">
                <mu-tab value="tab1" title="用户管理" />
            </mu-tabs>
    
            <div class="active-tab1" v-if="activeTab === 'tab1'">
                <div class="actions">
                    <mu-select-field class="select-field" hintText="公司">
                        <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                    </mu-select-field>
                    <mu-select-field class="select-field" hintText="角色">
                        <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                    </mu-select-field>
                    <div class="buttons">
                        <mu-raised-button label="筛选" class="demo-raised-button" />
                        <mu-raised-button label="重置" class="demo-raised-button" primary/>
                    </div>
                    <mu-text-field hintText="搜索姓名、工号" class="form-field" :underlineShow="true" icon="search" />
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
                            <mu-th>权限</mu-th>
                            <mu-th>参与活动次数</mu-th>
                            <mu-th>积分</mu-th>
                            <mu-th>编辑</mu-th>
                            <mu-th>活动参与记录</mu-th>
                        </mu-tr>
                    </mu-thead>
                    <mu-tbody>
                        <mu-tr v-for="item in 10">
                            <mu-td>余多多</mu-td>
                            <mu-td>9527</mu-td>
                            <mu-td>MKO科技</mu-td>
                            <mu-td>男</mu-td>
                            <mu-td>13444444433</mu-td>
                            <mu-td>管理员</mu-td>
                            <mu-td>23</mu-td>
                            <mu-td>232</mu-td>
                            <mu-td>
                                <span class="table-text" @click="linkPath('/info_activity')">查看</span>
                                <span class="table-text edit" @click="edit()">编辑</span>
                            </mu-td>
                            <mu-th>
                                <span class="table-text" @click="linkPath('/user/1')">查看</span>
                            </mu-th>
                        </mu-tr>
    
                    </mu-tbody>
                </mu-table>
                <div class="pagination">
                    <mu-raised-button label="导出数据" class="daochu-raised-button" icon="publish" @click="exportDatas_Show = true;"/>
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
        <mu-dialog :open="exportDatas_Show" title="导出数据">
            <mu-radio label="导出当前筛选数据" name="group" :nativeValue="1" v-model="exportType" class="demo-radio" />
            <br/>
            <mu-radio label="按月份导出全部数据" name="group" :nativeValue="2" v-model="exportType" class="demo-radio" />
            <div v-if="exportType == 2">
                <mu-date-picker mode="landscape" label="开始日期" labelFloat/>
                <mu-date-picker mode="landscape" label="结束日期" labelFloat/>
            </div>
            <mu-flat-button slot="actions" @click="exportDatas_Show = false;" label="取消" />
            <mu-flat-button slot="actions" primary @click="exportDatas_Show = false;" label="确定" />
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
            editViewShow: false,
            exportType: 1,
            exportDatas_Show: false
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
            .select-field {
                margin-bottom: 0;
            }
            .buttons {
                width: auto;
                height: 50px;
                position: absolute;
                left: 535px;
                top: 0;
                .demo-raised-button {
                    margin: 0 10px 0 0;
                }
            }
            .form-field {
                position: absolute;
                right: 0;
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
