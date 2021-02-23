import logo from './logo.svg'
import './App.css'
import List from './components/List/List'
import apiStore from './stores/api.store'
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  return (
    <div className="App">
      <button onClick={() => apiStore.popList()}>button</button>
      <div className="listWrapper">
        {apiStore.lists.map((el, index, arr) => (
          <List
            disable={index < arr.length - 4}
            scroll={arr.length > 6 && index}
            length={arr.length}
            index={index}
          ></List>
        ))}
      </div>
    </div>
  )
})

export default App
