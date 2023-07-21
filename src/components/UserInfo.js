export default class UserInfo {
    constructor(profileSelectors) {
        this._name = document.querySelector(profileSelectors.name);
        this._about = document.querySelector(profileSelectors.about);
        this._avatar = document.querySelector(profileSelectors.avatar);
    }

    getUserInfo() {
        const userInfoObject = {
            name: this._name.textContent,
            about: this._about.textContent,
            avatar: this._avatar.src
        }
        return userInfoObject;
    }

    setUserInfo(userData) {
        this._name.textContent = userData.name;
        this._about.textContent = userData.about;
        this._avatar.src = userData.avatar;
    }
}