import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books,deleteBook}) => {
    return books.map(book=>(
        <tr key={book.Nama}>
            <td>{book.Nama}</td>
            <td>{book.Jabatan}</td>
            <td>{book.Alamat}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.Nama)}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}

export default View;