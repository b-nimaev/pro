<template>
    <section>
        <DashboardSettingsSectionHeadingComponent title="Персональные данные" />
        <div class="row">
            <DashboardSettingsPersonalDataFormComponent />
        </div>
    </section>
</template>

<script lang="ts">
import { useMainStore } from "~/store";
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        let { firstName, lastName, gender, city } = mainStore.getUser
        return { firstName, lastName, gender, city, mainStore }
    },
    data() {
        return {
            colorTheme: '',
            experience: '',
            gender: this.gender,
            user: this.firstName,
            city: this.city,
            lastName: this.lastName,
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
                { nameEn: 'Novokuznetsk', nameRu: 'Новокузнецк' },
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
                { nameEn: 'Bugulma', nameRu: 'Бугульма' },
                { nameEn: 'Ulan-Ude', nameRu: 'Улан-Удэ' }

            ]

        }
    },
    methods: {
        changePersonality() {
            console.log('123')
        },
        async userwatch(e: any) {
            let value = e.target.value
            let updated = this.mainStore.getUser
            updated.firstName = value
            this.mainStore.setUser(updated)
            await fetch('http://localhost:1337/users/' + updated._id, {
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
        async lastNameWatch(e: any) {
            let value = e.target.value
            let updated = this.mainStore.getUser
            updated.lastName = value
            this.mainStore.setUser(updated)
            await fetch('http://localhost:1337/users/' + updated._id, {
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
        async genderWatcher(e: any) {
            let value = e.target.value
            let updated = this.mainStore.getUser
            updated.gender = value
            this.mainStore.setUser(updated)
            await fetch('http://localhost:1337/users/' + updated._id, {
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
        async cityWatcher(e: any) {
            let value = e.target.value
            let updated = this.mainStore.getUser
            updated.city = value
            this.mainStore.setUser(updated)
            await fetch('http://localhost:1337/users/' + updated._id, {
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
    mounted() {
        console.log(this.user)
    }
})
</script>

<style lang="scss" scoped>
@import '~/assets/css/settings.scss';

.row {
    display: flex;
    flex-direction: column;

    form {
        margin: 0 0 30px 0;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

form {
    display: flex;
    margin-bottom: 30px;

    &:last-child {
        margin-bottom: 0;
    }
}

.errMessage {
    margin-top: 15px;
    font-size: 14px;
    color: red;
}
</style>