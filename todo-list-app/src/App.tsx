import { useState ,useEffect} from 'react'
import "./styles.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSumit(e: { preventDefault: () => void; }) {
    e.preventDefault();

    useEffect(()=>{

      setTodos(item)
      console.log(todos);
    },[])
  }
  return (
    <>
      <form className="new-item-form rounded" onSubmit={handleSumit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" placeholder='由此輸入' value={item} onChange={e => setItem(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-sm btn-info">送出</button>
      </form>
      <h4>To-Do List</h4>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title"></h3>
          <p className="card-text">
            <ul>
              <li>
                <label className="card-text">
                  <input type="checkbox" />
                  {todos}</label>
                <button className="btn btn-close" ></button>
              </li>
            </ul>

          </p>
        </div>
      </div>
    </>

  )
}

export default App
