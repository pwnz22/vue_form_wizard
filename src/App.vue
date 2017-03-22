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
                        <div class="col-md-3 col-xs-6" v-for="(type, index) in types">
                            <input :id="'step01-0' + index" type="radio" :value="index" v-model="picked.type" :disabled="pickedMy">
                            <label :for="'step01-0' + index">
                                <div class="thumbnail">
                                    <img class="img-responsive" :src="type.image" :alt="type.title">
                                    <span class="step01-title">
                                        {{ type.title }}
                                    </span>
                                </div>
                            </label>
                        </div>
                        <div class="col-md-3 col-xs-6" v-for="(type, index) in nextTypes" v-if="pickedMine(index)">
                            <input :id="'step01-1' + index" type="radio" :value="index" v-model="picked.nextType">
                            <label :for="'step01-1' + index">
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
                        <div class="col-md-3 col-xs-6" v-for="(product, index) in products" v-if="pickedMine(index)">
                            <input :id="'step02-0' + index" type="radio" :value="index" v-model="picked.product">
                            <label :for="'step02-0' + index">
                                <div class="thumbnail" v-if="product.volume != 0">
                                    <img class="img-responsive" :src="product.image" :alt="product.title">
                                    <span class="step02-title">
                                        <div class="step02-item">
                                            <p>Производитель:</p>
                                            <h4 class="step-title"> {{ product.title }}</h4>
                                        </div>
                                        <div class="step02-item">
                                            <p>Модель:</p>
                                            <h4 class="step-title"> {{ product.model }}</h4>
                                        </div>
                                        <div class="step02-item">
                                            <p>Внешние размеры:</p>
                                            <h4 class="step-title"> {{ product.size }}</h4>
                                        </div>
                                    </span>
                                </div>
                                <div class="thumbnail" v-else>
                                    <img class="img-responsive" :src="product.image" :alt="product.title">
                                    <span class="step02-title">
                                        <div class="step02-item">
                                            <h4 class="step-title">{{ product.title }}</h4>
                                        </div>
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div v-if="currentstep == 3">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-4 col-xs-6">
                                <date-picker :value="date" inputClass="form-control" @selected="changeStartDate"
                                             language="ru" placeholder="Выбрать начальную дату"></date-picker>
                            </div>
                            <div class="col-md-4 col-xs-6">
                                <date-picker @selected="calculateTotalPrice" inputClass="form-control" :value="endDate"
                                             language="ru" placeholder="Выбрать конечную дату"></date-picker>
                            </div>
                        </div>
                    </div>

                    <div v-if="rentDays > 4" class="step03-info">
                        <p>Срок аренды: <strong>{{ rentDays }}</strong></p>
                        <p>Цена: <strong>{{ totalPrice }}</strong> <i class="fa fa-rub" aria-hidden="true"></i></p>
                    </div>
                    <div v-else>
                        <div class="alert alert-danger">
                            Минимальный срок аренды от 5 дней.



                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <div class="row">
                                <label id="name" class="col-md-2 control-label">ФИО</label>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-default" area-label="bold"><i
                                                class="fa fa-user" aria-hidden="true"></i></button>
                                        </div>
                                        <input type="text" name="name" class="form-control" v-model="formdata.name">
                                    </div>
                                </div>

                                <label id="phone" class="col-md-2 control-label">Телефон</label>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-default" area-label="bold"><i
                                                class="fa fa-phone" aria-hidden="true"></i></button>
                                        </div>
                                        <input type="text" name="phone" class="form-control" v-model="formdata.phone">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <div class="row">
                                <label id="car_model" class="col-md-2 control-label">Марка автомобиля</label>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-default" area-label="bold"><i
                                                class="fa fa-car" aria-hidden="true"></i></button>
                                        </div>
                                        <input type="text" name="car_mark" class="form-control" v-model="formdata.mark">
                                    </div>
                                </div>

                                <label id="car_model" class="col-md-2 control-label">Модель автомобиля</label>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-default" area-label="bold"><i
                                                class="fa fa-info-circle" aria-hidden="true"></i></button>
                                        </div>
                                        <input type="text" name="car_model" class="form-control"
                                               v-model="formdata.model">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group col-md-12">
                            <div class="row">
                                <label id="car_model" class="col-md-2 control-label">Год выпуска автомобиля</label>
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-default" area-label="bold"><i
                                                class="fa fa-calendar" aria-hidden="true"></i></button>
                                        </div>
                                        <input type="text" name="car_year" class="form-control" v-model="formdata.year">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="terms">
                                        <span class="fa-stack fa-lg" aria-hidden="true" @click="showModal = true">
                                            <i class="fa fa-info fa-stack-1x"></i>
                                        </span>
                                        <strong>&nbsp; Условия аренды.</strong>

                                        <modal @close="showModal = false" v-if="showModal">
                                            <div slot="content">
                                                <div class="terms-info" v-html="terms"></div>
                                            </div>
                                        </modal>

                                    </div>
                                </div>
                            </div>
                        </div><!-- ./form-group -->

                        <div class="form-group col-md-6">
                            <div class="row">
                                <label id="car_model" class="col-md-4 control-label">Примечание</label>
                                <div class="col-md-8">
                                    <textarea v-model="review" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <step
                v-for="(step, index) in steps"
                :key="index"
                :send-email-formdata="sendEmailDisabler"
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
    import moment from 'moment'
    import Modal from './components/Modal'

