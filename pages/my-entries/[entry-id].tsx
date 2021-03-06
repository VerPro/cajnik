import {
  Stack,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Entry = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <h1>Můj deník</h1>
      <Link href="/my-teas" passHref>
        <Button variant="contained" color="secondary">
          <a>Zpět</a>
        </Button>
      </Link>
      <h2>Název záznamu</h2>
      <p>Čajování na vyhlídce</p> {/* Tahat z databáze */}
      <h2>Datum zápisu</h2>
      <p>12. 3. 2021 </p> {/* Tahat z databáze */}
      <h2>Čaj</h2>
      <Link href="">
        <a>Tie Guan Yin</a>
      </Link>
      {/* Tahat z databáze */}
      <h2>Příprava</h2>
      <p>Hmotnost: 8 g</p> {/* Tahat z databáze */}
      <p>Objem vody: 120 ml</p> {/* Tahat z databáze */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{`1. nálev`}</Typography> {/* Tahat z databáze */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Stack spacing={2}>
              <h2>Délka nálevu:</h2>
              <p>60 s</p> {/* Tahat z databáze */}
              <h2>Teplota vody:</h2>
              <p>80 °C </p> {/* Tahat z databáze */}
              <h2>Chuťový profil</h2>
              <p>Bylinný</p> {/* Tahat z databáze */}
              <h2>Poznámky</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, quos distinctio, pariatur sint tenetur harum itaque
                fuga labore aliquid est, explicabo culpa velit laborum id
                possimus sit ratione delectus suscipit?
              </p>{' '}
              {/* Tahat z databáze */}
            </Stack>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button variant="outlined">Editovat zápis </Button>
    </Stack>
  );
};
export default Entry;
