<template>
    <div class="stage" id="app">
        <button class="btn btn-primary">Vue UI</button>
        <button class="btn btn-secondary" v-model="chapter">Chapter : {{chapter}}</button>
        <br/>
    </div>
</template>

<script>
    import SceneManager from './scenes/SceneManager';

    export default {
        name: "App.vue",
        mounted() {
            this.app = new PIXI.Application({
                antialias: true,
            });
            let sceneManager = new SceneManager();
            this.app.stage.addChild(sceneManager);
            this.$el.appendChild(this.app.view);
        },
        created() {
        },
        data() {
            return {
                chapter: this.$store.state.chapter
            }
        }
    }
</script>

<style scoped>

</style>