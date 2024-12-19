import React , { useState }  from 'react';

const CourseFilter = () => {
    const getInitialStateCategory = () => {
        const category = "";
        return category;
    };

    const [category, setCategory] = useState(getInitialStateCategory);

    const handleChangeCategory = (e) => {
        setCategory(e.target.category);
    };

    return (
        <div className="row align-items-center back-vertical-middle shorting__course mb-50">
            <div className="col-md-2">
                <div className="all__icons"> 
                    <div className="list__icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                    </div>
                    <div className="result-count">Filters</div>
                </div>
            </div>
            <div className="col-md-10 text-right">
                <select className="from-control category" value={category} onChange={handleChangeCategory}>
                    <option>All Categories</option>
                    <option value="Education">Education</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Development">Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                </select>
                <select className="from-control language">
                    <option>All Language</option>
                    <option value="English">English</option>
                    <option value="Italic">Italic</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Bangla">Bangla</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Hindi">Hindi</option>
                </select>
                <select className="from-control price">
                    <option>All Prices</option>
                    <option>Free Courses</option>
                    <option>Paid Courses</option>
                    <option>Subscribers Only</option>
                </select>
                <select className="from-control skill">
                    <option>All Skills</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Advanced</option>
                </select>
            </div>
        </div>
    );
}

export default CourseFilter;