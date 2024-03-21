import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function HomePage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      className="bg-white min-h-screen"
      style={{ background: "linear-gradient(to bottom, #FFFFFF, #FF89B2)" }}
    >
    

     

       <section className="py-10 px-4">
    <div className="container mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/products" className="bg-white inline-block rounded-lg hover:bg-pink-300  shadow-md p-3 ">
             <img src="/src/img/images.jpg" alt="fancy" className="w-[400px] h-[400px] mr-4" />
            <h3 className="text-xl font-bold mb-2 text-center">Fancy Costume</h3>
            </Link>
             <Link to="/products" className="bg-white inline-block rounded-lg hover:bg-pink-300  shadow-md p-3 ">
             <img src="/src/img/images1.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
                 <h3 className="text-xl font-bold mb-2 text-center">Pajamas</h3>
            </Link>
            <Link to="/products" className="bg-white inline-block rounded-lg hover:bg-pink-300  shadow-md p-3 ">
            <img src="/src/img/images2.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
                 <h3 className="text-xl font-bold mb-2 text-center">Party Costume</h3>

             </Link>
           <Link to="/products" className="bg-white inline-block rounded-lg hover:bg-pink-300  shadow-md p-3 ">
             <img src="/src/img/images3.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
                <h3 className="text-xl font-bold mb-2 text-center">Fashion Costume</h3>

             </Link>

         </div>
     </div>

 </section>

 <section className="bg-white text-black py-20 px-1">
     <div className="container mx-auto text-center">
     <section className="py-0 px-4">
     <div className="container mx-auto">
        <h3 className="text-red-600 text-xl font-bold mb-2 text-left">New</h3>
        <hr/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
             <div className="bg-white rounded-lg shadow-md p-6">
            <img src="/src/img/images.jpg" alt="fancy" className="w-[400px] h-[400px] mr-4" />
             <h3  className="text-xl font-bold mb-2 text-center">ชุดแฟนซี</h3>
             </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <img src="/src/img/images1.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
                 <h3 className="text-xl font-bold mb-2 text-center">ชุดนอน</h3>
             </div>
             <div className="bg-white rounded-lg shadow-md p-6">
             <img src="/src/img/images2.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
                 <h3 className="text-xl font-bold mb-2 text-center">ชุดราตรี</h3>

             </div>

         </div>
    </div>

 </section>
         <Link to="/landing" className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900  ">See more</Link>
     </div>

     <div className="container mx-auto text-center">
     <section className="py-0 px-4">
     <div className="container mx-auto">
        <h3 className="text-red-600 text-xl font-bold mb-2 text-left">Sale</h3>
         <hr/>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
             <div className="bg-white rounded-lg shadow-md p-6">
             <img src="/src/img/images.jpg" alt="fancy" className="w-[400px] h-[400px] mr-4" />
             <h3 className="text-xl font-bold mb-2 text-center">ชุดแฟนซี</h3>
            </div>
             <div className="bg-white rounded-lg shadow-md p-6">
             <img src="/src/img/images1.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
                 <h3 className="text-xl font-bold mb-2 text-center">ชุดนอน</h3>
             </div>
             <div className="bg-white rounded-lg shadow-md p-6">
            <img src="/src/img/images2.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
                <h3 className="text-xl font-bold mb-2 text-center">ชุดราตรี</h3>

             </div>

        </div>
     </div>

 </section>
         <Link to="/landing" className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900  ">See more</Link>
     </div>

</section>



      
    </div>
  );
}


