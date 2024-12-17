import Head from "next/head";

import ContactForm from "@/components/contact/contact-form";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me for help</title>
        <meta name="description" contact="Send me your ideals" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
