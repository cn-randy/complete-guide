import ContactForm from "../../components/contact/contact-form";
import { Fragment } from "react";
import Head from "next/head";

const ContactsPage = function (props) {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Send me your messages." />
        <title>Contact Me</title>
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactsPage;
