import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./ui/accordion"

type CourseOutcome = {
    coNumber: string
    coDefinition: string
}

export type SubjectCO = {
    subject: string
    semester: string
    outcomes: CourseOutcome[]
}

type CourseOutcomeAccordionProps = {
    data: SubjectCO[]
}

export default function CourseOutcomeAccordion({ data }: CourseOutcomeAccordionProps) {
    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-primary text-center">

                Course Outcomes
            </h2>

            <Accordion type="multiple" defaultValue={[]} className="space-y-4">
                {data.map(({ subject, semester, outcomes }, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border rounded-md"
                    >
                        <AccordionTrigger className="text-lg font-semibold flex items-center justify-between">
                            <div>
                                <i className="fa-solid fa-angle-right  text-primary mx-2"></i>
                                {subject}{" "}
                                <span className="ml-3 text-sm text-gray-600">{semester}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <table className="w-full border-collapse border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-secondary text-left w-24">
                                            CO Number
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">
                                            CO Definition
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {outcomes.map(({ coNumber, coDefinition }) => (
                                        <tr key={coNumber} className="even:bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-2 font-semibold text-secondary">
                                                {coNumber}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {coDefinition}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
