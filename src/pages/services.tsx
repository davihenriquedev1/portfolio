import { Hero } from "../components/services-page/hero";
import { Grid } from "../components/services-page/grid";
import { Packages } from "../components/services-page/packages";
import { ProcessSection } from "../components/services-page/process-section";
import { Faq } from "../components/services-page/faq";
import { Contact } from "../components/services-page/contact";
import { useState } from "react";

const Services = () => {
    const [messageSubject, setMessageSubject] = useState("");

    return (
        <main className="relative isolate overflow-hidden bg-bg text-text">
            <Hero />
            <div className="mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-accent/20 to-transparent" />
            <Grid setSubject={setMessageSubject}/>
            <Packages setSubject={setMessageSubject}/>
            <ProcessSection />
            <div className="mx-auto h-px max-w-4xl bg-linear-to-r from-transparent via-accent/20 to-transparent" />
            <Faq />
            <Contact message={messageSubject}/>
        </main>
    );
};

export default Services;