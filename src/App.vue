<template>
    <div id="app">
        <div class="container" v-if="!ordered">
            <step-navigation
                :steps="steps"
                :currentstep="currentstep">
            </step-navigation>

            <div class="step-body">
                <div v-if="currentstep == 1">
                    <div class="row">
                        <div class="col-md-3" v-for="(type, index) in types">
                            <input :id="'step01-0' + index" type="radio" :value="index" v-model="picked.type">
                            <label :for="'step01-0' + index">
                                    <div class="thumbnail">
                                        <img class="img-responsive" :src="type.image" :alt="type.title">
                                        <span class="step01-title">
                                            {{ type.title }}
                                        </span>
                                    </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div v-if="currentstep == 2">
                    <div class="row">
                        <div class="col-md-3" v-for="(product, index) in products" v-if="pickedMine(index)">
                            <input :id="'step02-0' + index" type="radio" :value="index" v-model="picked.product">
                            <label :for="'step02-0' + index">
                                <div class="thumbnail">
                                    <img class="img-responsive" :src="product.image" :alt="product.title">
                                    <span class="step02-title">
                                        <h3>{{ product.title }}</h3>
                                        <p>{{ product.model }}</p>
                                        <p>{{ product.size }}</p>
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div v-if="currentstep == 3">
                    <ul class="list-inline">
                        <li>
                            <date-picker v-model="date" inputClass="form-control" @selected="changeStartDate" language="ru" placeholder="Выбрать начальную дату"></date-picker>
                        </li>
                        <li>
                            <date-picker @selected="calculateTotalPrice" inputClass="form-control" v-model="endDate" language="ru" placeholder="Выбрать конечную дату"></date-picker>
                        </li>
                    </ul>

                    <div v-if="rentDays > 4" class="step03-info">
                        <p>Срок аренды: {{ rentDays }}</p>
                        <p>Цена {{ totalPrice }}</p>
                    </div>
                    <div v-else>
                        <div class="alert alert-danger">
                            Минимальный срок аренды от 5 дней.
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <label id="name" class="col-md-1 control-label">ФИО</label>
                            <div class="col-md-4">
                                <input type="text" name="name" class="form-control" v-model="formdata.name">
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label id="phone" class="col-md-1 control-label">Телефон</label>
                            <div class="col-md-4">
                                <input type="text" name="phone" class="form-control" v-model="formdata.phone">
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label id="car_model" class="col-md-1 control-label">Марка автомобиля</label>
                            <div class="col-md-4">
                                <input type="text" name="car_mark" class="form-control" v-model="formdata.mark">
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label id="car_model" class="col-md-1 control-label">Модель автомобиля</label>
                            <div class="col-md-4">
                                <input type="text" name="car_model" class="form-control" v-model="formdata.model">
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <label id="car_model" class="col-md-1 control-label">Год выпуска автомобиля</label>
                            <div class="col-md-4">
                                <input type="text" name="car_year" class="form-control" v-model="formdata.year">
                            </div>
                        </div>
                    </div>
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
                @add-maxrentdays="addMaxrentdays"
                @next-step="nextStep"
                @prev-step="prevStep"
                @send-order="sendEmail">

            </step>
        </div>
        <div class="alert alert-succes" v-else>
            <h2>Заказ успешно принят!</h2>
        </div>
    </div>
</template>

<script>
    import Step from './components/Step'
    import StepNavigation from './components/StepNavigation'
    import DatePicker from 'vuejs-datepicker';
    import { data } from './data'
    import moment from 'moment'

    export default {
        name: 'app',
        components: { Step, StepNavigation, DatePicker },

        data() {
            return {
                currentstep: 1,

                date: moment().format(),

                email: null,

                endDate: null,

                rentDays: null,

                picked: {
                    type: null,
                    product: null
                },

                totalPrice: 0,

                types: null,
                products: null,
                steps: null,

                formdata: {
                    name: null,
                    phone: null,
                    mark: null,
                    model: null,
                    year: null
                },

                ordered: false
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
                axios.get('/wp-content/themes/launch/js/calc/data.json')
                    .then(response => {
                        this.types = response.data.types
                        this.products = response.data.products
                        this.steps = response.data.steps
                        this.email = response.data.email
                    })
            },

            pickedMine(i) {
                if (i == 15 && this.picked.type == 6)
                    return false

                return true
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

            calc() {
                let type = this.types[this.picked.type]
                let product = this.products[this.picked.product]
                this.totalPrice = this.calculatePrice(type, this.rentDays) + this.calculatePrice(product, this.rentDays)
            },

            calculateTotalPrice(endTime) {
                let startTime = moment(this.date)
                endTime = moment(endTime)
                this.rentDays = endTime.diff(startTime, 'days')
                this.rentDays += 1

                if (this.rentDays <= 4)
                    return

                this.calc()
            },

            changeStartDate(e) {
                this.date = moment(e).add(5, 'days').format()
                this.endDate = this.date
                this.rentDays = 5

                this.calc()
            },

            addMaxrentdays() {
                let now = moment(this.date).add(5, 'days').format()
                this.endDate = now
                this.rentDays = 5

                this.calc()
            },

            sendEmail() {
                const data = {
                    'Имя': this.formdata.name,
                    'Телефон': this.formdata.phone,
                    'Марка автомобиля': this.formdata.mark,
                    'Модель автомобиля': this.formdata.model,
                    'Год выпуска автомобиля': this.formdata.year,
                    'Срок Аренды': this.rentDays,
                    'Цена': this.totalPrice,
                    _subject: "Заказ с сайта arenda-boxteam.ru"
                }
                axios.post(`https://formspree.io/${this.email}`, data)
                    .then(response => this.ordered = true)
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