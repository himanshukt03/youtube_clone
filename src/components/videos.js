const videos = [
    {
      id: 'abc123', // Video ID
      snippet: {
        title: 'Video Title 1', // Title of the video
        channelId: 'channel123', // ID of the channel
        channelTitle: 'Channel Title 1', // Title of the channel
        thumbnails: {
          high: {
            url: 'https://example.com/thumbnail1.jpg' // URL of the video thumbnail
          }
        }
      },
      statistics: {
        viewCount: 10000, // Number of views
        likeCount: 500 // Number of likes
      }
    },
    {
      id: 'def456',
      snippet: {
        title: 'Video Title 2',
        channelId: 'channel456',
        channelTitle: 'Channel Title 2',
        thumbnails: {
          high: {
            url: 'https://example.com/thumbnail2.jpg'
          }
        }
      },
      statistics: {
        viewCount: 20000,
        likeCount: 1000
      }
    },
    // Add more videos as needed
  ];
  