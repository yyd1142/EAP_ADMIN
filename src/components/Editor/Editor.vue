<template>
    <div class="main">
        <quill-editor class="editor" ref="newEditor" v-model="content" :options="editorOpton">
            <div id="toolbar" slot="toolbar">
                <!-- Add a bold button -->
                <button class="ql-bold">Bold</button>
                <button class="ql-italic">Italic</button>
                <button class="ql-underline">Underline</button>
                <button class="ql-strike">Strike</button>
                <!-- Add font size dropdown -->
                <select class="ql-size">
                    <option value="small"></option>
                    <!-- Note a missing, thus falsy value, is used to reset to default -->
                    <option selected></option>
                    <option value="large"></option>
                    <option value="huge"></option>
                </select>
                <button class="ql-link">Link</button>
                <button class="ql-video">Video</button>
                <mu-icon class="upload-img-btn" value="insert_photo" @click="uploadPhoto" :size="23"/>
            </div>
        </quill-editor>
        <div class="actions">
            <mu-raised-button label="保存" class="actions-button" />
            <mu-raised-button label="预览" class="actions-button" />
            <mu-raised-button label="保存并发布" class="actions-button" primary/>
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
.main {
    .editor {
        width: 100%;
        height: 423px;
    }
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

.upload-img-btn {
    width: 100px;
    cursor: pointer;
    &:hover {
        color: #06c;
    }
}
</style>

<script>
export default {
    props: [''],
    data() {
        return {
            content: '',
            editorOpton: {
                placeholder: '请输入内容',
                modules: {
                    toolbar: '#toolbar'
                }
            }
        }
    },
    methods: {
        uploadPhoto() {
            // 自定义上传图片
        }
    }
}
</script>


