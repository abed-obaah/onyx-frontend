import Testimonial from "./components/singleTestimonialCard";

export default function App() {
  return (
    <>
    <div className="text-center text-4xl font-bold">
      <h1>Testimonies</h1>
    </div>
        <div className="mt-10 flex gap-6 justify-center">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
        <div className="flex gap-6 mt-10 justify-center">
            <Testimonial />
            <Testimonial />
        </div>
    </>
  )
}