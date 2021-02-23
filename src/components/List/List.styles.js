import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ListWrapper = styled.div`
  background-color: white;
  display: inline-block;
  /* width: calc(100% / 6); */
  /* flex: 1 1 auto; */
  height: 100%;
  flex-direction: column;
  transition: all 600ms cubic-bezier(0.85, 0, 0.15, 1);
  overflow: hidden;
  transform-origin: 100% 100%;
  /* transform: ${(props) => {
    // if (props.element) {
    //   return 'translateX(-100%)'
    // }
    if (props.scroll) {
      return 'translateX(-' + 100 * props.index + '%)'
    }
  }}; */
  /* display: ${(props) => props.element && props.disable && 'none'}; */

  flex: ${(props) => (props.disable ? '0.001 0.001 0' : '1 1 100%')};
  animation: fadeInList 600ms cubic-bezier(0.64, 0, 0.78, 0);

  @keyframes fadeInList {
    0% {
      max-width: 0;
    }
    100% {
      max-width: 100%;
      /* border: white; */
    }
  }
  @keyframes fadeOutList {
    0% {
      flex: 1 1;
    }
    100% {
      flex: 0.000001 0.00001;
      border-color: white;
    }
  }
  border-right: 1px solid #e7e7e7;

  &:first-of-type {
    border-left: 1px solid #e7e7e7;
  }
`

export const TabWrapper = styled.div`
  position: relative;
  overflow-y: auto;
  height: calc(100% - 80px);
  /* height: max-content; */
`

export const Tab = styled.div`
  padding: 30px;
  overflow-x: auto;
  transition: 0.2s;
  &:hover {
    background-color: green;
    color: white;
  }
`
export const Title = styled.div`
  padding: 30px;
  display: flex;
  background-color: #4689ed;
  font-weight: 900;
  font-size: 0.75rem;
  color: white;
  align-items: center;
`
