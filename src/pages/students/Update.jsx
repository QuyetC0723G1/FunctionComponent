import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";

const Update =() => {
    const navigate = useNavigate()
    const {id} = useParams();
    // console.log(id);
    const [data, setData] = useState({});

const save = (data) => {

    axios.put(`http://localhost:8080/students/`+id,data).then(() => {
        navigate('/students/list', {state: {message: 'Update Success'}});
    })
}
    useEffect(() => {

        axios.get(`http://localhost:8080/students/${id}`)
          .then(res => {
                setData(res.data);
            })
    }, [])
    return (
      <>
          <Formik
              initialValues={data}
              onSubmit={save}
              enableReinitialize={true}
          >
              <Form>
                  <Field name="name" placeholder={"Name"} type={"text"}/>
                  <Field name="description" placeholder={"Description"} type={"text"}/>
                  <Field name="action" placeholder={"Action"} type={"text"}/>
                  <button type={"submit"}>Save</button>

              </Form>

          </Formik>
      </>
    )
}
export default Update;