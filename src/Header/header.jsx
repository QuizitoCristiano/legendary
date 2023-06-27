import React, { useState } from "react";
import "./header.css";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Lengendarios from "../imagens/legendarios.png"
import { Box, Stack } from "@mui/material";
import { Link } from 'react-router-dom';


export const Header = () => {



    return (
        <>


            <Box className="header">
                <Link to="/">
                    <div className="logo" to="/">
                        <img src={Lengendarios} alt="" />
                    </div>
                </Link>

                <Box className="div-box-button">
                    <div className="styles_line"></div>

                    <button to={{
                        borderRadius: '4px',
                        fontSize: '16px',
                        fontWeight: '500',
                        width: '100%',

                        Color: '#fff',
                        border: 'none',
                        outline: 'none',
                        fontFamily: 'Roboto sans-serif',
                        fontFamily: 'Shrikhand cursive',
                        fontWeight: '900',

                        backgroundColor: '#e50914 !important'
                    }}
                    >Vamos Lá?
                    </button>
                </Box>

                <Link className="active" to="/SobreNo">
                    Quem somos
                </Link>

                <Link className="Link-logos" to="/Registrations">
                    Lista para Top
                </Link>

                <Link className="Link-logos" to="/MeteriasTop">
                    O que Levar
                </Link>
                <Link className="Link-logos" to="/Login">
                    Contato
                </Link>
            </Box>
        </>
    )
}