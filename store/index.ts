import { defineStore } from 'pinia'
interface user {
    _id: string;
    nickname: string;
    email: string;
    firstName: string;
    lastName: string;
    surName: string;
    position: string;
    photo100: string;
    password: string;
    gender: {};
    role: string;
    referral: string;
    colorScheme: {
        name: string;
        value: string
    };
    photo: string;
    experience: never[];
    dateOfBirth: string;
    city: {
        nameEn: string;
        nameRu: string
    };
    confirmID: any;
    isDashboardSettings: boolean;
    subscriptionStatus: string;
    fullLink: string;
    ref: string;
    ref_links: { value: string; users: [] }[]
}

export const useMainStore = defineStore('main', {
    state: () => ({
        link: false,
        id: '',
        contactModal: false,
        mobileMenu: false,
        currentPageDashboard: '',
        userEmail: '',
        userPassword: '',
        userName: '',
        userRole: 'client',
        loginStatus: 'login',
        referral: '',
        isDashboardSettings: false,
        fillLink: '',
        menuShow: false,
        confirmID: '',
        userData: {
            _id: '',
            nickname: '',
            email: '',
            firstName: '',
            lastName: '',
            surName: '',
            position: '',
            photo100: '',
            password: '',
            gender: {},
            role: '',
            colorScheme: {
                name: 'light',
                value: 'Светлая'
            },
            photo: '',
            experience: [],
            dateOfBirth: '',
            city: {
                nameEn: 'Moscow',
                nameRu: 'Москва'
            },
            subscriptionStatus: '',
            ref: '',
            ref_links: [{
                value: '',
                users: []
            }]
        },
        registrationData: {
            name: '',
            email: '',
            role: '',
            password: '',
            ref: ''
        },
    }),
    getters: {
        getUserRole(state) {
            return state.userRole
        },
        linkStatusGet(state) {
            return state.link
        },
        getSessionID(state) {
            return state.id
        },
        getContactModal(state) {
            return state.contactModal
        },
        getMobileMenu(state) {
            return state.mobileMenu
        },
        getCurrentPageDashboard(state) {
            return state.currentPageDashboard
        },
        getUser(state) {
            return state.userData
        },
        getRegistrationData(state) {
            return state.registrationData
        },
        getReferral(state) {
            return state.referral
        },
        getIsDashboardSettings(state) {
            return state.isDashboardSettings
        },
        getFullLink(state) {
            return state.fillLink
        },
        getConfirmID(state) {
            return state.confirmID
        },
        getLoginStatus(state) {
            return state.loginStatus
        },
        menuShowStatus(state) {
            return state.menuShow
        }
    },
    actions: {
        setMenuStatus(value: boolean) {
            return this.menuShow = value
        },
        setLinkStatus(value: boolean) {
            return this.link = value
        },
        setSessionID(string: string) {
            return this.id = string
        },
        setStatusModal(value: boolean) {
            return this.contactModal = value
        },
        setMobileMenu(value: boolean) {
            return this.mobileMenu = value
        },
        setCurrentPageDashboard(value: string) {
            return this.currentPageDashboard = value
        },

        setUserEmail(value: string) {
            return this.userEmail = value
        },
        setUserPassword(value: string) {
            return this.userPassword = value
        },
        setFirstName(value: string) {
            return this.userData.firstName = value
        },
        setUser(value: user) {
            return this.userData = value
        },
        setRegistrationData(registrationData: { name: string; email: string; role: string; password: string; ref: string }) {
            return this.registrationData = registrationData
        },
        setUserRole(value: string) {
            return this.userRole = value
        },
        setReferral(value: string) {
            return this.referral = value
        },
        setDashboardSettings(value: boolean) {
            return this.isDashboardSettings = value
        },
        setFillLink(value: string) {
            return this.fillLink = value
        },
        setConfirmID(value: any) {
            return this.confirmID = value
        },
        setLoginStatus(value: string) {
            return this.loginStatus = value
        },
        setColorScheme(value: {
            name: string;
            value: string
        }) {
            return this.userData.colorScheme = value
        }
    }
})