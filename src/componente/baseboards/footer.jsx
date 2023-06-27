import React from "react";
import './footer.css';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Legendarios from '../../imagens/branco.png'
import SendIcon from '@mui/icons-material/Send';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { border, width } from "@mui/system";
import { blue } from "@mui/material/colors";








export const Cards = ({
    title, text1, text2, text3, text4
}) => {
    return (
        <>
            <Stack className="div-wrapper " spacing={0.20}>
                <h2>{title}</h2>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
                <p>{text4}</p>
            </Stack>
        </>
    )
}

export const Baseboards = () => {


    return (
        <>
            <Typography
                sx={{
                    width: "100%",
                    height: 'audo',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#0a0a0a',
                    position: 'relative',
                    gap: '30px',
                }}
            >
                <Stack>
                    <Box className="Footer-img">
                        <img src={Legendarios} alt="Atee" />
                    </Box>
                    <Stack className="social-media" direction="row" my={3} spacing={1} data-aos="fade-down">
                        <Box><WhatsAppIcon className="my-social-media" /></Box>
                        <Box><InstagramIcon className="my-social-media" /></Box>
                        <Box><YouTubeIcon className="my-social-media" /></Box>
                        <Box><FacebookOutlinedIcon className="my-social-media" /></Box>
                    </Stack>
                </Stack>

                <Stack className="div-inputs-footer"
                    direction="row"
                    my={3}
                    spacing={1}
                    data-aos="fade-down"
                >
                    <Typography data-aos="fade-right" >
                        <Cards
                            title='Quem Somos'
                            text1='Trabalhe conosco'
                            text2="Empresas"
                            text3="Política de Privacidade"
                            text4="Compromisso de Integridade"
                        />
                    </Typography>
                    <Typography data-aos="fade-left">
                        <Cards
                            title='Recursos'
                            text1='Trabalhe conosco'
                            text2="Empresas"
                            text3="Política de Privacidade"
                            text4="Compromisso de Integridade"
                        />
                    </Typography>


                    <Typography data-aos="fade-up">
                        <Cards
                            title='Fale Conosco'
                            text1='Email e telefone'
                            text3="lengendarioscuritiba@gmail.br"
                            text2="(+55) 41 99761-0740 "

                        />

                    </Typography>

                </Stack>

                <Stack sx={{ width: '100%', gap: '40px', display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
                    <TextField sx={{ width: '50%', border: 'solid 2px #117aeb', borderRadius: '5px', color: '#fff', }} placeholder="email" ></TextField >

                    <Button sx={{
                        backgroundColor: '#FF6510',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderStyle: 'solid',
                        width: '150px',
                        borderWidth: '0px 0px 0px 0px',
                        flexDirection: 'row',
                        borderColor: '#FF6510',
                        display: 'inline-block',
                        lineHeight: '1',
                        fontSize: '15px',
                        padding: '12px 24px',
                        borderRadius: '3px',
                        color: '#fff',
                        fill: '#fff',
                        textAlign: 'center',
                        transition: 'all .3s',
                        border: 'none',
                        outline: 'none !important',

                    }}>


                        enviar
                    </Button>
                </Stack>
            </Typography>

        </>
    )
}