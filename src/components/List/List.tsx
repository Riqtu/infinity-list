import { observer } from 'mobx-react-lite'
import apiStore from '../../stores/api.store'
import { ListWrapper, Tab, Title, TabWrapper } from './List.styles'

const List = observer((props: any) => {
  const tabs = new Array(7).fill('kek')

  const options = {
    disable: props.disable,
    length: props.length,
    element: props.length - 1 && props.length,
    scroll: props.scroll,
    index: props.index,
  }
  return (
    <ListWrapper {...options}>
      <Title>Title {props.index}</Title>
      <TabWrapper>
        {tabs.map((el) => (
          <Tab onClick={() => apiStore.addList(el)}>{el}</Tab>
        ))}
      </TabWrapper>
    </ListWrapper>
  )
})

export default List
