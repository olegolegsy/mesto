export default class UserInfo {
    constructor(profileSelectors) {
        this._name = document.querySelector(profileSelectors.name);
        this._job = document.querySelector(profileSelectors.job);
    }

    getUserInfo() {
        const UserInfoObject = {
            name: this._name.textContent,
            job: this._job.textContent
        }
        return UserInfoObject;
    }

    setUserInfo(userData) {
        this._name.textContent = userData.name;
        this._job.textContent = userData.job;
    }
}