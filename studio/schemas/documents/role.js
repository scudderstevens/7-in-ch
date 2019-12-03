export default {
    name: 'role',
    type: 'document',
    title: 'Role',
    description: 'Define roles for users',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        }
    ],
    preview: {
        select: {
            title: 'name'
        }
    }
}