
import { makeAutoObservable } from 'mobx'

class apiStore {
  lists = Array('')

  constructor() {
    makeAutoObservable(this)
  }

  addList(el:string) {
    this.lists.push(el)
  }
  popList() {
    this.lists.pop()
  }
}

export default new apiStore()
