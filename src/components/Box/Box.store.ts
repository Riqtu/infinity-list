import { makeAutoObservable } from 'mobx'

class boxStore {
  whiteTheme = true
  test = 'kek'

  constructor() {
    makeAutoObservable(this)
  }

  switchTheme() {
    this.whiteTheme = !this.whiteTheme
    this.test = 'kok'
  }
}

export default new boxStore()
