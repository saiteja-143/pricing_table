// import logo from './logo.svg';

import './App.css';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

 const  myobj=[

    {Sub_type:"FREE",price:"$0",dur:"/month",user_count:"✔ Single User",

           Storage:"✔ 5GB Storage",publicprojects_count:"✔ Unlimited Public Projects",

           Access_type:"✔ Community Access",privateprojects_count:" ❌Unlimited Private Projects",

            support_type:"❌ Dedicated Phone Support",Subdomain_count:"❌ Free Subdomain",statusReport:"❌ Monthly Status Reports"},

           

           

            {Sub_type:"PLUS",price:"$9",dur:"/month",user_count:"✔ 5 Users",

            Storage:"✔ 50GB Storage",publicprojects_count:"✔ Unlimited Public Projects",

            Access_type:"✔ Community Access",privateprojects_count:"✔ Unlimited Private Projects",

             support_type:"✔ Dedicated Phone Support",Subdomain_count:"✔ Free Subdomain",statusReport:"❌ Monthly Status Reports"},

             

             

             {Sub_type:"PRO",price:"$49",dur:"/month",user_count:"✔ Unlimited Users",

           Storage:"✔ 150GB Storage",publicprojects_count:"✔ Unlimited Public Projects",

           Access_type:"✔ Community Access",privateprojects_count:"✔ Unlimited Private Projects",

            support_type:"✔ Dedicated Phone Support",Subdomain_count:"✔ Unlimited Free Subdomain",statusReport:"✔ Monthly Status Reports"},

 ]

  return (

    

   

  <div className="App">

     {myobj.map((nm)=> (<Plan Sub_type={nm.Sub_type} price={nm.price}  dur={nm.dur} user_count={nm.user_count} Storage={nm.Storage}

                          publicprojects_count={nm.publicprojects_count} Access_type={nm.Access_type}

                          privateprojects_count={nm.privateprojects_count} support_type={nm.support_type} 

                          Subdomain_count={nm.Subdomain_count} statusReport={nm.statusReport}/>))}

      </div>

      

    

  

    

  );

}

function Plan(props){

  console.log(props)

  return(

    <div className="Plan">

      <div className='header'>

        <h4 className='sus-type'>{props.Sub_type}</h4>

        <h4 className='price'><span>{props.price}</span>{props.dur}</h4>

        <hr></hr>

       </div>

       <div className="Plan-body">



        <h4>{props.user_count}</h4>

        <h4>{props.Storage}</h4>

        <h4>{props.publicprojects_count}</h4>

        <h4>{props.Access_type}</h4>

        <h4>{props.privateprojects_count}</h4>

        <h4>{props.support_type}</h4>

        <h4>{props.Subdomain_count}</h4>

        <h4>{props.statusReport}</h4>

        <br></br>

       <div >  <Button className='primary'  size="lg" >

      Button

      </Button>

        </div>

       </div>

      

     

      





    </div>

  );

}



export default App;
