import React, { useState } from 'react';
import { StudentProject } from './types';

interface Props {
    projects: StudentProject[];
}

const StudentProjectsGrid: React.FC<Props> = ({ projects }) => {
    const ITEMS_PER_LOAD = 3;
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + ITEMS_PER_LOAD, projects.length));
    };

    const visibleProjects = projects.slice(0, visibleCount);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-12 bg-neutral-50">
            <h2 className="text-4xl font-extrabold text-primary text-center mb-4">Student Projects</h2>
            <p className="text-center text-neutral-600 mb-12 max-w-3xl mx-auto">
                A showcase of student innovation developed using the AICTE IDEA Lab facilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProjects.map((project) => (
                    <div
                        key={project.sno}
                        className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 animate-fadeIn"
                    >
                        <div className="text-sm text-secondary font-medium mb-2">#{project.sno}</div>
                        <h3 className="text-xl font-semibold text-primary mb-4">{project.title}</h3>

                        <div className="flex items-start gap-3 mb-2 text-neutral-700 text-sm">
                            <i key="student" className="fas fa-user-graduate text-secondary mt-1" aria-hidden="true" />
                            <span>
                                <span className="font-medium">Student:</span> {project.studentCoordinator}
                            </span>
                        </div>

                        <div className="flex items-start gap-3 mb-2 text-neutral-700 text-sm">
                            <i key="faculty" className="fas fa-chalkboard-teacher text-secondary mt-1" aria-hidden="true" />
                            <span>
                                <span className="font-medium">Faculty:</span> {project.facultyCoordinator}
                            </span>
                        </div>

                        <div className="flex items-start gap-3 text-neutral-700 text-sm mt-4">
                            <i key="tools" className="fas fa-tools text-secondary mt-1" aria-hidden="true" />
                            <span>
                                <span className="font-medium">Facilities:</span> {project.facilityUsed}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < projects.length && (
                <div className="mt-10 flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        aria-label="Load more student projects"
                        className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Load More
                    </button>
                </div>
            )}
        </section>
    );
};

export default StudentProjectsGrid;
