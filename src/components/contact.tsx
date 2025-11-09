import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ShowToastWrapper, { useShowToast } from "./showToast";

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
      <div className="my-14 flex scroll-mt-24 flex-col items-center px-6">
        <h1 className="mb-6 text-center text-3xl font-medium">
          Let’s have a talk!
        </h1>
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
    </ShowToastWrapper>
  );
}
