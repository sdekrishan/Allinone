import { Box, flexbox, Image, Text } from '@chakra-ui/react';
import './App.css';
import {images} from './Container/index'
function App() {
  const data = [
    {
    link:"https://singular-treacle-950e2b.netlify.app/",//1
    img:images.mock1,
    github:"",
    name:"Scroll and Get",
    type:"javascript"
    },
    {
      link:"https://polite-lolly-3387d8.netlify.app/",//2
      img:images.mock2,
      github:"",
      name:"Players and Games",
      type:"javascript"
      },
      {
        link:"https://storied-meerkat-f3c144.netlify.app/",//3
      img:images.mock3,
      github:"",
      name:"Web Coffee Shop",
      type:"javascript"
      },
      {
        link:"https://storied-meerkat-f3c144.netlify.app/",//4
        img:images.weather,
        github:"",
        name:"Weather Forecast",
        type:"javascript"
      },
      {
        link:"https://tic-tac-toe-wknv.vercel.app/",//5
        img:images.tictac,
        github:"",
        name:"Tic Tac Toe",
        type:"javascript"
      },
      {
        link:"https://snake-game-fnql.vercel.app/",//6
        img:images.snake,
        github:"",
        name:"Snake Game",
        type:"javascript"
      },
      {
        link:"https://unrivaled-meerkat-06c2bd.netlify.app/",//7
        img:images.library,
        github:"",
        name:"Our Library ",
        type:"javascript"
        },
        {
          link:"https://mock-eight.vercel.app/",//8
          img:images.pokemon,
          github:"",
          name:"PokeHub",
          type:"React"
          },
          {
            link:"https://mock7-dun.vercel.app/",//9
          img:images.mock7,
          github:"",
          name:"KStocks",
          type:"javascript"
          },
          {
            link:"https://mock8-gilt.vercel.app/",//10
            img:images.mock8,
            github:"",
            name:"Weather Forecast",
            type:"javascript"
          },
          {
            link:"https://storied-meerkat-f3c144.netlify.app/",//11
            img:"",
            github:"",
            name:"Tic Tac Toe",
            type:"javascript"
          },
          {
            link:"https://storied-meerkat-f3c144.netlify.app/",//12
            img:"",
            github:"",
            name:"Snake Game",
            type:"javascript"
          },

          

      
  ]
  return (
    <Box className="App" display={'flex'} flexWrap='wrap' border='1px solid black'>
     {data && data.map((el,ind)=>{
      return <Box key={ind} w='25%' border='1px solid black' >
        <Image src={el.img} />
        <Text> {el.name}</Text>
      </Box>
     })}
    </Box>
  );
}

export default App;
