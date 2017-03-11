<template>
    <div class="step-wrapper" :class="{ 'active': active }">
        <button
                class="btn btn-primary"
                @click="prevStep"
                :disabled="firststep">
            Назад
        </button>
        <button
                class="btn btn-primary"
                @click="nextStep"
                :disabled="nextstep">
            Вперед
        </button>
        <button
                class="btn btn-primary"
                v-if="laststep">
                Отправить
        </button>
    </div>
</template>

<script>
    export default {
        props: ['step', 'stepcount', 'currentstep', 'picked'],

        computed: {
            active() {
                return (this.step.id == this.currentstep)
            },

            firststep() {
                return (this.currentstep == 1)
            },

            nextstep() {
                if (this.picked.type === null)
                    return true

                return (this.currentstep == this.stepcount)
            },

            laststep() {
                return (this.currentstep == this.stepcount)
            }
        },

        methods: {
            nextStep: function() {
                this.$emit('next-step')
            },

            prevStep: function() {
                this.$emit('prev-step')
            }
        }
    }
</script>