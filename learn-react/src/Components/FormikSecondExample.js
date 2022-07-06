import { Formik } from "formik";
import * as yup from 'yup'


//yup paketi kullanılıyor
const validations = yup.object().shape({
    //yup paketi ile istenilen validasyonu sağlayabiliyoruz.
    //buradaki email ve password özellikleri initialValues ile eşleşmektedir.

    //email type'ına sahip input'a bilgi girilmediği sürece submit butonu göndermeyecektir.
    email : yup.string().email("Geçerli bir email adresi giriniz.").required("Zorunlu alan."),
    //password validasyonu ile minimum 5 karaktere sahip olması gerekmekte ve zorunlu olmaktadır.
    // password : yup.string().min(5).required(),
    password : yup.string().min(5, "En az 5 haneli parola giriniz.").required(),
    //oneOf ile istenilen özelliğin eşleşmesini belirtiriz
    passwordConfirm : yup.string().oneOf([yup.ref('password')]).required()
})




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
                    gender : "",
                    hobies : [],
                    country : "Turkey",
                    password : "",
                    passwordConfirm : "",
                }}
                //Burada values ile initialValues ile tanımlanan bütün özellikleri alırız ve submit ederek isteidğimiz işlemi yapabiliriz.
                onSubmit={(values) => {
                    //Burada values değerlerini alırız
                    console.log(values)
                }}
                validationSchema = {validations}
            >              
                        
                {      
                //errors ile istediğimiz inputlara hata mesajı verdirmek için kullanırız.
                //touched özelliği, input üzerinden odağımızı çektiğimiz takdirde hata mesajını vermesini istersek kullanırız.Bunu kullanmak için ise handleBlur fonk kullanmamız gerekiyor.
                    ({handleSubmit, handleChange, handleBlur,values, errors ,touched})=>(
                        <form onSubmit={handleSubmit} >
                            <label htmlFor="firstName">First Name</label>
                            <input
                            type='text' 
                            id="firstName"
                            name='firstName'
                            placeholder = 'Name'
                            onChange={handleChange}
                            value={values.firstName}
                            />
                        <br></br>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                            type='text' 
                            id='lastName'
                            name ='lastName'
                            placeholder = 'Last Name'
                            onChange={handleChange}
                            value={values.lastName}
                            
                            />
                        <br></br>
                            <label htmlFor="mail">Email</label>
                            <input 
                            id='email'
                            name='email'
                            placeholder= 'E-mail'
                            type='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div>{errors.email && touched.email &&(<div>{errors.email}</div>)}</div>
                        <br></br>
                            <label htmlFor="password">Password</label>
                            <input 
                                id="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                placeholder="Password"
                            />
                        <div>{errors.password && (<div>{errors.password}</div>)}</div>
                        <br></br>
                            <label>Confirm Password</label>
                            <input 
                                type="password"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                                name="passwordConfirm"
                            />
                            <br></br>
                            <span>Male</span>
                            <input
                                type="radio" 
                                name="gender"
                                value="Male"
                                onChange={handleChange}
                                checked
                            />
                            <span>Female</span>
                            <input 
                                type="radio" 
                                name="gender"
                                value="Female"
                                onChange={handleChange}
                            />
                            <br></br>
                            <div>
                                Coding
                                <input 
                                type="checkbox" 
                                name="hobies"
                                value="Coding"
                                onChange={handleChange}
                                />
                            </div>
                            
                             <div>
                                Cinema
                             <input 
                                type="checkbox" 
                                name="hobies"
                                value="Cinema"
                                onChange={handleChange}
                            />
                             </div>
                             <div>
                                Photography
                                <input 
                                type="checkbox" 
                                name="hobies"
                                value="Photography"
                                onChange={handleChange}
                            />
                             </div>
                            <select name="Country" value={values.country} onChange={handleChange}>
                                <option value="USA">USA</option>
                                <option value="Turkey">Turkey</option>
                                <option value="France">France</option>
                                <option value="Italy">Italy</option>
                            </select>
                            
                            <br></br>
                            <button type="submit">Submit</button>
                        <br></br>
                        {JSON.stringify(values, null, 2)}
                    </form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormikSecondExample