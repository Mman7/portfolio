"use client";
import { useState } from "react";
import ShowToastWrapper, { useShowToast } from "./showToast";

import { Mail, MapPin, Phone } from "lucide-react";
interface EmailParams {
  message: string;
  user_name: string;
  user_email: string;
}

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`,
    )
    .join("&");

const checkValid = (value: string) => value !== "";

export default function Contact() {
  const [isFormSending, setSendingStatus] = useState<boolean>(false);
  const { toast, showToast } = useShowToast();
  const [formData, setFormData] = useState<EmailParams>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const isFormValid = () =>
    checkValid(formData.message) &&
    checkValid(formData.user_name) &&
    checkValid(formData.user_email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }

    try {
      setSendingStatus(true);
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "bot-field": "",
          ...formData,
        }),
      });

      if (response.ok) {
        setFormData({ user_name: "", user_email: "", message: "" });
        showToast({ isFailed: false });
      } else {
        showToast({ isFailed: true });
      }
    } catch {
      showToast({ isFailed: true });
    } finally {
      setSendingStatus(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ShowToastWrapper toast={toast}>
      <div className="m-auto my-14 flex scroll-mt-24 flex-col items-center px-6 py-15 lg:px-38">
        <h2 className="mb-10 text-center text-3xl font-medium">
          Let’s build something together
        </h2>

        <div className="flex w-full flex-col justify-between gap-10 md:flex-row">
          <section>
            <h3 className="mb-4 text-xl font-medium">Get in Touch</h3>
            <p className="mb-8 text-gray-400">
              Have a project idea, a collaboration opportunity, or a role in
              mind? Send me a message and I usually reply within 24 hours.
            </p>
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
          <form
            className="w-full"
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="/__forms.html"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
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
                value={formData.user_name}
                onChange={handleChange}
              />

              <label className="label text-base">What's your email?</label>
              <input
                type="email"
                name="user_email"
                className="input w-full"
                placeholder="Email"
                value={formData.user_email}
                onChange={handleChange}
              />

              <label className="label text-base">Your message</label>
              <input
                type="text"
                name="message"
                className="input h-16 w-full resize text-base"
                placeholder="hello..."
                value={formData.message}
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
      <div className="group flex items-center gap-5 rounded-lg transition-all duration-300 hover:-translate-y-1">
        <div className="bg-info/40 group-hover:bg-info/55 rounded-4xl p-4 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
        <section>
          <h4 className="text-start text-xl font-medium">{title}</h4>
          <p className="text-start">{description}</p>
        </section>
      </div>
    </>
  );
}
