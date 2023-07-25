import React from "react";
import "./home.css"
import { Box, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import meuVideo from '../videos/WhaVideo-top-Ane.mp4';
import myvideo from '../videos/legendario-Top.mp4'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DoneIcon from '@mui/icons-material/Done';
import { Oquelevarparatop } from "../environment/ materials"
import { Baseboards } from '../componente/baseboards/footer'

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Margin } from "@mui/icons-material";


const steps = [
    {
        label: 'QUEM PODE PARTICIPAR?',
        description: `O Desafio 72HS – TOP é exclusivo para homens, com idade 
        mínima de 16 anos e devidamente autorizados por escrito pelos responsáveis.
         Não há limite de idade, porém devem considerar que não utilizamos camas 
         e seguimos caminhando com as mochilas durante o percurso. Os homens descobrem 
         sua capacidade de fazer mais juntos.
        `,
    },
    {
        label: 'QUAL O INVESTIMENTO?',
        description:
            `
            - Valor para pagamento a vista: R$ 1290,00 via depósito ou PagSeguro
            Chave PIX - 32.865.092/0001-69 (Banco Santander / AG 3872 / CC 130042363 /
             CNPJ: 32.865.092/0001-69 / Legendários Brasil Assessoria e Eventos Ltda)

             - Pagamento parcelado R$ 1.390,00 - Até 3X sem juros ou até 18X com acréscimo PagSeguro
            `,
    },
    {
        label: 'LISTA DE MATERIAIS E TERMO DE RESPONSABILIDADE',
        description:
            `Esse movimento apenas iniciou em nosso país, hoje conta com 
         Legendários espalhados por vários estados e outras trilhas iniciando 
         para impactar os homens dessa nação.
         Milhares de homens antes de você aceitaram esse Desafio e
          sobreviveram a essa experiência de mudança de vida.
        
        `,
    },
];


