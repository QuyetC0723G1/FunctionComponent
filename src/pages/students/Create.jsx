import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import "./create.css"

const StudentSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required')
    ,
    description: Yup.string()
        .required('Required')
        .matches(/[a-zA-Z ]*/, "Input Text"),
    action: Yup.string()
        .required('Required'),
});

const Create = () => {
    const navigate = useNavigate()
    const add = (value) => {
        axios.post('http://localhost:8080/students', value).then(() => {
            navigate('/students/list', {state: {message: 'Add Success'}});
        })
    }
    return (
        <>
            <div className="create-form">
            <h2>Create</h2>
            {/*<input type="text"/>*/}
            {/*<button onClick={() => {*/}
            {/*    navigate('/students/list' ,{state:{message: 'Added Successfully'}})*/}
            {/*}}>Click</button>*/}

            <Formik initialValues={{
                name: "",
                description: "",
                action: ""
            }} onSubmit={add} validationSchema={StudentSchema}>

                <Form>
                    <Field name="name" placeholder={"Name"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'name'}/></span><br/>
                    <Field name="description" placeholder={"Description"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'description'}/></span><br/>
                    <Field name="action" placeholder={"Action"} type={"text"}/>
                    <span style={{color: 'red'}}><ErrorMessage name={'action'}/></span><br/>
                    <button type={"submit"}>Add</button>

                </Form>

            </Formik>
            </div>
        </>

    )
}
export default Create;