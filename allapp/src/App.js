import './App.css';

function App() {
  const data = [
    {
    link:"https://singular-treacle-950e2b.netlify.app/",
    img:"",
    github:"",
    name:"Scroll and Get",
    type:"javascript"
    },
    {
      link:"https://polite-lolly-3387d8.netlify.app/",
      img:"",
      github:"",
      name:"Players and Games",
      type:"javascript"
      },
      {
        link:"https://storied-meerkat-f3c144.netlify.app/",
      img:"",
      github:"",
      name:"Web Coffee Shop",
      type:"javascript"
      },
      {
        link:"https://storied-meerkat-f3c144.netlify.app/",
        img:"",
        github:"",
        name:"Web Coffee Shop",
        type:"javascript"
      }
  ]
  return (
    <div className="App">
     {data && data.map((el,ind)=>{
      return <div>
        

      </div>
     })}
    </div>
  );
}

export default App;
