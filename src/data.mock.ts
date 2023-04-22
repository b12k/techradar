import { RadarData } from './components';

export const data: RadarData = {
  sectors: [
    {
      name: 'S1',
      areas: [
        {
          name: 'A1',
          markers: [
            {
              name: '1',
              status: 'out'
            }
          ],
        }
      ]
    }
  ]
}

/*
export const data: Radar = {
    sectors: [
      {
        name: 'Sector 1',
        areas: [
          {
            name: 'Area 1',
            markers: [
              {
                name: 'Marker 1',
                status: 'stay',
              },
              {
                name: 'Marker 2',
                status: 'in',
              },
              {
                name: 'Marker 3',
                status: 'out',
              },
              {
                name: 'Marker 4',
                status: 'new',
              }
            ],
          },
          {
            name: 'Area 2',
            markers: [
              {
                name: 'Marker 1',
                status: 'stay',
              },
              {
                name: 'Marker 2',
                status: 'in',
              },
              {
                name: 'Marker 3',
                status: 'out',
              },
              {
                name: 'Marker 4',
                status: 'new',
              }
            ],
          },
        ],
      },
      {
        name: 'Sector 2',
        areas: [
          {
            name: 'Area 1',
            markers: [
              {
                name: 'Marker 1',
                status: 'stay',
              },
              {
                name: 'Marker 2',
                status: 'in',
              },
              {
                name: 'Marker 3',
                status: 'out',
              },
              {
                name: 'Marker 4',
                status: 'new',
              }
            ],
          },
          {
            name: 'Area 2',
            markers: [
              {
                name: 'Marker 1',
                status: 'stay',
              },
              {
                name: 'Marker 2',
                status: 'in',
              },
              {
                name: 'Marker 3',
                status: 'out',
              },
              {
                name: 'Marker 4',
                status: 'new',
              }
            ],
          },
        ],
      },
    ],
  };
*/