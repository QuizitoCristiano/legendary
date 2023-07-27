import * as React from 'react';
import "./listToTop.css"
import { Box, Card, FormControl, FormControlLabel, Input, Stack, TextField, Typography } from '@mui/material'
import { OutlinedInput, FormHelperText, InputLabel } from '@mui/material';
import { textAlign } from '@mui/system';
import { Baseboards } from '../baseboards/footer';
import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DataArrayIcon from '@mui/icons-material/DataArray';
import CropFreeIcon from '@mui/icons-material/CropFree';
import CheckIcon from '@mui/icons-material/Check';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Collapse from '@mui/material/Collapse';

const list = [
    {
        title: '1 - COMO DEVE SER MINHA MOCHILA?',
        childrens: [
            `SUA MOCHILA DEVE TER NO MÁXIMO 60 LITROS DE CAPACIDADE`,
            `O PESO TOTAL DA MOCHILA DEVE SER DE APROXIMADAMENTE 14 KG,

                INCLUINDO A BARRACA SACO DE DORMIR, ROUPA, ÁGUA E ETC`,
            `TRAGA UMA COBERTURA IMPERMEÁVEL PARA A MOCHILA
                (PODE SER UM SACO PLÁSTICO, CAPA OU COBERTURA ESPECÍFICA)`,
            ` A SUA MOCHILA É INDIVIDUAL`
        ]
    },


]

export const MyCard = ({
    title, content, handleExpandClick, expanded
}) => {

    return (

        <Stack sx={{ colpr: 'red', gap: '2rem' }}>
            <Stack in={expanded} timeout="auto" unmountOnExit>
                <Stack>
                    <Typography sx={{ color: '#eb4d01', fontSize: '1.9rem', fontWeight: '700' }}>
                        {title}
                    </Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                    <Box>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            {content}
                        </Collapse>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export const ListaPraTop = () => {

    const [expanded, setExpanded] = useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    // const [abreIcon, setAbreIcon] = useState()


    // const abreIconClick = () => {
    //     setAbreIcon(!abreIcon)
    // }


    const handleExpandClick = (index) => {
        setExpanded(!expanded)
    };


    return (
        <>

            <Box
                sx={{
                    minHeight: "100vh",
                    padding: "5rem 9% 2rem",
                    overflow: 'hidden',
                    background: '',
                    width: '100%',

                    "@media (max-width: 800px)": {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }
                }}

            >
                <Box sx={{
                    padding: '2rem',
                    textAlign: 'center'
                }}
                >
                    <Typography
                        sx={{
                            color: '#',
                            fontSize: '2rem',
                            marginBottom: '4rem'
                        }}
                    >
                        <h2 className="heading">Todo o que você  <span> precisa levar para o seu Top</span></h2>
                    </Typography>
                </Box>

                {list.map((item, index) => {
                    return (
                        <MyCard
                            handleExpandClick={() => handleExpandClick(index)}
                            expanded={expanded}
                            key={index}
                            title={item.title}
                            content={<>
                                {item.childrens.map((children) => {
                                    return (
                                        <ul >
                                            <li>
                                                {children}
                                            </li>
                                        </ul>
                                    )
                                })}
                            </>}
                        />
                    )
                })}






            </Box>



            <Typography>
                <Baseboards />
            </Typography>
        </>


    )
}






