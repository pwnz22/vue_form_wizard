<template>
    <div class="y_modal">
        <div class="y_modal-mask">
            <div class="y_modal-container">
                <button title="Close (Esc)" type="button" class="y_modal-close" @click="closeModal">×</button>

                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            closeModal() {
                this.$emit('close')
                document.documentElement.removeAttribute('class')
            }
        },
        mounted() {
            document.documentElement.className += ' ovf-hidden'
        }
    }
</script>

<style lang="scss">
    .ovf-hidden {
        overflow: hidden;
        margin-right: 17px;
    }

    .preloader {
        position: absolute;
        display: flex;
        align-items: center;
        z-index: 99999;
        justify-content: center;
        top: 0;
        background-color: rgba(0, 0, 0, .3);
        left: 0;
        height: 100%;
        width: 100%;
    }

    .y_modal {
        &-mask {
            position: fixed;
            z-index: 9998;
            top: 0;
            left: 0;
            overflow-x: hidden;
            width: 100%;
            height: 100%;
            background-color: rgba(59, 146, 217, .5);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity .3s ease;
        }

        &-container {
            min-height: 350px;
            width: 577px;
            background-color: #fefefe;
            color: #000;
            margin: auto;
            position: relative;
        }

        &-close {
            overflow: visible;
            cursor: pointer;
            background: transparent;
            border: 0;
            display: block;
            outline: none;
            padding: 0;
            z-index: 1046;
            box-shadow: none;
            width: 44px;
            height: 44px;
            line-height: 44px;
            position: absolute;
            right: 0;
            top: 0;
            text-decoration: none;
            text-align: center;
            opacity: 0.65;
            font-style: normal;
            font-size: 28px;
            font-family: Arial, Baskerville, monospace;
            transition: opacity .25s ease;

            &:hover {
                opacity: 1;
            }
        }
    }
</style>
