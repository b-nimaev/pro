<template>
    <aside>

        <!-- Имя, Фамилия и отчество -->
        <form>
            <div class="input-group">
                <label for="firstName">Имя</label>
                <input type="text" id="firstName" v-model="userData.firstName" placeholder="Jhon" @input="userwatch">
            </div>
            <div class="input-group">
                <label for="lastName">Фамилия</label>
                <input type="text" id="lastName" v-model="userData.lastName" placeholder="Doe" @input="userwatch">
            </div>
            <div class="input-group">
                <label for="surName">Отчество</label>
                <input type="text" id="surName" v-model="userData.surName" placeholder="" @input="userwatch">
            </div>
        </form>

        <form>
            <div class="input-group">
                <label for="nickname">Короткая ссылка</label>
                <input v-if="userData.nickname" type="text" :placeholder="`@${userData._id}`" id="nickname" v-model="userData.nickname" @input="userwatch">
                <input v-else type="text" :placeholder="`@${userData._id}`" id="nickname" v-model="nickname" @input="userwatch">
            </div>
        </form>

        <form class="custom-form" @submit.prevent="whataishelpupdate">
            <div class="input-group">
                <label for="whatishelp">В чём помогаете?</label>
                <textarea name="whatishelp" id="whatishelp" v-model="userData.whatishelp" placeholder=""></textarea>
            </div>
            <input type="submit" value="Сохранить">
        </form>

        <hr>



    </aside>
</template>
<style lang="scss" scoped>
@import '@/assets/css/settings';

hr {
    border-color: #eee
}

