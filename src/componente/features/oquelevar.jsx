import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, FormControl, FormControlLabel, Input, Stack, TextField, Typography } from "@mui/material"
import Jacketa from '../../imagens/jacket.png'
import CanecaInox from '../../imagens/caneca-inox.png'
import IsolanteTermico from '../../imagens/Isolante-Térmico.png'
import LitrosBolso from '../../imagens/litros-com-bolso.png'
import ToalhaBanho from '../../imagens/toalha-de-banho.png'
import Muclhila from '../../imagens/mochila.png'

import Tienda from '../../imagens/tienda_960x.png'
import Meias from '../../imagens/meias.jpg'
import Talco from '../../imagens/talco.png'
import Desk from '../../imagens/desk_960x.png'
import Agua from '../../imagens/água.png'
import BastaoCaminhada from '../../imagens/bastao_de_caminhada.png'
import Biblia from '../../imagens/bíblia-sagrada.png'
import ConjutoTalher from '../../imagens/conjuto-de-talher.png'
import Lanterna from '../../imagens/lanterna_de_cabeca.png'
import MantaTermica from '../../imagens/Manta-Termica .png'
import Lona from '../../imagens/lona.jpg'
import MultiusoLencos from '../../imagens/multiuso_de_lencos.png'
import Repelente from '../../imagens/repelente-exposis.png'
import { Baseboards } from '../baseboards/footer';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const MeteriasparaTop = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const createnewcard = [


        , {
            avatar: 'p',
            userName: 'Computador ',
            filmPhoto: `${Desk}`,
            description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
            drama asiático; fez-me refletir um pouco sobre
            os valores de culturas distintas`,
        },
        {
            avatar: 'p',
            userName: 'Capinha de Celular',
            filmPhoto: `${Tienda}`,
            description: `Foi incrível conhecer um pouco mais da cultura chinesa e do
            drama asiático; fez-me refletir um pouco sobre
            os valores de culturas distintas`,
        },




    ]

    return (

        <>
            <Typography
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    margin: '2rem',

                }}
            >
                <h2 className="heading">Listas  úteis  para<span>  você legendario</span></h2>
            </Typography>


            <Typography sx={{
                minHeight: "100vh",
                padding: "5rem 4% 2rem",
                overflow: 'hidden',
                background: '',
                width: '100%',

                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                flexWrap: 'wrap',
            }}>



                {createnewcard.length > 0 && createnewcard.map((newStyle, index) => {
                    return (
                        <Stack sx={{

                            gap: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            margin: '2.5rem',
                        }}>

                            <Card key={index}
                                sx={{
                                    maxWidth: 345,
                                    background: 'rgb(3,37,67)',
                                    color: 'white',
                                    gap: '2rem',

                                }}
                            >

                                <CardHeader
                                    avatar={
                                        <Avatar
                                            sx={{
                                                width: '45px',
                                                height: '45px',
                                                borderRadius: '60px',
                                                border: '2px solid #e50914',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                fontSize: '2rem'
                                            }}

                                            aria-label="recipe">
                                            {newStyle?.avatar}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={newStyle?.userName}
                                />
                                <CardMedia
                                    component="img"
                                    height="315px"
                                    image={newStyle?.filmPhoto}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography sx={{ color: '#fff' }} variant="body2" color="text.secondary">
                                        {newStyle?.description}
                                    </Typography>
                                </CardContent>

                                <CardActions disableSpacing>

                                    <IconButton sx={{ color: '#f6410a' }} aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </CardActions>

                            </Card>
                        </Stack>



                    )
                })}




            </Typography>

            <Typography>
                <Baseboards />
            </Typography>
        </>

    );
}