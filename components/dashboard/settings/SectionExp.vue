<template>
    <section>
        <DashboardSettingsSectionHeadingComponent title="Карьера" />
        <form @submit.prevent="changePersonality">
            <!-- <h4 class="form-heading">Добавить место работы</h4> -->
            <div class="input-group">
                <label for="experience">Место работы</label>
                <input type="text" id="experience" v-model="newData.experience" placeholder="Укажите компанию">
            </div>
            <div class="input-group date" v-if="newData.experience">
                <div class="mini-input-group">
                    <label for="year">Год начало работы</label>
                    <div class="input-wrapper">
                        <div class="selected">{{ newData.year }}</div>
                        <div class="select-dropmenu">
                            <ul class="active">
                                <li @click="selectYearStart" v-for="year in years" :key="year">{{ year }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mini-input-group" v-if="newData.year">
                    <label for="month">Месяц</label>
                    <div class="input-wrapper">
                        <div class="selected">{{ newData.mounth.value }}</div>
                        <div class="select-dropmenu">
                            <ul class="active">
                                <li v-for="mounth in mounths" :key="mounth.key">{{ mounth.value }}</li>
                            </ul>
                        </div>
                    </div>
                    <!-- <input type="" id="year" v-model="newData.year" placeholder="Не выбран"> -->
                </div>
                <div class="mini-input-group" v-if="newData.year">
                    <label for="toPresent">По настоящее время</label>
                    <div class="label-watcher" @click="toPresentClick">
                        <div class="item" :class="{ 'active': newData.toPresent }"></div>
                    </div>
                    <input type="checkbox" id="toPresent" v-model="newData.toPresent">
                </div>
            </div>
            <div class="input-group date" v-if="!newData.year">
                <div class="mini-input-group">
                    <label for="year_end">Год окончания работы</label>
                    <div class="input-wrapper">
                        <select name="year" id="year" v-model="newData.year_end">
                            <option value="2023" selected>2023</option>
                            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                    </div>
                </div>
                <div class="mini-input-group">
                    <label for="month_end">Год окончания работы</label>
                    <div class="input-wrapper">
                        <select name="month" id="month" v-model="newData.month_end">
                            <option v-for="month in mounths" :key="month.key" :value="month.key">{{ month.value }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="input-group" v-if="newData.experience">
                <label for="position">Должность</label>
                <input type="text" id="position" v-model="newData.position" placeholder="">
            </div>
            <!-- <div class="input-group">
                <input type="submit" value="Сохранить">
            </div> -->
        </form>
    </section>
</template>

<style lang="scss" scoped>
@import '~/assets/css/settings.scss';

form {
    .form-heading {
        font-size: 20px;
        margin-bottom: 18px;
        font-weight: 500;
    }

    .input-group {
        margin-bottom: 30px;

        &.date {
            display: flex;
            flex-direction: row;

            .mini-input-group {
                display: flex;
                flex-direction: column;
                margin-right: 30px;

                .label-watcher {
                    background-color: #eee;
                    width: 70px;
                    height: 40%;
                    margin: auto;
                    border-radius: 30px;
                    position: relative;
                    display: flex;

                    // overflow: hidden;
                    .item {
                        position: relative;
                        top: -3px;
                        width: 40px;
                        height: 40px;
                        cursor: pointer;
                        background-color: #333;
                        border-radius: 50%;
                        transition: 400ms;
                        box-shadow: 1px 3px 7px 0px #333;
                        left: 0;

                        &.active {
                            left: 35px;
                            background-color: #94ff83;
                            box-shadow: 1px 3px 7px 0px #94ff83;
                        }
                    }
                }

                &:last-child {
                    margin-right: 0;
                }

                input#toPresent {
                    display: none;
                }
            }
        }

        &:last-child {
            margin-bottom: 0;
        }

        input[type="submit"] {
            display: block;
            width: fit-content;
        }
    }
}
</style>

<script lang="ts">
import { useMainStore } from "~/store";
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            newData: {
                experience: '',
                year: '2023',
                mounth: { key: 'january', value: 'январь' },
                month_end: { key: 'january', value: 'январь' },
                year_end: '2023',
                position: '',
                toPresent: '',
                selectYearDropdown: false
            },
            years: [
                2023, 2022, 2021, 2020, 2019, 2018, 2017,
                2016, 2015, 2014, 2013, 2012, 2011,
                2010, 2009, 2008, 2007, 2006, 2005,
                2004, 2003, 2002, 2001, 2000, 1999,
                1998, 1997, 1996, 1995, 1994, 1993,
                1992, 1991, 1990, 1989, 1988, 1987,
                1986, 1985, 1984, 1983, 1982, 1981,
                1980
            ],
            mounths: [
                { key: 'january', value: 'январь' },
                { key: 'february', value: 'февраль' },
                { key: 'march', value: 'март' },
                { key: 'april', value: 'апрель' },
                { key: 'may', value: 'май' },
                { key: 'june', value: 'июнь' },
                { key: 'july', value: 'июль' },
                { key: 'august', value: 'август' },
                { key: 'september', value: 'сентябрь' },
                { key: 'october', value: 'октябрь' },
                { key: 'november', value: 'ноябрь' },
                { key: 'december', value: 'декабрь' }
            ]
        }
    },
    methods: {
        changePersonality() {
            let formData = this.newData
            console.log(formData)
        },
        toPresentClick() {
            let input = document.getElementById('toPresent')
            if (input) {
                input.click()
            }
        },
        async selectYearStart (e: any) {
            // console.log(this.selectYearDropdown)
        }
    }
})
</script>