aside {
    width: 100%;

    form {
        width: 100%;
        display: flex;
        margin-bottom: 30px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.custom-form {
    flex-direction: column;
    input[type="submit"] {
        padding: 10px 15px;
        display: block;
        width: fit-content;
        background-color: #333;
        color: #fff;
        margin-top: 10px;
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
            firstName: this.firstName,
            lastName: this.lastName,
            surName: this.surName,
            nickname: this.nickname,
            selectedGenderToggler: false,
            selectedCity: {
                nameEn: 'Moscow',
                nameRu: 'Москва'
            },
            selectedCityToggler: false,
            cities: [
                { nameEn: 'Moscow', nameRu: 'Москва' },
                { nameEn: 'StPetersburg', nameRu: 'Санкт-Петербург' },
                { nameEn: 'Novosibirsk', nameRu: 'Новосибирск' },
                { nameEn: 'Yekaterinburg', nameRu: 'Екатеринбург' },
                { nameEn: 'Kazan', nameRu: 'Казань' },
                { nameEn: 'Chelyabinsk', nameRu: 'Челябинск' },
                { nameEn: 'Omsk', nameRu: 'Омск' },
                { nameEn: 'Samara', nameRu: 'Самара' },
                { nameEn: 'RostovonDon', nameRu: 'Ростов-на-Дону' },
                { nameEn: 'Ufa', nameRu: 'Уфа' },
                { nameEn: 'Krasnoyarsk', nameRu: 'Красноярск' },
                { nameEn: 'Perm', nameRu: 'Пермь' },
                { nameEn: 'Volgograd', nameRu: 'Волгоград' },
                { nameEn: 'Voronezh', nameRu: 'Воронеж' },
                { nameEn: 'Krasnodar', nameRu: 'Краснодар' },
                { nameEn: 'Saratov', nameRu: 'Саратов' },
                { nameEn: 'Tyumen', nameRu: 'Тюмень' },
                { nameEn: 'Izhevsk', nameRu: 'Ижевск' },
                { nameEn: 'Ulyanovsk', nameRu: 'Ульяновск' },
                { nameEn: 'Barnaul', nameRu: 'Барнаул' },
                { nameEn: 'Vladivostok', nameRu: 'Владивосток' },
                { nameEn: 'Yaroslavl', nameRu: 'Ярославль' },
                { nameEn: 'Irkutsk', nameRu: 'Иркутск' },
                { nameEn: 'Khabarovsk', nameRu: 'Хабаровск' },
                { nameEn: 'Orenburg', nameRu: 'Оренбург' },
                { nameEn: 'Novokuznetsk', nameRu: 'Новокузнецк' },
                { nameEn: 'Lipetsk', nameRu: 'Липецк' },
                { nameEn: 'Penza', nameRu: 'Пенза' },
                { nameEn: 'NaberezhnyeChelny', nameRu: 'Набережные Челны' },
                { nameEn: 'Cheboksary', nameRu: 'Чебоксары' },
                { nameEn: 'Vladimir', nameRu: 'Владимир' },
                { nameEn: 'Kurgan', nameRu: 'Курган' },
                { nameEn: 'Kaluga', nameRu: 'Калуга' },
                { nameEn: 'Smolensk', nameRu: 'Смоленск' },
                { nameEn: 'Stavropol', nameRu: 'Ставрополь' },
                { nameEn: 'Belgorod', nameRu: 'Белгород' },
                { nameEn: 'Sochi', nameRu: 'Сочи' },
                { nameEn: 'Kostroma', nameRu: 'Кострома' },
                { nameEn: 'Arkhangelsk', nameRu: 'Архангельск' },
                { nameEn: 'Tambov', nameRu: 'Тамбов' },
                { nameEn: 'Bryansk', nameRu: 'Брянск' },
                { nameEn: 'Chita', nameRu: 'Чита' },
                { nameEn: 'Yakutsk', nameRu: 'Якутск' },
                { nameEn: 'Kaliningrad', nameRu: 'Калининград' },
                { nameEn: 'Tula', nameRu: 'Тула' },
                { nameEn: 'Tver', nameRu: 'Тверь' },
                { nameEn: 'Vologda', nameRu: 'Вологда' },
                { nameEn: 'Kirov', nameRu: 'Киров' },
                { nameEn: 'Magadan', nameRu: 'Магадан' },
                { nameEn: 'Vladikavkaz', nameRu: 'Владикавказ' },
                { nameEn: 'Surgut', nameRu: 'Сургут' },
                { nameEn: 'Nizhnevartovsk', nameRu: 'Нижневартовск' },
                { nameEn: 'Norilsk', nameRu: 'Норильск' },
                { nameEn: 'PetropavlovskKamchatsky', nameRu: 'Петропавловск-Камчатский' },
                { nameEn: 'Murmansk', nameRu: 'Мурманск' },
                { nameEn: 'Anadyr', nameRu: 'Анадырь' },
                { nameEn: 'Abakan', nameRu: 'Абакан' },
                { nameEn: 'Nizhnekamsk', nameRu: 'Нижнекамск' },
                { nameEn: 'Miass', nameRu: 'Миасс' },
                { nameEn: 'Saransk', nameRu: 'Саранск' },
                { nameEn: 'Sterlitamak', nameRu: 'Стерлитамак' },
                { nameEn: 'Nalchik', nameRu: 'Нальчик' },
                { nameEn: 'KomsomolskonAmur', nameRu: 'Комсомольск-на-Амуре' },
                { nameEn: 'NizhnyTagil', nameRu: 'Нижний Тагил' },
                { nameEn: 'VelikyNovgorod', nameRu: 'Великий Новгород' },
                { nameEn: 'Almetyevsk', nameRu: 'Альметьевск' },
                { nameEn: 'Novorossiysk', nameRu: 'Новороссийск' },
                { nameEn: 'Krasnogorsk', nameRu: 'Красногорск' },
                { nameEn: 'Armavir', nameRu: 'Армавир' },
                { nameEn: 'Ussuriysk', nameRu: 'Уссурийск' },
                { nameEn: 'Kolomna', nameRu: 'Коломна' },
                { nameEn: 'Rubtsovsk', nameRu: 'Рубцовск' },
                { nameEn: 'Podolsk', nameRu: 'Подольск' },
                { nameEn: 'Mytishchi', nameRu: 'Мытищи' },
                { nameEn: 'Nakhodka', nameRu: 'Находка' },
                { nameEn: 'Pyatigorsk', nameRu: 'Пятигорск' },
                { nameEn: 'Kislovodsk', nameRu: 'Кисловодск' },
                { nameEn: 'Votkinsk', nameRu: 'Воткинск' },
                { nameEn: 'Kopeysk', nameRu: 'Копейск' },
                { nameEn: 'NovyUrengoy', nameRu: 'Новый Уренгой' },
                { nameEn: 'StaryOskol', nameRu: 'Старый Оскол' },
                { nameEn: 'Yelets', nameRu: 'Елец' },
                { nameEn: 'Berezniki', nameRu: 'Березники' },
                { nameEn: 'KamenskUralsky', nameRu: 'Каменск-Уральский' },
                { nameEn: 'Neftekamsk', nameRu: 'Нефтекамск' },
                { nameEn: 'Krymsk', nameRu: 'Крымск' },
                { nameEn: 'Novoshakhtinsk', nameRu: 'Новошахтинск' },
                { nameEn: 'Krasnoznamensk', nameRu: 'Краснознаменск' },
                { nameEn: 'Sarapul', nameRu: 'Сарапул' },
                { nameEn: 'Shakhty', nameRu: 'Шахты' },
                { nameEn: 'Klin', nameRu: 'Клин' },
                { nameEn: 'Solikamsk', nameRu: 'Соликамск' },
                { nameEn: 'Beloretsk', nameRu: 'Белорецк' },
                { nameEn: 'Ozherelye', nameRu: 'Ожерелье' },
                { nameEn: 'Zarechny', nameRu: 'Заречный' },
                { nameEn: 'Belokurikha', nameRu: 'Белокуриха' },
                { nameEn: 'Krymskaya', nameRu: 'Крымская' },
                { nameEn: 'Zelenokumsk', nameRu: 'Зеленокумск' },
                { nameEn: 'Gelendzhik', nameRu: 'Геленджик' },
                { nameEn: 'Klimovsk', nameRu: 'Климовск' },
                { nameEn: 'Abinsk', nameRu: 'Абинск' },
                { nameEn: 'Arzamas', nameRu: 'Арзамас' },
                { nameEn: 'Kolpashevo', nameRu: 'Колпашево' },
                { nameEn: 'Kizilyurt', nameRu: 'Кизилюрт' },
                { nameEn: 'Novozybkov', nameRu: 'Новозыбков' },
                { nameEn: 'Belovo', nameRu: 'Белово' },
                { nameEn: 'Omutninsk', nameRu: 'Омутнинск' },
                { nameEn: 'GornoAltaysk', nameRu: 'Горно-Алтайск' },
                { nameEn: 'Kumertau', nameRu: 'Кумертау' },
                { nameEn: 'Noyabrsk', nameRu: 'Ноябрьск' },
                { nameEn: 'BelayaKalin', nameRu: 'Белая Калинка' },
                { nameEn: 'GusKhrustalny', nameRu: 'Гусь-Хрустальный' },
                { nameEn: 'Kasimov', nameRu: 'Касимов' },
                { nameEn: 'Svetlogorsk', nameRu: 'Светлогорск' },
                { nameEn: 'Novoaltaysk', nameRu: 'Новоалтайск' },
                { nameEn: 'Aleksin', nameRu: 'Алексин' },
                { nameEn: 'Shuya', nameRu: 'Шуя' },
                { nameEn: 'Nyagan', nameRu: 'Нягань' },
                { nameEn: 'Sorsk', nameRu: 'Сорск' },
                { nameEn: 'Uglich', nameRu: 'Углич' },
                { nameEn: 'Kamennogorsk', nameRu: 'Каменногорск' },
                { nameEn: 'Gukovo', nameRu: 'Гуково' },
                { nameEn: 'Krasnokamensk', nameRu: 'Краснокаменск' },
                { nameEn: 'Vorkuta', nameRu: 'Воркута' },
                { nameEn: 'Tuymazy', nameRu: 'Туймазы' },
                { nameEn: 'Ozyorsk', nameRu: 'Озёрск' },
                { nameEn: 'Klintsy', nameRu: 'Клинцы' },
                { nameEn: 'Krasnoturinsk', nameRu: 'Краснотурьинск' },
                { nameEn: 'Kurtamysh', nameRu: 'Куртамыш' },
                { nameEn: 'Vyazma', nameRu: 'Вязьма' },
                { nameEn: 'Sibay', nameRu: 'Сибай' },
                { nameEn: 'Kargat', nameRu: 'Каргат' },
                { nameEn: 'Ulan-Ude', nameRu: 'Улан-Удэ' },
                { nameEn: 'Bugulma', nameRu: 'Бугульма' }

            ],
            city: { nameRu: '', nameEn: '' },
            findedCities: [{
                nameRu: '',
                nameEn: ''
            }],
            searchData: '',
            dateOfBirth: '',
            selectedGender: {
                value: '',
                name: ''
            },
            genders: [
                { name: 'male', value: 'Мужской' },
                { name: 'female', value: 'Женский' }
            ]
        }
    },
    computed: {
        userData () {
            return this.mainStore.getUser
        }
    },
    methods: {
        async whataishelpupdate() {
            await fetch('https://profori.pro/api/users' + this.userData._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.mainStore.getUser.whatishelp)
            }).then(async (response) => {
                alert('Сохранено!')
            }).catch(async (error) => {
                console.error(error)
            })
        },
        changePersonality() {
            console.log('123')
        },
        async userwatch(e: any) {
            let value = e.target.value
            let updated = this.mainStore.getUser
            // @ts-ignore
            updated[e.target.id] = value
            this.mainStore.setUser(updated)
            await fetch('https://profori.pro/api/users/' + updated._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.mainStore.getUser)
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.error(error)
            })
        },
        async toggleSelectGender(e: any) {
            this.selectedCityToggler = false
            if (this.selectedGenderToggler) {
                this.selectedGenderToggler = false
            } else {
                this.selectedGenderToggler = true
            }
        },
        async toggleSelectCity(e: any) {
            this.selectedGenderToggler = false
            if (this.selectedCityToggler) {
                this.selectedCityToggler = false
            } else {
                this.selectedCityToggler = true
                let cities = document.getElementsByClassName('item-city')
                for (let i = 0; i < cities.length; i++) {

                    cities[i].addEventListener('click', (e) => {

                        let updated = this.mainStore.getUser
                        updated.city = {

                            // @ts-ignore
                            nameEn: e.target.getAttribute('data-value'),
                            // @ts-ignore
                            nameRu: e.target.innerHTML

                        }

                        // диспатч надо сделать
                        this.mainStore.setUser(updated)
                        this.selectedCityToggler = false

                    })

                }
            }
        },
        async cityClick(e: any) {
            let selectedCity: any = {
                nameEn: e.target.getAttribute('data-value'),
                nameRu: e.target.innerHTML
            }
            this.selectedCity = selectedCity
            this.selectedCityToggler = false
            let updated: any = this.mainStore.getUser
            updated.city = this.selectedCity
            this.searchData = ''
            await fetch('https://profori.pro/api/users/' + updated._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.mainStore.getUser)
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.error(error)
            })
        },
        async selectGender(e: any) {
            this.selectedGenderToggler = false
            let selectedGender: any = {
                name: e.target.getAttribute('data-gender-name'),
                value: e.target.innerHTML
            }
            this.selectedGender = selectedGender
            let updated = this.mainStore.getUser
            updated.gender = selectedGender
            await fetch('https://profori.pro/api/users/' + updated._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.mainStore.getUser)
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.error(error)
            })
        },
        async searchCity(e: any) {
            this.findedCities = []
            for (let i = 0; i < this.cities.length; i++) {
                if (this.cities[i].nameRu.toLowerCase().indexOf(this.searchData.toLowerCase()) == -1) {
                    // console.log(`В ${this.cities[i].nameEn} отсутствует ${this.searchData}`)
                } else {
                    // @ts-ignore
                    this.findedCities.push(this.cities[i])
                    // console.log(`В ${this.cities[i].nameEn} присутсвует ${this.searchData}`)
                }
            }

            let cities = document.getElementsByClassName('item-city')
            for (let i = 0; i < cities.length; i++) {

                cities[i].addEventListener('click', async (e) => {

                    let updated = this.mainStore.getUser
                    updated.city = {

                        // @ts-ignore
                        nameEn: e.target.getAttribute('data-value'),
                        // @ts-ignore
                        nameRu: e.target.innerHTML

                    }

                    await fetch('https://profori.pro/api/users/' + updated._id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.mainStore.getUser)
                    }).then(response => { console.log(response) }).catch(error => { console.error(error) })

                    this.selectedCityToggler = false
                })

            }
        },
        async dateOfBirthhandler(e: any) {
            let newVal = e.target.value
            console.log(newVal)
            let user = this.mainStore.getUser
            user.dateOfBirth = newVal
            await fetch('https://profori.pro/api/users/' + user._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.mainStore.getUser)
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.error(error)
            })
        }
    },
    watch: {
        async dateOfBirth() {
            let updated = this.mainStore.getUser
            console.log(updated)
            updated.dateOfBirth = this.dateOfBirth
            await fetch('https://profori.pro/api/users/' + updated._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.mainStore.getUser)
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.error(error)
            })
        }
    }
})
</script>