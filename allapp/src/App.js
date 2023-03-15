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
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {BsGithub} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import {MdDarkMode} from 'react-icons/md'
import {CiSun} from 'react-icons/ci'
import "./App.css";
import { images } from "./Container/index";
function App() {
  const data = [
    {
      link: "https://singular-treacle-950e2b.netlify.app/", //1
      img: images.mock1,
      desc: "In this app you can get more and more data when you hit the bottom every time. Simple project made with Html, Css, Javascript.",
      github: "https://github.com/sdekrishan/Allinone/tree/main/projects/mock1",
      name: "Scroll and Get",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://polite-lolly-3387d8.netlify.app/", //2
      img: images.mock2,
      desc: "This app contains details about NBA Players. You can get players information and search the matches between particular dates. Also support searching, pagination. ",
      github: "https://github.com/sdekrishan/Allinone/tree/main/projects/mock2/mock",
      name: "Players and Games",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://storied-meerkat-f3c144.netlify.app/", //3
      img: images.mock3,
      github: "https://github.com/sdekrishan/Allinone/tree/main/projects/mock3",
      desc: "A Simple Coffee Shop App where you can buy coffee. User can sorting and filter. Cart functionality is also there. Made with Html, css and javascript.",
      name: "Web Coffee Shop",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://startling-starlight-5eea2b.netlify.app/", //4
      img: images.weather,
      github: "https://github.com/sdekrishan/Weather_Forecast",
      desc: "A weather app in that you can see temperature of any city around the world.",
      name: "Weather Forecast",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://tic-tac-toe-wknv.vercel.app/", //5
      img: images.tictac,
      github: "https://github.com/sdekrishan/Tic-Tac-toe",
      desc: "A traditional but cool tic-tac-toe game. You can play an audio while playing the game.",
      name: "Tic Tac Toe",
      tech: ['React.js','Css','Jsx'],
      type: "React",
    },
    {
      link: "https://snake-game-fnql.vercel.app/", //6
      img: images.snake,
      github: "https://github.com/sdekrishan/SnakeGame",
      desc: "A simple but fun Snake game. You can memorize your childhood memories while playing this game.",
      name: "Snake Game",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://unrivaled-meerkat-06c2bd.netlify.app/", //7
      img: images.library,
      github: "https://github.com/sdekrishan/Allinone/tree/main/projects/mock4",
      desc: "This app contains books on which you do post, get and delete operations (only admin can do that). Also user can borrow these books.",
      name: "Our Library ",
      tech: ['Html','Css','JavaScript'],
      type: "Javascript",
    },
    {
      link: "https://mock9-azure.vercel.app/", //11
      img: images.mock9,
      github: "https://github.com/sdekrishan/Allinone/tree/main/projects/mock9",
      desc: "A simple quiz app on which you can attempt questions on various categories and also you can get questions as per your choice. You will get the report after submitting the quiz and see the leaderboard also.",
      name: "KKP's Quiz",
      tech: ['React.js','Chakra UI','Jsx','Redux'],
      type: "React",
    },
    {
      link: "https://mock7-dun.vercel.app/", //9
      img: images.mock7,
      github: "https://github.com/sdekrishan/Allinone/tree/main/projects/mock7",
      desc: "This app contains two section admin and user. Admin can add multiple stocks also this app have CRUD operations. Only admin can do the CRUD. Also user can purchase stocks and see the report in doughnut chart and in tabular form.",
      name: "KStocks",
      tech: ['React.js','Chakra UI','Redux','Chart.js'],
      type: "React",
    },
    {
      link: "https://mock6-liard.vercel.app", //8
      img: images.pokemon,
      github: "https://github.com/sdekrishan/Allinone/tree/main/projects/mock6",
      desc: "The Pokemon app on which you can search various pokemon by their name or their types. A simple but cool app.",
      name: "PokeHub",
      tech: ['React.js','Css','Jsx'],
      type: "React",
    },
    {
      link: "https://mock8-gilt.vercel.app/", //10
      img: images.mock8,
      github: "https://github.com/sdekrishan/Allinone/tree/main/projects/mock8",
      desc: "A Simple e-commerce app in which you can purchase the item. Sorting, filtering with pagination also supports.",
      name: "KShop",
      tech: ['React.js','Chakra UI','Jsx','Redux'],
      type: "React",
    },

    {
      link: "https://chic-torte-49ddec.netlify.app/", //12
      img: images.youtube,
      github: "https://github.com/sdekrishan/Youtube_clone",
      desc: "This is a Youtube clone where you can search videos and see them.",
      name: "Youtube clone",
      tech: ['Html','Css','Javascript'],
      type: "Javascript",
    },
    {
      link: "https://steady-custard-dc6be0.netlify.app/", //12
      img: images.shoe,
      github: "https://github.com/sdekrishan/ShoesShopping",
      desc: "Basic shopping app with some static data. Shoes app with good UI.",
      name: "Shoe Shopping",
      tech: ['Html','Css','Javascript'],
      type: "Javascript",
    },
    {
      link: "https://dreamy-bublanina-a4ee7b.netlify.app/", //12
      img: images.blog,
      github: "https://github.com/sdekrishan/Allinone/tree/main/projects/mock5",
      desc: "Basic blog app where you can add blogs edit them, add comment and also give likes to other posts. There is a leaderboard where you can see total likes and total comments of users.",
      name: "KSocial",
      tech: ['Html','Css','Javascript'],
      type: "Javascript",
    }
  ];
  const { colorMode, toggleColorMode } = useColorMode()
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
      <IconButton position={'absolute'} top='5rem' right={'1rem'} zIndex='overlay'  onClick={toggleColorMode} colorScheme={colorMode==='dark' ?'orange' :"blackAlpha"} icon={colorMode==='dark' ?<CiSun/> :<MdDarkMode/>}>
        
      </IconButton>
      <Grid
      mt='4rem'
        className="App"
        templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)"}}
        gap="1rem"
        flexWrap="wrap"
      >
        {data &&
          data.map((el, ind) => {
            return (
              <Card maxW="sm" border='1px solid lightgray' key={ind} marginInline='auto' >
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
                        <Text p='10px 14px' mb='10px' alignContent={'space-evenly'}  border={colorMode === 'light' ? '1px solid black' : '1px solid white'} borderRadius='1rem' key={i}>
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
                    <Link href={el.link} target='_blank' textDecoration={'none'}>
                    <Button  colorScheme="green" rightIcon={<AiFillEye/>}>
                      Go live
                    </Button>
                    </Link>
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
