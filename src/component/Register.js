import React, { useState } from 'react';
import PèreNoel from '../assets/images/pere-noel.png';
import Sapin from '../assets/images/sapin.png';

function Login () {
    const [ name, setName ] = useState('')
    const [ password, setPassword] = useState('')
    const [ email, setEmail ] = useState('')
    const getName = (e) => {
        setName(e.currentTarget.value)
    }
    const getPassword = (e) => {
        setPassword(e.currentTarget.value)
    }
    const getEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const submitRegistration = (e) => {
        e.preventDefault();
        console.log('cest parti')
    }
    return (
        <div className='p-8'>
            <div className='flex flex-col justify-center items-center' >
                <img src={PèreNoel} className='w-32 border-2 border-primary rounded-m' />
                <span className="font-nero text-xl text-secondary">Qui suis-je ? </span>
            </div>
            <form className='flex flex-col justify-start items-start space-y-12'>
                <div className='flex flex-col w-full'>
                    <label className="text-m text-secondary font-nero">Prénom</label>
                    <input 
                        type="text" 
                        className="border border-primary rounded-s py-2 px-4 text-primary placeholder:text-primary" 
                        onChange={getName}
                        placeholder='Votre prénom' 
                    />
                </div>
                <div className='flex flex-col w-full'>
                    <label className="text-m text-secondary font-nero">Email</label>
                    <input  
                        type="text" 
                        className="border border-primary rounded-s py-2 px-4 text-primary placeholder:text-primary" 
                        onChange={getEmail}
                        placeholder='Votre email' 
                    />
                </div>
                <div className='w-full'>
                    <label className="text-m text-secondary font-nero">Mot de passe</label>
                    <input 
                        type="password"  
                        className="border border-primary rounded-s w-full py-2 px-4 text-primary placeholder:text-primary" 
                        placeholder='Mot de passe' 
                        onChange={getPassword}
                    />
                </div>
                <div className='w-full flex justify-center pt-4'>
                    <button 
                        className='bg-greyBG border-2 py-2 px-4 rounded-m border-secondary flex items-base text-m text-primary font-nero'
                        type='submit' 
                        onClick={submitRegistration} 
                    >
                        <img src={Sapin} className='w-8 mr-4' />
                        Se connecter
                        <img src={Sapin} className='w-8 ml-4' />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;