import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  flexbox,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {BsGithub} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import "./App.css";
import { images } from "./Container/index";
function App() {
  const data = [
    {
      link: "https://singular-treacle-950e2b.netlify.app/", //1
      img: images.mock1,
      desc: "In this app you can get more and more data when you hit the bottom every time. Simple project made with Html, Css, Javascript.",
      github: "",
      name: "Scroll and Get",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://polite-lolly-3387d8.netlify.app/", //2
      img: images.mock2,
      desc: "This app contains details about NBA Players. You can get players information and search the matches between particular dates. Also support searching, pagination. ",
      github: "",
      name: "Players and Games",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://storied-meerkat-f3c144.netlify.app/", //3
      img: images.mock3,
      github: "",
      desc: "A Simple Coffee Shop App where you can buy coffee. User can sorting and filter. Cart functionality is also there. Made with Html, css and javascript.",
      name: "Web Coffee Shop",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://storied-meerkat-f3c144.netlify.app/", //4
      img: images.weather,
      github: "",
      desc: "A weather app in that you can see temperature of any city around the world.",
      name: "Weather Forecast",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://tic-tac-toe-wknv.vercel.app/", //5
      img: images.tictac,
      github: "",
      desc: "A traditional but cool tic-tac-toe game. You can play an audio while playing the game.",
      name: "Tic Tac Toe",
      tech: ['React.js','Css','Jsx'],
      type: "React",
    },
    {
      link: "https://snake-game-fnql.vercel.app/", //6
      img: images.snake,
      github: "",
      desc: "A simple but fun Snake game. You can memorize your childhood memories while playing this game.",
      name: "Snake Game",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://unrivaled-meerkat-06c2bd.netlify.app/", //7
      img: images.library,
      github: "",
      desc: "This app contains books on which you do post, get and delete operations (only admin can do that). Also user can borrow these books.",
      name: "Our Library ",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://mock-eight.vercel.app/", //8
      img: images.pokemon,
      github: "",
      desc: "The Pokemon app on which you can search various pokemon by their name or their types. A simple but cool app.",
      name: "PokeHub",
      tech: ['React.js','Css','Jsx'],
      type: "React",
    },
    {
      link: "https://mock7-dun.vercel.app/", //9
      img: images.mock7,
      github: "",
      desc: "This app contains two section admin and user. Admin can add multiple stocks also this app have CRUD operations. Only admin can do the CRUD. Also user can purchase stocks and see the report in doughnut chart and in tabular form.",
      name: "KStocks",
      tech: ['React.js','Chakra UI','Jsx','Redux','Chart.js'],
      type: "React",
    },
    {
      link: "https://mock8-gilt.vercel.app/", //10
      img: images.mock8,
      github: "",
      desc: "A Simple e-commerce app in which you can purchase the item. Sorting, filtering with pagination also supports.",
      name: "Weather Forecast",
      tech: ['React.js','Chakra UI','Jsx','Redux'],
      type: "React",
    },
    {
      link: "https://mock-eight.vercel.app/", //11
      img: images.mock9,
      github: "",
      desc: "A simple quiz app on which you can attempt questions on various categories and also you can get questions as per your choice. You will get the report after submitting the quiz and see the leaderboard also.",
      name: "KKP's Quiz",
      tech: ['React.js','Chakra UI','Jsx','Redux'],
      type: "React",
    },
    {
      link: "https://chic-torte-49ddec.netlify.app/", //12
      img: images.youtube,
      github: "",
      desc: "This is a Youtube clone where you can search videos and see them.",
      name: "Youtube clone",
      tech: ['Html','Css','Javascript'],
      type: "Javascript",
    },
  ];
  return (
    <>
      <Text
        p="1rem"
        bgColor={"black"}
        mt="0"
        color="white"
        fontSize={"2xl"}
        textAlign="center"
      >
        Welcome to ProDozen
      </Text>
      <Grid
        className="App"
        templateColumns={"repeat(3,1fr)"}
        gap="1rem"
        flexWrap="wrap"
        border="1px solid black"
      >
        {data &&
          data.map((el, ind) => {
            return (
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={el.img}
                    border='1px solid grey'
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{el.name}</Heading>
                    <Text>{el.desc}</Text>
                  
                    <Flex wrap={'wrap'} justifyContent='space-evenly' >
                      {el.tech.map((e,i)=>(
                        <Text p='10px 14px' mb='10px' alignContent={'space-evenly'}  border='1px solid black' borderRadius='1rem' key={i}>
                          {e}
                        </Text>
                      ))}
                    </Flex>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2" marginInline={'auto'}>
                    <Button variant="solid" colorScheme="blue" rightIcon={<BsGithub/>}>
                      Github
                    </Button>
                    <Button  colorScheme="green" rightIcon={<AiFillEye/>}>
                      Go live
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
      </Grid>
    </>
  );
}

export default App;
