import Form from '../../comps/form/Form'
import Table from '../../comps/table/Table'
import Image from '../../comps/image/Image'
import Ability from '../../comps/ability/Ability'
import { useState, useEffect } from 'react'
import './home.css'
import axios from 'axios'

const Home = () => {

  const [players, setPlayers] = useState([])
  const [id, setId] = useState('')

  const url = `http://skoutwatch-dev-api.eu-west-3.elasticbeanstalk.com/api/v1/players?per_page=${5}`

  useEffect(() => {

    try {
      const getPlayers = async () => {
        const res = await axios.get(url)
        setPlayers(res.data)
      }
      getPlayers()
    } catch (error) {
      console.log(error)
    }
  }, [url])

  
  return (
    <main className='home'>
     <Image players={players} id={id}/>
     <Form players={players}/>
     <Table players={players} setId={setId}/>
     <Ability />
    </main>
  )
}

export default Home
