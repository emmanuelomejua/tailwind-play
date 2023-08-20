import Form from '../../comps/form/Form'
import Table from '../../comps/table/Table'
import Image from '../../comps/image/Image'
import Ability from '../../comps/ability/Ability'
import { useState, useEffect } from 'react'
import './home.css'

const Home = () => {

  const [players, setPlayers] = useState([])

  const url = 'http://skoutwatch-dev-api.eu-west-3.elasticbeanstalk.com/api/v1/players'


  return (
    <main className='home'>
     <Image/>
     <Form/>
     <Table/>
     <Ability />
    </main>
  )
}

export default Home
