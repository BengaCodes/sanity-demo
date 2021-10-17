/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'dog',
  title: 'Dog',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dogs name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'breed',
      title: 'Dogs breed',
      type: 'string'
    },
    {
      name: 'age',
      title: 'Dogs age',
      type: 'number'
    },
    {
      name: 'bio',
      title: 'Dogs bio',
      type: 'array',
      of : [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ]
    },
    {
      name: 'owner',
      type: 'object',
      fields: [
        {
          title: 'Owner',
          name: 'owner',
          type: 'reference',
          to: {type: 'owner'}
        }
      ]
    }
  ]
}