import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import Products from './products';

const HeaderForm = () => {

    const [isSelectPiece, setIsSelectedPiece] = useState("");
    const [isSelectBudget, setIsSelectedBudget] = useState("");
    const [isSelectCommune, setIsSelectedCommune] = useState("")
    // Recupère la data 

    // changer le comportement par défaut
    const handleChangePiece = (e) => setIsSelectedPiece(e.target.value);
    const handleChangeBudget = (e) => setIsSelectedBudget(e.target.value);
    const handleChangeCommune = (e) => setIsSelectedCommune(e.target.value);
     const handleSubmit = (e) =>{
       e.preventDefaut()
  }
  return (
        <form className='py-8' onSubmit={handleSubmit}>
          <div className='flex flex-wrap justify-center items-center'>
            {/* input Search */}
            <input type="search" className='py-3 pl-2 pr-14 rounded outline-none hover:outline-blue-800' name="" id="" placeholder='Entrez un mot-clé'/>
            <button type="submit"  className='flex justify-center items-center bg-green-600 px-2 py-6 rounded  text-white m-2 h-8'><IoMdSearch/> Recherchez</button>
          </div>
          <p className='text-center text-slate-600 py-4 '>Paramètre de Filtre</p>
          <div className='flex flex-wrap justify-center gap-y-4 items-center'>
             <select  value={isSelectPiece} onChange={handleChangePiece} className='w-40 pl-2 pr-12 py-2 mx-4 outline-blue-500 rounded'>
                <option  value="" disabled>Pièces</option>
                {Products.map((produc, key)=>(
                  <option key={key} value={produc.type}>
                    {produc.type}
                  </option>
                ))}
            </select> 
             <select value={isSelectBudget}  onChange={handleChangeBudget} className='w-40 pl-2 pr-12 py-2 mx-4 outline-blue-500 rounded'>
                <option value="" disabled>Budget</option>
                {Products.map((produc, key)=>(
                  <option value={produc.prix} key={key}>
                    {produc.prix} XOF
                  </option>
                ))}
            </select> 
             <select value={isSelectCommune} name="commune" onChange={handleChangeCommune} className='w-40 pl-2 pr-12 py-2 mx-4 outline-blue-500 rounded'>
                <option value="" disabled>Communes</option>
                {Products.map((produc, key)=>(
                  <option value={produc.quartier} key={key}>
                    {produc.quartier}
                  </option>
                ))}
             </select>
          </div>
        </form>
    
  )
}

export default HeaderForm