export default function Contact() {
  return (
    <div className="my-14 flex scroll-mt-24 flex-col items-center px-8">
      <h1 className="mb-6 text-center text-3xl font-medium">
        Let’s have a talk!
      </h1>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex w-full flex-col border p-4">
        <legend className="fieldset-legend">Send me an Email!</legend>

        <label className="label">What’s your name?</label>
        <input type="text" className="input w-full" placeholder="Name" />

        <label className="label">What’s your email?</label>
        <input type="email" className="input w-full" placeholder="Email" />

        <label className="label">Your message</label>
        <input
          type="text
        "
          className="input h-16 w-full"
          placeholder="hello..."
        />

        <button className="btn btn-neutral mt-4">Send</button>
      </fieldset>
    </div>
  );
}
