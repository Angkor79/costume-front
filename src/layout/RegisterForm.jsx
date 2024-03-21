import axios from 'axios'
import {useState} from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: "",
    firstName: "",
        lastName : "" ,
        email: "",
        password: "",
        phone: ""
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      const rs = await axios.post('http://localhost:9000/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }

  }

  return (
    <div className="bg-white min-h-screen" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FF89B2)', height: '100vh' }}>
     <div className="flex justify-center items-center h-screen">
  <div className="p-5 border w-1/4 h-[720px] rounded bg-pink-100">
      <div className="text-3xl mb-5">Create an account</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
      <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">username</span>
          </div>  
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="username"
            value={input. username}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">firstName</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="firstName"
            value={input. firstName}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">lastName</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="lastName"
            value={input. lastName}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">E-mail</span>
          </div>
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            name="email"
            value={input.email}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">PhoneNumber</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="phone"
            value={input. phone}
            onChange={ hdlChange }
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            name="password"
            value={ input.password }
            onChange={ hdlChange }
          />
        </label>
    
        <div className="flex gap-5 ">
          <button type="submit" className="btn btn-outline btn-blue mt-7">Submit</button>
          <button type="reset" className="btn btn-outline btn-blue mt-7">Reset</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}
