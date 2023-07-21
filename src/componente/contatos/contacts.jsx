import React from "react";
import './contacts.css';
import { Box, FormControl, FormControlLabel, Input, Stack, TextField, Typography } from "@mui/material";
import { OutlinedInput, FormHelperText, InputLabel } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';


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

                            "@media (max-width: 800px)": {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            }
                        }}
                    >
                        <Typography>

                            <h2 className="heading">Entre Em Contato <span>Com agente!</span></h2>
                        </Typography>


                        <Typography
                            sx={{
                                // backgroundColor: 'rgb(240, 240, 240)',
                                padding: '10px',
                                width: '100%',
                                gap: '2em',
                                height: '100vh',
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",

                            }}
                        >

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
                                    label="Contato"
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
                                    label="Pais"
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
                                    label="
                                    Cidade"
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
                                    label="Cidade"
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
                                    label="
                                    Responsável"
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
                                    label="Cidade"
                                    variant="filled"
                                />
                            </Box>

                            <Box
                                sx={{

                                    width: '100%',
                                    display: "flex",
                                    alignItems: "center",
                                    alignSelf: 'center',
                                    flexDirection: "row",
                                }}>


                                <Box
                                    sx={{

                                        width: '100%',
                                        display: "flex",
                                        alignItems: "center",
                                        alignSelf: 'center',
                                        flexDirection: "row",
                                    }}
                                >
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        label="Masculino"
                                    />
                                    <Typography>Masculino</Typography>

                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        label="Masculino"
                                    />
                                    <Typography>Feminino</Typography>
                                </Box>
                            </Box>
                        </Typography>



                    </Stack>



                </Stack>


            </Typography>
        </>
    )
}