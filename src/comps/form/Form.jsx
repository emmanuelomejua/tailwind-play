import './form.css'

const Form = () => {
  return (
    <main className='form'>
      <div className='progress'>
        <label htmlFor='id'>
          <p>34%</p>
        </label>
        <progress id='id' value={34} max={100}/>
      </div>
  
      <section className='form__input'>
        <div className='form__input-right'>
          <input type='file'/>
        </div>

        <div className='form__input-left'>
        <div className='form__cont'>
             <input type='text' placeholder='First Name'/>
             <input type='text' placeholder='Last Name'/>

             <div className='form__cont-sec'>
              <input type='number' placeholder='Age' className='inputs2' min={1}/>
              <input type='number' placeholder='Height' className='inputs2' min={1}/>
             </div>

            </div>
        </div>
      </section>

    </main>
  )
}



export default Form

