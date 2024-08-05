// import { FC} from 'react'
import './App.css'
import { Stars } from './components/Stars'

// type TypeNumber1 = string

// // const a:TypeNumber1 = {a: 1}
// type TypeProp = {name: string}

// const FunRet: FC<TypeProp> = ({name}):JSX.Element => {
//   return (
//     <div>{name}</div>
//   )
// }

function App() {

  return (
    <>
      {/* <FunRet name={'g'}/> */}
      <Stars count={5}/>
      <Stars count={1}/>
      <Stars count={0}/>
      <Stars count={7}/>
      <Stars count={-1}/>
    </>
  )
}

export default App