export const Home = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };



    return (
        <>
            <Typography
                sx={{

                    minHeight: '100vh',
                    padding: '5rem 9% 2rem',
                    backgroundColor: "#081b29",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: '5rem',

                    '@media only screen and (max-width: 800px)': {
                        width: '100%',
                        position: 'relative'
                    }

                }}>

                <Typography sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    overflow: 'hidden',
                    width: '100%',
                    gap: '5rem',


                    '@media only screen and (max-width: 800px)': {
                        flexWrap: "wrap",
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        width: '100%',
                    }

                }}>

                    <Stack
                        // className="container"

                        sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            width: '100%',

                            '@media only screen and (max-width: 800px)': {
                                flexWrap: "wrap",

                            }
                        }}
                    >


                        <h2 className="heading">DESAFIO <span>72HS - TOP</span></h2>
                        <Box className="wrapper-text">

                            <Typography sx={{

                                fontSize: '1.9em',
                                fontWeight: '800',

                                '@media only screen and (max-width: 800px)': {
                                    fontWeight: '700',
                                    fontSize: '1.5rem',
                                }
                            }}>
                                TRANSFORMANDO CARÁTER, RESTAURANDO

                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.9em',
                                    fontWeight: '800',

                                    '@media only screen and (max-width: 800px)': {
                                        fontWeight: '700',
                                        fontSize: '1.5rem',

                                    }
                                }}>
                                HOMENS E HISTÓRIAS DIGNAS DE SEREM CONTADAS.
                            </Typography>
                        </Box>


                    </Stack>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: '2rem',
                        position: 'relative',
                        width: '100%'
                    }}>
                        <Typography
                            className="div-video"


                        >

                            <video controls>
                                <source src={myvideo} type="video/mp4" />


                            </video>

                        </Typography>
                        <div className="styles_line"></div>

                    </Box>


                </Typography>
                <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        overflow: 'hidden',
                        width: '100%',
                        height: 'auto',
                        gap: '5rem',



                        '@media only screen and (max-width: 800px)': {

                            flexWrap: "wrap",
                        }

                    }}
                >
                    <Stack sx={{
                        // width: "50%",
                        height: "auto",
                        width: '90%',


                    }}
                    // className="New-Wrapper-text"
                    >
                        <Typography
                            sx={{

                                fontWeight: '800',
                                fontSize: '1.8rem',
                                width: '100%',

                                '@media only screen and (max-width: 800px)': {
                                    color: '#fff',
                                    fontSize: '1.8em',
                                    fontWeight: '100',
                                    width: '100%',
                                }

                            }}
                        >
                            O Desafio 72 hs - TOP Ane é um evento de total conexão com Deus, através da natureza e longe da civilização. É uma oportunidade para os participantes redescobrirem a configuração original que o Criador projetou para os homens, provando o caráter, amizade e gerando fé.
                            Você pode caminhar muito, mas são apenas os 18 centímetros entre a cabeça e o coração que realmente importa.
                            Durante as 72 horas, os homens trabalham em equipe e descobrem lições importantes sobre o propósito definido por Deus para as suas vidas. Eles são desafiados fisicamente, mentalmente e espiritualmente e, em algum momento, todos atingem o objetivo desejado.
                            O primeiro Desafio 72hs - aconteceu em junho de 2023 na Curitiba, com um grupo de 109 homens. Hoje somam mais de 21.000 em diversos países, que, ao final do evento, são conhecidos como "Legendários"
                            Os 3 primeiros Legendários brasileiros participaram na Guatemala em junho de 2017, e juntamente com outros pioneiros de Balneário Camboriú/SC, realizaram o primeiro REC BRASIL em novembro de 2018 no Vale Europeu em Santa Catarina.
                        </Typography>
                    </Stack>
                    <Stack sx={{
                        // width: "50%",
                        width: "90%",
                        height: "auto",

                    }}

                        className="selection ">

                        <h2 className="heading">PERGUNTAS <span>FREQUENTES</span></h2>

                        <Box sx={{ width: "100%", height: "auto" }}>
                            <Stepper activeStep={activeStep} orientation="vertical"

                            >
                                {steps.map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel
<<<<<<< HEAD

                                            sx={{ color: '#FF6510', fontSize: '25px', fontWeight: '800' }}
                                            optional={

                                                index === 2 ? (
                                                    <Typography
                                                        sx={{ color: '#FF6510', fontSize: '15px', fontWeight: '800' }}
                                                        variant="caption">Último passo
                                                    </Typography>
                                                ) : null
                                            }
=======
>>>>>>> b69734e65b2497f77aa8a3474fb909af9304769f
                                        >
                                            <Typography sx={{ color: '#FF6510', fontSize: '15px', fontWeight: '800' }}>{step.label}</Typography>
                                        </StepLabel>
                                        <StepContent>
                                            <Typography sx={{ color: '#fff', fontSize: '15px', fontWeight: '800' }}
                                            >{step.description}</Typography>
                                            <Box sx={{ mb: 3 }}>
                                                <div>
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        sx={{
                                                            mt: 1, mr: 1, backgroundColor: '#FF6510',
                                                            color: '#fff',
                                                            fontSize: '12px',
                                                            fontWeight: '800'
                                                        }}
                                                    >
                                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                    </Button>
                                                    <Button

                                                        disabled={index === 0}
                                                        onClick={handleBack}
                                                        sx={{
                                                            mt: 1, mr: 1, backgroundColor: '#fff',
                                                            color: '#FF6510',
                                                            fontSize: '12px',
                                                            fontWeight: '800'
                                                        }}
                                                    >


                                                        Voltar
                                                    </Button>
                                                </div>
                                            </Box>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === steps.length && (
                                <Paper square elevation={0} sx={{ p: 3, borderRadius: '5px', color: 'black', fontSize: '15px', fontWeight: '700' }}>
                                    <Typography>Todas as etapas concluídas você terminou</Typography>
                                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1, mt: 1, mr: 1, backgroundColor: '#FF6510', color: 'black', fontSize: '12px', fontWeight: '800' }}>
                                        Reiniciar
                                    </Button>
                                </Paper>
                            )}
                        </Box>

                    </Stack>
                </Typography>
                <Typography>
                    <h2 className="heading">Sobre  os<span> Tops</span></h2>


                    <Stack

                        // className="Portfolio" id="portfolio"

                        sx={{

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            flexWrap: "wrap",
                            width: '100%',
                            height: 'auto',
                            gap: '4em',
                        }}

                    >



                        <Box className="Portolio-box">

                            <div className="portfolio-leyer">
                                <h2>TOP Ane CURITIBA</h2>
                                <button>Nova Incrição</button>

                                <p>< CalendarTodayIcon className="portfolio-icons" /> 07 A 10 DE SETEMBRO DE 2023</p>
                                <p> <AddLocationAltIcon className="portfolio-icons" /> Curitiba, PR</p>

                                <p>< DoneIcon className="portfolio-icons" />     R$1190,00 à vista</p>
                                <p><DoneIcon className="portfolio-icons" />       R$1230,00 em até 3x </p>
                                <p><DoneIcon className="portfolio-icons" />      R$1260,00 em até 6x</p>
                                <p><DoneIcon className="portfolio-icons" />    R$1300,00 em até 10x</p>

                            </div>
                        </Box>

                        <Box class="Portolio-box">
                            <div class="portfolio-leyer">
                                <h2> TOP 573 PANTANAL</h2>
                                <button>Nova Incrição</button>

                                <p>< CalendarTodayIcon className="portfolio-icons" /> 07 A 10 DE SETEMBRO DE 2023</p>
                                <p> <AddLocationAltIcon className="portfolio-icons" /> Curitiba, PR</p>

                                <p>< DoneIcon className="portfolio-icons" />     R$1190,00 à vista</p>
                                <p><DoneIcon className="portfolio-icons" />       R$1230,00 em até 3x </p>
                                <p><DoneIcon className="portfolio-icons" />      R$1260,00 em até 6x</p>
                                <p><DoneIcon className="portfolio-icons" />    R$1300,00 em até 10x</p>
                            </div>
                        </Box>

                        <Box class="Portolio-box">

                            <div class="portfolio-leyer">
                                <h2>TOP 514 RIO DE JANEIRO </h2>
                                <button>Nova Incrição</button>

                                <p>< CalendarTodayIcon className="portfolio-icons" />24 A 27 DE AGOSTO DE 2023 </p>
                                <p> <AddLocationAltIcon className="portfolio-icons" /> Rio de Janeiro, RJ</p>

                                <p>< DoneIcon className="portfolio-icons" />     R$1190,00 à vista</p>
                                <p><DoneIcon className="portfolio-icons" />       R$1230,00 em até 3x </p>
                                <p><DoneIcon className="portfolio-icons" />      R$1260,00 em até 6x</p>
                                <p><DoneIcon className="portfolio-icons" />    R$1300,00 em até 10x</p>
                            </div>
                        </Box>

                    </Stack>

                </Typography>
                <Typography sx={{
                    width: "100%",
                    height: '80rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundSize: 'cover',
                    backgroundImage: 'url(../imagens/Fahad-Badar.png)',
                    gap: '50px',
                }}>
                    <Oquelevarparatop />
                </Typography>
                <Typography
                    sx={{
                        width: "100%",
                        height: '60rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundSize: 'cover',
                        backgroundImage: 'url(../imagens/Fahad-Badar.png)',
                        gap: '50px',
                    }}
                >

                    <Baseboards />
                </Typography>
            </Typography>

        </>
    )
}