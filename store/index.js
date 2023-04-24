import { defineStore } from 'pinia'
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
        userRole: '',
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
            subscriptionStatus: ''
        },
        registrationData: {
            name: '',
            email: '',
            role: '',
            password: ''
        }
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
        getUserdata(state) {
            return {
                userLogin: state.userLogin,
                userName: state.name,
                userPassword: state.userPassword
            }
        },
        getUser(state) {
            return state.userData
        },
        getRegistrationData(state) {
            return state.registrationData
        }
    },
    actions: {
        setLinkStatus(value) {
            return this.link = value
        },
        setSessionID(string) {
            return this.id = string
        },
        setStatusModal(value) {
            return this.contactModal = value
        },
        setMobileMenu(value) {
            return this.mobileMenu = value
        },
        setCurrentPageDashboard (value) {
            return this.currentPageDashboard = value
        },
        
        setUserEmail (value) {
            return this.userEmail = value
        },
        setUserPassword(value) {
            return this.userPassword = value
        },
        setFirstName(value) {
            return this.userData.firstName = value
        },
        setUser(value) {
            return this.userData = value
        },
        setRegistrationData(registrationData) {
            return this.registrationData = registrationData
        },
        setUserRole(value) {
            return this.userRole = value
        }
    }
})