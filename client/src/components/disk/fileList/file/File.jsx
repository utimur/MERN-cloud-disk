import React from 'react';
import './file.css'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
const File = ({file}) => {
    return (
        <div className='file'>
            <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img"/>
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0,10)}</div>
            <div className="file__size">{file.size}</div>
        </div>
    );
};

export default File;
