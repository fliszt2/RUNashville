const data = {
  events: [
    {
      id: 1,
      name: 'Hilltop Half-Marathon',
      description: 'Test your endurance in the hills of Nashville.',
      event_type: 'race',
      start_time: '2021-04-25T08:30:00',
      end_time: '',
      start_location: 'The Hill Top at West 25th St',
      end_location: '',
      image_url: 'https://d368g9lw5ileu7.cloudfront.net/races/races-64xxx/64289/raceBanner-zvhESQ8M-bCByo0.png',
      thumbnail_photo: '',
      difficulty_level: 'intermediate',
      running_distance: 13.5,
      leader: '',
      link: 'https://www.runnash.com/races/music-city-july-4th-virtual-5k/',
      attendees: 532,
      promoted: true,
      created_at: '',
      updated_at: '',
      map_url: 'https://wpln.org/wp-content/uploads/sites/7/2019/05/harpeth_river_greenway_broad.png',
    },
    {
      id: 2,
      name: 'Second Chance Half-Marathon',
      description: 'We know many of you have diligently trained for this very day, so we are excited to present another opportunity for you to chase your 13.1 mile goal in Nashville on 4/24! This is a live, in-person race! Your participation will  provide hope for children aging out of orphanages in Haiti & Uganda.',
      event_type: 'race',
      start_time: '2021-04-25T08:30:00',
      end_time: '',
      start_location: 'The Hill Top at West 25th St',
      end_location: '',
      image_url: 'https://www.handsonphysio.co.uk/wp-content/uploads/2015/07/Hands-On-Physiotherapy-Running-Banner-1.png',
      thumbnail_photo: '',
      difficulty_level: '',
      running_distance: 13.1,
      leader: '',
      link: 'https://www.runnash.com/races/music-city-july-4th-virtual-5k/',
      attendees: 327,
      promoted: true,
      created_at: '',
      updated_at: '',
      map_url: 'https://wpln.org/wp-content/uploads/sites/7/2019/05/harpeth_river_greenway_broad.png',
    },
    {
      id: 3,
      name: 'Music City 5k',
      description: `Kick off your Music City JULY 4TH celebration with a run through downtown Nashville! Bring the whole family to kick off your city celebrations with this traditional run/walk through downtown Nashville. \n

      All ages and fitness levels will love running past Nashville’s landmarks, like the new Music City Convention Center! \n

      Every participant will receive a commemorative medal & athletic tank top!`,
      event_type: 'race',
      start_time: '2021-04-25T08:30:00',
      end_time: '',
      start_location: 'The Hill Top at West 25th St',
      end_location: '',
      image_url: 'https://images.squarespace-cdn.com/content/v1/5b6491053c3a53415bc65889/1550590814114-5WNZTLSO5SXL5HW41OTK/ke17ZwdGBToddI8pDm48kNXSPiBzjY5QblMgpnVaIXAUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcsSm88jNd7fzCo1XpRtCTpB7cp2JnRQNwmb4b6NDb-oPMRMAqHDtJPPN9o8OU1NHm/Run-for-Animals-Website-Banner-3-1030x295.png?format=2500w',
      thumbnail_photo: '',
      difficulty_level: '',
      running_distance: 3.2,
      leader: '',
      link: 'https://www.runnash.com/races/music-city-july-4th-virtual-5k/',
      attendees: 641,
      promoted: true,
      created_at: '',
      updated_at: '',
      map_url: 'https://wpln.org/wp-content/uploads/sites/7/2019/05/harpeth_river_greenway_broad.png',

    },
    {
      id: 4,
      event_type: 'daily_run',
      name: 'Centennial Park, West End Ave Entrance',
      description: 'Join us for a lesiurely early morning 5k along the lake in beautiful Centennial Park',
      start_time: '2021-04-05T10:30:00.000Z',
      end_time: '',
      start_location: '2500 West End Ave',
      end_location: '',
      image_url: '',
      thumbnail_photo: './images/nashville.jpeg',
      difficulty_level: 'beginner',
      running_distance: 13.5,
      leader: 'Jack McClain',
      link: 'https://www.runnash.com/races/music-city-july-4th-virtual-5k/',
      attendees: 232,
      promoted: true,
      created_at: '',
      updated_at: '',
      map_url: './images/sample_map.png',
    },
    {
      id: 5,
      event_type: 'daily_run',
      name: 'Shelby Park',
      description: 'This is going to be a great run at Shelby Park',
      start_time: '2021-04-05T10:30:00.000Z',
      end_time: '',
      start_location: '2500 West End Ave',
      end_location: '',
      image_url: '',
      thumbnail_photo: './images/running_sillhouette.jpeg',
      difficulty_level: 'advanced',
      running_distance: 13.5,
      leader: 'Jack McClain',
      link: 'https://www.runnash.com/races/music-city-july-4th-virtual-5k/',
      attendees: 932,
      promoted: true,
      created_at: '',
      updated_at: '',
    },
    {
      id: 6,
      event_type: 'daily_run',
      name: 'Different Park!',
      description: 'A stressful early morning marathon along the lake in beautiful Centennial Park',
      start_time: '2021-04-05T10:30:00.000Z',
      end_time: '',
      start_location: '44 East End Ave',
      end_location: '',
      image_url: '',
      thumbnail_photo: './images/leeds_runner.jpeg',
      difficulty_level: 'intermediate',
      running_distance: 24.5,
      leader: 'Ethel Merman',
      link: 'https://www.runnash.com/races/music-city-july-4th-virtual-5k/',
      attendees: 6,
      promoted: true,
      created_at: '',
      updated_at: '',
    },
    {
      id: 8,
      event_type: 'other',
      name: 'Join Our Weekly Newsletter',
      description: 'Want to be in the know about what\'s going on in the Nashville running scene? Check out the official RUNashville newsletter!',
      start_time: '2021-04-05T10:30:00.000Z',
      end_time: '',
      start_location: '2500 West End Ave',
      end_location: '',
      image_url: '',
      thumbnail_photo: './images/leeds_runner.jpeg',
      difficulty_level: '',
      running_distance: 13.5,
      leader: '',
      link: '',
      attendees: 532,
      promoted: true,
      created_at: '',
      updated_at: '',
    },
    {
      id: 9,
      event_type: 'other',
      name: 'Volunteer With Out Habitat for Humanity Crew',
      description: 'Learn how you can help make our community a better place!',
      start_time: '2021-04-05T10:30:00.000Z',
      end_time: '',
      start_location: '2500 West End Ave',
      end_location: '',
      image_url: '',
      thumbnail_photo: './images/nashville.jpeg',
      difficulty_level: '',
      running_distance: 13.5,
      leader: '',
      link: '',
      attendees: 532,
      promoted: true,
      created_at: '',
      updated_at: '',
    },
    {
      id: 10,
      event_type: 'daily_run',
      name: 'Nighttime Jaunt',
      description: 'Chase the dawn',
      start_time: '2021-04-05T10:30:00.000Z',
      end_time: '',
      start_location: '150 West End Ave',
      end_location: '',
      image_url: '',
      thumbnail_photo: './images/running_sillhouette.jpeg',
      difficulty_level: 'advanced',
      running_distance: 13.5,
      leader: 'Elaine Stritch',
      link: 'https://www.runnash.com/races/music-city-july-4th-virtual-5k/',
      attendees: 532,
      promoted: true,
      created_at: '',
      updated_at: '',
    },
    {
      id: 11,
      event_type: 'daily_run',
      name: 'Midnight Scamper',
      description: 'Run for your life',
      start_time: '2021-04-05T10:30:00.000Z',
      end_time: '',
      start_location: '36 West End Ave',
      end_location: '',
      image_url: '',
      thumbnail_photo: './images/nashville.jpeg',
      difficulty_level: 'beginner',
      running_distance: 1.5,
      leader: 'Hans Gruber',
      link: 'https://www.runnash.com/races/music-city-july-4th-virtual-5k/',
      attendees: 532,
      promoted: true,
      created_at: '',
      updated_at: '',
    },
  ],
};

export default data;
