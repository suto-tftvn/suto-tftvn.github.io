import React, { useState,useCallback } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Menu from './components/Menu';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(50deg, #dcedc8 60%,transparent 51%) top left/80% calc(100%)',
        backgroundRepeat: 'no-repeat',
        marginBottom: '5px',
        padding: '0 10px',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        // borderBottom: '1px solid #90caf9',
        fontSize: '18px',
        fontWeight: 'bold',
        width: '60%'
        // marginBottom:'5px',
        // padding:'10px'
    },
    searchBox: {
        width: '40%'
    },
    textFieldSearch: {
        // width:'100%'
        margin: '0px'
    }
}));

export default function TitleContent(props) {
    const classes = useStyles();
    const { title,onChange } = props;

    const [textSrearch, setTextSearch] = useState('');

    return (
        <div className={classes.root}>
            <div className={classes.title}>{title}</div>
            {
                onChange ?
                    <div className={classes.searchBox}>
                        <TextField
                            className={classes.textFieldSearch}
                            id="input-with-icon-textfield"
                            label="Tìm kiếm"
                            variant="outlined"
                            fullWidth={true}
                            margin='dense'
                            value={textSrearch}
                            onChange={(e) => {onChange(e.target.value);setTextSearch(e.target.value)}}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {
                                            textSrearch ?
                                                <IconButton
                                                    // aria-label="toggle password visibility"
                                                    onClick={() => {onChange('');setTextSearch('')}}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="small"
                                                >
                                                    <CloseIcon />
                                                </IconButton> : ''
                                        }
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                : <div style={{height:'40px'}}></div>
        }
    </div>
    );
}
