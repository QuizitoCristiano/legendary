import * as React from 'react';
import "./listToTop.css"
import { Box, FormControl, FormControlLabel, Input, Stack, TextField, Typography } from '@mui/material'
import { OutlinedInput, FormHelperText, InputLabel } from '@mui/material';
import { textAlign } from '@mui/system';
import { Baseboards } from '../baseboards/footer';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Collapse from '@mui/material/Collapse';


export const Cards = ({
    title, text1, text2, text3, text4, text5, text6, text7, text8
}) => {
    return (
        <>
            <Stack

                className='wrapper'

                spacing={0.20}
            >
                <h2>{title}</h2>
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
                <p>{text4}</p>
                <p>{text5}</p>
                <p>{text6}</p>
                <p>{text7}</p>
                <p>{text8}</p>

            </Stack>
        </>
    )
}


export const ListaPraTop = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [abreIcon, setAbreIcon] = useState()


    const abreIconClick = () => {
        setAbreIcon(!abreIcon)
    }


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

                <Stack sx={{ colpr: 'red', gap: '2rem' }}>


                    <Stack in={expanded} timeout="auto" unmountOnExit>

                        <Stack>
                            <Typography sx={{ color: '#eb4d01', fontSize: '1.9rem', fontWeight: '700' }}>
                                1 - COMO DEVE SER MINHA MOCHILA?
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

                                    <Cards

                                        text1='- SUA MOCHILA DEVE TER NO MÁXIMO 60 LITROS DE CAPACIDADE'

                                        text2="- O PESO TOTAL DA MOCHILA DEVE SER DE APROXIMADAMENTE 14 KG,
                                            INCLUINDO A BARRACA SACO DE DORMIR, ROUPA, ÁGUA E ETC"

                                        text3=" -  TRAGA UMA COBERTURA IMPERMEÁVEL PARA A MOCHILA
                                             (PODE SER UM SACO PLÁSTICO, CAPA OU COBERTURA ESPECÍFICA)"

                                        text4=" - A SUA MOCHILA É INDIVIDUAL"
                                    />
                                </Collapse>
                            </Box>

                        </Stack>

                    </Stack>

                    <Stack>
                        <Typography sx={{ color: '#eb4d01', fontSize: '1.9rem', fontWeight: '700' }}>
                            2 - QUAIS DOCUMENTOS DEVO LEVAR?
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

                                <Cards

                                    text1=' - DOCUMENTO DE IDENTIFICAÇÃO COM FOTO (RG OU CNH);'

                                    text2="- NO CASO DE ESTRANGEIROS, O DOCUMENTO NECESSÁRIO SERA O PASSAPORTE"

                                    text3="- DADOS DE CONTATO EM CASO DE EMERGÉNCIA."
                                />
                            </Collapse>
                        </Box>

                    </Stack>
                    <Stack>
                        <Typography sx={{ color: '#eb4d01', fontSize: '1.9rem', fontWeight: '700' }}>
                            3 - QUAIS ROUPAS DEVO LEVAR?
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

                                <Cards

                                    text1=' -CALÇA PARA CAMINHADA OU ATIVIDADE ESPORTIVA (NÃO TRAGA JEANS).'

                                    text2=" - BERMUDA PARA BANHO;"

                                    text3="- CAMISETA DE MANGA CURTA E LONGA;"

                                    text4=' - - BONÉ OU CHAPÉU;'

                                    text5="- JAQUETA IMPERMEÁVEL"

                                    text6="- PAR DE LUVAS PARA TREKKING"

                                    text7=' - MANTA/COBERTOR TÉRMICO.'

                                    text8="- MEIAS ESPORTIVAS PARA CAMINHADA (APROXIMADAMENTE 3 PARES)"
                                />
                            </Collapse>
                        </Box>

                    </Stack>

                    <Stack>
                        <Typography sx={{ color: '#eb4d01', fontSize: '1.9rem', fontWeight: '700' }}>
                            4 - QUE CALÇADOS DEVO LEVAR?
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

                                <Cards

                                    text1=' - TÊNIS OU BOTA PARA MONTANHA.'
                                />
                            </Collapse>
                        </Box>

                    </Stack>

                    <Stack>
                        <Typography sx={{ color: '#eb4d01', fontSize: '1.9rem', fontWeight: '700' }}>
                            5 - O QUE LEVAR PARA DORMIR?
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

                                <Cards
                                    text1=' -TRAGA UMA JARRA OU CÓPO DE ALUMÍNlO (CONFIRME QUE PODERÁ FERVER ÁGUA NELA).'

                                    text2="- GARRAFA DE ÁGUA (REUTILIZÁVEL OU EQUIPAMENTO DE HIDRATAÇÃO)"

                                    text3=' - 01 LITRO DE ÁGUA PARA A PRIMEIRA NOITE'

                                    text4=" - NÃO TRAGA NENHUM ALIMENTO (EXCETO TENHA ALGUMA DIETA RESTRITA , ALERGIA, ETC)"
                                />
                            </Collapse>
                        </Box>

                    </Stack>

                    <Stack>
                        <Typography sx={{ color: '#eb4d01', fontSize: '1.9rem', fontWeight: '700' }}>
                            6 - O QUE LEVAR PARA DORMIR?
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

                                <Cards
                                    text1=' - TRAGA UMA JARRA OU CÓPO DE ALUMÍNlO (CONFIRME QUE PODERÁ
                                    FERVER ÁGUA NELA).'

                                    text2="- COLHER E GARFO PLÁSTICO;"

                                    text3='- GARRAFA DE ÁGUA (REUTILIZÁVEL OU EQUIPAMENTO DE HIDRATAÇÃO); '

                                    text4=" - 01 LITRO DE ÁGUA PARA A PRIMEIRA NOITE;"

                                    text5=" - NÃO TRAGA NENHUM ALIMENTO (EXCETO TENHA ALGUMA DIETA RESTRITA,ALERGIA, ETC)."
                                />
                            </Collapse>
                        </Box>

                    </Stack>

                    <Stack>
                        <Typography sx={{ color: '#eb4d01', fontSize: '1.9rem', fontWeight: '700' }}>
                            7 - QUAIS MATERIAIS DE HIGIENE PESSOAL DEVO LEVAR?
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

                                <Cards
                                    text1='TOALHA'

                                    text2="- PAPEL HIGIÊNICO OU LENÇO UMEDECIDO"

                                    text3='- BAND-AID OU SIMILAR '

                                    text4=" - VASELINA, TALCO OU POMADA PARA ASSADURAS"

                                    text5=" -REPELENTE; "

                                />
                            </Collapse>
                        </Box>

                    </Stack>

                    <Typography
                        sx={{
                            color: '#eb4d01;',
                            fontSize: '0.1rem',
                            marginBottom: '4rem'
                        }}
                    >
                        <h2 className="heading">LEMBRE-SE DE QUE TODOS DEVEMOS <span>TER RESPEITO PELO MEIO AMBIENTE</span></h2>
                    </Typography>
                </Stack>


                <Stack>
                    <Typography sx={{ color: '#eb4d01', fontSize: '1.9rem', fontWeight: '700' }}>
                        9 - OUTROS ARTIGOS ÚTEIS
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

                            <Cards
                                text1=" - LANTERNA DE CABEÇA"
                                text2="- PILHAS EXTRAS;"
                                text3="- BÍBLIA (OBRIGATÓRIO - TRAGA NUMA EMBALAGEM QUE A IMPEÇA DE MOLHAR)"
                                text4="- BASTÃO PARA CAMINHADA (OPCIONAL)"
                                text5=" BOLSAS TIPO ZIPLOCK"
                                text6="- 200 GRAMAS DE CAL"
                                text7="- - PROIBIDO LÂMINAS CORTANTES."

                            />
                        </Collapse>
                    </Box>

                </Stack>

            </Box>

            <Typography>
                <Baseboards />
            </Typography>
        </>


    )
}






