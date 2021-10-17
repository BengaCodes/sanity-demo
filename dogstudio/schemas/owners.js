/* eslint-disable import/no-anonymous-default-export */
export default {
  name : 'owner',
  title: 'Owner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Owners name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Owner Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint'
    },
    {
      name: 'dog',
      type: 'object',
      fields: [
        {
          title: 'Dog',
          name: 'dog',
          type: 'reference',
          to: [{type: 'dog'}]
        }
      ]
    }
  ]
}