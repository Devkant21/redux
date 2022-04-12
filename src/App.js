import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { IncNumber, DecNumber } from "./actions/index"

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch()

  return (
    <>
      <div className="container">
        <h1>Increment /Decrement counter</h1>
      
      <div className='quantity'>
        <a className='quantity_minus' title='Decrement' 
          onClick={ () => dispatch(DecNumber())}>
            <span>-</span>
        </a>
        <input name='quantity' type='text' className='quantity_input' value={myState}/>
        <a className='quantity_plus' title='Increment' 
          onClick={ () => dispatch(IncNumber())}>
            <span>+</span>
        </a>
      </div>
    </div>
    </>
    
  );
}

export default App;
