import axios from 'axios'
import { useState } from "react";
import useAuth from '../hooks/useAuth'

export default function LoginForm() {
  const { setUser } = useAuth()
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const hdlChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // การตรวจสอบความถูกต้องของข้อมูล
      const rs = await axios.post('http://localhost:9000/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:9000/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      })
      console.log(rs1.data)
      setUser(rs1.data)

    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="bg-white min-h-screen" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FF89B2)' }}>
      <div className="flex justify-center items-center h-screen">
        <div className="p-5 border w-1/4 h-[400px] rounded bg-pink-100">
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-5">Log in</div>
            <form className="flex flex-col gap-2 w-full max-w-xs" onSubmit={hdlSubmit}>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">your username</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="username"
                  value={input.username}
                  onChange={hdlChange}
                />
              </label>

              <label className="form-control">
                <div className="label">
                  <span className="label-text">your password</span>
                </div>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  name="password"
                  value={input.password}
                  onChange={hdlChange}
                />
              </label>

              <div className="flex justify-center">
                <button type="submit" className="btn btn-outline btn-blue mt-7">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

