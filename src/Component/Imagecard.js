import React from 'react'

const imgcard = ({ img }) => {
    const tags = img.tags.split(',')
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={img.webformatURL} alt="" className="w-full" />
                <div className="font-bold text-purple-600 text-xl">Photo by {img.user}</div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {img.views}
                    </li>
                    <li>
                        <strong>Download: </strong>
                        {img.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                       {img.likes}
                    </li>
                </ul>
             <div className="px-6 py-4">
          {tags.map((tag,index)=>(
            <span key={index}className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
          ))}
           
        </div>
        </div>
    )
}

export default imgcard