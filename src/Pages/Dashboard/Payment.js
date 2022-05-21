import React from "react";
import {loadStripe} from '@stripe/stripe-js'
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L1kUhKwm1dF8pGwOtgVnwIGLBJRpUeQ7YZlCwSqKoyPx4wXR8rm4CZIg90zMAkaZXFqM6M7h1fhNUQMRUNhsp7000DwCbHSFt');

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: appoinrment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      
          <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
              <p className="text-success font-bold">Hello,{appoinrment.patientName}</p>
              <h2 class="card-title">Pay for {appoinrment.treatment}</h2>
              <p>Your Appointment : <span className="text-orange-700">{appoinrment.date}</span> at <span className="text-orange-700">{appoinrment.slot}</span></p>
              <p>Please pay: ${appoinrment.price}</p>
            </div>
          </div>
          <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
            <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
            </div>
          </div>
        </div>
     
  );
};

export default Payment;
