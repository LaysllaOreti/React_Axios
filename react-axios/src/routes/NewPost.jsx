import React from 'react'

export default function NewPost() {
  return (
    <div className="newPost">
    <h2>Adicionar Novo Post: </h2>
    <form>
    
    <div className="formControl">
    <label htmlFor='title'>Título: </label>
    <input type='text' name='title' id='title' placeholder='Digite o título do conteúdo' />
    </div>
    
    <div className="formControl">
    <label htmlFor='body'>Conteúdo: </label>
    <textarea name='body' id='body' placeholder='Digite o conteúdo'></textarea>
    </div>
    
    </form>
    </div>
  )
}
