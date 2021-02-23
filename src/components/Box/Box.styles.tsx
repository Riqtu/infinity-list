import styled from '@emotion/styled'
import { observable, observe, toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import boxStore from './Box.store'

const whiteTheme =  boxStore.whiteTheme 

console.log(whiteTheme)

export const BoxWrapperTest = styled.div`
  background-color: ${whiteTheme ? 'gray' : 'black'};
  width: 300px;
  height: 300px;
`

export const  BoxWrapper = observer((props: any) =>{
  const whiteTheme =  boxStore.whiteTheme 

  return (< BoxWrapperTest style={{  backgroundColor: whiteTheme ? 'gray' : 'black'}}>{props.children}</ BoxWrapperTest >)
})
