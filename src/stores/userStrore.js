import { observable, action, computed, decorate } from 'mobx'

export class UserStore {
    name = "encus"
}

decorate(UserStore, {
    name: observable,
})