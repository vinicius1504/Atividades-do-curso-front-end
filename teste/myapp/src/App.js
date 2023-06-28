import "./App.css"
import api from "./api";

export default App ()
{
    const [id, advice] = texto()

  requisitar(() =>{
      api.get("1").then((response) => deta(response.data));

    })
    return(
      <div className="App">
      <p>id: {}</p>
      <p></p>
      </div>
    )
}