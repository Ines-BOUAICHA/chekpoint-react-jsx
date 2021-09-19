
import './App.css';
import './style.css';
import myimage from "./myimage.jpg";
function App() {
  return (
    <div className="App">
      <div>
         <div style={{"border":"solid 1px black","max-width":"100vw"}}>
         <h1 className="title red">Aloe Vera</h1>
         <br />
         <img src={myimage} alt= "myimage" width="360" height="360"/>  
         <br />
         <img src="./Components/aloe vera.png" alt= "imagefrom public" width="360" height="360"/>
         </div>
         <video width={360} height={360} controls>
         <source src="myvideo.mp4" type="video/mp4"/>
         </video>
      </div>
    </div>
  );
}

export default App;
