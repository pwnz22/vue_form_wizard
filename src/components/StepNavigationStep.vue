<template>
    <li :class="indicatorclass">
        <div class="step"><i :class="step.icon_class"></i></div>
        <div class="caption hidden-xs hidden-sm">
            {{ step.title }}
        </div>
    </li>
</template>

<script>
    export default {
        props: ['step', 'currentstep'],

        computed: {
            indicatorclass() {
                return {
                    'active': (this.step.id == this.currentstep),
                    'complete': (this.currentstep > this.step.id)
                }
            }
        }
    }
</script>
