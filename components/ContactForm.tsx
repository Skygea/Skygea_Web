"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

import "react-phone-input-2/lib/style.css";
import { PhoneInput } from "./ui/phone-input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone: string) => {
    setFormData((prev) => ({
      ...prev,
      phone,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { firstName, email, phone, message } = formData;

    if (!firstName || !email || !phone || !message) {
      toast.error("Fields marked with * are required.", {
        className: "text-xl",
      });
      return;
    }

    console.log("Submitted Data:", formData);
    // TODO: Send to backend or API
  };

  return (
<div className="bg-[rgba(255,255,255,0.04)] p-10 sm:p-20 rounded-2xl">
  <h1 className="text-4xl font-semibold">
    Got a Vision? Let's Make It Real
  </h1>
  <p className="opacity-80 mt-2">
    Whether it’s an app, website, or digital campaign, <br /> we’ll help you
    create something extraordinary.
  </p>

  <form
    onSubmit={handleSubmit}
    className="flex flex-col mt-10 items-center w-full"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <Input
        className="w-full  h-12 p-4"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <Input
        className="w-full  h-12 p-4"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <Input
        className="w-full h-12 p-4"
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <div className="w-full ">
        <PhoneInput placeholder="Contact Number" onChange={handlePhoneChange} value={formData.phone} />
      </div>
    </div>

    <Textarea
      className="mt-4 h-60 w-full"
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
    />

    <Button
      type="submit"
      className="w-60 mt-6 bg-primary text-white p-6 text-lg font-semibold cursor-pointer rounded-md hover:opacity-90 bg-gradient-to-r from-gradient1 to-gradient3"
    >
      Let’s Build Together
    </Button>
  </form>
</div>
  );
};

export default ContactForm;
