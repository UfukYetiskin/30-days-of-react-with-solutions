import { Formik, Field, Form } from "formik";

const FormikSecondExample = () => {

    return(
        <div style={{border : '2px solid orange', padding: '2%', backgroundColor : 'whitesmoke'}}>
            <h1>This components includes second example of Formik</h1>
            <Formik 
                //initialValues için state diyebiliriz. Burada bir value tanımlarız. Bu value ile Field içerisinde bulunan name niteliğinin eşleşmesi gerekmektedir.
                initialValues={{
                    firstName : '',
                    lastName : '',
                    email :'',
                }}
                //Burada values ile initialValues ile tanımlanan bütün özellikleri alırız ve submit ederek isteidğimiz işlemi yapabiliriz.
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2))
                    //Burada values değerlerini alırız
                    console.log(values)
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field 
                        id="firstName"
                        name='firstName'
                        placeholder = 'Name'
                    />
                    <br></br>
                    <label htmlFor="lastName">Last Name</label>
                    <Field 
                        id='lastName'
                        name ='lastName'
                        placeholder = 'Last Name'
                    />
                    <br></br>
                    <label htmlFor="mail">Email</label>
                    <Field 
                        id='email'
                        name='email'
                        placeholder= 'E-mail'
                        type='email'
                    />
                    <br></br>
                    <button type="submit">Submit</button>
                </Form>



            </Formik>
        </div>
    )
}

export default FormikSecondExample