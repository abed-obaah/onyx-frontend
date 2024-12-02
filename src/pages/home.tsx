import Testimonial from "../components/singleTestimonialCard";
import profile from '../assets/imgs/img1.jpg';
import profile1 from '../assets/imgs/img2.jpg';
import laptop from '../assets/imgs/pc.png';
import WWD from "../components/journeyCard";
import Logo1 from "../assets/logo/logo-white.png"
import Nav from "../components/nav";
import below from "../assets/imgs/below.png"
import trsnf from "../assets/imgs/trnsf.png"

export default function Home() {
  return (
    <>
      <div className="">
        <Nav/>
      </div>

      <div className="h-screen bg-hero bg-cover bg-center bg-no-repeat">
        {/* <img src={hero} alt="" className="object-contain object-center w-100%"/> */}
      </div>

      <div className="">
        <img src={below} alt="" className="w-full"/>
      </div>

      <div className="mb-20 bg-gradient-to-b from-lghtest to-lght mx-8 rounded-2xl px-20 pt-10 grid gap-6 grid-cols-2">
        <div className="flex flex-col justify-center gap-5 w-1/2">
          <h5 className="text-main font-bold">Daily Transactions</h5>

          <h1 className="text-3xl text-white font-bold">Get your Oniix Account</h1>
          <h1 className="text-4xl text-main font-bold">Experience Next Level Banking</h1>

          <p className="text-white font-light">Sign up today for streamlined global transactions and instant access to your money</p>

          <button className="bg-seco text-white font-bold rounded-lg w-fit px-3 py-2">Create an Account now</button>
        </div>

        <div className="">
          <img src={trsnf} alt="" />
        </div>
      </div>

      <div className="bg-main p-24">
          <div className="border-0 border-b-white flex mb-11 justify-between">
            <div className="text-white w-1/2 px-12">
              <img src={Logo1} alt="logo" width="30%"/>
              <h1 className="text-3xl font-bold">Oniix - Redefining the Future of Finance</h1>
              <p className="">Experience fast, reliable payments and complete control of your finances all in one platform</p>
            </div>

            <div>
              <img src={laptop} alt="" />
            </div>
          </div>

        <div className="grid grid-cols-2 gap-5">
          <WWD num="01-" icon={profile1} heading="Bank to Bank Transfers" txt="Effortlessly transfer funds between banks with our secure platform, ensuring your money reaches its destination instantly and without hassle."/>
          <WWD num="02-" icon={profile1} heading="Virtual Top ups" txt="Stay connected with ease through our innovative virtual top-up service, designed to deliver fast and secure recharges for both data and airtime"/>
          <WWD num="03-" icon={profile1} heading="Across Border Payment" txt="Send and recieve money across borders with our secure international payment platform offering competitive rates and real-time tracking for complete peace of mind"/>
          <WWD num="04-" icon={profile1} heading="Airtime to Cash" txt="Stay connected with ease through our innocative virtual top-up service, designed to deliver fast and secure recharges for both data and airtime"/>
          <WWD num="05-" icon={profile1} heading="Scheduled Payments" txt="Take the hassle out of payments with our automated scheduling feature, offering reliable reminders and seamless transaction processing"/>
          <WWD num="06-" icon={profile1} heading="Investment Saving" txt="Easily save and invest for your future with our intuitive platform offering tailored strategies and real-time tracking to help you achieve your financial goals."/>
        </div>
      </div>


      {/* Testimonial section */}
      <div className="text-center text-4xl font-bold">
        <h1>Testimonies</h1>
      </div>
    
      <div className="mt-10 flex gap-6 justify-center">
        <Testimonial img={profile} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quod velit illum fuga obcaecati, nulla id. Error porro laudantium nemo dicta laboriosam, ullam provident."/>
        <Testimonial img={profile} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quod velit illum fuga obcaecati, nulla id. Error porro laudantium nemo dicta laboriosam, ullam provident."/>
        <Testimonial img={profile} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quod velit illum fuga obcaecati, nulla id. Error porro laudantium nemo dicta laboriosam, ullam provident."/>
      </div>
    
      <div className="flex gap-6 mt-10 justify-center">
        <Testimonial img={profile} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quod velit illum fuga obcaecati, nulla id. Error porro laudantium nemo dicta laboriosam, ullam provident."/>
        <Testimonial img={profile} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quod velit illum fuga obcaecati, nulla id. Error porro laudantium nemo dicta laboriosam, ullam provident."/>
      </div>
    </>
  )
}