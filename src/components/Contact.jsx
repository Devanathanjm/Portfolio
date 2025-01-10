import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="text-4xl text-white text-center my-10">Get in Touch</h2>
      <div className="text-center tracking-tighter text-neutral-400">
        <p className="mb-3">{CONTACT.address}</p>
        <p className="mb-3">{CONTACT.phoneNo}</p>
        <a href="" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
