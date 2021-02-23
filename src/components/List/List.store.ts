
import { makeAutoObservable } from 'mobx'

class listStore {
  whiteTheme = true

  constructor() {
    makeAutoObservable(this)
  }

  switchTheme() {
    this.whiteTheme = !this.whiteTheme
  }
}

export default new listStore()
