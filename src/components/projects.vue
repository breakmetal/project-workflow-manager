<template>
  <v-data-table
    :headers="headers"
    :items="projects"
    :items-per-page="8"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
    data() {
        return{
            headers: [
                {
                    text: 'Title',
                    align: 'left',
                    sortable: false,
                    value: 'title',
                },
                {
                    text: 'Description',
                    align: 'left',
                    sortable: false,
                    value: 'description',
                },
            ],
            projects: [
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
                {
                    title: 'project',
                    description: 'blablalablalbla'
                },
            ]

        }
    }
}
</script>