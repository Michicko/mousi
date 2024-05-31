import React from "react";
import FormGroup from "./Form/FormGroup";
import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";

export default function Subscription() {
  return (
    <div className="subscription">
      <img src="/images/sub.jpg" alt="sets on chair" className="img subscription__img" />
      <h2 className="heading heading__secondary heading__secondary--top-shift mb-2">
        <span>Subscribe to receive</span>
        <span>exclusive information</span>
      </h2>
      <div className="subscription__form-box container container--xs">
        <p className="text mb-3">
          Sign up for my newsletter and be the first to know about new products,
          latest news and special offers. Unsubscribe at anytime.
        </p>
        <form className="subscription__form">
       
          <FormInput type="text" className="form__input form__input--dark" placeholder="First name" autoComplete="on" name="name" />
          <FormInput type="email" className="form__input form__input--dark" placeholder="Email" autoComplete="on" name="email" />
          <button type="submit" className="btn btn__primary">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
