import React, { useState } from "react";
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
        backgroundImage: 'linear-gradient(-135deg, rgba(0,0,0,0), rgba(0,0,0,0), #90caf9)',
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
    const { title } = props;

    const [textSrearch, setTextSearch] = useState('');

    const handleChangeSearch = (value) => {
        // console.log(value);
        setTextSearch(value);
        props.onSearch(value);
    }

    return (
        <div className={classes.root}>
            <div className={classes.title}>{title}</div>
            {
                props.onSearch ?
                    <div className={classes.searchBox}>
                        <TextField
                            className={classes.textFieldSearch}
                            id="input-with-icon-textfield"
                            label="Tìm kiếm"
                            variant="outlined"
                            fullWidth={true}
                            margin='dense'
                            value={textSrearch}
                            onChange={(e) => handleChangeSearch(e.target.value)}
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
                                                    onClick={() => handleChangeSearch('')}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="small"
                                                >
                                                    <CloseIcon />
                                                </IconButton> : null
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
