import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const Faq = () => {

    return (
        <div class="accordion__wrapper1">
            <Accordion className="accordion" preExpanded={'a'}>
                <AccordionItem className="accordion-item" uuid="a">
                    <AccordionItemHeading className="accordion-button">
                        <AccordionItemButton className="card-link">
                            What are the different types of course?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-item" uuid="b">
                    <AccordionItemHeading className="accordion-button">
                        <AccordionItemButton className="card-link">
                            What makes Echooling different from other?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-item" uuid="c">
                    <AccordionItemHeading className="accordion-button">
                        <AccordionItemButton className="card-link">
                            What are the main features of Echooling?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="accordion-item" uuid="d">
                    <AccordionItemHeading className="accordion-button">
                        <AccordionItemButton className="card-link">
                            How will Echooling help me in the academic?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion-body">
                        <p>Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Faq;