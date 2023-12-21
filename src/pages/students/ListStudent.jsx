import {Link, useLocation, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState, createRef} from "react";
import axios from "axios";
import "./listStudent.css"


const ListStudent = () => {
    const [searchInput,setSearchInput] = useState('');
    const updateInput = () => {
        const inputText = inputRef.current.value
        setSearchInput(inputText);
    }

    const inputRef = createRef()
    const Remove = (id) => {
        axios.delete(`http://localhost:8080/students/`+id).then(() => {
           const isConfirm = confirm("Are you sure you want to remove")
            if (isConfirm){
                setData(data.filter(data => {
                    return data.id!== id
                }))
            }
        })
    }
    const {state} = useLocation();
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/search/students?name='+searchInput)
            .then(res => {
                setData(res.data);
            })
    }, [searchInput]);




    return (
        <>
            <span className={"title-table"}>
                <h2>List</h2>
                <br/>
                <input type="text" ref={inputRef} placeholder={"Search"} value={searchInput} onChange={updateInput}/>
                {state && state.message && (<span style={{color: "green"}}>{state.message}</span>)}
            </span>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    <th colSpan={2}>Update - Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">1</th>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.action}</td>
                            <td>
                                <Link to={`/students/edit/${item.id}`}>
                                <button>Update</button>
                                </Link>
                            </td>
                            <td>
                                    <button onClick={() => {
                                        Remove(item.id)
                                    }}>Delete</button>
                                </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default ListStudent;