<template>
    <div class="add">
        <menu-bar actived="activity"></menu-bar>
        <div class="page-wrap activity-page-wrap">
            <mu-raised-button class="back-button" label="创建活动" icon="keyboard_arrow_left" primary @click="back"/>
            <div class="add-act-wrap">
                <div class="left">
                    <div class="top">
                        <mu-select-field class="select-field" hintText="活动类型">
                            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                        </mu-select-field>
                        <mu-select-field class="select-field" hintText="人数范围">
                            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                        </mu-select-field>
                        <mu-select-field class="select-field" hintText="活动地点">
                            <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
                        </mu-select-field>
                        <mu-time-picker class="time-field" mode="landscape" hintText="活动时间" />
                        <mu-date-picker class="time-field" mode="landscape" hintText="活动日期" />
                        <mu-text-field class="text-field" hintText="活动标题"/>
                    </div>
                    <div class="bottom">
                        <quill-editor v-model="content" :options="editorOpton"></quill-editor>
                        <div class="actions">
                            <mu-raised-button label="保存" class="actions-button" />
                            <mu-raised-button label="预览" class="actions-button" />
                            <mu-raised-button label="保存并发布" class="actions-button" primary/>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="add-cover">
                        <mu-raised-button class="add-button" label="上传封面" icon="add" />
                    </div>
                    <mu-text-field class="text-field" label="添加志愿者" labelFloat icon="search" />
                    <mu-chip class="demo-chip" @delete="handleClose" showDelete> 周小茶 </mu-chip>
                    <mu-chip class="demo-chip" @delete="handleClose" showDelete> 黄叉烧 </mu-chip>
                    <mu-chip class="demo-chip" @delete="handleClose" showDelete> 猪一笼 </mu-chip>
                    <mu-chip class="demo-chip" @delete="handleClose" showDelete> 余多多 </mu-chip>
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
            content: '',
            list: ['请选择', '影之刃', '天下HD', '穿越火线', '英雄联盟', '王者荣耀'],
            editorOpton: {
                placeholder: '请输入内容'
            }
        }
    },
    methods: {
        handleClose() {

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
        .add-act-wrap {
            width: 100%;
            background-color: #ffffff;
            border-radius: 4px;
            height: 700px;
            margin-top: 15px;
            .left {
                width: 70%;
                margin-right: auto;
                height: 700px;
                .top {
                    width: 100%;
                    padding: 15px 15px 0 15px;
                    border-bottom: 1px solid #e0e0e0;
                    .time-field {
                        margin: auto;
                    }
                    .select-field {
                        margin-bottom: 0;
                    }
                }
                .bottom {
                    width: 100%;
                    padding: 15px;
                    height: 500px;
                    position: relative;
                    .actions {
                        width: 100%;
                        height: 44px;
                        position: absolute;
                        bottom: -54px;
                        text-align: center;
                        .actions-button {
                            margin: 0 10px;
                        }
                    }
                }
            }
            .right {
                width: 30%;
                margin: -700px 0 0 auto;
                height: 700px;
                padding: 15px;
                border-left: 1px solid #e0e0e0;
                .add-cover {
                    width: 100%;
                    height: 200px;
                    border: 1px solid #e0e0e0;
                    border-radius: 4px;
                    text-align: center;
                    background: url(/static/image-square.png) 0 0 no-repeat;
                    background-position: center center;
                    background-size: contain;
                    background-color: #bcbec0;
                    .add-button {
                        margin: 83px 0 0 0;
                    }
                }
                .text-field {
                    width: 100%;
                }
            }
        }
    }
}

.quill-editor {
    height: 403px;
}
</style>
