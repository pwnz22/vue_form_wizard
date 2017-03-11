<template>
    <div id="app">
        <div class="container">
            <step-navigation
                :steps="steps"
                :currentstep="currentstep">
            </step-navigation>

            <div class="step-body">

                <div v-if="currentstep == 1">
                    <div class="row">
                        <div class="col-md-2" v-for="(type, index) in types">
                            <img class="img-responsive" :src="type.image" alt="">
                            <p>{{ type.title }}</p>
                            <p>
                                <input type="radio" :value="index" v-model="picked.type" @change="rentDays = null">
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="currentstep == 2">
                    <div class="row">
                        <div class="col-md-3" v-for="(product, index) in products">
                            <h3>{{ product.title }}</h3>
                            <p>{{ product.model }}</p>
                            <p>{{ product.size }}</p>
                            <p>
                                <input type="radio" :value="index" v-model="picked.product" @change="rentDays = null">
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="currentstep == 3">
                    <ul class="list-inline">
                        <li>
                            <date-picker v-model="date" language="ru" placeholder="Выбрать начальную дату"></date-picker>
                        </li>
                        <li>
                            <date-picker @selected="calculateTotalPrice" :value="date" language="ru" placeholder="Выбрать конечную дату"></date-picker>
                        </li>
                    </ul>
                </div>

                <div v-if="currentstep == 4">
                    <ul v-if="rentDays > 4">
                        <li>Автобокс: {{ types[picked.type].title }}</li>
                        <li>Срок аренды: {{ rentDays }}</li>
                        <li>Цена: {{ totalPrice }}</li>
                    </ul>
                </div>
            </div>

            <step
                v-for="(step, index) in steps"
                :key="index"
                :step="step"
                :stepcount="steps.length"
                :picked="picked"
                :rent-days="rentDays"
                :currentstep="currentstep"
                @next-step="nextStep"
                @prev-step="prevStep">
            </step>
        </div>
    </div>
</template>

<script>
    import Step from './components/Step'
    import StepNavigation from './components/StepNavigation'
    import DatePicker from 'vuejs-datepicker';
    import moment from 'moment'

    export default {
        name: 'app',
        components: { Step, StepNavigation, DatePicker },

        data() {
            return {
                currentstep: 1,

                date: new Date(),

                rentDays: null,

                picked: {
                    type: null,
                    product: null
                },

                totalPrice: 0,

                types: null,

                products: null,

                steps: [
                    {
                        id: 1,
                        title: 'Тип',
                        icon_class: "fa fa-map-marker"
                    }, {
                        id: 2,
                        title: 'Вид',
                        icon_class: "fa fa-folder-open"
                    }, {
                        id: 3,
                        title: 'Даты',
                        icon_class: "fa fa-paper-plane"
                    }, {
                        id: 4,
                        title: 'Отправить',
                        icon_class: "fa fa-paper-plane"
                    },
                ]
            }
        },

        methods: {

            pushData() {
                const data = {
                    types: this.types,
                    products: this.products
                }
                axios.put('data.json', data)
            },

            pullData() {
                axios.get('data.json')
                    .then(response => {
                        this.types = response.data.types
                        this.products = response.data.products
                    })
            },

            nextStep() {
                this.currentstep++
            },
            prevStep() {
                this.currentstep--
            },

            calculatePrice(type, diff) {
                function between(x, min, max) {
                    return x >= min && x <= max
                }
                //let type = this.types[this.picked.type]
                let calculatedPrice = ''

                if (diff < type.maxRentDay)
                    return

                type.rentDays.forEach((day, i) => {
                    if (between(diff, day.min, day.max))
                        calculatedPrice = diff * day.price
                })

                if (diff >= type.defaultPrice.days)
                    calculatedPrice = diff * type.defaultPrice.price

                return calculatedPrice
            },

            calculateTotalPrice(endTime) {
                let startTime = moment(this.date)
                endTime = moment(endTime)
                this.rentDays = endTime.diff(startTime, 'days')
                this.rentDays += 1

                if (this.rentDays <= 4)
                    return alert('Мини')

                let type = this.types[this.picked.type]
                let product = this.products[this.picked.product]

                this.totalPrice = this.calculatePrice(type, this.rentDays) + this.calculatePrice(product, this.rentDays)

            }
        },

        mounted() {
            this.pullData()
        }
    }
</script>

<style lang="scss">
    $wizard-color-neutral: #ccc !default;
    $wizard-color-active: #4183D7 !default;
    $wizard-color-complete: #87D37C !default;
    $wizard-step-width-height: 64px !default;
    $wizard-step-font-size: 24px !default;
    // @import 'https://fonts.googleapis.com/css?family=Roboto';

    body {
        padding: 0;
        margin: 0;
        background-color: #f6f6f6;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        background-color: #fff;
    }

    .step-wrapper {
        padding: 20px 0;
        display: none;

        &.active {
            display: block;
        }
    }



    .step-indicator {
        border-collapse: separate;
        display: table;
        margin-left: 0px;
        position: relative;
        table-layout: fixed;
        text-align: center;
        vertical-align: middle;
        padding-left: 0;
        padding-top: 20px;

        li {
            display: table-cell;
            position: relative;
            float: none;
            padding: 0;
            width: 1%;

            &:after {
                background-color: $wizard-color-neutral;
                content: "";
                display: block;
                height: 1px;
                position: absolute;
                width: 100%;
                top: $wizard-step-width-height/2;
            }

            &:after {
                left: 50%;
            }

            &:last-child {
                &:after {
                    display: none;
                }
            }

            &.active {
                .step {
                    border-color: $wizard-color-active;
                    color: $wizard-color-active;
                }

                .caption {
                    color: $wizard-color-active;
                }
            }

            &.complete {
                &:after {
                    background-color: $wizard-color-complete;
                }

                .step {
                    border-color: $wizard-color-complete;
                    color: $wizard-color-complete;
                }

                .caption {
                    color: $wizard-color-complete;
                }
            }
        }

        .step {
            background-color: #fff;
            border-radius: 50%;
            border: 1px solid $wizard-color-neutral;
            color: $wizard-color-neutral;
            font-size: $wizard-step-font-size;
            height: $wizard-step-width-height;
            line-height: $wizard-step-width-height;
            margin: 0 auto;
            position: relative;
            width: $wizard-step-width-height;
            z-index: 1;

            &:hover {
                cursor: pointer;
            }
        }

        .caption {
            color: $wizard-color-neutral;
            padding: 11px 16px;
        }
    }
</style>