import { NextComponentType } from 'next'
import { Puff } from '@agney/react-loading'
// import { Container } from './styles';

const Loading: NextComponentType = () => {
  return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10000,
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'white',
    inset: 0
  }}>
    <Puff />
  </div>
}

export default Loading
