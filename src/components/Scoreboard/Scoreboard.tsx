
import { useState , useEffect} from 'react'
import {Card, Container,Row,Col,Button} from 'react-bootstrap'
import './Scoreboard.css'


const Scoreboard:React.FC=()=>{

    const storedScore=localStorage.getItem('score');

    let parsedScore:string|number;

   if(storedScore===null){
    parsedScore='0'
   }else{
    parsedScore=storedScore
   }

   parsedScore=JSON.parse(parsedScore)



    const [count, setCount]=useState(+parsedScore)


    useEffect(()=>{

        document.title=`Score=${count}`

        
        
    },[count])


    useEffect(()=>{

        
        localStorage.setItem("score",JSON.stringify(count))
        
    },[count])




    const onIncrease=()=>{

        setCount(prevCount=>(prevCount+1))

    }


    const onDecrease=()=>{

        setCount(prevCount=>(prevCount-1))
    }

    return(

        <>

        <Container>
            <Row>
                <Col>
                <Card>
                    <Card.Header><p>{count}</p></Card.Header>
                    <Card.Body className='d-flex flex-row' style={{backgroundColor:'blue'}}>
                        <Button variant='success' className='inc-button' onClick={onIncrease} > Increase</Button>
                        <Button variant='danger' onClick={onDecrease}>Decrease</Button>
                        

                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        
        
        </>
    )
}

export default Scoreboard