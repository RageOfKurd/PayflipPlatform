import React,{useState} from "react";
import Footer from "./footer";


function SignUp (){

  const [companyName , setcompanyName] = useState('');
  const [contactName , setcontactName] = useState('');
  const [email , setEmail] = useState('');
  const [Address , setAddress] = useState('');
  const [password  , setPassword] = useState('');
  const [country  , setCountry] = useState('Belguim');

  const handleSubmit=(data) => {

    data.preventDefault();
    console.log(companyName,contactName,email,Address,password,country);

  }




    return(
<>
  <div className="backgroundimg">  
  <section>
    <div className="page-header align-items-start pt-5 pb-11 m-3 border-radius-lg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="welcometitle col-lg-5 text-center mx-auto">
            <img height="70px" width="300px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fproxy%2F0*kYj1aQljmDquuw7Z&f=1&nofb=1"/>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row mt-lg-n10 mt-md-n11 mt-n10">
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div className="card z-index-0">
           <div className="extrashadow">
            <div className="card-header text-center pt-4">
              <h3 className="text-info">Register you company</h3>
            </div>
            <div className="card-body">
              <form role="form text-left" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" value={companyName } onChange={(answer) => {setcompanyName(answer.target.value)}} placeholder="Company Name" aria-label="CompanyName" aria-describedby="email-addon"/>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" value={contactName } onChange={(answer) => {setcontactName(answer.target.value)}} placeholder="Contact Name" aria-label="ContactName" aria-describedby="email-addon"/>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" value={email } onChange={(answer) => {setEmail(answer.target.value)}} placeholder="Company Email" aria-label="Email" aria-describedby="email-addon"/>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" value={Address } onChange={(answer) => {setAddress(answer.target.value)}} placeholder="Company Address" aria-label="Address" aria-describedby="email-addon"/>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" value={password } onChange={(answer) => {setPassword(answer.target.value)}} placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="text-bluepayflip">For which country do you want to register?</label>
                  <select className="form-control" id="country" aria-label="Country">  
                    <option value="1"  >Belgium</option>  
                    <option value="2">Slovenia</option>  
                    <option value="3">Portugal</option>
                    </select> 
                </div>             
                <div className="form-check form-check-info text-left">
                  <input className="form-check-input" value={country} onChange={(answer) => setCountry(answer.target.value)} type="checkbox"  id="flexCheckDefault" checked/>
                  <label className="form-check-label"   htmlFor="flexCheckDefault">
                    I agree the <a href="javascript:;" >Terms and Conditions</a>
                  </label>
                </div>
                <div className="text-center">
                  <button type="button" className="btn text-redpayflip w-100 my-4 mb-2" style={{color:'white'}}>Request Access</button>
                </div>
                <p className="text-sm mt-3 mb-0">Already have an account? <a href="javascript:;" className="text-bluepayflip font-weight-bolder">Sign in</a></p>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<footer>
{/* <Footer /> */}
</footer> 
</div>
</>
    );
}


export default SignUp;