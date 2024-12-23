import React from 'react';

const DevisiMain = ({ konteks }) => {
  return (
    <div className="berita__page_grid react-berita__single-page pb---40 pt---110">
      <div className="container pb---70">
        <div className="row">
          <div className="col-lg-8">
            <div className="berita-single-inner">
              <div className="berita-content">
                <ul>
                  {konteks.map((item, index) => (
                    <li key={index}>
                      {index + 1}. {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevisiMain;
