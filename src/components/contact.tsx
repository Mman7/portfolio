"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ShowToastWrapper, { useShowToast } from "./showToast";

import { Mail, MapPin, Phone } from "lucide-react";
interface emailparams {
  message: string;
  user_name: string;
  user_email: string;
}

const sendEmail = (data: any) => {
  emailjs.init("s-0HeiO8iILHKz7Iu");
  return emailjs.send("service_qbm42t7", "template_70hasxo", data);
};

const checkValid = (value: string) => value !== "";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isFormSending, setSendingStatus] = useState<boolean>(false);
  const { toast, showToast } = useShowToast();
  const [formData, setFormData] = useState<emailparams>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const isFormValid = () =>
    checkValid(formData.message) &&
    checkValid(formData.user_name) &&
    checkValid(formData.user_email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      setSendingStatus(true);
      sendEmail(formData).then((a) => {
        if (a.status == 200) {
          console.log("SUCCESS");
          setSendingStatus(false);
          showToast({ isFailed: false });
        } else {
          console.log("Failed");
          setSendingStatus(false);
          showToast({ isFailed: true });
        }
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ShowToastWrapper toast={toast}>
      <div className="m-auto my-14 flex scroll-mt-24 flex-col items-center px-6 py-15 lg:px-38">
        <h1 className="mb-10 text-center text-3xl font-medium">
          Let’s have a talk!
        </h1>

        <div className="flex w-full flex-col justify-between gap-10 md:flex-row">
          <section>
            <h1 className="mb-4 text-xl font-medium">Get in Touch</h1>
            <h2 className="mb-8 text-gray-400">
              Have a project in mind or just want to say hello? Fill out the
              form and I'll get back to you as soon as possible.
            </h2>
            <div className="flex flex-col justify-around gap-6 pb-6">
              <Tile
                icon={<Mail className="size-6" />}
                title="Email"
                description="youzai0427@gmail.com"
              />
              <Tile
                icon={<Phone className="size-6" />}
                title="Phone"
                description="+60 1120568009"
              />
              <Tile
                icon={<MapPin className="size-6" />}
                title="Location"
                description="Malaysia"
              />
            </div>
          </section>
          <form className="w-full" onSubmit={handleSubmit} ref={form}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex w-full flex-col gap-4 border px-4 pb-6">
              <legend className="fieldset-legend text-lg">
                Send me an Email!
              </legend>
              <label className="label text-base">What's your name?</label>
              <input
                type="text"
                name="user_name"
                className="input w-full"
                placeholder="Name"
                onChange={handleChange}
              />

              <label className="label text-base">What's your email?</label>
              <input
                type="email"
                name="user_email"
                className="input w-full"
                placeholder="Email"
                onChange={handleChange}
              />

              <label className="label text-base">Your message</label>
              <input
                type="text"
                name="message"
                className="input h-16 w-full resize text-base"
                placeholder="hello..."
                onChange={handleChange}
              />

              <button
                className="btn btn-neutral mt-4 border-0 hover:bg-sky-500"
                disabled={isFormSending}
                aria-label="Send Email Button"
                type="submit"
              >
                {isFormSending ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Send"
                )}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </ShowToastWrapper>
  );
}

interface TileProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export function Tile({ icon, title, description }: TileProps) {
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="bg-info/40 rounded-4xl p-4">{icon}</div>
        <section>
          <h1 className="text-start text-xl font-medium">{title}</h1>
          <h2 className="text-start">{description}</h2>
        </section>
      </div>
    </>
  );
}
