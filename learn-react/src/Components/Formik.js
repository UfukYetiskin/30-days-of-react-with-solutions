//Formları yönetmek için Formik adlı paket kullanıyoruz.
import {useFormik} from 'formik'

const ExampleofFormik = () => {
    const formik = useFormik({
        initialValues : {
            email : '',
            lastName : "",
            gender : {
                male : 'male',
                female : 'female',
            }
        },
        onSubmit : values => {
            alert(JSON.stringify(values, null, 2))
            console.log(`Email Address: ${formik.values.email}, Last Name: ${formik.values.lastName},gender : ${formik.values.gender}`)
        }
    })
    return (
        <form style={{border : '1px solid black', padding : '1%'}} onSubmit={formik.handleSubmit}>
            <h1>This Component includes Formik</h1>
            <label htmlFor='email'> Email Address</label>
            <input 
                id='email'
                name ='email'
                type='email'
                onChange={formik.handleChange}
                value = {formik.values.email}
            />
            <label htmlFor='lastName'>Last Name</label>
            <input 
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                //anlık olarak verinin tutulduğu yer, formik içerisinde bulunan values objesindedir. bundan dolayı initialValues yerine direk values'ten veriyi alırız
                value = {formik.values.lastName}
            />
            <br></br>
            <label htmlFor='male'>Male</label>
            <input 
                type='radio'
                id = 'male'
                name = 'male'
                onChange={formik.handleChange}
                value={formik.values.gender.male}
            />
            <label htmlFor='female'>Female</label>
            <input 
                type='radio'
                id = 'female'
                name = 'female'
                onChange={formik.handleChange}
                value={formik.values.gender.female}
            />

            <button type='submit'>Submit</button>
        </form>
    )
}
export default ExampleofFormik