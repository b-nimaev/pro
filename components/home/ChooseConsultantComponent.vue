<template>
    <section id="choose-consultant">
        <div class="container">
            <div class="heading">
                <p class="description">Фильтр</p>
                <h2>Выберите <span>консультанта</span></h2>
                <div class="line">
                    <IconsLineComponent />
                </div>

            </div>
            <form @submit.prevent="submitForm">
                <div class="form-row">
                    <div class="input-group">
                        <label for="city">Город</label>
                        <div class="input-wrapper">
                            <select name="city" id="city" v-model="city">
                                <option value="">Любой</option>
                                <option value="Москва">Москва</option>
                                <option value="Санкт-Петербург">Санкт-Петербург</option>
                                <option value="Улан-Удэ">Улан-Удэ</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="work-format">Формат работы</label>
                        <div class="input-wrapper">
                            <select name="work-format" id="work-format" v-model="workFormat">
                                <option value="">Любой</option>
                                <option value="Удаленно">Удаленно</option>
                                <option value="Не удаленно">Не удаленно</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="gender">Пол</label>
                        <div class="input-wrapper">
                            <select name="gender" id="gender" v-model="gender">
                                <option value="">Любой</option>
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-group">
                        <label for="experience">Опыт работы</label>
                        <div class="input-wrapper">
                            <select name="experience" v-model="experience" id="experience">
                                <option value="">Любой</option>
                                <option value="1">1 год</option>
                                <option value="2">2 года</option>
                                <option value="3">3 года</option>
                                <option value="4">4 года</option>
                                <option value="5">5 лет и более</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-group">
                        <label for="price">Цена</label>
                        <Slider :min="minValue" :max="maxValue" v-model="value" />
                    </div>
                </div>
                <div class="form-row">
                    <button type="submit">Показать консультантов</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import Slider from '@vueform/slider'
export default {
    components: {
        Slider
    },
    data() {
        return {
            city: "",
            workFormat: "",
            experience: "",
            gender: "",
            inNextThreeDays: false,
            minValue: 0,
            maxValue: 1000,
            value: [170, 900]
        };
    },
    methods: {
        submitForm() {
            const searchData = {
                city: this.city,
                workFormat: this.workFormat,
                experience: this.experience,
                gender: this.gender,
                value: this.value,
                inNextThreeDays: this.inNextThreeDays
            };
            console.log(searchData);
        },
    },
    computed: {
        sliderMin: {
            get: function () {
                var val = parseInt(this.minAngle);
                return val;
            },
            set: function (val) {
                val = parseInt(val);
                if (val > this.maxAngle) {
                    this.maxAngle = val;
                }
                this.minAngle = val;
            }
        },
        sliderMax: {
            get: function () {
                var val = parseInt(this.maxAngle);
                return val;
            },
            set: function (val) {
                val = parseInt(val);
                if (val < this.minAngle) {
                    this.minAngle = val;
                }
                this.maxAngle = val;
            }
        }
    }
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.slider-horizontal {
    height: 20px;
}

.slider-handle {
    height: 25px !important;
    width: 25px;
    top: -2.5px
}

#choose-consultant {
    padding: 100px 0;

    .container {
        display: block;

        .heading {
            margin: 0 auto 60px;

            h2 {
                text-align: center
            }
        }
    }
}

.output {
    font-family: Courier, Courier New, Lucida Console, Monaco, Consolas;
    background: #000000;
    color: #ffffff;
    padding: 20px;
    margin-bottom: 50px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    font-size: 13px;
}

form {
    margin: 0 auto;
    width: 960px;

    button {
        padding: 12px 30px;
        color: #FFFFFF;
        font-size: 24px;
        background-color: #10b981;
        border-radius: 8px;
        margin: 0 auto;
        transition: 400ms;

        &:hover {
            background-color: #0fc98b;
            color: #fff;
        }
    }

    .form-row {
        display: flex;
        margin-bottom: 30px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .input-group {
        margin-right: 30px;
        flex: 1;

        &:last-child {
            margin-right: 0;
        }

        label {
            display: block;
            margin-bottom: 15px;
            color: #656565E5;
            font-size: 24px;

            &[for="price"] {
                margin-bottom: 40px;
            }
        }

        .input-wrapper {
            background-color: #F6F6F5;
            border-radius: 8px;
            font-size: 20px;
            color: #363636;

            select {
                cursor: pointer;
                padding: 15px 20px;
                width: 100%;
            }
        }
    }
}

.description {
    color: #99DCD5;
    font-size: 20px;
    margin-bottom: 10px;
}

.heading {
    width: fit-content;
    margin: 0 auto 60px;
}

h2 {
    font-size: 36px;
    color: #222;

    span {
        color: #FF6610;
    }
}

.line {
    display: flex;
    justify-content: flex-end;
}
</style>