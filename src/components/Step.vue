<template>
    <div class="step-wrapper" :class="{ 'active': active }">
        <button
                class="btn btn-primary prev-step"
                @click="prevStep"
                :disabled="firststep"
                v-scroll-to="{ el: '#app', duration: 500, easing: 'linear', offset: -80 }">
            Назад
        </button>
        <button
                class="btn btn-primary next-step"
                @click="nextStep"
                :disabled="nextstep"
                v-scroll-to="{ el: '#app', duration: 500, easing: 'linear', offset: -80 }">
            Вперед
        </button>
        <button
                class="btn btn-primary"
                :disabled="rentDays <= 4"
                @click="sendOrder"
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
            nextStep() {
                if (this.currentstep == 2)
                    this.$emit('add-maxrentdays')

                this.$emit('next-step')
            },

            prevStep() {
                this.$emit('prev-step')
            },

            sendOrder() {
                this.$emit('send-order')
            }
        }
    }
</script>