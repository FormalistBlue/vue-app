<template>
    <van-nav-bar
        :title="title"
        :left-arrow="show"
        @click-left="onClickLeft"
    >
        <template #right>
            <van-icon v-if="!login" @click="gotoLogin" name="friends-o"  size="48" />
        </template>
    </van-nav-bar>
</template>

<script>
export default {
    props:{
        title:String,
        show:Boolean,
        login:Boolean,
    },
    methods: {
        onClickLeft(){
            this.show?this.$router.go(-1):"itsok"
        },
        gotoLogin(){
            this.$router.push({name:"login"})
        }
    }
}
</script>