//    import data from './data.json'

    export default {
        name: 'app',
        components: {Step, StepNavigation, DatePicker, Modal},

        data() {
            return {
                currentstep: 1,

                showModal: false,

                review: '',

                date: moment().startOf('day').format(),


                endDate: null,

                rentDays: null,

                picked: {
                    type: null,
                    nextType: null,
                    product: null
                },

                totalPrice: 0,

                email: null,
                types: null,
                nextTypes: null,
                products: null,
                steps: null,
                terms: null,

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

        computed: {
            sendEmailDisabler() {
                return (this.formdata.name === null || this.formdata.phone === null)
            },

            pickedMy() {
                this.picked.type = null
                return (this.picked.nextType === 3)
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
                        this.nextTypes = response.data.nextTypes
                        this.products = response.data.products
                        this.steps = response.data.steps
                        this.email = response.data.email
                        this.terms = response.data.terms
                    })
            },

            pickedMine(i) {
                if (i == 15 && this.picked.type == 6)
                    return false

                if (this.currentstep == 1 && i == 3 && this.picked.product == 15)
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
                if (!type)
                    return 0

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
                let nextType = this.nextTypes[this.picked.nextType] || null
                let product = this.products[this.picked.product]

                let typePrice = this.calculatePrice(type, this.rentDays)
                let nextTypePrice = this.calculatePrice(nextType, this.rentDays)
                let productPrice = this.calculatePrice(product, this.rentDays)

                this.totalPrice = typePrice + nextTypePrice + productPrice
            },

            calculateTotalPrice(endTime) {
                let startTime = moment(this.date)
                this.endDate = moment(endTime).format()
                this.rentDays = moment(endTime).diff(startTime, 'days')

                this.calc()
            },

            changeStartDate(e) {
                this.date = moment(e).format()
                let startTime = moment(e).add(5, 'days').format()
                this.endDate = startTime
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
                let startDate = moment(this.date).format('DD-MM-YYYY')
                let endDate = moment(this.endDate).format('DD-MM-YYYY')

                let type = this.types[this.picked.type] || null
                let nextType = this.nextTypes[this.picked.nextType] || null
                let product = this.products[this.picked.product]

                const data = {
                    'Модель автомобиля': this.formdata.model,
                    'Имя': this.formdata.name,
                    'Телефон': this.formdata.phone,
                    'Марка автомобиля': this.formdata.mark,
                    'Год выпуска автомобиля': this.formdata.year,
                    'Срок Аренды': this.rentDays,
                    'Багажник': type ? type.title : 'Не выбрано.',
                    'Велокрепление': nextType ? nextType.title : 'Не выбрано.',
                    'Автобокс': product.title,
                    'Цена': this.totalPrice,
                    'Примечание': this.review,
                    'Даты': 'C ' + startDate + ' до ' + endDate
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

    .step02-item p {
        display: inline-block;
    }

    .step-title {
        display: inline-block;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>
