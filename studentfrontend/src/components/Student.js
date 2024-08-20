import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
   root: {
    '& > *': {
    margin: theme.spacing(1),
   },
},

}));


export default function Student() {
    const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
    const classes = useStyles();
    const [name,setName]=useState('');
    const [address, setAddress]=useState('');
    const[students, setStudents]=useState([]);
  
    const handleClick=(e)=>{
      e.preventDefault()
      const student={name, address}
      console.log(student)
      fetch("http://localhost:8080/student/POST",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(student)
       }).then(()=>{
          console.log("New Student added")
       })
    }

    React.useEffect(()=> {
      fetch("http://localhost:8080/student/GET")
      .then(res=>res.json())
      .then((result)=>{
        setStudents(result);
      }

    )

    }, [])

    
  return (
    <Container>
      <Paper elevation={5} style={paperStyle}> 
       <h1 style={{color:"blue"}}>Add Student</h1>

        <form className={classes.root} noValidate autoCapitalize='off'>
        
          <TextField id="outlined-basic" label="Student Name" variant="outlined"  fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ paddingBottom: '10px' }}
         />
          
          <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ paddingBottom: '10px' }}
          />

          <Button variant="contained" color="error" onClick={handleClick}>
            submit
          </Button>
        
      </form>
     </Paper>

     <h1 style={{color:"blue"}}>Students List</h1>
     <Paper elevation={3} style={paperStyle}>
        {students.map(student=>( 
          <Paper elevation={6} style={{margin: "10px", padding:"15px", textAlgin:"left"}} Key={student.id}>
          Id:{student.id}<br/>
          Name:{student.name}<br/>
          Address:{student.address}<br/>
          </Paper>
        ))}

     </Paper>
    </Container>
  );
}