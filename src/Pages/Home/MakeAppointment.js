import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-2xl text-white py-5">Make an Appointment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
          tempore vitae obcaecati modi! Incidunt corrupti rem tempora culpa quae
          at sapiente necessitatibus, reiciendis, placeat eveniet quidem et sit
          nam laborum autem ad magnam asperiores! Officia impedit veritatis
          ipsam reprehenderit.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
