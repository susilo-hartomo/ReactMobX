// src/stores/counter-store.tsx
import { observable, action, computed } from 'mobx'

export class CounterStore {

  @observable
  count = 0

  //addEvenlistener
  @action
  increment() {
    this.count++
  }

  @action
  decrement() {
    this.count--
  }

  //autoRun
  @computed
  get doubleCount() {
    return this.count * 2
  }
}