import React from 'react'

const SideVideoCard = ({statistics, snippet }) => {
  return (
    <div>

    <img src={snippet?.thumbnails?.medium?.url} alt="" className="mb-2 rounded-lg" />
    <div>
    <div className="">
          <h1 className="text-lg font-medium text-gray-900 ">{snippet?.title}</h1>
          <h1 className="text-sm text-gray-500 ">{snippet?.channelTitle}</h1>
          <h1 className="text-sm text-gray-500">{statistics?.likeCount / 100} Views</h1>
        </div>
    </div>
    </div>
  )
}

export default SideVideoCard