import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-base-300 via-[#141414] to-base-300 py-16 px-4 md:px-12 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12" data-aos="fade-down">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            data-aos="fade-up"
          >
            Contact Me
          </h2>
          <p
            className="text-gray-300 text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let’s connect — I’m always open to opportunities and collaboration.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Form */}
          <div
            data-aos="fade-right"
            className="bg-base-100/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-base-200"
          >
            <form onClick={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-base-100 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-base-100/90 text-base-content"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-base-100 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full bg-base-100/90 text-base-content"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-base-100 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Your message..."
                  className="textarea textarea-bordered w-full bg-base-100/90 text-base-content"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full hover:scale-[1.02] transition-transform"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="flex items-center gap-4">
              <HiMail className="text-primary w-6 h-6" />
              <div>
                <h4 className="text-base-100 font-semibold">Email</h4>
                <p className="text-gray-300">mr.ronibiswas64@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HiPhone className="text-primary w-6 h-6" />
              <div>
                <h4 className="text-base-100 font-semibold">Phone</h4>
                <p className="text-gray-300">+880 1792 552448</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-primary w-6 h-6" />
              <div>
                <h4 className="text-base-100 font-semibold">WhatsApp</h4>
                <p className="text-gray-300">+880 1792 552448</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-primary w-6 h-6" />
              <div>
                <h4 className="text-base-100 font-semibold">GitHub</h4>
                <a
                  href="https://github.com/roni-biswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  github.com/roni-biswas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
