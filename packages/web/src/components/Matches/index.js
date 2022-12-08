import React from 'react';
import useForm from '../Form/useForm';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import {FormCard, iconStyles} from '../Form/StyledComponents';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {SportsSoccer, CalendarToday, SignalCellularAlt, AccessAlarm} from '@mui/icons-material';
import {TimePicker} from "@mui/x-date-pickers";
import { style } from '@mui/system';
import './styles.scss'

const Matches = ({setMatches, activeMatches, setActiveMatches, currentPark}) => {
    const esporte = useForm();
    const data = useForm();
    const horario = useForm();
    const intensidade = useForm();

    function handleSubmit(event) {
        event.preventDefault();
        if (horario.validate() && esporte.validate() && data.validate() && intensidade.validate()) {
            setMatches(false);
            if (activeMatches.has(currentPark.id)) {
                const array = [...activeMatches.get(currentPark.id), {
                    esporte: esporte.value,
                    data: data.value,
                    horario: horario.value,
                    intensidade: intensidade.value
                }]
                setActiveMatches(activeMatches.set(currentPark.id, array));
            } else {
                setActiveMatches(activeMatches.set(currentPark.id, [{
                    esporte: esporte.value,
                    data: data.value,
                    horario: horario.value,
                    intensidade: intensidade.value
                }]));
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box py={4} align='center' backgroundColor='#343434'>
                <Box display='flex' flexWrap='wrap' gap={1} maxWidth='1200px' pb={1}>
                    <FormCard>
                        <InputLabel className='input-label'>Esporte</InputLabel>
                        <SportsSoccer {...iconStyles}/> <br/>
                        <FormControl sx={{minWidth: 220}}>
                            <Select
                                id="esporte"
                                value={esporte.value}
                                label="Esporte"
                                onChange={esporte.onChange}
                                displayEmpty
                            >
                                <MenuItem value={''}>Selecione o esporte</MenuItem>
                                <MenuItem value={'Futebol'}>Futebol</MenuItem>
                                <MenuItem value={'Basquete'}>Basquete</MenuItem>
                                <MenuItem value={'Volei'}>Volei</MenuItem>
                            </Select>
                        </FormControl>
                    </FormCard>

                    <FormCard>
                        <InputLabel style={{color: '#fff'}}>Data</InputLabel>
                        <CalendarToday {...iconStyles}/> <br/>
                        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{minWidth: 220}}>
                            <DatePicker
                                label="Selecione a data"
                                value={data.value || null}
                                onChange={(newValue) => {
                                    data.setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormCard>

                    <FormCard>
                        <InputLabel style={{color: '#fff'}}>Horario</InputLabel>
                        <AccessAlarm {...iconStyles}/> <br/>
                        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{minWidth: 220}}>
                            <TimePicker
                                label='Escolha um horario'
                                value={horario.value || null}
                                onChange={(newValue) => {
                                    horario.setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormCard>

                    <FormCard>
                        <InputLabel style={{color: '#fff'}}>Intensidade</InputLabel>
                        <SignalCellularAlt {...iconStyles}/> <br/>
                        <FormControl sx={{minWidth: 220}}>
                            <Select
                                id="intensidade"
                                value={intensidade.value}
                                label="Intensidade"
                                onChange={intensidade.onChange}
                                displayEmpty
                            >
                                <MenuItem value={''}>Selecione a intensidade</MenuItem>
                                <MenuItem value={'Iniciante'}>Iniciante</MenuItem>
                                <MenuItem value={'Intermediário'}>Intermediário</MenuItem>
                                <MenuItem value={'Experiente'}>Experiente</MenuItem>
                            </Select>
                        </FormControl>
                    </FormCard>
                </Box>
                <Box display='flex' gap={1} justifyContent='center'>
                    <Button
                        variant='outlined'
                        size='large'
                        style={{borderColor: '#E8FC0F', color: '#E8FC0F'}}
                        onClick={() => setMatches(false)}
                    >Cancelar</Button>
                    <Button
                        variant='contained'
                        size='large'
                        style={{backgroundColor: '#E8FC0F', color: '#000'}}
                        onClick={handleSubmit}
                    >Criar partida</Button>
                </Box>
            </Box>
        </form>
    );
};

export default Matches;
