<template>
    <ol class="step-indicator">
        <li
            v-for="step in steps"
            is="step-navigation-step"
            :step="step"
            :currentstep="currentstep">
        </li>
    </ol>
</template>

<script>
    import StepNavigationStep from './StepNavigationStep'

    export default {
        components: { StepNavigationStep },

        props: ['steps', 'currentstep']
    }
</script>