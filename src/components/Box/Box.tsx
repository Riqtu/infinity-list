import { observer } from 'mobx-react-lite'
import boxStore from './Box.store'
import { BoxWrapper } from './Box.styles'

const Box = observer((props: any) => {
  return (
    <BoxWrapper>
      <button onClick={() => boxStore.switchTheme()}>{boxStore.test}</button>
    </BoxWrapper>
  )
})

export default Box
