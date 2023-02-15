import React,{useState, useEffect} from 'react'
import View from './components/View';

// getting the values of local storage 
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }

}

export const App = () => { 

  // main array of objects state \\ books state \\ books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [Nama, setNama]=useState('');
  const [Jabatan, setJabatan]=useState('');
  const [Alamat, setAlamat]=useState('');

  // form submit event 
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      Nama,
      Jabatan,
      Alamat,
    }
    setbooks([...books,book]);
    setNama('');
    setJabatan('');
    setAlamat('');
  }

  // delete book from LS
  const deleteBook=(Nama)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.Nama !== Nama 
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <h1>Data Karyawan</h1>
      <p>Add and view data karyawan</p>
      <br/>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Nama</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setNama(e.target.value)} value={Nama}></input>
            <br></br>
            <label>Jabatan</label>
            <input type="text" className='form-control' required
             onChange={(e)=>setJabatan(e.target.value)} value={Jabatan}></input>
            <br></br>
            <label>Alamat</label>
            <input type="text" className='form-control' required
             onChange={(e)=>setAlamat(e.target.value)} value={Alamat}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {books.length>0&&<>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Nama#</th>
                  <th>Jabatan</th>
                  <th>Alamat</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <View books={books} deleteBook={deleteBook}/>
              </tbody>
            </table>
          </div>
          <button className='btn btn-danger btn-md'
          onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>No data are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App 