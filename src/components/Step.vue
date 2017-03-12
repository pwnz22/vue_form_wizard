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
        props: ['step', 'stepcount', 'currentstep', 'picked', 'rentDays'],

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

                if (this.currentstep == 2 && this.picked.product === null)
                    return true

                if (this.currentstep == 3 && this.rentDays === null || this.currentstep == 3 && this.rentDays <= 4)
                    return true

                return (this.currentstep == this.stepcount)
            },

            laststep() {
                return (this.currentstep == this.stepcount)
            }
        },

        methods: {
            nextStep: function() {
                if (this.currentstep == 2)
                    this.$emit('add-maxrentdays')

                this.$emit('next-step')
            },

            prevStep: function() {
                this.$emit('prev-step')
            }
        }
    }
</script>