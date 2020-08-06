// src/stores/counter-store.tsx
import { observable, action, computed, decorate } from 'mobx'

export class CounterStore {

    count = 0

    //addEvenlistener
    increment() {
        this.count++
    }

    decrement() {
        this.count--
    }

    //autoRun
    get doubleCount() {
        return this.count * 2
    }
}

decorate(CounterStore, {
    count: observable,
    increment: action,
    decrement: action,
    doubleCount: computed
})