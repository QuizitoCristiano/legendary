import React from "react";
import './contacts.css';
import { Box, Stack, TextField, Typography } from "@mui/material";
import { OutlinedInput } from '@mui/material';
<Input placeholder="Type in here…" variant="outlined" />



export const Login = () => {
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

                        "@media (max-width: 800px)": {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }
                    }}

                    className="LogoSection"
                >
                    <Stack className="contato" id="contato">
                        <h2 className="heading">Entre Em Contato <span>Com agente!</span></h2>
                    </Stack>

                </Stack>


            </Typography>
        </>
    )
}