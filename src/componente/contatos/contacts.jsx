import React from "react";
import './contacts.css';
import { Box, FormControl, FormControlLabel, Input, Stack, TextField, Typography } from "@mui/material";
import { OutlinedInput, FormHelperText, InputLabel, Button } from '@mui/material';


import Checkbox from '@mui/material/Checkbox';
import { Baseboards } from "../baseboards/footer";
import Lengendarios from "../../imagens/legendarios.png"

export const Login = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };



    return (
        <>
            <Typography>

                <Stack
                    sx={{
                        minHeight: "100vh",

                        padding: "5rem 9% 2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        overflow: 'hidden',

                        width: '100%',

                        "@media (max-width: 800px)": {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }
                    }}


                >
                    <Stack


                        sx={{
                            minHeight: "100vh",
                            width: '100%',
                            gap: '2rem',

                            "@media (max-width: 800px)": {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: '2rem'
                            }
                        }}
                    >
                        <Typography sx={{

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 'auto'
                        }}>

                            <img src={Lengendarios} alt="" />
                        </Typography>
                        <Typography>

                            <h2 className="heading">Faça sua <span>Inscrições Legendários</span></h2>
                        </Typography>


                        <Typography
                            sx={{
                                // backgroundColor: 'rgb(240, 240, 240)',
                                width: '100%',
                                gap: '2em',
                                height: '100vh',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",


                            }}
                        >
                            <Stack sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                gap: '5rem'
                            }}>

                                <Box
                                    sx={{

                                        width: '100%',
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                    }}
                                >

                                    <TextField
                                        sx={{ bgcolor: 'rgb(240, 240, 240)', width: '100%' }}
                                        id="outlined-basic"
                                        label="Nome:"
                                        variant="filled"
                                    />
                                </Box>

                                <Box
                                    sx={{

                                        width: '100%',
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                    }}
                                >

                                    <TextField
                                        sx={{ bgcolor: 'rgb(240, 240, 240)', width: '100%' }}
                                        id="outlined-basic"
                                        label="CPF:"
                                        variant="filled"
                                    />
                                </Box>



                            </Stack>

                            <Stack sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                gap: '5rem'

                            }}>

                                <Box
                                    sx={{
                                        bgcolor: 'blue',
                                        width: '100%',
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                    }}
                                >

                                    <TextField
                                        sx={{ bgcolor: 'rgb(240, 240, 240)', width: '100%' }}
                                        id="outlined-basic"
                                        label="Número do Celular"
                                        variant="filled"
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        bgcolor: 'blue',
                                        width: '100%',
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                    }}
                                >

                                    <TextField
                                        sx={{ bgcolor: 'rgb(240, 240, 240)', width: '100%' }}
                                        id="outlined-basic"
                                        label="Email"
                                        variant="filled"
                                    />
                                </Box>

                            </Stack>




                            <Typography>
                                <Button
                                    sx={{
                                        backgroundColor: '#f6410a',
                                        color: '#fff',
                                        fontWeight: '800',
                                        border: 'none',
                                        fontSize: '1.5rem',
                                        padding: '1.5rem 2rem',
                                    }}
                                >Enviar Dados</Button>
                            </Typography>
                        </Typography>



                    </Stack>



                </Stack>


            </Typography>


            <Typography>
                <Baseboards />
            </Typography>
        </>
    )
}