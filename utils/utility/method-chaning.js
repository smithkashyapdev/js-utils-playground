export class UpiOnboardingManager {
    constructor() {
        this.params = {}
    }

    fetchVmn(params) {
        return this
    }

    tokenGeneration(params) {
        return this
    }

    sendSMS(number){
        return this
    }

    bindDevice(params){
        return this
    }

    startOTPListening(){
        return this
    }

    verifyOTP(otp){
        return this
    }

    completeOnboarding(){
        return this
    }

    getOnboardingUserDetail(){
        return this
    }


}

export function UpiOnboardingManagerFn(params) {
    this.fetchVmn = function (params) {
        return this
    }

    this.tokenGeneration = function (params) {
        return this
    }

    this.sendSMS = function (number) {
        return this
    }

    this.bindDevice = function (params) {
        return this
    }

    this.startOTPListening = function () {
        return this
    }
    this.verifyOTP = function (otp) {
        return this
    }
    this.completeOnboarding = function () {
        return this
    }
    this.getOnboardingUserDetail = function () {
        return this
    }
}