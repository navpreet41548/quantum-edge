import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    console.log(contactData);

    if (
      contactData.firstName === "" ||
      contactData.lastName === "" ||
      contactData.email === ""
    ) {
      toast.warn("Every Field is Important", {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false);
      return;
    }

    const id = toast.loading("Please wait...", {
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Example API call
    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const dbData = await res.json();

      if (!dbData.err) {
        toast.update(id, {
          render: "Message Sent!!",
          type: "success",
          isLoading: false,
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push("/");
        setLoading(false);
      } else {
        toast.update(id, {
          render: "Something Went Wrong",
          type: "error",
          isLoading: false,
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      console.error("API Error:", error);
      toast.update(id, {
        render: "API Error",
        type: "error",
        isLoading: false,
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
    }
  };

  return (
    <div id="contact" className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3 className={styles.subHeading}>CONTACT</h3>
          {/* <h2 className={styles.heading}>
            FULLY CERTIFIED & <br></br> AUTHORIZED
          </h2> */}
          <h3 className={styles.lightHeading}>MY EMAIL</h3>
          <h3 className={styles.boldHeading}>support@quantumedgeinc.co</h3>
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <h3 className={styles.formHeading}>Fill out the form</h3>
            <input
              onChange={(e) => handleInput(e)}
              className={styles.input}
              placeholder="NAME"
              name="name"
            />
            <input
              onChange={(e) => handleInput(e)}
              className={styles.input}
              placeholder="EMAIL"
              name="email"
            />
            <textarea
              onChange={(e) => handleInput(e)}
              className={`${styles.input} ${styles.textarea}`}
              placeholder="MESSAGE"
              name="message"
            ></textarea>
            {loading ? (
              <button className={styles.button}>
                <i className="bx bx-loader-alt bx-spin"></i>
              </button>
            ) : (
              <button onClick={handleSubmit} className={styles.button}>
                Contact
              </button>
            )}
          </div>
        </div>
        <div className={styles.side}>
          <h4 className={styles.number}>06</h4>
          <div className={styles.darkLine}></div>
          <div className={styles.lightLine}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
