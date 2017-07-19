<template>
    <div class="main">
        <div id="ossfile">你的浏览器不支持flash,Silverlight或者HTML5！</div>
        <quill-editor class="editor" ref="newEditor" v-model="content" :options="editorOpton">
            <div id="toolbar" slot="toolbar">
                <span id="container">
                    <mu-icon id="selectfiles" class="upload-img-btn" value="insert_photo" @click="uploadPhoto" :size="19" />
                </span>
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
    margin: 2px 0 0 3px;
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
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                        ['blockquote', 'code-block'],

                        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
                        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
                        [{ 'direction': 'rtl' }],                         // text direction

                        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                        [{ 'font': [] }],
                        [{ 'align': [] }],

                        ['clean']
                    ]
                }
            }
        }
    },
    mounted() {
        this.$uploadFile('selectfiles', 'container')
    },
    methods: {
        uploadPhoto() {
            // 自定义上传图片
        }
    }
}
</script>


